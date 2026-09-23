import type { Metadata } from "next";
import { Arrow, AuditButton, PageHero, SiteFrame } from "../components";
import { SiteLink } from "../SiteLink";
import { studies } from "./catalog";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "The Category King work, in my voice. MTP Health is the flagship. The rest are the same read on other businesses.",
};

export default function WorkIndex() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="WORK"
        title={
          <>
            The same read. <em>Different businesses.</em>
          </>
        }
        copy="MTP Health is the one I point at first. These are the others, written the same way: the real constraint, the category, the number I will actually stand behind."
        action={<AuditButton>BOOK A STRATEGY SESSION</AuditButton>}
      />
      <section className="section offer-section">
        <div className="case-grid">
          {studies.map((study) => (
            <article className="case-card" key={study.href}>
              <div className="case-card-top">
                <span>{study.eyebrow}</span>
              </div>
              <h3>{study.title}</h3>
              <p>{study.oneLiner}</p>
              <div className="case-proof">
                <span>PROOF</span>
                <strong>{study.proof}</strong>
              </div>
              <SiteLink href={study.href}>
                Read the case study <Arrow />
              </SiteLink>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
