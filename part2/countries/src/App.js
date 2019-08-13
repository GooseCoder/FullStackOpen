import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryFilter from "./CountryFilter";
import Countries from "./Countries";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const filterCountries = event => {
    setFilter(event.target.value);
    if (event.target.value !== "") {
      setShowCountries(
        countries.filter(
          country =>
            country.name
              .toLowerCase()
              .indexOf(event.target.value.toLowerCase()) >= 0
        )
      );
    } else {
      setShowCountries([]);
    }
  };

  return (
    <div>
      <CountryFilter filter={filter} filterHandler={filterCountries} />
      <Countries countries={showCountries} showHandler={filterCountries} />
    </div>
  );
}
