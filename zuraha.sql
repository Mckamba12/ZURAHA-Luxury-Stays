-- ==============================================================
-- ZURAHA LUXURY STAYS - COMPLETE DATABASE DEFINITION & SEED DATA
-- Generated: 2026-11-09T14:45:52.386Z
-- Total Properties: 100
-- ==============================================================

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

-- ==============================================================
-- POPULATE HOTELS (100 ENTRIES)
-- ==============================================================
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Zuraha Grand Palace', 'Harare', 'Hotel', 'A premier heritage hotel in Harare with manicured gardens, high-tea verandas, and luxury spa suites.', 310.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', 4.91, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Victoria Falls Safari Suites', 'Victoria Falls', 'Hotel', 'Elevated boutique hotel rooms nestled in indigenous bushland, overlooking a bustling game-rich watering hole.', 430.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 4.88, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('The Silo Sanctuary', 'Cape Town', 'Hotel', 'An ultra-luxury architectural beacon on the V&A Waterfront with pillowed glass windows framing Table Mountain and harbor waters.', 920.00, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', 4.96, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Constantia Winelands Manor', 'Cape Town', 'Hotel', 'Historic Dutch-Cape manor hotel nestled among century-old vineyards, offering sommelier tastings and manicured rose gardens.', 490.00, 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', 4.89, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Stone Town Arabesque Hotel', 'Zanzibar', 'Hotel', 'Restored Omani merchant house in historic Stone Town with carved mahogany balconies and rooftop Persian tea lounge.', 240.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', 4.87, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Serengeti Acacia Lodge', 'Serengeti', 'Hotel', 'Boutique timber lodge set on kopjes overlooking endless savannah grass plains, featuring an infinity pool frequented by wildlife.', 760.00, 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', 4.92, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Olare Motorogi Bush Hotel', 'Maasai Mara', 'Hotel', 'Eco-chic luxury canvas hotel in a private conservancy with high lion densities, night game drives, and starlit bush dinners.', 840.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 4.94, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('The Olive House', 'Marrakech', 'Hotel', 'A restored 18th-century riad offering intimate courtyard suites, mosaic fountain gardens, and a rooftop overlooking the Atlas Mountains.', 198.00, 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', 4.95, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Dar Ahlam Oasis', 'Marrakech', 'Hotel', 'A magical desert kasbah nestled in a tranquil palm grove, offering bespoke candlelight dinners and bespoke hammam rituals.', 750.00, 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80', 4.97, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Palais Ronsard', 'Marrakech', 'Hotel', 'A lush neoclassical retreat with scent gardens, tranquil colonnaded corridors, and private heated garden pools.', 520.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', 4.91, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('The Nile Pharaonic Suites', 'Cairo', 'Hotel', 'Palatial riverfront suites overlooking the timeless Nile, with private felucca excursions and pyramid-view terraces.', 460.00, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', 4.88, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Mahé Granite Bay Hotel', 'Seychelles', 'Hotel', 'Contemporary cliffside boutique hotel with panoramic sunset dining and private infinity plunge decks above granite shores.', 610.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 4.90, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Grand Baie Yacht Club Hotel', 'Mauritius', 'Hotel', 'Vibrant luxury nautical boutique hotel in Grand Baie with private skippered motor yacht excursions and ocean lounge.', 450.00, 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', 4.87, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Amalfi Cliffside Sanctuary', 'Amalfi Coast', 'Hotel', 'Cascading cliffside terraces above Positano with lemon grove gardens, saltwater cliff pool, and private Riva yacht charters.', 850.00, 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=1200&q=80', 4.98, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Positano Sirenuse Haven', 'Amalfi Coast', 'Hotel', 'Legendary pastel hillside hotel with antique furnishings, Michelin-starred terrace dining, and breathtaking bay panoramas.', 980.00, 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80', 4.97, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Capri Blue Grotto Cliff Hotel', 'Amalfi Coast', 'Hotel', 'Suspended over the Mediterranean on the island of Capri, with private funicular down to clear azure swimming coves.', 1100.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 4.96, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Castello di Chianti Estate', 'Tuscany', 'Hotel', 'Eleventh-century castle hotel surrounded by olive groves and Sangiovese vineyards, offering truffle hunts and thermal baths.', 690.00, 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', 4.95, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Florence Duomo Vista Residence', 'Tuscany', 'Hotel', 'Aristocratic Renaissance palace suites with frescoed ceilings and private balconies framing Brunelleschi''s terracotta dome.', 580.00, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', 4.92, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Grand Hotel Tremezzo Vista', 'Lake Como', 'Hotel', 'Art Nouveau landmark with a floating swimming pool directly on Lake Como, private parkland, and vintage water limousines.', 1300.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', 4.98, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Varenna Cliffside Haven', 'Lake Como', 'Hotel', 'Romantic lakefront hotel with wisteria-draped balconies, private boat dock, and candlelit waterside dining.', 760.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 4.93, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Hôtel de Crillon Royale', 'Paris', 'Hotel', 'Historical grandeur overlooking Place de la Concorde with Marie-Antoinette suites, bespoke sommelier service, and Baccarat crystal salons.', 1400.00, 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80', 4.99, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Le Marais Aristocratic Residence', 'Paris', 'Hotel', 'Seventeenth-century private hôtel particulier blending vaulted limestone cellars, contemporary art, and peaceful courtyard gardens.', 680.00, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', 4.92, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Gordes Luberon Bastide', 'Provence', 'Hotel', 'A suspended palace cliff hotel looking out over the Luberon valley, with terraces cascading down to heated pools.', 840.00, 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', 4.95, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Monte Carlo Grand Riviera Palace', 'French Riviera', 'Hotel', 'Belle Époque opulence on the Mediterranean with private beach club, Michelin-starred gastronomy, and superyacht harbor views.', 1550.00, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', 4.98, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Seminyak Sunset Sanctuary', 'Bali', 'Hotel', 'Sophisticated beachfront boutique hotel steps from designer dining, with private daybeds and tropical garden cocktail lounges.', 340.00, 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80', 4.91, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Oia Sunset Caldera Suites', 'Santorini', 'Hotel', 'Whitewashed cave suites carved into volcanic cliffs, featuring heated caldera-view hot tubs and unobstructed sunset vistas.', 890.00, 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80', 4.99, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Chora Cycladic Hotel', 'Mykonos', 'Hotel', 'Quiet design hotel within walking distance of Little Venice, with secluded sun courtyards and Aegean blue accents.', 490.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', 4.89, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Burj Al Khalij Palace', 'Dubai', 'Hotel', 'Soaring golden luxury on the Arabian Gulf, featuring duplex royal suites, 24-karat gold amenities, and private helicopter transfers.', 1800.00, 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80', 4.99, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Ari Atoll Overwater Haven', 'Maldives', 'Hotel', 'Intimate boutique overwater property featuring personalized marine biologist reef tours and private sunset beach dinners.', 980.00, 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', 4.94, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Palma Old Town Palace', 'Mallorca', 'Hotel', 'Gothic-Moorish converted palace with inner courtyards, rooftop plunge pool, and vaulted subterranean spa.', 440.00, 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', 4.90, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Badrutt''s Alpine Palace', 'Swiss Alps', 'Hotel', 'St. Moritz legendary palace hotel with snowy Engadin lake views, world-class alpine spa, and horse-drawn carriage transfers.', 1650.00, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', 4.99, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Aman Tokyo Sky Oasis', 'Tokyo', 'Hotel', 'Towering calm high above Otemachi, blending traditional washi paper screens, camphor wood, and panoramic skyline vistas.', 1450.00, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', 4.99, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('The Little Nell Alpine Hotel', 'Aspen', 'Hotel', 'Five-star ski-in ski-out luxury at the base of Aspen Mountain with personalized ski concierge and cozy stone hearths.', 1750.00, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80', 4.97, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Flamands Turquoise Bay Hotel', 'St. Barts', 'Hotel', 'Direct beachfront hotel on the widest white-sand bay in St. Barts with understated Parisian elegance and ocean spa.', 1400.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', 4.94, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Zuraha Highland Manor', 'Harare', 'Villas', 'An exclusive private estate in Borrowdale with rolling manicured lawns, heated lap pool, and bespoke equestrian experiences.', 480.00, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 4.98, 4, 8, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Victoria Falls Cloud Villa', 'Victoria Falls', 'Villas', 'An architectural glass and teak villa with an expansive deck offering panoramic sunsets over the dramatic Batoka Gorge.', 850.00, 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80', 4.97, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Zambezi Mist Safari Villa', 'Victoria Falls', 'Villas', 'Private thatched safari villa situated inside a wildlife reserve with an infinity waterhole viewing deck.', 790.00, 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80', 4.93, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Clifton Cliffside Manor', 'Cape Town', 'Villas', 'A modern architectural marvel cantilevered above Clifton 4th Beach with panoramic Atlantic Ocean vistas and a glass-bottom lap pool.', 1250.00, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', 4.99, 5, 10, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Boulders Beach Penguin Villa', 'Cape Town', 'Villas', 'Spectacular Simon''s Town villa with uninterrupted False Bay views and direct boardwalk access to the African penguin reserve.', 950.00, 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', 4.94, 4, 8, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Villa Bahari', 'Zanzibar', 'Villas', 'An Arabian-Swahili private oceanfront villa featuring hand-carved doors, a turquoise lap pool, and direct private beach access.', 650.00, 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', 4.96, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Angama Mara Clifftop Villa', 'Maasai Mara', 'Villas', 'Cantilevered glass villa perched high above the Great Rift Valley, inspired by Out of Africa romance with private chef service.', 1450.00, 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80', 5.00, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Villa Palmeraie Splendour', 'Marrakech', 'Villas', 'Expansive Moorish estate in the Palmeraie with 25-meter lap pool, rose gardens, private tennis court, and chef.', 1100.00, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 4.96, 5, 10, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Giza Plateau View Villa', 'Cairo', 'Villas', 'Private modernist sanctuary with floor-to-ceiling glass framing unobstructed views of the Great Pyramids at sunset.', 890.00, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', 4.92, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Anse Source d''Argent Villa', 'Seychelles', 'Villas', 'Granite boulder secluded sanctuary on La Digue with private beach access, outdoor rain showers, and catamaran anchorage.', 1450.00, 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', 4.98, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Belle Mare Ocean Villa', 'Mauritius', 'Villas', 'Contemporary Mauritian oceanfront villa with thatched gazebo dining, private infinity pool, and personal chef service.', 780.00, 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', 4.93, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Villa Ravello Vista', 'Amalfi Coast', 'Villas', 'High above the Amalfi coastline, a panoramic cliffside villa featuring classical colonnades, fragrant gardens, and infinity views.', 1600.00, 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', 4.99, 4, 8, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Villa Bellini', 'Tuscany', 'Villas', 'A sun-drenched Renaissance villa set amidst rolling cypress groves and vineyards, featuring a heated limestone pool and wine cellar.', 740.00, 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', 4.99, 5, 10, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Val d''Orcia Cypress Villa', 'Tuscany', 'Villas', 'Stone farmhouse restored with minimalist elegance, panoramic heated pool overlooking the UNESCO Val d''Orcia hills.', 950.00, 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', 4.97, 4, 8, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Castiglione del Lago Villa', 'Tuscany', 'Villas', 'Lake Trasimeno panorama villa with ancient olive grove, summer kitchen with wood-fired pizza oven, and heated pool.', 890.00, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', 4.94, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Villa Serbelloni Crest', 'Lake Como', 'Villas', 'Iconic Bellagio lakeside villa with neoclassical statues, Italian formal gardens, private marina, and heated lakeside pool.', 2100.00, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 5.00, 6, 12, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Saint-Germain Penthouse Villa', 'Paris', 'Villas', 'A light-filled triplex rooftop villa with private elevator, wraparound views of the Eiffel Tower, and a secluded garden terrace.', 1150.00, 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80', 4.97, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Maison des Pins', 'Provence', 'Villas', 'A secluded Provençal bastide bordered by lavender fields and ancient olive trees, complete with private tennis courts and shaded pergolas.', 590.00, 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', 4.97, 4, 8, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Aix-en-Provence Lavender Estate', 'Provence', 'Villas', 'Grand country estate with 300-year-old plane trees, heated lap pool, pétanque court, and private vineyard.', 1100.00, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 4.96, 5, 10, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Cap d''Antibes Coastal Villa', 'French Riviera', 'Villas', 'Historic Belle Époque coastal villa surrounded by umbrella pines with direct private ladder to crystal Mediterranean swimming.', 2400.00, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', 4.99, 5, 10, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Casa Sol Villa', 'Bali', 'Villas', 'A tranquil sanctuary nestled among Ubud rice terraces, with a private plunge pool, open-air stone bath, and teak furnishings.', 285.00, 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', 4.98, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Ubud Forest Canopy Villa', 'Bali', 'Villas', 'Suspended over the Ayung river gorge with open-air ironwood pavilions, natural spring plunge pool, and private yoga shala.', 360.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 4.95, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Villa Akrotiri Lighthouse', 'Santorini', 'Villas', 'Ultra-private cliff-edge villa on Santorini''s southern cape with panoramic Aegean horizon views and a volcanic stone infinity pool.', 1200.00, 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', 4.98, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Mykonos Windmill Villa', 'Mykonos', 'Villas', 'Architectural whitewashed villa overlooking Psarou Bay with multi-level sun decks, outdoor cinema, and deep plunge pool.', 1500.00, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 4.97, 4, 8, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Palm Jumeirah Water Villa', 'Dubai', 'Villas', 'Palatial private beach villa on the Palm crescent with private white-sand beach, infinity lap pool, and skyline panoramas.', 2200.00, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', 4.98, 5, 10, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Baa Atoll Coral Villa', 'Maldives', 'Villas', 'Secluded beachfront villa surrounded by coconut palms, with private glass-bottom living pavilion and house-reef snorkeling.', 1850.00, 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', 4.99, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Casa Montaña', 'Mallorca', 'Villas', 'A minimalist cliffside villa overlooking the Balearic Sea, with floor-to-ceiling glass, native stone terraces, and an infinity deck.', 410.00, 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80', 4.92, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Deià Mountain Cliff Villa', 'Mallorca', 'Villas', 'Bohemian luxury villa nestled beneath the Tramuntana peaks with cascading terraces down to a private Mediterranean cove.', 1350.00, 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', 4.98, 4, 8, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Sian Ka''an Biosphere Villa', 'Tulum', 'Villas', 'Off-grid eco-luxury villa between private Caribbean beach and tranquil lagoon, fully staffed with private boat captain.', 1400.00, 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', 4.98, 4, 8, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Pedregal Cliffside Villa', 'Los Cabos', 'Villas', 'Carved directly into the cliffside where the Pacific meets the Sea of Cortez, with crashing wave terraces and plunge pools.', 2200.00, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', 4.99, 5, 10, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('The Matterhorn Glass Chalet', 'Swiss Alps', 'Villas', 'Zermatt ski-in/ski-out ultra-chalet with floor-to-ceiling Matterhorn views, indoor-outdoor pool, private cinema, and chef.', 2800.00, 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80', 5.00, 5, 10, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Gion Historic Machiya Villa', 'Kyoto', 'Villas', 'Preserved 19th-century geisha district townhouse with Japanese zen garden, cedar wood soaking tub, and tea master ceremonies.', 820.00, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 4.97, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Bora Bora Turquoise Overwater Villa', 'Bora Bora', 'Villas', 'Iconic thatch-roof villa perched over neon-blue lagoon waters with direct Mount Otemanu views and glass floor viewing panels.', 2900.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 5.00, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Zuraha Sunset Resorts', 'Harare', 'Resorts', 'An elegant coastal and lakeside escape featuring private infinity pools, lush botanical gardens, and signature sunset terrace dining.', 250.00, './assets/images/resort-sunset.webp', 4.95, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('The Royal Livingstone Escarpment', 'Victoria Falls', 'Resorts', 'Perched along the Zambezi River with direct views of the rising mist, private butler service, and resident zebras roaming lush lawns.', 680.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.99, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Twelve Apostles Ocean Retreat', 'Cape Town', 'Resorts', 'A dramatic coastal sanctuary nestled between Twelve Apostles mountain peaks and the crashing Atlantic swell with sunset spa gazebo.', 540.00, 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', 4.92, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Zanzibar Spice Pavilion', 'Zanzibar', 'Resorts', 'Overwater bungalows on the pristine coral atolls of Matemwe, with dhow sailing charters and lantern-lit seafood banquets.', 420.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 4.93, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Nungwi Beach Haven', 'Zanzibar', 'Resorts', 'Powder-white sand luxury retreat surrounded by swaying coconut palms with private sunset catamaran cruises.', 380.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 4.90, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Serengeti Horizon Tented Camp', 'Serengeti', 'Resorts', 'Luxury safari pavilions tracking the great migration, with copper soaking tubs, private game drives, and starlit campfire dining.', 1100.00, 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80', 4.99, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Grumeti River Luxury Camp', 'Serengeti', 'Resorts', 'Riverside luxury tented camp positioned on the Western Corridor, featuring private plunge tubs and hot air balloon safaris.', 1350.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.98, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Mara River Safari Lodge', 'Maasai Mara', 'Resorts', 'Elevated suites over the Mara River where wildlife congregates, featuring private plunge decks and Maasai-guided safaris.', 980.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.97, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Atlas Mountain Kasbah Resort', 'Marrakech', 'Resorts', 'Berber-inspired palace fortress perched on high foothills with panoramic snow-capped Atlas views and thermal pools.', 580.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.93, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Praslin Ocean Breeze Resort', 'Seychelles', 'Resorts', 'Lush hillside pavilions overlooking turquoise lagoons, with private infinity pools and guided Vallée de Mai botanical walks.', 890.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 4.94, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Le Morne Peninsula Haven', 'Mauritius', 'Resorts', 'A world-class beachfront resort tucked beneath the iconic UNESCO Le Morne Brabant mountain with turquoise lagoon views.', 620.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.95, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Praiano Sunset Coastal Resort', 'Amalfi Coast', 'Resorts', 'Terraced Mediterranean resort perched in quiet Praiano with infinity pools looking straight into the setting sun.', 740.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.91, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Torno Lakeside Resort', 'Lake Como', 'Resorts', 'Contemporary glass and natural stone resort on eastern shores with private spa grottoes and seaplane touring.', 1150.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.95, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Uluwatu Clifftop Retreat', 'Bali', 'Resorts', 'Modern bamboo and limestone villas balancing atop 100-meter cliffs with sweeping Indian Ocean sunset views.', 720.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 4.97, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Nusa Dua Ocean Palace', 'Bali', 'Resorts', 'Gilded Balinese water palace resort set across cascading lagoon pools with white sand beach and traditional gamelan gardens.', 520.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.94, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Imerovigli Sky Resort', 'Santorini', 'Resorts', 'Perched at the highest rim of the caldera, offering minimalist Cycladic architecture and subterranean sensory spa suites.', 780.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.95, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Alefkandra Beach Resort', 'Mykonos', 'Resorts', 'Barefoot luxury resort with bohemian driftwood styling, private cabanas, and world-class sunset DJ sessions.', 720.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 4.93, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Bab Al Shams Desert Resort', 'Dubai', 'Resorts', 'A traditional desert fortress sanctuary nestled among sand dunes, with infinity pool desert views and falconry experiences.', 650.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.94, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Soneva Blue Atoll Sanctuary', 'Maldives', 'Resorts', 'Multi-level overwater villa with retractable bedroom roof for stargazing, curved water slide into the lagoon, and private catamaran.', 2400.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 5.00, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('North Malé Lagoon Retreat', 'Maldives', 'Resorts', 'Luminous overwater villas floating on calm turquoise waters with sunset hammocks and underwater wine cellar dining.', 1350.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.97, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Formentor Coastal Reserve', 'Mallorca', 'Resorts', 'Pine-scented seaside sanctuary with secluded rocky bays, classical sailing regattas, and fine Mediterranean dining.', 820.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.95, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('The Cove', 'Tulum', 'Resorts', 'An eco-luxe beachfront hideaway with thatched roof palapas, private cenote plunge pools, and open-fire coastal gastronomy.', 325.00, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', 4.96, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Azulik Jungle Temple', 'Tulum', 'Resorts', 'Ecological treehouse suites woven into the Mayan jungle canopy with hanging nets, candlelit nights, and sea-view cenote baths.', 680.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 4.94, 1, 2, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Cabo San Lucas Ocean Resort', 'Los Cabos', 'Resorts', 'Beachfront resort with swim-up agave bars, private cabanas, and oceanfront dining overlooking El Arco.', 950.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.96, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Gstaad Pine Timber Lodge', 'Swiss Alps', 'Resorts', 'Cozy luxury lodge with rustic hand-carved wood, open fireplaces, fondue stübli, and private helicopter helipad.', 1200.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 4.95, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Kyoto Bamboo Forest Sanctuary', 'Kyoto', 'Resorts', 'Exclusive ryokan retreat along the Oi River in Arashiyama, accessible only by traditional wooden boat, with private onsens.', 1150.00, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', 4.99, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Bophut Fisherman''s Resort', 'Koh Samui', 'Resorts', 'Tranquil beachfront resort with Thai colonial architecture, serene lotus ponds, and private oceanfront dining.', 480.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.91, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Motu Tautau Polynesian Resort', 'Bora Bora', 'Resorts', 'Private islet retreat surrounded by coral gardens, featuring canoe breakfast delivery and an overwater sunset bar.', 1850.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 4.98, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Snowmass Pine Grove Resort', 'Aspen', 'Resorts', 'Year-round alpine playground with heated outdoor pools, mountain biking trails, and alpine fireside dining.', 950.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 4.93, 3, 6, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Wailea Sunset Beach Resort', 'Maui', 'Resorts', 'Cascading pools and golden sands in South Maui, featuring luau dining, oceanfront cabanas, and championship golf.', 1150.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.96, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Baie de Saint-Jean Beach Resort', 'St. Barts', 'Resorts', 'Glamorous turquoise bay resort with famous beach club, coral sand beaches, and barefoot French Caribbean cuisine.', 2100.00, 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', 4.97, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Providenciales Lagoon Resort', 'Turks and Caicos', 'Resorts', 'All-suite island retreat with secluded coves, clear-bottom paddleboards, and romantic beach fire pits.', 1250.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 4.96, 2, 4, 1);
INSERT INTO hotels (name, destination, stay_type, description, nightly_price, image_url, rating, bedrooms, max_guests, is_active)
VALUES ('Baie Lazare Coral Sanctuary', 'Seychelles', 'Resorts', 'A private crescent bay resort sheltered by emerald hills with marine tortoise reserve and granite cliff plunge pools.', 940.00, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', 4.95, 2, 4, 1);

-- ==============================================================
-- SAMPLE BOOKINGS (15 ENTRIES)
-- ==============================================================
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (1, 'Elena Rostova', 'elena.rostova@example.com', '2026-12-10', '2026-12-15', 2, 1, 1550.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (4, 'Marcus Vance', 'marcus.v@example.com', '2026-11-20', '2026-11-25', 2, 1, 2450.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (8, 'Sophia Chen', 'sophia.chen@example.com', '2026-12-01', '2026-12-06', 2, 1, 990.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (14, 'Alexander Wright', 'alex.wright@example.com', '2027-04-12', '2027-04-18', 2, 1, 5100.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (21, 'Claire Dubois', 'claire.dubois@example.com', '2027-01-15', '2027-01-19', 2, 1, 5600.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (35, 'Tinashe Moyo', 'tmoyo@example.co.zw', '2026-12-22', '2026-12-28', 6, 3, 2880.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (38, 'Julian Thorne', 'jthorne@example.co.uk', '2026-12-28', '2027-01-04', 8, 4, 8750.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (47, 'Beatrice Moretti', 'b.moretti@example.it', '2027-05-10', '2027-05-17', 6, 3, 5180.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (55, 'Liam O''Connor', 'liam.oc@example.com', '2027-02-14', '2027-02-21', 2, 1, 1995.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (68, 'Farai Chitepo', 'fchitepo@example.co.zw', '2026-11-25', '2026-11-28', 2, 1, 750.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (69, 'Victoria Sterling', 'vsterling@example.com', '2027-03-05', '2027-03-10', 2, 1, 3400.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (73, 'David Kim', 'david.kim@example.com', '2027-01-20', '2027-01-25', 2, 1, 5500.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (86, 'Amina Al-Mansoor', 'amina.mansoor@example.ae', '2027-02-01', '2027-02-07', 4, 2, 14400.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (89, 'Hannah Schmidt', 'hannah.s@example.de', '2026-12-18', '2026-12-24', 2, 1, 1950.00, 'confirmed');
INSERT INTO bookings (hotel_id, guest_name, guest_email, check_in, check_out, guests, rooms, total_price, status)
VALUES (98, 'Robert Taylor', 'rtaylor@example.com', '2027-06-01', '2027-06-07', 4, 2, 6900.00, 'confirmed');

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
