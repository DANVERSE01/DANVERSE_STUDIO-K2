// Project Interface
export interface Project {
  id: string;
  title: string;
  tags: string[];
  link: string;
  accentColor: [number, number, number];
}

// Service Interface
export interface Service {
  id: string;
  name: string;
  description: string;
  iconPath: string;
}

// Sample Projects Data
export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Neural Network Visualization',
    tags: ['3D', 'AI', 'React'],
    link: '#',
    accentColor: [0, 240, 255],
  },
  {
    id: 'proj-2',
    title: 'Quantum Computing Interface',
    tags: ['WebGL', 'Physics', 'Interactive'],
    link: '#',
    accentColor: [189, 0, 255],
  },
  {
    id: 'proj-3',
    title: 'AI Creative Suite',
    tags: ['Generative', 'Design', 'ML'],
    link: '#',
    accentColor: [0, 240, 255],
  },
  {
    id: 'proj-4',
    title: 'Immersive Data Canvas',
    tags: ['VR', 'Data Viz', 'Three.js'],
    link: '#',
    accentColor: [189, 0, 255],
  },
];

// Sample Services Data
export const services: Service[] = [
  {
    id: 'svc-films',
    name: 'Digital Films',
    description: 'AI-powered cinematic content creation',
    iconPath: 'M10 3l10 17-25 0z',
  },
  {
    id: 'svc-identity',
    name: 'Brand Identity',
    description: 'Generative design & visual systems',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  },
  {
    id: 'svc-tools',
    name: 'Creative Tools',
    description: 'Next-gen AI design instruments',
    iconPath: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z',
  },
];

// Navigation Items
export const navItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default {
  projects,
  services,
  navItems,
};
