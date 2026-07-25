import Link from "next/link";
import {
  Arrow,
  AuditButton,
  Eyebrow,
  SiteFrame,
} from "./components";

const constraints = [
  ["Offer", "The value is hard to explain or too easy to compare."],
  ["Positioning", "The market cannot immediately see why you are the right choice."],
  ["Conversion", "Attention arrives, but the path to a decision is weak."],
  ["Pipeline", "Outreach and lead flow depend on bursts of founder energy."],
  ["Follow-up", "Good opportunities disappear into inboxes, memory and spreadsheets."],
  ["Founder", "Delivery, decisions and momentum still route through one person."],
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

const stages = [
  ["01", "Find the constraint", "Audit the offer, demand, conversion, pipeline, delivery and founder load. Rank the drag by commercial impact."],
  ["02", "Install the system", "Fix the broken path with the lightest system that can create a measurable change."],
  ["03", "Apply AI where it matters", "Add memory, assistance or automation only where it improves the system — never as decoration."],
  ["04", "Make growth repeatable", "Document the operating rhythm, assign ownership and track the numbers that prove it works."],
];

const outcomes = [
  ["UNCLEAR PRIORITIES", "One constraint ranked by revenue impact"],
  ["WEAK OFFER", "A sharper commercial proposition"],
  ["INCONSISTENT DEMAND", "A repeatable lead-generation rhythm"],
  ["LEAKY FUNNEL", "A cleaner path from attention to decision"],
  ["LOST FOLLOW-UP", "CRM ownership and next-action visibility"],
  ["FOUNDER BOTTLENECK", "Documented workflows the team can run"],
  ["SCATTERED AI USE", "AI leverage designed around proven work"],
  ["NO OPERATING VIEW", "Reporting that shows what moves growth"],
];

const proof = [
  ["01", "COMMERCIAL OS", "Jobited", "Recruitment funnel, hiring intelligence, prospecting engine and CRM.", "PIPELINE / IN PRODUCTION"],
  ["02", "OUTREACH ENGINE", "Bybit", "KOL and affiliate BD cadence, CRM pipeline, institutional outreach and reporting.", "50 OUTREACHES / WEEK"],
  ["03", "OPERATING LAYER", "The RAW", "Campaign portal, commercial pipeline, KPI dashboards and recruitment systems.", "MULTI-BRAND SYSTEM"],
  ["04", "SALES SYSTEM", "Empire Crypto", "Reactivation sequences, sales scripts, trial-to-paid funnel and CRM pipeline.", "LIVE / IN PRODUCTION"],
  ["05", "AI LEVERAGE", "Corvan AI", "Unified communications triage, business context and meeting-to-task workflows.", "OPERATOR EFFICIENCY"],
];

export default function Home() {
  return (
    <SiteFrame>
      <div className="growth-home">
        <section className="constraint-hero">
          <div className="constraint-hero-copy">
            <Eyebrow>BEN KILLEN / GROWTH SYSTEMS OPERATOR</Eyebrow>
            <h1>
              Most businesses don&apos;t need more AI.
              <span>They need the right growth system.</span>
            </h1>
            <p>
              We identify your biggest commercial constraint, install the
              system that fixes it, and apply AI where it actually creates
              leverage.
            </p>
            <div className="button-row">
              <AuditButton>Book a Growth Constraint Audit</AuditButton>
              <Link className="constraint-text-link" href="#levels">
                See the 10 levels <span aria-hidden="true">↓</span>
              </Link>
            </div>
            <div className="hero-qualifier">
              <span>FOR FOUNDER-LED BUSINESSES</span>
              <span>SERVICE / AGENCY / CONSULTING</span>
              <span>$200K–$2M+ / BUILT FOR TRACTION</span>
            </div>
          </div>

          <div className="constraint-scan" aria-label="Example commercial constraint scan">
            <div className="scan-head">
              <span>GROWTH CONSTRAINT SCAN</span>
              <span className="scan-live"><i /> LIVE DIAGNOSTIC</span>
            </div>
            <div className="scan-statement">
              <span>HYPOTHESIS / 001</span>
              <strong>Demand is the constraint.</strong>
              <p>More tools will not fix an unclear offer or an inconsistent pipeline.</p>
            </div>
            <div className="scan-bars">
              {[
                ["DEMAND", "86%", 86, true],
                ["CONVERSION", "61%", 61, false],
                ["DELIVERY", "38%", 38, false],
                ["AI / TOOLS", "17%", 17, false],
              ].map(([label, value, width, hot]) => (
                <div className={hot ? "scan-bar is-hot" : "scan-bar"} key={String(label)}>
                  <div><span>{label}</span><b>{value}</b></div>
                  <i style={{ "--bar": `${width}%` } as React.CSSProperties} />
                </div>
              ))}
            </div>
            <div className="scan-gate">
              <div>
                <span>AI LEVERAGE GATE</span>
                <strong>LOCKED</strong>
              </div>
              <p>Fix the commercial system first.</p>
            </div>
            <div className="scan-foot">
              <span>CONSTRAINT FIRST</span>
              <Arrow />
              <span>SYSTEM SECOND</span>
              <Arrow />
              <span>LEVERAGE THIRD</span>
            </div>
          </div>
        </section>

        <section className="light-section problem-section">
          <header className="editorial-heading">
            <span className="editorial-index">01 / THE REAL PROBLEM</span>
            <div>
              <p className="editorial-kicker">BUSINESSES ARE OPTIMISING THE WRONG THING</p>
              <h2>AI amplifies the system you already have.</h2>
            </div>
          </header>

          <div className="problem-layout">
            <div className="problem-statement">
              <p>
                If the offer is weak, AI creates more weak messaging. If the
                funnel leaks, automation loses leads faster. If the founder is
                the system, more tools create more complexity.
              </p>
              <strong>Constraint first.<br />Tools second.</strong>
            </div>
            <div className="constraint-grid">
              {constraints.map(([title, copy], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="amplification-diagram" aria-label="AI amplification diagram">
            <div><span>WEAK INPUT</span><strong>Unclear offer</strong></div>
            <i>×</i>
            <div className="diagram-ai"><span>AI AMPLIFICATION</span><strong>More volume</strong></div>
            <i>=</i>
            <div><span>WEAK OUTPUT</span><strong>Faster confusion</strong></div>
          </div>
        </section>

        <section className="levels-section" id="levels">
          <div className="levels-intro">
            <div>
              <span className="editorial-index">02 / THE IMPLEMENTATION MODEL</span>
              <h2>The 10 Levels of Growth Implementation</h2>
            </div>
            <div className="levels-intro-copy">
              <p>
                Growth is installed in sequence. Each level creates the
                conditions for the next — from clarity at Level 01 to
                compounding leverage at Level 10.
              </p>
              <div className="level-legend">
                <span><i /> FOUNDATION</span>
                <span><i /> EXECUTION</span>
                <span><i /> SCALE</span>
              </div>
            </div>
          </div>

          <div className="maturity-frame">
            <div className="maturity-axis">
              <span>CLARITY</span>
              <i />
              <span>LEVERAGE</span>
            </div>
            <ol className="maturity-ladder">
              {levels.map(([number, phase, title, copy], index) => (
                <li
                  className={`level-step level-step-${index + 1}`}
                  key={number}
                  style={{ "--indent": `${(9 - index) * 3}%` } as React.CSSProperties}
                >
                  <span className="level-number">{number}</span>
                  <span className="level-phase">{phase}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="levels-note">
            <span>THE RULE</span>
            <p>Do not automate what has not been clarified, proven and owned.</p>
          </div>
        </section>

        <section className="light-section process-section" id="process">
          <header className="editorial-heading">
            <span className="editorial-index">03 / HOW IT WORKS</span>
            <div>
              <p className="editorial-kicker">STRUCTURED IMPLEMENTATION</p>
              <h2>Diagnose before you build. Prove before you automate.</h2>
            </div>
          </header>
          <div className="stage-grid">
            {stages.map(([number, title, copy]) => (
              <article key={title}>
                <span>{number}</span>
                <div className="stage-node" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="outcomes-section">
          <header className="outcomes-heading">
            <span className="editorial-index">04 / WHAT YOU ACTUALLY GET</span>
            <h2>Less activity.<br />More commercial control.</h2>
            <p>
              The work can include offer and funnel review, demand strategy,
              workflow design, CRM, follow-up, SOPs, reporting and AI leverage.
              The deliverable is a better growth system.
            </p>
          </header>
          <div className="outcome-list">
            {outcomes.map(([before, after], index) => (
              <div key={before}>
                <span className="outcome-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="outcome-before">{before}</span>
                <span className="outcome-arrow">→</span>
                <strong>{after}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="fit-section">
          <div className="fit-panel fit-positive">
            <span className="editorial-index">05 / WHO IT&apos;S FOR</span>
            <h2>Built for businesses with traction — and friction.</h2>
            <ul>
              <li>Founder-led service businesses doing roughly $200K–$2M+</li>
              <li>Agencies and consultants with an inconsistent growth engine</li>
              <li>Operators stuck between delivery, sales and scattered systems</li>
              <li>Teams with a real demand, conversion or operational bottleneck</li>
            </ul>
          </div>
          <div className="fit-panel fit-negative">
            <span>NOT A FIT</span>
            <h3>This is not AI theatre.</h3>
            <ul>
              <li>Generic tool shopping or “AI transformation” hype</li>
              <li>Pre-idea founders with no commercial direction</li>
              <li>Businesses unwilling to fix the real constraint first</li>
            </ul>
          </div>
        </section>

        <section className="offer-path-section">
          <header className="editorial-heading">
            <span className="editorial-index">06 / COMMERCIAL PATH</span>
            <div>
              <p className="editorial-kicker">START WITH CLARITY. EARN THE NEXT STEP.</p>
              <h2>An implementation path sized to the constraint.</h2>
            </div>
          </header>
          <div className="offer-path">
            {[
              ["01", "DIAGNOSTIC", "Growth Constraint Audit", "Identify the bottleneck, commercial cost and highest-leverage next move."],
              ["02", "INSTALL", "ROI Website / System Install", "Fix the conversion path or install the first system around the constraint."],
              ["03", "IMPLEMENT", "Growth Implementation Sprint", "Build, activate and measure the growth system across a focused 30–90 days."],
              ["04", "EMBED", "Embedded Growth Operator", "Ongoing commercial leadership for teams ready to compound across the full operating system."],
            ].map(([number, tag, title, copy], index) => (
              <article key={title} className={index === 0 ? "is-entry" : index === 3 ? "is-embedded" : ""}>
                <div className="offer-path-top">
                  <span>{number}</span>
                  <span>{tag}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <div className="offer-path-foot">
                  <span>{index === 0 ? "START HERE" : "BY RECOMMENDATION"}</span>
                  <Arrow />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-ledger" id="work">
          <div className="proof-ledger-head">
            <div>
              <span className="editorial-index">07 / PROOF OF IMPLEMENTATION</span>
              <h2>Real systems in production.<br />Not AI theatre.</h2>
            </div>
            <p>
              Growth Labs sits between strategy and execution: clarifying the
              commercial problem, installing the operating system and making
              sure it is used.
            </p>
          </div>
          <div className="proof-ledger-list">
            {proof.map(([number, tag, title, copy, status]) => (
              <article key={title}>
                <span>{number}</span>
                <div><small>{tag}</small><h3>{title}</h3></div>
                <p>{copy}</p>
                <strong>{status}</strong>
              </article>
            ))}
          </div>
          <Link className="button button-outline" href="/solutions">
            Explore selected systems <Arrow />
          </Link>
        </section>

        <section className="operator-strip">
          <div>
            <span>BEN KILLEN / GROWTH LABS</span>
            <h2>Strategy is only useful when it changes how the business runs.</h2>
          </div>
          <div>
            <p>
              Operator-led across sales, business development, CRM, offers,
              funnels, reporting, AI workflows and delivery systems.
            </p>
            <Link href="/about">About Ben <Arrow /></Link>
          </div>
        </section>

        <section className="constraint-final">
          <Eyebrow>THE FIRST MOVE / GROWTH CONSTRAINT AUDIT</Eyebrow>
          <h2>
            If your business is constrained, the answer is not more tools.
            <span>It&apos;s the right system.</span>
          </h2>
          <p>
            Find the constraint. Quantify the drag. Leave with the next system
            worth installing.
          </p>
          <AuditButton>Book the Growth Constraint Audit</AuditButton>
          <small>DIRECT DIAGNOSIS · COMMERCIAL PRIORITIES · NO AI HYPE</small>
        </section>
      </div>
    </SiteFrame>
  );
}
