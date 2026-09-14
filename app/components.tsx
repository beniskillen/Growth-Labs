import Link from "next/link";
import type { ReactNode } from "react";
import { trustBrands } from "./brand";

export const AUDIT_URL =
  "https://calendar.notion.so/meet/beniskillen/30min";

export function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Growth Labs home">
      <Mark />
      <span>GROWTH LABS_</span>
    </Link>
  );
}

export function SiteHeader({ conversion = false }: { conversion?: boolean }) {
  return (
    <header className={`site-header${conversion ? " site-header-conversion" : ""}`}>
      <Wordmark />
      {conversion ? null : (
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/work/mtp-health">Work</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/about">About</Link>
        </nav>
      )}
      <a className="button button-small" href={AUDIT_URL} target="_blank" rel="noreferrer">
        <span>Get a growth strategy</span>
      </a>
    </header>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="status-dot" />
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  copy,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  copy?: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-index">§{number}</div>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </header>
  );
}

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function AuditButton({
  children = "Book your 30-minute audit",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`button ${className}`.trim()}
      href={AUDIT_URL}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  action,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  action: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="page-hero grid-bg">
      <div className="page-hero-main">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="page-hero-copy">{copy}</p>
        <div className="button-row">{action}</div>
      </div>
      {aside ? <aside className="page-hero-aside">{aside}</aside> : null}
    </section>
  );
}

export function Footer({ conversion = false }: { conversion?: boolean }) {
  return (
    <footer className={`footer${conversion ? " footer-conversion" : ""}`}>
      <div>
        <Wordmark />
        <p>Engineering revenue systems from first principles.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/work/mtp-health">Case Studies</Link>
        {conversion ? null : (
          <>
            <Link href="/partners">Partners</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/about">About</Link>
            <Link href="/landing">Operator landing</Link>
            <Link href="/audit">AI Leverage Audit</Link>
          </>
        )}
      </nav>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Growth Labs</span>
        <span>Systems, not theatre.</span>
      </div>
    </footer>
  );
}

export function TrustBar({
  caption,
  children,
}: {
  caption: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="trust-bar" aria-label="Brands Ben has worked with">
      <p>{caption}</p>
      <div className="trust-marquee">
        <div className="trust-track">
          {[0, 1].map((group) => (
            <div
              className="trust-group"
              aria-hidden={group === 1}
              key={group}
            >
              {trustBrands.map((brand) => (
                <img
                  src={brand.src}
                  alt={group === 0 ? brand.name : ""}
                  key={`${group}-${brand.name}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {children}
    </section>
  );
}

export function SiteFrame({
  children,
  conversion = false,
}: {
  children: ReactNode;
  conversion?: boolean;
}) {
  return (
    <>
      <SiteHeader conversion={conversion} />
      <main>{children}</main>
      <Footer conversion={conversion} />
    </>
  );
}
