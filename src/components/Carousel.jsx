import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import Home from '../pages/Home'
import BtsSio from '../pages/BtsSio'
import Competence from '../pages/Competence'
import Skill from '../pages/MyProject'
import VeilleTechno from '../pages/VeilleTechno'
import TableauDeSynthese from '../pages/TableauDeSynthese'

const CarouselContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0 0 0;
  pointer-events: none;
  overflow: hidden;

  .page-wrapper {
    height: 100%;
    overflow-y: auto !important;
    overflow-x: hidden;
    pointer-events: auto;
    box-sizing: border-box;
    padding-bottom: ${({ pathname }) => {
      console.log('Current pathname:', pathname);
      switch (pathname) {

        case '/bts-sio':
          return '60vh';
        case '/skill':
          return '34vh';
        case '/veille-techno':
          return '3rem';
        default:
          return '2rem';
      }
    }};
  }

  .page-content {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: ${({ pathname }) => {
      switch (pathname) {

        case '/bts-sio':
          return 'calc(100% - 80vh)';
        case '/skill':
          return 'calc(100% - 34vh)';
        case '/veille-techno':
          return 'calc(100% - 12rem)';
        default:
          return 'calc(100% - 2rem)';
      }
    }};
  }

  .content-area {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .page-container {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    .page-content {
      max-width: 1600px;
      width: 85%;
    }
  }

  @media (max-width: 1024px) {
    padding: 4rem 0 0 0;
    
    .page-wrapper {
      height: calc(100vh - 4rem);
      overflow-y: auto !important;
      padding-bottom: ${({ pathname }) => {
        switch (pathname) {

          case '/bts-sio':
            return '80vh';
          case '/skill':
            return '34vh';
          case '/veille-techno':
            return '12rem';
          default:
            return '2rem';
        }
      }};
    }
    
    .page-content {
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0 0 0;
    
    .page-wrapper {
      height: calc(100vh - 4rem);
      overflow-y: auto !important;
    }
    
    .page-content {
      padding: 0 0.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 4rem 0 0 0;
    
    .page-content {
      padding: 0;
    }
  }
`

const pages = [
  { path: '/', Component: Home },
  { path: '/bts-sio', Component: BtsSio },
  { path: '/competence', Component: Competence },
  { path: '/skill', Component: Skill },
  { path: '/veille-techno', Component: VeilleTechno },
  { path: '/tableau-de-synthese', Component: TableauDeSynthese },
]

export default function Carousel() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const currentIndex = Math.max(0, pages.findIndex(page => page.path === pathname))
  const CurrentComponent = pages[currentIndex].Component

  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
      }
    }

    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const rotateY = Math.min(Math.max(x * 0.02, -5), 5);
        card.style.setProperty('--rotateY', `${rotateY}deg`);
      });
    };

    document.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('wheel', handleWheel)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <CarouselContainer pathname={pathname}>
        <div className="page-container">
          <div className="page-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                className="page-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="content-area">
                  <CurrentComponent />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </CarouselContainer>
    </>
  )
}