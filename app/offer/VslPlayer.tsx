"use client";

import { useEffect, useState } from "react";

const explicitSrc = process.env.NEXT_PUBLIC_VSL_URL ?? "";
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const fileSrc = `${basePath}/offer/vsl.mp4`;

function toEmbed(src: string) {
  const youtube = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}?rel=0`;
  const wistia = src.match(/wistia\.(?:com|net)\/(?:medias|embed\/iframe)\/(\w+)/);
  if (wistia) return `https://fast.wistia.net/embed/iframe/${wistia[1]}`;
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : src ? (
          <video src={src} controls playsInline preload="metadata" />
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
