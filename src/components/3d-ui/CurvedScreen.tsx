'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Curved 3D Screen Component
 * Based on pmndrs/uikit patterns
 * 
 * Features:
 * - Curved glass surface
 * - Transmission/refraction
 * - Glassmorphism effect
 * - Interactive hover states
 */

interface CurvedScreenProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
  curve?: number;
  children?: React.ReactNode;
}

export function CurvedScreen({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  width = 4,
  height = 2.5,
  curve = 0.3,
  children,
}: CurvedScreenProps) {
  const groupRef = useRef<THREE.Group>(null);
  const glassRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (glassRef.current) {
      // Subtle animation
      glassRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      {/* Curved glass panel */}
      <mesh ref={glassRef} castShadow>
        <cylinderGeometry args={[width / curve, width / curve, height, 32, 1, true, 0, Math.PI]} />
        <MeshTransmissionMaterial
          transmission={0.9}
          thickness={0.5}
          roughness={0.1}
          chromaticAberration={0.05}
          anisotropy={0.5}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          ior={1.5}
          color="#ffffff"
        />
      </mesh>

      {/* Content container */}
      <group position={[0, 0, 0.05]}>
        {children}
      </group>

      {/* Border glow */}
      <mesh>
        <cylinderGeometry args={[width / curve + 0.02, width / curve + 0.02, height + 0.02, 32, 1, true, 0, Math.PI]} />
        <meshBasicMaterial
          color="#00ffcc"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}