import {
  Arrow,
  AuditButton,
  PageHero,
  SectionHeading,
  SiteFrame,
} from "../components";

const cases = [
  ["Jobited", "Commercial OS for a frontier engineering community: recruitment funnel, hiring intelligence, prospecting engine and CRM.", "1,000 targeted employer emails/mo → ~20 calls → ~2 paid outcomes.", "https://jobited.com"],
  ["The Collective", "Community business build: website, Discord growth systems, membership pathway, content engine and CRM.", "Pathway toward 50 annual members / $150k ARR."],
  ["Corvan AI", "AI chief-of-staff partnership: unified comms triage, People 360°, knowledge graph and meeting-to-task automation.", "Product target: 2–3× operator efficiency.", "https://corvanai.com"],
  ["Bybit", "KOL BD and affiliate growth engine: outreach cadence, CRM, institutional outreach and reporting.", "50 KOL outreaches/week; 3+ warm replies; one deal progressed weekly."],
  ["The RAW", "COO-level operating system: campaign portal, iGaming pipeline, KPI dashboards, recruitment and execution.", "Full commercial operating layer for a multi-brand growth group."],
  ["Crypto Vega", "90-day master-affiliate activation: clip machine, social cadence, affiliate infrastructure and offer stack.", "$350K activation signed; campaign targets set for reach and acquisition."],
  ["Empire Crypto", "Sales and reactivation system: trial-to-paid funnel, sales scripts, sequences and CRM pipeline.", "Three or more sales calls booked as the weekly operating KPI."],
  ["YC360 / Your Corner", "CTO and project-management style delivery: campaign execution, lead flow, CEO dashboard and automation.", "Mortgage Destroyer lead flow and executive reporting health."],
  ["Futurealty", "Website rebuild, warm contact graph, Notion CRM and approved outreach cadence.", "Site by day 30; warm outreach week four; 2–5 agency clients/month target by day 90."],
];

const lanes = [
  ["Revenue & pipeline systems", "CRM architecture, outreach engines, follow-up, sales dashboards and BD rhythm.", "GROWTH LABS CORE"],
  ["AI operating systems", "Business brain, SOP libraries, agents, meeting-to-task and comms triage.", "GROWTH LABS + CORVAN"],
  ["Websites & conversion", "Conversion-first websites, landing pages, CRO, hosting and care.", "PARTNER BENCH"],
  ["Campaigns & content", "Launches, influencer/affiliate activations, clip machines, paid ads and tracking.", "PARTNER BENCH"],
  ["Technical talent & hiring", "Engineering hiring, proof-of-work search and recruitment systems.", "JOBITED"],
  ["Community & events", "Community platforms, event-to-CRM capture, workshops and activation.", "ECOSYSTEM BENCH"],
];

const partners = [
  ["Faustas Media", "Conversion websites & CRO", "A site needs to create pipeline, not just look finished."],
  ["Spectre Studios", "Campaigns, web & creative", "A brand or campaign needs studio-grade execution."],
  ["Fillmore Media", "Paid ads, tracking & reporting", "Acquisition is ready to scale with proper measurement."],
  ["Corvan AI", "AI chief of staff", "A team is drowning in email, chats and meetings."],
  ["Jobited", "Frontier technical talent", "Technical hiring needs proof of work, not CV keywords."],
  ["Soup Agency", "AI video & outbound", "Video-led outbound or content needs production volume."],
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

      <section className="section case-section grid-bg">
        <SectionHeading
          number="02"
          eyebrow="CASE FILES"
          title="Selected systems and commercial builds."
          copy="Proof points are shown as delivered outcomes or stated operating targets — never blurred together."
        />
        <div className="case-grid">
          {cases.map(([title, built, proof, href], index) => (
            <article className="case-card" key={title}>
              <div className="case-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="status-label">CASE / ACTIVE FILE</span>
              </div>
              <h3>{title}</h3>
              <p>{built}</p>
              <div className="case-proof">
                <span>PROOF / KPI</span>
                <strong>{proof}</strong>
              </div>
              {href ? (
                <a href={href} target="_blank" rel="noreferrer">
                  Visit project <Arrow />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          number="03"
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

      <section className="section partner-section">
        <SectionHeading
          number="04"
          eyebrow="VETTED BENCH"
          title="The right specialist, only when the build needs them."
          copy="Only partners with live or recent delivery are listed. Prospects and unproven lines stay off the page."
        />
        <div className="partner-grid">
          {partners.map(([name, specialty, fit]) => (
            <article key={name}>
              <span className="card-code">{specialty}</span>
              <h3>{name}</h3>
              <p>{fit}</p>
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
