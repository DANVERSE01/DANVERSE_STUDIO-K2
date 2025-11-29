'use client';

import R3FCanvas from '@/lib/r3f/Canvas';
import { ScrollRig, ScrollCamera } from '@/lib/scroll/ScrollRig';
import LiquidMetalBrain from '@/components/canvas/LiquidMetalBrain';
import { CurvedScreen } from '@/components/3d-ui/CurvedScreen';
import { GlassPanel } from '@/components/3d-ui/GlassPanel';
import { InteractivePanel } from '@/components/3d-ui/InteractivePanel';
import { Suspense } from 'react';

/**
 * DANVERSE Studio K2 - Main Page
 * Complete cinematic 3D experience
 */

export default function Home() {
  return (
    <>
      {/* 3D Canvas */}
      <div id="root" className="fixed inset-0 z-0">
        <R3FCanvas>
          <ScrollRig sections={5}>
            <Suspense fallback={null}>
              {/* Cinematic camera control */}
              <ScrollCamera sections={5} />

              {/* HERO: Liquid Metal Brain */}
              <LiquidMetalBrain position={[0, 0, 0]} scale={1} />

              {/* Left curved screen - Services */}
              <CurvedScreen 
                position={[-4, 0, -2]}
                rotation={[0, 0.5, 0]}
                width={3}
                height={2}
              />

              {/* Right glass panel - Portfolio */}
              <GlassPanel
                position={[4, 1, -1]}
                width={2.5}
                height={2}
              />

              {/* Interactive panels */}
              <InteractivePanel
                position={[-2, -2, 1]}
                title="AI Production"
                content="Create cinematic realities with AI"
              />
              
              <InteractivePanel
                position={[2, -2, 1]}
                title="Immersive Worlds"
                content="Build engaging 3D experiences"
              />
            </Suspense>
          </ScrollRig>
        </R3FCanvas>
      </div>

      {/* HTML Overlay Content */}
      <div className="relative z-10 pointer-events-none">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center pointer-events-auto">
            <h1 className="text-7xl font-bold text-white mb-4">
              DANVERSE
            </h1>
            <p className="text-2xl text-cyan-400">
              Bioluminescent Intelligence
            </p>
            <button className="mt-8 px-8 py-3 bg-cyan-400 text-black rounded-full font-bold hover:bg-cyan-300 transition-colors">
              See Quality
            </button>
          </div>
        </div>

        {/* Scroll sections */}
        <div className="h-screen" />
        <div className="h-screen" />
        <div className="h-screen" />
        <div className="h-screen" />
      </div>
    </>
  );
}