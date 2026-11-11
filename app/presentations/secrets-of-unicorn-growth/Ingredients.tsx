import type { ReactNode } from "react";

const ingredients = [
  [
    "Product",
    "A repeatable process for delivering value for a customer, preferably around solving a clearly defined problem.",
  ],
  [
    "Ideal customer",
    "A clear type of person that is most likely to want to pay to have their clearly defined problem solved.",
  ],
  [
    "Funnel",
    "A streamlined process of breaking the customer’s problem into the critical stages of awareness, consideration, evaluation, purchase, ascension and advocacy, in order to build trust to the point where as much value can be delivered and money can be exchanged.",
  ],
  [
    "Primary channel",
    "One core discovery channel that leads the ideal customer through the funnel.",
  ],
  [
    "Irresistible offer",
    "Something that cuts through the noise of market sophistication and is instantly worthy of the scarce resource of someone’s attention.",
  ],
] as const;

type Node = { text: string; rate?: boolean };

const engines: {
  engine: string;
  title: string;
  rate: string;
  banner?: string;
  nodes: Node[];
}[] = [
  {
    engine: "Acquisition engine #1",
    title: "Awareness → Consideration",
    rate: "1,500 reached · 1% click",
    nodes: [
      { text: "Channel" },
      { text: "100 / day", rate: true },
      { text: "Impressions" },
      { text: "2.5%", rate: true },
      { text: "Avg. CTR %" },
    ],
  },
  {
    engine: "Acquisition engine #2",
    title: "Consideration → Evaluation",
    rate: "6% join · $30",
    nodes: [
      { text: "Ideal customer" },
      { text: "5%", rate: true },
      { text: "Copywriting" },
      { text: "10%", rate: true },
      { text: "CTA" },
    ],
  },
  {
    engine: "Acquisition engine #3",
    title: "Evaluation → Purchase (i.e. Close %)",
    rate: "30 people · 20% book · 80% held",
    nodes: [
      { text: "Two mechanisms (i.e. Call / Course / Lead magnet)" },
      { text: "Nurturing content / email (intermediary stage)" },
      { text: "Qualification filter" },
      { text: "Conversation point (i.e. sales call, close CRM)" },
      { text: "Consult / discovery process" },
    ],
  },
  {
    engine: "Fulfilment engine #4",
    title: "Purchase → Ascension (i.e. LTV)",
    rate: "20% close · $2,000 in 30 days",
    banner: "Solving + finding new problems",
    nodes: [
      { text: "Onboarding" },
      { text: "80-day check-in", rate: true },
      { text: "Activation point 1" },
      { text: "NPS / problem loop" },
    ],
  },
  {
    engine: "Fulfilment engine #5",
    title: "Ascension → Advocacy (i.e. Referral rate)",
    rate: "1.1+ referrals · target above 20%",
    nodes: [
      { text: "8 NPS = review & referral | Low NPS = problem solving & delight" },
      { text: "8+ NPS", rate: true },
      { text: "Affiliate mechanism" },
      { text: "1.1+ referrals per customer", rate: true },
      { text: "Referrer program + advocate mechanism" },
    ],
  },
];

export function CategoryKing({
  proof = true,
  exampleLtv = false,
  title = "The equation.",
  lead,
  trackTitle,
  trackLead,
}: {
  proof?: boolean;
  exampleLtv?: boolean;
  title?: ReactNode;
  lead?: ReactNode;
  trackTitle?: ReactNode;
  trackLead?: ReactNode;
} = {}) {
  return (
    <section className="king" aria-labelledby="king-title">
      <header>
        <p className="deck-kicker">
          <span>Category King</span>
          Raw ingredients
        </p>
        <h3 id="king-title">{title}</h3>
        {lead ? <p className="king-lead">{lead}</p> : null}
      </header>

      <p className="king-eq" role="math" aria-label="A Category King equals product times ideal customer times funnel times primary channel times irresistible offer">
        <span>Category King</span>
        <span className="king-op">=</span>
        {ingredients.map(([name], index) => (
          <span key={name} className="king-term">
            {index > 0 ? <span className="king-op">×</span> : null}
            {name}
          </span>
        ))}
      </p>

      <dl className="king-defs">
        {ingredients.map(([name, definition]) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>{definition}</dd>
          </div>
        ))}
      </dl>

      {trackTitle ? <h3 className="king-track-title">{trackTitle}</h3> : null}
      {trackLead ? <p className="king-track-lead">{trackLead}</p> : null}

      <div className="king-bleed">
        <p className="king-state">Current state</p>
        <div className="king-track">
          <p className="king-measure">The entire process of growth is measuring value delivery.</p>
          {exampleLtv ? (
            <p className="king-ltv-note">
              The lifetime values in this example, including a $7,000 LTV and
              $2,000 collected in 30 days, are an example of higher-LTV
              businesses.
            </p>
          ) : null}
          <div className="king-scroll" tabIndex={0} aria-label="Category King flow, scroll sideways">
            {engines.map((engine) => (
              <article key={engine.engine} className="king-engine">
                {engine.banner ? <p className="king-banner">{engine.banner}</p> : <p className="king-banner king-banner-spacer" aria-hidden="true" />}
                <p className="king-engine-name">{engine.engine}</p>
                <h4>{engine.title}</h4>
                <p className="king-rate">{engine.rate}</p>
                <ol>
                  {engine.nodes.map((node) => (
                    <li key={node.text} data-rate={node.rate ? "true" : undefined}>
                      {node.text}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
            <article className="king-engine king-stars">
              <p className="king-banner king-banner-spacer" aria-hidden="true" />
              <h4>North stars</h4>
              <ul>
                <li>LTV:CAC · $7,000 · 33:1</li>
                <li>30 day cash · $2,000</li>
              </ul>
            </article>
          </div>
        </div>
        <p className="king-state">Desired state</p>
      </div>

      {proof ? (
      <figure className="king-poc">
        <p className="deck-kicker">
          <span>Proof of concept</span>
          A clear yes or no
        </p>
        <p>
          Proof of concept is the point where at least 30 people get through to the
          evaluation stage. That takes about 1,500 people reached organically with the
          irresistible offer.
        </p>
        <p className="king-objective">
          <span>Proof of concept objective</span>
          Prove our ability to turn attention into capital.
        </p>
        <p className="king-poc-sum" aria-label="1,500 people reached, modelled on a 2.5 percent click-through, leads to 30 people at evaluation">
          <span>1,500 reached</span>
          <span className="king-op">→</span>
          <span>30 at evaluation</span>
        </p>
        <p className="king-ctr">
          The 1,500 is modelled on a 2.5% click-through. That means 2.5% of people
          will be interested in taking a look from the initial outreach, about 38 people.
        </p>
        <div className="king-justify">
          <p>Metrics that justify the proof</p>
          <ul>
            <li>
              <strong>20% or better</strong> on the key sales action, the close. This is the minimum.
            </li>
            <li>
              Preferably the supporting rates above: 6% join at $30, 20% book, 80% of
              bookings held, $2,000 collected in the first 30 days, then $1,000 a month,
              a $7,000 lifetime value at 33:1, and a referral rate above 20%.
            </li>
            <li>
              <strong>At least $3,000 in capital</strong> for a proper advertising
              experiment, then a scale to colder audiences. The sum follows the $7,000
              lifetime value and the cash this new offer collects.
            </li>
          </ul>
        </div>
      </figure>
      ) : null}
    </section>
  );
}
