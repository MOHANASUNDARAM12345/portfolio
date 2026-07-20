import React, { useEffect, useState } from "react";
import "./Weather.css";

function Weather() {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const API_KEY = "8e3797e1fc0bf9e9363914e4f4973e13";

  useEffect(() => {

    setError("");
    setWeather(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        try {

          const API_URL =
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

          console.log("API URL:", API_URL);

          const response = await fetch(API_URL);

          const data = await response.json();

          console.log("Weather Data:", data);

          if (data.cod !== 200) {
            setError(data.message);
            setLoading(false);
            return;
          }

          setWeather(data);
          setLoading(false);

        } catch (err) {

          console.log(err);
          setError("Unable to fetch weather data");
          setLoading(false);

        }

      },

      (error) => {

        console.log("Location Error:", error);

        if (error.code === 1) {
          setError("Location permission denied");
        } 
        else if (error.code === 2) {
          setError("Location unavailable");
        } 
        else if (error.code === 3) {
          setError("Location request timeout");
        } 
        else {
          setError("Unknown location error");
        }

        setLoading(false);

      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }

    );

  }, []);


  return (

    <div className="weather">

      <h2>🌤 Weather</h2>

      {loading && (
        <p>Loading weather...</p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {weather && (

        <div className="weather-info">

          <h3>
            📍 {weather.name}, {weather.sys.country}
          </h3>

          <h1>
            {Math.round(weather.main.temp)}°C
          </h1>

          <p>
            🌥 {weather.weather[0].description}
          </p>

          <p>
            💧 Humidity : {weather.main.humidity}%
          </p>

          <p>
            💨 Wind : {Math.round(weather.wind.speed * 3.6)} km/h
          </p>

          <p>
            🌡 Feels Like : {Math.round(weather.main.feels_like)}°C
          </p>

        </div>

      )}

    </div>

  );

}

export default Weather;