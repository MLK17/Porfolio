import React, { useState, useEffect } from 'react'
import profilePhoto from '/images/PhotodeProfil.png';
import { StyledContent, CardContainer, StyledCard } from '../components/ui/Cards'
import { GraduationCap, Award, Briefcase, FileText } from 'lucide-react'

export default function Home() {
  const setImageError = useState(false)
  const cvUrl = '/CV Arrouche Melchior.pdf'
  const newLocal = "CV-Melchior-Arrouche.pdf";
  
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsLargeScreen(window.innerWidth >= 1440);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    gap: '1.5rem',
    alignItems: 'center',
    boxSizing: 'border-box',
  };

  const presentationCardStyles = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: isMobile ? '2rem' : 'clamp(2rem, 3vw, 3.8rem)',
    marginBottom: 'clamp(0.5rem, 1vw, 1.5rem)',
    width: '100%',
  };

  const cardContainerStyles = {
    flex: 1,
    maxWidth: '1200px',
    minWidth: isMobile ? '300px' : '400px',
    height: isMobile ? 'auto' : 'min(750px, 80vh)',
    minHeight: isMobile ? '80vh' : 'auto',
    boxSizing: 'border-box',
  };

  const cardContentStyles = {
    padding: isMobile ? '1rem' : '2rem',
    paddingLarge: 'clamp(1.5rem, 2.5vw, 2.5rem)',
    paddingExtraLarge: 'clamp(1.8rem, 2.8vw, 2.8rem)',
    paddingUltraLarge: 'clamp(2rem, 3vw, 3rem)',
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
    maxWidth: '1800px',
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
    gap: isMobile ? '1.5rem' : 'clamp(2.5rem, 3vw, 3.5rem)',
    padding: isMobile ? '1.5rem' : '3rem 2.5rem',
    width: isMobile ? '100%' : 'clamp(350px, 20vw, 450px)',
    justifyContent: 'center',
  };

  const titleStyles = {
    color: 'white',
    fontSize: isMobile ? '1.6rem' : 'clamp(2rem, 3vw, 2.8rem)',
    textAlign: 'center',
    margin: '0',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    maxWidth: isMobile ? '280px' : '350px',
    letterSpacing: '0.5px',
  };

  const photoContainerStyles = {
    width: isMobile ? '150px' : 'clamp(180px, 15vw, 250px)',
    aspectRatio: '1',
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 0 30px rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: isMobile ? '1rem' : 'clamp(1.2rem, 1.8vw, 1.6rem)',
    margin: '0',
    maxWidth: '800px',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };

  const formationCardStyles = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  };

  const formationCardContainerStyles = {
    flex: 1,
    maxWidth: '1200px',
    minWidth: '400px',
    height: 'min(350px, 45vh)',
    boxSizing: 'border-box',
  };

  const formationCardContentStyles = {
    padding: '1.5rem',
    paddingLarge: 'clamp(1.5rem, 2vw, 2rem)',
    paddingExtraLarge: 'clamp(1.8rem, 2.2vw, 2.2rem)',
    paddingUltraLarge: 'clamp(2rem, 2.5vw, 2.5rem)',
  };

  const formationTitleStyles = {
    color: 'white',
    fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)',
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
    gap: '1.5rem',
    marginTop: '1rem',
    fontSize: isMobile ? '0.9rem' : 'clamp(1rem, 1.5vw, 1.4rem)',
  };

  const certificationCardStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
    width: '100%',
  };

  const certificationCardContainerStyles = {
    flex: 1,
    maxWidth: isLargeScreen ? '600px' : '700px',
    minWidth: '300px',
    height: isMobile ? 'auto' : isLargeScreen ? 'min(380px, 38vh)' : 'min(450px, 45vh)',
    boxSizing: 'border-box',
  };

  const certificationCardContentStyles = {
    padding: '1.5rem',
    paddingLarge: 'clamp(1.5rem, 2vw, 2rem)',
    paddingExtraLarge: 'clamp(1.8rem, 2.2vw, 2.2rem)',
    paddingUltraLarge: 'clamp(2rem, 2.5vw, 2.5rem)',
  };

  const certificationTitleStyles = {
    color: 'white',
    fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '0.5rem',
  };

  const certificationListStyles = {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    marginTop: '0.8rem',
    fontSize: isMobile ? '0.9rem' : 'clamp(1rem, 1.5vw, 1.4rem)',
  };

  const alternanceCardStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    gap: isMobile ? '0.75rem' : '0.75rem',
    paddingBottom: isMobile ? '1.5rem' : '2rem',
    width: '100%',
    flexWrap: 'wrap',
  };

  const alternanceCardContainerStyles = {
    flex: 1,
    maxWidth: isLargeScreen ? '600px' : '700px',
    minWidth: '300px',
    height: isMobile ? 'auto' : isLargeScreen ? 'min(380px, 38vh)' : 'min(450px, 45vh)',
    boxSizing: 'border-box',
  };

  const alternanceCardContentStyles = {
    padding: isMobile ? '1rem' : '1.5rem',
    paddingLarge: 'clamp(1.5rem, 2vw, 2rem)',
    paddingExtraLarge: 'clamp(1.8rem, 2.2vw, 2.2rem)',
    paddingUltraLarge: 'clamp(2rem, 2.5vw, 2.5rem)',
    height: '100%',
  };

  const alternanceTitleStyles = {
    color: 'white',
    fontSize: isMobile ? '1.4rem' : 'clamp(1.5rem, 2.5vw, 2.4rem)',
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
    <StyledContent maxWidth="1600px" cardWidth="100%" justifyContent="flex-start">
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
                        width: '100%',
                        height: '100%',
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
                maxWidth: '100%',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.5rem',
                }}>
                  <h2 style={formationTitleStyles}>
                    <GraduationCap size={24} />
                    Formations
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
          <CardContainer style={{...certificationCardContainerStyles, marginRight: 0}}>
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
                    gap: '1rem',
                    color: 'white',
                    fontSize: isMobile ? '1rem' : 'clamp(1rem, 1.2vw, 1.2rem)',
                  }}>
                    <div style={{
                      width: isMobile ? '70px' : 'clamp(70px, 5vw, 80px)',
                      height: isMobile ? '70px' : 'clamp(70px, 5vw, 80px)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      padding: '5px',
                    }}>
                      <img 
                        src="/Cisco.jpg" 
                        alt="Logo Cisco" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div>
                      2024 - Certification Cisco Cybersecurity Essentials (Mars 2024)
                    </div>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'white',
                    fontSize: isMobile ? '1rem' : 'clamp(1rem, 1.2vw, 1.2rem)',
                  }}>
                    <div style={{
                      width: isMobile ? '70px' : 'clamp(70px, 5vw, 80px)',
                      height: isMobile ? '70px' : 'clamp(70px, 5vw, 80px)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      padding: '5px',
                    }}>
                      <img 
                        src="/applesimplon-removebg-preview.jpg" 
                        alt="Logo Apple Simplon" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div>
                      2022 - Apple Foundation Program - Simplon (Décembre 2022)
                    </div>
                  </li>
                </div>
              </div>
            </StyledCard>
          </CardContainer>

          <CardContainer style={{...alternanceCardContainerStyles, marginLeft: 0}}>
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: isMobile ? '90px' : 'clamp(90px, 7vw, 100px)',
                      height: isMobile ? '90px' : 'clamp(90px, 7vw, 100px)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      padding: '5px',
                    }}>
                      <img 
                        src="/Loreal-logo.jpg" 
                        alt="Logo L'Oréal" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <div>
                      <h3 style={{ 
                        fontSize: isMobile ? '1.3rem' : 'clamp(1.3rem, 2vw, 1.8rem)', 
                        color: 'white',
                        marginBottom: '0.4rem'
                      }}>
                        L'Oréal
                      </h3>
                      <p style={{ 
                        fontSize: isMobile ? '1.1rem' : 'clamp(1.1rem, 1.8vw, 1.5rem)',
                        opacity: 0.9,
                        marginBottom: '0.4rem'
                      }}>
                        Architecture réseau et support solution logiciel
                      </p>
                      <p style={{ 
                        fontSize: isMobile ? '0.8rem' : 'clamp(0.8rem, 1.2vw, 1.1rem)',
                        opacity: 0.7,
                      }}>
                        2023 - 2024
                      </p>
                    </div>
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