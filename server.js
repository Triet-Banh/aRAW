const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const API_KEY = "32ca60dff449c5d5ff7b0b55bb4f57b7";

// Serve static files from /public
app.use(express.static("public"));

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
