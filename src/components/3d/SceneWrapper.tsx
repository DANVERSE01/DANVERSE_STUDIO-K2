"use client";
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Leva } from 'leva'

// Lazy load the heavy Brain component (Step 1)
const LiquidMetalBrain = dynamic(() => import('./LiquidMetalBrain'), { 
  ssr: false,
  loading: () => null 
})

export default function SceneWrapper() {
  return (
    <div className="relative w-full h-screen">
      {/* GUI Panel (Step 3) */}
      <Leva collapsed={true} />
      
      <Canvas 
        // Step 2: Optimization for Retina/Mobile screens
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false }} // Performance boost
      >
        <Suspense fallback={null}>
          <LiquidMetalBrain />
        </Suspense>
      </Canvas>
    </div>
  )
}
