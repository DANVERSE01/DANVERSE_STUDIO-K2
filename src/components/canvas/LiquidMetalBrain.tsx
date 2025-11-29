'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { vertexShader } from '../shaders/ShaderMaterial';

/**
 * Liquid Metal Brain - HERO COMPONENT
 * The centerpiece of DANVERSE Studio
 * 
 * Features:
 * - Liquid metal flowing effect
 * - Neural network patterns
 * - Chromatic aberration
 * - Interactive morphing
 * - Bioluminescent glow
 */

interface LiquidMetalBrainProps {
  position?: [number, number, number];
  scale?: number;
}

export default function LiquidMetalBrain({ 
  position = [0, 0, 0], 
  scale = 1 
}: LiquidMetalBrainProps) {
  const brainRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  // Liquid metal shader
  const liquidMetalShader = useMemo(() => {
    return {
      vertexShader,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorPrimary;
        uniform vec3 uColorSecondary;
        uniform float uFlowSpeed;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vViewPosition;
        
        // Voronoi for liquid cells
        vec2 hash2(vec2 p) {
          p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
          return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
        }
        
        float voronoi(vec2 p, float time) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float minDist = 1.0;
          
          for(int y = -1; y <= 1; y++) {
            for(int x = -1; x <= 1; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = hash2(i + neighbor);
              point = 0.5 + 0.5 * sin(time + 6.2831 * point);
              vec2 diff = neighbor + point - f;
              float dist = length(diff);
              minDist = min(minDist, dist);
            }
          }
          return minDist;
        }
        
        void main() {
          float time = uTime * uFlowSpeed;
          
          // Flowing UV distortion
          vec2 flowUV = vUv * 4.0;
          flowUV.x += sin(vUv.y * 5.0 + time) * 0.1;
          flowUV.y += cos(vUv.x * 5.0 - time) * 0.1;
          
          // Multi-scale voronoi
          float cells = voronoi(flowUV, time);
          float cells2 = voronoi(flowUV * 2.0, time * 0.5);
          float liquid = cells * 0.7 + cells2 * 0.3;
          
          // Fresnel
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);
          
          // Color mixing with chromatic aberration
          vec3 colorR = mix(uColorPrimary, uColorSecondary, liquid + 0.02);
          vec3 colorG = mix(uColorPrimary, uColorSecondary, liquid);
          vec3 colorB = mix(uColorPrimary, uColorSecondary, liquid - 0.02);
          vec3 color = vec3(colorR.r, colorG.g, colorB.b);
          
          // Metallic highlights
          color += fresnel * vec3(1.0) * 0.5;
          color += smoothstep(0.8, 1.0, liquid) * vec3(1.0) * 0.3;
          
          // Flowing highlights
          float flow = sin(vPosition.x * 5.0 + time * 2.0) * 0.5 + 0.5;
          color += flow * uColorSecondary * 0.2;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uColorPrimary: { value: new THREE.Color('#00ffcc') },
        uColorSecondary: { value: new THREE.Color('#ff00ff') },
        uFlowSpeed: { value: 0.3 },
      },
    };
  }, []);

  // Animation
  useFrame((state, delta) => {
    if (brainRef.current) {
      // Update shader time
      const material = brainRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      
      // Gentle rotation
      brainRef.current.rotation.y += delta * 0.1;
      brainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Breathing scale effect
      const breathe = Math.sin(state.clock.elapsedTime * 0.5) * 0.02 + 1;
      brainRef.current.scale.setScalar(scale * breathe);
    }
    
    if (glowRef.current) {
      // Pulsing glow
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.3 + 0.7;
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = pulse * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Main brain with liquid metal shader */}
      <mesh ref={brainRef}>
        <sphereGeometry args={[2, 128, 128]} />
        <shaderMaterial
          attach="material"
          {...liquidMetalShader}
          transparent={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Outer glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.15, 64, 64]} />
        <meshBasicMaterial
          color="#00ffcc"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Glass outer shell */}
      <Sphere args={[2.3, 64, 64]}>
        <MeshTransmissionMaterial
          transmission={0.95}
          thickness={0.2}
          roughness={0}
          chromaticAberration={0.05}
          anisotropy={0.5}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.1}
          ior={1.5}
          color="#ffffff"
        />
      </Sphere>

      {/* Neural ring particles */}
      <NeuralRing radius={2.5} particleCount={50} />
    </group>
  );
}

/**
 * Neural connection ring
 */
function NeuralRing({ radius, particleCount }: { radius: number; particleCount: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 0.5;
      const z = Math.sin(angle) * radius;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.2 + 0.5, 1, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, [particleCount, radius]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}