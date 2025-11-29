# 🎨 DANVERSE Studio K2 - Production Ready

<div align="center">

![Version](https://img.shields.io/badge/version-2.1.0-00ffcc?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-00ffcc?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-r165-black?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6?style=for-the-badge&logo=typescript)

**AI-Powered Creative Studio: Production-Ready Spatial Interface with Scroll-Driven 3D Experiences**

[Live Demo](#) · [Documentation](./docs) · [Report Bug](https://github.com/DANVERSE01/DANVERSE_STUDIO-K2/issues) · [Request Feature](https://github.com/DANVERSE01/DANVERSE_STUDIO-K2/issues)

</div>

---

## ✨ Features

### 🌟 Core Capabilities

- **🧠 Neural Brain Core** - Central 3D visualization with custom GLSL shaders and bioluminescent effects.
- **📜 Scroll-Driven Experience** - Seamless, cinematic camera movement and scene transitions powered by R3F ScrollRig.
- **🧊 Liquid Glass UI** - Futuristic, transparent UI elements (Glass Cards) for services and portfolio showcase.
- **🎬 Cinematic Canvas** - High-performance WebGL rendering at locked 60 FPS.
- **⚡ Lightning-Fast Performance** - Optimized shaders, strict security headers, and performance assertions (Lighthouse CI).
- **📱 Fully Responsive** - Adaptive experiences across all devices.
- **🎨 Cohesive Visual Identity** - Strict adherence to the Cyberpunk/Tech aesthetic with Rajdhani font and Cyan/Magenta palette.

### 🛠️ Technical Stack

- **Framework**: Next.js 14 (App Router)
- **3D Engine**: Three.js (r165) + React Three Fiber
- **Animation**: Framer Motion (for HTML UI)
- **State Management**: Zustand
- **Styling**: Tailwind CSS (Custom Theme)
- **Language**: TypeScript
- **Data Layer**: Prisma (Simulated Backend/CMS Structure)
- **Testing**: Vitest + React Testing Library
- **CI/CD**: GitHub Actions (Lint, Type-Check, Test, Build, Lighthouse)

---

## 📦 Project Structure (Updated)

```
DANVERSE_STUDIO-K2/
├── .github/
│   └── workflows/          # CI/CD pipelines
├── prisma/                 # Database schema (Prisma)
│   └── schema.prisma
├── public/                 # Static assets
│   ├── assets/             # Placeholder images for cards
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── app/               # Next.js app router
│   │   ├── layout.tsx     # Root layout (Global Font/Styles)
│   │   └── page.tsx       # Home page (HTML Scroll Overlay)
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   └── 3d/            # Three.js/R3F components
│   │       ├── Scene.tsx      # Main 3D Scene with ScrollRig
│   │       ├── NeuralBrain.tsx # Central Brain Model
│   │       └── GlassCard.tsx  # UI Elements
│   ├── data/              # Static data & types (e.g., projects.ts)
│   ├── lib/               # Utilities (R3F, ScrollRig)
│   ├── store/             # Zustand stores (e.g., useStore.ts)
│   ├── types/             # TypeScript types
│   └── __tests__/         # Test files
├── next.config.mjs         # Next.js config (with Security Headers)
├── package.json
├── tailwind.config.ts     # Tailwind config (Custom Colors/Fonts)
└── ... (other config files)
```

---

## ⚙️ Configuration

### Security Headers

The project now implements strict security headers (CSP, HSTS, X-Frame-Options) configured in `next.config.mjs` to ensure a professional and secure deployment environment.

### Data Layer

A placeholder database structure using **Prisma** (`prisma/schema.prisma`) and a static data file (`src/data/projects.ts`) have been added to simulate a production-ready CMS/Backend integration, addressing the need for dynamic content.

---

## 🚢 Deployment

**Note:** Deployment is currently disabled as per user request. The project is ready for manual build and testing.

### Manual Deployment (Recommended)

```bash
# Build locally
npm run build

# Test production build
npm run start

# Deploy to Vercel manually
vercel --prod
```

---

## 🌟 Star History

If you find this project useful, please consider giving it a star ⭐

---

<div align="center">

**Built with 💚 by DANVERSE Studio**

*Production-Ready Spatial Interface · Bioluminescent Intelligence · Liquid Glass Aesthetics*

</div>
