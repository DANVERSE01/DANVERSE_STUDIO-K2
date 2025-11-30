'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

      {/* Left Side Panel - Service Status */}
      <motion.div 
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-black/20 backdrop-blur-md border border-cyan-500/20 rounded-lg p-3 w-48">
          <div className="text-cyan-400 font-mono text-xs mb-3 font-bold">SERVICES ONLINE</div>
          <div className="space-y-2 text-xs font-mono text-gray-400">
            <ServiceIndicator label="AI CORE" status="active" />
            <ServiceIndicator label="RENDER ENGINE" status="active" />
            <ServiceIndicator label="NEURAL NET" status="active" />
            <ServiceIndicator label="QUANTUM PROC" status="standby" />
          </div>
        </div>
      </motion.div>

      {/* Right Side Panel - System Monitor */}
      <motion.div 
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-black/20 backdrop-blur-md border border-magenta-500/20 rounded-lg p-3 w-48">
          <div className="text-magenta-400 font-mono text-xs mb-3 font-bold">SYSTEM MONITOR</div>
          <div className="space-y-2 text-xs font-mono text-gray-400">
            <MetricBar label="GPU" value={metrics.gpuLoad} color="cyan" />
            <MetricBar label="CPU" value={65} color="magenta" />
            <MetricBar label="RAM" value={72} color="cyan" />
            <MetricBar label="VRAM" value={58} color="magenta" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function ServiceIndicator({ label, status }: { label: string; status: 'active' | 'standby' }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <div className="flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${
          status === 'active' ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'
        }`} />
        <span className="text-[10px]">{status === 'active' ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  );
}

function MetricBar({ label, value, color }: { label: string; value: number; color: 'cyan' | 'magenta' }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span className={`text-${color}-400`}>{value.toFixed(0)}%</span>
      </div>
      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full bg-${color}-500`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}