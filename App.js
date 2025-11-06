import Header from './components/header.js'
import { Outlet } from 'react-router'
import { ThemeProvider } from './context/ThemeContext.js'
 
export default function App() {
  return (
    <ThemeProvider>
     <Header/>
     <Outlet />
    </ThemeProvider>
  )
}
