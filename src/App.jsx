import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import BtsSio from './pages/BtsSio'
import EpreuveE4 from './pages/EpreuveE4'
import EpreuveE5 from './pages/EpreuveE5'
import VeilleTechno from './pages/VeilleTechno'
import { routes } from './config/routes'

// Import Bootstrap CSS et JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <Router>
      <div style={{ 
        position: 'relative', 
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<AboutMe />} />
          <Route path={routes.btsSio} element={<BtsSio />} />
          <Route path={routes.epreuveE4} element={<EpreuveE4 />} />
          <Route path={routes.epreuveE5} element={<EpreuveE5 />} />
          <Route path={routes.veilleTechno} element={<VeilleTechno />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 