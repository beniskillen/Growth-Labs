import {
  Arrow,
  AuditButton,
  Eyebrow,
  PageHero,
  SectionHeading,
  SiteFrame,
} from "../components";
import { partners } from "../brand";

export const metadata = {
  title: "Partners",
  description:
    "The Growth Labs partner bench — AI Powered, specialist delivery and the operators who ship ambitious work.",
};

export default function PartnersPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="GROWTH LABS_ / PARTNER BENCH"
        title={<>Specialists where they count. <em>One operator accountable.</em></>}
        copy="Growth Labs diagnoses the constraint and owns the commercial outcome. Partners deliver programmes, talent, product and production so ambitious work can ship without becoming an agency relay."
        action={<AuditButton>Start a partner conversation</AuditButton>}
        aside={
          <div className="scope-map" aria-label="Partner model">
            <span>01 / DIAGNOSE</span>
            <i />
            <span>02 / ROUTE</span>
            <i />
            <span>03 / BUILD</span>
            <i />
            <span>04 / MEASURE</span>
          </div>
        }
      />

      <section className="section">
        <SectionHeading
          number="01"
          eyebrow="FLAGSHIP"
          title="AI Powered is the capability door."
          copy="When the constraint is the humans — not the funnel — we send teams through AI Powered. Same network. Different journey: learn, build and lead with AI instead of collecting another tool stack."
        />
        <article className="partner-hero-card">
          <img src="/partners/ai-powered.svg" alt="AI Powered" />
          <div>
            <span className="card-code">WWW.AIPOWERED.XYZ</span>
            <h3>Guiding more humans to become AI powered, not AI replaced.</h3>
            <p>
              Flagship programmes for founders and operators, plus internal
              accelerators for organisations. Growth Labs stays on the revenue
              system. AI Powered builds the people who will run it.
            </p>
            <a
              className="button"
              href="https://www.aipowered.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              Visit AI Powered <Arrow />
            </a>
          </div>
        </article>
      </section>

      <section className="section partner-section">
        <SectionHeading
          number="02"
          eyebrow="THE BENCH"
          title="Partners we actually ship with."
        />
        <div className="partner-grid partner-grid-four">
          {partners.map((partner) => (
            <article key={partner.name}>
              <span className="card-code">{partner.code}</span>
              <h3>{partner.name}</h3>
              <p>{partner.copy}</p>
              <div className="card-bottom">
                <span>{partner.proof}</span>
                <a
                  href={partner.href}
                  aria-label={`Open ${partner.name}`}
                  {...(partner.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section grid-bg">
        <div>
          <Eyebrow>JOIN THE BENCH</Eyebrow>
          <h2>Operators, studios and programmes that want <em>measured work.</em></h2>
        </div>
        <div>
          <p>
            We only list partners with live or recent delivery. If you run a
            specialised lane — engineering, B2B demand, content, conversion
            sites — and you want work routed from a first-principles diagnosis,
            start a conversation.
          </p>
          <p className="muted">
            Prospects stay off the public page until there is proof.
          </p>
        </div>
      </section>

      <section className="final-cta grid-bg">
        <p className="eyebrow">
          <span className="status-dot" />
          PARTNER / SCOPED
        </p>
        <h2>Need a specialist inside a revenue system?</h2>
        <p>
          Book the audit. If the work belongs on the bench, you get a clean
          route — not an account-manager chain.
        </p>
        <AuditButton>Book your AI Leverage Audit</AuditButton>
      </section>
    </SiteFrame>
  );
}
