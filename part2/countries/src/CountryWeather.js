import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CountryWeather({ capital }) {
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://api.apixu.com/v1/current.json?key=11e2f0d5a4c6411385d14620190708&q=${capital}`
      )
      .then(response => {
        setTemperature(response.data.current.temp_c + " Celcius");
        setIcon(response.data.current.condition.icon);
        setWind(
          response.data.current.wind_kph +
            " kph " +
            response.data.current.wind_dir
        );
      });
  }, [capital]);
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>
        <b>temperature:</b> {temperature}
      </div>
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <b>wind:</b> {wind}
      </div>
    </div>
  );
}
