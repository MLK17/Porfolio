import styled from 'styled-components'

export const StyledContent = styled.div`
  perspective: none;
  width: ${props => props.cardWidth || '100%'};
  height: ${props => props.cardHeight || 'auto'};
  aspect-ratio: ${props => props.aspectRatio || '1'};
  margin: 0 auto;
  max-height: ${props => props.maxHeight || 'calc(100vh - 2rem)'};
  max-width: ${props => props.maxWidth || '1600px'};
  min-width: ${props => props.minWidth || '200px'};
  min-height: ${props => props.minHeight || '120px'};
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent ? props.justifyContent.toLowerCase() : 'center'};
  align-items: ${props => props.alignItems ? props.alignItems.toLowerCase() : 'center'};
  padding: 0;

  /* Tous les écrans larges */
  @media (min-width: 1200px) {
    width: 85%;
    max-width: 1600px;
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
  min-width: ${props => props.minWidth || '300px'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  min-height: ${props => props.minHeight || '120px'};
  max-width: ${props => props.maxWidth || '1400px'};
  margin: ${props => props.margin || '0.5rem'};
  padding: ${props => props.padding || '0'};
  box-sizing: border-box;

  @media (min-width: 1200px) {
    min-width: ${props => props.minWidthLarge || '400px'};
    margin: ${props => props.marginLarge || '1rem'};
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: none;
    margin: 0;
    min-width: ${props => props.minWidthMobile || '100%'};
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
  padding: ${props => props.padding || '1.5rem'};
  
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  @media (min-width: 1200px) {
    border-radius: 20px;
    gap: 0.8rem;
    padding: ${props => props.paddingLarge || '2rem'};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-size: clamp(1.2rem, min(2.5vh, 2.5vw), 2.5rem);
    margin-bottom: clamp(0.2rem, min(1vh, 1vw), 0.6rem);
    line-height: 1.1;
  }

  h2 {
    font-size: clamp(1rem, min(2vh, 2vw), 2rem);
    margin-bottom: clamp(0.15rem, min(0.8vh, 0.8vw), 0.5rem);
    line-height: 1.1;
  }

  h3 {
    font-size: clamp(0.9rem, min(1.8vh, 1.8vw), 1.7rem);
    margin-bottom: clamp(0.1rem, min(0.6vh, 0.6vw), 0.4rem);
  }

  p, ul, ol {
    font-size: clamp(0.8rem, min(1.6vh, 1.6vw), 1.5rem);
    line-height: 1.3;
    margin-bottom: clamp(0.2rem, min(0.8vh, 0.8vw), 0.5rem);
  }

  img {
    max-width: 100%;
    height: auto;
    max-height: min(40vh, 400px);
    object-fit: contain;
    object-position: center;
    margin: 0.5rem auto;
    display: block;
  }
  
  @media (min-width: 2100px) {
    h1 { font-size: clamp(2.2rem, 3.5vw, 3.2rem); }
    h2 { font-size: clamp(1.8rem, 3vw, 2.6rem); }
    h3 { font-size: clamp(1.5rem, 2.5vw, 2.2rem); }
    p, ul, ol { font-size: clamp(1.3rem, 2vw, 1.8rem); }
    img { max-height: min(45vh, 500px); }
  }
  
  @media (min-width: 1800px) and (max-width: 2099px) {
    h1 { font-size: clamp(2rem, 3vw, 2.8rem); }
    h2 { font-size: clamp(1.6rem, 2.5vw, 2.3rem); }
    h3 { font-size: clamp(1.4rem, 2.2vw, 2rem); }
    p, ul, ol { font-size: clamp(1.2rem, 1.8vw, 1.6rem); }
  }


  @media (max-width: 768px) {
    padding: ${props => props.paddingTablet || '0.8rem'};
    margin: ${props => props.marginTablet || '0 0.3rem'};
    
    h1 { font-size: ${props => props.h1FontSizeTablet || '1.2rem'}; }
    h2 { font-size: ${props => props.h2FontSizeTablet || '1rem'}; }
    h3 { font-size: ${props => props.h3FontSizeTablet || '0.9rem'}; }
    p, ul, ol { font-size: ${props => props.pFontSizeTablet || '0.85rem'}; }
  }

  @media (max-width: 480px) {
    padding: ${props => props.paddingMobile || '0.6rem'};
    margin: ${props => props.marginMobile || '0 0.2rem'};
    gap: ${props => props.gapMobile || '0.3rem'};
    border-radius: ${props => props.borderRadiusMobile || '8px'};
  }

  @media (max-height: 480px) {
    padding: ${props => props.paddingShortScreen || '0.5rem'};
    gap: ${props => props.gapShortScreen || '0.2rem'};
    
    h1 { font-size: ${props => props.h1FontSizeShortScreen || 'min(2.8vh, 1.1rem)'}; }
    h2 { font-size: ${props => props.h2FontSizeShortScreen || 'min(2.4vh, 0.9rem)'}; }
    h3 { font-size: ${props => props.h3FontSizeShortScreen || 'min(2vh, 0.8rem)'}; }
    p, ul, ol { font-size: ${props => props.pFontSizeShortScreen || 'min(1.8vh, 0.75rem)'}; }
  }

  @media (max-height: 600px) {
    padding: ${props => props.paddingMediumScreen || '0.5rem'};
    gap: ${props => props.gapMediumScreen || '0.2rem'};
    
    h1 { font-size: ${props => props.h1FontSizeMediumScreen || 'min(3vh, 1rem)'}; }
    h2 { font-size: ${props => props.h2FontSizeMediumScreen || 'min(2.5vh, 0.9rem)'}; }
    h3 { font-size: ${props => props.h3FontSizeMediumScreen || 'min(2.2vh, 0.8rem)'}; }
    p, ul, ol { font-size: ${props => props.pFontSizeMediumScreen || 'min(2vh, 0.75rem)'}; }
    img { max-height: ${props => props.imgMaxHeightMediumScreen || 'min(40vh, 160px)'}; }
    section { margin-bottom: ${props => props.sectionMarginBottomMediumScreen || 'min(1.5vh, 0.5rem)'}; }
  }
`