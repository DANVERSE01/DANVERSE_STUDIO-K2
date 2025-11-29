// Liquid Metal Shader
// Based on Saganaki22/MetalFlow patterns
// Flowing metallic liquid with chromatic effects

uniform float uTime;
uniform vec3 uColorPrimary;   // Cyan
uniform vec3 uColorSecondary; // Magenta
uniform float uFlowSpeed;
uniform float uMetalness;
uniform float uRoughness;
uniform sampler2D uMatcap;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;

// Voronoi noise for liquid cells
vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float voronoi(vec2 p, float time) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  
  float minDist = 1.0;
  
  for(int y = -1; y <= 1; y++) {
    for(int x = -1; x <= 1; x++) {
      vec2 neighbor = vec2(float(x), float(y));
      vec2 point = hash2(i + neighbor);
      point = 0.5 + 0.5 * sin(time + 6.2831 * point);
      vec2 diff = neighbor + point - f;
      float dist = length(diff);
      minDist = min(minDist, dist);
    }
  }
  
  return minDist;
}

// Flow distortion
vec2 flowDistortion(vec2 uv, float time) {
  vec2 flow = vec2(
    sin(uv.y * 3.0 + time),
    cos(uv.x * 3.0 - time)
  );
  return uv + flow * 0.1;
}

void main() {
  // Animated flow
  float time = uTime * uFlowSpeed;
  vec2 distortedUV = flowDistortion(vUv * 4.0, time);
  
  // Voronoi cells for liquid metal effect
  float cells = voronoi(distortedUV, time);
  float cells2 = voronoi(distortedUV * 2.0, time * 0.5);
  
  // Combine multiple scales
  float liquid = cells * 0.7 + cells2 * 0.3;
  
  // Fresnel for metallic edge
  vec3 viewDir = normalize(vViewPosition);
  float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);
  
  // Metallic color gradient
  vec3 baseColor = mix(uColorPrimary, uColorSecondary, liquid);
  
  // Add chromatic aberration effect
  float aberration = fresnel * 0.02;
  vec3 colorR = mix(uColorPrimary, uColorSecondary, liquid + aberration);
  vec3 colorG = mix(uColorPrimary, uColorSecondary, liquid);
  vec3 colorB = mix(uColorPrimary, uColorSecondary, liquid - aberration);
  vec3 chromaticColor = vec3(colorR.r, colorG.g, colorB.b);
  
  // Metallic highlights
  vec3 finalColor = chromaticColor;
  finalColor += fresnel * vec3(1.0) * 0.5;
  finalColor += smoothstep(0.8, 1.0, liquid) * vec3(1.0) * 0.3;
  
  // Flowing highlights
  float flow = sin(vPosition.x * 5.0 + time * 2.0) * 0.5 + 0.5;
  finalColor += flow * uColorSecondary * 0.2;
  
  gl_FragColor = vec4(finalColor, 1.0);
}