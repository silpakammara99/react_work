import React, { useState, useEffect } from 'react';

// Component to display weather and image on click
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Replace this with your actual Weather API key
  const API_KEY = "YOUR_API_KEY";
  const CITY = "Bangalore"; // You can dynamically get this city from input
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

  useEffect(() => {
    // Fetch weather data from API
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setWeatherData(data.weather); // Assuming the weather information is under 'weather'
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeatherData();
  }, []);

  // Function to handle click and display image based on weather type
  const handleWeatherClick = (weatherType) => {
    setSelectedWeather(weatherType);
    switch (weatherType.toLowerCase()) {
      case 'clear':
        setImageUrl("https://example.com/sunny.jpg");
        break;
      case 'clouds':
        setImageUrl("https://example.com/cloudy.jpg");
        break;
      case 'rain':
        setImageUrl("https://example.com/rainy.jpg");
        break;
      case 'snow':
        setImageUrl("https://example.com/snowy.jpg");
        break;
      default:
        setImageUrl("https://example.com/default-weather.jpg");
        break;
    }
  };

  return (
    <div>
      <h1>Weather in {CITY}</h1>
      <ul>
        {weatherData.map((weather, index) => (
          <li key={index} onClick={() => handleWeatherClick(weather.main)}>
            {weather.main}
          </li>
        ))}
      </ul>

      {selectedWeather && (
        <div>
          <h2>Selected Weather: {selectedWeather}</h2>
          <img src={imageUrl} alt={selectedWeather} width="300" />
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
