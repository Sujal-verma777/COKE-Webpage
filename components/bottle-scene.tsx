"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { useRef, useState } from "react"
import type { Mesh } from "three"

function CokeBottle({ onClick }: { onClick: () => void }) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  return (
    <group>
      {/* Bottle Body */}
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
        position={[0, 0, 0]}
      >
        <cylinderGeometry args={[0.8, 0.9, 3, 32]} />
        <meshStandardMaterial
          color="#DC143C"
          metalness={0.3}
          roughness={0.4}
          emissive={hovered ? "#FF1744" : "#8B0000"}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>

      {/* Bottle Neck */}
      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.4, 0.8, 0.8, 32]} />
        <meshStandardMaterial color="#DC143C" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Bottle Cap */}
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.3, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Label */}
      <mesh position={[0.81, 0, 0]}>
        <planeGeometry args={[0.3, 1.5]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0} roughness={0.8} />
      </mesh>

      {/* Liquid Inside */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.75, 0.85, 2, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.3} transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

export default function BottleScene({ onBottleClick }: { onBottleClick: () => void }) {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Environment preset="studio" />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#FF1744" />

      <CokeBottle onClick={onBottleClick} />

      <OrbitControls enableZoom={true} enablePan={true} autoRotate autoRotateSpeed={3} />
    </Canvas>
  )
}
