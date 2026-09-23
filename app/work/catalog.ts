import { card as mtp } from "./mtp-health/copy";
import { study as bybit } from "./bybit/copy";
import { study as ethos } from "./ethos/copy";
import { study as fortem } from "./fortem/copy";
import { study as futurealty } from "./futurealty/copy";
import { study as introvert } from "./introvert/copy";
import { study as investors } from "./investors-agency/copy";
import { study as jobited } from "./jobited/copy";
import { study as juicy } from "./juicy/copy";
import { study as scala } from "./scala-lane/copy";
import { study as collective } from "./the-collective/copy";
import { study as corner } from "./your-corner-360/copy";
import type { CaseStudy } from "./types";

export type StudyLink = {
  href: string;
  eyebrow: string;
  title: string;
  oneLiner: string;
  proof: string;
};

function fromStudy(study: CaseStudy): StudyLink {
  return {
    href: `/work/${study.slug}`,
    eyebrow: study.card.eyebrow,
    title: study.card.title,
    oneLiner: study.card.oneLiner,
    proof: study.card.proof,
  };
}

export const studies: StudyLink[] = [
  {
    href: "/work/mtp-health",
    eyebrow: mtp.eyebrow,
    title: mtp.title,
    oneLiner: mtp.oneLiner,
    proof: mtp.proof,
  },
  fromStudy(fortem),
  fromStudy(bybit),
  fromStudy(corner),
  fromStudy(ethos),
  fromStudy(juicy),
  fromStudy(scala),
  fromStudy(introvert),
  fromStudy(investors),
  fromStudy(futurealty),
  fromStudy(jobited),
  fromStudy(collective),
];

export const moreStudies = studies.filter((study) => study.href !== "/work/mtp-health");
