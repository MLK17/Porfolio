import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      position: 'fixed',
      bottom: '20px',
      left: '0',
      width: '100%',
      textAlign: 'center',
      color: 'white',
      padding: '1rem',
      background: 'rgba(0, 0, 0, 0.8)'
    }}>
      <p>Portfolio Melchior</p>
      <a 
        href="mailto:melchior.a2r@gmail.com"
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        melchior.a2r@gmail.com
      </a>
    </footer>
  )
} 