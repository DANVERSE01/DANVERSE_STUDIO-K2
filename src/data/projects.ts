// src/data/projects.ts
// Placeholder for a data layer (e.g., fetched from a CMS or Database)

export interface Project {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  category: 'AI Production' | 'Immersive Worlds' | 'Data-Driven Strategy';
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Cinematic Ads',
    description: 'Generating high-fidelity, cinematic advertisements using proprietary AI models and advanced motion graphics.',
    imagePath: '/assets/project-cinematic.png',
    category: 'AI Production',
  },
  {
    id: 2,
    title: 'Neural Tunnel Experience',
    description: 'Immersive 3D web experience utilizing GLSL shaders and R3F for deep user engagement.',
    imagePath: '/assets/project-tunnel.png',
    category: 'Immersive Worlds',
  },
  {
    id: 3,
    title: 'B2B Strategy Visualization',
    description: 'Translating complex B2B data into visually stunning, interactive 3D models for executive review.',
    imagePath: '/assets/project-data.png',
    category: 'Data-Driven Strategy',
  },
  {
    id: 4,
    title: 'Luxury Automotive Campaign',
    description: 'Full-stack creative direction for a performance auto brand, covering motion design and brand identity.',
    imagePath: '/assets/project-auto.png',
    category: 'AI Production',
  },
];

export interface Service {
  id: number;
  title: string;
  icon: string; // Lucide icon name
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'AI Production',
    icon: 'cpu',
    description: 'High-fidelity cinematic ad generation.',
  },
  {
    id: 2,
    title: 'Immersive Worlds',
    icon: 'globe',
    description: 'Building engaging 3D web experiences.',
  },
  {
    id: 3,
    title: 'Data-Driven Strategy',
    icon: 'bar-chart-3',
    description: 'Visualizing complex data for strategic insights.',
  },
];
