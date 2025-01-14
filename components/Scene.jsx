import React from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box(props) {
  const meshRef = React.useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <OrbitControls />
    </>
  )
} 