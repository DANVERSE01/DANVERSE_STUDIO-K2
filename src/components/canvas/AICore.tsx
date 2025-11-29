'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshWobbleMaterial } from '@react-three/drei';
import { Mesh } from 'three';

const AICore: React.FC = () => {
  const coreRef = useRef<Mesh>(null);
  const layer2Ref = useRef<Mesh>(null);
  const layer3Ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += 0.001;
      coreRef.current.rotation.y += 0.002;
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      coreRef.current.scale.set(scale, scale, scale);
    }

    if (layer2Ref.current) {
      layer2Ref.current.rotation.x -= 0.0015;
      layer2Ref.current.rotation.y -= 0.001;
    }

    if (layer3Ref.current) {
      layer3Ref.current.rotation.x += 0.0008;
      layer3Ref.current.rotation.z += 0.0012;
    }
  });

  return (
    <group position={[0, 0, -15]}>
      {/* Core Icosahedron */}
      <Icosahedron ref={coreRef} args={[1.5, 4]} position={[0, 0, 0]}>
        <MeshWobbleMaterial
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={0.5}
          wireframe={false}
          speed={2}
          factor={0.3}
        />
      </Icosahedron>

      {/* Layer 2 */}
      <Icosahedron ref={layer2Ref} args={[2, 3]} position={[0, 0, 0]}>
        <MeshWobbleMaterial
          color="#BD00FF"
          wireframe={true}
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
          speed={1.5}
          factor={0.2}
        />
      </Icosahedron>

      {/* Layer 3 */}
      <Icosahedron ref={layer3Ref} args={[3, 2]} position={[0, 0, 0]}>
        <MeshWobbleMaterial
          color="#00F0FF"
          wireframe={true}
          transparent
          opacity={0.3}
          speed={1}
          factor={0.15}
        />
      </Icosahedron>
    </group>
  );
};

export default AICore;
