import React from 'react'
import '../app.css'
import { UseTheme } from '../Hooks/useTheme';

export default function Header() {
   const[isdark,setisdark]= UseTheme()
  return (
    <header className={`heading ${isdark?'dark':''}`}>
        <div className="header-style">
        <h2> <a href="/">Where in the world?</a> </h2>
            <div className="theme" onClick={()=>{
               const value= (JSON.parse(localStorage.getItem('isDarkMode')));  
               localStorage.setItem('isDarkMode',!value)
               setisdark(!value)
            }}>   
                <i className={`fa-solid fa-${isdark? 'sun' : 'moon' } theme-changer`}></i>
                <span className="theme-text">{isdark?'light':'dark'} Mode</span>
            </div>
        </div>    
    </header> 
  )
}
