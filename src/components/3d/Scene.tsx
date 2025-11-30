"use client";
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { ScrollRig, ScrollCamera, ScrollSection } from '@/lib/scroll/ScrollRig';
import LiquidMetalBrain from '../canvas/LiquidMetalBrain';
import GlassCard from './GlassCard';
import GlowingPlatform from '../canvas/GlowingPlatform';
import VolumetricSmoke from '../canvas/VolumetricSmoke';
import EnhancedParticles from '../canvas/EnhancedParticles';
import { Suspense } from 'react';

// Define the number of sections based on the blueprint (Hero, Services, Portfolio, Contact)
const NUM_SECTIONS = 4;

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: true, 
          toneMappingExposure: 1.5,
          toneMapping: THREE.ACESFilmicToneMapping
        }}
        dpr={[1, 2]}
      >
        {/* Enhanced gradient background */}
        <color attach="background" args={['#0a0a1a']} />
        
        {/* Enhanced Lighting for stronger colors */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#00ffcc" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#ff00ff" />
        <pointLight position={[0, 5, 5]} intensity={1.5} color="#ff0080" />
        
        <Environment preset="city" />

        {/* Enhanced Background Stars */}
        <Stars radius={100} depth={50} count={3000} factor={8} saturation={0} fade speed={0.5} />

        {/* Enhanced Particles Field */}
        <EnhancedParticles count={1500} />

        <Suspense fallback={null}>
          <ScrollRig sections={NUM_SECTIONS}>
            {/* Cinematic camera control */}
            <ScrollCamera sections={NUM_SECTIONS} />

            {/* Section 1: HERO - Enhanced Neural Brain + GLASS CARDS */}
            <ScrollSection page={0}>
              <group position={[0, 0, 0]}>
                {/* Main Brain */}
                <LiquidMetalBrain position={[0, 0, 0]} scale={1} />
                
                {/* STRONGER Volumetric Smoke around brain - INCREASED OPACITY */}
                <VolumetricSmoke count={500} radius={3} color="#00ffcc" opacity={0.5} />
                <VolumetricSmoke count={400} radius={3.5} color="#ff00ff" opacity={0.4} />
                <VolumetricSmoke count={300} radius={4} color="#ff0080" opacity={0.3} />
                
                {/* Enhanced Glowing Platform */}
                <GlowingPlatform position={[0, -2.5, 0]} radius={3.2} />
                
                {/* NEW: Glass Cards in HERO Section - Left Side */}
                <group position={[-4, 0, 0]}>
                  <GlassCard position={[0, 1.5, 0]} title="AI CORE" icon="cpu" />
                  <GlassCard position={[0, 0, 0]} title="NEURAL NET" icon="brain" />
                  <GlassCard position={[0, -1.5, 0]} title="QUANTUM" icon="zap" />
                </group>
                
                {/* NEW: Glass Cards in HERO Section - Right Side */}
                <group position={[4, 0, 0]}>
                  <GlassCard position={[0, 1.5, 0]} title="RENDER" icon="film" />
                  <GlassCard position={[0, 0, 0]} title="CREATIVE" icon="star" />
                  <GlassCard position={[0, -1.5, 0]} title="STRATEGY" icon="target" />
                </group>
              </group>
            </ScrollSection>

            {/* Section 2: SERVICES - Enhanced Cards on the left */}
            <ScrollSection page={1}>
              <group position={[-3, 0, 0]}>
                <GlassCard position={[0, 2, 0]} title="AI PRODUCTION" icon="cpu" />
                <GlassCard position={[0, 0, 0]} title="IMMERSIVE WORLDS" icon="globe" />
                <GlassCard position={[0, -2, 0]} title="DATA STRATEGY" icon="chart" />
              </group>
            </ScrollSection>

            {/* Section 3: PORTFOLIO - Enhanced Cards on the right */}
            <ScrollSection page={2}>
              <group position={[3, 0, 0]}>
                <GlassCard position={[0, 2, 0]} title="LUXURY AUTO" icon="star" />
                <GlassCard position={[0, 0, 0]} title="CINEMATIC ADS" icon="film" />
                <GlassCard position={[0, -2, 0]} title="B2B STRATEGY" icon="target" />
              </group>
            </ScrollSection>

            {/* Section 4: CONTACT - Center card with ambient particles */}
            <ScrollSection page={3}>
              <group position={[0, 0, 0]}>
                <GlassCard position={[0, 0, 0]} title="COLLABORATE" icon="message" />
                <VolumetricSmoke count={200} radius={2} color="#ff00ff" opacity={0.4} />
              </group>
            </ScrollSection>

          </ScrollRig>
        </Suspense>

        {/* Enhanced Post Processing - Stronger Bloom */}
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0} 
            intensity={2.5} 
            levels={9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}