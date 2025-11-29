'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { 
  Environment, 
  Lightformer,
  ContactShadows,
  BakeShadows,
  AdaptiveDpr,
  AdaptiveEvents,
} from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { useRef } from 'react';
import * as THREE from 'three';

/**
 * Professional Scene Setup
 * 
 * Features:
 * - Cinematic lighting
 * - Post-processing effects
 * - Adaptive performance
 * - Contact shadows
 */

export default function Scene({ children }: { children: React.ReactNode }) {
  const { camera } = useThree();
  const composerRef = useRef<any>();

  // Smooth camera movements
  useFrame((state, delta) => {
    if (camera) {
      // Subtle camera shake for cinematic feel
      camera.position.x = THREE.MathUtils.lerp(
        camera.position.x,
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1,
        0.01
      );
    }
  });

  return (
    <>
      {/* Adaptive performance based on device */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      {/* Cinematic lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Environment for reflections */}
      <Environment resolution={256} background={false}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>

      {/* Contact shadows for realism */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={4}
      />
      <BakeShadows />

      {/* Scene content */}
      {children}

      {/* Post-processing for cinematic look */}
      <EffectComposer ref={composerRef} multisampling={8}>
        <Bloom
          luminanceThreshold={0.9}
          luminanceSmoothing={0.9}
          intensity={0.5}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={new THREE.Vector2(0.001, 0.001)}
        />
      </EffectComposer>
    </>
  );
}