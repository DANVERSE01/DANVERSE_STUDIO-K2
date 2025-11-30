'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, Database } from 'lucide-react';

export default function FlowDiagram() {
  const services = [
    { id: 1, icon: Cpu, label: 'AI CORE', color: 'cyan', status: 'ACTIVE' },
    { id: 2, icon: Zap, label: 'RENDER ENGINE', color: 'magenta', status: 'ACTIVE' },
    { id: 3, icon: Globe, label: 'NEURAL NET', color: 'cyan', status: 'ACTIVE' },
    { id: 4, icon: Database, label: 'QUANTUM PROC', color: 'yellow', status: 'STANDBY' }
  ];

  return (
    <motion.div 
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 pointer-events-none w-64"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="bg-black/30 backdrop-blur-lg border-2 border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,255,204,0.2)]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
          <h3 className="text-cyan-400 font-mono text-sm font-bold tracking-wider">SERVICES FLOW</h3>
        </div>

        {/* Flow Diagram */}
        <div className="relative space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
            >
              {/* Connection Line to Next Item */}
              {index < services.length - 1 && (
                <div className="absolute left-7 top-12 w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
              )}
              
              {/* Connection Arrow */}
              {index < services.length - 1 && (
                <motion.div 
                  className="absolute left-6 top-20"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8">
                    <path d="M 4 0 L 8 8 L 0 8 Z" fill="#00ffcc" opacity="0.6" />
                  </svg>
                </motion.div>
              )}

              {/* Service Node */}
              <div className="flex items-center gap-3 group cursor-pointer">
                {/* Icon Container */}
                <motion.div 
                  className={`w-14 h-14 bg-gradient-to-br from-${
                    service.color === 'cyan' ? 'cyan' : service.color === 'magenta' ? 'magenta' : 'yellow'
                  }-500/20 to-${
                    service.color === 'cyan' ? 'cyan' : service.color === 'magenta' ? 'magenta' : 'yellow'
                  }-500/5 border-2 border-${
                    service.color === 'cyan' ? 'cyan' : service.color === 'magenta' ? 'magenta' : 'yellow'
                  }-500/40 rounded-xl flex items-center justify-center group-hover:border-${
                    service.color === 'cyan' ? 'cyan' : service.color === 'magenta' ? 'magenta' : 'yellow'
                  }-500 transition-all group-hover:shadow-[0_0_20px_rgba(0,255,204,0.4)]`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={service.status === 'ACTIVE' ? {
                    boxShadow: [
                      '0 0 10px rgba(0,255,204,0.2)',
                      '0 0 20px rgba(0,255,204,0.4)',
                      '0 0 10px rgba(0,255,204,0.2)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <service.icon 
                    className={`w-6 h-6 text-${
                      service.color === 'cyan' ? 'cyan' : service.color === 'magenta' ? 'magenta' : 'yellow'
                    }-400`} 
                  />
                </motion.div>

                {/* Label */}
                <div className="flex-1">
                  <div className="text-white/90 font-mono text-xs font-semibold tracking-wide">
                    {service.label}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-2 h-2 rounded-full ${
                      service.status === 'ACTIVE' ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'
                    }`} />
                    <span className="text-[10px] text-gray-400 uppercase font-mono">
                      {service.status}
                    </span>
                  </div>
                </div>

                {/* Status Indicator */}
                {service.status === 'ACTIVE' && (
                  <motion.div
                    className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-6 pt-4 border-t border-cyan-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex justify-between text-[10px] text-gray-500 font-mono">
            <span>LATENCY: <span className="text-cyan-400">3.2ms</span></span>
            <span>UPTIME: <span className="text-cyan-400">99.9%</span></span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}