import React from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../config/theme'
import PageTransition from './PageTransition'


export default function Layout({ children }) {
  return (
    <PageTransition>
      <div style={{
        width: '100vw',
        height: '100vh',
        background: '#202020',
        position: 'relative',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Contenu principal */}
        <div style={{
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.95)',
          padding: '20px',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          overflow: 'hidden'
        }}>
          {/* Navigation */}
          <nav style={{
            background: '#212529',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            borderRadius: '8px',
            fontSize: '16px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            margin: 0
          }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: 'white', opacity: 0.5 }}>/</span>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>Qui suis-je?</Link>
            <span style={{ color: 'white', opacity: 0.5 }}>/</span>
            <Link to="/bts-sio" style={{ color: 'white', textDecoration: 'none' }}>BTS SIO</Link>
            <span style={{ color: 'white', opacity: 0.5 }}>/</span>
            <Link to="/epreuve-e4" style={{ color: 'white', textDecoration: 'none' }}>E4</Link>
            <span style={{ color: 'white', opacity: 0.5 }}>/</span>
            <Link to="/epreuve-e5" style={{ color: 'white', textDecoration: 'none' }}>E5</Link>
            <span style={{ color: 'white', opacity: 0.5 }}>/</span>
            <Link to="/veille-techno" style={{ color: 'white', textDecoration: 'none' }}>Veille</Link>
          </nav>

          {/* Zone de contenu scrollable si nécessaire */}
          <div style={{
            flex: 1,
            padding: '0 20px',
            overflowY: 'auto',
            margin: 0,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
            {children}
          </div>
        </div>
      </div>
    </PageTransition>
  )
} 