import React, { useEffect, useState } from 'react'
import { StyledContent, CardContainer, StyledCard } from '../components/ui/Cards'
import { Code2, Server, Database, Globe2, Palette, Shield, Kanban, GraduationCap, Building2, Award, FolderKanban, Users, Languages, Lightbulb, Cpu, Github, Linkedin, Mail } from 'lucide-react'

export default function Competence() {
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

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
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
            minWidth: isMobile ? '300px' : isLaptop ? '350px' : '400px',
            height: isMobile ? 'min(160px, 25vh)' : isLaptop ? 'min(170px, 26vh)' : 'min(180px, 28vh)',
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
                  fontSize: isMobile ? '1.2rem' : '1.8rem',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                }}>
                  Mes Compétences
                </h2>
                <p style={{ 
                  color: 'white',
                  lineHeight: '1.5',
                  fontSize: isMobile ? '0.9rem' : isLaptop ? '1.1rem' : '1.3rem',
                  textAlign: 'center',
                  maxWidth: '800px',
                  margin: 0,
                  padding: isMobile ? '0 0.8rem' : '0 1rem',
                }}>
                  Un aperçu détaillé de mes compétences techniques et professionnelles, développées à travers ma formation en BTS SIO et mes expériences pratiques.
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
          {[
            {
              icon: <Users size={isMobile ? 28 : isLaptop ? 34 : 40} color="white" />,
              title: "Travail d'équipe",
              description: "Collaboration efficace et communication claire"
            },
            {
              icon: <Globe2 size={isMobile ? 28 : isLaptop ? 34 : 40} color="white" />,
              title: "Langues",
              description: "• Français (Natif)\n• Anglais (C1)",
              customStyle: { whiteSpace: 'pre-line' }
            },
            {
              icon: <Lightbulb size={isMobile ? 32 : isLaptop ? 38 : 48} color="white" />,
              title: "Résolution de problèmes",
              description: "Approche analytique et solutions créatives"
            },
            {
              icon: <Kanban size={isMobile ? 32 : isLaptop ? 38 : 48} color="white" />,
              title: "Adaptabilité",
              description: "Apprentissage rapide des nouvelles technologies"
            }
          ].map((item, index) => (
            <CardContainer key={index} style={{ 
              flex: isMobile ? 'none' : '1',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : isLaptop ? '280px' : '320px',
              minWidth: isMobile ? '0' : '0',
              height: isMobile ? '160px' : isLaptop ? '200px' : '260px',
              backdropFilter: 'blur(2px)',
            }}>
              <StyledCard style={{ 
                padding: isMobile ? '0.8rem' : isLaptop ? '0.9rem' : '1rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? '0.5rem' : isLaptop ? '0.7rem' : '1rem',
                textAlign: 'center',
              }}>
                <div style={{ marginBottom: isMobile ? '0.3rem' : '0.5rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ 
                  color: 'white',
                  fontSize: isMobile ? '1.1rem' : isLaptop ? '1.3rem' : '1.6rem',
                  marginBottom: isMobile ? '0.3rem' : isLaptop ? '0.4rem' : '0.5rem',
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: 'white',
                  fontSize: isMobile ? '0.8rem' : isLaptop ? '1rem' : '1.2rem',
                  opacity: 0.9,
                  lineHeight: '1.4',
                  ...(item.customStyle || {})
                }}>
                  {item.description}
                </p>
              </StyledCard>
            </CardContainer>
          ))}
        </div>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1rem' : isLaptop ? '3rem' : '6rem',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {/* Développement */}
          <CardContainer style={{ 
            flex: '1 1 300px',
            maxWidth: isMobile ? '100%' : isLaptop ? '550px' : '600px',
            height: isMobile ? 'auto' : isLaptop ? 'min(580px, 88vh)' : 'min(600px, 90vh)',
          }}>
            <StyledCard style={{
              padding: isMobile ? '1.2rem' : isLaptop ? '1.6rem' : '2rem',
              height: '100%',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '1rem' : '1.5rem',
              }}>
                {/* Section Développement */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  
                }}>
                  <Code2 size={isMobile ? 24 : isLaptop ? 30 : 36} color="white" />
                  <h2 style={{ 
                    color: 'white',
                    fontSize: isMobile ? '1.2rem' : isLaptop ? '1.4rem' : '1.8rem',
                    margin: 0,
                  }}>
                    Développement
                  </h2>
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: '0.5rem',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: isMobile ? '1.2rem' : '1.8rem',
                  justifyContent: 'flex-start',
                  backgroundColor: 'rgba(20, 20, 20, 0.8)',
                  borderRadius: '10px',
                  padding: '1rem',
                  border: '1px solid rgba(255, 255, 255, 1)',
                }}>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : isLaptop ? '70px' : '80px',
                  }}>
                    <i className="devicon-html5-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>HTML/CSS</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-javascript-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>JavaScript</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-react-original colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>React</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-php-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>PHP</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-python-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Python</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-java-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Java</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-swift-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Swift</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-nextjs-plain" style={{ fontSize: isMobile ? '2.5rem' : '3rem', color: 'white' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Next.js</span>
                  </li>

                </ul>
                
                {/* Section Base de données */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <Database size={isMobile ? 24 : isLaptop ? 30 : 36} color="white" />
                  <h2 style={{ 
                    color: 'white',
                    fontSize: isMobile ? '1.2rem' : isLaptop ? '1.4rem' : '1.8rem',
                    margin: 0,
                  }}>
                    Base de données
                  </h2>
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: '0.5rem',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: isMobile ? '1.2rem' : '1.8rem',
                  justifyContent: 'flex-start',
                  backgroundColor: 'rgba(20, 20, 20, 0.8)',
                  borderRadius: '10px',
                  padding: '1rem',
                  border: '1px solid rgba(255, 255, 255, 1)',
                }}>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-mysql-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>MySQL</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-postgresql-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>PostgreSQL</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-mongodb-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>MongoDB</span>
                  </li>
                </ul>
              </div>
            </StyledCard>
          </CardContainer>

          {/* Systèmes et Réseaux */}
          <CardContainer style={{ 
            flex: '1 1 300px',
            maxWidth: isMobile ? '100%' : isLaptop ? '550px' : '600px',
            height: isMobile ? 'auto' : isLaptop ? 'min(580px, 88vh)' : 'min(600px, 90vh)',
          }}>
            <StyledCard style={{
              padding: isMobile ? '1.2rem' : isLaptop ? '1.6rem' : '2rem',
              height: '100%',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '1rem' : '1.5rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <Server size={isMobile ? 24 : isLaptop ? 30 : 36} color="white" />
                  <h2 style={{ 
                    color: 'white',
                    fontSize: isMobile ? '1.2rem' : isLaptop ? '1.4rem' : '1.8rem',
                    margin: 0,
                  }}>
                    Systèmes et Réseaux
                  </h2>
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: '0.5rem',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: isMobile ? '1.2rem' : '1.8rem',
                  justifyContent: 'flex-start',
                  border: '1px solid rgba(255, 255, 255, 1)',
                  borderRadius: '10px',
                  padding: '1rem',
                  backgroundColor: 'rgba(20, 20, 20, 0.8)',
                  
                }}>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-bash-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem', color: 'green' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Bash</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-azure-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Azur Cloud</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-powershell-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem', color: '#00a0ff' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>PowerShell</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-pfsense-plain" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>pfSense</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-windows8-original colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.75rem', textAlign: 'center' }}>Active Directory</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-azuresqldatabase-plain" style={{ fontSize: isMobile ? '2.5rem' : '3rem', color: '#0078D4' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>SQL Server</span>
                  </li>
                </ul>
                
                {/* Section Organisation */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <Kanban size={isMobile ? 24 : isLaptop ? 30 : 36} color="white" />
                  <h2 style={{ 
                    color: 'white',
                    fontSize: isMobile ? '1.2rem' : isLaptop ? '1.4rem' : '1.8rem',
                    margin: 0,
                  }}>
                    Organisation
                  </h2>
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: '0.5rem',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: isMobile ? '1.2rem' : '1.8rem',
                  justifyContent: 'flex-start',
                  border: '1px solid rgba(255, 255, 255, 1)',
                  borderRadius: '10px',
                  padding: '1rem',
                  backgroundColor: 'rgba(20, 20, 20, 0.8)',
                  
                }}>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-git-plain colored" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Git</span>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <i className="devicon-github-original" style={{ fontSize: isMobile ? '2.5rem' : '3rem', color: 'white' }}></i>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>GitHub</span>
                  </li>
                  {/* Power BI Icon */}
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 48 48" 
                      style={{ width: isMobile ? '2.5rem' : '4rem', height: isMobile ? '2.5rem' : '4rem' }}
                    >
                      <linearGradient id="zlT103XX9RAwCGfF9JpW0a_3sGOUDo9nJ4k_gr1" x1="32" x2="32" y1="3.947" y2="44.751" gradientUnits="userSpaceOnUse">
                        <stop offset=".006" stopColor="#ebb112"></stop>
                        <stop offset="1" stopColor="#bb5c17"></stop>
                      </linearGradient>
                      <path fill="url(#zlT103XX9RAwCGfF9JpW0a_3sGOUDo9nJ4k_gr1)" d="M27,44h10c1.105,0,2-0.895,2-2V6c0-1.105-0.895-2-2-2H27c-1.105,0-2,0.895-2,2v36	C25,43.105,25.895,44,27,44z"></path>
                      <linearGradient id="zlT103XX9RAwCGfF9JpW0b_3sGOUDo9nJ4k_gr2" x1="22.089" x2="26.009" y1="13.14" y2="45.672" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fed35d"></stop>
                        <stop offset=".281" stopColor="#f6c648"></stop>
                        <stop offset=".857" stopColor="#e3a513"></stop>
                        <stop offset=".989" stopColor="#de9d06"></stop>
                      </linearGradient>
                      <path fill="url(#zlT103XX9RAwCGfF9JpW0b_3sGOUDo9nJ4k_gr2)" d="M19,44h10c1.105,0,2-0.895,2-2V16c0-1.105-0.895-2-2-2H19c-1.105,0-2,0.895-2,2v26	C17,43.105,17.895,44,19,44z"></path>
                      <linearGradient id="zlT103XX9RAwCGfF9JpW0c_3sGOUDo9nJ4k_gr3" x1="9.803" x2="21.335" y1="22.781" y2="43.658" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffd869"></stop>
                        <stop offset=".983" stopColor="#ffdf26"></stop>
                      </linearGradient>
                      <path fill="url(#zlT103XX9RAwCGfF9JpW0c_3sGOUDo9nJ4k_gr3)" d="M11,44h10c1.105,0,2-0.895,2-2V26c0-1.105-0.895-2-2-2H11c-1.105,0-2,0.895-2,2v16	C9,43.105,9.895,44,11,44z"></path>
                    </svg>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Power BI</span>
                  </li>

                  {/* Excel Icon */}
                  <li style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    gap: isMobile ? '0.6rem' : isLaptop ? '0.7rem' : '0.8rem',
                    width: isMobile ? '60px' : '70px',
                  }}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 48 48" 
                      style={{ width: isMobile ? '2.5rem' : '4rem', height: isMobile ? '2.5rem' : '4rem' }}
                    >
                      <rect width="16" height="9" x="28" y="15" fill="#21a366"></rect>
                      <path fill="#185c37" d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"></path>
                      <rect width="16" height="9" x="28" y="24" fill="#107c42"></rect>
                      <rect width="16" height="9" x="12" y="15" fill="#3fa071"></rect>
                      <path fill="#33c481" d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z"></path>
                      <path fill="#21a366" d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z"></path>
                      <path d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z" opacity=".05"></path>
                      <path d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425C25.333,34.603,23.936,36,22.213,36z" opacity=".07"></path>
                      <path d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z" opacity=".09"></path>
                      <linearGradient id="flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1" x1="4.725" x2="23.055" y1="14.725" y2="33.055" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#18884f"></stop>
                        <stop offset="1" stopColor="#0b6731"></stop>
                      </linearGradient>
                      <path fill="url(#flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1)" d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16C24,33.105,23.105,34,22,34z"></path>
                      <path fill="#fff" d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526l3.193-5.018L9.807,19z"></path>
                    </svg>
                    <span style={{ color: 'white', fontSize: isMobile ? '0.7rem' : '0.8rem', textAlign: 'center' }}>Excel</span>
                  </li>
                </ul>
              </div>
            </StyledCard>
          </CardContainer>
        </div>
      </div>
    </StyledContent>
  )
}