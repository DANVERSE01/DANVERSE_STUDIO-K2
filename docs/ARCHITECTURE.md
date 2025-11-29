# Architecture Blueprint: DANVERSE Studio K2

## 1. Overview

The DANVERSE Studio K2 architecture is a high-performance, scroll-driven spatial interface built on the Next.js App Router. It strictly separates the 3D rendering layer (WebGL/Three.js) from the 2D content layer (HTML/Tailwind CSS) to ensure maximum performance and maintainability. This refactored architecture is based on the Senior CTO's recommendations, focusing on a robust data layer simulation and enhanced security.

## 2. Core Architectural Principles

| Principle | Description | Implementation |
| :--- | :--- | :--- |
| **Separation of Concerns** | Strict division between 3D rendering and HTML content/UI. | `Scene.tsx` (3D) is fixed position; `page.tsx` (HTML) is scrollable overlay. |
| **Performance First** | Utilize GPU acceleration and optimized rendering techniques. | `R3F` (React Three Fiber), `EffectComposer` (Bloom), `dpr` setting, custom GLSL shaders. |
| **Data Readiness** | Simulate a production-ready backend for dynamic content. | `Prisma` schema (`schema.prisma`) and static data layer (`projects.ts`). |
| **Scroll-Driven Cinematics** | Use scroll position to drive 3D camera and object animations. | Custom `ScrollRig` and `ScrollCamera` components to map scroll Y to 3D scene changes. |
| **Security** | Proactive security measures at the framework level. | Strict security headers (CSP, HSTS) configured in `next.config.mjs`. |

## 3. Data Flow and Component Hierarchy

### 3.1. Data Layer Simulation

The project simulates a dynamic data layer to ensure the architecture is ready for a full-stack implementation.

- **Prisma Schema (`prisma/schema.prisma`):** Defines the structure for `Project` and `Service` models, ready for connection to a PostgreSQL database.
- **Static Data (`src/data/projects.ts`):** Provides placeholder data used by the HTML UI (`page.tsx`) to render services and portfolio items, mimicking a CMS fetch.

### 3.2. Component Interaction (Scroll-Based)

1.  **`src/app/page.tsx` (HTML Overlay):**
    -   Renders the fixed `Scene` component.
    -   Renders the scrollable HTML content (Hero, Services, Portfolio, Contact sections).
    -   Uses `framer-motion` for smooth HTML transitions.
2.  **`src/components/3d/Scene.tsx` (3D Canvas):**
    -   Wraps the entire 3D experience in `<Canvas>`.
    -   Contains the `<ScrollRig>` and `<ScrollCamera>` to manage scroll-based 3D state.
    -   Renders all 3D elements (`NeuralBrain`, `GlassCard`) within `<ScrollSection>` components, which are positioned based on the scroll progress.
3.  **`src/components/3d/NeuralBrain.tsx` (Core Model):**
    -   Renders the central 3D object.
    -   Uses a custom `NeuralMaterial` (GLSL shader) for the bioluminescent effect.

## 4. GLSL Shader Logic (`NeuralBrain.tsx`)

The core visual effect is driven by the custom `NeuralMaterial` shader, which is a key part of the project's aesthetic.

| Shader Component | Purpose | Key Logic |
| :--- | :--- | :--- |
| **Vertex Shader** | Controls the geometry's shape and animation. | Uses `sin(time)` and `position.y` to create a subtle, pulsing, liquid-like distortion along the Y-axis, giving the brain a "breathing" effect. |
| **Fragment Shader** | Controls the color, glow, and final appearance. | Calculates distance from the center (`dist`) to create a central glow. Uses `mix(colorA, colorB, ...)` to blend the Cyan and Magenta colors based on time and position, simulating neural activity and bioluminescence. |

## 5. Security and Performance

- **Security Headers:** Implemented in `next.config.mjs` to mitigate common web vulnerabilities (XSS, Clickjacking, MIME-sniffing).
- **Lighthouse CI:** Assertions are configured to enforce a minimum performance score of 90+ and strict core web vitals limits.
- **Resource Management:** The `ScrollRig` architecture ensures that only the necessary 3D elements are active or in focus for the current scroll section, optimizing GPU load.
