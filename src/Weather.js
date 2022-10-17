import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function showTemperature(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=197ef3a642b76eef90e131866f74a0a0&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}ºC;</li>
          <li>Description: {weather.Description} </li>
          <li>Wind:{Math.round(weather.wind)}%</li>
          <li>Humidity: {Math.round(weather.humidity)}m/h;</li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather Icon" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
