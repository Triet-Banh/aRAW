// Fetch weather data from your backend endpoint '/weather' with optional city query
fetch("/weather?city=Dallas")
  .then((res) => res.json())  // Parse the JSON response
  .then((data) => {
    // Extract temperature, description, and weather icon from API response
    const temp = Math.round(data.main.temp); // Round temperature to nearest degree
    const desc = data.weather[0].description; // Weather description (e.g., "clear sky")
    const icon = data.weather[0].icon; // Icon code to display weather image
    
    // Update the text content of the weather-info paragraph
    document.getElementById("weather-info").textContent = `${temp}°F – ${desc}`;

    // Update the image source and alt text of the weather-image img
    const weatherImg = document.getElementById("weather-image");
    weatherImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherImg.alt = desc;
  })
  .catch((err) => {
    // Show error message if fetching weather data fails
    document.getElementById("weather-image").textContent = "Could not load weather.";
    console.error("Error fetching weather:", err);
  });
