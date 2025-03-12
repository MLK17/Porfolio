import styled from 'styled-components'

export const StyledContent = styled.div`
  perspective: none;
  width: ${props => props.cardWidth || '95%'};
  height: ${props => props.cardHeight || 'auto'};
  aspect-ratio: ${props => props.aspectRatio || '1'};
  margin: 0.8rem auto;
  max-height: ${props => props.maxHeight || 'calc(100vh - 2rem)'};
  max-width: ${props => props.maxWidth || '1200px'};
  min-width: ${props => props.minWidth || '200px'};
  min-height: ${props => props.minHeight || '120px'};
  box-shadow: none;
  display: flex;
  flex-direction: column;

  /* Écrans larges */
  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (max-width: 900px) {
    width: 98%;
    max-width: 900px;
    margin: 0.5rem auto;
    min-width: unset;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    margin: 0.3rem auto;
  }

  @media (max-width: 480px) {
    padding: 0;
    width: 100%;
    min-height: 100px;
    margin: 0.2rem auto;
    min-width: unset;
  }

  @media (max-height: 480px) {
    height: calc(100vh - 7rem);
    max-width: 90vw;
    margin: 0.5rem auto;
  }

  @media (max-height: 600px) {
    height: calc(100vh - 6rem);
    max-width: 85vw;
    aspect-ratio: auto;
    margin: 0.5rem auto;
  }
`

export const CardContainer = styled.div`
  flex: 1 1 auto;
  min-width: 450px;
  width: 100%;
  height: 100%;
  min-height: 120px;

  @media (max-width: 800px) {
    width: 100%;
    max-width: none;
    margin: 0;
  }
`

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0,0,0);
  background: linear-gradient(30deg, rgba(0,0,0,1) 0%, rgba(5,5,5,0.7) 50%, rgba(0,0,0,1) 100%);
  border-radius: 16px;
  position: relative;
  transform-style: flat;
  will-change: auto;
  transition: none;
 
  color: #f4f4f4;
  backdrop-filter: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-size: clamp(1.2rem, min(2.5vh, 2.5vw), 1.8rem);
    margin-bottom: clamp(0.2rem, min(1vh, 1vw), 0.5rem);
    line-height: 1.1;
  }

  h2 {
    font-size: clamp(1rem, min(2vh, 2vw), 1.5rem);
    margin-bottom: clamp(0.15rem, min(0.8vh, 0.8vw), 0.4rem);
    line-height: 1.1;
  }

  h3 {
    font-size: clamp(0.9rem, min(1.8vh, 1.8vw), 1.3rem);
    margin-bottom: clamp(0.1rem, min(0.6vh, 0.6vw), 0.3rem);
  }

  p, ul, ol {
    font-size: clamp(0.8rem, min(1.6vh, 1.6vw), 1.1rem);
    line-height: 1.3;
    margin-bottom: clamp(0.2rem, min(0.8vh, 0.8vw), 0.4rem);
  }

  img {
    max-width: 100%;
    height: auto;
    max-height: min(30vh, 300px);
    object-fit: contain;
    object-position: center;
    margin: 0.5rem auto;
    display: block;
  }


  @media (max-width: 768px) {
    padding: 0.8rem;
    margin: 0 0.3rem;
    
    h1 { 
      font-size: 1.2rem; 
    }
    h2 { 
      font-size: 1rem; 
    }
    h3 { 
      font-size: 0.9rem; 
    }
    p, ul, ol { 
      font-size: 0.85rem; 
    }
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    margin: 0 0.2rem;
    gap: 0.3rem;
    border-radius: 8px;
  }

  @media (max-height: 480px) {
    padding: 0.5rem;
    gap: 0.2rem;
    
    h1 { 
      font-size: min(2.8vh, 1.1rem); 
    }
    h2 { 
      font-size: min(2.4vh, 0.9rem); 
    }
    h3 { 
      font-size: min(2vh, 0.8rem); 
    }
    p, ul, ol { 
      font-size: min(1.8vh, 0.75rem); 
    }
  }

  @media (max-height: 600px) {
    padding: 0.5rem;
    gap: 0.2rem;
    
    h1 { 
      font-size: min(3vh, 1rem); 
    }
    h2 { 
      font-size: min(2.5vh, 0.9rem); 
    }
    h3 { 
      font-size: min(2.2vh, 0.8rem); 
    }
    p, ul, ol { 
      font-size: min(2vh, 0.75rem); 
    }
    img { 
      max-height: min(40vh, 160px); 
    }
    section { 
      margin-bottom: min(1.5vh, 0.5rem); 
    }
  }
`