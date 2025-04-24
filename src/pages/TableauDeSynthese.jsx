import React, { useState, useEffect } from 'react'
import { StyledContent, CardContainer, StyledCard } from '../components/ui/Cards'
import { FileText, Download, FileDown } from 'lucide-react'

export default function TableauDeSynthese() {
  const pdfUrl = "/BTS SIO-Tableau de synthèse.pdf"
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsLaptop(width > 768 && width <= 1366);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0rem',
    width: '100%',
    height: '100%',
    maxWidth: '1800px',
    margin: '0 auto',
    paddingBottom: isMobile ? '4rem' : '8rem',
  };

  const presentationStyles = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    paddingTop: isMobile ? '2rem' : '4rem',
  };

  const presentationCardStyles = {
    flex: 1,
    maxWidth: '1400px',
    minWidth: isMobile ? '300px' : '400px',
    height: 'min(180px, 28vh)',
  };

  const cardContentStyles = {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    alignItems: 'center',
    padding: isMobile ? '1rem 0' : '1.5rem 0',
  };

  const titleStyles = {
    color: 'white',
    margin: 0,
    fontSize: isMobile ? '1.2rem' : '1.8rem',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '0.5rem',
  };

  const descriptionStyles = {
    color: 'white',
    lineHeight: '1.5',
    textAlign: 'center',
    fontSize: isMobile ? '0.8rem' : '1.2rem',
    maxWidth: '800px',
    padding: isMobile ? '0 1rem' : '0 1.5rem',
    margin: 0,
  };

  const downloadSectionStyles = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: isMobile ? '1rem 0 2rem 0' : '2rem 0 3rem 0',
  };

  const downloadCardStyles = {
    padding: isMobile ? '1rem' : isLaptop ? '1.2rem' : '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1rem' : isLaptop ? '1.2rem' : '1.5rem',
    maxHeight: isMobile ? 'none' : 'calc(120vh - 10rem)',
    width: isMobile ? '100%' : isLaptop ? '95%' : 'max(1200px, 80vh)',
  };

  const contentLayoutStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'stretch' : 'flex-start',
    gap: isMobile ? '2rem' : isLaptop ? '3rem' : '6rem',
    width: '100%',
    padding: isMobile ? '0.5rem' : isLaptop ? '1rem' : '1.5rem',
  };

  const leftSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1rem' : isLaptop ? '1.2rem' : '1.5rem',
    flex: isMobile ? '1' : '0 0 auto',
    width: isMobile ? '100%' : isLaptop ? '300px' : '400px',
    borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.1)',
    paddingRight: isMobile ? '0' : isLaptop ? '1.5rem' : '3rem',
    paddingBottom: isMobile ? '1rem' : '0',
    borderBottom: isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.8rem',
    width: '100%',
  };

  const headerTitleStyles = {
    color: 'white',
    fontSize: isMobile ? '0.9rem' : isLaptop ? '1.1rem' : '1.4rem',
    margin: 0,
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  };

  const downloadButtonContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  };

  const downloadButtonStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isMobile ? '0.8rem' : isLaptop ? '1rem' : '1.2rem',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: isMobile ? '2rem 1.5rem' : isLaptop ? '2rem 1.8rem' : '2.5rem 2rem',
    backgroundColor: 'rgba(13, 13, 13, 0.8)',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '100%',
    maxWidth: isMobile ? '100%' : '280px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  };

  const downloadTextStyles = {
    fontSize: isMobile ? '0.9rem' : isLaptop ? '1rem' : '1.2rem',
    fontWeight: 500,
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    letterSpacing: '0.02em',
  };

  const rightSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1rem' : isLaptop ? '1.2rem' : '1.5rem',
    flex: 1,
    minWidth: 0,
    width: isMobile ? '100%' : '450px',
  };

  return (
    <StyledContent>
      <div style={containerStyles}>
        <div style={presentationStyles}>
          <div style={presentationCardStyles}>
            <StyledCard style={cardContentStyles}>
              <div style={contentContainerStyles}>
                <h2 style={titleStyles}>
                  À propos du tableau de synthèse
                </h2>
                <p style={descriptionStyles}>
                  Le tableau de synthèse est un document essentiel pour l'épreuve E4 du BTS SIO. 
                  Il récapitule l'ensemble des situations professionnelles rencontrées pendant 
                  ma formation et démontre les compétences acquises dans le cadre du référentiel.
                </p>
              </div>
            </StyledCard>
          </div>
        </div>

        <div style={downloadSectionStyles}>
          <CardContainer>
            <StyledCard style={downloadCardStyles}>
              <div style={contentLayoutStyles}>
                <div style={leftSectionStyles}>
                  <div style={headerStyles}>
                    <FileText size={isMobile ? 28 : 36} color="white" />
                    <h2 style={headerTitleStyles}>
                      Tableau de Synthèse BTS SIO
                    </h2>
                  </div>
                  
                  <div style={downloadButtonContainerStyles}>
                    <a 
                      download="BTS-SIO-Tableau-de-synthese.pdf"
                      href={pdfUrl}
                      style={downloadButtonStyles}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(25, 25, 25, 0.9)';
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 12px 36px rgba(0, 0, 0, 0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(13, 13, 13, 0.8)';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                      }}
                    >
                      <FileDown size={isMobile ? 48 : isLaptop ? 56 : 64} style={{
                        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                        transition: 'all 0.3s ease',
                      }} />
                      <span style={downloadTextStyles}>
                        Télécharger le Tableau de Synthèse
                      </span>
                    </a>
                  </div>
                </div>

                <div style={rightSectionStyles}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.8rem',
                    width: '100%',
                  }}>
                    <h2 style={{ 
                      color: 'white',
                      fontSize: isMobile ? '0.9rem' : isLaptop ? '1.1rem' : '1.4rem',
                      margin: 0,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}>
                      Missions durant l'Alternance
                    </h2>
                  </div>
                  
                  <ul style={{
                    color: 'white',
                    margin: 0,
                    paddingLeft: isMobile ? '1rem' : isLaptop ? '1.2rem' : '1.5rem',
                    fontSize: isMobile ? '0.8rem' : isLaptop ? '1rem' : '1.2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '0.3rem' : isLaptop ? '0.4rem' : '0.5rem',
                    opacity: 0.9,
                    lineHeight: '1.4',
                  }}>
                    <li>Développement de rapports et tableaux de bord Power BI</li>
                    <li>Automatisation de l'environnement Microsoft avec des scripts Python</li>
                    <li>Gestion des utilisateurs et des ordinateurs dans Active Directory/Azure AD</li>
                    <li>Intégration d'API de gestion d'appareils industriels via Python</li>
                    <li>Support technique pour les solutions BeyondTrust et Secomea</li>
                    <li>Administration et optimisation des objets de stratégie de groupe (GPO)</li>
                    <li>Rédaction de documentation technique</li>
                    <li>Collaboration avec les équipes en usine à travers le monde (Teams)</li>
                    <li>Expérience avec les systèmes de gestion de tickets</li>
                  </ul>
                </div>
              </div>
            </StyledCard>
          </CardContainer>
        </div>
      </div>
    </StyledContent>
  )
}