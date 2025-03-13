import React, { useState, useEffect } from 'react'
import { StyledContent, CardContainer, StyledCard } from '../components/ui/Cards'
import { Shield, Cpu, FolderGit2, Code } from 'lucide-react'

// Styles pour masquer la barre de défilement
const scrollbarHideStyles = {
  overflow: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
}

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.4rem 0.7rem',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '4px',
  color: 'white',
  fontSize: '0.7rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <StyledContent>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* Section de présentation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: isMobile ? '2rem' : '4rem',
        }}>
          <div style={{ 
            flex: 1,
            maxWidth: '1000px',
            minWidth: isMobile ? '300px' : '400px',
            height: 'min(180px, 28vh)',
          }}>
            <StyledCard style={{ 
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                alignItems: 'center',
                padding: isMobile ? '1rem 0' : '1.5rem 0',
              }}>
                <h2 style={{ 
                  color: 'white',
                  margin: 0,
                  fontSize: isMobile ? '1.2rem' : '1.4rem',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  gap: '0.5rem',
                }}>
                  Mes Projets
                </h2>
                <p style={{ 
                  color: 'white',
                  lineHeight: '1.5',
                  textAlign: 'center',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  maxWidth: '800px',
                  padding: isMobile ? '0 1rem' : '0 1.5rem',
                  margin: 0,
                }}>
                  Découvrez mes projets en formation et en autodidacte.
                </p>
              </div>
            </StyledCard>
          </div>
        </div>
        
        {/* Conteneur des cartes */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: isMobile ? 'stretch' : 'flex-start',
          width: '100%',
          padding: isMobile ? '1rem 0' : '2rem 0',
          gap: isMobile ? '1rem' : '2rem',
        }}>
          {/* Première carte - Projets Scolaires */}
          <CardContainer>
            <StyledCard className="hide-scrollbar" style={{ 
              padding: isMobile ? '0 1rem 1rem 1rem' : '0 1.5rem 1.5rem 1.5rem',
              margin: '0 auto',
              height: '100%',
              overflow: 'auto',
              maxHeight: isMobile ? 'none' : 'calc(85vh - 7rem)',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
                position: 'relative',
              }}>
                {/* En-tête de la carte */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'sticky',
                  top: -6,
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(20,20,20,0.5)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  zIndex: 101,
                  margin: '-1.5rem -1.5rem 0.5rem -1.5rem',
                  marginTop: '-2px',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  width: 'calc(100% + 3rem)',
                  left: '-1.5rem',
                  right: '-1.5rem',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    padding: '0.5rem 0',
                    flex: 1,
                  }}>
                    <Shield size={isMobile ? 24 : 28} color="white" />
                    <h2 style={{ 
                      color: 'white', 
                      fontSize: isMobile ? '1.2rem' : '1.4rem',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}>
                      Mes projets scolaires
                    </h2>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgb(13, 13, 13)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
      
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.5rem',
                  }}>WeatherApp</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        WeatherApp est un projet de création d'une application météo en temps réel.
                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <u style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>Déscriptif :</u><br />
                        • Utlisation de Next.js<br />
                        • Exploite l'API OpenWeatherMap
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                        <button 
                          onClick={() => window.open('https://github.com/MLK17/weatherapp', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                          }}
                        >
                          <FolderGit2 size={14} />
                          GitHub
                        </button>
                        <button 
                          onClick={() => window.open('https://weatherapp-neon-phi.vercel.app/', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                          }}
                        >
                          <Code size={14} />
                          Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projet Pixel Art */}
                <div style={{
                  backgroundColor: 'rgb(13, 13, 13)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.5rem',
                  }}>Pixel Art Maker</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        Projet de création d'images en pixels.
                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <u style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>Déscriptif :</u><br />
                        • HTML/CSS/JavaScript<br />
                        • Canvas API
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                        <button 
                          onClick={() => window.open('https://github.com/MLK17/PixelArt', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <FolderGit2 size={14} />
                          GitHub
                        </button>
                        <a 
                          href="/Document/PixelArt.pdf"
                          download="PixelArt_Documentation.pdf"
                          style={{
                            ...buttonStyle,
                            textDecoration: 'none',
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <Code size={14} />
                          Documentation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projet SlayerGates - Exemple de nouvelle section */}
                <div style={{
                  backgroundColor: 'rgb(13, 13, 13)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  borderRadius: '12px',
                  border: '2px solid rgba(255,255,255,1)',
                  marginBottom: '1rem',
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.5rem',
                  }}>SlayerGates (client lourd)</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        Client lourd du projet de tournoi inter-académique de jeux vidéo. Utilisation administrateurs

                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <u style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>Stack technique :</u><br />
                        • Next.js + PostgreSQL<br />
                        • Système d'authentification
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                        <button 
                          onClick={() => window.open('#', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <FolderGit2 size={14} />
                          GitHub
                        </button>
                        <a 
                          href="/Document/SlayerGates.pdf"
                          download="SlayerGates_Documentation.pdf"
                          style={{
                            ...buttonStyle,
                            textDecoration: 'none',
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <Code size={14} />
                          Documentation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgb(13, 13, 13)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  borderRadius: '12px',
                  border: '2px solid rgba(255,255,255,1)',
                  marginBottom: '1rem',
                
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.5rem',
                    
                  }}>SlayerGate</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>                        Plateforme de tournois esport inter-académique.

                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <u style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>Stack technique :</u><br />
                        • Next.js + PostgreSQL<br />
                        • Système d'authentification
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                        <button 
                          onClick={() => window.open('#', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                          }}
                        >
                          <FolderGit2 size={14} />
                          GitHub
                        </button>
                        <button 
                          onClick={() => window.open('#', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                          }}
                        >
                          <Code size={14} />
                          Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgb(13, 13, 13)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.5rem',
                  }}>EfreiScolarité</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                      Projet de Gestion de personel réalisé avec mon profeseur                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <u style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>Stack technique :</u><br />
                        • JAVA + Eclypse<br />
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                        <button 
                          onClick={() => window.open('https://github.com/MLK17/foot-e-commerce', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <FolderGit2 size={14} />
                          GitHub
                        </button>
                        <a 
                          href="/Document/EfreiScolarité.pdf"
                          download="EfreiScolarité_Documentation.pdf"
                          style={{
                            ...buttonStyle,
                            textDecoration: 'none',
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <Code size={14} />
                          Documentation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgb(13, 13, 13)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.5rem',
                  }}>Olosa</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
Réalisation d'un site web qui catalogue les joueurs de foot pour les faires parler grace à l'IA </p>                     <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <u style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>Stack technique :</u><br />
                        • Projet React.js
                        • Utilisation MongoDB<br />
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                        <button 
                          onClick={() => window.open('https://github.com/MLK17/foot-e-commerce', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <FolderGit2 size={14} />
                          GitHub
                        </button>
                        <a 
                          href="/Document/Olosa.pdf"
                          download="Olosa_Documentation.pdf"
                          style={{
                            ...buttonStyle,
                            textDecoration: 'none',
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <Code size={14} />
                          Documentation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </StyledCard>
          </CardContainer>

          {/* Deuxième carte - Projets Personnels */}
          <CardContainer>
            <StyledCard className="hide-scrollbar" style={{ 
              ...scrollbarHideStyles,
              padding: isMobile ? '0 1rem 1rem 1rem' : '0 1.5rem 1.5rem 1.5rem',
              margin: '0 auto',
              maxHeight: isMobile ? 'none' : 'calc(85vh - 7rem)',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
                position: 'relative',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'sticky',
                  top: -6,
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(20,20,20,0.5)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  zIndex: 101,
                  margin: '-1.5rem -1.5rem 0.5rem -1.5rem',
                  marginTop: '-2px',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  width: 'calc(100% + 3rem)',
                  left: '-1.5rem',
                  right: '-1.5rem',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    padding: '0.5rem 0',
                    flex: 1,
                  }}>
                    <Cpu size={isMobile ? 24 : 28} color="white" />
                    <h2 style={{ 
                      color: 'white', 
                      fontSize: isMobile ? '1.2rem' : '1.4rem',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}>
                      Mes projets personnels
                    </h2>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgb(13, 13, 13)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.5rem',
                  }}>Feed Place</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                      Feed Place est un projet d'aplication mobile IOS facilitant la relation entre les peronnes en situation de précarité alimentaire et les coopératives solidaires                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <u style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>Déscriptif :</u><br />
                        • Utlisation de Swift5 et Xcode<br />
                        • Utilisation de SwiftUI et MapKit
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                        <button 
                          onClick={() => window.open('https://github.com/MLK17/FeedPlace-3', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <FolderGit2 size={14} />
                          GitHub
                        </button>
                        <a 
                          href="/Document/FeedPlace.pdf"
                          download="FeedPlace_Documentation.pdf"
                          style={{
                            ...buttonStyle,
                            textDecoration: 'none',
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <Code size={14} />
                          Documentation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projet Pixel Art */}
                <div style={{
                  backgroundColor: 'rgb(13, 13, 13)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.3rem' : '1.5rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.5rem',
                  }}>Jeu de la vie</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                      Création d'un Conway's Game of Life qui simule le comportement des cellules dans un univers bidimensionnel.                      </p>
                      <p style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        lineHeight: '1.7',
                        margin: '0 0 0.8rem 0',
                        color: 'rgba(255,255,255,0.9)',
                      }}>
                        <u style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>Déscriptif :</u><br />
                        • Python<br />
                        • Utilisation de la librairie Pygame
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                        <button 
                          onClick={() => window.open('https://github.com/MLK17/GameOfLife', '_blank')}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <FolderGit2 size={14} />
                          GitHub
                        </button>
                        <a 
                          href="/Document/JeuDeLaVie.pdf"
                          download="JeuDeLaVie_Documentation.pdf"
                          style={{
                            ...buttonStyle,
                            textDecoration: 'none',
                            fontSize: isMobile ? '0.65rem' : '0.7rem',
                            padding: isMobile ? '0.35rem 0.6rem' : '0.4rem 0.7rem',
                            '&:hover': {
                              backgroundColor: 'rgba(25, 25, 25, 0.9)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <Code size={14} />
                          Documentation
                        </a>
                      </div>
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