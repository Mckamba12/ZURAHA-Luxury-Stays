const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "online" });
});

app.get("/api/stays", (req, res) => {

    const {
        destination,
        checkin,
        checkout,
        guests = "2",
        type = "Hotel"
    } = req.query;

    if (!destination || !checkin || !checkout) {
        return res.status(400).json({
            error: "Destination and dates are required."
        });
    }

    if (
        !Number.isFinite(Date.parse(checkin)) ||
        !Number.isFinite(Date.parse(checkout)) ||
        checkout <= checkin
    ) {
        return res.status(400).json({
            error: "Please provide valid stay dates."
          });
    }

    if (!Number.isInteger(Number(guests)) ||
        Number(guests) < 1) {
        return res.status(400).json({
            error: "Guests must be at least 1."    
        });
    }

    res.json({
        destination,
        checkin,
        checkout,
        guests: Number(guests),
        type,
        results: [],
        message: "Search validated; connect a hotel database next."
    });
});

app.listen(3000, () => {
    console.log("Zuraha API listening on port 5500");
});