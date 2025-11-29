declare global {
  interface Window {
    // Add any global window properties here
  }
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface AnimationConfig {
  duration: number;
  easing?: string;
  delay?: number;
}

export interface PerformanceConfig {
  targetFPS: number;
  maxPixelRatio: number;
  enablePhysics: boolean;
  enablePostProcessing: boolean;
}

export interface ThreeJSContext {
  gl: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  raycaster: THREE.Raycaster;
}

export {};
