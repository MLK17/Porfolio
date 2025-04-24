import React, { useState, useEffect } from 'react'
import { StyledContent, CardContainer, StyledCard } from '../components/ui/Cards'
import { GraduationCap, Building2, Award, FolderKanban, Code2, Server } from 'lucide-react'

export default function BtsSio() {
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
        gap: isMobile ? '1rem' : '1.95rem',
        width: '100%',
        height: '100%',
        maxWidth: '1800px',
        margin: '0 auto',
        paddingBottom: isMobile ? '4rem' : '8rem',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: isMobile ? '2rem' : '4rem',
        }}>
          <CardContainer style={{ 
            flex: 1,
            maxWidth: '1400px',
            minWidth: isMobile ? '300px' : '400px',
            height: 'min(180px, 28vh)',
          }}>
            <StyledCard style={{ 
              padding: 0,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                alignItems: 'center',
                width: '100%',
              }}>
                <h2 style={{ 
                  color: 'white',
                  margin: 0,
                  fontSize: isMobile ? '1.2rem' : '1.8rem',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  padding: isMobile ? '0.8rem' : '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  margin: '0 auto',
                  gap: '0.5rem'
                }}>
                  BTS Service Informatique aux Organisations
                </h2>
                <p style={{ 
                  color: 'white',
                  lineHeight: '1.5',
                  fontSize: isMobile ? '0.8rem' : '1.4rem',
                  textAlign: 'center',
                  maxWidth: '800px',
                  paddingBottom: isMobile ? '0.8rem' : '1rem',
                }}>
                  Le BTS SIO forme des professionnels capables de répondre aux besoins informatiques des organisations en développant des solutions logicielles ou en administrant des systèmes et réseaux.
                </p>
              </div>
            </StyledCard>
          </CardContainer>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1rem' : '2rem',
          justifyContent: 'center',
          alignItems: isMobile ? 'stretch' : 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          boxShadow: 'none',
          flexWrap: 'nowrap',
        }}>
          {[1, 2, 3, 4].map((index) => (
            <CardContainer key={index} style={{ 
              flex: isMobile ? 'none' : '1',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : '320px',
              minWidth: isMobile ? '0' : '0',
              height: isMobile ? '160px' : '240px',
              backdropFilter: 'blur(2px)',
            }}>
              <StyledCard style={{ 
                padding: isMobile ? '0.8rem' : '1rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? '0.5rem' : '1rem',
                textAlign: 'center',
              }}>
                {index === 1 ? (
                  <>
                    <GraduationCap 
                      size={isMobile ? 28 : 32}
                      color="white"
                      style={{ marginBottom: isMobile ? '0.3rem' : '0.5rem' }}
                    />
                    <h3 style={{ 
                      color: 'white',
                      fontSize: isMobile ? '1.1rem' : '1.3rem',
                      marginBottom: isMobile ? '0.3rem' : '0.5rem',
                    }}>
                      Formation
                    </h3>
                    <p style={{ 
                      color: 'white',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      opacity: 0.9,
                      lineHeight: '1.4',
                    }}>
                      Formation sur 2 ans avec alternance possible
                    </p>
                  </>
                ) : index === 2 ? (
                  <>
                    <Building2 
                      size={isMobile ? 28 : 32}
                      color="white"
                      style={{ marginBottom: isMobile ? '0.3rem' : '0.5rem' }}
                    />
                    <h3 style={{ 
                      color: 'white',
                      fontSize: isMobile ? '1.1rem' : '1.3rem',
                      marginBottom: isMobile ? '0.3rem' : '0.5rem',
                    }}>
                      Alternance
                    </h3>
                    <p style={{ 
                      color: 'white',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      opacity: 0.9,
                      lineHeight: '1.4',
                    }}>
                      24 mois en entreprise au rythme de 3 jours par semaine
                    </p>
                  </>
                ) : index === 3 ? (
                  <>
                    <Award 
                      size={isMobile ? 28 : 32}
                      color="white"
                      style={{ marginBottom: isMobile ? '0.3rem' : '0.5rem' }}
                    />
                    <h3 style={{ 
                      color: 'white',
                      fontSize: isMobile ? '1.1rem' : '1.3rem',
                      marginBottom: isMobile ? '0.3rem' : '0.5rem',
                    }}>
                      Certification
                    </h3>
                    <p style={{ 
                      color: 'white',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      opacity: 0.9,
                      lineHeight: '1.4',
                    }}>
                      Diplôme d'État de niveau Bac+2
                    </p>
                  </>
                ) : (
                  <>
                    <FolderKanban 
                      size={isMobile ? 28 : 32}
                      color="white"
                      style={{ marginBottom: isMobile ? '0.3rem' : '0.5rem' }}
                    />
                    <h3 style={{ 
                      color: 'white',
                      fontSize: isMobile ? '1.1rem' : '1.3rem',
                      marginBottom: isMobile ? '0.3rem' : '0.5rem',
                    }}>
                      Projets
                    </h3>
                    <p style={{ 
                      color: 'white',
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      opacity: 0.9,
                      lineHeight: '1.4',
                    }}>
                      Projets pratiques et études de cas réels
                    </p>
                  </>
                )}
              </StyledCard>
            </CardContainer>
          ))}
        </div>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1rem' : '2rem',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <CardContainer style={{ 
            flex: 1,
            maxWidth: isMobile ? '100%' : '700px',
            maxHeight: isMobile ? 'auto' : '700px',
          }}>
            <StyledCard style={{ 
              padding: '1rem',
              height: '100%',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Code2 size={28} color="white" />
                    <h2 style={{ color: 'white', margin: 0, fontSize: '1.8rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', width: '90%', margin: '0 auto', gap: '0.5rem' }}>
                      SLAM
                    </h2>
                  </div>
                  <h3 style={{ 
                    color: 'white',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                    opacity: 0.9,
                  }}>
                    Solutions Logicielles et Applications Métiers
                  </h3>

                  <p style={{ 
                    color: 'white',
                    fontSize: '1.4rem',
                    opacity: 0.9,
                  }}>
                    Spécialisation dans le développement d'applications et la programmation
                  </p>
                </div>

                <div>
                  <h3 style={{ 
                    color: 'white',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                  }}>
                    Compétences clés :
                  </h3>
                  <ul style={{ 
                    color: 'white',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '1.4rem',
                    opacity: 0.9,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}>
                    <li>• Développement d'applications</li>
                    <li>• Programmation orientée objet</li>
                    <li>• Développement web</li>
                    <li>• Bases de données</li>
                    <li>• Cybersécurité</li>
                  </ul>
                </div>  

                <div>
                  <h3 style={{ 
                    color: 'white',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                  }}>
                    Débouchés :
                  </h3>
                  <ul style={{ 
                    color: 'white',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '1.4rem',
                    opacity: 0.9,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}>
                    <li>• Développeur d'applications</li>
                    <li>• Développeur web</li>
                    <li>• Analyste programmeur</li>
                    <li>• Développeur full-stack</li>
                  </ul>
                </div>
              </div>
            </StyledCard>
          </CardContainer>

          <CardContainer style={{ 
            flex: 1,
            maxWidth: isMobile ? '100%' : '700px',
            maxHeight: isMobile ? 'auto' : '700px',
          }}>
            <StyledCard style={{ 
              padding: '1rem',
              height: '100%',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem',padding: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                    <Server size={28} color="white" />
                    <h2 style={{ color: 'white', margin: 0, fontSize: '1.8rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', width: '90%', margin: '0 auto', gap: '0.5rem' }}>
                      SISR
                    </h2>
                  </div>
                  <h3 style={{ 
                    color: 'white',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                    opacity: 0.9,
                  }}>
                    Solutions d'Infrastructure, Systèmes et Réseaux
                  </h3>

                  <p style={{ 
                    color: 'white',
                    fontSize: '1.4rem',
                    opacity: 0.9,
                  }}>
                    Spécialisation dans l'administration des systèmes et des réseaux
                  </p>
                </div>

                <div>
                  <h3 style={{ 
                    color: 'white',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                  }}>
                    Compétences clés :
                  </h3>
                  <ul style={{ 
                    color: 'white',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '1.4rem',
                    opacity: 0.9,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}>
                    <li>• Administration systèmes</li>
                    <li>• Configuration réseaux</li>
                    <li>• Sécurité informatique</li>
                    <li>• Virtualisation</li>
                    <li>• Services Cloud</li>
                  </ul>
                </div>  

                <div>
                  <h3 style={{ 
                    color: 'white',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                  }}>
                    Débouchés :
                  </h3>
                  <ul style={{ 
                    color: 'white',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '1.4rem',
                    opacity: 0.9,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}>
                    <li>• Administrateur systèmes</li>
                    <li>• Technicien réseaux</li>
                    <li>• Responsable infrastructure</li>
                    <li>• Technicien support</li>
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