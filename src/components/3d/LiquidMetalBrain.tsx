"use client";
import React, { useRef } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import { useControls } from 'leva'

// Shader Definition
const BrainMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color(0.2, 0.6, 1.0), uSpeed: 0.2 },
  `varying vec2 vUv; varying float vDistortion; uniform float uTime; uniform float uSpeed;
   float snoise(vec3 v) { return sin(v.x*10.0+uTime)*cos(v.y*10.0); }
   void main() { vUv = uv; vec3 pos = position; float noise = snoise(pos + uTime * uSpeed);
   vDistortion = noise; pos += normal * noise * 0.1;
   gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); }`,
  `varying float vDistortion; uniform vec3 uColor;
   void main() { gl_FragColor = vec4(uColor + vDistortion * 0.5, 0.8); }`
)
extend({ BrainMaterial })

export default function LiquidMetalBrain() {
  const mat = useRef()
  
  // Step 3: Real-time Controls
  const { color, speed } = useControls({
    color: { value: '#3264ff' },
    speed: { value: 0.2, min: 0, max: 1 }
  })

  useFrame((state) => { 
    if(mat.current) {
      mat.current.uTime = state.clock.getElapsedTime()
      mat.current.uColor = new THREE.Color(color)
      mat.current.uSpeed = speed
    }
  })

  return <mesh><sphereGeometry args={[1.5, 64, 64]} /><brainMaterial ref={mat} transparent /></mesh>
}
