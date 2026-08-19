import Link from "next/link";
import type { CSSProperties } from "react";
import ParticlePortrait from "../ParticlePortrait";
import {
  Arrow,
  AuditButton,
  Eyebrow,
  SectionHeading,
  SiteFrame,
} from "../components";
import { trustBrands } from "../brand";

const method = [
  ["01", "Discover", "Using our data backed business intelligence process we get an overview of the business."],
  ["02", "Prioritise", "Install the simple implementations that will move pipeline or free capacity."],
  ["03", "Build", "Ship the next system focused on improving the metrics that matter."],
  ["04", "Activate", "Install each system one at a time to activate the power of leverage that AI can bring."],
  ["05", "Measure", "Track the key metrics with each implementation ensuring that the scope is working effectively."],
];

const growthMetrics = [
  {
    code: "01",
    label: "Impressions",
    question: "Are enough right-fit prospects seeing the offer?",
    level: "LEVEL 08 / DEMAND",
  },
  {
    code: "02",
    label: "Click Through %",
    question: "Does the message turn attention into intent?",
    level: "LEVELS 01–02 / POSITIONING",
  },
  {
    code: "03",
    label: "Offer Conversion %",
    question: "Does the path turn qualified intent into a client?",
    level: "LEVELS 02 + 08 / CONVERSION",
  },
  {
    code: "04",
    label: "Lifetime Client Value",
    question: "Does delivery retain, expand and compound the value?",
    level: "LEVELS 09–10 / SCALE",
  },
];

const levels = [
  ["01", "DIAGNOSE", "Growth Constraint Audit", "Find the biggest constraint using our KPI benchmarks."],
  ["02", "INSTALL", "KPI Improvement Install", "Clean up the lowest hanging fruit in order to remove the #1 constraint blocking growth."],
  ["03", "CAPTURE", "AI Memory Capture", "With the top problem being solved we now focus on making things more efficient."],
  ["04", "VISIBILITY", "Context & Workflow Visibility", "We now start to have AI understand context across the larger workflow, while defining the resources it has available."],
  ["05", "STANDARDISE", "Skills & SOPs", "Codify how high-value work should be done."],
  ["06", "ASSIST", "Assisted Execution", "Use AI inside human-led work where judgement still matters."],
  ["07", "AUTOMATE", "Workflow Automation", "Remove repetition only after the workflow is proven."],
  ["08", "REVENUE", "Revenue Engine", "Connect demand, conversion, follow-up and reporting."],
  ["09", "SCALE", "Delivery System & Operational Scale", "Increase capacity without multiplying founder dependence."],
  ["10", "COMPOUND", "Compounding Growth Operating System", "Create a business that learns, improves and grows by design."],
];

const offers = [
  {
    code: "FREE / 30 MIN",
    title: "AI Leverage Audit",
    copy: "Map your three highest-leverage AI systems and leave with a 7–30 day action plan to move up 1-3 levels.",
    fit: "For founders unclear where AI actually fits.",
    href: "/audit",
  },
  {
    code: "7–14 DAYS",
    title: "AI Implementation Sprint",
    copy: "The highest constraint workflow mapped, documented and rebuilt with AI. Live, measured and adopted.",
    fit: "For teams that want the first win fast.",
  },
  {
    code: "30–90 DAYS",
    title: "Full Growth Campaign",
    copy: "Business brain, CRM, SOPs, agents, dashboards and team training.",
    fit: "For businesses ready to run AI-native.",
  },
  {
    code: "SCOPED",
    title: "Custom Solutions",
    copy: "Websites, campaigns, AI products, talent and community systems with a vetted bench.",
    fit: "For ambitious teams with bigger builds.",
    href: "/solutions",
  },
];

export const metadata = {
  title: "Operator landing",
  description:
    "The original Growth Labs operator landing — particle portrait, 10 levels and the AI Growth OS method.",
};

export default function LandingPage() {
  return (
    <SiteFrame>
      <section className="home-hero grid-bg">
        <div className="hero-copy">
          <Eyebrow>GROWTH LABS_ / OPERATOR LANDING</Eyebrow>
          <h1>
            Cut out the noise. Turn AI into a <em>revenue system.</em>
          </h1>
          <p>
            We identify your biggest commercial constraint, install the system
            that fixes it, and apply AI where it actually creates leverage.
          </p>
          <div className="button-row">
            <AuditButton />
            <Link className="text-link" href="/">
              Enter the new home <Arrow />
            </Link>
          </div>
          <div className="hero-proof" aria-label="Growth Labs experience">
            <span><strong>10+</strong> years sales & growth</span>
            <span><strong>20+</strong> clients & ventures</span>
            <span><strong>1000+</strong> founder strategies</span>
          </div>
        </div>
        <ParticlePortrait />
        <div className="hero-side-label">MOVE TO FOCUS / CLICK TO RESOLVE</div>
      </section>

      <section className="trust-bar" aria-label="Brands Ben has worked with">
        <p>BRANDS I&apos;VE WORKED WITH ACROSS 7+ INDUSTRIES</p>
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
                    key={brand.name}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="metrics-section grid-bg" id="metrics">
        <div className="metrics-intro">
          <Eyebrow>THE METRICS THAT MATTER</Eyebrow>
          <h2>Word of mouth is not an acquisition system.</h2>
          <p>
            For most founder-led businesses, growth still depends on referrals,
            reputation and bursts of activity. There is no measurable path from
            market attention to long-term client value — so nobody can see which
            constraint is actually holding revenue back.
          </p>
          <div className="metrics-thesis">
            <span>THE OPERATING QUESTION</span>
            <strong>Which number is constraining growth right now?</strong>
          </div>
        </div>

        <div className="metrics-system">
          <div className="metrics-system-label">
            <span>MEASURE THE GROWTH CHAIN</span>
            <span>BASELINE → CONSTRAINT → SYSTEM</span>
          </div>
          <div className="metric-flow" aria-label="The four growth metrics">
            {growthMetrics.map((metric, index) => (
              <article className="metric-card" key={metric.label}>
                <div className="metric-card-top">
                  <span>{metric.code}</span>
                  <span>CURRENT KPI / —</span>
                </div>
                <h3>{metric.label}</h3>
                <p>{metric.question}</p>
                <strong>{metric.level}</strong>
                {index < growthMetrics.length - 1 ? (
                  <span className="metric-arrow" aria-hidden="true">→</span>
                ) : null}
              </article>
            ))}
          </div>
          <div className="metric-equation" aria-label="Predictable growth equation">
            <span>IMPRESSIONS</span>
            <i>×</i>
            <span>CLICK THROUGH</span>
            <i>×</i>
            <span>CONVERSION</span>
            <i>×</i>
            <span>CLIENT VALUE</span>
            <i>=</i>
            <strong>PREDICTABLE GROWTH</strong>
          </div>
        </div>
      </section>

      <section className="section method-section grid-bg">
        <SectionHeading
          number="02"
          eyebrow="THE AI GROWTH OS METHOD"
          title="One method. Five steps. Measured against revenue."
        />
        <div className="method-track">
          {method.map(([number, title, copy]) => (
            <article className="method-step" key={title}>
              <span className="method-number">{number}</span>
              <div className="method-node" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section levels-section grid-bg" id="levels">
        <SectionHeading
          number="03"
          eyebrow="THE 10 LEVELS OF AI GROWTH IMPLEMENTATION"
          title="Build the right system in the right order."
          copy="Growth is installed in sequence. Each level creates the conditions for the next — from commercial clarity to a compounding operating system."
        />
        <ol className="levels-ladder">
          {levels.map(([number, phase, title, copy], index) => (
            <li
              className="level-row"
              key={title}
              style={{ "--step": `${index * 1.25}%` } as CSSProperties}
            >
              <span className="level-number">{number}</span>
              <span className="level-phase">{phase}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section offers-section">
        <SectionHeading
          number="04"
          eyebrow="WAYS TO START"
          title="Start with a diagnosis. Scale with systems."
        />
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className="offer-card" key={offer.title}>
              <span className="card-code">{offer.code}</span>
              <h3>{offer.title}</h3>
              <p>{offer.copy}</p>
              <div className="card-bottom">
                <span>{offer.fit}</span>
                {offer.href ? (
                  <Link href={offer.href} aria-label={`Learn about ${offer.title}`}>
                    <Arrow />
                  </Link>
                ) : (
                  <span className="status-label">AVAILABLE</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta grid-bg">
        <Eyebrow>FREE DIAGNOSTIC / 30 MINUTES</Eyebrow>
        <h2>Where can AI actually increase revenue in your business?</h2>
        <p>
          Leave with your biggest bottleneck, the first workflow to build, the
          KPI it should move and a seven-day plan — whether or not we ever work
          together.
        </p>
        <AuditButton>Book your AI Leverage Audit</AuditButton>
      </section>
    </SiteFrame>
  );
}
