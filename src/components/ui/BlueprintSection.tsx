'use client';

import { motion } from 'framer-motion';

export default function BlueprintSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden py-20">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Yellow accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent" />

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            IMMERSIVE WEBSITE UX ARCHITECTURE
          </h2>
          <p className="text-cyan-400 text-xl">World-Class Creative Director & UI/UX Architect</p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-8">
          {/* Section 1: Hero */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-cyan-400 font-mono text-sm mb-4">SECTION 1: HERO</div>
            <h3 className="text-2xl font-bold text-white mb-3">ACCELERATE YOUR VISION</h3>
            <p className="text-gray-400 text-sm">Cinematic Entry with Scroll Reactive Particle Flow</p>
            <div className="mt-4 space-y-2 text-xs text-gray-500">
              <div>• Scroll-activated tunnel warp</div>
              <div>• User flow: Entry → Unlock Services</div>
            </div>
          </motion.div>

          {/* Section 2: Services */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-magenta-500/30 rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-magenta-400 font-mono text-sm mb-4">SECTION 2: SERVICES</div>
            <h3 className="text-2xl font-bold text-white mb-3">AI & CREATIVE INTELLIGENCE</h3>
            <div className="space-y-2">
              <ServiceNode title="Creative AI Core" />
              <ServiceNode title="Rendering Pipeline" />
              <ServiceNode title="Immersive Worlds" />
            </div>
          </motion.div>

          {/* Section 3: Portfolio */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-cyan-400 font-mono text-sm mb-4">SECTION 3: PORTFOLIO</div>
            <h3 className="text-2xl font-bold text-white mb-3">RENDERED REALITIES</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded border border-white/10" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* Academy */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-yellow-400 font-mono text-sm mb-4">ACADEMY: FUTURE-SKILLS</div>
            <h3 className="text-xl font-bold text-white mb-3">Interactive Learning Modules</h3>
            <div className="flex gap-3">
              <div className="px-3 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs">3D Essentials</div>
              <div className="px-3 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs">AI Masterclass</div>
              <div className="px-3 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs">Creative Dev</div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-magenta-500/30 rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-magenta-400 font-mono text-sm mb-4">CONTACT: AI-DRIVEN</div>
            <h3 className="text-xl font-bold text-white mb-3">Form Field Reactivity</h3>
            <div className="space-y-2">
              <div className="h-8 bg-white/5 border border-white/10 rounded" />
              <div className="h-8 bg-white/5 border border-white/10 rounded" />
              <button className="w-full py-2 bg-magenta-500 text-white rounded font-bold">SEND</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceNode({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded flex items-center justify-center">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      <span className="text-gray-300">{title}</span>
    </div>
  );
}