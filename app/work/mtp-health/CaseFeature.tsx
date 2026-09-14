import Link from "next/link";
import { Arrow } from "../../components";
import { card } from "./copy";

export function MtpCaseFeature() {
  return (
    <article className="case-feature">
      <img
        src="/work/mtp-health/clinic-consult.jpg"
        alt="MTP Health clinician consulting with a patient beside a knee model"
      />
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
        <Link href="/work/mtp-health">
          {card.cta} <Arrow />
        </Link>
      </div>
    </article>
  );
}
