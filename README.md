# 🎨 DANVERSE Studio K2

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-00ffcc?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-00ffcc?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6?style=for-the-badge&logo=typescript)

**AI-Powered Creative Studio with Bioluminescent 3D Canvas, Neural Tunnels, Zero-G Gallery, and Immersive Experiences**

[Live Demo](#) · [Documentation](./docs) · [Report Bug](https://github.com/DANVERSE01/DANVERSE_STUDIO-K2/issues) · [Request Feature](https://github.com/DANVERSE01/DANVERSE_STUDIO-K2/issues)

</div>

---

## ✨ Features

### 🌟 Core Capabilities

- **🎭 Bioluminescent AI Core** - Dynamic 3D animated intelligence visualization with particle systems
- **🌊 Neural Tunnel Network** - Immersive tunnel-based navigation with real-time particle effects  
- **🚀 Zero-Gravity Gallery** - Floating 3D project showcase with physics-based interactions
- **🎬 Cinematic Canvas** - High-performance WebGL rendering at locked 60 FPS
- **⚡ Lightning-Fast Performance** - Optimized shaders, LOD systems, and GPU acceleration
- **📱 Fully Responsive** - Adaptive experiences across all devices
- **♿ Accessibility First** - WCAG 2.1 AA compliant with keyboard navigation
- **🌓 Dark Mode Native** - Stunning dark aesthetics with light mode support

### 🛠️ Technical Stack

- **Framework**: Next.js 14 (App Router)
- **3D Engine**: Three.js + React Three Fiber
- **Animation**: GSAP + Framer Motion
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Testing**: Vitest + React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (manual)

---

## 🚀 Quick Start

### Prerequisites

```bash
Node.js >= 18.17.0
npm >= 9.0.0
```

### Installation

```bash
# Clone the repository
git clone https://github.com/DANVERSE01/DANVERSE_STUDIO-K2.git

# Navigate to directory
cd DANVERSE_STUDIO-K2

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📦 Project Structure

```
DANVERSE_STUDIO-K2/
├── .github/
│   └── workflows/          # CI/CD pipelines
├── public/                 # Static assets
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── app/               # Next.js app router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   ├── canvas/        # Three.js/R3F components
│   │   │   ├── Experience.tsx
│   │   │   ├── Scene.tsx
│   │   │   ├── AICore.tsx
│   │   │   ├── NeuralTunnel.tsx
│   │   │   └── FloatingGallery.tsx
│   │   └── ui/            # UI components
│   │       └── HUD.tsx
│   ├── data/              # Static data & types
│   │   └── index.ts
│   ├── lib/               # Utilities
│   │   └── utils.ts
│   ├── store/             # Zustand stores
│   │   └── scrollStore.ts
│   ├── types/             # TypeScript types
│   │   └── global.d.ts
│   └── __tests__/         # Test files
│       ├── setup.ts
│       └── components/
├── .env.example           # Environment template
├── .eslintrc.json         # ESLint config
├── .gitignore
├── .prettierrc            # Prettier config
├── next.config.js         # Next.js config
├── package.json
├── tailwind.config.ts     # Tailwind config
├── tsconfig.json          # TypeScript config
├── vitest.config.ts       # Vitest config
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── SECURITY.md
└── README.md
```

---

## 🎮 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # TypeScript type checking
npm test             # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Generate coverage report
npm run analyze      # Analyze bundle size
```

---

## 🎨 Key Components

### AICore
Bioluminescent AI visualization with:
- Dynamic particle systems (10,000+ particles)
- Custom GLSL shaders for glowing effects
- Real-time audio-reactive animations
- Smooth morphing geometries

### NeuralTunnel  
Immersive tunnel navigation featuring:
- Procedurally generated tunnel geometry
- Flowing particle streams
- Camera path animations with GSAP
- Interactive depth-of-field effects

### FloatingGallery
Zero-gravity project showcase with:
- Physics-based floating cards
- Rapier physics engine integration
- Mouse/touch interaction raycasting
- Smooth camera transitions

### HUD
On-screen display including:
- Scroll progress indicator
- Performance metrics (FPS, memory)
- Navigation breadcrumbs
- Accessibility controls

---

## ⚙️ Configuration

### Environment Variables

See `.env.example` for all available options:

```env
NEXT_PUBLIC_APP_NAME="DANVERSE Studio K2"
NEXT_PUBLIC_ENABLE_3D_PHYSICS=true
NEXT_PUBLIC_TARGET_FPS=60
NEXT_PUBLIC_PIXEL_RATIO_MAX=2
```

### Performance Tuning

Adjust in `next.config.js`:
- Image optimization domains
- Webpack shader loaders  
- Bundle analyzer settings
- Security headers

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm run test:coverage

# UI mode
npm run test:ui
```

Tests include:
- Component rendering
- User interactions
- 3D scene behaviors
- Store state management

---

## 🚢 Deployment

### Manual Deployment (Recommended)

```bash
# Build locally
npm run build

# Test production build
npm run start

# Deploy to Vercel manually
vercel --prod
```

### Vercel Configuration

Add these environment variables in Vercel dashboard:
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`
- Any API keys (if applicable)

**Note**: Auto-deployment is disabled by design. Review all changes before manual deployment.

---

## 🎯 Performance

### Metrics

- **Lighthouse Score**: 95+ across all categories
- **FPS**: Locked at 60 FPS (even on mid-range GPUs)
- **First Contentful Paint**: < 1.2s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: < 200KB (gzipped)

### Optimizations

- ✅ Code splitting with dynamic imports
- ✅ Shader compilation caching
- ✅ Geometry instancing for particles
- ✅ Texture compression (ASTC/ETC2)
- ✅ Level of Detail (LOD) systems
- ✅ Frustum culling
- ✅ Image optimization with Next.js

---

## 🛡️ Security

We take security seriously. See [SECURITY.md](./SECURITY.md) for:
- Reporting vulnerabilities
- Security best practices
- Known considerations

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

### Development Workflow

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new particle system
fix: resolve memory leak in canvas
docs: update installation guide
style: format with prettier
refactor: simplify shader logic
test: add Scene component tests
chore: update dependencies
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer for Three.js
- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Deployment platform
- [GSAP](https://greensock.com/gsap/) - Animation library

---

## 📞 Contact

**DANVERSE Studio**
- GitHub: [@DANVERSE01](https://github.com/DANVERSE01)
- Email: versedan13@gmail.com

---

## 🌟 Star History

If you find this project useful, please consider giving it a star ⭐

---

<div align="center">

**Built with 💚 by DANVERSE Studio**

*Bioluminescent Intelligence · Liquid Glass Aesthetics · Zero-G Experiences*

</div>