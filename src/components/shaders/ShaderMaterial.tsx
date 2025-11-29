'use client';

import { useMemo } from 'react';
import { ShaderMaterial as ThreeShaderMaterial } from 'three';
import * as THREE from 'three';

/**
 * Shader Material System
 * Manages custom GLSL shaders
 */

interface ShaderConfig {
  vertexShader: string;
  fragmentShader: string;
  uniforms: Record<string, any>;
}

export function useShaderMaterial(config: ShaderConfig) {
  return useMemo(() => {
    return new ThreeShaderMaterial({
      vertexShader: config.vertexShader,
      fragmentShader: config.fragmentShader,
      uniforms: config.uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [config]);
}

// Vertex shader base (common for all)
export const vertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  
  gl_Position = projectionMatrix * mvPosition;
}
`;