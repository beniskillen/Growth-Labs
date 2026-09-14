"use client";

import { useEffect, useState } from "react";

const DEFAULT_VSL =
  "https://www.loom.com/share/1eeacffedf21496e94326b6becd645fc";
const explicitSrc = process.env.NEXT_PUBLIC_VSL_URL || DEFAULT_VSL;
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const fileSrc = `${basePath}/offer/vsl.mp4`;

function toEmbed(src: string) {
  const youtube = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}?rel=0`;
  const wistia = src.match(/wistia\.(?:com|net)\/(?:medias|embed\/iframe)\/(\w+)/);
  if (wistia) return `https://fast.wistia.net/embed/iframe/${wistia[1]}`;
  const loom = src.match(/loom\.com\/(?:share|embed)\/([a-f0-9]+)/i);
  if (loom) return `https://www.loom.com/embed/${loom[1]}?autoplay=1`;
  return null;
}

export default function VslPlayer() {
  const [src, setSrc] = useState(explicitSrc);

  useEffect(() => {
    if (explicitSrc) return;
    let cancelled = false;
    fetch(fileSrc, { method: "HEAD" })
      .then((response) => {
        if (!cancelled && response.ok) setSrc(fileSrc);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const embed = src ? toEmbed(src) : null;

  return (
    <figure className="offer-vsl">
      <div className="offer-vsl-frame">
        {embed ? (
          <iframe
            src={embed}
            title="Category King system video"
            allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : src ? (
          <video src={src} controls autoPlay playsInline preload="auto" />
        ) : (
          <div className="offer-vsl-poster" role="img" aria-label="Video slot for the Category King VSL">
            <span className="offer-vsl-play" aria-hidden="true" />
          </div>
        )}
      </div>
      <figcaption>
        <span>VSL_01 / CATEGORY KING SYSTEM</span>
        <span>16:9 / STRATEGY SESSION</span>
      </figcaption>
    </figure>
  );
}
