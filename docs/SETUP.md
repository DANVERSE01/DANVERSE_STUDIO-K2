# Setup Guide

Complete guide to setting up DANVERSE Studio K2 for local development.

## Prerequisites

### Required Software

1. **Node.js** (>= 18.17.0)
   ```bash
   # Check version
   node --version
   
   # Install via nvm (recommended)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   nvm install 18
   nvm use 18
   ```

2. **npm** (>= 9.0.0)
   ```bash
   # Check version
   npm --version
   
   # Update if needed
   npm install -g npm@latest
   ```

3. **Git**
   ```bash
   # Check version
   git --version
   ```

### Recommended Tools

- **VS Code** with extensions:
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
- **Chrome DevTools** for debugging
- **React Developer Tools**
- **Spector.js** for WebGL debugging

---

## Installation

### 1. Clone Repository

```bash
# HTTPS
git clone https://github.com/DANVERSE01/DANVERSE_STUDIO-K2.git

# OR SSH
git clone git@github.com:DANVERSE01/DANVERSE_STUDIO-K2.git

# Navigate to directory
cd DANVERSE_STUDIO-K2
```

### 2. Install Dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json`.

### 3. Environment Setup

```bash
# Copy example environment file
cp .env.example .env.local

# Edit with your preferred editor
nano .env.local  # or code .env.local
```

**Required Variables:**
```env
NEXT_PUBLIC_APP_NAME="DANVERSE Studio K2"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_VERSION="2.0.0"
```

**Optional Variables:**
```env
# Feature flags
NEXT_PUBLIC_ENABLE_3D_PHYSICS=true
NEXT_PUBLIC_ENABLE_POSTPROCESSING=true
NEXT_PUBLIC_ENABLE_DEBUG_MODE=true

# Performance
NEXT_PUBLIC_TARGET_FPS=60
NEXT_PUBLIC_PIXEL_RATIO_MAX=2
```

### 4. Verify Setup

```bash
# Type check
npm run type-check

# Lint check
npm run lint

# Format check
npm run format:check
```

All checks should pass without errors.

---

## Development

### Start Development Server

```bash
npm run dev
```

Server will start at: http://localhost:3000

Features enabled:
- Hot Module Replacement (HMR)
- Fast Refresh
- TypeScript compilation
- Error overlay
- Source maps

### Development Workflow

1. **Make Changes** - Edit files in `src/`
2. **Auto-Reload** - Browser updates automatically
3. **Check Console** - Monitor for errors
4. **Test Changes** - Verify functionality
5. **Commit** - Follow commit conventions

### Common Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Production build
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run format:check     # Check formatting
npm run type-check       # TypeScript check

# Testing
npm test                 # Run tests
npm run test:ui          # Test UI
npm run test:coverage    # Coverage report

# Analysis
npm run analyze          # Bundle analysis
```

---

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
│
├── components/
│   ├── canvas/          # 3D components
│   │   ├── Experience.tsx
│   │   ├── Scene.tsx
│   │   ├── AICore.tsx
│   │   ├── NeuralTunnel.tsx
│   │   └── FloatingGallery.tsx
│   └── ui/              # UI components
│       └── HUD.tsx
│
├── data/                # Static data
│   └── index.ts
│
├── lib/                 # Utilities
│   └── utils.ts
│
├── store/               # State management
│   └── scrollStore.ts
│
├── types/               # TypeScript types
│   └── global.d.ts
│
└── __tests__/           # Tests
    ├── setup.ts
    └── components/
```

---

## Troubleshooting

### Common Issues

#### 1. Port Already in Use

```bash
# Error: Port 3000 is already in use

# Solution: Use different port
PORT=3001 npm run dev

# Or kill existing process
lsof -ti:3000 | xargs kill -9
```

#### 2. Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. TypeScript Errors

```bash
# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server"

# Or delete and regenerate
rm -rf .next
npm run dev
```

#### 4. WebGL Context Lost

```bash
# Too many WebGL contexts
# Solution: Close other tabs using WebGL
# Or increase limit in Chrome:
chrome://flags/#use-angle
```

#### 5. Out of Memory

```bash
# Increase Node.js memory
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

---

## Performance Optimization

### Development Mode

```javascript
// next.config.js
module.exports = {
  // Faster rebuilds
  swcMinify: true,
  
  // Reduce bundle size
  experimental: {
    optimizePackageImports: ['@react-three/fiber'],
  },
};
```

### GPU Debugging

```javascript
// Enable WebGL debugging
const gl = canvas.getContext('webgl', {
  alpha: false,
  antialias: false,
  preserveDrawingBuffer: true,
});

// Monitor GPU usage
const ext = gl.getExtension('WEBGL_debug_renderer_info');
const vendor = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL);
const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
```

---

## Editor Setup

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### Recommended Extensions

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-typescript-next
```

---

## Testing Setup

### Run Tests

```bash
# All tests
npm test

# Watch mode
npm test -- --watch

# Specific file
npm test -- src/__tests__/components/HUD.test.tsx

# Coverage
npm run test:coverage
```

### Writing Tests

```typescript
// src/__tests__/components/MyComponent.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

---

## Deployment

### Local Production Build

```bash
# Build
npm run build

# Test production build locally
npm run start
```

### Manual Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## Next Steps

1. **Read Documentation**
   - [Architecture](./ARCHITECTURE.md)
   - [API Reference](./API.md)
   - [Contributing Guide](../CONTRIBUTING.md)

2. **Explore Components**
   - Study 3D components in `src/components/canvas/`
   - Review UI components in `src/components/ui/`

3. **Make Changes**
   - Start with small modifications
   - Test thoroughly
   - Follow commit conventions

4. **Get Help**
   - Check [Troubleshooting](#troubleshooting)
   - Open an issue
   - Contact: versedan13@gmail.com

---

**Happy Coding! 🚀**