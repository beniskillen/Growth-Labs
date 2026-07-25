import {
  AuditButton,
  PageHero,
  SectionHeading,
  SiteFrame,
} from "../components";

const lanes = [
  ["Revenue & pipeline systems", "CRM architecture, outreach engines, follow-up, sales dashboards and BD rhythm.", "GROWTH LABS"],
  ["AI operating systems", "Business brain, SOP libraries, agents, meeting-to-task and comms triage.", "GROWTH LABS"],
  ["Websites & conversion", "Conversion-first websites, landing pages, CRO, hosting and care.", "GROWTH LABS"],
  ["Campaigns & content", "Launches, influencer/affiliate activations, clip machines, paid ads and tracking.", "GROWTH LABS"],
  ["Technical talent & hiring", "Engineering hiring, proof-of-work search and recruitment systems.", "JOBITED"],
  ["Community & events", "Community platforms, event-to-CRM capture, workshops and activation.", "GROWTH LABS"],
];

export const metadata = {
  title: "Custom AI Growth Solutions",
  description:
    "Full revenue engines, AI operating systems, platforms and campaigns led by one accountable operator and a vetted partner bench.",
};

export default function SolutionsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="GROWTH LABS_ / CUSTOM SOLUTIONS"
        title={<>Custom solutions for <em>ambitious teams.</em></>}
        copy="Some problems do not fit a productised sprint. When you need a full revenue engine, platform, community system or AI product installed — Growth Labs scopes it, leads it and delivers it with a vetted partner bench."
        action={<AuditButton>Start a scoping conversation</AuditButton>}
        aside={
          <div className="scope-map" aria-label="Custom delivery model">
            <span>01 / AUDIT</span>
            <i />
            <span>02 / SCOPE</span>
            <i />
            <span>03 / STAFF</span>
            <i />
            <span>04 / SHIP</span>
            <i />
            <span>05 / MEASURE</span>
          </div>
        }
      />

      <section className="section">
        <SectionHeading
          number="01"
          eyebrow="DELIVERY MODEL"
          title="One operator accountable. Specialists where they count."
        />
        <div className="process-grid">
          {[
            ["01", "Audit first", "Every custom engagement starts with evidence, not guesses."],
            ["02", "One owner", "Ben leads strategy, scope and commercial outcomes. No account-manager relay."],
            ["03", "Specialists deliver", "Each build is staffed from a bench already used on live client work."],
            ["04", "Measured weekly", "Lead measures, deliverables and revenue movement live on one dashboard."],
          ].map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          number="02"
          eyebrow="SOLUTION LANES"
          title="What ambitious teams can buy."
        />
        <div className="lane-list">
          {lanes.map(([title, copy, delivered], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <strong>{delivered}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta grid-bg">
        <p className="eyebrow"><span className="status-dot" />CUSTOM / SCOPED</p>
        <h2>Have a bigger build in mind?</h2>
        <p>Get one accountable operator, a proven bench and a weekly dashboard.</p>
        <AuditButton>Start a scoping conversation</AuditButton>
      </section>
    </SiteFrame>
  );
}
