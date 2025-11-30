'use client';

import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { Play, Zap, BarChart3, Car } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Cinematic Ads': Play,
  'Neural Tunnels': Zap,
  'B2B Strategy': BarChart3,
  'Luxury Automotive': Car
};

export default function HolographicPortfolio() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
      {PROJECTS.map((project, index) => {
        const Icon = iconMap[project.title] || Play;
        
        return (
          <motion.div 
            key={project.id}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Holographic Glass Container */}
            <div className="aspect-video relative overflow-hidden rounded-xl border-2 border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-md group-hover:border-cyan-500/50 transition-all duration-500">
              
              {/* Animated Gradient Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-magenta-500/20 to-yellow-500/20"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(0,255,204,0.2), rgba(255,0,255,0.2), rgba(251,191,36,0.2))',
                    'linear-gradient(135deg, rgba(251,191,36,0.2), rgba(0,255,204,0.2), rgba(255,0,255,0.2))',
                    'linear-gradient(135deg, rgba(255,0,255,0.2), rgba(251,191,36,0.2), rgba(0,255,204,0.2))',
                    'linear-gradient(135deg, rgba(0,255,204,0.2), rgba(255,0,255,0.2), rgba(251,191,36,0.2))'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              {/* Scanline Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(#00ffcc 1px, transparent 1px), linear-gradient(90deg, #00ffcc 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                {/* Icon */}
                <motion.div 
                  className="w-20 h-20 mb-4 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 border-2 border-cyan-500/40 rounded-full flex items-center justify-center group-hover:border-cyan-500 transition-all"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0,255,204,0.3)',
                      '0 0 40px rgba(0,255,204,0.6)',
                      '0 0 20px rgba(0,255,204,0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon className="w-10 h-10 text-cyan-400" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Category Badge */}
                <div className="px-4 py-1.5 bg-black/60 border border-magenta-500/40 rounded-full mb-3">
                  <span className="text-xs text-magenta-400 font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 text-center max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500/60" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-500/60" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-500/60" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500/60" />

              {/* Glow Effect on Hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-magenta-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Particle Glow */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>

            {/* Project ID Label */}
            <motion.div 
              className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {String(project.id).padStart(2, '0')}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}