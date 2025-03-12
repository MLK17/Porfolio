import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LinkedinButton from './ui/LinkdinButton'
import GithubButton from './ui/GithubButton'
import styled from 'styled-components'

const StyledNav = styled.nav`
  padding-right: 30px;
  padding-left: 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: rgb(20,20,20);
  background: linear-gradient(0deg, 
    rgba(20,20,20,0.75) 0%,
    rgba(10,10,10,0.98) 100%
  );

  backdrop-filter: blur(8px);
  height: 4rem;
  overflow: hidden;
  border-bottom: 1px solid rgb(255, 255, 255);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 25%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.08),
      transparent
    );
    transform: skewX(-20deg);
    animation: shine 8s infinite ease-in-out;
  }

  @keyframes shine {
    0% {
      left: -150%;
    }
    100% {
      left: 150%;
    }
  }

  .nav-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    height: 100%;
    align-items: center;
  }

  .nav-links {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    flex: 1;
    width: fit-content;
  }

  .nav-link {
    color: #f4f4f4;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .social-buttons {
    right: 1.5rem;
    display: flex;
    gap: 2.5rem;
    transform: scale(0.85);
  }

  @media (min-width: 1440px) {
    .nav-link {
      font-size: 1rem;
    }
  }

  @media (max-width: 1024px) {
    .nav-links {
      gap: 1.2rem;
      justify-content: flex-start;
    }
    .nav-link {
      font-size: 0.85rem;
    }
    .social-buttons {
      transform: scale(0.8);
    }
  }

  @media (max-width: 900px) {
    .nav-links {
      gap: 1rem;
    }
    .nav-link {
      font-size: 0.8rem;
      padding: 0.3rem 0.5rem;
    }
  }

  @media (max-width: 768px) {
    height: 4rem;
    padding: 0.25rem;
    
    .nav-container {
      padding: 0 0.5rem;
    }
    
    .nav-links {
      gap: 0.8rem;
      justify-content: flex-start;
    }
    
    .nav-link {
      font-size: 0.75rem;
      padding: 0.25rem 0.4rem;
    }
    
    .social-buttons {
      transform: scale(0.7);
      align-items: end;
    }
  }

  @media (max-width: 480px) {
    .nav-links {
      gap: 10rem;
      margin-left: 4rem;
    }
    
    .nav-link {
      font-size: 0.7rem;
      padding: 0.2rem 0.3rem;
    }
    
    .social-buttons {
      width: 95px;
    }
  }
`;

export default function Navigation() {
  const location = useLocation()

  const getLinkStyle = (path) => ({
    opacity: location.pathname === path ? 1 : 0.7,
    transform: location.pathname === path ? 'scale(1.2)' : 'scale(1)',
  })

  return (
    <StyledNav>
      <div className="nav-container">
        <div className="nav-links">
          {[
            { path: '/', label: 'Accueil' },
            { path: '/bts-sio', label: 'BTS SIO' },
            { path: '/competence', label: 'Compétences' },
            { path: '/skill', label: 'Mes Projets' },
            { path: '/veille-techno', label: 'Veille' },
            { path: '/tableau-de-synthese', label: 'Tableau de Synthèse' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="nav-link"
              style={getLinkStyle(path)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="social-buttons">
          <LinkedinButton />
          <GithubButton />
        </div>
      </div>
    </StyledNav>
  )
} 