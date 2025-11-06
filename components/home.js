import React, { useState } from 'react'
import SearchBar from './searchBar.js'
import CountryList from './countryList.js'

import { UseTheme } from '../Hooks/useTheme.js'
 
export default function Home() {
  const [query,setQuery]=useState('')
  const[isdark]=UseTheme()
  return (
    <>
    <main className={`${isdark?'dark':''}`}>
      <SearchBar setQuery={setQuery}/>
      <CountryList query={query}/>  
    </main>
    </>
  )
} 