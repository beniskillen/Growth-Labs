export const trustBrands = [
  { name: "Bybit", src: "/trustbar/bybit.svg" },
  { name: "Your Corner 360", src: "/trustbar/your-corner-360.svg" },
  { name: "Fortem Media", src: "/trustbar/fortem-media.png" },
  {
    name: "The Collective Solution",
    src: "/trustbar/the-collective-solution.png",
  },
  { name: "3x3 Australia", src: "/trustbar/3x3-australia.svg" },
  { name: "MTP Health", src: "/trustbar/mtp-health.svg" },
  { name: "Juicy Festival", src: "/trustbar/juicy-festival.svg" },
] as const;

export const innerShell = [
  {
    id: "impressions",
    label: "Impressions",
    shell: 1 as const,
    theta: -Math.PI / 2,
    phi: 0.1,
    speed: 0.22,
    question: "Are enough right-fit people seeing the offer?",
    layer: "ATTENTION",
  },
  {
    id: "uvs",
    label: "UV's",
    shell: 1 as const,
    theta: Math.PI,
    phi: -0.16,
    speed: 0.18,
    question: "Is unique demand actually landing on the property?",
    layer: "ATTENTION",
  },
  {
    id: "ctr",
    label: "CTR %",
    shell: 1 as const,
    theta: Math.PI * 0.28,
    phi: 0.2,
    speed: 0.26,
    question: "Does the message turn attention into intent?",
    layer: "ATTENTION",
  },
] as const;

export const outerShell = [
  {
    id: "cac",
    label: "CAC",
    shell: 2 as const,
    theta: Math.PI * 0.92,
    phi: 0.08,
    speed: -0.14,
    question: "What does it really cost to acquire a customer?",
    layer: "ECONOMICS",
  },
  {
    id: "ltv",
    label: "LTV",
    shell: 2 as const,
    theta: Math.PI / 2,
    phi: -0.14,
    speed: -0.11,
    question: "What is a customer worth after the first purchase?",
    layer: "ECONOMICS",
  },
  {
    id: "cvr",
    label: "Page CVR %",
    shell: 2 as const,
    theta: 0.06,
    phi: 0.18,
    speed: -0.16,
    question: "Does the path convert qualified intent into a client?",
    layer: "ECONOMICS",
  },
] as const;

export const valenceMetrics = [...innerShell, ...outerShell];

export type ValenceMetricId = (typeof valenceMetrics)[number]["id"] | "tam" | "revenue";

export const services = [
  {
    code: "01 / B2C",
    href: "/#b2c",
    id: "b2c",
    title: "B2C marketing",
    fit: "Consumer, creator and community brands.",
    copy: "Funnels, campaigns and activation systems measured against CAC, conversion and lifetime value — not vanity reach.",
  },
  {
    code: "02 / B2B",
    href: "/#b2b",
    id: "b2b",
    title: "B2B marketing",
    fit: "Founder-led service and pipeline businesses.",
    copy: "Warm-graph activation, outbound, CRM and follow-up so attention becomes booked conversations on a known scoreboard.",
  },
  {
    code: "03 / CONSULTING",
    href: "/#consulting",
    id: "consulting",
    title: "Growth consulting",
    fit: "Operators who need the constraint named.",
    copy: "First-principles diagnosis: buyer, offer, unit economics, then the one system that fixes the leak before spend scales.",
  },
  {
    code: "04 / ENGINEERING",
    href: "/solutions",
    id: "engineering",
    title: "Custom engineering",
    fit: "Ambitious teams with a bigger build.",
    copy: "Conversion sites, AI operating layers and custom systems — scoped by Growth Labs and delivered with a vetted bench.",
  },
] as const;

export const partners = [
  {
    code: "FLAGSHIP PARTNER",
    name: "AI Powered",
    href: "https://www.aipowered.xyz/",
    lane: "AI capability / programmes",
    copy: "The training and systems partner for teams that need people to become AI-powered — not AI-replaced. Same operator network. Different door.",
    proof: "Claude Cohort · founder programmes · organisation accelerators",
  },
  {
    code: "TALENT",
    name: "Jobited",
    href: "https://jobited.com",
    lane: "Engineering hiring",
    copy: "Frontier engineering recruitment with proof-of-work, not keyword matching. Used when a build needs the right technical seat.",
    proof: "Hiring intelligence · prospecting · community-to-hire",
  },
  {
    code: "OPERATING LAYER",
    name: "Corvan AI",
    href: "https://corvanai.com",
    lane: "AI chief of staff",
    copy: "Comms triage, memory and meeting-to-task installed as the internal operating layer once the revenue path is proven.",
    proof: "Unified inbox · knowledge graph · operator leverage",
  },
  {
    code: "DELIVERY BENCH",
    name: "Specialist studios",
    href: "/solutions",
    lane: "Web, ads, content",
    copy: "Conversion websites, paid acquisition, campaign creative and content engines — staffed from partners already used on live client work.",
    proof: "Faustas · Spectre · Fillmore · content bench",
  },
] as const;
