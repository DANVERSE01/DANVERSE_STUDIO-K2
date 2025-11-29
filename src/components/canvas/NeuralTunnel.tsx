'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { BufferGeometry, BufferAttribute, Points, PointsMaterial, Color } from 'three';

const NeuralTunnel: React.FC = () => {
  const pointsRef = useRef<Points>(null);
  const { viewport } = useThree();
  const particleCount = viewport.width < 5 ? 3000 : 10000;

  const { geometry, material } = useMemo(() => {
    const geo = new BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 3 + 1;
      const z = (Math.random() - 0.5) * 50;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = z;

      const color = new Color();
      color.setHSL(Math.random() * 0.1 + 0.5, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geo.setAttribute('position', new BufferAttribute(positions, 3));
    geo.setAttribute('color', new BufferAttribute(colors, 3));

    const mat = new PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      vertexColors: true,
    });

    return { geometry: geo, material: mat };
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z += 0.001;
      pointsRef.current.position.z = -clock.getElapsedTime() * 2;
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
};

export default NeuralTunnel;
