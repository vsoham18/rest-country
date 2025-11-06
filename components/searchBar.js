import React from 'react'
import '../app.css'
export default function SearchBar({setQuery}) {
  return (
    <>
 <div className="search-bar">

    <div className="search-country">
       <i className="fa-solid fa-magnifying-glass"></i>
       <input  onChange={(e) => setQuery(e.target.value.toLowerCase())}
         className="search-input" type="text" placeholder="search for a country..."/>
    </div>

    <select className="search-region" onChange={(e)=>setQuery(e.target.value.toLowerCase())}>
       <option hidden>Filter by Region</option>
       <option value="Africa">Africa</option>
       <option value="Americas">Americas</option>
       <option value="Asia">Asia</option>
       <option value="Europe">Europe</option>
       <option value="Oceania">Oceanea</option>
    </select>
  </div>
    </>
  )
}
