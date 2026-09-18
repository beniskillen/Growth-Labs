import {
  Arrow,
  AuditButton,
  Eyebrow,
  SectionHeading,
  SiteFrame,
} from "../../components";
import { SiteLink } from "../../SiteLink";
import { LeakSchematic } from "../../offer/diagrams";
import {
  categoryLayers,
  challenge,
  comparison,
  hero,
  leaks,
  moves,
  now,
  results,
  snapshot,
  thesis,
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
    <SiteFrame className="work-page" homeOnly>
      <section className="work-hero grid-bg">
        <div className="work-hero-copy">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1>
            {hero.titleBefore} <em>{hero.titleEm}</em>
          </h1>
          <p>{hero.lead}</p>
          <div className="button-row">
            <StrategyButton />
            <SiteLink className="text-link" href="/#category-example">
              Read the Category King System <Arrow />
            </SiteLink>
          </div>
        </div>
        <figure className="work-hero-media">
          <img
            src="/work/mtp-health/clinic-consult.jpg"
            alt="MTP Health clinician consulting with a patient beside a knee model"
          />
          <figcaption>
            <img src="/work/mtp-health/mark%20copy.svg" alt="" />
            <span>Fractional Growth Consultant | Category King Execution</span>
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
          title="First principles showed that MTP could become a Category King"
          copy="On an analysis of the numbers, it was clear that MTP had promising signs of an ability to take their existing resources to streamline for scale."
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
          Data gives the clues we need. With a first principles analysis, the immediate actions for growth were clear.
        </p>
      </section>

      <section className="section split-section grid-bg offer-shift">
        <div>
          <Eyebrow>CATEGORY KING MOVE</Eyebrow>
          <h2>Double down on the most valuable customer segment & design the business around them.</h2>
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
        <SectionHeading
          number="05"
          eyebrow="THE PROCESS"
          title="How we turned MTP Health into a Category King"
          copy="The process of turning insights into action for MTP Health in a progressive manner."
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
          <span className="card-code">Growth Engineering</span>
          Marketing is not simply just buying attention. It is every piece of communication along the whole customer journey.
        </blockquote>
        <div className="offer-example">
          <Eyebrow>WHY THIS OFFER SCALED</Eyebrow>
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
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="06"
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
      </section>

      <section className="section offer-section work-now">
        <SectionHeading
          number="07"
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
      </section>

      <section className="offer-guarantee grid-bg">
        <span className="section-index">_08</span>
        <Eyebrow>NEXT</Eyebrow>
        <h2>Ready to take a quantum leap in your business & income?</h2>
        <p>
          Book a growth strategy using the button below to get a tailored Category King plan for your business.
        </p>
        <div className="button-row" style={{ justifyContent: "center", marginTop: 36 }}>
          <StrategyButton />
        </div>
      </section>
    </SiteFrame>
  );
}
