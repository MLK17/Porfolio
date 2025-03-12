import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingScene from './components/ui/LoadingScene';
import profilePhoto from '/public/images/PhotodeProfil.png';

const Scene3D = lazy(() => import('./components/3D/Scene3D'));
const Navigation = lazy(() => import('./components/Navigation'));
const Carousel = lazy(() => import('./components/Carousel'));

const preloadAssets = async () => {
  const components = [
    import('./components/3D/Scene3D'),
    import('./components/Navigation'),
    import('./components/Carousel'),
    import('./pages/Home'),
    import('./pages/BtsSio'),
    import('./pages/Competence'),
    import('./pages/MyProject'),
    import('./pages/VeilleTechno')
  ];

  const preloadImage = (src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src.default || src;
  });

  await Promise.all([
    Promise.all(components),
    preloadImage(profilePhoto),
    new Promise(resolve => setTimeout(resolve, 2500))
  ]);
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    preloadAssets()
      .then(() => {
        setAssetsLoaded(true);
        setTimeout(() => setIsLoading(false), 300);
      })
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScene 
          progress={assetsLoaded ? 100 : 0} 
          message={assetsLoaded ? "Chargement terminé" : "Chargement des composants..."}
        />
      ) : (
        <div className="app" style={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '2.5rem' // Ajout crucial ici
        }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Scene3D />
            <Navigation />
            
            {/* Contenu principal avec marge basse */}
            <div style={{ 
              flex: 1,
              paddingTop: '4rem', // Ajuster selon la hauteur de la navigation
              overflowY: 'auto' // Permet le scroll uniquement dans cette zone
            }}>
              <Carousel />
            </div>
          </Suspense>
        </div>
      )}
    </BrowserRouter>
  );
}
