import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setweatherInfo] = useState(null);

  function getWeather() {
    const apiKey = "1265feb5a39280d934547aec652d0b11";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let MT = Math.round(data.main.temp);
        let FL = Math.round(data.main.feels_like);

        const weather = {
          location: `Weather in ${data.name}`,
          temperature: `Temperature: ${MT}\u00B0C`,
          feelsLike: `Feels Like: ${FL}\u00B0C`,
          humidity: `Humidity: ${data.main.humidity} %`,
          wind: `Wind: ${data.wind.speed} km/h`,
          condition: `Weather Condition: ${data.weather[0].description}`,
        };

        setweatherInfo(weather);
      });
  }

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {weatherInfo && (
        <div className="weather-info">
          <h3>{weatherInfo.location}</h3>
          <p>{weatherInfo.temperature}</p>
          <p>{weatherInfo.feelsLike}</p>
          <p>{weatherInfo.humidity}</p>
          <p>{weatherInfo.wind}</p>
          <p>{weatherInfo.condition}</p>
        </div>
      )}
    </div>
  );
};

export default App;
