import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default function BtsSio() {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem'
      }}>
        {/* Section principale */}
        <section style={{
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)'
        }}>
          <h2 style={{ 
            color: '#00ff00',
            marginBottom: '1rem',
            textShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
          }}>
            Qu'est ce que le BTS SIO ?
          </h2>
          <p style={{ color: '#00ff00', lineHeight: '1.6' }}>
            Le brevet de technicien supérieur aux services informatique aux organisations. 
            Une durée de deux ans qui forme aux métiers d'administrateur réseau ou de développeur. 
            Notamment peuvent continuer les études supérieur ou intégrer le monde du travail.
          </p>
          <p style={{ color: '#00ff00', lineHeight: '1.6', marginTop: '1rem' }}>
            Le BTS SIO offre deux spécialités SISR ou SLAM
          </p>
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ color: '#00ff00', marginBottom: '0.5rem' }}>SISR</h3>
            <p style={{ color: '#00ff00', lineHeight: '1.6' }}>
              SISR signifie Solutions d'infrastructures, systèmes et réseaux. La spécialisation SISR 
              du BTS SIO permet d'apprendre un métier qui consiste à installer, configurer et gérer 
              les équipements et les réseaux informatiques.
            </p>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ color: '#00ff00', marginBottom: '0.5rem' }}>SLAM</h3>
            <p style={{ color: '#00ff00', lineHeight: '1.6' }}>
              SLAM signifie Solutions Logicielles et Application Métier. La spécialisation SLAM est 
              plus orientée Développement. Elle permet d'apprendre à réaliser des logiciels, sites 
              webs, applications mobiles, mais aussi de rédiger des documentations techniques.
            </p>
          </div>
        </section>

        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'space-between'
        }}>
          {/* Méthodes et techniques */}
          <section style={{
            flex: 1,
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)'
          }}>
            <h2 style={{ 
              color: '#00ff00',
              marginBottom: '1rem',
              textShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
            }}>
              Méthodes et techniques informatiques
            </h2>
            <ul style={{ 
              color: '#00ff00',
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>Bloc 1 – Support et mise à disposition de services informatiques</li>
              <li>Bloc 2 – Option SISR – Administration des systèmes et des réseaux</li>
              <li>Bloc 2 – Option SLAM – Conception et développement d'applications</li>
              <li>Bloc 3 - Cybersécurité des services informatiques</li>
            </ul>
          </section>

          {/* Matières enseignées */}
          <section style={{
            flex: 1,
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)'
          }}>
            <h2 style={{ 
              color: '#00ff00',
              marginBottom: '1rem',
              textShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
            }}>
              Les matières enseignées
            </h2>
            <ul style={{ 
              color: '#00ff00',
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li>Culture Générale et expression</li>
              <li>Expression et communication en langue anglaise</li>
              <li>Mathématiques pour l'informatique et Algorithmique appliquée</li>
              <li>Culture Economique Juridique et Managériale</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  )
} 