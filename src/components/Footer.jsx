import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const StyledFooter = styled.footer`
  width: 100%;
  height: 2.5rem;
  padding: 0 30px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${props => props.pathname === '/competence' ? 'relative' : 'fixed'};
  bottom: ${props => props.isVisible ? '0' : '-2.5rem'};
  left: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isVisible ? '1' : '0'};
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: black;
  opacity: 0.7;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/competence') {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = windowHeight + scrollY >= documentHeight - 100;
      setIsVisible(isNearBottom);
    };

    const handleMouseMove = (e) => {
      const threshold = window.innerHeight - 100;
      setIsVisible(e.clientY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [pathname]);

  if (pathname === '/competence') return null;

  const openLink = (url) => window.open(url, '_blank');
  const sendEmail = () => window.location.href = 'mailto:contact@melchior-arrouche.com';

  return (
    <StyledFooter isVisible={isVisible} pathname={pathname}>
      <p style={{ margin: 0, color: 'black', fontSize: '0.7rem' }}>
        &copy; 2024 Portfolio | D&eacute;velopp&eacute; par Melchior ARROUCHE
      </p>
      
      <SocialIcons>
        <IconButton onClick={() => openLink('https://github.com/MLK17')}>
          <Github size={18} />
        </IconButton>
        <IconButton onClick={() => openLink('https://fr.linkedin.com/in/melchior-arrouche-74142a193')}>
          <Linkedin size={18} />
        </IconButton>
        <IconButton onClick={sendEmail}>
          <Mail size={18} />
        </IconButton>
      </SocialIcons>
    </StyledFooter>
  );
};

export default Footer;