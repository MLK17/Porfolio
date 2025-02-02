import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function EpreuveE5() {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem'
      }}>
        {/* Section Objectifs */}
        <section style={{
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '2rem',
          borderRadius: '12px'
        }}>
          <h2 style={{ 
            color: 'white',
            marginBottom: '1rem'
          }}>
            OBJECTIFS
          </h2>
          <ul style={{ 
            color: 'white',
            lineHeight: '1.6',
            paddingLeft: '1.5rem'
          }}>
            <li>Concevoir une solution d'infrastructure réseau</li>
            <li>Installer, tester et déployer une solution d'infrastructure réseau</li>
            <li>Exploiter, dépanner et superviser une infrastructure réseau</li>
          </ul>
        </section>

        {/* Section Projets */}
        <div style={{
          display: 'flex',
          gap: '2rem'
        }}>
          {/* Projet 1 */}
          <section style={{
            flex: 1,
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '2rem',
            borderRadius: '12px'
          }}>
            <h2 style={{ 
              color: 'white',
              marginBottom: '1rem'
            }}>
              Projet 1
            </h2>
            <div style={{
              color: 'white',
              lineHeight: '1.6'
            }}>
              <p>Description du projet 1...</p>
              <a 
                href="/path/to/projet1.pdf" 
                target="_blank"
                style={{
                  color: 'white',
                  textDecoration: 'underline',
                  marginTop: '1rem',
                  display: 'inline-block'
                }}
              >
                Voir le projet (PDF)
              </a>
            </div>
          </section>

          {/* Projet 2 */}
          <section style={{
            flex: 1,
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '2rem',
            borderRadius: '12px'
          }}>
            <h2 style={{ 
              color: 'white',
              marginBottom: '1rem'
            }}>
              Projet 2
            </h2>
            <div style={{
              color: 'white',
              lineHeight: '1.6'
            }}>
              <p>Description du projet 2...</p>
              <a 
                href="/path/to/projet2.pdf" 
                target="_blank"
                style={{
                  color: 'white',
                  textDecoration: 'underline',
                  marginTop: '1rem',
                  display: 'inline-block'
                }}
              >
                Voir le projet (PDF)
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  )
} 