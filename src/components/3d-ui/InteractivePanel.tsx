'use client';

import { useState, useRef } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Interactive 3D Panel
 * Responds to hover and click events
 */

interface InteractivePanelProps {
  position?: [number, number, number];
  title?: string;
  content?: string;
  onClick?: () => void;
}

export function InteractivePanel({
  position = [0, 0, 0],
  title = 'Title',
  content = 'Content',
  onClick,
}: InteractivePanelProps) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const panelRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (panelRef.current) {
      // Hover scale animation
      const targetScale = hovered ? 1.05 : 1;
      panelRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        delta * 5
      );
    }

    if (glowRef.current) {
      // Glow intensity
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      const targetOpacity = hovered ? 0.5 : 0.2;
      material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, delta * 5);
      
      // Pulse animation
      material.opacity += Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setClicked(!clicked);
    onClick?.();
  };

  return (
    <group position={position}>
      {/* Glow effect */}
      <RoundedBox
        ref={glowRef}
        args={[2.1, 1.6, 0.11]}
        radius={0.05}
        smoothness={4}
      >
        <meshBasicMaterial
          color="#00ffcc"
          transparent
          opacity={0.2}
        />
      </RoundedBox>

      {/* Main panel */}
      <RoundedBox
        ref={panelRef}
        args={[2, 1.5, 0.1]}
        radius={0.05}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <meshPhysicalMaterial
          color={clicked ? '#00ffcc' : '#1a1a2e'}
          transparent
          opacity={0.6}
          roughness={0.2}
          metalness={0.8}
          transmission={0.3}
          thickness={0.5}
        />
      </RoundedBox>

      {/* Title text */}
      <Text
        position={[0, 0.4, 0.06]}
        fontSize={0.15}
        color="#00ffcc"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Rajdhani-Bold.woff"
      >
        {title}
      </Text>

      {/* Content text */}
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
        font="/fonts/Rajdhani-Regular.woff"
      >
        {content}
      </Text>
    </group>
  );
}