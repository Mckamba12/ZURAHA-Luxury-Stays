CREATE TABLE hotels (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    destination VARCHAR(120) NOT NULL,
    stay_type VARCHAR(120) NOT NULL
        CHECK (stay_type IN ('Hotel', 'Villas', 'Resorts')),
    description TEXT,
    nightly_price NUMRIC(10, 2) NOT NULL
        CHECK (nightly_price => 0),
    image_url TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE bookings (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    hotel_id BIGINT NOT NULL REFERENCES hotels(id),
    guest_name VARCHAR(150) NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guests INTEGER NOT NULL CHECK (guests > 0),
    rooms INTEGER NOT NULL CHECK (rooms > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (check_out > check_in)
);

-- Add a sample hotel
INSERT INTO hotels (
    name, destination, stay_type,
    description, nightly_price, image_url
);

VALUES (
    'Zuraha Sunset Resorts',
    'Harare',
    'Resorts',
    'An Elegant coastal escape.',
    250.00,
    './assets/images/resort-sunset.webp'
);

-- Find resorts in Harare
SELECT id, name, nightly_price
FROM hotels
WHERE destination ILIKE 'Harare'
    AND stay_type = 'Resorts'
    AND is_active = TRUE;