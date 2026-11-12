/**
 * ZURAHA Luxury Stays - Database Initializer & Seeder
 * 
 * Uses Node.js 24's native `node:sqlite` module (zero external dependencies).
 * Creates and populates `zuraha.db` with 100 curated luxury entries.
 * Also generates/updates `zuraha.sql` for cross-database compatibility.
 */

const { DatabaseSync } = require("node:sqlite");
const fs = require("node:fs");
const path = require("node:path");
const { hotels100, sampleBookings } = require("./seed_data.js");

const DB_PATH = path.resolve(__dirname, "../zuraha.db");
const SQL_PATH = path.resolve(__dirname, "../zuraha.sql");

console.log("=================================================");
console.log("  ZURAHA LUXURY STAYS - LOCAL DATABASE BUILDER   ");
console.log("=================================================");
console.log(`Target SQLite DB: ${DB_PATH}`);

// 1. Remove existing db if any to ensure clean fresh state
if (fs.existsSync(DB_PATH)) {
  fs.unlinkSync(DB_PATH);
  console.log("✓ Cleared existing zuraha.db");
}

// 2. Open / create Database
const db = new DatabaseSync(DB_PATH);
db.exec("PRAGMA foreign_keys = ON;");
db.exec("PRAGMA journal_mode = WAL;");

// 3. Schema DDL
const schemaSql = `
-- ==============================================================
-- ZURAHA LUXURY STAYS - SCHEMA DEFINITION
-- ==============================================================

CREATE TABLE IF NOT EXISTS hotels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    destination TEXT NOT NULL,
    stay_type TEXT NOT NULL
        CHECK (stay_type IN ('Hotel', 'Villas', 'Resorts')),
    description TEXT,
    nightly_price NUMERIC(10, 2) NOT NULL
        CHECK (nightly_price >= 0),
    image_url TEXT,
    rating NUMERIC(3, 2) NOT NULL DEFAULT 4.90
        CHECK (rating >= 1.0 AND rating <= 5.0),
    bedrooms INTEGER NOT NULL DEFAULT 1
        CHECK (bedrooms > 0),
    max_guests INTEGER NOT NULL DEFAULT 2
        CHECK (max_guests > 0),
    is_active INTEGER NOT NULL DEFAULT 1
        CHECK (is_active IN (0, 1)),
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hotel_id INTEGER NOT NULL REFERENCES hotels(id) ON DELETE CASCADE,
    guest_name TEXT NOT NULL,
    guest_email TEXT,
    check_in TEXT NOT NULL,
    check_out TEXT NOT NULL,
    guests INTEGER NOT NULL CHECK (guests > 0),
    rooms INTEGER NOT NULL CHECK (rooms > 0),
    total_price NUMERIC(10, 2) CHECK (total_price >= 0),
    status TEXT NOT NULL DEFAULT 'confirmed'
        CHECK (status IN ('confirmed', 'pending', 'cancelled')),
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    CHECK (check_out > check_in)
);

CREATE INDEX IF NOT EXISTS idx_hotels_destination ON hotels(destination);
CREATE INDEX IF NOT EXISTS idx_hotels_stay_type ON hotels(stay_type);
CREATE INDEX IF NOT EXISTS idx_hotels_price ON hotels(nightly_price);
CREATE INDEX IF NOT EXISTS idx_bookings_hotel_id ON bookings(hotel_id);
CREATE INDEX IF NOT EXISTS idx_bookings_dates ON bookings(check_in, check_out);
`;

db.exec(schemaSql);
console.log("✓ Created tables 'hotels' and 'bookings' with indexes and constraints.");

// 4. Insert 100 hotel entries
const insertHotel = db.prepare(`
  INSERT INTO hotels (
    name, destination, stay_type, description, nightly_price,
    image_url, rating, bedrooms, max_guests, is_active
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
`);

db.exec("BEGIN TRANSACTION;");
for (const h of hotels100) {
  insertHotel.run(
    h.name,
    h.destination,
    h.stay_type,
    h.description,
    h.nightly_price,
    h.image_url,
    h.rating,
    h.bedrooms,
    h.max_guests
  );
}
db.exec("COMMIT;");
console.log(`✓ Inserted ${hotels100.length} luxury hotel/villa/resort properties.`);

// 5. Insert sample bookings
const insertBooking = db.prepare(`
  INSERT INTO bookings (
    hotel_id, guest_name, guest_email, check_in, check_out,
    guests, rooms, total_price, status
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

db.exec("BEGIN TRANSACTION;");
for (const b of sampleBookings) {
  insertBooking.run(
    b.hotel_id,
    b.guest_name,
    b.guest_email,
    b.check_in,
    b.check_out,
    b.guests,
    b.rooms,
    b.total_price,
    b.status
  );
}
db.exec("COMMIT;");
console.log(`✓ Inserted ${sampleBookings.length} sample booking reservations.`);

// 6. Generate pristine zuraha.sql script
let sqlDump = `-- ==============================================================
-- ZURAHA LUXURY STAYS - COMPLETE DATABASE DEFINITION & SEED DATA
-- Generated: ${new Date().toISOString()}
-- Total Properties: ${hotels100.length}
-- ==============================================================

${schemaSql.trim()}

-- ==============================================================
-- POPULATE HOTELS (${hotels100.length} ENTRIES)
-- ==============================================================
`;

for (const h of hotels100) {
  const safeName = h.name.replace(/'/g, "''");
  const safeDest = h.destination.replace(/'/g, "''");
  const safeDesc = h.description.replace(/'/g, "''");
  const safeImg = h.image_url.replace(/'/g, "''");
  sqlDump += `INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('${safeName}', '${safeDest}', '${h.stay_type}', '${safeDesc}', ${h.nightly_price.toFixed(2)}, '${safeImg}', ${h.rating.toFixed(2)}, ${h.bedrooms}, ${h.max_guests}, 1);
`;
}

sqlDump += `
-- ==============================================================
-- SAMPLE BOOKINGS (${sampleBookings.length} ENTRIES)
-- ==============================================================
`;

for (const b of sampleBookings) {
  const safeName = b.guest_name.replace(/'/g, "''");
  const safeEmail = b.guest_email.replace(/'/g, "''");
  sqlDump += `INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (${b.hotel_id}, '${safeName}', '${safeEmail}', '${b.check_in}', '${b.check_out}', ${b.guests}, ${b.rooms}, ${b.total_price.toFixed(2)}, '${b.status}');
`;
}

sqlDump += `
-- ==============================================================
-- SAMPLE QUERIES FOR ZURAHA
-- ==============================================================

-- 1. Find all active Resorts in Harare:
SELECT id, name, nightly_price, rating
FROM hotels
WHERE destination = 'Harare'
  AND stay_type = 'Resorts'
  AND is_active = 1;

-- 2. Search luxury stays in Bali with price under $500/night:
SELECT id, name, stay_type, nightly_price, rating, bedrooms
FROM hotels
WHERE destination = 'Bali'
  AND nightly_price <= 500.00
  AND is_active = 1
ORDER BY rating DESC, nightly_price ASC;

-- 3. Search stays accommodating at least 4 guests:
SELECT id, name, destination, stay_type, nightly_price, max_guests
FROM hotels
WHERE max_guests >= 4
  AND is_active = 1
ORDER BY nightly_price ASC;

-- 4. View all confirmed bookings with hotel details:
SELECT b.id AS booking_id, b.guest_name, h.name AS hotel_name, h.destination,
       b.check_in, b.check_out, b.guests, b.total_price, b.status
FROM bookings b
JOIN hotels h ON b.hotel_id = h.id
ORDER BY b.check_in ASC;

-- 5. Destination summary with average nightly price and property count:
SELECT destination,
       COUNT(*) AS total_properties,
       ROUND(AVG(nightly_price), 2) AS avg_price,
       MIN(nightly_price) AS min_price,
       MAX(nightly_price) AS max_price
FROM hotels
GROUP BY destination
ORDER BY total_properties DESC, destination ASC;
`;

fs.writeFileSync(SQL_PATH, sqlDump, "utf8");
console.log(`✓ Updated '${SQL_PATH}' with schema, all 100 seed entries, and queries.`);

// 7. Verify counts & run tests
const totalHotels = db.prepare("SELECT COUNT(*) AS count FROM hotels").get().count;
const totalBookings = db.prepare("SELECT COUNT(*) AS count FROM bookings").get().count;
const typeBreakdown = db.prepare("SELECT stay_type, COUNT(*) AS count, ROUND(AVG(nightly_price), 2) AS avg_price FROM hotels GROUP BY stay_type").all();
const priceStats = db.prepare("SELECT MIN(nightly_price) AS min_price, ROUND(AVG(nightly_price), 2) AS avg_price, MAX(nightly_price) AS max_price FROM hotels").get();
const topDests = db.prepare("SELECT destination, COUNT(*) AS count FROM hotels GROUP BY destination ORDER BY count DESC LIMIT 8").all();

console.log("\n--- DATABASE VERIFICATION SUMMARY ---");
console.log(`Total hotels in 'hotels':   ${totalHotels}`);
console.log(`Total bookings in 'bookings': ${totalBookings}`);
console.log(`Price range: $${priceStats.min_price} - $${priceStats.max_price} (avg: $${priceStats.avg_price})`);
console.log("\nBreakdown by Stay Type:");
for (const row of typeBreakdown) {
  console.log(`  - ${row.stay_type.padEnd(8)}: ${row.count} properties (avg price: $${row.avg_price}/night)`);
}
console.log("\nTop Destinations:");
for (const row of topDests) {
  console.log(`  - ${row.destination.padEnd(16)}: ${row.count} stays`);
}

// Quick Harare query test
const harareStays = db.prepare("SELECT id, name, stay_type, nightly_price FROM hotels WHERE destination = 'Harare'").all();
console.log("\nHarare Stays Test:");
for (const h of harareStays) {
  console.log(`  [ID ${h.id}] ${h.name} (${h.stay_type}) - $${h.nightly_price}/night`);
}

db.close();
console.log("\n✓ Database build and verification completed successfully!");
