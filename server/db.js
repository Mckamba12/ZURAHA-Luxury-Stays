/**
 * ZURAHA Luxury Stays - Database Layer
 * 
 * Interacts with `zuraha.db` using Node.js 24 native `node:sqlite`.
 */

const { DatabaseSync } = require("node:sqlite");
const path = require("node:path");

const DB_PATH = path.resolve(__dirname, "../zuraha.db");

let dbInstance = null;

function getDb() {
  if (!dbInstance) {
    dbInstance = new DatabaseSync(DB_PATH);
    dbInstance.exec("PRAGMA foreign_keys = ON;");
  }
  return dbInstance;
}

/**
 * Search stays with optional filters: destination, stay type, guests, price range, limit, offset
 */
function getStays({
  destination,
  type,
  guests,
  minPrice,
  maxPrice,
  limit = 20,
  offset = 0
} = {}) {
  const db = getDb();
  let query = "SELECT * FROM hotels WHERE is_active = 1";
  const params = [];

  if (destination && destination.trim() !== "" && destination.toLowerCase() !== "all") {
    query += " AND (destination LIKE ? OR name LIKE ?)";
    const wildcard = `%${destination.trim()}%`;
    params.push(wildcard, wildcard);
  }

  if (type && type !== "All stays" && type !== "all") {
    // Handle both singular and plural forms (e.g. 'Hotels' -> 'Hotel', 'Villas' -> 'Villas', 'Resorts' -> 'Resorts')
    let normalizedType = type;
    if (type.toLowerCase() === "hotels") normalizedType = "Hotel";
    if (type.toLowerCase() === "villas" || type.toLowerCase() === "villa") normalizedType = "Villas";
    if (type.toLowerCase() === "resorts" || type.toLowerCase() === "resort") normalizedType = "Resorts";

    query += " AND stay_type = ?";
    params.push(normalizedType);
  }

  if (guests && Number(guests) > 0) {
    query += " AND max_guests >= ?";
    params.push(Number(guests));
  }

  if (minPrice !== undefined && Number(minPrice) >= 0) {
    query += " AND nightly_price >= ?";
    params.push(Number(minPrice));
  }

  if (maxPrice !== undefined && Number(maxPrice) > 0) {
    query += " AND nightly_price <= ?";
    params.push(Number(maxPrice));
  }

  query += " ORDER BY rating DESC, nightly_price ASC LIMIT ? OFFSET ?";
  params.push(Number(limit), Number(offset));

  const stmt = db.prepare(query);
  return stmt.all(...params);
}

/**
 * Retrieve a single stay by ID
 */
function getStayById(id) {
  const db = getDb();
  const stmt = db.prepare("SELECT * FROM hotels WHERE id = ?");
  return stmt.get(Number(id));
}

/**
 * Retrieve all unique destinations and property counts
 */
function getDestinations() {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT destination,
           COUNT(*) as property_count,
           ROUND(AVG(nightly_price), 2) as avg_price,
           MIN(nightly_price) as min_price,
           MAX(nightly_price) as max_price
    FROM hotels
    WHERE is_active = 1
    GROUP BY destination
    ORDER BY property_count DESC, destination ASC
  `);
  return stmt.all();
}

/**
 * Create a new booking
 */
function createBooking({
  hotelId,
  guestName,
  guestEmail,
  checkIn,
  checkOut,
  guests = 1,
  rooms = 1
}) {
  const db = getDb();
  const hotel = getStayById(hotelId);
  if (!hotel) {
    throw new Error(`Hotel with ID ${hotelId} not found.`);
  }

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = checkOutDate.getTime() - checkInDate.getTime();
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
  const totalPrice = hotel.nightly_price * nights * Number(rooms);

  const stmt = db.prepare(`
    INSERT INTO bookings (
      hotel_id, guest_name, guest_email, check_in, check_out,
      guests, rooms, total_price, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'confirmed')
  `);

  stmt.run(
    Number(hotelId),
    guestName,
    guestEmail || null,
    checkIn,
    checkOut,
    Number(guests),
    Number(rooms),
    totalPrice
  );

  // Return the newly created booking
  const lastRow = db.prepare("SELECT * FROM bookings ORDER BY id DESC LIMIT 1").get();
  return {
    ...lastRow,
    hotel: {
      name: hotel.name,
      destination: hotel.destination,
      stay_type: hotel.stay_type,
      nightly_price: hotel.nightly_price
    }
  };
}

/**
 * Retrieve bookings with optional hotel details
 */
function getBookings(hotelId = null) {
  const db = getDb();
  let query = `
    SELECT b.*, h.name as hotel_name, h.destination, h.stay_type
    FROM bookings b
    JOIN hotels h ON b.hotel_id = h.id
  `;
  const params = [];

  if (hotelId) {
    query += " WHERE b.hotel_id = ?";
    params.push(Number(hotelId));
  }

  query += " ORDER BY b.check_in ASC";
  const stmt = db.prepare(query);
  return stmt.all(...params);
}

/**
 * Get aggregate database statistics
 */
function getStats() {
  const db = getDb();
  const hotelsCount = db.prepare("SELECT COUNT(*) as count FROM hotels WHERE is_active = 1").get().count;
  const bookingsCount = db.prepare("SELECT COUNT(*) as count FROM bookings").get().count;
  const priceStats = db.prepare(`
    SELECT MIN(nightly_price) as min_price,
           ROUND(AVG(nightly_price), 2) as avg_price,
           MAX(nightly_price) as max_price
    FROM hotels
    WHERE is_active = 1
  `).get();
  const typeStats = db.prepare(`
    SELECT stay_type, COUNT(*) as count, ROUND(AVG(nightly_price), 2) as avg_price
    FROM hotels
    WHERE is_active = 1
    GROUP BY stay_type
  `).all();

  return {
    total_hotels: hotelsCount,
    total_bookings: bookingsCount,
    price_stats: priceStats,
    type_breakdown: typeStats
  };
}

module.exports = {
  getDb,
  getStays,
  getStayById,
  getDestinations,
  createBooking,
  getBookings,
  getStats
};
