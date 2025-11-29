# API Reference

## Components

### Canvas Components

#### Experience

```typescript
import Experience from '@/components/canvas/Experience';

interface ExperienceProps {
  projects: Project[];
  services: Service[];
}

<Experience projects={projects} services={services} />
```

**Props**:
- `projects` (Project[]): Array of project data for gallery
- `services` (Service[]): Array of service data

**Description**:
Main canvas wrapper component that initializes the 3D scene with React Three Fiber.

---

#### Scene

```typescript
import Scene from '@/components/canvas/Scene';

<Scene projects={projects} />
```

**Props**:
- `projects` (Project[]): Projects to display in gallery

**Features**:
- Camera setup and controls
- Lighting configuration
- Post-processing effects
- Scroll-based animations

---

#### AICore

```typescript
import AICore from '@/components/canvas/AICore';

<AICore position={[0, 0, 0]} scale={1} />
```

**Props**:
- `position?` ([number, number, number]): 3D position (default: [0, 0, 0])
- `scale?` (number): Scale factor (default: 1)
- `intensity?` (number): Animation intensity (default: 1)

**Features**:
- 10,000+ particle system
- Custom GLSL shaders
- Audio-reactive (optional)
- Morphing animations

---

#### NeuralTunnel

```typescript
import NeuralTunnel from '@/components/canvas/NeuralTunnel';

<NeuralTunnel segments={100} radius={5} />
```

**Props**:
- `segments?` (number): Number of tunnel segments (default: 100)
- `radius?` (number): Tunnel radius (default: 5)
- `particleCount?` (number): Number of particles (default: 5000)

**Features**:
- Procedural tunnel generation
- Flowing particle streams
- Camera path animation
- Interactive depth-of-field

---

#### FloatingGallery

```typescript
import FloatingGallery from '@/components/canvas/FloatingGallery';

<FloatingGallery projects={projects} spacing={3} />
```

**Props**:
- `projects` (Project[]): Array of projects to display
- `spacing?` (number): Space between cards (default: 3)
- `physicsEnabled?` (boolean): Enable physics (default: true)

**Features**:
- Physics-based floating
- Interactive raycasting
- Click to expand
- Smooth camera transitions

---

### UI Components

#### HUD

```typescript
import HUD from '@/components/ui/HUD';

<HUD showFPS={true} showProgress={true} />
```

**Props**:
- `showFPS?` (boolean): Display FPS counter (default: false)
- `showProgress?` (boolean): Display scroll progress (default: true)
- `showNav?` (boolean): Display navigation (default: true)

**Features**:
- Scroll progress indicator
- Performance metrics
- Navigation breadcrumbs
- Accessibility controls

---

## Hooks

### useScrollProgress

```typescript
import { useScrollProgress } from '@/hooks/useScrollProgress';

const progress = useScrollProgress();
// progress: 0-1 representing scroll position
```

**Returns**: `number` (0-1)

**Description**:
Provides normalized scroll progress with throttling for performance.

---

### useThree

```typescript
import { useThree } from '@react-three/fiber';

const { camera, gl, scene } = useThree();
```

**Returns**:
- `camera`: Active Three.js camera
- `gl`: WebGL renderer instance
- `scene`: Three.js scene
- `raycaster`: Raycaster for interactions
- `size`: Canvas size
- `viewport`: Viewport dimensions

---

### useFrame

```typescript
import { useFrame } from '@react-three/fiber';

useFrame((state, delta) => {
  // Called every frame
  mesh.rotation.x += delta;
});
```

**Parameters**:
- `state`: Current Three.js state
- `delta`: Time since last frame (seconds)

**Description**:
Animation loop hook that runs at 60 FPS.

---

## Stores

### scrollStore

```typescript
import { useScrollStore } from '@/store/scrollStore';

const { progress, section, setProgress } = useScrollStore();
```

**State**:
```typescript
interface ScrollStore {
  progress: number;        // 0-1 scroll position
  section: string;         // Current section ID
  direction: 'up' | 'down'; // Scroll direction
  setProgress: (val: number) => void;
  setSection: (id: string) => void;
}
```

**Usage Example**:
```typescript
const Component = () => {
  const progress = useScrollStore((state) => state.progress);
  
  useEffect(() => {
    // React to progress changes
  }, [progress]);
};
```

---

## Utilities

### cn (Class Names)

```typescript
import { cn } from '@/lib/utils';

const className = cn(
  'base-class',
  condition && 'conditional-class',
  { 'class-a': true, 'class-b': false }
);
```

**Parameters**: `...inputs: ClassValue[]`  
**Returns**: `string`

---

### clamp

```typescript
import { clamp } from '@/lib/utils';

const value = clamp(150, 0, 100); // Returns 100
```

**Parameters**:
- `value` (number): Value to clamp
- `min` (number): Minimum value
- `max` (number): Maximum value

**Returns**: `number`

---

### lerp

```typescript
import { lerp } from '@/lib/utils';

const interpolated = lerp(0, 100, 0.5); // Returns 50
```

**Parameters**:
- `start` (number): Start value
- `end` (number): End value
- `t` (number): Interpolation factor (0-1)

**Returns**: `number`

---

### mapRange

```typescript
import { mapRange } from '@/lib/utils';

const mapped = mapRange(5, 0, 10, 0, 100); // Returns 50
```

**Parameters**:
- `value` (number): Input value
- `inMin` (number): Input range minimum
- `inMax` (number): Input range maximum
- `outMin` (number): Output range minimum
- `outMax` (number): Output range maximum

**Returns**: `number`

---

### debounce

```typescript
import { debounce } from '@/lib/utils';

const debouncedFn = debounce(() => {
  console.log('Called after delay');
}, 300);

window.addEventListener('resize', debouncedFn);
```

**Parameters**:
- `func` (Function): Function to debounce
- `wait` (number): Delay in milliseconds

**Returns**: Debounced function

---

### throttle

```typescript
import { throttle } from '@/lib/utils';

const throttledFn = throttle(() => {
  console.log('Called at most once per interval');
}, 100);

window.addEventListener('scroll', throttledFn);
```

**Parameters**:
- `func` (Function): Function to throttle
- `limit` (number): Minimum time between calls (ms)

**Returns**: Throttled function

---

### supportsWebGL

```typescript
import { supportsWebGL } from '@/lib/utils';

if (supportsWebGL()) {
  // Initialize 3D experience
} else {
  // Show fallback content
}
```

**Returns**: `boolean`

---

### getPixelRatio

```typescript
import { getPixelRatio } from '@/lib/utils';

const dpr = getPixelRatio(2); // Max 2x for performance
```

**Parameters**:
- `max?` (number): Maximum pixel ratio (default: 2)

**Returns**: `number`

---

### prefersReducedMotion

```typescript
import { prefersReducedMotion } from '@/lib/utils';

const reduced = prefersReducedMotion();
if (reduced) {
  // Disable animations
}
```

**Returns**: `boolean`

---

## Types

### Project

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  year: number;
}
```

### Service

```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}
```

### AnimationConfig

```typescript
interface AnimationConfig {
  duration: number;
  easing?: string;
  delay?: number;
}
```

### PerformanceConfig

```typescript
interface PerformanceConfig {
  targetFPS: number;
  maxPixelRatio: number;
  enablePhysics: boolean;
  enablePostProcessing: boolean;
}
```

---

## Environment Variables

### Public Variables

```env
NEXT_PUBLIC_APP_NAME="DANVERSE Studio K2"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
NEXT_PUBLIC_APP_VERSION="2.0.0"

NEXT_PUBLIC_ENABLE_3D_PHYSICS=true
NEXT_PUBLIC_ENABLE_POSTPROCESSING=true
NEXT_PUBLIC_ENABLE_DEBUG_MODE=false

NEXT_PUBLIC_TARGET_FPS=60
NEXT_PUBLIC_PIXEL_RATIO_MAX=2

NEXT_PUBLIC_CONTACT_EMAIL="your@email.com"
```

### Usage

```typescript
const targetFPS = parseInt(process.env.NEXT_PUBLIC_TARGET_FPS || '60');
const enablePhysics = process.env.NEXT_PUBLIC_ENABLE_3D_PHYSICS === 'true';
```

---

## Events

### Custom Events

#### sceneReady

```typescript
window.addEventListener('sceneReady', (event) => {
  console.log('3D scene loaded');
});
```

Fired when the Three.js scene is fully initialized.

---

#### scrollUpdate

```typescript
window.addEventListener('scrollUpdate', (event) => {
  const { progress } = event.detail;
  console.log('Scroll:', progress);
});
```

Fired when scroll position changes (throttled).

---

## Performance Tips

### Optimize Rendering

```typescript
// Use instancing for repeated objects
<instancedMesh args={[geometry, material, count]} />

// Implement LOD
<Lod>
  <mesh geometry={highDetail} distance={0} />
  <mesh geometry={lowDetail} distance={10} />
</Lod>

// Enable frustum culling
<mesh frustumCulled={true} />
```

### Memory Management

```typescript
useEffect(() => {
  const texture = textureLoader.load('/image.jpg');
  
  return () => {
    // Clean up on unmount
    texture.dispose();
    geometry.dispose();
    material.dispose();
  };
}, []);
```

---

**Last Updated**: 2025-11-29  
**Version**: 2.0.0