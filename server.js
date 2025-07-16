const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const cors = require("cors");

const app = express();
const API_KEY = process.env.WEATHER_API_KEY;

app.use(cors({
  origin: 'https://triet-banh.github.io/aRAW'
}));

// Serve static files from /docs as public cannot be found by github directory
app.use(express.static("docs"));

// Weather API route
app.get("/weather", async (req, res) => {
  const city = req.query.city || "Dallas";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching weather data");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
