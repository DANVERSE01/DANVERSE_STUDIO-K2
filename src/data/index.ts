export interface Project {
  id: string;
  title: string;
  tags: string[];
  link: string;
  accentColor: [number, number, number];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  iconPath: string;
}

export const projects: Project[] = [
  {
    id: 'neural-identity',
    title: 'Neural Identity System',
    tags: ['AI', 'Branding', 'Motion'],
    link: '#',
    accentColor: [0, 0.94, 1],
  },
  {
    id: 'quantum-film',
    title: 'Quantum Cinema',
    tags: ['Film', '3D', 'VFX'],
    link: '#',
    accentColor: [0.74, 0, 1],
  },
  {
    id: 'void-interface',
    title: 'Void Interface',
    tags: ['UI/UX', 'Web3', 'Interactive'],
    link: '#',
    accentColor: [1, 0.2, 0.8],
  },
  {
    id: 'synthetic-dreams',
    title: 'Synthetic Dreams',
    tags: ['AI Art', 'Installation', 'Immersive'],
    link: '#',
    accentColor: [0.2, 0.8, 1],
  },
  {
    id: 'digital-organism',
    title: 'Digital Organism',
    tags: ['Generative', 'Real-time', 'WebGL'],
    link: '#',
    accentColor: [0.9, 0, 0.6],
  },
];

export const services: Service[] = [
  {
    id: 'films',
    name: 'AI Films',
    description: 'Cinematic storytelling powered by neural networks',
    iconPath: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z',
  },
  {
    id: 'identity',
    name: 'Brand Identity',
    description: 'Liquid glass aesthetics for next-gen brands',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
  },
  {
    id: 'tools',
    name: 'Creative Tools',
    description: 'Bespoke AI-powered creative toolsets',
    iconPath: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
  },
];