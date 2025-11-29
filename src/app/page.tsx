"use client";
import Scene from '@/components/3d/Scene';
import { SERVICES } from '@/data/projects';
import { useScroll } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { motion, useScroll as useScrollMotion } from 'framer-motion';

// Define the number of sections based on the blueprint (Hero, Services, Portfolio, Contact)
const NUM_SECTIONS = 4;

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`h-screen flex items-center justify-center relative ${className}`}>
    {children}
  </div>
);

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScrollMotion({ container: scrollRef });

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black antialiased">
      {/* Fullscreen 3D Scene */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>
      
      {/* HTML Scroll Overlay */}
      <div ref={scrollRef} className="absolute inset-0 z-10 overflow-y-scroll scroll-smooth">
        
        {/* Section 1: HERO */}
        <Section className="text-center">
          <motion.div 
            className="text-white pointer-events-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl font-bold text-cyan-400 mb-4">
              ACCELERATE YOUR VISION
            </h1>
            <p className="text-2xl text-white/80 mb-8">
              From concept to cinematic reality, bypassing slow, traditional creative pipelines.
            </p>
            <button className="px-8 py-3 bg-magenta-500 text-white rounded-full font-bold hover:bg-magenta-400 transition-colors">
              See Quality
            </button>
          </motion.div>
        </Section>

        {/* Section 2: SERVICES */}
        <Section className="text-left">
          <div className="max-w-4xl w-full p-8 pointer-events-auto">
            <h2 className="text-5xl font-bold text-white mb-12">
              AI & CREATIVE INTELLIGENCE
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 3: PORTFOLIO */}
        <Section className="text-right">
          <div className="max-w-4xl w-full p-8 pointer-events-auto">
            <h2 className="text-5xl font-bold text-white mb-12">
              RENDERED REALITIES
            </h2>
            <p className="text-xl text-white/80">
              A curated selection of projects showcasing the fusion of AI and motion design.
            </p>
            {/* Placeholder for Portfolio Grid */}
          </div>
        </Section>

        {/* Section 4: CONTACT */}
        <Section className="text-center">
          <div className="max-w-md w-full p-8 bg-white/5 backdrop-blur-md rounded-xl border border-magenta-500/30 pointer-events-auto">
            <h2 className="text-4xl font-bold text-magenta-400 mb-6">
              COLLABORATE NOW
            </h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 bg-black/50 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-magenta-500" />
              <input type="email" placeholder="Email" className="w-full p-3 bg-black/50 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-magenta-500" />
              <textarea placeholder="Project Brief" rows={4} className="w-full p-3 bg-black/50 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-magenta-500"></textarea>
              <button type="submit" className="w-full p-3 bg-magenta-500 text-white rounded-lg font-bold hover:bg-magenta-400 transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </Section>

      </div>

      {/* Global HUD Overlay (Fixed) */}
      <div className="fixed top-0 left-0 right-0 z-50 p-8 pointer-events-none">
        {/* Top Left Logo/Title */}
        <div className="absolute top-8 left-8">
          <div className="text-white font-mono text-xl font-bold tracking-wider mb-1">
            DANVERSE STUDIO
          </div>
          <div className="text-cyan-400 text-xs tracking-[0.3em] uppercase">
            AI CREATIVE ECOSYSTEM
          </div>
        </div>

        {/* Top Right Navigation (Placeholder) */}
        <div className="absolute top-8 right-8">
          <nav className="flex space-x-6 text-white/70 font-mono text-sm pointer-events-auto">
            <a href="#services" className="hover:text-cyan-400 transition-colors">SERVICES</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">PORTFOLIO</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">CONTACT</a>
          </nav>
        </div>
      </div>

      {/* Bottom Right Info */}
      <div className="fixed bottom-8 right-8 z-50 pointer-events-none text-right">
        <div className="text-xs text-gray-500 font-mono space-y-1">
          <div>RENDER MODE: GPU</div>
          <div>FRAME RATE: 60fps</div>
          <div>RESOLUTION: 4K</div>
        </div>
      </div>
    </main>
  );
}
