'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FlowDiagram from './FlowDiagram';
import AcademyFlowchart from './AcademyFlowchart';

export default function TechnicalHUD() {
  const [metrics, setMetrics] = useState({
    gpuLoad: 0,
    frameRate: 0,
    latency: 0,
    resolution: '4K',
    renderMode: 'GPU',
    octaneRender: 237
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        gpuLoad: 35 + Math.random() * 15,
        frameRate: 58 + Math.random() * 4,
        latency: 3 + Math.random() * 4
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Left - System Status */}
      <motion.div 
        className="fixed top-8 left-8 z-50 pointer-events-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-xs font-mono space-y-1 text-gray-400">
          <div className="text-cyan-400 text-sm font-bold mb-2">SYS_ACTIVE</div>
          <div>GPU_LOAD: <span className="text-cyan-400">{metrics.gpuLoad.toFixed(0)}%</span></div>
          <div>FRAME: <span className="text-cyan-400">{metrics.frameRate.toFixed(0)}</span></div>
          <div>LATENCY: <span className="text-cyan-400">{metrics.latency.toFixed(1)}ms</span></div>
        </div>
      </motion.div>

      {/* Top Right - Performance */}
      <motion.div 
        className="fixed top-8 right-8 z-50 pointer-events-none text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-xs font-mono space-y-1 text-gray-400">
          <div className="text-magenta-400 text-sm font-bold mb-2">PERFORMANCE</div>
          <div>ISO: <span className="text-magenta-400">100</span></div>
          <div>LATENCY: <span className="text-magenta-400">{metrics.latency.toFixed(1)}ms</span></div>
        </div>
      </motion.div>

      {/* Bottom Left - Render Info */}
      <motion.div 
        className="fixed bottom-8 left-8 z-50 pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-xs font-mono space-y-1 text-gray-500">
          <div>GPU_LOAD: <span className="text-gray-400">{metrics.gpuLoad.toFixed(0)}%</span></div>
          <div>FRAME: <span className="text-gray-400">{metrics.frameRate.toFixed(0)}</span></div>
          <div>LATENCY: <span className="text-gray-400">{metrics.latency.toFixed(1)}ms</span></div>
        </div>
      </motion.div>

      {/* Bottom Right - Engine Status */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50 pointer-events-none text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-xs font-mono space-y-1 text-gray-500">
          <div className="text-sm mb-2">D O O M E</div>
          <div>ISO: <span className="text-gray-400">100</span></div>
          <div>OctaneRender: <span className="text-gray-400">{metrics.octaneRender}</span></div>
        </div>
      </motion.div>

      {/* Flow Diagram (Left Side) - NEW COMPONENT */}
      <FlowDiagram />

      {/* Academy Flowchart (Right Side) - NEW COMPONENT */}
      <AcademyFlowchart />
    </>
  );
}