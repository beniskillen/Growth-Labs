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

const trustBrands = [
  { name: "Bybit", src: "/trustbar/bybit.svg" },
  { name: "Your Corner 360", src: "/trustbar/your-corner-360.svg" },
  { name: "Fortem Media", src: "/trustbar/fortem-media.png" },
  {
    name: "The Collective Solution",
    src: "/trustbar/the-collective-solution.png",
  },
  { name: "3x3 Australia", src: "/trustbar/3x3-australia.svg" },
  { name: "MTP Health", src: "/trustbar/mtp-health.svg" },
  { name: "Juicy Festival", src: "/trustbar/juicy-festival.svg" },
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

export default function Home() {
  return (
    <SiteFrame>
      <section className="home-hero grid-bg">
        <div className="hero-copy">
          <Eyebrow>GROWTH LABS_ / REVENUE-LED AI GROWTH SYSTEMS</Eyebrow>
          <h1>
            Cut out the noise. Turn AI into a <em>revenue system.</em>
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
          <div className="metrics-level-map">
            <div>
              <span>LEVEL 01</span>
              <p>Benchmark the four KPIs and expose the commercial constraint.</p>
            </div>
            <div>
              <span>LEVEL 02</span>
              <p>Install the simplest system capable of moving the weakest number.</p>
            </div>
            <div>
              <span>LEVELS 03–07</span>
              <p>Add memory, visibility, assisted execution and automation after the path is proven.</p>
            </div>
            <div>
              <span>LEVELS 08–10</span>
              <p>Connect acquisition, delivery and reporting into a compounding growth engine.</p>
            </div>
          </div>
          <p className="metrics-bridge">
            AI is leverage inside this chain. The KPI tells us where it belongs;
            the implementation level tells us how much system the business is
            ready to support.
          </p>
        </div>
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
          eyebrow="THE 10 LEVELS OF AI GROWTH IMPLEMENTATION"
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
          <h2>Business owners who want growth. <em>Not just AI hype.</em></h2>
        </div>
        <div>
          <p>
            Founders, operators, consultants, agencies, service businesses and
            community-led brands that want to harness AI by leveraging the
            fundamentals of marketing to allow it to actually drive revenue.
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

      <section className="section home-about-section grid-bg" id="about-ben">
        <SectionHeading
          number="06"
          eyebrow="ABOUT BEN KILLEN"
          title={<>Marketing strategy first. <em>AI leverage second.</em></>}
          copy="Growth Labs was built from more than a decade spent close to revenue — across marketing, sales, business development, offers, campaigns and operating systems."
        />
        <div className="home-about-grid">
          <figure className="home-about-portrait">
            <img src="/ben-professional.jpg" alt="Ben Killen presenting at Bybit" />
            <figcaption>
              <span>BEN KILLEN / FOUNDER</span>
              <span>10+ YEARS / MARKETING &amp; SALES</span>
            </figcaption>
          </figure>
          <div className="home-about-story">
            <p className="home-about-lead">
              After 10+ years in marketing and sales, Ben kept seeing the same
              constraint: most businesses were reaching for more tactics and
              tools before getting the foundations right.
            </p>
            <p>
              The offer was unclear. Acquisition relied on word of mouth.
              Follow-up was inconsistent. The numbers that should guide growth
              were either invisible or ignored. AI could accelerate the work,
              but it could not choose the right work.
            </p>
            <p>
              Growth Labs is Ben&apos;s answer to that gap — combining the
              strategic insight of marketing with the leverage of AI to build a
              clear, measurable system for growing a business.
            </p>
            <div className="home-about-equation" aria-label="Growth Labs operating equation">
              <span>MARKETING STRATEGY</span>
              <i>×</i>
              <span>SALES FUNDAMENTALS</span>
              <i>×</i>
              <span>AI LEVERAGE</span>
              <i>=</i>
              <strong>COMPOUNDING GROWTH</strong>
            </div>
            <Link className="text-link" href="/about">
              Read Ben&apos;s story <Arrow />
            </Link>
          </div>
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
