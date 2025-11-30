'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

interface GlassCardProps {
  position: [number, number, number];
  title: string;
  icon?: string;
}

export default function GlassCard({ position, title, icon }: GlassCardProps) {
  const cardRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (cardRef.current) {
      // Gentle float animation
      cardRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[1]) * 0.1;
      cardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }

    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.5 + 0.5;
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.1 + pulse * 0.1;
    }
  });

  return (
    <group ref={cardRef} position={position}>
      {/* Glow background */}
      <mesh ref={glowRef} position={[0, 0, -0.05]}>
        <planeGeometry args={[1.5, 0.8]} />
        <meshBasicMaterial
          color="#00ffcc"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Glass card */}
      <RoundedBox args={[1.3, 0.7, 0.05]} radius={0.05} smoothness={4}>
        <meshPhysicalMaterial
          color="#0a0a1a"
          metalness={0.1}
          roughness={0.2}
          transmission={0.6}
          thickness={0.5}
          transparent
          opacity={0.3}
        />
      </RoundedBox>

      {/* Border frame */}
      <RoundedBox args={[1.35, 0.75, 0.02]} radius={0.05} smoothness={4}>
        <meshBasicMaterial
          color="#00ffcc"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </RoundedBox>

      {/* Icon placeholder */}
      {icon && (
        <mesh position={[0, 0.15, 0.03]}>
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial color="#00ffcc" transparent opacity={0.6} />
        </mesh>
      )}

      {/* Title text */}
      <Text
        position={[0, -0.05, 0.03]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Rajdhani-Bold.ttf"
        letterSpacing={0.05}
      >
        {title}
      </Text>

      {/* Corner accents */}
      <CornerAccents size={0.65} />
    </group>
  );
}

function CornerAccents({ size }: { size: number }) {
  const corners = [
    [-size, size, 0.03],
    [size, size, 0.03],
    [-size, -size, 0.03],
    [size, -size, 0.03],
  ];

  return (
    <>
      {corners.map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.05, 0.02, 0.01]} />
          <meshBasicMaterial color="#00ffcc" transparent opacity={0.8} />
        </mesh>
      ))}
    </>
  );
}