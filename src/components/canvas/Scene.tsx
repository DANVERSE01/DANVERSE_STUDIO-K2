'use client';

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { PerspectiveCamera } from '@react-three/drei';
import NeuralTunnel from './NeuralTunnel';
import FloatingGallery from './FloatingGallery';
import AICore from './AICore';

const Scene: React.FC = () => {
  const cameraRef = useRef(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (cameraRef.current) {
      const scroll = state.clock.getElapsedTime() * 0.1;
      cameraRef.current.position.z = 10 + scroll * 0.5;
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 10]}
        fov={45}
      />

      <color attach="background" args={['#030305']} />
      <fog attach="fog" args={['#030305', 1, 100]} />

      {/* Ambient & Directional Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#00F0FF"
        castShadow
      />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#BD00FF" />

      {/* 3D Sections */}
      <NeuralTunnel />
      <FloatingGallery />
      <AICore />

      {/* Post-Processing */}
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
          intensity={0.8}
        />
        <ChromaticAberration offset={[0.001, 0.001]} />
        <Noise opacity={0.02} />
      </EffectComposer>
    </>
  );
};

export default Scene;
