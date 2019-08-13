import React from "react";

export default function CountryList({ countries, showHandler }) {
  return (
    <div>
      {countries.map(country => (
        <div key={country.alpha3Code}>
            {country.name}
            <button onClick={showHandler} value={country.name}>show</button>
        </div>
      ))}
    </div>
  );
}
