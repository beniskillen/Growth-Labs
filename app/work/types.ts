export type CaseStudy = {
  slug: string;
  meta: { title: string; description: string };
  card: {
    eyebrow: string;
    title: string;
    oneLiner: string;
    proof: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    lead: string;
    proof: readonly (readonly [string, string])[];
    panelKicker: string;
    panelStat: string;
    panelLabel: string;
    caption: string;
  };
  snapshot: {
    caption: string;
    rows: readonly { metric: string; before: string; after: string }[];
  };
  challenge: {
    eyebrow: string;
    title: string;
    copy: readonly string[];
    bullets: readonly string[];
  };
  diagnosis: {
    title: string;
    copy: string;
    rule: string;
  };
  leaks: readonly {
    number: string;
    title: string;
    body: string;
    metric: string;
  }[];
  shift: string;
  categoryLayers: readonly (readonly [string, string])[];
  thesis: { eyebrow: string; title: string };
  processIntro: string;
  moves: readonly {
    code: string;
    step: string;
    title: string;
    copy: readonly string[];
  }[];
  quote: string;
  comparisonLabel: string;
  comparisonHeaders: readonly [string, string];
  comparison: readonly (readonly [string, string, string])[];
  resultsTitle: string;
  results: readonly string[];
  now: {
    eyebrow: string;
    title: string;
    intro: string;
    copy: readonly string[];
    facts: readonly (readonly [string, string])[];
  };
  close: { title: string; copy: string };
  pathway: {
    aria: string;
    steps: readonly (readonly [string, string, readonly string[]])[];
  };
};
