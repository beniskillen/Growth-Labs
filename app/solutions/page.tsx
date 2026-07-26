import type { Metadata } from "next";

const CONTACT_URL = "https://jobited.com/contact";

const portfolio = [
  {
    name: "PayKit",
    code: "PKT",
    logo: "/jobited/paykit.svg",
    href: "https://www.usepaykit.dev/",
    fit: "Payment infrastructure",
  },
  {
    name: "Peridot",
    code: "PRD",
    logo: "/jobited/peridot.svg",
    href: "https://peridot.finance",
    fit: "Cross-chain lending",
  },
  {
    name: "Guardian",
    code: "GRD",
    logo: "/jobited/guardian.svg",
    href: "https://guardianstack.ai/get-started",
    fit: "Fraud & risk intelligence",
  },
  {
    name: "Stellars Finance",
    code: "STL",
    logo: "/jobited/stellars-finance.png",
    href: "https://stellars.finance",
    fit: "Capital markets on Stellar",
  },
  {
    name: "USD8",
    code: "U8",
    logo: "/jobited/usd8.png",
    href: "https://usd8.fi/",
    fit: "Stablecoin protocol",
  },
];

const capabilities = [
  {
    code: "01",
    title: "Custom product engineering",
    copy: "Design and ship internal tools, customer platforms, data products and high-trust digital infrastructure around a real operating constraint.",
    tags: ["Product", "Platform", "Integrations"],
  },
  {
    code: "02",
    title: "Blockchain & protocol systems",
    copy: "From smart-contract architecture to wallets, payments, DeFi primitives and cross-chain infrastructure — designed for production, not demo day.",
    tags: ["Protocol", "Smart contracts", "Payments"],
  },
  {
    code: "03",
    title: "Applied AI & security",
    copy: "Build AI-enabled workflows, decision systems, fraud controls and risk tooling that fit your stack, data boundaries and governance model.",
    tags: ["AI systems", "Risk", "Security"],
  },
  {
    code: "04",
    title: "Specialist engineering pods",
    copy: "Deploy a tightly scoped pod from Jobited’s international engineering community, with the technical depth matched to the system being built.",
    tags: ["Rust", "Solidity", "Go", "ML"],
  },
  {
    code: "05",
    title: "Frontier architecture",
    copy: "De-risk new infrastructure across distributed systems, applied cryptography, post-quantum security and research-heavy engineering.",
    tags: ["Systems", "PQC", "Research"],
  },
  {
    code: "06",
    title: "Build, hire, transfer",
    copy: "Start with Jobited’s delivery pod, then retain the system and, when needed, hire the permanent engineers who will own its next chapter.",
    tags: ["Delivery", "Hiring", "Handover"],
  },
];

const method = [
  {
    code: "01",
    title: "Define the system",
    copy: "Map the workflow, business case, technical constraints and risk. Leave with a build brief that leadership and engineering can both sign.",
    output: "OPPORTUNITY MAP / BUILD BRIEF",
  },
  {
    code: "02",
    title: "Architect the path",
    copy: "Choose the right architecture, validate the hard assumptions and break the system into releases that can prove value early.",
    output: "ARCHITECTURE / DELIVERY PLAN",
  },
  {
    code: "03",
    title: "Assemble & build",
    copy: "Staff a specialist pod from the Jobited network and ship in short, visible cycles with one accountable technical lead.",
    output: "WORKING RELEASES / WEEKLY SIGNAL",
  },
  {
    code: "04",
    title: "Launch & transfer",
    copy: "Integrate, document and harden the system. Train the internal team or recruit permanent owners so the capability stays with you.",
    output: "PRODUCTION / OWNERSHIP",
  },
];

const proof = [
  {
    label: "ZERO-KNOWLEDGE",
    title: "Two specialist hires",
    copy: "Source Network moved from first contact to interviews in under two weeks, resulting in two ZK engineering hires for CBDC work.",
  },
  {
    label: "ETHEREUM INFRA",
    title: "Rare local depth",
    copy: "Staking Facilities secured a highly specialised Ethereum staking engineer in Munich who became a leading team member.",
  },
  {
    label: "AI-ASSISTED SEARCH",
    title: "Lower hiring cost",
    copy: "Virtual Labs used Jobited’s AI-supported talent process to identify long-term builders while reducing hiring cost.",
  },
];

const faqs = [
  [
    "What can Jobited build?",
    "Jobited is best suited to technically demanding systems: blockchain and protocol infrastructure, payments, security and fraud tooling, applied AI, distributed systems, research-heavy platforms and the internal tools around them.",
  ],
  [
    "How is this different from hiring engineers?",
    "Hiring gives you people. Custom engineering gives you an owned outcome: a defined system, an accountable delivery lead, the right specialist pod and a path to production. If the capability should become permanent, Jobited can then help hire the team that owns it.",
  ],
  [
    "Do we need a finished technical specification?",
    "No. The first engagement turns the commercial need, workflow and constraints into a buildable brief. If you already have a specification, Jobited can pressure-test it and move directly into architecture and delivery planning.",
  ],
  [
    "Can Jobited work inside our existing stack?",
    "Yes. The solution is designed around your current systems, data, security requirements and internal engineering standards. The aim is a durable capability, not another isolated pilot.",
  ],
  [
    "Who owns the IP and code?",
    "Engagement terms are agreed during scoping, but the default offer is built for client ownership: documented source, deployment assets, system knowledge and a clear operational handover.",
  ],
  [
    "What happens after launch?",
    "Jobited can hand the system to your existing team, continue with an embedded delivery pod, or recruit the permanent specialist engineers needed to operate and extend it.",
  ],
];

export const metadata: Metadata = {
  title: "Custom Engineering Solutions | Jobited",
  description:
    "Jobited designs, builds and transfers frontier engineering systems across blockchain, AI, security, payments and distributed infrastructure.",
  openGraph: {
    title: "Jobited — Frontier engineering, built for production",
    description:
      "Custom engineering solutions powered by Jobited’s international community of frontier builders.",
    images: ["/og-jobited-solutions.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobited — Frontier engineering, built for production",
    description:
      "Custom engineering solutions powered by Jobited’s international community of frontier builders.",
    images: ["/og-jobited-solutions.png"],
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLead({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <header className="j-section-lead">
      <span className="j-section-index">§ {index}</span>
      <div>
        <p className="j-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy ? <p className="j-section-copy">{copy}</p> : null}
      </div>
    </header>
  );
}

function JobitedHeader() {
  return (
    <header className="j-header">
      <a className="j-wordmark" href="https://jobited.com" aria-label="Jobited home">
        <img src="/jobited/jobited-logo.png" alt="" />
        <strong>JOBITED.</strong>
      </a>
      <nav className="j-nav" aria-label="Solutions page navigation">
        <a href="#capabilities">Capabilities</a>
        <a href="#method">Method</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#stellar">Stellar</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="j-button j-button-small" href={CONTACT_URL}>
        Start a build <Arrow />
      </a>
    </header>
  );
}

function JobitedFooter() {
  return (
    <footer className="j-footer">
      <div className="j-footer-brand">
        <a className="j-wordmark" href="https://jobited.com" aria-label="Jobited home">
          <img src="/jobited/jobited-logo.png" alt="" />
          <strong>JOBITED.</strong>
        </a>
        <p>International engineering community from Berlin.</p>
      </div>
      <div className="j-footer-links">
        <a href="https://jobited.com/startups">Community</a>
        <a href="https://jobited.com/references">References</a>
        <a href="https://jobited.com/notes">Engineering notes</a>
        <a href="mailto:info@jobited.com">info@jobited.com</a>
      </div>
      <div className="j-footer-meta">
        <span>© {new Date().getFullYear()} Jobited</span>
        <span className="j-live"><i /> All systems operational</span>
      </div>
    </footer>
  );
}

export default function SolutionsPage() {
  return (
    <div className="jobited-solutions">
      <JobitedHeader />

      <main>
        <section className="j-hero">
          <div className="j-hero-grid" aria-hidden="true" />
          <div className="j-hero-copy">
            <p className="j-boot">jobited://solutions <span>boot · v.01</span></p>
            <p className="j-eyebrow"><i /> CUSTOM ENGINEERING / ENTERPRISE</p>
            <h1>
              Frontier engineering, <em>built for production.</em>
            </h1>
            <p className="j-hero-intro">
              Jobited turns complex technical mandates into working systems —
              defining what matters, assembling the right specialist engineers,
              building it and transferring the capability to your team.
            </p>
            <div className="j-actions">
              <a className="j-button" href={CONTACT_URL}>
                Scope your solution <Arrow />
              </a>
              <a className="j-text-link" href="#method">
                See the delivery system <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="j-hero-signals" aria-label="Jobited solution strengths">
              <span><b>01</b> One accountable build</span>
              <span><b>02</b> Specialist frontier talent</span>
              <span><b>03</b> Owned client capability</span>
            </div>
          </div>

          <aside className="j-system-map" aria-label="Jobited custom engineering delivery map">
            <div className="j-system-top">
              <span>JOBITED / SOLUTION BUILD</span>
              <span className="j-live"><i /> LIVE</span>
            </div>
            <div className="j-system-core">
              <span className="j-node j-node-one">01<br /><b>DEFINE</b></span>
              <span className="j-node j-node-two">02<br /><b>ARCHITECT</b></span>
              <span className="j-node j-node-three">03<br /><b>BUILD</b></span>
              <span className="j-node j-node-four">04<br /><b>TRANSFER</b></span>
              <div className="j-orbit j-orbit-one" />
              <div className="j-orbit j-orbit-two" />
              <div className="j-map-center">
                <img src="/jobited/jobited-logo.png" alt="" />
                <strong>ONE<br />SYSTEM</strong>
              </div>
            </div>
            <div className="j-system-readout">
              <span>NETWORK <b>INTERNATIONAL</b></span>
              <span>STATUS <b>BUILD READY</b></span>
              <span>OWNER <b>YOUR TEAM</b></span>
            </div>
          </aside>
        </section>

        <section className="j-trust" id="portfolio" aria-labelledby="portfolio-label">
          <div className="j-trust-head">
            <p id="portfolio-label">PROJECTS INCUBATED &amp; SUPPORTED BY THE JOBITED COMMUNITY</p>
            <span>05 / ACTIVE PORTFOLIO</span>
          </div>
          <div className="j-logo-grid">
            {portfolio.map((company) => (
              <a
                className={`j-logo-cell j-logo-${company.code.toLowerCase()}`}
                href={company.href}
                target="_blank"
                rel="noreferrer"
                key={company.name}
                aria-label={`${company.name}: ${company.fit}`}
              >
                <span>{company.code}</span>
                <img src={company.logo} alt={company.name} />
                <small>{company.fit}</small>
              </a>
            ))}
          </div>
          <p className="j-trust-note">
            Plus trusted engineering relationships across Aave, Ethereum
            Foundation, StarkWare, Ava Labs, Tezos, Source Network, CoreLedger
            and Staking Facilities.
          </p>
        </section>

        <section className="j-friction">
          <div className="j-friction-intro">
            <p className="j-eyebrow">THE DELIVERY GAP</p>
            <h2>
              You have the mandate. The tooling. The pilot deck.
              <span> The system still has not shipped.</span>
            </h2>
          </div>
          <div className="j-friction-grid">
            <article>
              <span>01 / ADVISORY</span>
              <p>Consultants identify the opportunity, then leave the technical risk with your team.</p>
            </article>
            <article>
              <span>02 / STAFFING</span>
              <p>Recruiters source profiles, but nobody owns the architecture or the outcome.</p>
            </article>
            <article>
              <span>03 / PILOTS</span>
              <p>Vendors prove a demo, then adoption, integration and long-term ownership break down.</p>
            </article>
          </div>
          <div className="j-answer">
            <span className="j-section-index">THE JOBITED MODEL</span>
            <p>
              One connected path from technical opportunity to production
              system — with the community to build it and the hiring capability
              to make it permanent.
            </p>
          </div>
        </section>

        <section className="j-section j-capabilities" id="capabilities">
          <SectionLead
            index="01"
            eyebrow="CAPABILITIES"
            title="Bring us the hard system."
            copy="Jobited is built for work where domain depth, engineering judgement and access to rare specialists matter more than generic delivery capacity."
          />
          <div className="j-capability-list">
            {capabilities.map((item) => (
              <article key={item.title}>
                <span className="j-capability-code">{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div>
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="j-method" id="method">
          <div className="j-method-inner">
            <SectionLead
              index="02"
              eyebrow="DELIVERY SYSTEM"
              title="From ambiguity to an owned capability."
              copy="A single operating model covers discovery, technical delivery and the internal ownership needed after launch."
            />
            <div className="j-method-grid">
              {method.map((step) => (
                <article key={step.title}>
                  <div className="j-method-number">
                    <span>{step.code}</span>
                    <i />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  <strong>{step.output}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="j-section j-proof">
          <SectionLead
            index="03"
            eyebrow="WHY JOBITED"
            title="A delivery offer built on real network signal."
            copy="Jobited already finds rare technical depth, convenes frontier builders and supports companies born inside its community. Custom engineering connects those assets around one accountable outcome."
          />
          <div className="j-proof-layout">
            <div className="j-proof-thesis">
              <p className="j-terminal-line">$ jobited init --solution</p>
              <h3>Community is the infrastructure.</h3>
              <p>
                The advantage is not a long agency bench. It is direct access
                to engineers already working across blockchain, security,
                quantum, AI and distributed systems — then assembling only the
                team the build requires.
              </p>
              <div className="j-proof-status">
                <span><b>NETWORK</b> INTERNATIONAL</span>
                <span><b>DOMAINS</b> 03 FRONTIERS</span>
                <span><b>MODEL</b> BUILD → HIRE → TRANSFER</span>
              </div>
            </div>
            <div className="j-outcome-list">
              {proof.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{item.label}</small>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="j-stellar" id="stellar">
          <div className="j-stellar-visual">
            <img
              className="j-stellars-art"
              src="/jobited/stellars-finance.png"
              alt="Stellars Finance — the first perpetual futures protocol on Stellar"
            />
            <div className="j-stellar-rail">
              <img src="/jobited/stellar-network.svg" alt="Stellar network" />
              <span>×</span>
              <img src="/jobited/jobited-logo.png" alt="Jobited" />
            </div>
          </div>
          <div className="j-stellar-copy">
            <p className="j-eyebrow"><i /> CORE ECOSYSTEM TRACK / STELLAR</p>
            <h2>Building where open finance is going next.</h2>
            <p>
              Jobited incubates Stellars Finance, a Soroban-based perpetual
              trading protocol bringing transparent, on-chain capital markets
              to the Stellar network.
            </p>
            <div className="j-stellar-award">
              <div>
                <img src="/jobited/stellar-community-fund.svg" alt="Stellar Community Fund" />
              </div>
              <p>
                <span>INDEPENDENT ECOSYSTEM VALIDATION</span>
                Stellars Finance was awarded <strong>$119.3K</strong> through
                Stellar Community Fund #40.
              </p>
            </div>
            <ul>
              <li>Soroban smart contracts &amp; protocol architecture</li>
              <li>Payments, stablecoins &amp; capital-market primitives</li>
              <li>Cross-chain systems, risk engines &amp; security</li>
            </ul>
            <a className="j-text-link" href="https://communityfund.stellar.org/project/stellars-finance-cross-chain-perpetuals-qgo" target="_blank" rel="noreferrer">
              View the Stellar Community Fund project <Arrow />
            </a>
            <small className="j-disclosure">
              Stellar Community Fund is operated by Stellar Development
              Foundation. Inclusion here describes the independent award to
              Stellars Finance and does not imply an SDF–Jobited partnership.
            </small>
          </div>
        </section>

        <section className="j-engagement">
          <SectionLead
            index="04"
            eyebrow="ENGAGEMENT PATH"
            title="Start with the next proof point."
            copy="Each engagement is scoped around the outcome, technical risk and ownership model — not a pre-set technology stack."
          />
          <div className="j-engagement-grid">
            <article>
              <span>01 / DEFINE</span>
              <h3>Solution Blueprint</h3>
              <p>Opportunity map, business case, architecture, risk register and an executable delivery brief.</p>
              <strong>BEST FOR / COMPLEX MANDATES</strong>
            </article>
            <article>
              <span>02 / PROVE</span>
              <h3>Production Slice</h3>
              <p>A focused working release that validates the hardest assumption inside your real environment.</p>
              <strong>BEST FOR / DE-RISKING THE BUILD</strong>
            </article>
            <article>
              <span>03 / BUILD</span>
              <h3>Custom System</h3>
              <p>End-to-end architecture, specialist pod, integrations, hardening, documentation and launch.</p>
              <strong>BEST FOR / OWNED CAPABILITY</strong>
            </article>
            <article>
              <span>04 / SCALE</span>
              <h3>Embedded Pod</h3>
              <p>Ongoing product and engineering capacity, with optional permanent hiring and team transfer.</p>
              <strong>BEST FOR / CONTINUOUS DELIVERY</strong>
            </article>
          </div>
        </section>

        <section className="j-faq" id="faq">
          <div className="j-faq-heading">
            <p className="j-eyebrow">FAQ / 06 ITEMS</p>
            <h2>Before we build.</h2>
            <p>Clear answers for technical leaders, innovation teams and operators.</p>
          </div>
          <div className="j-faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="j-final">
          <div className="j-final-grid" aria-hidden="true" />
          <p className="j-eyebrow"><i /> BUILD WINDOW / OPEN</p>
          <h2>The hard system is the brief.</h2>
          <p>
            Bring Jobited the operating problem, technical risk or frontier
            product your current team cannot get over the line.
          </p>
          <a className="j-button" href={CONTACT_URL}>
            Start a scoping conversation <Arrow />
          </a>
          <span className="j-final-note">BERLIN · INTERNATIONAL DELIVERY</span>
        </section>
      </main>

      <JobitedFooter />
    </div>
  );
}
