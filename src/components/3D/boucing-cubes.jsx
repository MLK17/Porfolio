"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const CUBE_COUNT = 50
const BOUNDS = 50
const CUBE_SIZE = 2.5
const SPEED_FACTOR = 0.06
const MAX_VELOCITY = 0.2

function Cube({ initialPosition, initialVelocity }) {
  const meshRef = useRef()
  const positionRef = useRef(initialPosition)
  const velocityRef = useRef(initialVelocity)
  
  const color = useMemo(() => {
    return new THREE.Color(0, 0, 0)
  }, [])

  const clampVelocity = (velocity) => {
    velocity.x = Math.max(Math.min(velocity.x, MAX_VELOCITY), -MAX_VELOCITY)
    velocity.y = Math.max(Math.min(velocity.y, MAX_VELOCITY), -MAX_VELOCITY)
    velocity.z = Math.max(Math.min(velocity.z, MAX_VELOCITY), -MAX_VELOCITY)
    return velocity
  }

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()
    
    const newPosition = positionRef.current.clone().add(velocityRef.current)
    const newVelocity = velocityRef.current.clone()

    if (Math.abs(newPosition.x) + CUBE_SIZE / 2 > BOUNDS) {
      newPosition.x = Math.sign(newPosition.x) * (BOUNDS - CUBE_SIZE / 2)
      newVelocity.x *= -1
      newVelocity.y += (Math.random() - 0.5) * 0.03
      newVelocity.z += (Math.random() - 0.5) * 0.03
    }
    if (Math.abs(newPosition.y) + CUBE_SIZE / 2 > BOUNDS) {
      newPosition.y = Math.sign(newPosition.y) * (BOUNDS - CUBE_SIZE / 2)
      newVelocity.y *= -1
      newVelocity.x += (Math.random() - 0.5) * 0.03
      newVelocity.z += (Math.random() - 0.5) * 0.03
    }
    if (Math.abs(newPosition.z) + CUBE_SIZE / 2 > BOUNDS) {
      newPosition.z = Math.sign(newPosition.z) * (BOUNDS - CUBE_SIZE / 2)
      newVelocity.z *= -1
      newVelocity.x += (Math.random() - 0.5) * 0.03
      newVelocity.y += (Math.random() - 0.5) * 0.03
    }

    newVelocity.multiplyScalar(0.998)
    clampVelocity(newVelocity)

    positionRef.current = newPosition
    velocityRef.current = newVelocity
    meshRef.current.position.copy(newPosition)
    meshRef.current.rotation.x += 0.003
    meshRef.current.rotation.y += 0.003
  })

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
      <meshPhysicalMaterial 
        color={color}
        metalness={0.9}
        roughness={0.2}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
        emissive={color}
        emissiveIntensity={0.4}
        toneMapped={false}
        transparent
        opacity={0.85}
        reflectivity={0.7}
      />
    </mesh>
  )
}

export default function BouncingCubes() {
  const cubes = useMemo(() => {
    const temp = []
    for (let i = 0; i < CUBE_COUNT; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * BOUNDS * 2,
        (Math.random() - 0.5) * BOUNDS * 2,
        (Math.random() - 0.5) * BOUNDS * 2
      )
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * SPEED_FACTOR,
        (Math.random() - 0.5) * SPEED_FACTOR,
        (Math.random() - 0.5) * SPEED_FACTOR
      )
      
      temp.push({ position, velocity })
    }
    return temp
  }, [])

  return (
    <group>
      {cubes.map((cube, i) => (
        <Cube
          key={i}
          initialPosition={cube.position}
          initialVelocity={cube.velocity}
        />
      ))}
    </group>
  )
}
