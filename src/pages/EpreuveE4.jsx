import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function EpreuveE4() {
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
            Parcours de professionnalisation - OBJECTIFS
          </h2>
          <ul style={{ 
            color: 'white',
            lineHeight: '1.6',
            paddingLeft: '1.5rem'
          }}>
            <li>Gérer le patrimoine informatique</li>
            <li>Répondre aux incidents et demandes d'assistance et d'évolution</li>
            <li>Développer la présence en ligne de l'organisation</li>
            <li>Travailler en mode projet</li>
            <li>Mettre à disposition des utilisateurs un service informatique</li>
            <li>Organiser son développement professionnel</li>
          </ul>
        </section>

        <div style={{
          display: 'flex',
          gap: '2rem'
        }}>
          {/* Section Formation */}
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
              Formation
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <a 
                href="/path/to/competences.pdf" 
                target="_blank"
                style={{
                  color: 'white',
                  textDecoration: 'underline'
                }}
              >
                Tableau de compétences (PDF)
              </a>
            </div>
          </section>

          {/* Section Entreprise */}
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
              Entreprise
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <a 
                href="/path/to/contrat.pdf" 
                target="_blank"
                style={{
                  color: 'white',
                  textDecoration: 'underline'
                }}
              >
                Mon contrat (PDF)
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  )
} 