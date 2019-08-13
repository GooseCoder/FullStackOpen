import React from 'react'
import CountryWeather from './CountryWeather';

export default function CountryDetail({country}) {
    
    return (
        <div>
            <h1>{country.name}</h1>
            <div>Capital {country.capital}</div>
            <div>Population {country.population}</div>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="flag" height="100px"/>
            <CountryWeather capital={country.capital}/>
        </div>
    )
}
