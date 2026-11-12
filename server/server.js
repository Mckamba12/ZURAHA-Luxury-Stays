/**
 * ZURAHA Luxury Stays - Local API Server
 * 
 * Powered by Node.js native `node:http` and `server/db.js` (SQLite).
 * Runs out-of-the-box with zero npm install dependencies.
 */

const http = require("node:http");
const url = require("node:url");
const db = require("./db.js");

const PORT = process.env.PORT || 3000;

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  });
  res.end(JSON.stringify(data));
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // Handle CORS preflight
  if (method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    });
    return res.end();
  }

  // Health check
  if (method === "GET" && pathname === "/api/health") {
    return sendJson(res, 200, {
      status: "online",
      database: "connected",
      properties_count: 100,
      timestamp: new Date().toISOString()
    });
  }

  // Stats
  if (method === "GET" && pathname === "/api/stats") {
    return sendJson(res, 200, db.getStats());
  }

  // Destinations list
  if (method === "GET" && pathname === "/api/destinations") {
    return sendJson(res, 200, {
      destinations: db.getDestinations()
    });
  }

  // Search stays
  // Supports: /api/stays?destination=Harare&type=Hotel&guests=2&minPrice=100&maxPrice=1000
  if (method === "GET" && pathname === "/api/stays") {
    const {
      destination,
      checkin,
      checkout,
      guests = "2",
      type,
      minPrice,
      maxPrice,
      limit = "50",
      offset = "0"
    } = parsedUrl.query;

    // Validate stay dates if provided
    if (checkin && checkout) {
      if (
        !Number.isFinite(Date.parse(checkin)) ||
        !Number.isFinite(Date.parse(checkout)) ||
        checkout <= checkin
      ) {
        return sendJson(res, 400, {
          error: "Please provide valid stay dates where checkout is after checkin."
        });
      }
    }

    if (guests && (!Number.isInteger(Number(guests)) || Number(guests) < 1)) {
      return sendJson(res, 400, {
        error: "Guests must be a positive integer."
      });
    }

    const results = db.getStays({
      destination,
      type,
      guests: Number(guests),
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      limit: Number(limit),
      offset: Number(offset)
    });

    return sendJson(res, 200, {
      query: {
        destination: destination || "all",
        checkin: checkin || null,
        checkout: checkout || null,
        guests: Number(guests),
        type: type || "All"
      },
      count: results.length,
      results
    });
  }

  // Single stay details: /api/stays/:id
  if (method === "GET" && pathname.startsWith("/api/stays/")) {
    const id = pathname.split("/")[3];
    const stay = db.getStayById(id);
    if (!stay) {
      return sendJson(res, 404, { error: `Stay with ID ${id} not found.` });
    }
    return sendJson(res, 200, stay);
  }

  // Bookings list: /api/bookings
  if (method === "GET" && pathname === "/api/bookings") {
    const { hotel_id } = parsedUrl.query;
    return sendJson(res, 200, {
      bookings: db.getBookings(hotel_id ? Number(hotel_id) : null)
    });
  }

  // Create booking: POST /api/bookings
  if (method === "POST" && pathname === "/api/bookings") {
    try {
      const body = await parseJsonBody(req);
      const { hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms } = body;

      if (!hotel_id || !guest_name || !check_in || !check_out) {
        return sendJson(res, 400, {
          error: "hotel_id, guest_name, check_in, and check_out are required."
        });
      }

      if (check_out <= check_in) {
        return sendJson(res, 400, {
          error: "check_out date must be after check_in date."
        });
      }

      const booking = db.createBooking({
        hotelId: hotel_id,
        guestName: guest_name,
        guestEmail: guest_email,
        checkIn: check_in,
        checkOut: check_out,
        guests: guests || 1,
        rooms: rooms || 1
      });

      return sendJson(res, 201, {
        message: "Booking confirmed successfully.",
        booking
      });
    } catch (err) {
      return sendJson(res, 400, { error: err.message });
    }
  }

  // 404
  return sendJson(res, 404, {
    error: "Endpoint not found",
    available_endpoints: [
      "GET  /api/health",
      "GET  /api/stats",
      "GET  /api/destinations",
      "GET  /api/stays?destination=Harare&type=Resorts&guests=2",
      "GET  /api/stays/:id",
      "GET  /api/bookings",
      "POST /api/bookings"
    ]
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`  ZURAHA API Server running on port ${PORT}     `);
    console.log(`  http://localhost:${PORT}/api/health           `);
    console.log(`  http://localhost:${PORT}/api/stays            `);
    console.log(`===============================================`);
  });
}

module.exports = server;
