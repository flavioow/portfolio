export const vertexShader = `
  uniform sampler2D uDepth;
  uniform vec2 uMotion;
  uniform float uDepthPower;
  uniform float uVertexDepthStrength;

  varying vec2 vUv;
  varying vec3 vViewDirection;
  varying float vDepth;
  varying float vDepthFalloff;

  void main() {
    vUv = uv;

    float rawDepth = texture2D(uDepth, uv).r;
    float shapedDepth = pow(clamp(rawDepth, 0.0, 1.0), uDepthPower);
    float centeredDepth = shapedDepth - 0.5;

    vec2 centeredUv = uv - 0.5;
    float centerDistance = length(centeredUv);
    float depthFalloff = 1.0 - smoothstep(0.28, 0.78, centerDistance);

    vec3 transformed = position;
    transformed.z += centeredDepth * uVertexDepthStrength * depthFalloff;

    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);

    vDepth = shapedDepth;
    vDepthFalloff = depthFalloff;
    vViewDirection = normalize(cameraPosition - worldPosition.xyz);

    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`

export const fragmentShader = `
  uniform sampler2D uDiffuse;
  uniform sampler2D uDepth;
  uniform sampler2D uAlpha;
  uniform sampler2D uNormal;
  uniform sampler2D uRoughness;
  uniform vec2 uMotion;
  uniform float uUvParallaxStrength;
  uniform float uNormalStrength;
  uniform float uSpecularStrength;
  uniform float uFresnelStrength;
  uniform float uDepthPower;
  uniform vec3 uLightDirection;

  varying vec2 vUv;
  varying vec3 vViewDirection;
  varying float vDepth;
  varying float vDepthFalloff;

  void main() {
    float rawDepth = texture2D(uDepth, vUv).r;
    float shapedDepth = pow(clamp(rawDepth, 0.0, 1.0), uDepthPower);
    float centeredDepth = shapedDepth - 0.5;

    vec2 centeredUv = vUv - 0.5;
    float edgeFalloff = 1.0 - smoothstep(0.36, 0.78, length(centeredUv));

    vec4 baseAlphaMap = texture2D(uAlpha, vUv);
    float baseAlpha = min(max(baseAlphaMap.r, baseAlphaMap.a), texture2D(uDiffuse, vUv).a);
    float alphaGuard = smoothstep(0.04, 0.28, baseAlpha);

    vec2 motion = vec2(uMotion.x, -uMotion.y);
    vec2 parallax =
      motion *
      centeredDepth *
      uUvParallaxStrength *
      edgeFalloff *
      alphaGuard;

    vec2 displacedUv = vUv - parallax;
    displacedUv = clamp(displacedUv, vec2(0.002), vec2(0.998));

    if (displacedUv.x < 0.001 || displacedUv.x > 0.999 ||
        displacedUv.y < 0.001 || displacedUv.y > 0.999) {
      discard;
    }

    vec4 color = texture2D(uDiffuse, displacedUv);
    vec4 alphaMap = texture2D(uAlpha, displacedUv);
    float alphaMask = min(max(alphaMap.r, alphaMap.a), color.a);
    float alpha = smoothstep(0.015, 0.99, alphaMask);

    if (alpha < 0.01) {
      discard;
    }

    vec3 normalSample = texture2D(uNormal, displacedUv).rgb * 2.0 - 1.0;
    normalSample.xy *= uNormalStrength;
    vec3 normal = normalize(normalSample);

    vec3 lightDirection = normalize(uLightDirection);
    vec3 viewDirection = normalize(vViewDirection);
    vec3 halfDirection = normalize(lightDirection + viewDirection);

    float diffuseLight = dot(normal, lightDirection) * 0.5 + 0.5;
    diffuseLight = mix(0.995, 1.005, diffuseLight);

    float roughness = clamp(texture2D(uRoughness, displacedUv).r, 0.0, 1.0);
    float specularPower = mix(42.0, 10.0, roughness);
    float specular =
      pow(max(dot(normal, halfDirection), 0.0), specularPower) *
      (1.0 - roughness) *
      uSpecularStrength *
      vDepthFalloff *
      alpha;

    float fresnel =
      pow(1.0 - clamp(dot(viewDirection, normal), 0.0, 1.0), 3.0) *
      uFresnelStrength *
      vDepthFalloff *
      alpha;

    vec3 finalColor =
      mix(color.rgb, color.rgb * diffuseLight, 0.04) +
      vec3(specular * 0.02) +
      color.rgb * fresnel * 0.015;

    gl_FragColor = vec4(finalColor, alpha);
    gl_FragColor.rgb *= gl_FragColor.a;

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`
