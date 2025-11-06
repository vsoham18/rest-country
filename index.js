import {createRoot} from 'react-dom/client'
import {  createBrowserRouter, RouterProvider} from "react-router"
import App from './App.js'
import Home from './components/home'
import Country from './components/Country.js'
 
let router = createBrowserRouter([
    {
      path: "/",
     element: <App/>, 
     children: [
        {
            path: '/',
            element: <Home/>,
        },

        {
            path: "/:country",
            element: <Country/>
        }
     ]
    } 
  ])
  
const root=createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router} />)



