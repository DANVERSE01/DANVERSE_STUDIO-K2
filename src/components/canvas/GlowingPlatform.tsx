'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GlowingPlatformProps {
  position?: [number, number, number];
  radius?: number;
}

export default function GlowingPlatform({ 
  position = [0, -2.5, 0],
  radius = 2.5
}: GlowingPlatformProps) {
  const innerRingRef = useRef<THREE.Mesh>(null);
  const middleRingRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const extraGlowRef = useRef<THREE.Mesh>(null);
  const centerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const pulse = Math.sin(time * 2) * 0.5 + 0.5;
    const slowPulse = Math.sin(time * 0.5) * 0.5 + 0.5;

    if (innerRingRef.current) {
      (innerRingRef.current.material as THREE.MeshBasicMaterial).opacity = 0.5 + pulse * 0.3;
    }
    
    if (middleRingRef.current) {
      (middleRingRef.current.material as THREE.MeshBasicMaterial).opacity = 0.35 + pulse * 0.2;
      middleRingRef.current.rotation.z = time * 0.1;
    }
    
    if (outerRingRef.current) {
      (outerRingRef.current.material as THREE.MeshBasicMaterial).opacity = 0.25 + slowPulse * 0.15;
      outerRingRef.current.rotation.z = -time * 0.05;
    }

    if (extraGlowRef.current) {
      (extraGlowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.15 + slowPulse * 0.1;
      extraGlowRef.current.rotation.z = time * 0.03;
    }

    if (centerRef.current) {
      (centerRef.current.material as THREE.MeshBasicMaterial).opacity = 0.4 + pulse * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Center circle - dark base */}
      <mesh ref={centerRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[radius * 0.8, 64]} />
        <meshBasicMaterial 
          color="#0a0a1a" 
          transparent 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner ring - Cyan - BRIGHTER */}
      <mesh ref={innerRingRef} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 0.75, radius * 0.9, 64]} />
        <meshBasicMaterial 
          color="#00ffcc" 
          transparent 
          opacity={0.5}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Middle ring - Purple - LARGER */}
      <mesh ref={middleRingRef} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 1.0, radius * 1.3, 64]} />
        <meshBasicMaterial 
          color="#ff00ff" 
          transparent 
          opacity={0.35}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer ring - Magenta glow - MUCH LARGER */}
      <mesh ref={outerRingRef} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 1.4, radius * 1.6, 64]} />
        <meshBasicMaterial 
          color="#ff0080" 
          transparent 
          opacity={0.25}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* NEW: Extra outer glow ring - MAXIMUM SIZE */}
      <mesh ref={extraGlowRef} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 1.65, radius * 1.85, 64]} />
        <meshBasicMaterial 
          color="#00ffcc" 
          transparent 
          opacity={0.15}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Grid lines for tech aesthetic */}
      <GridLines radius={radius} />
    </group>
  );
}

// Grid lines component
function GridLines({ radius }: { radius: number }) {
  const linesRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  const points = [];
  const segments = 32;
  
  // Radial lines - EXTENDED
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      Math.cos(angle) * radius * 0.3, 0, Math.sin(angle) * radius * 0.3,
      Math.cos(angle) * radius * 1.5, 0, Math.sin(angle) * radius * 1.5
    );
  }

  // Concentric circles - MORE RINGS
  for (let r = 0.5; r <= 1.5; r += 0.2) {
    for (let i = 0; i < segments; i++) {
      const angle1 = (i / segments) * Math.PI * 2;
      const angle2 = ((i + 1) / segments) * Math.PI * 2;
      points.push(
        Math.cos(angle1) * radius * r, 0, Math.sin(angle1) * radius * r,
        Math.cos(angle2) * radius * r, 0, Math.sin(angle2) * radius * r
      );
    }
  }

  return (
    <lineSegments ref={linesRef} rotation={[-Math.PI / 2, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={new Float32Array(points)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial 
        color="#00ffcc" 
        transparent 
        opacity={0.2}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}