import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trustBrands } from "./brand";
import { withBasePath } from "./studio/paths";

export function SiteLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={withBasePath(href)} {...props}>
      {children}
    </a>
  );
}

export const AUDIT_URL =
  "https://calendly.com/ben_killen/growth_strategy";

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
    <SiteLink className="wordmark" href="/" aria-label="Growth Labs home">
      <Mark />
      <span>GROWTH LABS_</span>
    </SiteLink>
  );
}

export function SiteHeader({
  conversion = false,
  homeOnly = false,
}: {
  conversion?: boolean;
  homeOnly?: boolean;
}) {
  return (
    <header className={`site-header${conversion ? " site-header-conversion" : ""}`}>
      <Wordmark />
      {homeOnly ? (
        <nav className="site-nav" aria-label="Main navigation">
          <SiteLink href="/">Home</SiteLink>
        </nav>
      ) : conversion ? null : (
        <nav className="site-nav" aria-label="Main navigation">
          <SiteLink href="/work/mtp-health">Work</SiteLink>
          <SiteLink href="/partners">Partners</SiteLink>
          <SiteLink href="/solutions">Solutions</SiteLink>
          <SiteLink href="/about">About</SiteLink>
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
      <div className="section-index">_{number}</div>
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

export function Footer({
  conversion = false,
  homeOnly = false,
}: {
  conversion?: boolean;
  homeOnly?: boolean;
}) {
  return (
    <footer className={`footer${conversion ? " footer-conversion" : ""}`}>
      <div>
        <Wordmark />
        <p>Engineering revenue systems from first principles.</p>
      </div>
      <nav aria-label="Footer navigation">
        {homeOnly ? (
          <SiteLink href="/">Home</SiteLink>
        ) : (
          <>
            <SiteLink href="/work/mtp-health">Case Studies</SiteLink>
            {conversion ? null : (
              <>
                <SiteLink href="/partners">Partners</SiteLink>
                <SiteLink href="/solutions">Solutions</SiteLink>
                <SiteLink href="/about">About</SiteLink>
                <SiteLink href="/landing">Operator landing</SiteLink>
                <SiteLink href="/audit">AI Leverage Audit</SiteLink>
              </>
            )}
          </>
        )}
      </nav>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Growth Labs</span>
        <span>Growth focused marketing</span>
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
  homeOnly = false,
  className,
}: {
  children: ReactNode;
  conversion?: boolean;
  homeOnly?: boolean;
  className?: string;
}) {
  return (
    <>
      <SiteHeader conversion={conversion} homeOnly={homeOnly} />
      <main className={className}>{children}</main>
      <Footer conversion={conversion} homeOnly={homeOnly} />
    </>
  );
}
