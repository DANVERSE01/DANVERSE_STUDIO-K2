// Glass Refraction Shader
// Advanced glassmorphism with realistic refraction

uniform float uTime;
uniform float uIOR;           // Index of Refraction
uniform float uThickness;
uniform vec3 uTint;
uniform float uChromaticAberration;
uniform sampler2D uEnvMap;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vViewPosition;

// Refraction calculation
vec3 refract3(vec3 incident, vec3 normal, float ior) {
  return refract(incident, normal, 1.0 / ior);
}

// Chromatic aberration refraction
vec3 chromaticRefraction(vec3 incident, vec3 normal, float ior, float aberration) {
  vec3 refractR = refract3(incident, normal, ior * (1.0 - aberration));
  vec3 refractG = refract3(incident, normal, ior);
  vec3 refractB = refract3(incident, normal, ior * (1.0 + aberration));
  
  return vec3(refractR.r, refractG.g, refractB.b);
}

void main() {
  vec3 viewDir = normalize(vViewPosition);
  
  // Fresnel effect
  float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.0);
  
  // Chromatic refraction
  vec3 refractDir = chromaticRefraction(
    -viewDir,
    vNormal,
    uIOR,
    uChromaticAberration
  );
  
  // Sample environment with refraction
  // (In real implementation, would use cube map)
  vec2 refractUV = vUv + refractDir.xy * 0.1;
  vec3 refractedColor = texture2D(uEnvMap, refractUV).rgb;
  
  // Apply tint
  vec3 tintedColor = refractedColor * uTint;
  
  // Mix with fresnel
  vec3 finalColor = mix(tintedColor, vec3(1.0), fresnel * 0.3);
  
  // Add edge glow
  finalColor += fresnel * uTint * 2.0;
  
  // Transparency based on thickness and angle
  float alpha = mix(0.7, 0.95, fresnel);
  alpha *= (1.0 - uThickness * 0.5);
  
  gl_FragColor = vec4(finalColor, alpha);
}