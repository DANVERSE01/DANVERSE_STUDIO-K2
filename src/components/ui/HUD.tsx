'use client';

import React, { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const HUD: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 font-rajdhani">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-void to-transparent border-b border-cyan/20 backdrop-blur-sm pointer-events-auto">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="text-cyan text-xl font-bold tracking-widest">DANVERSE K2</div>
          <div className="text-magenta text-sm font-light">AI Studio</div>
        </div>
      </nav>

      {/* Left Section Labels */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 space-y-12">
        <div className="text-cyan text-xs font-bold opacity-50">
          <div>— NEURAL TUNNEL</div>
          <div className="text-gray-500 text-xs mt-1">Data Warp</div>
        </div>
        <div className="text-magenta text-xs font-bold opacity-50">
          <div>— FLOATING GALLERY</div>
          <div className="text-gray-500 text-xs mt-1">Projects</div>
        </div>
        <div className="text-cyan text-xs font-bold opacity-50">
          <div>— AI CORE</div>
          <div className="text-gray-500 text-xs mt-1">Intelligence</div>
        </div>
      </div>

      {/* Right Scroll Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
        <div className="text-cyan text-xs font-bold opacity-50">{Math.round(scrollProgress * 100)}%</div>
        <div className="w-1 h-32 bg-gray-900 rounded-full overflow-hidden border border-cyan/30">
          <div
            className="w-full bg-gradient-to-b from-cyan to-magenta rounded-full transition-all duration-300"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Center Heading */}
      <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 text-center pointer-events-auto">
        <h1 className="text-5xl font-bold text-cyan mb-4 tracking-wider" style={{
          opacity: 1 - scrollProgress * 2,
          transform: `translateY(${scrollProgress * 50}px)`
        }}>
          DANVERSE
        </h1>
        <p className="text-magenta text-sm font-light">Next-Generation AI Creative Studio</p>
      </div>
    </div>
  );
};

export default HUD;
