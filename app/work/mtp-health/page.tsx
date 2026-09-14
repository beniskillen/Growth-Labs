import Link from "next/link";
import {
  Arrow,
  AuditButton,
  Eyebrow,
  SectionHeading,
  SiteFrame,
} from "../../components";
import { DualFunnel, LeakSchematic } from "../../offer/diagrams";
import {
  card,
  categoryLayers,
  challenge,
  comparison,
  gates,
  hero,
  illustrationNumbersNote,
  inputs,
  leaks,
  lessons,
  moves,
  now,
  results,
  servicesNote,
  snapshot,
  thesis,
  who,
} from "./copy";
import { ReferralPath } from "./diagrams";

export const metadata = {
  title: "MTP Health — Own the specialised knee category",
  description:
    "First Head of Growth seat at MTP Health: consistent monthly profits and predictable revenue by owning specialised knee/OA delivery through The Knee Program. The real allied health example behind the Category King System.",
};

function StrategyButton() {
  return <AuditButton>BOOK A STRATEGY SESSION</AuditButton>;
}

export default function MtpHealthCase() {
  return (
    <SiteFrame>
      <section className="work-hero grid-bg">
        <div className="work-hero-copy">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1>
            {hero.titleBefore} <em>{hero.titleEm}</em>
          </h1>
          <p>{hero.lead}</p>
          <p className="work-hero-liner">{card.oneLiner}</p>
          <div className="button-row">
            <StrategyButton />
            <Link className="text-link" href="/#category-example">
              Read the Category King System <Arrow />
            </Link>
          </div>
        </div>
        <figure className="work-hero-media">
          <img
            src="/work/mtp-health/clinic-consult.jpg"
            alt="MTP Health clinician consulting with a patient beside a knee model"
          />
          <figcaption>
            <img src="/work/mtp-health/nucleus.png" alt="" />
            <span>CAREER SEAT · 2019–2022</span>
          </figcaption>
        </figure>
        <div className="hero-proof offer-proof work-proof" aria-label="MTP Health proof">
          {hero.proof.map(([stat, label]) => (
            <span key={stat}>
              <strong>{stat}</strong> {label}
            </span>
          ))}
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="01"
          eyebrow="SNAPSHOT"
          title="Before the category, the owner was the pipeline."
          copy={snapshot.caption}
        />
        <div className="offer-compare-wrap">
          <table className="offer-compare">
            <thead>
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
              </tr>
            </thead>
            <tbody>
              {snapshot.rows.map((row) => (
                <tr key={row.metric}>
                  <th scope="row">{row.metric}</th>
                  <td>{row.before}</td>
                  <td>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="02"
          eyebrow={challenge.eyebrow}
          title={challenge.title}
        />
        <div className="offer-prose">
          {challenge.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="diagnostic-grid work-bullets">
          {challenge.bullets.map((item, index) => (
            <div className="diagnostic-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="03"
          eyebrow="THE DIAGNOSIS"
          title="Five leaks. Same scoreboard as the Category King System."
          copy="MTP was not under-marketed. It was under-measured. Each leak maps to a number you can name."
        />
        <div className="offer-leaks">
          <LeakSchematic />
          <div className="offer-leak-list">
            {leaks.map((leak) => (
              <article className="offer-leak" key={leak.number}>
                <span>{leak.number}</span>
                <div>
                  <h3>{leak.title}</h3>
                  <p>{leak.body}</p>
                </div>
                <strong>{leak.metric}</strong>
              </article>
            ))}
          </div>
        </div>
        <p className="section-punchline offer-rule">
          <span className="card-code">The rule</span>
          Identity first. Then the system. Do not buy more attention until the bucket holds.
        </p>
      </section>

      <section className="section split-section grid-bg offer-shift">
        <div>
          <Eyebrow>CATEGORY KING MOVE</Eyebrow>
          <h2>Own specialised preventative knee/OA exercise delivery — The Knee Program.</h2>
        </div>
        <div className="offer-prose">
          <p>Same clinical skill. Different offer. That is the whole business.</p>
          <p>
            A generalist has to win every conversation from scratch. A category owner gets pulled into conversations it never started.
          </p>
        </div>
      </section>

      <section className="section offer-section">
        <div className="work-layers">
          {categoryLayers.map(([layer, decision]) => (
            <article key={layer}>
              <span className="card-code">{layer}</span>
              <p>{decision}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="04"
          eyebrow={thesis.eyebrow}
          title={thesis.title}
        />
        <div className="offer-prose">
          {thesis.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="05"
          eyebrow="THE PROCESS"
          title="Five moves. The Category King Process as it actually ran."
          copy="Keep the arc. Prefix each move with the step from the Category King System so a reader recognises the same process."
        />
        <ol className="offer-rail">
          {moves.map((move) => (
            <li key={move.code}>
              <span>{move.code}</span>
              <div>
                <em>{move.step}</em>
                <h3>{move.title}</h3>
                {move.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>
        <ReferralPath />
        <blockquote className="offer-quote">
          <span className="card-code">Position</span>
          Marketing is not buying attention. It is the total customer journey — every communication touchpoint.
        </blockquote>
      </section>

      <section className="section offer-section">
        <div className="offer-example">
          <Eyebrow>WHY THIS OFFER SCALED</Eyebrow>
          <h3>
            Numbers for illustrative purposes as a proxy of real data (not actual MTP data).
          </h3>
          <DualFunnel />
          <p className="offer-caveat offer-illustration-note">
            <strong>Note:</strong> {illustrationNumbersNote}
          </p>
          <div className="offer-compare-wrap">
            <table className="offer-compare">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Standard service offer</th>
                  <th scope="col">The Knee Program</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, standard, king], index) => (
                  <tr
                    className={index === comparison.length - 1 ? "offer-compare-highlight" : undefined}
                    key={label}
                  >
                    <th scope="row">{label}</th>
                    <td>{standard}</td>
                    <td>{king}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="offer-prose">
            <p>
              <strong>The read:</strong> they could turn away gym referrals. Choosing demand is Gate 2. ~30% assessment-to-program is the Category King close rate, not a gym-pack close rate.
            </p>
          </div>
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="06"
          eyebrow="THE SCORECARD"
          title="Gates 0–4. Same pass conditions. MTP’s read."
        />
        <div className="offer-compare-wrap">
          <table className="offer-compare">
            <thead>
              <tr>
                <th scope="col">Gate</th>
                <th scope="col">Pass condition</th>
                <th scope="col">MTP read</th>
              </tr>
            </thead>
            <tbody>
              {gates.map((row) => (
                <tr key={row.gate}>
                  <th scope="row">{row.gate}</th>
                  <td>{row.pass}</td>
                  <td>{row.read}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="07"
          eyebrow="RESULTS"
          title="Consistent monthly profits. Then the category kept compounding."
        />
        <div className="work-result-list">
          {results.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="offer-prose">
          <p>
            <strong>Inputs.</strong> {inputs.inputs}
          </p>
          <p>
            <strong>Roles.</strong> {inputs.roles}
          </p>
          <p>
            <strong>Scope → KPI.</strong> {inputs.kpi}
          </p>
        </div>
      </section>

      <section className="section offer-section work-now">
        <SectionHeading
          number="08"
          eyebrow={now.eyebrow}
          title={now.title}
          copy="An industry-leading sports medicine practice — one of the world's first truly integrated exercise physiology clinics."
        />
        <div className="work-now-grid">
          <figure>
            <img
              src="/work/mtp-health/clinic-hub.jpg"
              alt="MTP Health St Leonards waiting room inside North Shore Health Hub"
            />
            <figcaption>St Leonards · North Shore Health Hub</figcaption>
          </figure>
          <figure>
            <img
              src="/work/mtp-health/clinic-floor.jpg"
              alt="Knee assessment on the treatment table at MTP Health"
            />
            <figcaption>Fulfilment is the moat</figcaption>
          </figure>
        </div>
        <div className="offer-prose">
          {now.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="work-layers">
          {now.facts.map(([label, value]) => (
            <article key={label}>
              <span className="card-code">{label}</span>
              <p>{value}</p>
            </article>
          ))}
        </div>
        <p className="section-punchline">The category is still the business.</p>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="09"
          eyebrow="WHAT THIS PROVES"
          title="Category King is not a digital-only pattern."
        />
        <div className="diagnostic-grid work-bullets">
          {lessons.map((item, index) => (
            <div className="diagnostic-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="offer-definition">
          <span className="card-code">Services used</span>
          <h3>The pattern, not a 2020 SKU list.</h3>
          <div className="offer-prose">
            <p>{servicesNote}</p>
          </div>
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="10"
          eyebrow="WHO THIS SPEAKS TO"
          title="If you are competing on location and personality, this is the install."
        />
        <div className="offer-fit">
          <article>
            <span className="card-code">Apply if</span>
            <ul>
              {who.apply.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <span className="card-code">Do not apply if</span>
            <ul>
              {who.skip.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="offer-guarantee grid-bg">
        <span className="section-index">§11</span>
        <Eyebrow>NEXT</Eyebrow>
        <h2>If you are an allied health operator competing on location and personality, this is the install.</h2>
        <p>
          Thirty minutes. Direct diagnosis. The same first-principles scoreboard that named MTP’s constraint.
        </p>
        <div className="button-row" style={{ justifyContent: "center", marginTop: 36 }}>
          <StrategyButton />
        </div>
      </section>
    </SiteFrame>
  );
}
