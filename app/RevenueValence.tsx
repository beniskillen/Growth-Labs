"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  innerShell,
  outerShell,
  trustBrands,
  valenceMetrics,
  type ValenceMetricId,
} from "./brand";

type V3 = [number, number, number];

type OverlayKind = "metric" | "tam" | "revenue" | "logo";

type OverlayState = {
  id: string;
  kind: OverlayKind;
  x: number;
  y: number;
  scale: number;
  depth: number;
  visible: boolean;
};

type LogoSprite = {
  name: string;
  canvas: HTMLCanvasElement;
  base: V3;
  spin: number;
};

type Particle = {
  p: V3;
  size: number;
  tone: string;
  phase: number;
};

type Trail = { x: number; y: number; a: number };

const SIGNAL = "#667cff";
const PAPER = "#f4f4f2";
const STEEL = "#8a8f98";
const INNER_R = 1.08;
const OUTER_R = 1.62;
const TAM_R = 2.18;
const NUCLEUS_R = 0.42;

function add(a: V3, b: V3): V3 {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function rotX([x, y, z]: V3, a: number): V3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [x, y * c - z * s, y * s + z * c];
}

function rotY([x, y, z]: V3, a: number): V3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [x * c + z * s, y, -x * s + z * c];
}

function rotZ([x, y, z]: V3, a: number): V3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [x * c - y * s, x * s + y * c, z];
}

function project(p: V3, w: number, h: number, dist: number) {
  const z = p[2] + dist;
  const s = (Math.min(w, h) * 0.236) / Math.max(0.55, z);
  return {
    x: w * 0.5 + p[0] * s,
    y: h * 0.535 + p[1] * s,
    s,
    depth: z,
  };
}

function fibonacci(count: number, radius: number): V3[] {
  const points: V3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = count === 1 ? 0 : 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push([
      Math.cos(theta) * r * radius,
      y * radius * 0.86,
      Math.sin(theta) * r * radius,
    ]);
  }
  return points;
}

function makeLogoPlate(image: HTMLImageElement) {
  const size = 128;
  const plate = document.createElement("canvas");
  plate.width = size;
  plate.height = size;
  const ctx = plate.getContext("2d");
  if (!ctx) return plate;

  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = "#16161c";
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 10, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.fillStyle = "#f4f4f2";
  ctx.fillRect(8, 8, size - 16, size - 16);

  const pad = 18;
  const box = size - pad * 2;
  const aspect = image.naturalWidth / Math.max(1, image.naturalHeight);
  let dw = box;
  let dh = box;
  if (aspect > 1) dh = box / aspect;
  else dw = box * aspect;
  ctx.drawImage(image, (size - dw) / 2, (size - dh) / 2, dw, dh);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 3, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(102, 124, 255, 0.55)";
  ctx.lineWidth = 3;
  ctx.stroke();
  return plate;
}

function shellPoint(radius: number, theta: number, tilt: number, roll: number): V3 {
  const onRing: V3 = [Math.cos(theta) * radius, Math.sin(theta) * radius, 0];
  return rotZ(rotX(onRing, tilt), roll);
}

export default function RevenueValence({
  focusId = null,
  scrollProgress,
  onFocus,
}: {
  focusId?: ValenceMetricId | null;
  scrollProgress?: number;
  onFocus?: (id: ValenceMetricId | null) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<Record<string, HTMLElement | null>>({});
  const pointer = useRef({ x: 0, y: 0, active: false });
  const scrollRef = useRef(0);
  const scrollPropRef = useRef(scrollProgress);
  const focusRef = useRef<ValenceMetricId | null>(focusId);
  const lockedRef = useRef(false);
  const [locked, setLocked] = useState(false);
  const [activeId, setActiveId] = useState<ValenceMetricId | null>(focusId);
  const [ready, setReady] = useState(false);
  const reduceId = useId();

  useEffect(() => {
    scrollPropRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    focusRef.current = focusId ?? activeId;
  }, [focusId, activeId]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let intro = 0;
    let logos: LogoSprite[] = [];
    let particles: Particle[] = [];
    const trails: Record<string, Trail[]> = {};
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let disposed = false;

    const loadLogos = Promise.all(
      trustBrands.map(
        (brand, index) =>
          new Promise<LogoSprite>((resolve) => {
            const image = new Image();
            image.decoding = "async";
            image.onload = () => {
              const points = fibonacci(trustBrands.length, NUCLEUS_R);
              resolve({
                name: brand.name,
                canvas: makeLogoPlate(image),
                base: points[index] ?? [0, 0, 0],
                spin: index * 0.7,
              });
            };
            image.onerror = () => {
              const fallback = document.createElement("canvas");
              fallback.width = 128;
              fallback.height = 128;
              const fctx = fallback.getContext("2d");
              if (fctx) {
                fctx.fillStyle = "#16161c";
                fctx.beginPath();
                fctx.arc(64, 64, 60, 0, Math.PI * 2);
                fctx.fill();
                fctx.fillStyle = PAPER;
                fctx.font = "600 18px sans-serif";
                fctx.textAlign = "center";
                fctx.textBaseline = "middle";
                fctx.fillText(brand.name.slice(0, 2).toUpperCase(), 64, 64);
              }
              const points = fibonacci(trustBrands.length, NUCLEUS_R);
              resolve({
                name: brand.name,
                canvas: fallback,
                base: points[index] ?? [0, 0, 0],
                spin: index * 0.7,
              });
            };
            image.src = brand.src;
          }),
      ),
    );

    const seedParticles = () => {
      const next: Particle[] = [];
      const cloud = fibonacci(72, 0.28);
      for (const [i, point] of cloud.entries()) {
        next.push({
          p: add(point, [
            (Math.random() - 0.5) * 0.08,
            (Math.random() - 0.5) * 0.08,
            (Math.random() - 0.5) * 0.08,
          ]),
          size: i % 5 === 0 ? 2.1 : 1.15,
          tone: i % 3 === 0 ? SIGNAL : i % 2 === 0 ? PAPER : STEEL,
          phase: Math.random() * Math.PI * 2,
        });
      }
      particles = next;
    };

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const worldOf = (p: V3, yaw: number, pitch: number, roll: number) =>
      rotX(rotY(rotZ(p, roll), yaw), pitch);

    const drawRing = (
      radius: number,
      tilt: number,
      roll: number,
      yaw: number,
      pitch: number,
      dist: number,
      alpha: number,
      widthScale: number,
      dashes: boolean,
    ) => {
      const segments = 160;
      ctx.beginPath();
      for (let i = 0; i <= segments; i += 1) {
        const theta = (i / segments) * Math.PI * 2;
        const point = worldOf(shellPoint(radius, theta, tilt, roll), yaw, pitch, 0);
        const drawn = project(point, width, height, dist);
        if (i === 0) ctx.moveTo(drawn.x, drawn.y);
        else ctx.lineTo(drawn.x, drawn.y);
      }
      ctx.strokeStyle = `rgba(102, 124, 255, ${alpha})`;
      ctx.lineWidth = widthScale;
      if (dashes) ctx.setLineDash([5, 9]);
      else ctx.setLineDash([]);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const writeOverlay = (state: OverlayState) => {
      const el = overlayRefs.current[state.id];
      if (!el) return;
      const scale = Math.max(0.72, Math.min(1.12, state.scale));
      el.style.transform = `translate(${state.x}px, ${state.y}px) translate(-50%, -50%) scale(${scale})`;
      el.style.zIndex = String(200 + Math.round((4.6 - state.depth) * 40));
      el.style.opacity = state.visible ? String(Math.max(0.2, Math.min(1, 1.15 - state.depth * 0.12))) : "0";
      el.style.pointerEvents = state.visible ? "auto" : "none";
      el.dataset.depth = state.depth.toFixed(2);
    };

    const draw = (time: number) => {
      if (disposed) return;
      ctx.clearRect(0, 0, width, height);
      intro += (1 - intro) * 0.03;

      const localScroll =
        scrollPropRef.current ??
        Math.min(1, Math.max(0, scrollRef.current));
      const px = pointer.current.active
        ? (pointer.current.x / width - 0.5) * 2
        : 0;
      const py = pointer.current.active
        ? (pointer.current.y / height - 0.5) * 2
        : 0;

      const orbit = reduceMotion || lockedRef.current ? 0 : time * 0.00016;
      const yaw = orbit * 1.4 + localScroll * 1.15 + px * 0.42;
      const pitch = -0.18 + localScroll * 0.55 + py * 0.28;
      const roll = Math.sin(time * 0.00012) * 0.08;
      const dist = 3.35 - localScroll * 0.28;
      const focus = focusRef.current;

      const haze = ctx.createRadialGradient(
        width * 0.5,
        height * 0.52,
        12,
        width * 0.5,
        height * 0.52,
        Math.min(width, height) * 0.48,
      );
      haze.addColorStop(0, "rgba(102, 124, 255, 0.18)");
      haze.addColorStop(0.42, "rgba(102, 124, 255, 0.05)");
      haze.addColorStop(1, "rgba(102, 124, 255, 0)");
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, width, height);

      drawRing(TAM_R, 0.32, 0.04, yaw, pitch, dist, 0.22, 1.15, false);
      drawRing(TAM_R * 0.992, 0.32, 0.04, yaw, pitch, dist, 0.08, 6, false);
      drawRing(OUTER_R, 0.7, -0.08, yaw, pitch, dist, 0.42, 1.35, true);
      drawRing(INNER_R, 0.52, 0.12, yaw, pitch, dist, 0.7, 1.5, true);

      const nucleusCore = project(worldOf([0, 0, 0], yaw, pitch, 0), width, height, dist);
      const core = ctx.createRadialGradient(
        nucleusCore.x,
        nucleusCore.y,
        4,
        nucleusCore.x,
        nucleusCore.y,
        86 * intro,
      );
      core.addColorStop(0, "rgba(244, 244, 242, 0.22)");
      core.addColorStop(0.35, "rgba(102, 124, 255, 0.2)");
      core.addColorStop(1, "rgba(102, 124, 255, 0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(nucleusCore.x, nucleusCore.y, 90 * intro, 0, Math.PI * 2);
      ctx.fill();

      type DrawItem =
        | { kind: "particle"; depth: number; x: number; y: number; size: number; tone: string }
        | { kind: "logo"; depth: number; x: number; y: number; size: number; sprite: LogoSprite; s: number };

      const items: DrawItem[] = [];

      for (const particle of particles) {
        const wobble = reduceMotion
          ? 0
          : Math.sin(time * 0.0014 + particle.phase) * 0.03;
        const point = worldOf(
          add(particle.p, [wobble, wobble * 0.6, -wobble]),
          yaw,
          pitch,
          roll,
        );
        const drawn = project(point, width, height, dist);
        items.push({
          kind: "particle",
          depth: drawn.depth,
          x: drawn.x,
          y: drawn.y,
          size: particle.size * drawn.s * 1.8,
          tone: particle.tone,
        });
      }

      for (const sprite of logos) {
        const spun = rotY(rotX(sprite.base, time * 0.00025 + sprite.spin), time * 0.00018);
        const point = worldOf(spun, yaw, pitch, roll);
        const drawn = project(point, width, height, dist);
        items.push({
          kind: "logo",
          depth: drawn.depth,
          x: drawn.x,
          y: drawn.y,
          size: 34 * drawn.s * 2.05,
          sprite,
          s: drawn.s,
        });
        writeOverlay({
          id: `logo-${sprite.name}`,
          kind: "logo",
          x: drawn.x,
          y: drawn.y,
          scale: drawn.s,
          depth: drawn.depth,
          visible: false,
        });
      }

      items.sort((a, b) => b.depth - a.depth);
      for (const item of items) {
        if (item.kind === "particle") {
          ctx.globalAlpha = Math.max(0.18, 0.85 - item.depth * 0.12) * intro;
          ctx.fillStyle = item.tone;
          ctx.beginPath();
          ctx.arc(item.x, item.y, Math.max(0.6, item.size), 0, Math.PI * 2);
          ctx.fill();
        } else {
          const size = Math.max(18, item.size);
          ctx.globalAlpha = Math.max(0.45, Math.min(1, 1.15 - item.depth * 0.08)) * intro;
          ctx.save();
          ctx.beginPath();
          ctx.arc(item.x, item.y, size / 2 + 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(102, 124, 255, 0.18)";
          ctx.fill();
          ctx.drawImage(item.sprite.canvas, item.x - size / 2, item.y - size / 2, size, size);
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;

      const metricWorld = valenceMetrics.map((metric) => {
        const radius = metric.shell === 1 ? INNER_R : OUTER_R;
        const tilt = metric.shell === 1 ? 0.52 : 0.7;
        const ringRoll = metric.shell === 1 ? 0.12 : -0.08;
          const motion = reduceMotion || lockedRef.current ? 0 : time * 0.00055 * metric.speed;
        const point = worldOf(
          shellPoint(radius, metric.theta + motion, tilt, ringRoll),
          yaw,
          pitch,
          0,
        );
        const drawn = project(point, width, height, dist);
        return { metric, drawn, point };
      });

      for (const { metric, drawn } of metricWorld) {
        const history = trails[metric.id] ?? [];
        if (!reduceMotion) {
          history.push({ x: drawn.x, y: drawn.y, a: 0.55 });
          if (history.length > 18) history.shift();
        }
        trails[metric.id] = history;
        ctx.lineCap = "round";
        for (let i = 1; i < history.length; i += 1) {
          const from = history[i - 1];
          const to = history[i];
          ctx.strokeStyle = `rgba(102, 124, 255, ${i / history.length * 0.35})`;
          ctx.lineWidth = metric.shell === 1 ? 2.1 : 1.6;
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        }

        const isFocus = focus === metric.id;
        ctx.beginPath();
        ctx.arc(drawn.x, drawn.y, isFocus ? 7 : 4.5, 0, Math.PI * 2);
        ctx.fillStyle = isFocus ? PAPER : SIGNAL;
        ctx.fill();
        ctx.strokeStyle = "rgba(10, 10, 11, 0.85)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        writeOverlay({
          id: metric.id,
          kind: "metric",
          x: drawn.x,
          y: drawn.y,
          scale: isFocus ? 1.08 : Math.max(0.84, Math.min(1.04, drawn.s * 0.92)),
          depth: drawn.depth,
          visible: true,
        });
      }

      const revenuePoint = project(
        worldOf([0, -0.62, 0], yaw, pitch, 0),
        width,
        height,
        dist,
      );
      writeOverlay({
        id: "revenue",
        kind: "revenue",
        x: revenuePoint.x,
        y: revenuePoint.y,
        scale: 1,
        depth: revenuePoint.depth,
        visible: true,
      });

      const tamPoint = project(
        worldOf(shellPoint(TAM_R, -Math.PI / 2, 0.32, 0.04), yaw, pitch, 0),
        width,
        height,
        dist,
      );
      writeOverlay({
        id: "tam",
        kind: "tam",
        x: tamPoint.x,
        y: tamPoint.y - 8,
        scale: 1,
        depth: tamPoint.depth,
        visible: true,
      });

      frame = requestAnimationFrame(draw);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = event.clientX - rect.left;
      pointer.current.y = event.clientY - rect.top;
      pointer.current.active = true;
    };
    const onLeave = () => {
      pointer.current.active = false;
    };
    const onScroll = () => {
      if (typeof scrollPropRef.current === "number") return;
      const rect = root.getBoundingClientRect();
      const span = Math.max(1, window.innerHeight + rect.height);
      scrollRef.current = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.65 - rect.top) / span),
      );
    };

    sizeCanvas();
    seedParticles();
    onScroll();
    void loadLogos.then((loaded) => {
      if (disposed) return;
      logos = loaded;
      setReady(true);
    });

    window.addEventListener("resize", sizeCanvas);
    window.addEventListener("scroll", onScroll, { passive: true });
    canvas.addEventListener("pointermove", onPointer);
    canvas.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(draw);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", sizeCanvas);
      window.removeEventListener("scroll", onScroll);
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const toggleLock = () => {
    lockedRef.current = !lockedRef.current;
    setLocked(lockedRef.current);
  };

  const setFocus = (id: ValenceMetricId | null) => {
    setActiveId(id);
    onFocus?.(id);
  };

  const activeMetric =
    valenceMetrics.find((metric) => metric.id === (focusId ?? activeId)) ?? null;
  const activeIsTam = (focusId ?? activeId) === "tam";
  const activeIsRevenue = (focusId ?? activeId) === "revenue";

  return (
    <div className="valence-stage" ref={rootRef} data-ready={ready}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="valence-overlays" aria-hidden="false">
        <button
          className="valence-node valence-revenue"
          type="button"
          ref={(node) => {
            overlayRefs.current.revenue = node;
          }}
          data-active={activeIsRevenue}
          onClick={() => setFocus("revenue")}
        >
          Revenue
        </button>
        <button
          className="valence-node valence-tam"
          type="button"
          ref={(node) => {
            overlayRefs.current.tam = node;
          }}
          data-active={activeIsTam}
          onClick={() => setFocus("tam")}
        >
          <strong>TAM</strong>
          <small>(your potential)</small>
        </button>
        {[...innerShell, ...outerShell].map((metric) => (
          <button
            className={`valence-node valence-shell-${metric.shell}`}
            type="button"
            key={metric.id}
            ref={(node) => {
              overlayRefs.current[metric.id] = node;
            }}
            data-active={(focusId ?? activeId) === metric.id}
            onPointerEnter={(event: ReactPointerEvent<HTMLButtonElement>) => {
              event.currentTarget.focus({ preventScroll: true });
              setFocus(metric.id);
            }}
            onFocus={() => setFocus(metric.id)}
            onClick={() => setFocus(metric.id)}
          >
            {metric.label}
          </button>
        ))}
      </div>
      <div className="valence-readout">
        <span>REVENUE_ATOM.VALENCE</span>
        <span>
          {activeMetric
            ? `${activeMetric.layer} / ${activeMetric.label}`
            : activeIsTam
              ? "MARKET / TAM"
              : locked
                ? "SYSTEM / LOCKED"
                : "ORBIT / LIVE"}
        </span>
      </div>
      <p className="valence-caption" aria-live="polite">
        {activeMetric
          ? activeMetric.question
          : activeIsTam
            ? "The outer bound of the market you could own if the system holds."
            : activeIsRevenue
              ? "Client proof sits at the centre. Every shell exists to protect and compound it."
              : "Scroll to rotate the system. Metrics orbit like electrons around revenue."}
      </p>
      <button
        className="portrait-control valence-lock"
        type="button"
        onClick={toggleLock}
        aria-pressed={locked}
        aria-describedby={reduceId}
      >
        <span className="crosshair" aria-hidden="true" />
        {locked ? "Resume orbit" : "Hold the atom"}
      </button>
      <span className="sr-only" id={reduceId}>
        Freeze or resume the orbital animation.
      </span>
    </div>
  );
}
