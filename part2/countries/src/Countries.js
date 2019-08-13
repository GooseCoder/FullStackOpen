import React from 'react'
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import CountryWarning from './CountryWarning';

export default function Countries({countries, showHandler}) {
    if (countries.length > 10) {
        return <CountryWarning />;
      }
      if (countries.length === 1) {
        const country = countries[0];
        return <CountryDetail country={country} />;
      }
      return (
        <CountryList countries={countries} showHandler={showHandler}/>
      );
}
