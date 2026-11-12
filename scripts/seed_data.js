// Exact 100 curated luxury entries for ZURAHA Luxury Stays
// 34 Hotels, 33 Villas, 33 Resorts = 100 Stays

const hotels100 = [
  // ===================== HOTELS (34) =====================
  {
    name: "Zuraha Grand Palace",
    destination: "Harare",
    stay_type: "Hotel",
    description: "A premier heritage hotel in Harare with manicured gardens, high-tea verandas, and luxury spa suites.",
    nightly_price: 310.00,
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    rating: 4.91,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Victoria Falls Safari Suites",
    destination: "Victoria Falls",
    stay_type: "Hotel",
    description: "Elevated boutique hotel rooms nestled in indigenous bushland, overlooking a bustling game-rich watering hole.",
    nightly_price: 430.00,
    image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.88,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "The Silo Sanctuary",
    destination: "Cape Town",
    stay_type: "Hotel",
    description: "An ultra-luxury architectural beacon on the V&A Waterfront with pillowed glass windows framing Table Mountain and harbor waters.",
    nightly_price: 920.00,
    image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Constantia Winelands Manor",
    destination: "Cape Town",
    stay_type: "Hotel",
    description: "Historic Dutch-Cape manor hotel nestled among century-old vineyards, offering sommelier tastings and manicured rose gardens.",
    nightly_price: 490.00,
    image_url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.89,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Stone Town Arabesque Hotel",
    destination: "Zanzibar",
    stay_type: "Hotel",
    description: "Restored Omani merchant house in historic Stone Town with carved mahogany balconies and rooftop Persian tea lounge.",
    nightly_price: 240.00,
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    rating: 4.87,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Serengeti Acacia Lodge",
    destination: "Serengeti",
    stay_type: "Hotel",
    description: "Boutique timber lodge set on kopjes overlooking endless savannah grass plains, featuring an infinity pool frequented by wildlife.",
    nightly_price: 760.00,
    image_url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.92,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Olare Motorogi Bush Hotel",
    destination: "Maasai Mara",
    stay_type: "Hotel",
    description: "Eco-chic luxury canvas hotel in a private conservancy with high lion densities, night game drives, and starlit bush dinners.",
    nightly_price: 840.00,
    image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "The Olive House",
    destination: "Marrakech",
    stay_type: "Hotel",
    description: "A restored 18th-century riad offering intimate courtyard suites, mosaic fountain gardens, and a rooftop overlooking the Atlas Mountains.",
    nightly_price: 198.00,
    image_url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Dar Ahlam Oasis",
    destination: "Marrakech",
    stay_type: "Hotel",
    description: "A magical desert kasbah nestled in a tranquil palm grove, offering bespoke candlelight dinners and bespoke hammam rituals.",
    nightly_price: 750.00,
    image_url: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Palais Ronsard",
    destination: "Marrakech",
    stay_type: "Hotel",
    description: "A lush neoclassical retreat with scent gardens, tranquil colonnaded corridors, and private heated garden pools.",
    nightly_price: 520.00,
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    rating: 4.91,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "The Nile Pharaonic Suites",
    destination: "Cairo",
    stay_type: "Hotel",
    description: "Palatial riverfront suites overlooking the timeless Nile, with private felucca excursions and pyramid-view terraces.",
    nightly_price: 460.00,
    image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.88,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Mahé Granite Bay Hotel",
    destination: "Seychelles",
    stay_type: "Hotel",
    description: "Contemporary cliffside boutique hotel with panoramic sunset dining and private infinity plunge decks above granite shores.",
    nightly_price: 610.00,
    image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.90,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Grand Baie Yacht Club Hotel",
    destination: "Mauritius",
    stay_type: "Hotel",
    description: "Vibrant luxury nautical boutique hotel in Grand Baie with private skippered motor yacht excursions and ocean lounge.",
    nightly_price: 450.00,
    image_url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.87,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Amalfi Cliffside Sanctuary",
    destination: "Amalfi Coast",
    stay_type: "Hotel",
    description: "Cascading cliffside terraces above Positano with lemon grove gardens, saltwater cliff pool, and private Riva yacht charters.",
    nightly_price: 850.00,
    image_url: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Positano Sirenuse Haven",
    destination: "Amalfi Coast",
    stay_type: "Hotel",
    description: "Legendary pastel hillside hotel with antique furnishings, Michelin-starred terrace dining, and breathtaking bay panoramas.",
    nightly_price: 980.00,
    image_url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Capri Blue Grotto Cliff Hotel",
    destination: "Amalfi Coast",
    stay_type: "Hotel",
    description: "Suspended over the Mediterranean on the island of Capri, with private funicular down to clear azure swimming coves.",
    nightly_price: 1100.00,
    image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Castello di Chianti Estate",
    destination: "Tuscany",
    stay_type: "Hotel",
    description: "Eleventh-century castle hotel surrounded by olive groves and Sangiovese vineyards, offering truffle hunts and thermal baths.",
    nightly_price: 690.00,
    image_url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Florence Duomo Vista Residence",
    destination: "Tuscany",
    stay_type: "Hotel",
    description: "Aristocratic Renaissance palace suites with frescoed ceilings and private balconies framing Brunelleschi's terracotta dome.",
    nightly_price: 580.00,
    image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.92,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Grand Hotel Tremezzo Vista",
    destination: "Lake Como",
    stay_type: "Hotel",
    description: "Art Nouveau landmark with a floating swimming pool directly on Lake Como, private parkland, and vintage water limousines.",
    nightly_price: 1300.00,
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Varenna Cliffside Haven",
    destination: "Lake Como",
    stay_type: "Hotel",
    description: "Romantic lakefront hotel with wisteria-draped balconies, private boat dock, and candlelit waterside dining.",
    nightly_price: 760.00,
    image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.93,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Hôtel de Crillon Royale",
    destination: "Paris",
    stay_type: "Hotel",
    description: "Historical grandeur overlooking Place de la Concorde with Marie-Antoinette suites, bespoke sommelier service, and Baccarat crystal salons.",
    nightly_price: 1400.00,
    image_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Le Marais Aristocratic Residence",
    destination: "Paris",
    stay_type: "Hotel",
    description: "Seventeenth-century private hôtel particulier blending vaulted limestone cellars, contemporary art, and peaceful courtyard gardens.",
    nightly_price: 680.00,
    image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.92,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Gordes Luberon Bastide",
    destination: "Provence",
    stay_type: "Hotel",
    description: "A suspended palace cliff hotel looking out over the Luberon valley, with terraces cascading down to heated pools.",
    nightly_price: 840.00,
    image_url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Monte Carlo Grand Riviera Palace",
    destination: "French Riviera",
    stay_type: "Hotel",
    description: "Belle Époque opulence on the Mediterranean with private beach club, Michelin-starred gastronomy, and superyacht harbor views.",
    nightly_price: 1550.00,
    image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Seminyak Sunset Sanctuary",
    destination: "Bali",
    stay_type: "Hotel",
    description: "Sophisticated beachfront boutique hotel steps from designer dining, with private daybeds and tropical garden cocktail lounges.",
    nightly_price: 340.00,
    image_url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.91,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Oia Sunset Caldera Suites",
    destination: "Santorini",
    stay_type: "Hotel",
    description: "Whitewashed cave suites carved into volcanic cliffs, featuring heated caldera-view hot tubs and unobstructed sunset vistas.",
    nightly_price: 890.00,
    image_url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Chora Cycladic Hotel",
    destination: "Mykonos",
    stay_type: "Hotel",
    description: "Quiet design hotel within walking distance of Little Venice, with secluded sun courtyards and Aegean blue accents.",
    nightly_price: 490.00,
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    rating: 4.89,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Burj Al Khalij Palace",
    destination: "Dubai",
    stay_type: "Hotel",
    description: "Soaring golden luxury on the Arabian Gulf, featuring duplex royal suites, 24-karat gold amenities, and private helicopter transfers.",
    nightly_price: 1800.00,
    image_url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Ari Atoll Overwater Haven",
    destination: "Maldives",
    stay_type: "Hotel",
    description: "Intimate boutique overwater property featuring personalized marine biologist reef tours and private sunset beach dinners.",
    nightly_price: 980.00,
    image_url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Palma Old Town Palace",
    destination: "Mallorca",
    stay_type: "Hotel",
    description: "Gothic-Moorish converted palace with inner courtyards, rooftop plunge pool, and vaulted subterranean spa.",
    nightly_price: 440.00,
    image_url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.90,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Badrutt's Alpine Palace",
    destination: "Swiss Alps",
    stay_type: "Hotel",
    description: "St. Moritz legendary palace hotel with snowy Engadin lake views, world-class alpine spa, and horse-drawn carriage transfers.",
    nightly_price: 1650.00,
    image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Aman Tokyo Sky Oasis",
    destination: "Tokyo",
    stay_type: "Hotel",
    description: "Towering calm high above Otemachi, blending traditional washi paper screens, camphor wood, and panoramic skyline vistas.",
    nightly_price: 1450.00,
    image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "The Little Nell Alpine Hotel",
    destination: "Aspen",
    stay_type: "Hotel",
    description: "Five-star ski-in ski-out luxury at the base of Aspen Mountain with personalized ski concierge and cozy stone hearths.",
    nightly_price: 1750.00,
    image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Flamands Turquoise Bay Hotel",
    destination: "St. Barts",
    stay_type: "Hotel",
    description: "Direct beachfront hotel on the widest white-sand bay in St. Barts with understated Parisian elegance and ocean spa.",
    nightly_price: 1400.00,
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 1,
    max_guests: 2
  },

  // ===================== VILLAS (33) =====================
  {
    name: "Zuraha Highland Manor",
    destination: "Harare",
    stay_type: "Villas",
    description: "An exclusive private estate in Borrowdale with rolling manicured lawns, heated lap pool, and bespoke equestrian experiences.",
    nightly_price: 480.00,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 4,
    max_guests: 8
  },
  {
    name: "Victoria Falls Cloud Villa",
    destination: "Victoria Falls",
    stay_type: "Villas",
    description: "An architectural glass and teak villa with an expansive deck offering panoramic sunsets over the dramatic Batoka Gorge.",
    nightly_price: 850.00,
    image_url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Zambezi Mist Safari Villa",
    destination: "Victoria Falls",
    stay_type: "Villas",
    description: "Private thatched safari villa situated inside a wildlife reserve with an infinity waterhole viewing deck.",
    nightly_price: 790.00,
    image_url: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
    rating: 4.93,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Clifton Cliffside Manor",
    destination: "Cape Town",
    stay_type: "Villas",
    description: "A modern architectural marvel cantilevered above Clifton 4th Beach with panoramic Atlantic Ocean vistas and a glass-bottom lap pool.",
    nightly_price: 1250.00,
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 5,
    max_guests: 10
  },
  {
    name: "Boulders Beach Penguin Villa",
    destination: "Cape Town",
    stay_type: "Villas",
    description: "Spectacular Simon's Town villa with uninterrupted False Bay views and direct boardwalk access to the African penguin reserve.",
    nightly_price: 950.00,
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 4,
    max_guests: 8
  },
  {
    name: "Villa Bahari",
    destination: "Zanzibar",
    stay_type: "Villas",
    description: "An Arabian-Swahili private oceanfront villa featuring hand-carved doors, a turquoise lap pool, and direct private beach access.",
    nightly_price: 650.00,
    image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Angama Mara Clifftop Villa",
    destination: "Maasai Mara",
    stay_type: "Villas",
    description: "Cantilevered glass villa perched high above the Great Rift Valley, inspired by Out of Africa romance with private chef service.",
    nightly_price: 1450.00,
    image_url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    rating: 5.00,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Villa Palmeraie Splendour",
    destination: "Marrakech",
    stay_type: "Villas",
    description: "Expansive Moorish estate in the Palmeraie with 25-meter lap pool, rose gardens, private tennis court, and chef.",
    nightly_price: 1100.00,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 5,
    max_guests: 10
  },
  {
    name: "Giza Plateau View Villa",
    destination: "Cairo",
    stay_type: "Villas",
    description: "Private modernist sanctuary with floor-to-ceiling glass framing unobstructed views of the Great Pyramids at sunset.",
    nightly_price: 890.00,
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    rating: 4.92,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Anse Source d'Argent Villa",
    destination: "Seychelles",
    stay_type: "Villas",
    description: "Granite boulder secluded sanctuary on La Digue with private beach access, outdoor rain showers, and catamaran anchorage.",
    nightly_price: 1450.00,
    image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Belle Mare Ocean Villa",
    destination: "Mauritius",
    stay_type: "Villas",
    description: "Contemporary Mauritian oceanfront villa with thatched gazebo dining, private infinity pool, and personal chef service.",
    nightly_price: 780.00,
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.93,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Villa Ravello Vista",
    destination: "Amalfi Coast",
    stay_type: "Villas",
    description: "High above the Amalfi coastline, a panoramic cliffside villa featuring classical colonnades, fragrant gardens, and infinity views.",
    nightly_price: 1600.00,
    image_url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 4,
    max_guests: 8
  },
  {
    name: "Villa Bellini",
    destination: "Tuscany",
    stay_type: "Villas",
    description: "A sun-drenched Renaissance villa set amidst rolling cypress groves and vineyards, featuring a heated limestone pool and wine cellar.",
    nightly_price: 740.00,
    image_url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 5,
    max_guests: 10
  },
  {
    name: "Val d'Orcia Cypress Villa",
    destination: "Tuscany",
    stay_type: "Villas",
    description: "Stone farmhouse restored with minimalist elegance, panoramic heated pool overlooking the UNESCO Val d'Orcia hills.",
    nightly_price: 950.00,
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 4,
    max_guests: 8
  },
  {
    name: "Castiglione del Lago Villa",
    destination: "Tuscany",
    stay_type: "Villas",
    description: "Lake Trasimeno panorama villa with ancient olive grove, summer kitchen with wood-fired pizza oven, and heated pool.",
    nightly_price: 890.00,
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Villa Serbelloni Crest",
    destination: "Lake Como",
    stay_type: "Villas",
    description: "Iconic Bellagio lakeside villa with neoclassical statues, Italian formal gardens, private marina, and heated lakeside pool.",
    nightly_price: 2100.00,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    rating: 5.00,
    bedrooms: 6,
    max_guests: 12
  },
  {
    name: "Saint-Germain Penthouse Villa",
    destination: "Paris",
    stay_type: "Villas",
    description: "A light-filled triplex rooftop villa with private elevator, wraparound views of the Eiffel Tower, and a secluded garden terrace.",
    nightly_price: 1150.00,
    image_url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Maison des Pins",
    destination: "Provence",
    stay_type: "Villas",
    description: "A secluded Provençal bastide bordered by lavender fields and ancient olive trees, complete with private tennis courts and shaded pergolas.",
    nightly_price: 590.00,
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 4,
    max_guests: 8
  },
  {
    name: "Aix-en-Provence Lavender Estate",
    destination: "Provence",
    stay_type: "Villas",
    description: "Grand country estate with 300-year-old plane trees, heated lap pool, pétanque court, and private vineyard.",
    nightly_price: 1100.00,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 5,
    max_guests: 10
  },
  {
    name: "Cap d'Antibes Coastal Villa",
    destination: "French Riviera",
    stay_type: "Villas",
    description: "Historic Belle Époque coastal villa surrounded by umbrella pines with direct private ladder to crystal Mediterranean swimming.",
    nightly_price: 2400.00,
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 5,
    max_guests: 10
  },
  {
    name: "Casa Sol Villa",
    destination: "Bali",
    stay_type: "Villas",
    description: "A tranquil sanctuary nestled among Ubud rice terraces, with a private plunge pool, open-air stone bath, and teak furnishings.",
    nightly_price: 285.00,
    image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Ubud Forest Canopy Villa",
    destination: "Bali",
    stay_type: "Villas",
    description: "Suspended over the Ayung river gorge with open-air ironwood pavilions, natural spring plunge pool, and private yoga shala.",
    nightly_price: 360.00,
    image_url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Villa Akrotiri Lighthouse",
    destination: "Santorini",
    stay_type: "Villas",
    description: "Ultra-private cliff-edge villa on Santorini's southern cape with panoramic Aegean horizon views and a volcanic stone infinity pool.",
    nightly_price: 1200.00,
    image_url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Mykonos Windmill Villa",
    destination: "Mykonos",
    stay_type: "Villas",
    description: "Architectural whitewashed villa overlooking Psarou Bay with multi-level sun decks, outdoor cinema, and deep plunge pool.",
    nightly_price: 1500.00,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 4,
    max_guests: 8
  },
  {
    name: "Palm Jumeirah Water Villa",
    destination: "Dubai",
    stay_type: "Villas",
    description: "Palatial private beach villa on the Palm crescent with private white-sand beach, infinity lap pool, and skyline panoramas.",
    nightly_price: 2200.00,
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 5,
    max_guests: 10
  },
  {
    name: "Baa Atoll Coral Villa",
    destination: "Maldives",
    stay_type: "Villas",
    description: "Secluded beachfront villa surrounded by coconut palms, with private glass-bottom living pavilion and house-reef snorkeling.",
    nightly_price: 1850.00,
    image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Casa Montaña",
    destination: "Mallorca",
    stay_type: "Villas",
    description: "A minimalist cliffside villa overlooking the Balearic Sea, with floor-to-ceiling glass, native stone terraces, and an infinity deck.",
    nightly_price: 410.00,
    image_url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    rating: 4.92,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Deià Mountain Cliff Villa",
    destination: "Mallorca",
    stay_type: "Villas",
    description: "Bohemian luxury villa nestled beneath the Tramuntana peaks with cascading terraces down to a private Mediterranean cove.",
    nightly_price: 1350.00,
    image_url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 4,
    max_guests: 8
  },
  {
    name: "Sian Ka'an Biosphere Villa",
    destination: "Tulum",
    stay_type: "Villas",
    description: "Off-grid eco-luxury villa between private Caribbean beach and tranquil lagoon, fully staffed with private boat captain.",
    nightly_price: 1400.00,
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 4,
    max_guests: 8
  },
  {
    name: "Pedregal Cliffside Villa",
    destination: "Los Cabos",
    stay_type: "Villas",
    description: "Carved directly into the cliffside where the Pacific meets the Sea of Cortez, with crashing wave terraces and plunge pools.",
    nightly_price: 2200.00,
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 5,
    max_guests: 10
  },
  {
    name: "The Matterhorn Glass Chalet",
    destination: "Swiss Alps",
    stay_type: "Villas",
    description: "Zermatt ski-in/ski-out ultra-chalet with floor-to-ceiling Matterhorn views, indoor-outdoor pool, private cinema, and chef.",
    nightly_price: 2800.00,
    image_url: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
    rating: 5.00,
    bedrooms: 5,
    max_guests: 10
  },
  {
    name: "Gion Historic Machiya Villa",
    destination: "Kyoto",
    stay_type: "Villas",
    description: "Preserved 19th-century geisha district townhouse with Japanese zen garden, cedar wood soaking tub, and tea master ceremonies.",
    nightly_price: 820.00,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Bora Bora Turquoise Overwater Villa",
    destination: "Bora Bora",
    stay_type: "Villas",
    description: "Iconic thatch-roof villa perched over neon-blue lagoon waters with direct Mount Otemanu views and glass floor viewing panels.",
    nightly_price: 2900.00,
    image_url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    rating: 5.00,
    bedrooms: 2,
    max_guests: 4
  },

  // ===================== RESORTS (33) =====================
  {
    name: "Zuraha Sunset Resorts",
    destination: "Harare",
    stay_type: "Resorts",
    description: "An elegant coastal and lakeside escape featuring private infinity pools, lush botanical gardens, and signature sunset terrace dining.",
    nightly_price: 250.00,
    image_url: "./assets/images/resort-sunset.webp",
    rating: 4.95,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "The Royal Livingstone Escarpment",
    destination: "Victoria Falls",
    stay_type: "Resorts",
    description: "Perched along the Zambezi River with direct views of the rising mist, private butler service, and resident zebras roaming lush lawns.",
    nightly_price: 680.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Twelve Apostles Ocean Retreat",
    destination: "Cape Town",
    stay_type: "Resorts",
    description: "A dramatic coastal sanctuary nestled between Twelve Apostles mountain peaks and the crashing Atlantic swell with sunset spa gazebo.",
    nightly_price: 540.00,
    image_url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.92,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Zanzibar Spice Pavilion",
    destination: "Zanzibar",
    stay_type: "Resorts",
    description: "Overwater bungalows on the pristine coral atolls of Matemwe, with dhow sailing charters and lantern-lit seafood banquets.",
    nightly_price: 420.00,
    image_url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    rating: 4.93,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Nungwi Beach Haven",
    destination: "Zanzibar",
    stay_type: "Resorts",
    description: "Powder-white sand luxury retreat surrounded by swaying coconut palms with private sunset catamaran cruises.",
    nightly_price: 380.00,
    image_url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    rating: 4.90,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Serengeti Horizon Tented Camp",
    destination: "Serengeti",
    stay_type: "Resorts",
    description: "Luxury safari pavilions tracking the great migration, with copper soaking tubs, private game drives, and starlit campfire dining.",
    nightly_price: 1100.00,
    image_url: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Grumeti River Luxury Camp",
    destination: "Serengeti",
    stay_type: "Resorts",
    description: "Riverside luxury tented camp positioned on the Western Corridor, featuring private plunge tubs and hot air balloon safaris.",
    nightly_price: 1350.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Mara River Safari Lodge",
    destination: "Maasai Mara",
    stay_type: "Resorts",
    description: "Elevated suites over the Mara River where wildlife congregates, featuring private plunge decks and Maasai-guided safaris.",
    nightly_price: 980.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Atlas Mountain Kasbah Resort",
    destination: "Marrakech",
    stay_type: "Resorts",
    description: "Berber-inspired palace fortress perched on high foothills with panoramic snow-capped Atlas views and thermal pools.",
    nightly_price: 580.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.93,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Praslin Ocean Breeze Resort",
    destination: "Seychelles",
    stay_type: "Resorts",
    description: "Lush hillside pavilions overlooking turquoise lagoons, with private infinity pools and guided Vallée de Mai botanical walks.",
    nightly_price: 890.00,
    image_url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Le Morne Peninsula Haven",
    destination: "Mauritius",
    stay_type: "Resorts",
    description: "A world-class beachfront resort tucked beneath the iconic UNESCO Le Morne Brabant mountain with turquoise lagoon views.",
    nightly_price: 620.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Praiano Sunset Coastal Resort",
    destination: "Amalfi Coast",
    stay_type: "Resorts",
    description: "Terraced Mediterranean resort perched in quiet Praiano with infinity pools looking straight into the setting sun.",
    nightly_price: 740.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.91,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Torno Lakeside Resort",
    destination: "Lake Como",
    stay_type: "Resorts",
    description: "Contemporary glass and natural stone resort on eastern shores with private spa grottoes and seaplane touring.",
    nightly_price: 1150.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Uluwatu Clifftop Retreat",
    destination: "Bali",
    stay_type: "Resorts",
    description: "Modern bamboo and limestone villas balancing atop 100-meter cliffs with sweeping Indian Ocean sunset views.",
    nightly_price: 720.00,
    image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Nusa Dua Ocean Palace",
    destination: "Bali",
    stay_type: "Resorts",
    description: "Gilded Balinese water palace resort set across cascading lagoon pools with white sand beach and traditional gamelan gardens.",
    nightly_price: 520.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Imerovigli Sky Resort",
    destination: "Santorini",
    stay_type: "Resorts",
    description: "Perched at the highest rim of the caldera, offering minimalist Cycladic architecture and subterranean sensory spa suites.",
    nightly_price: 780.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Alefkandra Beach Resort",
    destination: "Mykonos",
    stay_type: "Resorts",
    description: "Barefoot luxury resort with bohemian driftwood styling, private cabanas, and world-class sunset DJ sessions.",
    nightly_price: 720.00,
    image_url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    rating: 4.93,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Bab Al Shams Desert Resort",
    destination: "Dubai",
    stay_type: "Resorts",
    description: "A traditional desert fortress sanctuary nestled among sand dunes, with infinity pool desert views and falconry experiences.",
    nightly_price: 650.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Soneva Blue Atoll Sanctuary",
    destination: "Maldives",
    stay_type: "Resorts",
    description: "Multi-level overwater villa with retractable bedroom roof for stargazing, curved water slide into the lagoon, and private catamaran.",
    nightly_price: 2400.00,
    image_url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    rating: 5.00,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "North Malé Lagoon Retreat",
    destination: "Maldives",
    stay_type: "Resorts",
    description: "Luminous overwater villas floating on calm turquoise waters with sunset hammocks and underwater wine cellar dining.",
    nightly_price: 1350.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Formentor Coastal Reserve",
    destination: "Mallorca",
    stay_type: "Resorts",
    description: "Pine-scented seaside sanctuary with secluded rocky bays, classical sailing regattas, and fine Mediterranean dining.",
    nightly_price: 820.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "The Cove",
    destination: "Tulum",
    stay_type: "Resorts",
    description: "An eco-luxe beachfront hideaway with thatched roof palapas, private cenote plunge pools, and open-fire coastal gastronomy.",
    nightly_price: 325.00,
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Azulik Jungle Temple",
    destination: "Tulum",
    stay_type: "Resorts",
    description: "Ecological treehouse suites woven into the Mayan jungle canopy with hanging nets, candlelit nights, and sea-view cenote baths.",
    nightly_price: 680.00,
    image_url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    rating: 4.94,
    bedrooms: 1,
    max_guests: 2
  },
  {
    name: "Cabo San Lucas Ocean Resort",
    destination: "Los Cabos",
    stay_type: "Resorts",
    description: "Beachfront resort with swim-up agave bars, private cabanas, and oceanfront dining overlooking El Arco.",
    nightly_price: 950.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Gstaad Pine Timber Lodge",
    destination: "Swiss Alps",
    stay_type: "Resorts",
    description: "Cozy luxury lodge with rustic hand-carved wood, open fireplaces, fondue stübli, and private helicopter helipad.",
    nightly_price: 1200.00,
    image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Kyoto Bamboo Forest Sanctuary",
    destination: "Kyoto",
    stay_type: "Resorts",
    description: "Exclusive ryokan retreat along the Oi River in Arashiyama, accessible only by traditional wooden boat, with private onsens.",
    nightly_price: 1150.00,
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.99,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Bophut Fisherman's Resort",
    destination: "Koh Samui",
    stay_type: "Resorts",
    description: "Tranquil beachfront resort with Thai colonial architecture, serene lotus ponds, and private oceanfront dining.",
    nightly_price: 480.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.91,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Motu Tautau Polynesian Resort",
    destination: "Bora Bora",
    stay_type: "Resorts",
    description: "Private islet retreat surrounded by coral gardens, featuring canoe breakfast delivery and an overwater sunset bar.",
    nightly_price: 1850.00,
    image_url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    rating: 4.98,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Snowmass Pine Grove Resort",
    destination: "Aspen",
    stay_type: "Resorts",
    description: "Year-round alpine playground with heated outdoor pools, mountain biking trails, and alpine fireside dining.",
    nightly_price: 950.00,
    image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.93,
    bedrooms: 3,
    max_guests: 6
  },
  {
    name: "Wailea Sunset Beach Resort",
    destination: "Maui",
    stay_type: "Resorts",
    description: "Cascading pools and golden sands in South Maui, featuring luau dining, oceanfront cabanas, and championship golf.",
    nightly_price: 1150.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Baie de Saint-Jean Beach Resort",
    destination: "St. Barts",
    stay_type: "Resorts",
    description: "Glamorous turquoise bay resort with famous beach club, coral sand beaches, and barefoot French Caribbean cuisine.",
    nightly_price: 2100.00,
    image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    rating: 4.97,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Providenciales Lagoon Resort",
    destination: "Turks and Caicos",
    stay_type: "Resorts",
    description: "All-suite island retreat with secluded coves, clear-bottom paddleboards, and romantic beach fire pits.",
    nightly_price: 1250.00,
    image_url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    rating: 4.96,
    bedrooms: 2,
    max_guests: 4
  },
  {
    name: "Baie Lazare Coral Sanctuary",
    destination: "Seychelles",
    stay_type: "Resorts",
    description: "A private crescent bay resort sheltered by emerald hills with marine tortoise reserve and granite cliff plunge pools.",
    nightly_price: 940.00,
    image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    bedrooms: 2,
    max_guests: 4
  }
];

const sampleBookings = [
  {
    hotel_id: 1, // Zuraha Grand Palace, Harare
    guest_name: "Elena Rostova",
    guest_email: "elena.rostova@example.com",
    check_in: "2026-12-10",
    check_out: "2026-12-15",
    guests: 2,
    rooms: 1,
    total_price: 1550.00,
    status: "confirmed"
  },
  {
    hotel_id: 4, // Constantia Winelands Manor
    guest_name: "Marcus Vance",
    guest_email: "marcus.v@example.com",
    check_in: "2026-11-20",
    check_out: "2026-11-25",
    guests: 2,
    rooms: 1,
    total_price: 2450.00,
    status: "confirmed"
  },
  {
    hotel_id: 8, // The Olive House, Marrakech
    guest_name: "Sophia Chen",
    guest_email: "sophia.chen@example.com",
    check_in: "2026-12-01",
    check_out: "2026-12-06",
    guests: 2,
    rooms: 1,
    total_price: 990.00,
    status: "confirmed"
  },
  {
    hotel_id: 14, // Amalfi Cliffside Sanctuary
    guest_name: "Alexander Wright",
    guest_email: "alex.wright@example.com",
    check_in: "2027-04-12",
    check_out: "2027-04-18",
    guests: 2,
    rooms: 1,
    total_price: 5100.00,
    status: "confirmed"
  },
  {
    hotel_id: 21, // Hôtel de Crillon Royale, Paris
    guest_name: "Claire Dubois",
    guest_email: "claire.dubois@example.com",
    check_in: "2027-01-15",
    check_out: "2027-01-19",
    guests: 2,
    rooms: 1,
    total_price: 5600.00,
    status: "confirmed"
  },
  {
    hotel_id: 35, // Zuraha Highland Manor, Harare
    guest_name: "Tinashe Moyo",
    guest_email: "tmoyo@example.co.zw",
    check_in: "2026-12-22",
    check_out: "2026-12-28",
    guests: 6,
    rooms: 3,
    total_price: 2880.00,
    status: "confirmed"
  },
  {
    hotel_id: 38, // Clifton Cliffside Manor, Cape Town
    guest_name: "Julian Thorne",
    guest_email: "jthorne@example.co.uk",
    check_in: "2026-12-28",
    check_out: "2027-01-04",
    guests: 8,
    rooms: 4,
    total_price: 8750.00,
    status: "confirmed"
  },
  {
    hotel_id: 47, // Villa Bellini, Tuscany
    guest_name: "Beatrice Moretti",
    guest_email: "b.moretti@example.it",
    check_in: "2027-05-10",
    check_out: "2027-05-17",
    guests: 6,
    rooms: 3,
    total_price: 5180.00,
    status: "confirmed"
  },
  {
    hotel_id: 55, // Casa Sol Villa, Bali
    guest_name: "Liam O'Connor",
    guest_email: "liam.oc@example.com",
    check_in: "2027-02-14",
    check_out: "2027-02-21",
    guests: 2,
    rooms: 1,
    total_price: 1995.00,
    status: "confirmed"
  },
  {
    hotel_id: 68, // Zuraha Sunset Resorts, Harare
    guest_name: "Farai Chitepo",
    guest_email: "fchitepo@example.co.zw",
    check_in: "2026-11-25",
    check_out: "2026-11-28",
    guests: 2,
    rooms: 1,
    total_price: 750.00,
    status: "confirmed"
  },
  {
    hotel_id: 69, // The Royal Livingstone Escarpment, Victoria Falls
    guest_name: "Victoria Sterling",
    guest_email: "vsterling@example.com",
    check_in: "2027-03-05",
    check_out: "2027-03-10",
    guests: 2,
    rooms: 1,
    total_price: 3400.00,
    status: "confirmed"
  },
  {
    hotel_id: 73, // Serengeti Horizon Tented Camp
    guest_name: "David Kim",
    guest_email: "david.kim@example.com",
    check_in: "2027-01-20",
    check_out: "2027-01-25",
    guests: 2,
    rooms: 1,
    total_price: 5500.00,
    status: "confirmed"
  },
  {
    hotel_id: 86, // Soneva Blue Atoll Sanctuary, Maldives
    guest_name: "Amina Al-Mansoor",
    guest_email: "amina.mansoor@example.ae",
    check_in: "2027-02-01",
    check_out: "2027-02-07",
    guests: 4,
    rooms: 2,
    total_price: 14400.00,
    status: "confirmed"
  },
  {
    hotel_id: 89, // The Cove, Tulum
    guest_name: "Hannah Schmidt",
    guest_email: "hannah.s@example.de",
    check_in: "2026-12-18",
    check_out: "2026-12-24",
    guests: 2,
    rooms: 1,
    total_price: 1950.00,
    status: "confirmed"
  },
  {
    hotel_id: 98, // Wailea Sunset Beach Resort, Maui
    guest_name: "Robert Taylor",
    guest_email: "rtaylor@example.com",
    check_in: "2027-06-01",
    check_out: "2027-06-07",
    guests: 4,
    rooms: 2,
    total_price: 6900.00,
    status: "confirmed"
  }
];

module.exports = { hotels100, sampleBookings };
