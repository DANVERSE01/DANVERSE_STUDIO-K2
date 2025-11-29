'use client';

import { RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Glassmorphism 3D Panel
 * Floating glass UI element with blur and transparency
 */

interface GlassPanelProps {
  position?: [number, number, number];
  width?: number;
  height?: number;
  depth?: number;
  color?: string;
  opacity?: number;
  blur?: number;
  children?: React.ReactNode;
}

export function GlassPanel({
  position = [0, 0, 0],
  width = 2,
  height = 1.5,
  depth = 0.1,
  color = '#1a1a2e',
  opacity = 0.3,
  blur = 1,
  children,
}: GlassPanelProps) {
  const panelRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (panelRef.current) {
      // Float animation
      panelRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.0005;
    }
  });

  return (
    <group position={position}>
      {/* Main glass panel */}
      <RoundedBox
        ref={panelRef}
        args={[width, height, depth]}
        radius={0.05}
        smoothness={4}
        castShadow
      >
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={opacity}
          roughness={0.1}
          metalness={0.1}
          transmission={0.8}
          thickness={0.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </RoundedBox>

      {/* Border highlight */}
      <RoundedBox
        args={[width + 0.01, height + 0.01, depth + 0.01]}
        radius={0.05}
        smoothness={4}
      >
        <meshBasicMaterial
          color="#00ffcc"
          transparent
          opacity={0.2}
          wireframe
        />
      </RoundedBox>

      {/* Content */}
      <group position={[0, 0, depth / 2 + 0.01]}>
        {children}
      </group>
    </group>
  );
}