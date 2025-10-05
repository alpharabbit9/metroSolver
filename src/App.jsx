import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import FeaturesBar from './components/FeatureBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     
     <header>
      <FeaturesBar/>
      <Navbar/>
     </header>

     <main>
      <Outlet/>
     </main>

     <footer>
      <Footer/>
     </footer>
    </div>
  )
}

export default App
