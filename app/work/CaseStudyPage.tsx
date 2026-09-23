import {
  AuditButton,
  Eyebrow,
  SectionHeading,
  SiteFrame,
} from "../components";
import { SiteLink } from "../SiteLink";
import { LeakSchematic } from "../offer/diagrams";
import { Pathway } from "./Pathway";
import type { CaseStudy } from "./types";

function StrategyButton() {
  return <AuditButton>BOOK A STRATEGY SESSION</AuditButton>;
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <SiteFrame className="work-page" homeOnly>
      <section className="work-hero grid-bg">
        <div className="work-hero-copy">
          <Eyebrow>{study.hero.eyebrow}</Eyebrow>
          <h1>
            {study.hero.titleBefore} <em>{study.hero.titleEm}</em>
          </h1>
          <p>{study.hero.lead}</p>
          <div className="button-row">
            <StrategyButton />
            <SiteLink className="text-link" href="/work">
              All case studies
            </SiteLink>
          </div>
        </div>
        <figure className="work-hero-media work-hero-panel">
          <div>
            <span>{study.hero.panelKicker}</span>
            <strong>{study.hero.panelStat}</strong>
            <p>{study.hero.panelLabel}</p>
          </div>
          <figcaption>
            <span>{study.hero.caption}</span>
          </figcaption>
        </figure>
        <div className="hero-proof offer-proof work-proof" aria-label={`${study.card.title} proof`}>
          {study.hero.proof.map(([stat, label]) => (
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
          title="Before the category, the work had to be pushed."
          copy={study.snapshot.caption}
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
              {study.snapshot.rows.map((row) => (
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
          eyebrow={study.challenge.eyebrow}
          title={study.challenge.title}
        />
        <div className="offer-prose">
          {study.challenge.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="diagnostic-grid work-bullets">
          {study.challenge.bullets.map((item, index) => (
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
          title={study.diagnosis.title}
          copy={study.diagnosis.copy}
        />
        <div className="offer-leaks">
          <LeakSchematic />
          <div className="offer-leak-list">
            {study.leaks.map((leak) => (
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
          {study.diagnosis.rule}
        </p>
      </section>

      <section className="section split-section grid-bg offer-shift">
        <div>
          <Eyebrow>CATEGORY KING MOVE</Eyebrow>
          <h2>{study.shift}</h2>
        </div>
      </section>

      <section className="section offer-section">
        <div className="work-layers">
          {study.categoryLayers.map(([layer, decision]) => (
            <article key={layer}>
              <span className="card-code">{layer}</span>
              <p>{decision}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading number="04" eyebrow={study.thesis.eyebrow} title={study.thesis.title} />
        <SectionHeading
          number="05"
          eyebrow="THE PROCESS"
          title="How the category actually got built"
          copy={study.processIntro}
        />
        <ol className="offer-rail">
          {study.moves.map((move) => (
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
        <Pathway aria={study.pathway.aria} steps={study.pathway.steps} />
        <blockquote className="offer-quote">
          <span className="card-code">Growth Engineering</span>
          {study.quote}
        </blockquote>
        <div className="offer-example">
          <Eyebrow>{study.comparisonLabel}</Eyebrow>
          <div className="offer-compare-wrap">
            <table className="offer-compare">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">{study.comparisonHeaders[0]}</th>
                  <th scope="col">{study.comparisonHeaders[1]}</th>
                </tr>
              </thead>
              <tbody>
                {study.comparison.map(([label, standard, king], index) => (
                  <tr
                    className={
                      index === study.comparison.length - 1 ? "offer-compare-highlight" : undefined
                    }
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
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading number="06" eyebrow="RESULTS" title={study.resultsTitle} />
        <div className="work-result-list">
          {study.results.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section offer-section work-now">
        <SectionHeading
          number="07"
          eyebrow={study.now.eyebrow}
          title={study.now.title}
          copy={study.now.intro}
        />
        <div className="offer-prose">
          {study.now.copy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="work-layers">
          {study.now.facts.map(([label, value]) => (
            <article key={label}>
              <span className="card-code">{label}</span>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="offer-guarantee grid-bg">
        <span className="section-index">_08</span>
        <Eyebrow>NEXT</Eyebrow>
        <h2>{study.close.title}</h2>
        <p>{study.close.copy}</p>
        <div className="button-row" style={{ justifyContent: "center", marginTop: 36 }}>
          <StrategyButton />
        </div>
      </section>
    </SiteFrame>
  );
}
