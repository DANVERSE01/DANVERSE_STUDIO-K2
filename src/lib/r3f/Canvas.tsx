'use client';

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { r3f } from '@/lib/r3f/helpers/global';
import * as THREE from 'three';
import { Suspense } from 'react';

/**
 * Professional R3F Canvas Setup
 * Based on pmndrs/react-three-next best practices
 * 
 * Features:
 * - Optimized WebGL settings
 * - Performance monitoring
 * - Scene persistence
 * - Tone mapping for cinematic look
 */

export default function R3FCanvas({ children, ...props }: any) {
  return (
    <Canvas
      {...props}
      gl={{
        // Performance optimizations
        powerPreference: 'high-performance',
        antialias: true,
        alpha: true,
        
        // Cinematic rendering
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
        
        // Output encoding for proper colors
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={{
        position: [0, 0, 10],
        fov: 45,
        near: 0.1,
        far: 1000,
      }}
      shadows
      dpr={[1, 2]} // Adaptive pixel ratio
      frameloop="always"
      eventSource={typeof window !== 'undefined' ? document.getElementById('root') : undefined}
      eventPrefix="client"
    >
      {/* Performance monitoring */}
      {process.env.NODE_ENV === 'development' && (
        <r3f.Perf position="top-left" />
      )}
      
      <Suspense fallback={null}>
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}