"use client";
import Scene from '@/components/3d/Scene';
import TechnicalHUD from '@/components/ui/TechnicalHUD';
import BlueprintSection from '@/components/ui/BlueprintSection';
import YellowConnectorLines from '@/components/ui/YellowConnectorLines';
import HolographicPortfolio from '@/components/ui/HolographicPortfolio';
import { SERVICES } from '@/data/projects';
import { useRef } from 'react';
import { motion, useScroll as useScrollMotion } from 'framer-motion';

// Define the number of sections
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

      {/* Technical HUD Overlay */}
      <TechnicalHUD />
      
      {/* Yellow Connector Lines */}
      <YellowConnectorLines />
      
      {/* HTML Scroll Overlay */}
      <div ref={scrollRef} className="absolute inset-0 z-10 overflow-y-scroll scroll-smooth">
        
        {/* Section 1: HERO */}
        <Section className="text-center">
          <motion.div 
            className="text-white pointer-events-auto max-w-5xl px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-8xl font-bold mb-6" style={{
              background: 'linear-gradient(135deg, #00ffcc 0%, #ff00ff 50%, #ff0080 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              THE FUTURE IS INTELLIGENT
            </h1>
            <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Enterprise solutions to ceneror of liquid metal and bioluminescent fiber optics,
              with glowing neural connections, refractives glass outer shell
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] transition-all">
              See Quality
            </button>
          </motion.div>
        </Section>

        {/* Section 2: SERVICES */}
        <Section className="text-left">
          <motion.div 
            className="max-w-6xl w-full p-8 pointer-events-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold text-white mb-12">
              AI & CREATIVE <span className="text-cyan-400">INTELLIGENCE</span>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={service.id} 
                  className="bg-black/40 backdrop-blur-md p-8 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500 transition-all group hover:shadow-[0_0_30px_rgba(0,255,204,0.3)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/40 transition-all">
                    <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-3">{service.title}</h3>
                  <p className="text-white/80 text-lg">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Section 3: PORTFOLIO - WITH HOLOGRAPHIC PORTFOLIO */}
        <Section className="text-center">
          <motion.div 
            className="max-w-6xl w-full p-8 pointer-events-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold text-white mb-8">
              RENDERED <span className="text-magenta-400">REALITIES</span>
            </h2>
            <p className="text-2xl text-white/80 mb-12">
              A curated selection of projects showcasing the fusion of AI and motion design.
            </p>
            {/* HOLOGRAPHIC PORTFOLIO COMPONENT */}
            <HolographicPortfolio />
          </motion.div>
        </Section>

        {/* Section 4: CONTACT */}
        <Section className="text-center">
          <motion.div 
            className="max-w-md w-full p-10 bg-black/60 backdrop-blur-xl rounded-2xl border-2 border-magenta-500/40 pointer-events-auto shadow-[0_0_50px_rgba(255,0,255,0.2)]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-magenta-400 mb-8">
              COLLABORATE NOW
            </h2>
            <form className="space-y-5">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-4 bg-black/70 border-2 border-white/20 text-white rounded-xl focus:ring-2 focus:ring-magenta-500 focus:border-magenta-500 transition-all" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-4 bg-black/70 border-2 border-white/20 text-white rounded-xl focus:ring-2 focus:ring-magenta-500 focus:border-magenta-500 transition-all" 
              />
              <textarea 
                placeholder="Project Brief" 
                rows={4} 
                className="w-full p-4 bg-black/70 border-2 border-white/20 text-white rounded-xl focus:ring-2 focus:ring-magenta-500 focus:border-magenta-500 transition-all"
              />
              <button 
                type="submit" 
                className="w-full p-4 bg-gradient-to-r from-magenta-600 to-magenta-500 text-white rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </Section>

        {/* Blueprint Section */}
        <BlueprintSection />

      </div>

      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-8 pointer-events-none">
        <div className="flex justify-between items-start">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white font-mono text-2xl font-bold tracking-wider mb-1">
              DANVERSE STUDIO
            </div>
            <div className="text-cyan-400 text-xs tracking-[0.3em] uppercase">
              Enterprise AI Creative Ecosystem
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            className="flex space-x-8 text-white/70 font-mono text-sm pointer-events-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="#solutions" className="hover:text-cyan-400 transition-colors uppercase tracking-wider">SOLUTIONS</a>
            <a href="#systems" className="hover:text-cyan-400 transition-colors uppercase tracking-wider">SYSTEMS</a>
            <a href="#academy" className="hover:text-cyan-400 transition-colors uppercase tracking-wider">ACADEMY</a>
            <a href="#partners" className="hover:text-cyan-400 transition-colors uppercase tracking-wider">PARTNERS</a>
            <button className="px-6 py-2 border border-cyan-500/50 rounded-full hover:bg-cyan-500/10 transition-all">
              Thin glass button
            </button>
          </motion.nav>
        </div>
      </div>
    </main>
  );
}