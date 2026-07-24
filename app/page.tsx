import Link from "next/link";
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

const proof = [
  {
    tag: "COMMUNITY → RECRUITMENT",
    title: "Jobited",
    copy: "Commercial OS for a frontier engineering community: hiring intelligence, prospecting, CRM and a recruitment funnel.",
    kpi: "$30K/MO TARGET",
  },
  {
    tag: "COMMUNITY → MEMBERSHIP",
    title: "The Collective",
    copy: "Website, Discord growth systems, content engine and a membership pathway built around one operating stack.",
    kpi: "$150K ARR PATHWAY",
  },
  {
    tag: "COMMS → LEVERAGE",
    title: "Corvan AI",
    copy: "Unified comms triage and outreach leverage installed in-house, then packaged for client implementation.",
    kpi: "2–3× OPERATOR EFFICIENCY",
  },
  {
    tag: "OUTREACH → PIPELINE",
    title: "Bybit",
    copy: "KOL and affiliate BD engine with weekly outreach cadence, CRM pipeline, institutional outreach and reporting.",
    kpi: "50 OUTREACHES / WEEK",
  },
  {
    tag: "OPERATIONS → GROWTH",
    title: "The RAW",
    copy: "COO-level operating layer for an iGaming group: campaign portal, pipeline, KPI dashboards and recruitment.",
    kpi: "MULTI-BRAND OS",
  },
  {
    tag: "REACTIVATION → SALES",
    title: "Empire Crypto + YC360",
    copy: "Reactivation sequences, sales pipelines, CEO dashboards and automation for growth-stage teams.",
    kpi: "LIVE / IN PRODUCTION",
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
            We find where founder-led businesses leak time and revenue, build
            the workflows that fix it, and train the team to run them.
            Diagnosis first. Systems second. Results measured.
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
          title="You bought the tools. AI still isn’t moving your numbers."
          copy="Most businesses are not behind because they lack AI tools. They are behind because the business still runs on memory, manual follow-up, scattered comms and a founder holding everything together."
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
          You do not need more AI. You need a clear system for where AI sits
          inside your revenue engine.
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

      <section className="section offers-section">
        <SectionHeading
          number="03"
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

      <section className="section proof-section" id="work">
        <SectionHeading
          number="04"
          eyebrow="SELECTED WORK"
          title="Systems in production, not theory."
          copy="A cross-section of operating systems, pipeline engines and commercial infrastructure built across live businesses."
        />
        <div className="proof-list">
          {proof.map((item, index) => (
            <article className="proof-row" key={item.title}>
              <span className="proof-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <span className="card-code">{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.copy}</p>
              <strong>{item.kpi}</strong>
            </article>
          ))}
        </div>
        <Link className="button button-outline" href="/solutions">
          See how the systems were built <Arrow />
        </Link>
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

