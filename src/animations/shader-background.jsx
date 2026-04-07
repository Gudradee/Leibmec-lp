import { useEffect, useRef } from 'react';

// ─── WebGL Plasma Shader Background ─────────────────────────────────────────
// Renders animated plasma lines driven by a GLSL fragment shader.
// Designed as an `absolute inset-0` background layer inside a `relative
// overflow-hidden` parent. Colors are adapted to the navy/gold site theme.

const VS_SOURCE = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

// Fragment shader — navy background with gold plasma lines
const FS_SOURCE = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  const float overallSpeed      = 0.18;
  const float gridSmoothWidth   = 0.015;
  const float axisWidth         = 0.05;
  const float majorLineWidth    = 0.025;
  const float minorLineWidth    = 0.0125;
  const float majorLineFrequency = 5.0;
  const float minorLineFrequency = 1.0;
  const float scale             = 5.0;

  /* gold: #fec539 → 0.996, 0.773, 0.224 */
  const vec4 lineColor          = vec4(0.996, 0.773, 0.224, 1.0);

  const float minLineWidth      = 0.008;
  const float maxLineWidth      = 0.16;
  const float lineSpeed         = 1.0 * overallSpeed;
  const float lineAmplitude     = 1.0;
  const float lineFrequency     = 0.2;
  const float warpSpeed         = 0.2 * overallSpeed;
  const float warpFrequency     = 0.5;
  const float warpAmplitude     = 1.0;
  const float offsetFrequency   = 0.5;
  const float offsetSpeed       = 1.33 * overallSpeed;
  const float minOffsetSpread   = 0.6;
  const float maxOffsetSpread   = 2.0;
  const int   linesPerGroup     = 14;

  #define drawCircle(pos, radius, coord) \
    smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) \
    smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) \
    smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float hFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * hFade * lineAmplitude + offset;
  }

  void main() {
    vec2 uv    = gl_FragCoord.xy / iResolution.xy;
    vec2 space = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.x * 2.0 * scale;

    float hFade = 1.0 - (cos(uv.x * 6.28318) * 0.5 + 0.5);
    float vFade = 1.0 - (cos(uv.y * 6.28318) * 0.5 + 0.5);

    space.y += random(space.x * warpFrequency + iTime * warpSpeed)
               * warpAmplitude * (0.5 + hFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0)
               * warpAmplitude * hFade;

    /* Navy background gradient: #0f0e36 → #1a1850 */
    vec4 bgColor1 = vec4(0.059, 0.055, 0.212, 1.0);
    vec4 bgColor2 = vec4(0.102, 0.094, 0.314, 1.0);
    vec4 lines    = vec4(0.0);

    for (int l = 0; l < linesPerGroup; l++) {
      float nIdx       = float(l) / float(linesPerGroup);
      float offsetPos  = float(l) + space.x * offsetFrequency;
      float offsetTime = iTime * offsetSpeed;
      float rand       = random(offsetPos + offsetTime) * 0.5 + 0.5;
      float halfWidth  = mix(minLineWidth, maxLineWidth, rand * hFade) * 0.5;
      float offset     = random(offsetPos + offsetTime * (1.0 + nIdx))
                         * mix(minOffsetSpread, maxOffsetSpread, hFade);
      float linePos    = getPlasmaY(space.x, hFade, offset);
      float line       = drawSmoothLine(linePos, halfWidth, space.y) * 0.5
                       + drawCrispLine(linePos, halfWidth * 0.15, space.y);

      float cx = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
      vec2  cp = vec2(cx, getPlasmaY(cx, hFade, offset));
      line += drawCircle(cp, 0.012, space) * 4.0;

      lines += line * lineColor * rand;
    }

    vec4 color  = mix(bgColor1, bgColor2, uv.x);
    color      *= vFade;
    color.a     = 1.0;
    color      += lines;

    gl_FragColor = color;
  }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function initProgram(gl) {
  const vs = compileShader(gl, gl.VERTEX_SHADER, VS_SOURCE);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FS_SOURCE);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

// ─── Component ───────────────────────────────────────────────────────────────
export function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported — shader background disabled.');
      return;
    }

    const program = initProgram(gl);
    if (!program) return;

    // Full-screen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const posLoc = gl.getAttribLocation(program, 'aVertexPosition');
    const resLoc = gl.getUniformLocation(program, 'iResolution');
    const timeLoc = gl.getUniformLocation(program, 'iTime');

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width  = parent ? parent.offsetWidth  : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const startTime = Date.now();
    let rafId;

    const render = () => {
      const t = (Date.now() - startTime) / 1000;
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, t);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(posLoc);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
