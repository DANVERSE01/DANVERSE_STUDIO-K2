"use client";
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { ScrollRig, ScrollCamera, ScrollSection } from '@/lib/scroll/ScrollRig';
import NeuralBrain from './NeuralBrain';
import GlassCard from './GlassCard';
import { Suspense } from 'react';

// Define the number of sections based on the blueprint (Hero, Services, Portfolio, Contact)
const NUM_SECTIONS = 4;

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, toneMappingExposure: 1.2 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0a0a1a']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#4060ff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ff4080" />
        
        <Environment preset="city" />

        {/* Background Stars */}
        <Stars radius={100} depth={50} count={2000} factor={7} saturation={0} fade />

        <Suspense fallback={null}>
          <ScrollRig sections={NUM_SECTIONS}>
            {/* Cinematic camera control */}
            <ScrollCamera sections={NUM_SECTIONS} />

            {/* Section 1: HERO - Neural Brain */}
            <ScrollSection page={0}>
              <group position={[0, 0, 0]}>
                <NeuralBrain />
              </group>
            </ScrollSection>

            {/* Section 2: SERVICES - Cards on the left */}
            <ScrollSection page={1}>
              <group position={[-3, 0, 0]}>
                <GlassCard position={[0, 2, 0]} title="AI PRODUCTION" />
                <GlassCard position={[0, -2, 0]} title="IMMERSIVE WORLDS" />
              </group>
            </ScrollSection>

            {/* Section 3: PORTFOLIO - Cards on the right */}
            <ScrollSection page={2}>
              <group position={[3, 0, 0]}>
                <GlassCard position={[0, 2, 0]} title="LUXURY AUTO" />
                <GlassCard position={[0, -2, 0]} title="B2B STRATEGY" />
              </group>
            </ScrollSection>

            {/* Section 4: CONTACT - Center card */}
            <ScrollSection page={3}>
              <group position={[0, 0, 0]}>
                <GlassCard position={[0, 0, 0]} title="COLLABORATE" />
              </group>
            </ScrollSection>

          </ScrollRig>
        </Suspense>

        {/* Post Processing */}
        <EffectComposer>
          <Bloom luminanceThreshold={0} intensity={1.2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
