import React, { useState, useEffect } from 'react'
import profilePhoto from '/images/PhotodeProfil.png';
import { StyledContent, CardContainer, StyledCard } from '../components/ui/Cards'
import { GraduationCap, Award, Briefcase, FileText } from 'lucide-react'

export default function Home() {
  const setImageError = useState(false)
  const cvUrl = '/CV Arrouche Melchior.pdf'
  const newLocal = "CV-Melchior-Arrouche.pdf";
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    gap: '1.95rem',
  };

  const presentationCardStyles = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: isMobile ? '2rem' : '3.8rem',
    marginBottom: '0.5rem',
  };

  const cardContainerStyles = {
    flex: 1,
    maxWidth: '1000px',
    minWidth: isMobile ? '300px' : '400px',
    height: isMobile ? 'auto' : 'min(750px, 80vh)',
    minHeight: isMobile ? '80vh' : 'auto',
  };

  const cardContentStyles = {
    padding: isMobile ? '1rem' : '2rem',
    display: 'flex',
    height: '100%',
  };

  const mainDivStyles = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'stretch',
    gap: isMobile ? '2rem' : '0',
  };

  const separatorStyles = {
    position: 'absolute',
    top: '15%',
    bottom: '15%',
    left: '350px',
    width: '2px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%)',
    display: isMobile ? 'none' : 'block',
  };

  const leftSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: isMobile ? '1.5rem' : '2.5rem',
    padding: isMobile ? '1.5rem' : '3rem 2.5rem',
    width: isMobile ? '100%' : '350px',
    justifyContent: 'center',
  };

  const titleStyles = {
    color: 'white',
    fontSize: isMobile ? '1.6rem' : '2rem',
    textAlign: 'center',
    margin: '0',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    maxWidth: '280px',
    letterSpacing: '0.5px',
  };

  const photoContainerStyles = {
    width: isMobile ? '120px' : '150px',
    aspectRatio: '1',
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 0 30px rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  };

  const rightSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: isMobile ? '1.5rem' : '4rem',
    gap: isMobile ? '2rem' : '3rem',
    justifyContent: 'center',
    alignItems: isMobile ? 'center' : 'flex-start',
    textAlign: isMobile ? 'center' : 'left',
  };

  const descriptionStyles = {
    color: 'white',
    lineHeight: isMobile ? '1.8' : '2',
    fontSize: isMobile ? '1rem' : '1.2rem',
    margin: '0',
    maxWidth: '600px',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };

  const formationCardStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const formationCardContainerStyles = {
    flex: 1,
    maxWidth: '1000px',
    minWidth: '400px',
    height: 'min(230px, 34vh)',
  };

  const formationCardContentStyles = {
    padding: '1.5rem',
  };

  const formationTitleStyles = {
    color: 'white',
    fontSize: '1.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.5rem',
  };

  const formationListStyles = {
    color: 'white',
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    fontSize: '0.8rem',
  };

  const certificationCardStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    paddingBottom: '3rem',
  };

  const certificationCardContainerStyles = {
    flex: 1,
    maxWidth: '490px',
    minWidth: '250px',
  };

  const certificationCardContentStyles = {
    padding: '1.5rem',
    height: '100%',
  };

  const certificationTitleStyles = {
    color: 'white',
    fontSize: '1.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.5rem',
  };

  const certificationListStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    overflow: 'auto',
  };

  const alternanceCardStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    gap: isMobile ? '1rem' : '2.5rem',
    paddingBottom: isMobile ? '1.5rem' : '3rem',
  };

  const alternanceCardContainerStyles = {
    flex: 1,
    maxWidth: isMobile ? '100%' : '490px',
    minWidth: isMobile ? '300px' : '250px',
    height: isMobile ? 'auto' : 'min(380px, 38vh)',
  };

  const alternanceCardContentStyles = {
    padding: isMobile ? '1rem' : '1.5rem',
    height: '100%',
  };

  const alternanceTitleStyles = {
    color: 'white',
    fontSize: isMobile ? '1.4rem' : '1.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.5rem',
  };

  const alternanceContentStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'flex-start' : 'space-between',
    alignItems: isMobile ? 'flex-start' : 'flex-start',
    gap: isMobile ? '1rem' : '0',
    padding: isMobile ? '0.5rem 0' : '0',
  };

  return (
    <StyledContent>
      <div style={containerStyles}>
        <div style={presentationCardStyles}>
          <CardContainer style={cardContainerStyles}>
            <StyledCard style={cardContentStyles}>
              <div style={mainDivStyles}>
                <div style={separatorStyles} />

                <div style={leftSectionStyles}>
                  <h2 style={titleStyles}>
                    Melchior Arrouche
                  </h2>

                  <div style={photoContainerStyles}>
                    <img 
                      src={profilePhoto}
                      alt="Photo de profil"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '180px',
                        height: '200px',
                        objectFit: 'cover',
                        objectPosition: 'center 12%',
                      }}
                      onError={() => setImageError(true)}
                    />
                  </div>
                </div>

                <div style={rightSectionStyles}>
                  <p style={descriptionStyles}>
                    Passionné par le développement web et les nouvelles technologies, je suis actuellement en formation pour devenir développeur full-stack.
                  </p>

                  <a 
                    href={cvUrl}
                    download={newLocal}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '1.2rem 2.5rem',
                      backgroundColor: 'rgba(13, 13, 13, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      width: 'fit-content',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(25, 25, 25, 0.9)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 36px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(13, 13, 13, 0.8)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    <FileText size={24} />
                    <span style={{ fontWeight: '500' }}>Télécharger mon CV</span>
                  </a>
                </div>
              </div>
            </StyledCard>
          </CardContainer>
        </div>

        <div style={formationCardStyles}>
          <CardContainer style={formationCardContainerStyles}>
            <StyledCard style={formationCardContentStyles}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.5rem',
                }}>
                  <h2 style={formationTitleStyles}>
                    <GraduationCap size={24} />
                    Formation
                  </h2>
                </div>
                <ul style={formationListStyles}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }}></span>
                    2023-2025 - Brevet de Technicien Supérieur Service Informatique aux Organisations (Option Solutions Logicielles et Applications Métier) à l'Efrei Pantheon ASSAS (Villejuif)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }}></span>
                    2019-2022 - Licence d'études cinématographiques à l'Université Paris 7 Denis Diderot (Paris 13ème)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }}></span>
                    2015-2018 - Baccalauréat Economique et Social au lycée Darius Millaud (Kremlin Bicêtre)
                  </li>               
                </ul>
              </div>
            </StyledCard>
          </CardContainer>
        </div>

        <div style={certificationCardStyles}>
          <CardContainer style={certificationCardContainerStyles}>
            <StyledCard style={certificationCardContentStyles}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                height: '100%',
              }}>
                <h2 style={certificationTitleStyles}>
                  <Award size={20} />
                  Certifications
                </h2>
                <div style={certificationListStyles}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'white',
                    fontSize: '0.9rem',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }}></span>
                    2024 - Certification Cisco Cybersecurity Essentials (Mars 2024)
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'white',
                    fontSize: '0.9rem',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }}></span>
                    2022 - Apple Foundation Program - Simplon (Décembre 2022)
                  </li>
                </div>
              </div>
            </StyledCard>
          </CardContainer>

          <CardContainer style={alternanceCardContainerStyles}>
            <StyledCard style={alternanceCardContentStyles}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                height: '100%',
              }}>
                <h2 style={alternanceTitleStyles}>
                  <Briefcase size={20} />
                  Alternance
                </h2>
                <div style={alternanceContentStyles}>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.3rem', 
                      color: 'white',
                      marginBottom: '0.3rem'
                    }}>
                      L'Oréal
                    </h3>
                    <p style={{ 
                      fontSize: '1.1rem',
                      opacity: 0.9,
                      marginBottom: '0.3rem'
                    }}>
                      Architecture réseau et support solution logiciel
                    </p>
                    <p style={{ 
                      fontSize: '0.8rem',
                      opacity: 0.7,
                    }}>
                      2023 - 2024
                    </p>
                  </div>
                </div>
              </div>
            </StyledCard>
          </CardContainer>
        </div>
      </div>
    </StyledContent>
  )
}