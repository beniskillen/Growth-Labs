import {
  AuditButton,
  Eyebrow,
  PageHero,
  SectionHeading,
  SiteFrame,
} from "../components";

const framework = [
  ["01", "Memory", "Is the business queryable across docs, meetings, CRM, Slack, email and SOPs?", "Business brain roadmap"],
  ["02", "Automation", "What repeats every week that AI could handle or help systemise?", "Workflow automation shortlist"],
  ["03", "Arbitrage", "Which capability gap could become a paid offer, lead magnet or internal advantage?", "Revenue opportunity map"],
  ["04", "Scale", "Where is the business too dependent on the founder or a key person?", "SOP, delegation and agent priorities"],
  ["05", "Distribution", "How are leads, content, follow-up and conversion handled?", "Content, capture and CRM improvements"],
];

const session = [
  ["05 MIN", "Business context", "Offer, buyer, revenue model, team, tools and the biggest bottleneck."],
  ["10 MIN", "Workflow scan", "Repeated tasks, admin drag, follow-up gaps, CRM issues and founder-dependent decisions."],
  ["10 MIN", "Leverage diagnosis", "Quick wins, valuable automations, business-brain gaps and where AI should not replace judgement."],
  ["05 MIN", "Implementation roadmap", "First system, first workflow, first SOP and the recommended next step."],
];

export const metadata = {
  title: "Free AI Leverage Audit",
  description:
    "Find the three AI systems your business should build first in a practical 30-minute diagnostic.",
};

export default function AuditPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="GROWTH LABS_ / FREE DIAGNOSTIC"
        title={<>Find the three AI systems your business should <em>build first.</em></>}
        copy="In 30 minutes, we go deep into your workflows, tools, team and growth bottlenecks — then map the implementation steps that can actually save time, improve sales or increase capacity."
        action={<AuditButton>Book your 30-minute AI Leverage Audit</AuditButton>}
        aside={
          <div className="terminal-panel">
            <div className="terminal-top"><span />AUDIT_OUTPUT.LOG</div>
            <p><span>01</span> Biggest bottleneck</p>
            <p><span>02</span> First workflow</p>
            <p><span>03</span> KPI to move</p>
            <p><span>04</span> 7-day plan</p>
            <p><span>05</span> 30-day roadmap</p>
            <div className="terminal-status">STATUS / READY TO MAP</div>
          </div>
        }
      />

      <section className="section">
        <SectionHeading
          number="01"
          eyebrow="FIT CHECK"
          title="Built for operators with real workflows — messy or mature."
        />
        <div className="three-col">
          {[
            ["YOU KNOW AI MATTERS", "Founders, operators, consultants, agencies and lean teams unclear where to start."],
            ["WORK IS TOO MANUAL", "Admin drag, messy CRM, slow follow-up, scattered knowledge or founder-dependent workflows."],
            ["TOOLS ARE NOT A SYSTEM", "You use Notion, Slack, CRM, Workspace, Cursor, ChatGPT, Claude, Clay or automation tools without one operating layer."],
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
          title="Memory → Automation → Arbitrage → Scale → Distribution"
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
          title="Clarity you can use without hiring us."
        />
        <div className="output-grid">
          {[
            "AI implementation priority map",
            "3–5 recommendations specific to your business",
            "First 7–14 day action plan",
            "Recommendations based on your current stack",
            "What to automate, systemise, delegate — or keep human",
            "Optional pathway into a sprint or full build",
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
            The mission is to help everyday people build businesses that serve
            their lives — not trap them in admin and reactive work. The audit
            is free because it is the fastest way to create clarity.
          </p>
          <p>
            Transparent note: this connects to professional work. If the audit
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
            ["Is this a sales call?", "No. It is a diagnosis. If you do not need paid help, Ben will say so."],
            ["Will you recommend expensive tools?", "No. Tool selection comes after workflow clarity."],
            ["Do I need to already use AI?", "No. The process works from zero or from an existing stack."],
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
        <h2>Find the first system worth building.</h2>
        <p>Walk away with the bottleneck, workflow, KPI, seven-day plan and 30-day roadmap.</p>
        <AuditButton />
      </section>
    </SiteFrame>
  );
}

