'use client';

import { motion } from 'framer-motion';

export default function YellowConnectorLines() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-30"
      style={{ mixBlendMode: 'screen' }}
    >
      <defs>
        {/* Glow filter for lines */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Animated gradient */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2">
            <animate attributeName="stopOpacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.9">
            <animate attributeName="offset" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2">
            <animate attributeName="stopOpacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" begin="1s" />
          </stop>
        </linearGradient>
      </defs>

      {/* Hero Center to Left Cards */}
      <motion.path
        d="M 50% 50%, Q 35% 45%, 20% 35%"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      <motion.path
        d="M 50% 50%, Q 35% 50%, 20% 50%"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
      
      <motion.path
        d="M 50% 50%, Q 35% 55%, 20% 65%"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
      />

      {/* Hero Center to Right Cards */}
      <motion.path
        d="M 50% 50%, Q 65% 45%, 80% 35%"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
      />
      
      <motion.path
        d="M 50% 50%, Q 65% 50%, 80% 50%"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
      />
      
      <motion.path
        d="M 50% 50%, Q 65% 55%, 80% 65%"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1.0 }}
      />

      {/* Left Panel to Top Services */}
      <motion.path
        d="M 5% 50%, Q 8% 35%, 15% 25%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
      />

      {/* Right Panel to Portfolio */}
      <motion.path
        d="M 95% 50%, Q 92% 40%, 85% 35%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1.4 }}
      />

      {/* Bottom connections */}
      <motion.path
        d="M 50% 50%, Q 50% 70%, 30% 85%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="3,3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 1.6 }}
      />
      
      <motion.path
        d="M 50% 50%, Q 50% 70%, 70% 85%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="3,3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 1.8 }}
      />

      {/* Pulsing connection points */}
      <motion.circle
        cx="50%"
        cy="50%"
        r="4"
        fill="#fbbf24"
        filter="url(#glow)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Connection nodes */}
      {[
        { x: "20%", y: "35%" },
        { x: "20%", y: "50%" },
        { x: "20%", y: "65%" },
        { x: "80%", y: "35%" },
        { x: "80%", y: "50%" },
        { x: "80%", y: "65%" }
      ].map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.x}
          cy={pos.y}
          r="3"
          fill="#fbbf24"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0.7]
          }}
          transition={{
            duration: 0.8,
            delay: 1.5 + i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </svg>
  );
}