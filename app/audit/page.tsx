import {
  AuditButton,
  Eyebrow,
  PageHero,
  SectionHeading,
  SiteFrame,
} from "../components";

const framework = [
  ["01", "Demand", "Is the business creating enough qualified attention and conversations?", "Demand constraint diagnosis"],
  ["02", "Offer", "Is the commercial proposition clear, valuable and easy to choose?", "Offer and positioning priorities"],
  ["03", "Conversion", "Where does attention leak before it becomes a sales decision?", "Funnel and follow-up map"],
  ["04", "Delivery", "What limits capacity, quality or speed once work is sold?", "Delivery system priorities"],
  ["05", "Leverage", "Where can systems, SOPs or AI improve the proven workflow?", "Implementation roadmap"],
];

const session = [
  ["05 MIN", "Commercial context", "Offer, buyer, revenue model, team and the growth target that is currently out of reach."],
  ["10 MIN", "Constraint scan", "Demand, conversion, follow-up, delivery and founder-dependent decisions."],
  ["10 MIN", "System diagnosis", "The highest-cost bottleneck, why it persists and what will not fix it."],
  ["05 MIN", "Implementation roadmap", "First system, success measure and the recommended next step."],
];

export const metadata = {
  title: "Growth Constraint Audit",
  description:
    "Identify the commercial bottleneck holding back growth and leave with the first system worth installing.",
};

export default function AuditPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="GROWTH LABS_ / GROWTH CONSTRAINT AUDIT"
        title={<>Find the constraint. <em>Fix the right thing first.</em></>}
        copy="In 30 minutes, we scan your offer, demand, conversion, pipeline, delivery and founder load — then identify the system most likely to unlock growth. AI only enters the plan where it creates real leverage."
        action={<AuditButton>Book the Growth Constraint Audit</AuditButton>}
        aside={
          <div className="terminal-panel">
            <div className="terminal-top"><span />AUDIT_OUTPUT.LOG</div>
            <p><span>01</span> Biggest bottleneck</p>
            <p><span>02</span> Commercial cost</p>
            <p><span>03</span> First system</p>
            <p><span>04</span> KPI to move</p>
            <p><span>05</span> Implementation path</p>
            <div className="terminal-status">STATUS / READY TO MAP</div>
          </div>
        }
      />

      <section className="section">
        <SectionHeading
          number="01"
          eyebrow="FIT CHECK"
          title="Built for businesses with traction — and friction."
        />
        <div className="three-col">
          {[
            ["GROWTH SHOULD BE FASTER", "Founders, operators, consultants and agencies with real revenue but inconsistent momentum."],
            ["THE BOTTLENECK IS UNCLEAR", "Demand, conversion, follow-up, delivery or founder load could be the constraint."],
            ["MORE TOOLS HAVE NOT HELPED", "The business needs commercial clarity and an operating system before more automation."],
          ].map(([title, copy]) => (
            <article className="plain-card" key={title}>
              <span className="card-code">{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section audit-framework grid-bg">
        <SectionHeading
          number="02"
          eyebrow="DIAGNOSTIC FRAMEWORK"
          title="Demand → Offer → Conversion → Delivery → Leverage"
        />
        <div className="framework-list">
          {framework.map(([number, title, question, output]) => (
            <article className="framework-row" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{question}</p>
              <strong>{output}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          number="03"
          eyebrow="THE SESSION"
          title="Thirty minutes. Four deliberate passes."
        />
        <div className="session-grid">
          {session.map(([time, title, copy]) => (
            <article key={title}>
              <span className="card-code">{time}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section output-section">
        <SectionHeading
          number="04"
          eyebrow="WHAT YOU LEAVE WITH"
          title="A commercial diagnosis you can act on."
        />
        <div className="output-grid">
          {[
            "Your primary growth constraint",
            "The likely commercial cost of leaving it in place",
            "The first system worth installing",
            "The KPI that proves the fix is working",
            "Where AI can help — and where it cannot",
            "Optional implementation pathway",
          ].map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section transparency-section grid-bg">
        <div>
          <Eyebrow>WHY IT IS FREE</Eyebrow>
          <h2>Clarity first. Commercial fit second.</h2>
        </div>
        <div>
          <p>
            The fastest route to growth is rarely another tool. The audit
            exists to create commercial clarity before either side commits to
            implementation work.
          </p>
          <p>
            This connects to professional work. If the audit
            reveals a clear opportunity and you want help executing, we will
            recommend a paid sprint, build or trusted partner. No obligation.
          </p>
        </div>
      </section>

      <section className="section faq-section">
        <SectionHeading
          number="05"
          eyebrow="STRAIGHT ANSWERS"
          title="Before you book."
        />
        <div className="faq-list">
          {[
            ["Is this a sales call?", "It is a diagnosis first. If you do not need paid help, Ben will say so."],
            ["Will you recommend expensive tools?", "No. Tool selection comes after commercial and workflow clarity."],
            ["Do I need to already use AI?", "No. The process starts with the business constraint, not the technology."],
            ["Will I get value if I do not buy?", "Yes. The roadmap is yours to implement."],
          ].map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta grid-bg">
        <Eyebrow>READY / 30 MINUTES</Eyebrow>
        <h2>Find the constraint. Fix the right thing first.</h2>
        <p>Walk away with the bottleneck, commercial priority, success measure and implementation path.</p>
        <AuditButton>Book the Growth Constraint Audit</AuditButton>
      </section>
    </SiteFrame>
  );
}
