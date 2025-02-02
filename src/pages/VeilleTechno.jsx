import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function VeilleTechno() {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem'
      }}>
        {/* Section Définition */}
        <section style={{
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '2rem',
          borderRadius: '12px'
        }}>
          <h2 style={{ 
            color: 'white',
            marginBottom: '1rem'
          }}>
            QU'EST-CE QUE LA VEILLE TECHNOLOGIQUE ?
          </h2>
          <p style={{ 
            color: 'white',
            lineHeight: '1.6'
          }}>
            La veille technologique, élément de la veille stratégique, consiste à surveiller 
            les évolutions techniques, les innovations dans un secteur d'activité donnée. 
            La veille technologique comprend notamment la surveillance, la collecte, le partage 
            et la diffusion d'information permettant d'anticiper ou de s'informer sur des 
            changements en matière de recherche, développement, brevet, lancement de nouveaux 
            produits, matériaux, processus, concepts, innovation de fabrication, etc…. 
            Cela a pour but d'évaluer l'impact sur l'environnement et l'organisation.
          </p>
        </section>

        {/* Section Sujets */}
        <section style={{
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '2rem',
          borderRadius: '12px'
        }}>
          <h2 style={{ 
            color: 'white',
            marginBottom: '1rem'
          }}>
            Sujets de veille
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a 
              href="/path/to/veille.docx" 
              target="_blank"
              style={{
                color: 'white',
                textDecoration: 'underline'
              }}
            >
              Consulter mes sujets de veille (Word)
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  )
} 