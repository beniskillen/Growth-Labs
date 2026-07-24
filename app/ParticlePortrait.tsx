"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ox: number;
  oy: number;
  size: number;
  tone: string;
  phase: number;
};

const tones = ["#f4f4f2", "#8a8f98", "#667cff"];

export default function ParticlePortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0, y: 0, active: false });
  const lockedRef = useRef(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let intro = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const image = new Image();
    image.src = "/ben-killen.jpg";

    const build = () => {
      if (!image.complete || image.naturalWidth === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sampleW = width < 620 ? 112 : 150;
      const sampleH = Math.round(sampleW * 1.34);
      const offscreen = document.createElement("canvas");
      offscreen.width = sampleW;
      offscreen.height = sampleH;
      const octx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      const sourceAspect = image.naturalWidth / image.naturalHeight;
      const targetAspect = sampleW / sampleH;
      let sx = 0;
      let sy = 0;
      let sw = image.naturalWidth;
      let sh = image.naturalHeight;
      if (sourceAspect > targetAspect) {
        sw = image.naturalHeight * targetAspect;
        sx = (image.naturalWidth - sw) / 2;
      } else {
        sh = image.naturalWidth / targetAspect;
        sy = Math.max(0, (image.naturalHeight - sh) * 0.22);
      }
      octx.drawImage(image, sx, sy, sw, sh, 0, 0, sampleW, sampleH);
      const pixels = octx.getImageData(0, 0, sampleW, sampleH).data;

      const portraitH = Math.min(height * 0.88, 740);
      const portraitW = portraitH * (sampleW / sampleH);
      const left = (width - portraitW) / 2;
      const top = Math.max(26, (height - portraitH) / 2 + 22);
      const step = width < 620 ? 3 : 2;
      const next: Particle[] = [];

      for (let y = 0; y < sampleH; y += step) {
        for (let x = 0; x < sampleW; x += step) {
          const index = (y * sampleW + x) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const luminance = r * 0.2126 + g * 0.7152 + b * 0.0722;
          const edgeFade = Math.min(x / 13, (sampleW - x) / 13, 1);
          if (luminance > 239 || edgeFade < Math.random() * 0.55) continue;
          if (luminance > 205 && Math.random() > 0.34) continue;

          const ox = left + (x / sampleW) * portraitW;
          const oy = top + (y / sampleH) * portraitH;
          const spread = width < 620 ? 82 : 160;
          const toneIndex = luminance < 72 ? 1 : luminance > 178 ? 0 : 2;
          next.push({
            x: ox + (Math.random() - 0.5) * spread,
            y: oy + (Math.random() - 0.5) * spread,
            vx: 0,
            vy: 0,
            ox,
            oy,
            size: luminance < 80 ? 1.65 : luminance > 190 ? 0.85 : 1.15,
            tone: tones[toneIndex],
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
      particles = next;
      intro = reduceMotion ? 1 : 0;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      intro += (1 - intro) * 0.025;
      const px = pointer.current.x;
      const py = pointer.current.y;
      const radius = width < 620 ? 105 : 150;

      for (const particle of particles) {
        const dx = particle.ox - px;
        const dy = particle.oy - py;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const localFocus = pointer.current.active
          ? Math.max(0, 1 - distance / radius)
          : 0;
        const resolved = lockedRef.current ? 1 : Math.max(intro * 0.78, localFocus);
        const drift = reduceMotion
          ? 0
          : (1 - resolved) * Math.sin(time * 0.0011 + particle.phase) * 5.5;
        const targetX = particle.ox + drift;
        const targetY =
          particle.oy +
          (1 - resolved) * Math.cos(time * 0.001 + particle.phase) * 4;
        const spring = 0.034 + resolved * 0.07;

        particle.vx += (targetX - particle.x) * spring;
        particle.vy += (targetY - particle.y) * spring;
        particle.vx *= 0.84;
        particle.vy *= 0.84;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const pulse = lockedRef.current ? 1 : 0.78 + resolved * 0.3;
        ctx.globalAlpha = Math.min(1, 0.52 + resolved * 0.48);
        ctx.fillStyle = particle.tone;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = event.clientX - rect.left;
      pointer.current.y = event.clientY - rect.top;
      pointer.current.active = true;
    };
    const onLeave = () => {
      pointer.current.active = false;
    };
    const onResize = () => build();

    image.onload = build;
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleLock = () => {
    lockedRef.current = !lockedRef.current;
    setLocked(lockedRef.current);
  };

  return (
    <div className="portrait-stage">
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="portrait-readout" aria-live="polite">
        <span>BEN_KILLEN.POINT_CLOUD</span>
        <span>{locked ? "SYSTEM / RESOLVED" : "SIGNAL / SEARCHING"}</span>
      </div>
      <button
        className="portrait-control"
        type="button"
        onClick={toggleLock}
        aria-pressed={locked}
      >
        <span className="crosshair" aria-hidden="true" />
        {locked ? "Release signal" : "Lock the system"}
      </button>
    </div>
  );
}

