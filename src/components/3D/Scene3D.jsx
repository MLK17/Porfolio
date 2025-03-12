import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import BouncingCubes from './boucing-cubes'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'

export default function Scene3D() {
  const backgroundGradient = 'linear-gradient(135deg, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)'

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      background: '#ADA996',
      background: '-webkit-linear-gradient(135deg, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',
      background: backgroundGradient,
      isolation: 'auto',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      <Canvas
        camera={{ position: [0, 0, 40], fov: 70 }}
        style={{ 
          background: 'transparent',
          opacity: 0.75,
          mixBlendMode: 'darken',
          width: '100%',
          height: '100%',
        }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight position={[20, 20, 20]} intensity={2.5} color="#000000" />
          <pointLight position={[-20, -20, -20]} intensity={2.5} color="#000000" />
          <BouncingCubes />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.2}
          />
          <EffectComposer>
            <Bloom 
              intensity={2.5}
              luminanceThreshold={0.05}
              luminanceSmoothing={0.9}
              kernelSize={KernelSize.LARGE}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}