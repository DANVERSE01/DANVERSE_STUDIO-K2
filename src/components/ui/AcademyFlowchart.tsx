'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Sparkles, Trophy } from 'lucide-react';

export default function AcademyFlowchart() {
  const modules = [
    { 
      id: 1, 
      icon: BookOpen, 
      level: 'LEVEL 1',
      title: '3D Essentials', 
      color: 'yellow',
      progress: 100
    },
    { 
      id: 2, 
      icon: Code, 
      level: 'LEVEL 2',
      title: 'Creative Dev', 
      color: 'magenta',
      progress: 65
    },
    { 
      id: 3, 
      icon: Sparkles, 
      level: 'LEVEL 3',
      title: 'AI Masterclass', 
      color: 'cyan',
      progress: 30
    },
    { 
      id: 4, 
      icon: Trophy, 
      level: 'FINAL',
      title: 'Pro Certified', 
      color: 'yellow',
      progress: 0
    }
  ];

  return (
    <motion.div 
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 pointer-events-none w-64"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <div className="bg-black/30 backdrop-blur-lg border-2 border-yellow-500/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(251,191,36,0.2)]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
          <h3 className="text-yellow-400 font-mono text-sm font-bold tracking-wider">ACADEMY PATH</h3>
        </div>

        {/* Learning Flowchart */}
        <div className="relative space-y-5">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
            >
              {/* Connection Line */}
              {index < modules.length - 1 && (
                <div className="absolute right-7 top-14 w-0.5 h-6 bg-gradient-to-b from-yellow-500/50 to-transparent" />
              )}
              
              {/* Progress Arrow */}
              {index < modules.length - 1 && module.progress > 0 && (
                <motion.div 
                  className="absolute right-6 top-20"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.4 }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8">
                    <path d="M 4 0 L 8 8 L 0 8 Z" fill="#fbbf24" opacity="0.7" />
                  </svg>
                </motion.div>
              )}

              {/* Module Card */}
              <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-4 group hover:border-yellow-500/60 transition-all cursor-pointer">
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br from-${
                      module.color === 'yellow' ? 'yellow' : module.color === 'magenta' ? 'magenta' : 'cyan'
                    }-500/20 to-${
                      module.color === 'yellow' ? 'yellow' : module.color === 'magenta' ? 'magenta' : 'cyan'
                    }-500/5 border border-${
                      module.color === 'yellow' ? 'yellow' : module.color === 'magenta' ? 'magenta' : 'cyan'
                    }-500/40 rounded-lg flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    animate={module.progress > 0 ? {
                      boxShadow: [
                        '0 0 10px rgba(251,191,36,0.2)',
                        '0 0 20px rgba(251,191,36,0.4)',
                        '0 0 10px rgba(251,191,36,0.2)'
                      ]
                    } : {}}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <module.icon className={`w-5 h-5 text-${
                      module.color === 'yellow' ? 'yellow' : module.color === 'magenta' ? 'magenta' : 'cyan'
                    }-400`} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] text-gray-500 uppercase font-mono mb-1">
                      {module.level}
                    </div>
                    <div className="text-white/90 font-mono text-xs font-semibold mb-2">
                      {module.title}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r from-${
                          module.color === 'yellow' ? 'yellow' : module.color === 'magenta' ? 'magenta' : 'cyan'
                        }-500 to-${
                          module.color === 'yellow' ? 'yellow' : module.color === 'magenta' ? 'magenta' : 'cyan'
                        }-400 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${module.progress}%` }}
                        transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                      />
                      {module.progress > 0 && (
                        <motion.div
                          className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        />
                      )}
                    </div>
                    
                    {/* Progress Percentage */}
                    <div className="text-[10px] text-gray-500 font-mono mt-1">
                      {module.progress > 0 ? `${module.progress}% Complete` : 'Locked'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-6 pt-4 border-t border-yellow-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <div className="flex justify-between text-[10px] text-gray-500 font-mono">
            <span>ENROLLED: <span className="text-yellow-400">3.2K</span></span>
            <span>AVG SCORE: <span className="text-yellow-400">94%</span></span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}