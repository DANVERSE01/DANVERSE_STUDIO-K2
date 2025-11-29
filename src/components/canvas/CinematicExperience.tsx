'use client';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Scene from '@/lib/r3f/Scene';
import { Suspense } from 'react';

/**
 * Cinematic Experience Wrapper
 * Combines all 3D elements with professional setup
 */

export default function CinematicExperience() {
  return (
    <>
      {/* Cinematic camera setup */}
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 10]}
        fov={45}
        near={0.1}
        far={1000}
      />

      {/* Smooth orbit controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={20}
      />

      {/* Professional scene setup */}
      <Suspense fallback={null}>
        <Scene>
          {/* Your 3D content will go here */}
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#00ffcc" metalness={0.8} roughness={0.2} />
          </mesh>
        </Scene>
      </Suspense>
    </>
  );
}