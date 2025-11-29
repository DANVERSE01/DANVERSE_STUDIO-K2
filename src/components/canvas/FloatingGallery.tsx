'use client';

import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, MeshTransmissionMaterial } from '@react-three/drei';
import { Mesh } from 'three';

const FloatingGallery: React.FC = () => {
  const containerRef = useRef(null);
  const meshRefs = useRef<Mesh[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    { id: 1, pos: [-5, 2, -5] },
    { id: 2, pos: [0, 0, -8] },
    { id: 3, pos: [5, 2, -5] },
  ];

  useFrame(() => {
    meshRefs.current.forEach((mesh, idx) => {
      if (mesh) {
        mesh.rotation.x += 0.002;
        mesh.rotation.y += 0.003;

        if (hoveredIndex === idx) {
          mesh.scale.lerp({ x: 1.2, y: 1.2, z: 1.2 } as any, 0.1);
        } else {
          mesh.scale.lerp({ x: 1, y: 1, z: 1 } as any, 0.1);
        }
      }
    });
  });

  return (
    <group ref={containerRef} position={[0, -2, 0]}>
      {projects.map((project, idx) => (
        <Box
          key={project.id}
          ref={(el) => {
            if (el) meshRefs.current[idx] = el;
          }}
          position={project.pos as [number, number, number]}
          scale={1}
          onPointerEnter={() => setHoveredIndex(idx)}
          onPointerLeave={() => setHoveredIndex(null)}
        >
          <MeshTransmissionMaterial
            chromaticAberration={0.5}
            transmission={0.9}
            thickness={0.3}
            backside={true}
          />
        </Box>
      ))}
    </group>
  );
};

export default FloatingGallery;
