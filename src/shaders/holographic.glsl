// Holographic Shader
// Scan lines and hologram effect

uniform float uTime;
uniform vec3 uColor;
uniform float uScanlineSpeed;
uniform float uScanlineWidth;
uniform float uGlitchIntensity;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

// Random function
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  // Scanlines
  float scanline = sin((vUv.y + uTime * uScanlineSpeed) * 200.0);
  scanline = smoothstep(0.3, 0.7, scanline);
  
  // Horizontal scan
  float horizontalScan = fract(vUv.y * 50.0 + uTime * 0.5);
  horizontalScan = step(0.95, horizontalScan) * 0.5;
  
  // Glitch effect
  float glitch = 0.0;
  if(random(vec2(floor(uTime * 10.0))) > 0.9) {
    glitch = random(vec2(vUv.y, uTime)) * uGlitchIntensity;
  }
  
  // Fresnel
  vec3 viewDir = normalize(cameraPosition - vPosition);
  float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);
  
  // Combine effects
  vec3 color = uColor;
  color *= scanline;
  color += horizontalScan * uColor;
  color += glitch * vec3(0.0, 1.0, 1.0);
  color += fresnel * uColor * 1.5;
  
  // Transparency
  float alpha = scanline * 0.7 + fresnel * 0.3;
  
  gl_FragColor = vec4(color, alpha);
}