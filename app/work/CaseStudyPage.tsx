import { BriefCase } from "./BriefCase";
import { briefs } from "./briefs";
import type { CaseStudy } from "./types";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const brief = briefs[study.slug];
  if (!brief) return null;
  return <BriefCase brief={brief} />;
}
