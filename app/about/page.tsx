import { AuditButton, Eyebrow, SectionHeading, SiteFrame } from "../components";

export const metadata = {
  title: "About Ben Killen",
  description:
    "Ten years across sales, business development and operations — now focused on diagnosing growth constraints and installing the systems that remove them.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <section className="about-hero grid-bg">
        <div className="about-copy">
          <Eyebrow>GROWTH LABS_ / THE OPERATOR</Eyebrow>
          <h1>Operator first. <em>Consultant second.</em></h1>
          <p>
            Ten years across sales, marketing, business development, CRM,
            Web3, iGaming, creator campaigns and community.
          </p>
          <AuditButton />
        </div>
        <figure className="about-portrait">
          <img src="/ben-killen.jpg" alt="Ben Killen, founder of Growth Labs" />
          <figcaption>
            <span>BEN KILLEN</span>
            <span>BALI / REMOTE</span>
          </figcaption>
        </figure>
      </section>

      <section className="section about-story">
        <SectionHeading
          number="01"
          eyebrow="THE THROUGH-LINE"
          title="The right message. The right person. A system that follows up."
        />
        <div className="story-copy">
          <p>
            From Bybit KOL and affiliate engines to COO-level operating
            systems for growth groups, the pattern never changes: businesses
            grow when the right message reaches the right person at the right
            time, and a system follows up until revenue happens.
          </p>
          <p>
            AI can make that system cheaper and faster — once the commercial
            constraint is clear and the underlying workflow works.
          </p>
          <strong>Constraint first. System second. Leverage third.</strong>
        </div>
      </section>

      <section className="section operator-log grid-bg">
        <SectionHeading
          number="02"
          eyebrow="OPERATOR LOG"
          title="Experience across the whole revenue surface."
        />
        <div className="operator-grid">
          {[
            ["10+ YEARS", "Sales, marketing, BD and growth"],
            ["PIPELINE", "CRM, outreach, follow-up and reporting"],
            ["OPERATIONS", "COO systems, SOPs and team rhythm"],
            ["DISTRIBUTION", "Web3, iGaming, creators and community"],
            ["AI LAYER", "Business memory, agents and workflow automation"],
            ["DELIVERY", "Vetted specialists with one accountable operator"],
          ].map(([label, copy]) => (
            <article key={label}>
              <span>{label}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section belief-section">
        <SectionHeading
          number="03"
          eyebrow="THE MISSION"
          title="Build a business that gives life back."
        />
        <div className="belief-statement">
          <p>
            Everyday operators should have a clear growth system that removes
            reactive work, supports better decisions and creates more value per
            person — without turning the business into a software experiment.
          </p>
          <p>
            Practical leverage beats hype. Adoption beats demos. Measured
            outcomes beat tool lists.
          </p>
        </div>
      </section>

      <section className="final-cta grid-bg">
        <Eyebrow>FIRST STEP / DIAGNOSTIC</Eyebrow>
        <h2>Find the constraint before you add more tools.</h2>
        <p>Thirty minutes. Direct diagnosis. A commercial priority you can act on.</p>
        <AuditButton>Book the Growth Constraint Audit</AuditButton>
      </section>
    </SiteFrame>
  );
}
