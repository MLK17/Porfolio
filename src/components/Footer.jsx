import React from 'react'
import { content } from '../config/content'
import { theme } from '../config/theme'

export default function Footer() {
  return (
    <footer style={{
      background: theme.colors.secondary,
      padding: theme.spacing.medium,
      textAlign: 'center',
      borderRadius: theme.borderRadius.medium,
      boxShadow: theme.shadows.nav,
      marginTop: 'auto'
    }}>
      <div style={{
        color: theme.colors.text,
        fontSize: '0.9rem'
      }}>
        {content.footer.text}
      </div>
      <div style={{
        color: theme.colors.text,
        opacity: 0.7,
        fontSize: '0.8rem',
        marginTop: '0.5rem'
      }}>
        <a 
          href={`mailto:${content.email}`}
          style={{
            color: theme.colors.text,
            textDecoration: 'none'
          }}
        >
          {content.email}
        </a>
      </div>
    </footer>
  )
} 