import { Arrow, SiteLink } from "../../components";
import { card } from "./copy";

const caseHref = "/work/mtp-health";

export function MtpCaseFeature() {
  return (
    <article className="case-feature">
      <SiteLink className="case-feature-media" href={caseHref} tabIndex={-1} aria-hidden="true">
        <img
          src="/work/mtp-health/clinic-consult.jpg"
          alt="MTP Health clinician consulting with a patient beside a knee model"
        />
      </SiteLink>
      <div className="case-card">
        <div className="case-card-top">
          <span>{card.eyebrow}</span>
          <img className="case-card-mark" src="/work/mtp-health/nucleus.png" alt="" />
        </div>
        <h3>{card.title}</h3>
        <p>{card.oneLiner}</p>
        <div className="case-proof">
          <span>PROOF</span>
          <strong>{card.proof}</strong>
        </div>
        <SiteLink href={caseHref}>
          {card.cta} <Arrow />
        </SiteLink>
      </div>
    </article>
  );
}
