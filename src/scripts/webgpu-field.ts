// @ts-nocheck
// Optional WebGPU background: a stylized black hole / accretion-disk
// shader that reacts to scroll depth and pointer position. Entirely
// additive — it no-ops without WebGPU support or on reduced-motion,
// leaving the canvas-2D starfield as the baseline experience in that
// case. The canvas renders fully opaque (the simplest, best-supported
// WebGPU canvas path) and runs in both themes — the "empty space"
// background color is passed in as a uniform and swaps with the
// current theme, while the event horizon stays black in either case.

const SHADER = /* wgsl */ `
struct Uniforms {
  timeRes: vec4<f32>, // time, resX, resY, scrollProgress
  pointer: vec4<f32>, // pointerX, pointerY, unused, unused
  bg: vec4<f32>,       // bgR, bgG, bgB, unused
};
@group(0) @binding(0) var<uniform> u: Uniforms;

@vertex
fn vs_main(@builtin(vertex_index) idx: u32) -> @builtin(position) vec4<f32> {
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
  );
  return vec4<f32>(pos[idx], 0.0, 1.0);
}

fn hash(p: vec2<f32>) -> f32 {
  return fract(sin(dot(p, vec2<f32>(127.1, 311.7))) * 43758.5453);
}

fn noise(p: vec2<f32>) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let a = hash(i);
  let b = hash(i + vec2<f32>(1.0, 0.0));
  let c = hash(i + vec2<f32>(0.0, 1.0));
  let d = hash(i + vec2<f32>(1.0, 1.0));
  let u2 = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u2.x) + (c - a) * u2.y * (1.0 - u2.x) + (d - b) * u2.x * u2.y;
}

fn fbm(p: vec2<f32>) -> f32 {
  var v = 0.0;
  var amp = 0.5;
  var pp = p;
  for (var i = 0; i < 5; i = i + 1) {
    v += amp * noise(pp);
    pp = pp * 2.03;
    amp *= 0.52;
  }
  return v;
}

@fragment
fn fs_main(@builtin(position) fragCoord: vec4<f32>) -> @location(0) vec4<f32> {
  let res = u.timeRes.yz;
  let t = u.timeRes.x;
  let scroll = u.timeRes.w;
  let aspect = res.x / res.y;

  let uv = (fragCoord.xy / res - vec2<f32>(0.5, 0.5)) * vec2<f32>(aspect, 1.0);

  let pointer = (u.pointer.xy - vec2<f32>(0.5, 0.5)) * vec2<f32>(aspect, 1.0);
  let center = pointer * 0.35 + vec2<f32>(0.0, -0.06 - scroll * 0.2);

  let d = uv - center;
  let r = max(length(d), 0.0001);
  let angle = atan2(d.y, d.x);

  let horizon = 0.085 + scroll * 0.025;
  let diskOuter = 0.6;

  let bend = (0.14 + scroll * 0.08) / (r + 0.03);
  let swirlAngle = angle + bend + t * (0.05 + scroll * 0.06);

  let turbulence = fbm(
    vec2<f32>(cos(swirlAngle), sin(swirlAngle)) * (2.2 + r * 4.0) + vec2<f32>(r * 6.0 - t * 0.3, 1.7)
  );

  let diskMask = smoothstep(horizon, horizon + 0.05, r) * (1.0 - smoothstep(diskOuter - 0.24, diskOuter, r));
  let diskGlow = clamp(diskMask * (0.3 + 0.7 * turbulence), 0.0, 1.0);

  let heat = clamp(1.0 - (r - horizon) / (diskOuter - horizon), 0.0, 1.0);
  let isLight = u.bg.a;
  let innerColor = mix(vec3<f32>(0.85, 0.92, 1.0), vec3<f32>(0.95, 0.5, 0.1), isLight);
  let outerColor = mix(vec3<f32>(1.0, 0.5, 0.2), vec3<f32>(0.85, 0.25, 0.05), isLight);
  let diskColor = mix(outerColor, innerColor, pow(heat, 1.6));

  let voidMask = 1.0 - smoothstep(horizon * 0.7, horizon, r);

  var color = mix(u.bg.rgb, diskColor, diskGlow);
  color = mix(color, vec3<f32>(0.0, 0.0, 0.0), voidMask);

  return vec4<f32>(color, 1.0);
}
`;

let started = false;

export async function initWebGPUField(): Promise<void> {
  if (started) return;
  started = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("gpu" in navigator)) return;

  const canvas = document.getElementById("gpu-field");
  if (!(canvas instanceof HTMLCanvasElement)) return;

  let device;
  let context;
  let format;
  let pipeline;
  let uniformBuffer;
  let bindGroup;

  try {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) return;
    device = await adapter.requestDevice();
    context = canvas.getContext("webgpu");
    if (!context) return;
    format = navigator.gpu.getPreferredCanvasFormat();

    const module = device.createShaderModule({ code: SHADER });
    pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: { module, entryPoint: "vs_main" },
      fragment: { module, entryPoint: "fs_main", targets: [{ format }] },
      primitive: { topology: "triangle-list" }
    });

    uniformBuffer = device.createBuffer({
      size: 48,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: uniformBuffer } }]
    });
  } catch {
    return;
  }

  canvas.style.opacity = "0";

  const DARK_BG = [0.008, 0.01, 0.014];
  const LIGHT_BG = [0.96, 0.96, 0.965];

  const uniformData = new Float32Array(12);
  const pointerTarget = { x: 0.5, y: 0.5 };
  const pointer = { x: 0.5, y: 0.5 };
  let scrollTarget = 0;
  let scroll = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(window.innerWidth * dpr));
    canvas.height = Math.max(1, Math.floor(window.innerHeight * dpr));
    context.configure({ device, format, alphaMode: "opaque" });
  }

  function updateScrollTarget() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollTarget = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  }

  window.addEventListener(
    "resize",
    () => {
      resize();
      updateScrollTarget();
    },
    { passive: true }
  );
  window.addEventListener("scroll", updateScrollTarget, { passive: true });
  window.addEventListener(
    "pointermove",
    (e) => {
      pointerTarget.x = e.clientX / window.innerWidth;
      pointerTarget.y = 1 - e.clientY / window.innerHeight;
    },
    { passive: true }
  );

  resize();
  updateScrollTarget();

  function frame(t: number) {
    canvas.style.opacity = "1";

    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    const bg = isDark ? DARK_BG : LIGHT_BG;

    pointer.x += (pointerTarget.x - pointer.x) * 0.06;
    pointer.y += (pointerTarget.y - pointer.y) * 0.06;
    scroll += (scrollTarget - scroll) * 0.05;

    uniformData[0] = t * 0.001;
    uniformData[1] = canvas.width;
    uniformData[2] = canvas.height;
    uniformData[3] = scroll;
    uniformData[4] = pointer.x;
    uniformData[5] = pointer.y;
    uniformData[6] = 0;
    uniformData[7] = 0;
    uniformData[8] = bg[0];
    uniformData[9] = bg[1];
    uniformData[10] = bg[2];
    uniformData[11] = isDark ? 0 : 1;

    try {
      device.queue.writeBuffer(uniformBuffer, 0, uniformData);

      const encoder = device.createCommandEncoder();
      const view = context.getCurrentTexture().createView();
      const pass = encoder.beginRenderPass({
        colorAttachments: [{ view, clearValue: { r: 0, g: 0, b: 0, a: 1 }, loadOp: "clear", storeOp: "store" }]
      });
      pass.setPipeline(pipeline);
      pass.setBindGroup(0, bindGroup);
      pass.draw(3);
      pass.end();
      device.queue.submit([encoder.finish()]);
    } catch {
      canvas.style.opacity = "0";
      return;
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
