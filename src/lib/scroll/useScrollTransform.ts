import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from './ScrollRig';
import { Object3D } from 'three';
import { lerp, mapRange } from '@/lib/utils';

/**
 * Hook for scroll-based 3D transformations
 * 
 * Usage:
 * const meshRef = useRef();
 * useScrollTransform(meshRef, {
 *   scrollRange: [0, 1],
 *   position: [[0, 0, 0], [5, 0, 0]],
 *   rotation: [[0, 0, 0], [0, Math.PI, 0]],
 *   scale: [1, 2],
 * });
 */

interface ScrollTransformConfig {
  scrollRange?: [number, number];
  position?: [[number, number, number], [number, number, number]];
  rotation?: [[number, number, number], [number, number, number]];
  scale?: [number, number] | [[number, number, number], [number, number, number]];
  opacity?: [number, number];
}

export function useScrollTransform(
  ref: React.RefObject<Object3D>,
  config: ScrollTransformConfig
) {
  const { progress } = useScroll();
  const { scrollRange = [0, 1], position, rotation, scale, opacity } = config;

  useFrame((state, delta) => {
    if (!ref.current) return;

    // Map scroll progress to config range
    const rangeProgress = mapRange(
      progress,
      scrollRange[0],
      scrollRange[1],
      0,
      1
    );

    const clampedProgress = Math.max(0, Math.min(1, rangeProgress));

    // Apply position transform
    if (position) {
      ref.current.position.x = lerp(position[0][0], position[1][0], clampedProgress);
      ref.current.position.y = lerp(position[0][1], position[1][1], clampedProgress);
      ref.current.position.z = lerp(position[0][2], position[1][2], clampedProgress);
    }

    // Apply rotation transform
    if (rotation) {
      ref.current.rotation.x = lerp(rotation[0][0], rotation[1][0], clampedProgress);
      ref.current.rotation.y = lerp(rotation[0][1], rotation[1][1], clampedProgress);
      ref.current.rotation.z = lerp(rotation[0][2], rotation[1][2], clampedProgress);
    }

    // Apply scale transform
    if (scale) {
      if (typeof scale[0] === 'number') {
        const scaleValue = lerp(scale[0], scale[1] as number, clampedProgress);
        ref.current.scale.setScalar(scaleValue);
      } else {
        ref.current.scale.x = lerp(scale[0][0], scale[1][0], clampedProgress);
        ref.current.scale.y = lerp(scale[0][1], scale[1][1], clampedProgress);
        ref.current.scale.z = lerp(scale[0][2], scale[1][2], clampedProgress);
      }
    }

    // Apply opacity
    if (opacity) {
      ref.current.traverse((child: any) => {
        if (child.isMesh && child.material) {
          child.material.opacity = lerp(opacity[0], opacity[1], clampedProgress);
          child.material.transparent = true;
        }
      });
    }
  });
}