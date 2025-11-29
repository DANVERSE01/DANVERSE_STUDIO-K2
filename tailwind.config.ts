import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core Brand Colors
        'void': '#030305',
        'cyan-400': '#00F0FF', // Primary accent
        'magenta-500': '#BD00FF', // Secondary accent
        'magenta-400': '#D946EF', // Lighter magenta for hover/accents
      },
      fontFamily: {
        // Apply Rajdhani as the primary font for the tech/cyberpunk look
        sans: ['var(--font-rajdhani)', 'sans-serif'],
        mono: ['var(--font-rajdhani)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
