import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function UseTheme(){
    const [isdark,setisdark]=useContext(ThemeContext)

      return  [isdark,setisdark]   
}