import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import styled from 'styled-components'
import * as THREE from 'three'

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(10,10,10);
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.5s ease-out;
  
  &.fade-out {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`

function LoadingCube() {
  const meshRef = React.useRef()
  const color = new THREE.Color(1, 1, 1)
  const isFinishing = React.useRef(false)
  const startTime = React.useRef(0)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (isFinishing.current) {
      const elapsedTime = time - startTime.current
      const progress = Math.min(elapsedTime * 2, 1) // Animation sur 0.5 secondes
      
      // Zoom vers l'écran
      meshRef.current.position.z += progress * 15
      meshRef.current.scale.set(1 + progress * 2, 1 + progress * 2, 1 + progress * 2)
      
      // Rotation rapide pendant le zoom
      meshRef.current.rotation.x += 0.2
      meshRef.current.rotation.y += 0.3
    } else {
      // Animation normale pendant le chargement
      meshRef.current.rotation.x = time * 0.5
      meshRef.current.rotation.y = time * 3.5
      
      const scale = 1 + Math.sin(time * 3) * 0.05
      meshRef.current.scale.set(scale, scale, scale)
    }
    
    const glowIntensity = 0.6 + Math.sin(time * 3) * 0.2
    meshRef.current.material.emissiveIntensity = glowIntensity
  })

  React.useEffect(() => {
    // Écouter un événement personnalisé pour démarrer l'animation de fin
    const handleFinish = () => {
      isFinishing.current = true
      startTime.current = performance.now() / 1000
    }
    window.addEventListener('loadingFinished', handleFinish)
    return () => window.removeEventListener('loadingFinished', handleFinish)
  }, [])

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhysicalMaterial 
        color={color}
        metalness={0.9}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        emissive={color}
        emissiveIntensity={0.6}
        toneMapped={false}
        transparent
        opacity={0.92}
        reflectivity={1}
      />
    </mesh>
  )
}

export default function LoadingScene() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Déclencher l'animation de fin
      window.dispatchEvent(new Event('loadingFinished'))
      // Attendre que l'animation soit terminée avant de masquer
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContainer className={!isLoading ? 'fade-out' : ''}>
      <Canvas
        camera={{ position: [0, 0, 6] }}
        style={{ background: 'rgb(10,10,10)' }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <LoadingCube />
      </Canvas>
    </LoadingContainer>
  )
}