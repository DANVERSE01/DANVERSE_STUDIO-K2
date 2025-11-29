'use client';

import { useRef, ReactNode } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from './ScrollRig';
import { Group } from 'three';
import { mapRange } from '@/lib/utils';

/**
 * Scroll-controlled 3D section
 * Binds DOM sections to 3D transformations
 */

interface ScrollSectionProps {
  children: ReactNode;
  sectionIndex: number;
  totalSections: number;
}

export function ScrollSection({ 
  children, 
  sectionIndex, 
  totalSections 
}: ScrollSectionProps) {
  const groupRef = useRef<Group>(null);
  const { progress, section } = useScroll();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Calculate section-specific progress
    const sectionStart = sectionIndex / totalSections;
    const sectionEnd = (sectionIndex + 1) / totalSections;
    const sectionProgress = mapRange(progress, sectionStart, sectionEnd, 0, 1);

    // Only animate when section is active or nearby
    const isActive = section === sectionIndex;
    const isNear = Math.abs(section - sectionIndex) <= 1;

    if (isActive || isNear) {
      // Fade in/out based on section progress
      const opacity = isActive 
        ? Math.min(sectionProgress * 2, (1 - sectionProgress) * 2, 1)
        : 0;

      // Scale effect
      const scale = isActive 
        ? 1 + Math.sin(sectionProgress * Math.PI) * 0.1
        : 0.8;

      // Rotation effect
      const rotation = sectionProgress * Math.PI * 2;

      // Apply transformations
      groupRef.current.scale.setScalar(scale);
      groupRef.current.rotation.y = rotation;
      
      // Traverse children to update opacity
      groupRef.current.traverse((child: any) => {
        if (child.isMesh && child.material) {
          child.material.opacity = opacity;
          child.material.transparent = true;
        }
      });
    }
  });

  return <group ref={groupRef}>{children}</group>;
}