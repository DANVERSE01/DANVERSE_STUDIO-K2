'use client';

import { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { lerp, clamp } from '@/lib/utils';
import * as THREE from 'three';

/**
 * Cinematic Scroll Rig
 * Based on 14islands/r3f-scroll-rig
 * 
 * Features:
 * - Scroll-triggered 3D transformations
 * - Smooth interpolation
 * - Section-based camera control
 * - DOM-to-3D binding
 */

interface ScrollState {
  progress: number;
  section: number;
  velocity: number;
  direction: 'up' | 'down';
}

const ScrollContext = createContext<ScrollState>({
  progress: 0,
  section: 0,
  velocity: 0,
  direction: 'down',
});

export const useScroll = () => useContext(ScrollContext);

interface ScrollRigProps {
  children: ReactNode;
  sections?: number;
  damping?: number;
}

export function ScrollRig({ children, sections = 5, damping = 0.1 }: ScrollRigProps) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    progress: 0,
    section: 0,
    velocity: 0,
    direction: 'down',
  });

  const lastScroll = useRef(0);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = clamp(scroll / maxScroll, 0, 1);
      const section = Math.floor(progress * sections);
      const velocity = scroll - lastScroll.current;
      const direction = velocity > 0 ? 'down' : 'up';

      targetScroll.current = progress;
      lastScroll.current = scroll;

      setScrollState({
        progress,
        section: Math.min(section, sections - 1),
        velocity: Math.abs(velocity),
        direction,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <ScrollContext.Provider value={scrollState}>
      {children}
    </ScrollContext.Provider>
  );
}

/**
 * Scroll-controlled camera movement
 */
export function ScrollCamera({ sections = 5 }: { sections?: number }) {
  const { camera } = useThree();
  const { progress, section } = useScroll();
  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());

  // Define camera positions for each section
  const cameraPositions = [
    new THREE.Vector3(0, 0, 10),      // Section 0: Front view
    new THREE.Vector3(5, 2, 8),       // Section 1: Side angle
    new THREE.Vector3(0, 5, 12),      // Section 2: Top view
    new THREE.Vector3(-5, 0, 8),      // Section 3: Other side
    new THREE.Vector3(0, -2, 15),     // Section 4: Far view
  ];

  const lookAtPositions = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 0),
  ];

  useFrame((state, delta) => {
    // Smooth transition between sections
    const sectionProgress = (progress * sections) % 1;
    const currentSection = Math.floor(progress * sections);
    const nextSection = Math.min(currentSection + 1, sections - 1);

    // Interpolate camera position
    const startPos = cameraPositions[currentSection] || cameraPositions[0];
    const endPos = cameraPositions[nextSection] || cameraPositions[sections - 1];
    
    targetPosition.current.lerpVectors(startPos, endPos, sectionProgress);
    
    // Interpolate look-at position
    const startLookAt = lookAtPositions[currentSection] || lookAtPositions[0];
    const endLookAt = lookAtPositions[nextSection] || lookAtPositions[sections - 1];
    
    targetLookAt.current.lerpVectors(startLookAt, endLookAt, sectionProgress);

    // Smooth camera movement
    camera.position.lerp(targetPosition.current, delta * 2);
    camera.lookAt(targetLookAt.current);
  });

  return null;
}