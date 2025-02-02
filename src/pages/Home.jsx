import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        padding: '2rem',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '12px'
      }}>
        {/* Contenu existant */}
        <img 
          src="/path/to/your/photo.jpg" 
          alt="Melchior Arrouche" 
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '3px solid white',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
          }}
        />
        
        <h1 style={{ 
          color: 'white',
          fontSize: '2.5rem',
          textAlign: 'center'
        }}>
          Portfolio Melchior
        </h1>
        
        <p style={{ 
          color: 'white',
          fontSize: '1.2rem',
          textAlign: 'center',
          maxWidth: '800px',
          lineHeight: '1.6'
        }}>
          J'utiliserai ce portfolio pour vous montrer les différents projets et dossiers 
          que j'ai réalisés durant mes deux années au BTS
        </p>
      </div>
      <Footer />
    </Layout>
  )
} 