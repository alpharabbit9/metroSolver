import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import FeaturesBar from './components/FeatureBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0515] via-[#130a24] to-[#1a0f2e]">
      <div className="min-h-screen bg-gradient-to-r from-[#0a0515]/80 via-transparent to-transparent">
        <header>  
        <FeaturesBar />
          <Navbar />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
