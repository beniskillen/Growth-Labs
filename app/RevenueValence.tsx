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

type OverlayKind = "metric" | "tam" | "brand" | "logo";

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
  expanded: V3;
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
const INNER_R = 1.16;
const OUTER_R = 1.7;
const TAM_R = 2.2;
const NUCLEUS_R = 0.28;
const LOGO_R = 0.72;

function add(a: V3, b: V3): V3 {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function lerp3(a: V3, b: V3, t: number): V3 {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
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
  const pixel = (Math.min(w, h) * 0.33) / Math.max(0.7, z);
  return {
    x: w * 0.5 + p[0] * pixel,
    y: h * 0.48 + p[1] * pixel,
    s: pixel,
    depth: z,
    depthScale: Math.max(0.72, Math.min(1.18, 3.15 / z)),
  };
}

function logoRing(count: number, radius: number): V3[] {
  return Array.from({ length: count }, (_, index) => {
    const theta = (index / count) * Math.PI * 2 - Math.PI / 2;
    return [
      Math.cos(theta) * radius,
      Math.sin(theta) * radius * 0.72,
      Math.sin(theta * 1.35) * radius * 0.16,
    ];
  });
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

function shellPoint(radius: number, theta: number, tilt: number, roll: number): V3 {
  const onRing: V3 = [Math.cos(theta) * radius, Math.sin(theta) * radius, 0];
  return rotZ(rotX(onRing, tilt), roll);
}

export default function RevenueValence({
  focusId = null,
  onFocus,
}: {
  focusId?: ValenceMetricId | null;
  onFocus?: (id: ValenceMetricId | null) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<Record<string, HTMLElement | null>>({});
  const pointer = useRef({
    x: 0,
    y: 0,
    active: false,
    dragging: false,
    downX: 0,
    downY: 0,
    moved: false,
  });
  const dragRef = useRef({ yaw: 0, pitch: 0, lastX: 0, lastY: 0 });
  const focusRef = useRef<ValenceMetricId | null>(focusId);
  const lockedRef = useRef(false);
  const expandedRef = useRef(false);
  const expandTRef = useRef(0);
  const [locked, setLocked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState<ValenceMetricId | null>(focusId);
  const [ready, setReady] = useState(false);
  const reduceId = useId();

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

    const seedLogos = () => {
      const points = logoRing(trustBrands.length, LOGO_R);
      logos = trustBrands.map((brand, index) => ({
        name: brand.name,
        expanded: points[index] ?? [0, 0, 0],
        spin: index * 0.7,
      }));
    };

    const seedParticles = () => {
      const next: Particle[] = [];
      const clouds = [...fibonacci(36, NUCLEUS_R), ...fibonacci(14, 0.11)];
      for (const [i, point] of clouds.entries()) {
        next.push({
          p: add(point, [
            (Math.random() - 0.5) * 0.03,
            (Math.random() - 0.5) * 0.03,
            (Math.random() - 0.5) * 0.03,
          ]),
          size: i % 5 === 0 ? 1.55 : 0.9,
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

    const sampleRing = (
      radius: number,
      tilt: number,
      roll: number,
      yaw: number,
      pitch: number,
      dist: number,
      segments: number,
    ) => {
      const points: { x: number; y: number }[] = [];
      for (let i = 0; i <= segments; i += 1) {
        const theta = (i / segments) * Math.PI * 2;
        const point = worldOf(shellPoint(radius, theta, tilt, roll), yaw, pitch, 0);
        const drawn = project(point, width, height, dist);
        points.push({ x: drawn.x, y: drawn.y });
      }
      return points;
    };

    const strokePath = (
      points: { x: number; y: number }[],
      alpha: number,
      widthScale: number,
      dashes: boolean,
    ) => {
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });
      ctx.strokeStyle = `rgba(102, 124, 255, ${alpha})`;
      ctx.lineWidth = widthScale;
      ctx.setLineDash(dashes ? [5, 9] : []);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const fillPlane = (points: { x: number; y: number }[], alpha: number) => {
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });
      ctx.closePath();
      ctx.fillStyle = `rgba(102, 124, 255, ${alpha})`;
      ctx.fill();
    };

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
      strokePath(
        sampleRing(radius, tilt, roll, yaw, pitch, dist, 160),
        alpha,
        widthScale,
        dashes,
      );
    };

    const writeOverlay = (state: OverlayState) => {
      const el = overlayRefs.current[state.id];
      if (!el) return;
      const scale =
        state.kind === "logo" || state.kind === "brand"
          ? state.scale
          : Math.max(0.72, Math.min(1.12, state.scale));
      el.style.transform = `translate(${state.x}px, ${state.y}px) translate(-50%, -50%) scale(${scale})`;
      el.style.zIndex =
        state.kind === "brand"
          ? "280"
          : String(200 + Math.round((4.6 - state.depth) * 40));
      if (state.kind === "logo") {
        el.style.opacity = state.visible
          ? String(Math.max(0, Math.min(1, state.scale * 1.05)))
          : "0";
        el.style.pointerEvents = state.visible ? "auto" : "none";
      } else {
        el.style.opacity = state.visible
          ? String(Math.max(0.2, Math.min(1, 1.15 - state.depth * 0.12)))
          : "0";
        el.style.pointerEvents = state.visible ? "auto" : "none";
      }
      el.dataset.depth = state.depth.toFixed(2);
    };

    const toggleExpand = () => {
      expandedRef.current = !expandedRef.current;
      setExpanded(expandedRef.current);
    };

    const draw = (time: number) => {
      if (disposed) return;
      ctx.clearRect(0, 0, width, height);
      intro += (1 - intro) * 0.03;

      const targetExpand = expandedRef.current ? 1 : 0;
      expandTRef.current +=
        (targetExpand - expandTRef.current) * (reduceMotion ? 1 : 0.09);
      const expand = easeOutCubic(expandTRef.current);

      const px = pointer.current.active
        ? (pointer.current.x / width - 0.5) * 2
        : 0;
      const py = pointer.current.active
        ? (pointer.current.y / height - 0.5) * 2
        : 0;

      const orbit = reduceMotion || lockedRef.current ? 0 : time * 0.00016;
      const yaw = orbit * 1.4 + px * 0.42 + dragRef.current.yaw;
      const pitch = -0.16 + py * 0.28 + dragRef.current.pitch;
      const roll = Math.sin(time * 0.00012) * 0.08;
      const dist = 3.55;
      const focus = focusRef.current;

      const haze = ctx.createRadialGradient(
        width * 0.5,
        height * 0.48,
        12,
        width * 0.5,
        height * 0.48,
        Math.min(width, height) * 0.38,
      );
      haze.addColorStop(0, "rgba(102, 124, 255, 0.18)");
      haze.addColorStop(0.42, "rgba(102, 124, 255, 0.05)");
      haze.addColorStop(1, "rgba(102, 124, 255, 0)");
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, width, height);

      const tamRing = sampleRing(TAM_R, 0.32, 0.04, yaw, pitch, dist, 160);
      const outerRing = sampleRing(OUTER_R, 0.7, -0.08, yaw, pitch, dist, 160);
      const innerRing = sampleRing(INNER_R, 0.52, 0.12, yaw, pitch, dist, 160);
      const nucleusRing = sampleRing(NUCLEUS_R * 1.15, 0.4, 0.06, yaw, pitch, dist, 80);
      fillPlane(tamRing, 0.035);
      fillPlane(outerRing, 0.05);
      fillPlane(innerRing, 0.07);
      strokePath(tamRing, 0.22, 1.15, false);
      drawRing(TAM_R * 0.992, 0.32, 0.04, yaw, pitch, dist, 0.08, 6, false);
      strokePath(outerRing, 0.42, 1.35, true);
      strokePath(innerRing, 0.7, 1.5, true);
      strokePath(nucleusRing, 0.55, 1.05, false);

      const nucleusCore = project(
        worldOf([0, 0, 0], yaw, pitch, 0),
        width,
        height,
        dist,
      );
      const core = ctx.createRadialGradient(
        nucleusCore.x,
        nucleusCore.y,
        3,
        nucleusCore.x,
        nucleusCore.y,
        22 * intro,
      );
      core.addColorStop(0, "rgba(244, 244, 242, 0.16)");
      core.addColorStop(0.4, "rgba(102, 124, 255, 0.16)");
      core.addColorStop(1, "rgba(102, 124, 255, 0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(nucleusCore.x, nucleusCore.y, 22 * intro, 0, Math.PI * 2);
      ctx.fill();

      type DrawItem =
        | { kind: "particle"; depth: number; x: number; y: number; size: number; tone: string }
        | { kind: "logo"; depth: number; x: number; y: number; size: number; sprite: LogoSprite; s: number };

      const items: DrawItem[] = [];

      for (const particle of particles) {
        const wobble = reduceMotion
          ? 0
          : Math.sin(time * 0.0014 + particle.phase) * 0.02;
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
          size: particle.size,
          tone: particle.tone,
        });
      }

      for (const sprite of logos) {
        const pos = lerp3([0, 0, 0], sprite.expanded, expand);
        const spun =
          expand > 0.12
            ? rotY(
                rotX(pos, time * 0.00018 + sprite.spin * 0.15),
                time * 0.00012,
              )
            : pos;
        const point = worldOf(spun, yaw, pitch, roll * 0.4);
        const drawn = project(point, width, height, dist);
        items.push({
          kind: "logo",
          depth: drawn.depth,
          x: drawn.x,
          y: drawn.y,
          size: Math.max(28, Math.min(40, drawn.s * 0.48)),
          sprite,
          s: drawn.s,
        });
        writeOverlay({
          id: `logo-${sprite.name}`,
          kind: "logo",
          x: drawn.x,
          y: drawn.y,
          scale: Math.max(0.08, expand * Math.min(1.08, drawn.depthScale)),
          depth: drawn.depth,
          visible: expand > 0.08,
        });
      }

      items.sort((a, b) => b.depth - a.depth);
      for (const item of items) {
        if (item.kind === "particle") {
          ctx.globalAlpha = Math.max(0.18, 0.85 - item.depth * 0.12) * intro;
          ctx.fillStyle = item.tone;
          ctx.beginPath();
          ctx.arc(item.x, item.y, Math.max(0.7, item.size), 0, Math.PI * 2);
          ctx.fill();
        } else if (expand > 0.08) {
          const size = item.size * expand;
          ctx.globalAlpha =
            Math.max(0.2, Math.min(1, 1.1 - item.depth * 0.08)) * intro * expand;
          ctx.beginPath();
          ctx.arc(item.x, item.y, size / 2 + 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(102, 124, 255, 0.12)";
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      writeOverlay({
        id: "brand",
        kind: "brand",
        x: nucleusCore.x,
        y: nucleusCore.y,
        scale: 1,
        depth: Math.min(nucleusCore.depth, 2.4),
        visible: true,
      });

      const metricWorld = valenceMetrics.map((metric) => {
        const radius = metric.shell === 1 ? INNER_R : OUTER_R;
        const tilt = metric.shell === 1 ? 0.52 : 0.7;
        const ringRoll = metric.shell === 1 ? 0.12 : -0.08;
        const motion =
          reduceMotion || lockedRef.current ? 0 : time * 0.00055 * metric.speed;
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
          ctx.strokeStyle = `rgba(102, 124, 255, ${(i / history.length) * 0.35})`;
          ctx.lineWidth = metric.shell === 1 ? 2.1 : 1.6;
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        }

        const isFocus = focus === metric.id;
        const glow = ctx.createRadialGradient(
          drawn.x,
          drawn.y,
          0,
          drawn.x,
          drawn.y,
          isFocus ? 22 : 14,
        );
        glow.addColorStop(0, `rgba(102, 124, 255, ${isFocus ? 0.55 : 0.28})`);
        glow.addColorStop(1, "rgba(102, 124, 255, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(drawn.x, drawn.y, isFocus ? 22 : 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(drawn.x, drawn.y, isFocus ? 7 : 4.5, 0, Math.PI * 2);
        ctx.fillStyle = isFocus ? PAPER : SIGNAL;
        ctx.fill();
        ctx.strokeStyle = "rgba(10, 10, 11, 0.85)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const radialX = drawn.x - nucleusCore.x;
        const radialY = drawn.y - nucleusCore.y;
        const radial = Math.hypot(radialX, radialY) || 1;
        const labelPush = metric.shell === 1 ? 34 : 38;
        writeOverlay({
          id: metric.id,
          kind: "metric",
          x: drawn.x + (radialX / radial) * labelPush,
          y: drawn.y + (radialY / radial) * labelPush,
          scale: isFocus ? 1.08 : drawn.depthScale,
          depth: drawn.depth,
          visible: true,
        });
      }

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
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (pointer.current.dragging) {
        const travel = Math.hypot(
          x - pointer.current.downX,
          y - pointer.current.downY,
        );
        if (travel > 7) pointer.current.moved = true;
        if (pointer.current.moved) {
          dragRef.current.yaw += (x - dragRef.current.lastX) * 0.006;
          dragRef.current.pitch += (y - dragRef.current.lastY) * 0.004;
          dragRef.current.pitch = Math.max(
            -0.85,
            Math.min(0.85, dragRef.current.pitch),
          );
        }
      }
      dragRef.current.lastX = x;
      dragRef.current.lastY = y;
      pointer.current.x = x;
      pointer.current.y = y;
      pointer.current.active = true;
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      pointer.current.dragging = true;
      pointer.current.moved = false;
      pointer.current.downX = x;
      pointer.current.downY = y;
      dragRef.current.lastX = x;
      dragRef.current.lastY = y;
      canvas.setPointerCapture(event.pointerId);
    };
    const onPointerUp = (event: PointerEvent) => {
      if (
        pointer.current.dragging &&
        !pointer.current.moved &&
        event.button === 0
      ) {
        toggleExpand();
      }
      pointer.current.dragging = false;
      pointer.current.moved = false;
      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }
    };
    const onLeave = () => {
      pointer.current.active = false;
      pointer.current.dragging = false;
      pointer.current.moved = false;
    };

    sizeCanvas();
    seedParticles();
    seedLogos();
    setReady(true);

    window.addEventListener("resize", sizeCanvas);
    const resizeObserver = new ResizeObserver(sizeCanvas);
    resizeObserver.observe(root);
    canvas.addEventListener("pointermove", onPointer);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(draw);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", sizeCanvas);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const toggleLock = () => {
    lockedRef.current = !lockedRef.current;
    setLocked(lockedRef.current);
  };

  const toggleExpand = () => {
    expandedRef.current = !expandedRef.current;
    setExpanded(expandedRef.current);
  };

  const setFocus = (id: ValenceMetricId | null) => {
    setActiveId(id);
    onFocus?.(id);
  };

  const activeMetric =
    valenceMetrics.find((metric) => metric.id === (focusId ?? activeId)) ?? null;
  const activeIsTam = (focusId ?? activeId) === "tam";

  return (
    <div
      className="valence-stage"
      ref={rootRef}
      data-ready={ready}
      data-expanded={expanded}
    >
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="valence-overlays" aria-hidden="false">
        <button
          className="valence-brand"
          type="button"
          ref={(node) => {
            overlayRefs.current.brand = node;
          }}
          aria-pressed={expanded}
          aria-label={
            expanded ? "Hide brand logos" : "Reveal brand logos from the nucleus"
          }
          onClick={(event) => {
            event.stopPropagation();
            toggleExpand();
          }}
        >
          <span>your</span>
          <strong>brand</strong>
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
        {trustBrands.map((brand) => (
          <div
            className="valence-logo"
            key={brand.name}
            ref={(node) => {
              overlayRefs.current[`logo-${brand.name}`] = node;
            }}
            title={brand.name}
          >
            <img src={brand.nucleus} alt={brand.name} />
          </div>
        ))}
      </div>
      <div className="valence-readout">
        <span>REVENUE_ATOM.VALENCE</span>
        <span>
          {activeMetric
            ? `${activeMetric.layer} / ${activeMetric.label}`
            : activeIsTam
              ? "MARKET / TAM"
              : expanded
                ? "BRANDS / EXPANDED"
                : "CLICK / REVEAL BRANDS"}
        </span>
      </div>
      <p className="valence-caption" aria-live="polite">
        {activeMetric
          ? activeMetric.question
          : activeIsTam
            ? "The outer bound of the market you could own if the system holds."
            : expanded
              ? "Client marks expand from the nucleus. Click the atom again to collapse them."
              : "Your brand sits in the nucleus. Click the atom and the logos come out."}
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
