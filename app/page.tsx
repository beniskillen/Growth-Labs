import Link from "next/link";
import ValenceExperience from "./ValenceExperience";
import {
  Arrow,
  AuditButton,
  Eyebrow,
  SectionHeading,
  SiteFrame,
} from "./components";
import { partners, services, trustBrands } from "./brand";

export default function Home() {
  return (
    <SiteFrame>
      <ValenceExperience
        proof={
          <div className="atom-copy-proof">
            <div className="hero-proof" aria-label="Growth Labs experience">
              <span><strong>10+</strong> years sales &amp; growth</span>
              <span><strong>First principles</strong> before tactics</span>
              <span><strong>CAC · LTV · CTR</strong> as the scoreboard</span>
            </div>
          </div>
        }
        trust={
          <section className="trust-bar" aria-label="Brands Ben has worked with">
            <p>COMPANIES BEN HAS WORKED AT AND WITH</p>
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
            <Link className="trust-partner-link" href="/partners">
              Join as partner <Arrow />
            </Link>
          </section>
        }
      >
        <div className="hero-copy">
          <Eyebrow>GROWTH LABS_ / ENGINEERS ARE THE CURRENCY OF THE DAY</Eyebrow>
          <h1>
            We engineer <em>revenue systems</em> from first principles.
          </h1>
          <p>
            Marketing is not the act of buying attention. It is the process of
            turning the right attention into profitable customers through a
            measurable system — impressions, unique visitors and CTR in the
            inner shell, conversion, CAC and LTV in the outer, TAM as your
            potential, your brand at the centre.
          </p>
          <div className="button-row">
            <AuditButton />
            <Link className="text-link" href="#system">
              Read the system <Arrow />
            </Link>
          </div>
        </div>
      </ValenceExperience>

      <section className="section doors-section" id="services">
        <SectionHeading
          number="01"
          eyebrow="START HERE"
          title={<>Four doors. <em>One operating thesis.</em></>}
          copy="Founders and operators work with us directly. Ambitions that need a specialist bench get routed through partners. Same first principles. Different journey."
        />
        <div className="door-grid">
          {services.map((service) => (
            <article className="door-card" id={service.id} key={service.id}>
              <span className="card-code">{service.code}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <div className="card-bottom">
                <span>{service.fit}</span>
                <Link href={service.href} aria-label={`Open ${service.title}`}>
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-problem">
        <SectionHeading
          number="02"
          eyebrow="THE CONSTRAINT"
          title="You do not have a tactics problem. You have a first-principles problem."
          copy="Most businesses are not under-marketed. They are under-measured. They buy ads, content, funnels and AI tools before the bucket can hold water."
        />
        <div className="diagnostic-grid">
          {[
            "The buyer is fuzzy, so the message cannot convert.",
            "The offer is unclear, so traffic becomes expensive.",
            "CTR is guessed, so creative gets blamed for volume.",
            "CAC is unknown, so spend scales a leak.",
            "Follow-up depends on memory, so intent dies cold.",
            "LTV is ignored, so acquisition is treated as the whole business.",
          ].map((item, index) => (
            <div className="diagnostic-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className="section-punchline">
          Do not scale a channel until the system can hold water. Name the
          constraint. Then engineer the fix.
        </p>
      </section>

      <section className="section method-section grid-bg">
        <SectionHeading
          number="03"
          eyebrow="THE MECHANISM"
          title="Diagnose. Engineer. Activate. Measure."
          copy="Warm Graph Activation is the first install: turn the leads, clients and conversations you already own into booked conversations, then fix only the number that is breaking."
        />
        <div className="method-track">
          {[
            ["01", "Diagnose", "Map buyer, offer, constraint and unit economics against the valence scoreboard."],
            ["02", "Engineer", "Build the path: message, CRM, follow-up, conversion and proof — one conveyor, not custom chaos."],
            ["03", "Activate", "Run the warm graph first. Owned demand is the cheapest, highest-intent traffic you will ever have."],
            ["04", "Measure", "Impressions × UV's × CTR × CVR × LTV, with CAC as the governor. Fix the broken shell only."],
            ["05", "Scale", "Only once CAC sits below LTV with margin do we pour fuel on the channels that already work."],
          ].map(([number, title, copy]) => (
            <article className="method-step" key={title}>
              <span className="method-number">{number}</span>
              <div className="method-node" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section partner-feature-section grid-bg" id="partners">
        <SectionHeading
          number="04"
          eyebrow="PARTNERS"
          title={<>The bench that makes ambitious work <em>ship.</em></>}
          copy="Growth Labs diagnoses and owns the commercial outcome. Partners deliver specialised programmes, talent, product and production — starting with AI Powered."
        />
        <div className="partner-feature">
          <article className="partner-feature-card">
            <img src="/partners/ai-powered.svg" alt="AI Powered" />
            <div>
              <span className="card-code">FLAGSHIP PARTNER</span>
              <h3>AI Powered</h3>
              <p>
                Guiding more humans to become AI powered, not AI replaced.
                When a team needs capability — not another tool list — this is
                the programme door inside the Growth Labs network.
              </p>
              <div className="button-row">
                <a
                  className="button button-outline"
                  href="https://www.aipowered.xyz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit AI Powered <Arrow />
                </a>
                <Link className="text-link" href="/partners">
                  See the full bench <Arrow />
                </Link>
              </div>
            </div>
          </article>
          <div className="partner-strip">
            {partners.slice(1).map((partner) => (
              <article key={partner.name}>
                <span>{partner.lane}</span>
                <h3>{partner.name}</h3>
                <p>{partner.proof}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section grid-bg">
        <div>
          <Eyebrow>WHO IT IS FOR</Eyebrow>
          <h2>Operators who want growth. <em>Not theatre.</em></h2>
        </div>
        <div>
          <p>
            Founders, operators, consultants, agencies, service businesses and
            community-led brands that already have demand — and need a system
            that converts it into revenue you can measure.
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
          eyebrow="OUR PHILOSOPHY"
          title="Confidence does not come from tactics. It comes from a system that holds."
        />
        <div className="mission-copy">
          <p>
            AI is leverage inside the chain. It cannot choose the right work.
            First principles choose the work: who the buyer is, what offer
            converts, which number is constraining growth, and whether the
            economics can support scale.
          </p>
          <p>
            Growth Labs exists so everyday operators can install that layer —
            fewer hours on admin, faster follow-up, cleaner decisions, more
            revenue per person.
          </p>
        </div>
      </section>

      <section className="section home-about-section grid-bg" id="about-ben">
        <SectionHeading
          number="06"
          eyebrow="ABOUT BEN KILLEN"
          title={<>Operator first. <em>Consultant second.</em></>}
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
              constraint: most businesses were reaching for more tactics before
              the first principles were true.
            </p>
            <p>
              The offer was unclear. Acquisition relied on word of mouth.
              Follow-up was inconsistent. The numbers that should guide growth
              were either invisible or ignored. AI could accelerate the work,
              but it could not choose the right work.
            </p>
            <p>
              Growth Labs is the installation layer for that gap — combining
              the strategic insight of marketing with engineered systems so
              growth becomes measurable, high-ROI and worth scaling.
            </p>
            <div className="home-about-equation" aria-label="Growth Labs operating equation">
              <span>FIRST PRINCIPLES</span>
              <i>×</i>
              <span>REVENUE SYSTEM</span>
              <i>×</i>
              <span>AI LEVERAGE</span>
              <i>=</i>
              <strong>HIGH-ROI GROWTH</strong>
            </div>
            <Link className="text-link" href="/about">
              Read Ben&apos;s story <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="final-cta grid-bg">
        <Eyebrow>FREE DIAGNOSTIC / 30 MINUTES</Eyebrow>
        <h2>Want the constraint named — and the metric that proves it?</h2>
        <p>
          Leave with the bottleneck, the scoreboard reading, and the first
          system worth building — whether or not we ever work together.
        </p>
        <AuditButton>Book your AI Leverage Audit</AuditButton>
        <span className="support-line">NO HYPE · NO TOOL LISTS · FIRST PRINCIPLES, THEN SYSTEMS</span>
      </section>
    </SiteFrame>
  );
}
