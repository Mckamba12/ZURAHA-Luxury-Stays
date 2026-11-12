# ZURAHA Luxury Stays

A luxury travel landing-page prototype with Hotels, Villas, Destinations, Experiences and Offers sections.

## Features
- Shared cream, charcoal and muted-gold design system
- Horizontally scrollable image-card collections with arrow controls
- Responsive mobile navigation and layouts
- Booking form with stay-type selector and date validation
- JavaScript interactions plus a typed TypeScript learning version

## Run
Open 'index.html' in a modern browser. Remote Unsplash images require an internet connection. To work offline download properly licensed images and update the image URLs in 'index.html' and 'css/styles.css'.

## TypeScript
Install Node.js, then run:
```bash
npm install
npm run build
```

The TypeScript example compiles to 'dist/main.js'. The HTML currently loads 'js/main.js', which is the runnable vanilla-JavaScript implementation. Do not load both scriptd on the same page or the form handlers will be duplicated.

## Local Database & API

Zuraha includes a local SQLite database (`zuraha.db`) populated with 100 luxury stays across hotels, villas, and resorts worldwide.

### Database Files:
- `zuraha.db` — Working local SQLite database file.
- `zuraha.sql` — Schema DDL, all 100 INSERT seed statements, sample bookings, and query examples.
- `server/db.js` — Database helper module with search, filter, booking creation, and statistics functions.
- `server/server.js` — Local REST API server connected to `zuraha.db`.

### Re-seed or Inspect the Database:
Using Node.js (v22+ native `node:sqlite`, zero npm install needed):
```bash
npm run db:init
# or
node scripts/init_db.js
```

Using Python:
```bash
npm run db:init:py
# or inspect summary
npm run db:summary:py
```

### Start the Local API Server:
```bash
npm start
# or
node server/server.js
```

### Available API Endpoints:
- `GET /api/health` — Service and database health check
- `GET /api/stats` — Overall stay statistics & price breakdown
- `GET /api/destinations` — Unique destinations and property counts
- `GET /api/stays` — Filter by `destination`, `type` (Hotel, Villas, Resorts), `guests`, `minPrice`, `maxPrice`
- `GET /api/stays/:id` — Single property details
- `GET /api/bookings` — List bookings
- `POST /api/bookings` — Create a reservation

## Limitations
This front-end prototype can now be connected to the local API server and database for real search results and bookings.

