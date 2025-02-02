import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const separatorStyle = {
    color: 'white',
    padding: '0 10px',
    fontWeight: '200',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    opacity: '0.5'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ 
      height: '60px',
      zIndex: 1000
    }}>
      <div className="container-fluid">
        <span className="navbar-brand" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
          MELCHIOR ARROUCHE
        </span>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-items-center h-100">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Accueil</Link>
            </li>
            <li className="nav-item h-100"><span style={separatorStyle}>/</span></li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Qui suis-je?</Link>
            </li>
            <li className="nav-item h-100"><span style={separatorStyle}>/</span></li>
            <li className="nav-item">
              <Link className="nav-link" to="/bts-sio" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>BTS SIO</Link>
            </li>
            <li className="nav-item h-100"><span style={separatorStyle}>/</span></li>
            <li className="nav-item">
              <Link className="nav-link" to="/epreuve-e4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Epreuve E4</Link>
            </li>
            <li className="nav-item h-100"><span style={separatorStyle}>/</span></li>
            <li className="nav-item">
              <Link className="nav-link" to="/epreuve-e5" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Epreuve E5</Link>
            </li>
            <li className="nav-item h-100"><span style={separatorStyle}>/</span></li>
            <li className="nav-item">
              <Link className="nav-link" to="/veille-techno" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>Veille technologique</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
} 