import Link from "next/link";
import type { CSSProperties } from "react";
import ParticlePortrait from "./ParticlePortrait";
import {
  Arrow,
  AuditButton,
  Eyebrow,
  SectionHeading,
  SiteFrame,
} from "./components";

const method = [
  ["01", "Map", "See how attention becomes revenue — and where the founder is still the glue."],
  ["02", "Prioritise", "Find the 5% of workflows that will move pipeline or free capacity."],
  ["03", "Build", "Ship the first system inside the tools your team already uses."],
  ["04", "Activate", "Train the owner and team until the system runs without theatre."],
  ["05", "Measure", "Track touchpoints, replies, calls, hours saved and revenue moved."],
];

const levels = [
  ["01", "DIAGNOSE", "Comprehensive Growth Constraint Audit", "Find the single constraint with the highest commercial cost."],
  ["02", "INSTALL", "Constraint System Install", "Build the minimum system required to remove it."],
  ["03", "CAPTURE", "AI Memory Capture", "Make business context searchable and reusable."],
  ["04", "VISIBILITY", "Task Visibility", "Turn commitments, owners and next actions into a shared view."],
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
    copy: "Map your three highest-leverage AI systems and leave with a 7–14 day action plan.",
    fit: "For founders unclear where AI actually fits.",
    href: "/audit",
  },
  {
    code: "7–14 DAYS",
    title: "AI Workflow Sprint",
    copy: "One workflow mapped, documented and rebuilt with AI. Live, measured and adopted.",
    fit: "For teams that want the first win fast.",
  },
  {
    code: "30–90 DAYS",
    title: "AI Growth OS Build",
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

export default function Home() {
  return (
    <SiteFrame>
      <section className="home-hero grid-bg">
        <div className="hero-copy">
          <Eyebrow>GROWTH LABS_ / OPERATOR-LED AI GROWTH STUDIO</Eyebrow>
          <h1>
            Turn AI into a <em>revenue system</em> — not another tool you never use.
          </h1>
          <p>
            We identify your biggest commercial constraint, install the system
            that fixes it, and apply AI where it actually creates leverage.
          </p>
          <div className="button-row">
            <AuditButton />
            <Link className="text-link" href="/solutions">
              See custom solutions <Arrow />
            </Link>
          </div>
          <div className="hero-proof" aria-label="Growth Labs experience">
            <span><strong>10+</strong> years sales & growth</span>
            <span><strong>20+</strong> clients & ventures</span>
            <span><strong>05</strong> sectors in production</span>
          </div>
        </div>
        <ParticlePortrait />
        <div className="hero-side-label">MOVE TO FOCUS / CLICK TO RESOLVE</div>
      </section>

      <section className="section section-problem">
        <SectionHeading
          number="01"
          eyebrow="THE BOTTLENECK"
          title="You've got the latest models. AI still isn’t moving your numbers."
          copy="Most businesses are not behind because they lack AI tools. They are behind because they are lacking effectiveness in their ability to streamline demand."
        />
        <div className="diagnostic-grid">
          {[
            "Leads go cold because follow-up depends on memory.",
            "The website looks fine but does not create pipeline.",
            "The CRM is full but nobody knows who to contact next.",
            "Content depends on motivation, not a system.",
            "The team uses AI casually — not as an operating layer.",
            "Every week is busy. Revenue does not move.",
          ].map((item, index) => (
            <div className="diagnostic-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className="section-punchline">
          AI only amplifies what you already have. A weak offer, unclear metrics
          &amp; no digital acquisition strategy will only allow for marginal gains.
        </p>
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
          eyebrow="THE 10 LEVELS OF GROWTH IMPLEMENTATION"
          title="Build the right system in the right order."
          copy="Growth is installed in sequence. Each level creates the conditions for the next — from commercial clarity to a compounding operating system."
        />
        <div className="levels-key" aria-hidden="true">
          <span>FOUNDATION</span>
          <span>EXECUTION</span>
          <span>SCALE</span>
        </div>
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
        <div className="levels-rule">
          <span>THE RULE</span>
          <p>Do not automate what has not been clarified, proven and owned.</p>
        </div>
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

      <section className="section split-section grid-bg">
        <div>
          <Eyebrow>WHO IT IS FOR</Eyebrow>
          <h2>Demand already exists. The system should convert it.</h2>
        </div>
        <div>
          <p>
            Founders, operators, consultants, agencies, service businesses and
            community-led brands that want clean systems around real demand.
          </p>
          <p className="muted">
            If you are pre-revenue with no offer, the audit will tell you that
            honestly too.
          </p>
        </div>
      </section>

      <section className="section mission-section">
        <SectionHeading
          number="05"
          eyebrow="WHY GROWTH LABS"
          title="Businesses that serve your life — not the other way around."
        />
        <div className="mission-copy">
          <p>
            AI is a once-in-a-generation chance for small teams and solo
            operators to build with leverage. Most people are stuck between
            hype and overwhelm.
          </p>
          <p>
            Growth Labs closes that gap with practical systems: fewer hours on
            admin, faster follow-up, cleaner decisions and more revenue per
            person.
          </p>
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
        <span className="support-line">NO TOOL LISTS · NO HYPE · OPERATOR-LEVEL SCAN</span>
      </section>
    </SiteFrame>
  );
}
