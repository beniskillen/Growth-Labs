import { AuditButton, Eyebrow, SiteFrame } from "../components";
import { SiteLink } from "../SiteLink";
import type { Brief } from "./briefs";

export function BriefCase({ brief }: { brief: Brief }) {
  return (
    <SiteFrame className="work-page" homeOnly>
      <article className="brief">
        <header className="brief-hero">
          <div className="brief-lead">
            <SiteLink className="brief-back" href="/work">
              All case studies
            </SiteLink>
            <p>{brief.lead}</p>
          </div>
          <figure>
            <img src={brief.image} alt={brief.imageAlt} />
            <figcaption>Supporting photograph</figcaption>
          </figure>
        </header>

        <div className="brief-intro">
          <ul className="brief-tags">
            {brief.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <h1>{brief.client}</h1>
          <p>{brief.kicker}</p>
        </div>

        {brief.role ? (
          <section>
            <h2>Role</h2>
            <p>{brief.role.copy}</p>
            <figure className="brief-role">
              <img src={brief.role.image} alt={brief.role.imageAlt} />
              <figcaption>{brief.role.caption}</figcaption>
            </figure>
          </section>
        ) : null}

        <section>
          <h2>Outcomes</h2>
          <ul>
            {brief.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Challenge</h2>
          <p>{brief.challenge}</p>
        </section>

        <section>
          <h2>What we installed</h2>
          <ul>
            {brief.solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Key insights</h2>
          <ul className="brief-insights">
            {brief.insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <footer className="brief-close">
          <Eyebrow>NEXT</Eyebrow>
          <p>If this constraint is the one in your business, that is the conversation.</p>
          <AuditButton>BOOK A STRATEGY SESSION</AuditButton>
        </footer>
      </article>
    </SiteFrame>
  );
}
