import React, { useState, useEffect } from 'react';
import { StyledContent, CardContainer, StyledCard } from '../components/ui/Cards';
import { Shield, Cpu, Maximize2, Minimize2, Download } from 'lucide-react';

// Styles pour masquer les scrollbars
const cardScrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const scrollbarHideStyles = {
  overflowY: 'auto',
};

// Composant d'image conditionnelle
const ImageWithCondition = ({ src, alt, expandedCard, cardId, style }) => {
  const baseStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    ...style
  };

  const dynamicStyle = {
    opacity: expandedCard === cardId ? 1 : 0,
    transform: expandedCard === cardId ? 'scale(1)' : 'scale(0.95)',
    position: 'relative',
    maxHeight: expandedCard === cardId ? '600px' : '0px',
    overflow: 'hidden',
    marginTop: expandedCard === cardId ? '1rem' : '0',
    marginBottom: expandedCard === cardId ? '1rem' : '0'
  };

  return (
    <div style={dynamicStyle}>
      {(expandedCard === cardId || expandedCard === null) && (
        <img 
          src={src} 
          alt={alt} 
          style={baseStyle} 
          loading="lazy" 
        />
      )}
    </div>
  );
};

export default function VeilleTechno() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = cardScrollbarStyles;
    document.head.appendChild(styleEl);

    if (expandedCard) {
      document.body.classList.add('card-expanded');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('card-expanded');
      document.body.style.overflow = '';
    }

    return () => {
      document.head.removeChild(styleEl);
      document.body.classList.remove('card-expanded');
      document.body.style.overflow = '';
    };
  }, [expandedCard]);

  const handleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleDownload = (fileType) => {
    const fileMap = {
      'ransomware': {
        path: '/Document/Ransomware.pdf',
        downloadName: 'Ransomware_Documentation.pdf'
      },
      'quantum': {
        path: '/Document/Quantum.pdf',
        downloadName: 'Quantum_Documentation.pdf'
      }
    };

    const fileInfo = fileMap[fileType];
    if (fileInfo) {
      const link = document.createElement('a');
      link.href = fileInfo.path;
      link.download = fileInfo.downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const presentationCardStyles = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: isMobile ? '2rem' : '4rem',
  };

  const presentationContainerStyles = {
    flex: 1,
    maxWidth: '1000px',
    minWidth: isMobile ? '300px' : '400px',
    height: 'min(180px, 28vh)',
  };

  const presentationCardContentStyles = {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  const titleStyles = {
    color: 'white',
    margin: 0,
    fontSize: isMobile ? '1.2rem' : '1.4rem',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '1rem',
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
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    maxWidth: '800px',
    padding: isMobile ? '0 1rem' : '0 1.5rem',
    margin: 0,
  };

  const cardsContainerStyles = {
    display: 'flex',
    gap: isMobile ? '1rem' : '1.95rem',
    justifyContent: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'stretch',
    padding: isMobile ? '0 1rem' : 0,
  };

  const getCardContainerStyles = (cardId) => ({
    flex: expandedCard && expandedCard !== cardId ? '0' : '1',
    marginTop: expandedCard === cardId ? (isMobile ? '2rem' : '4rem') : '2rem',
    maxWidth: expandedCard === cardId ? '95%' : (isMobile ? '100%' : '500px'),
    minWidth: expandedCard === cardId ? '95%' : (isMobile ? '100%' : '300px'),
    height: expandedCard ? 'auto' : '100%',
    maxHeight: 'calc(85vh - 7rem)',
    display: expandedCard && expandedCard !== cardId ? 'none' : 'block',
    transition: 'all 0.3s ease',
  });

  const getCardStyles = (cardId) => ({
    ...scrollbarHideStyles,
    padding: expandedCard === cardId ? '0' : (isMobile ? '0 1rem 1rem 1rem' : '0 1.5rem 1.5rem 1.5rem'),
    transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    maxHeight: expandedCard ? '100vh' : 'none',
    height: expandedCard === cardId ? '90vh' : '100%',
  });

  return (
    <StyledContent>
      <div style={containerStyles}>
        {!expandedCard && (
          <div style={presentationCardStyles}>
            <CardContainer style={presentationContainerStyles}>
              <StyledCard style={presentationCardContentStyles}>
                <h2 style={titleStyles}>
                  Ma Veille Technologique
                </h2>
                <p style={descriptionStyles}>
                  Découvrez les sujets de veille que je surveille activement dans le domaine de l'informatique, des analyses critiques et des perspectives d'évolution.
                </p>
              </StyledCard>
            </CardContainer>
          </div>
        )}
        
        <div style={cardsContainerStyles}>
          {/* Carte Ransomware */}
          <CardContainer style={getCardContainerStyles('ransomware')}>
            <StyledCard className="hide-scrollbar" style={getCardStyles('ransomware')}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'sticky',
                  top: expandedCard ? 0 : -4,
                  backdropFilter: 'blur(10px)',
                  backgroundColor: expandedCard ? 'rgba(10,10,10,0.95)' : 'rgba(20,20,20,0.5)',
                  padding: '1rem',
                  zIndex: 101,
                  margin: expandedCard ? '0' : '-1.5rem -1.5rem 1rem -1.5rem',
                  marginTop: expandedCard ? 0 : '-2px',
                  marginBottom: expandedCard ? '1rem' : 0,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  width: expandedCard ? '100%' : 'calc(100% + 3rem)',
                  left: expandedCard ? '0' : '-1.5rem',
                  right: expandedCard ? '0' : '-1.5rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    padding: '0.5rem 0',
                    flex: 1,
                    marginLeft: expandedCard ? '2rem' : '0',
                  }}>
                    <Shield size={28} color="white" />
                    <h2 style={{ 
                      color: 'white',
                      fontSize: '1.4rem',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}>
                      Les ransomwares
                    </h2>
                  </div>
                  <div style={{
                    display: 'flex',
                    marginRight: expandedCard ? '2rem' : '0',
                  }}>
                    <button
                      onClick={() => handleDownload('ransomware')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        transition: 'background-color 0.2s',
                        marginRight: '0.5rem',
                      }}
                      title="Télécharger en PDF"
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Download size={20} color="white" />
                    </button>
                    <button
                      onClick={() => handleExpand('ransomware')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {expandedCard === 'ransomware' ? (
                        <Minimize2 size={24} color="white" />
                      ) : (
                        <Maximize2 size={24} color="white" />
                      )}
                    </button>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  padding: expandedCard ? '0 2rem 2rem 2rem' : '0',
                  borderRadius: '12px',
                }}>
                  <h3 style={{ 
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                  }}>Pourquoi ce sujet ?</h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      Les attaques par ransomware ont explosé depuis 2022, touchant des secteurs critiques (santé, énergie, collectivités). 
                      Elles combinent chiffrement des données, extorsion financière et menace de fuite, avec des coûts économiques et humains majeurs.
                    </p>
                    <ImageWithCondition 
                      src="../images/veille/Ransomware_as_a_Service.webp" 
                      alt="Cycle d'attaque ransomware" 
                      expandedCard={expandedCard} 
                      cardId="ransomware" 
                      style={{ marginBottom: '1rem', background: 'rgb(255, 255, 255)' }} 
                    />
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <strong style={{ fontSize: '1.1rem' }}>Chiffres clés (2023-2024) :</strong><br />
                      • Coût moyen d'une attaque : 5,3 millions USD (IBM Security)<br />
                      • 72 % des attaques utilisent la double extortion (chiffrement + menace de fuite)
                    </p>

                  </div>

                  <h3 style={{ 
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                  }}>Axes de veille et découvertes récentes</h3>
                  
                  <strong style={{ fontSize: '1.1rem' }}>A. Évolution des menaces</strong>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>Ransomware-as-a-Service (RaaS) :</u><br />
                      • Des groupes comme LockBit 3.0 ou BlackCat proposent des kits clés en main à des cybercriminels peu qualifiés<br />
                      • Exemple : En 2023, LockBit a généré 100 millions USD de rançons (Chainalysis)
                    </p>

                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>IA au service des attaquants :</u><br />
                      • Génération de phishing hyper-personnalisé via ChatGPT ou des deepfakes audio
                    </p>
                    <ImageWithCondition 
                      src="../images/veille/LockBit_logo.png" 
                      alt="IA au service des attaquants" 
                      expandedCard={expandedCard} 
                      cardId="ransomware" 
                      style={{ marginBottom: '1rem' }} 
                    />
                  </div>

                  <strong style={{ fontSize: '1.1rem' }}>B. Technologies de protection</strong>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>Zero Trust :</u><br />
                      • Déploiement massif de l'authentification multifacteur (MFA) et de la micro-segmentation
                    </p>
                    <ImageWithCondition 
                      src="../images/veille/ZeroTrust.webp" 
                      alt="Zero Trust" 
                      expandedCard={expandedCard} 
                      cardId="ransomware" 
                      style={{ marginBottom: '1rem' }} 
                    />
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>EDR/XDR :</u><br />
                      • Solutions comme CrowdStrike Falcon ou SentinelOne pour détecter les comportements suspects en temps réel
                    </p>
                    <ImageWithCondition 
                      src="../images/veille/EN-Dashboard-2024.webp" 
                      alt="EDR/XDR" 
                      expandedCard={expandedCard} 
                      cardId="ransomware" 
                      style={{ marginBottom: '1rem' }} 
                    />
                  </div>

                  <strong style={{ fontSize: '1.1rem' }}>C. Réglementation et bonnes pratiques</strong>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>NIS2 (UE) :</u><br />
                      • Obligation de déclarer les incidents sous 24h pour les secteurs critiques (en vigueur en 2024)
                    </p>
                    <ImageWithCondition 
                      src="../images/veille/NIS2.webp" 
                      alt="NIS2" 
                      expandedCard={expandedCard} 
                      cardId="ransomware" 
                      style={{ marginBottom: '1rem' }} 
                    />
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>Sauvegardes hors ligne :</u><br />
                      • Règle 3-2-1 : 3 copies, 2 supports, 1 copie externalisée
                    </p>
                    <ImageWithCondition 
                      src="../images/veille/backup.webp" 
                      alt="Sauvegardes hors ligne" 
                      expandedCard={expandedCard} 
                      cardId="ransomware" 
                      style={{ marginBottom: '1rem' }} 
                    />
                  </div>

                  <strong style={{ fontSize: '1.1rem' }}>D. Cas d'étude récents</strong>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      • Hôpital de Versailles (2023) : 6 mois de paralysie, coût estimé à 10 millions €<br />
                      • MGM Resorts (2023) : Pertes de 100 millions USD après une attaque via ingénierie sociale
                    </p>

                  </div>

                  <h3 style={{ 
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                  }}>Sources et outils de veille</h3>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    margin: '0 0 0.8rem 0',
                    color: 'rgba(255,255,255,0.9)',
                    transition: 'all 0.3s ease',
                  }}>
                    <strong style={{ fontSize: '1.1rem' }}>Types de sources :</strong><br />
                    • Sites spécialisés : Krebs on Security, BleepingComputer, DarkReading<br />
                    • Rapports officiels : ANSSI, ENISA, études CrowdStrike (Global Threat Report 2024)<br />
                    • Outils de veille : Google Alerts ("ransomware trends"), flux RSS (ex : The Record)
                  </p>

                  <h3 style={{ 
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                  }}>Synthèse et perspectives</h3>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    margin: '0 0 0.8rem 0',
                    color: 'rgba(255,255,255,0.9)',
                    transition: 'all 0.3s ease',
                  }}>
                    <strong style={{ fontSize: '1.1rem' }}>Tendances 2024 :</strong><br />
                    • Hausse des attaques ciblant les PME et les infrastructures cloud<br />
                    • Utilisation accrue de l'IA par les cybercriminels pour automatiser les attaques
                  </p>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    margin: '0 0 0.8rem 0',
                    color: 'rgba(255,255,255,0.9)',
                    transition: 'all 0.3s ease',
                  }}>
                    <strong style={{ fontSize: '1.1rem' }}>Recommandations clés :</strong><br />
                    • Former les employés aux risques de phishing et d'ingénierie sociale<br />
                    • Tester les sauvegardes régulièrement<br />
                    • Adopter une stratégie Zero Trust pour limiter les mouvements latéraux
                  </p>
                </div>    
               </div>     
            </StyledCard>
          </CardContainer>

          {/* Carte Informatique Quantique */}
          <CardContainer style={{
            flex: expandedCard && expandedCard !== 'quantum' ? '0' : '1',
            marginTop: expandedCard === 'quantum' ? '4rem' : '2rem',
            maxHeight: 'calc(85vh - 7rem)',
            maxWidth: expandedCard === 'quantum' ? '95%' : (isMobile ? '100%' : '500px'),
            minWidth: expandedCard === 'quantum' ? '95%' : (isMobile ? '100%' : '300px'),
            height: expandedCard ? 'auto' : '100%',
            display: expandedCard && expandedCard !== 'quantum' ? 'none' : 'block',
            transition: 'all 0.3s ease',
          }}>
            <StyledCard className="hide-scrollbar" style={{
              ...scrollbarHideStyles,
              padding: expandedCard === 'quantum' ? '0' : (isMobile ? '0 1rem 1rem 1rem' : '0 1.5rem 1.5rem 1.5rem'),
              margin: '0 auto',
              transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              maxHeight: expandedCard ? '100vh' : 'none',
              height: expandedCard === 'quantum' ? '95vh' : '100%',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'sticky',
                  top: expandedCard ? 0 : -6,
                  backdropFilter: 'blur(10px)',
                  backgroundColor: expandedCard ? 'rgba(10,10,10,0.95)' : 'rgba(20,20,20,0.5)',
                  padding: '1rem',
                  zIndex: 101,
                  margin: expandedCard ? '0' : '-1.5rem -1.5rem 1rem -1.5rem',
                  marginTop: expandedCard ? 0 : '-2px',
                  marginBottom: expandedCard ? '1rem' : 0,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  width: expandedCard ? '100%' : 'calc(100% + 3rem)',
                  left: expandedCard ? '0' : '-1.5rem',
                  right: expandedCard ? '0' : '-1.5rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxSizing: 'border-box',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.5rem 0',
                    flex: 1,
                    marginLeft: expandedCard ? '2rem' : '0',
                  }}>
                    <Cpu size={28} color="white" />
                    <h2 style={{
                      color: 'white',
                      fontSize: '1.4rem',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}>
                      L'informatique quantique
                    </h2>
                  </div>
                  <div style={{
                    display: 'flex',
                    marginRight: expandedCard ? '2rem' : '0',
                  }}>
                    <button
                      onClick={() => handleDownload('quantum')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        transition: 'background-color 0.2s',
                        marginRight: '0.5rem',
                      }}
                      title="Télécharger en PDF"
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Download size={20} color="white" />
                    </button>
                    <button
                      onClick={() => handleExpand('quantum')}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {expandedCard === 'quantum' ? (
                        <Minimize2 size={24} color="white" />
                      ) : (
                        <Maximize2 size={24} color="white" />
                      )}
                    </button>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  padding: expandedCard ? '0 2rem 2rem 2rem' : '0',
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                  }}>Pourquoi ce sujet ?</h3>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      L'informatique quantique promet de révolutionner le monde numérique en résolvant des problèmes jusqu'ici impossibles à traiter.
                      Cette technologie aura un impact majeur sur la cryptographie et la sécurité des systèmes d'information.
                    </p>
                    <ImageWithCondition
                      src="../images/veille/Intriquation.webp"
                      alt="Ordinateur quantique IBM"
                      expandedCard={expandedCard}
                      cardId="quantum"
                      style={{ marginBottom: '1rem' }}
                    />
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <strong style={{ fontSize: '1.1rem' }}>Chiffres clés (2023-2024) :</strong><br />
                      • IBM Condor : 1 121 qubits opérationnels<br />
                      • QuEra : Record de 10 000 qubits neutres
                    </p>
                  </div>

                  <h3 style={{
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                  }}>Axes de veille et découvertes récentes</h3>

                  <strong style={{ fontSize: '1.1rem' }}>A. Évolution technologique</strong>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>Qubits et superposition :</u><br />
                      • Unité quantique pouvant être dans plusieurs états simultanément<br />
                      • Permet des calculs parallèles massifs
                    </p>
                    <ImageWithCondition
                      src="../images/veille/superposition-quantique.webp"
                      alt="Qubits et superposition"
                      expandedCard={expandedCard}
                      cardId="quantum"
                      style={{ marginBottom: '1rem' }}
                    />
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>Intrication quantique :</u><br />
                      • Liaison instantanée entre qubits, même à distance<br />
                      • Applications en cryptographie et télécommunications
                    </p>
                  </div>

                  <strong style={{ fontSize: '1.1rem' }}>B. Technologies de protection</strong>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>Cryptographie post-quantique :</u><br />
                      • CRYSTALS-Kyber sélectionné par le NIST<br />
                      • Migration urgente des systèmes actuels
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1.1rem' }}>Décohérence quantique :</u><br />
                      • Principal défi technique à surmonter<br />
                      • Nécessite un refroidissement extrême (-273°C)
                    </p>
                  </div>

                  <strong style={{ fontSize: '1.1rem' }}>C. Applications concrètes</strong>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>Santé :</u><br />
                      • Simulation moléculaire pour la recherche médicale<br />
                      • Optimisation des traitements personnalisés
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <u style={{ fontSize: '1rem' }}>Logistique :</u><br />
                      • Optimisation des trajets et de la chaîne d'approvisionnement<br />
                      • Réduction de 30% des coûts chez Volkswagen
                    </p>
                  </div>

                  <strong style={{ fontSize: '1.1rem' }}>D. Impact sur les métiers SIO</strong>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      • Nouveaux métiers : Cryptographe post-quantique<br />
                      • Évolution des compétences : Maîtrise des outils hybrides
                    </p>
                  </div>

                  <h3 style={{
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                  }}>Sources et outils de veille</h3>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    margin: '0 0 0.8rem 0',
                    color: 'rgba(255,255,255,0.9)',
                    transition: 'all 0.3s ease',
                  }}>
                    <strong style={{ fontSize: '1.1rem' }}>Types de sources :</strong><br />
                    • Acteurs majeurs : IBM, Google, QuEra<br />
                    • Publications scientifiques : Nature, Science<br />
                    • Veille technologique : Quantum Computing Report
                  </p>

                  <h3 style={{
                    fontSize: '1.1rem',
                    margin: 0,
                    fontWeight: '500',
                    color: 'white',
                  }}>Synthèse et perspectives</h3>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <strong style={{ fontSize: '1.1rem' }}>Tendances 2024 :</strong><br />
                      • Course aux qubits entre les grands acteurs<br />
                      • Développement d'applications pratiques
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      margin: '0 0 0.8rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      transition: 'all 0.3s ease',
                    }}>
                      <strong style={{ fontSize: '1.1rem' }}>Recommandations clés :</strong><br />
                      • Préparer la migration post-quantique<br />
                      • Former les équipes aux nouveaux paradigmes<br />
                      • Suivre les avancées des grands acteurs
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