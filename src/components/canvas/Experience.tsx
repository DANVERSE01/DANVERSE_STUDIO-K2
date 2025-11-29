'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './Scene';
import { useThree } from '@react-three/fiber';

const AdaptiveCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getAdaptiveDPR = () => {
    if (typeof window === 'undefined') return [1, 2];
    return window.innerWidth < 768 ? [1, 1] : [1, 1.5];
  };

  return (
    <div ref={containerRef} className="w-full h-screen bg-void">
      <Canvas
        ref={canvasRef}
        dpr={getAdaptiveDPR()}
        performance={{ min: 0.5, max: 1, debounce: 200 }}
        frameloop="demand"
        camera={{
          position: [0, 0, 10],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AdaptiveCanvas;
