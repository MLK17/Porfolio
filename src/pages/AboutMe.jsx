import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function AboutMe() {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem'
      }}>
        {/* Section À propos */}
        <section style={{
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '2rem',
          borderRadius: '12px'
        }}>
          <h2 style={{ 
            color: 'white',
            marginBottom: '1rem'
          }}>
            À propos
          </h2>
          <p style={{ color: 'white', lineHeight: '1.6' }}>
            Je me nomme Melchior Arrouche. Actuellement agé de 23 ans, je suis en deuxième 
            années de BTS SIO option SLAM (Service Informatique aux Organisation option 
            Solution Logiciel et Application Métier) à l'Efrei. J'ai choisi la filière 
            de l'informatique car je suis attiré depuis plusieurs années par l'informatique 
            et les nouvelles technologies.
          </p>
        </section>

        {/* Section Formations */}
        <section style={{
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '2rem',
          borderRadius: '12px'
        }}>
          <h2 style={{ 
            color: 'white',
            marginBottom: '1rem'
          }}>
            Formations
          </h2>
          <ul style={{ 
            color: 'white',
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <li>2023-2025 - BTS Service Informatique au Organisation au sein de l'Efrei à Villejuif.</li>
            <li>2019-2022 - Licence d'étude cinématographique au sein de l'université Paris 7 Denis Diderot à Paris 12ème (Deuxième année).</li>
            <li>2015-2018 - Baccalauréat Economique et Social au sein du lycée général et technologique Darius Millaud au Kremlin Bicêtre.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </Layout>
  )
} 