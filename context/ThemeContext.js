import { createContext, useState } from "react";

export const ThemeContext = createContext()

export  function ThemeProvider({children}){
     const [isdark,setisdark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))
     return (
        <ThemeContext.Provider value={[isdark, setisdark]}>
        {children}
      </ThemeContext.Provider>
     )
} 