import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'

function LoadingBar() {
  const { progress } = useProgress()
  
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[progress / 100, 0.1, 0.1]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  )
}

export default function LoadingScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <LoadingBar />
    </Canvas>
  )
} 