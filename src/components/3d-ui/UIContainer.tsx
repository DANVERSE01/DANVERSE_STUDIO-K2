'use client';

import { Html } from '@react-three/drei';
import { ReactNode } from 'react';

/**
 * 3D UI Container
 * Bridges HTML content into 3D space
 */

interface UIContainerProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  distanceFactor?: number;
  occlude?: boolean;
  children: ReactNode;
  className?: string;
}

export function UIContainer({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  distanceFactor = 10,
  occlude = true,
  children,
  className = '',
}: UIContainerProps) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Html
        transform
        distanceFactor={distanceFactor}
        occlude={occlude}
        style={{
          transition: 'all 0.3s',
          pointerEvents: 'auto',
        }}
        className={className}
      >
        <div
          className="glassmorphism-ui"
          style={{
            background: 'rgba(10, 10, 10, 0.3)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 255, 204, 0.3)',
            borderRadius: '12px',
            padding: '20px',
            color: '#fff',
            fontFamily: 'var(--font-rajdhani)',
            minWidth: '300px',
          }}
        >
          {children}
        </div>
      </Html>
    </group>
  );
}