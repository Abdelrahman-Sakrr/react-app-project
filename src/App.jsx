import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Error from './Components/Error/Error'


function App() {
  // const [count, setCount] = useState(0)
  let Pagination = createHashRouter([
    {
    path:"/", 
    element:<Layout />,
    children:[
      {index :true , element:<Home/>},
      {path:"about" , element:<About/>},
      {path:"portfolio" , element:<Portfolio/>},
      {path:"contact" , element:<Contact/>},
      {path:"*" , element:<Error/>}
    ]},
  ])

  return <RouterProvider router={Pagination}></RouterProvider>
}

export default App
