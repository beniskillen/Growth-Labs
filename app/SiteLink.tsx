"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { withBasePath } from "./studio/paths";

export function SiteLink({
  href,
  children,
  onClick,
  target,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const resolved = withBasePath(href);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (target && target !== "_self") return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    window.location.assign(resolved);
  }

  return (
    <a
      {...props}
      href={resolved}
      target={target}
      onClick={handleClick}
      data-studio-ignore="true"
    >
      {children}
    </a>
  );
}
