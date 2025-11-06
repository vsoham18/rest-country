import React, { useEffect, useState } from 'react'
import '../app.css'
import Countrycard from "./countrycard";
import Shimmer from './shimmer.js';

export default function CountryList({query}) { 
  const [countryData,setcountryData]=useState([])
 useEffect(() => {
  fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setcountryData(data);
      } else {
        console.error("Unexpected data format:", data);
        setcountryData([]);
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      setcountryData([]);
    });
}, []);

  if(countryData.length==0){
    return <Shimmer/>
  }
  return (
    <div className="country-cards">
        {countryData.filter((country)=>
           country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
           .map((country)=>{
           return <Countrycard
           key={country.name.common}
           name={country.name.common}
           flag={country.flags.svg}
           population={country.population}
           region={country.region}
           capital={country.capital?.[0]}
           data={country}
           />
        })}
        
    </div>
  )
}
