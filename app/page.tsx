import type { ReactNode } from "react";
import {
  AuditButton,
  Eyebrow,
  SectionHeading,
  SiteFrame,
  TrustBar,
} from "./components";
import { DualFunnel, LeakSchematic } from "./offer/diagrams";
import OfferAtom from "./offer/OfferAtom";
import VslPlayer from "./offer/VslPlayer";
import { MtpCaseFeature } from "./work/mtp-health/CaseFeature";
import { illustrationNumbersNote } from "./work/mtp-health/copy";

export const metadata = {
  title: "Category King System",
  description:
    "Add $10,000 to your bottom line in 30 days. Or I work for free until we do.",
};

const leaks = [
  {
    number: "01",
    title: "Advertising leak",
    body: "Not enough actual sales conversations with the right people → hundreds of warm contacts we’ve never asked for anything → Impressions for your core offer under 100 p/d: Put simply, your business isn’t advertising enough.",
    metric: "Impressions under 100 p/d",
  },
  {
    number: "02",
    title: "Interest leak",
    body: "You are letting the right people know about what you do. But no one really cares → CTR under 1.5%: Put simply your offer isn't attractive.",
    metric: "CTR under 1.5%",
  },
  {
    number: "03",
    title: "Opt In leak",
    body: "People express interest, but they never take the action you want them to → Opt-in under 2%: perceived value not matching the action needed. Most business owners are asking for s#x on the first date. We fix this by respecting the stage your customer is at & serving them something that will help them build the trust needed to commit to you further.",
    metric: "Opt-in under 2%",
  },
  {
    number: "04",
    title: "Sales action leak",
    body: "If you are one of the few businesses to actually get consistent bookings for your primary conversion mechanism but you have a very low conversion % then this is where your offer becomes crucial → Opt-in to customer under 10%: value to purchase not matching desire",
    metric: "Opt-in to customer under 10%",
  },
  {
    number: "05",
    title: "LTV leak",
    body: "If it’s common for clients to only buy once and then disappear, there’s a pretty fair chance you don’t really understand the depths of the problems your customer faces → LTV:CAC under 3: the solution here is to focus in depth on the full journey of your customer, understanding ALL of their pains & desires over a long term horizon. Here we focus not only on solving their immediate problems, but also the problems they don’t know they have.",
    metric: "LTV:CAC under 3",
  },
];

const numberChecks = [
  "Impressions under 100 p/d → not advertising enough",
  "CTR under 1.5% → offer isn't attractive",
  "Opt-in under 2% → perceived value not matching the action needed from the prospect",
  "Opt-in to customer under 10% → perceived value to purchase not matching the prospect's desire",
  "LTV:CAC under 3 → customer leakage along the lifecycle, or poor fundamentals upstream making marketing too expensive",
];

const process = [
  {
    code: "01",
    title: "Get clear on what's really going on",
    copy: "We pull your real numbers: impressions, CTR, opt-in, opt-in to customer, LTV:CAC. We compare each to the benchmarks. That names your single biggest constraint, and whether the problem is demand or conversion. If it's conversion, we don't run this yet.",
  },
  {
    code: "02",
    week: "Week 1",
    title: "Unplug the constraint and test on people you already own",
    copy: "Using the step one data, we rework the offer and take the highest leverage action. Then we test it against your existing audience. No new traffic. No new spend. A sharper offer in front of people who already know you.",
  },
  {
    code: "03",
    week: "Week 1–2",
    title: "Build the Rule of 100 while the test runs",
    copy: "Using the early data, we shape a hyper-specific offer for a hyper-specific audience, and write the campaign around it. Week one is about building the new offer, the niche offer hypothesis and the category king hypothesis. Week two takes that hypothesis out against colder markets through the Rule of 100 (finding a scale channel where your audience lives), and we track how people respond.",
  },
  {
    code: "04",
    week: "After 30–50 conversations",
    title: "Read the conversations and iterate",
    copy: "Once we have 30 to 50 conversations in, we analyse what the response actually says. The data decides the next move, and we keep iterating from there.",
  },
  {
    code: "BONUS",
    title: "get your time back",
    copy: "During week one we find the consistent workflows that can be automated, and install them. Fast wins for leverage, so you get as much time back as possible from day one.",
  },
  {
    code: "THEN",
    title: "keep what works and scale it",
    copy: "Once the Rule of 100 is proven, we take the best of what's already working, keep improving it, and build the consistent marketing thesis that lets it scale.",
  },
];

const comparison: [string, ReactNode, ReactNode][] = [
  [
    "Core Offering",
    "Sessions sold one by one, generic positioning, each treatment journey bespoke.",
    "Signature outcome program in one owned category, with packages pre sold in advance.",
  ],
  [
    "Monthly Revenue (at 1,000 clicks/month)",
    "$150 (1 customer × typical entry of $150)",
    "$30,000 (30 customers × $1,000)",
  ],
  [
    "MRR",
    "$0 (one-off sessions, no recurring commitments)",
    "$4,500 (15 of 30 retained × $300/mo membership layer)",
  ],
  [
    "ARR (at 1,000 clicks/month)",
    "$0 (no recurring revenue — MRR × 12 = 0)",
    "$54,000 (MRR $4,500 × 12)",
  ],
  [
    "Ad spend (at $50 CPM, 1,000 clicks)",
    "$3,333 (66,667 impressions needed at 1.5% CTR)",
    "$1,667 (33,333 impressions needed at 3% CTR)",
  ],
  ["Click-through rate", "1.5%", "3%"],
  ["On-page conversion rate", "1%", "10%"],
  ["Result per 1,000 clicks", "10 opt-ins → 1 customer", "100 opt-ins → 30 customers"],
  ["Sales conversion rate", "10%", "30%"],
  ["Initial cash collected", "$2 to $300 (typical entry ~$150)", "$1,000"],
  ["30-day cash per customer", "~$150", "~$1,000"],
  ["Average 12 month lifetime value (LTV)", "~$500", "~$5,000"],
  [
    "Refund / complaint rate",
    "5% (erodes the cash in, no breathing room)",
    "5% (Despite some misses with our offer, our increased conversions allow plenty of breathing room)",
  ],
  [
    "Customer acquisition cost (CAC)",
    <>~$3,333 — higher than 30-day cash <strong>and</strong> higher than LTV</>,
    "~$56 — lower than the 30-day cash from that customer",
  ],
  [
    "Scales on cold traffic and paid ads?",
    <><strong>No.</strong> Every bought customer loses money</>,
    <><strong>Yes.</strong> The customer pays for themselves inside 30 days</>,
  ],
  [
    "Founder mindset",
    "Ads don’t work. Business is a grind.",
    "I can scale as much as I want. My customers get great results.",
  ],
  [
    "Annual revenue (at 1,000 clicks/month, × 12)",
    "$1,800",
    "$360,000",
  ],
  [
    "Annual revenue difference",
    "—",
    "+$358,200 a year vs the standard offer",
  ],
];

function StrategyButton() {
  return <AuditButton>BOOK A STRATEGY SESSION</AuditButton>;
}

export default function OfferPage() {
  return (
    <SiteFrame conversion>
      <section className="offer-hero grid-bg">
        <div className="offer-hero-copy">
          <Eyebrow>Become a true CEO | Category King System</Eyebrow>
          <h1>
            Add <em>$10,000 to your bottom line</em> in 30 days.{" "}
            <span>Or I work for free until we do.</span>
          </h1>
          <p>
            Marketing that puts its money where its mouth is. We install a proven system for creating consistent monthly profit, run it until it is installed in your business, and only collect a fee when we hit your target.
          </p>
          <div className="button-row">
            <StrategyButton />
          </div>
        </div>
        <aside className="offer-hero-vsl">
          <VslPlayer />
        </aside>
        <div className="hero-proof offer-proof" aria-label="Category King proof">
          <span><strong>30 days</strong> to $10,000 on your bottom line</span>
          <span><strong>$0</strong> until we hit it</span>
          <span><strong>$10M +</strong> Sales generated to date.</span>
          <span><strong>100%</strong> everything we build stays yours</span>
        </div>
      </section>

      <TrustBar caption="BRANDS I'VE WORKED WITH ACROSS 7+ INDUSTRIES" />

      <section className="section offer-section">
        <SectionHeading
          number="01"
          eyebrow="THE THESIS"
          title="Why consistent monthly profit eludes most businesses."
        />
        <div className="offer-prose">
          <p>Business is about solving problems for people.</p>
          <p>The more painful that problem, the more valuable it is for us to solve it.</p>
          <p>
            Yet in over 1000+ conversations with business owners, I find that the majority of them aren’t selling solutions. They’re selling raw materials.
          </p>
          <p>Quality. Certificates. Deliverables.</p>
        </div>
        <div className="offer-chips" aria-hidden="true">
          <span>Quality</span>
          <span>Certificates</span>
          <span>Deliverables</span>
        </div>
        <div className="offer-prose">
          <p>And for those that do sell solutions, they simply sell to the first problem and stop there.</p>
          <p>
            The real issue here is that they’re afraid to be specific. They don’t know how to truly listen to their market & because of this their customer acquisition is inconsistent and their client value is less than the cost of buying a customer.
          </p>
          <p>
            This system flips that on it’s head. It requires business owners to take a quantum leap in their thinking, taking laser focus on the customers they can serve best to provide solutions to problems they don&apos;t even know they have.
          </p>
          <p>Becoming a category king is about becoming a true expert in your customers, instead of just your service.</p>
          <p>This is the shift from practitioner to entrepreneur.</p>
        </div>
        <blockquote className="offer-quote">
          This is the shift from practitioner to entrepreneur.
        </blockquote>
        <div className="offer-prose">
          <p>And it’s the shift that allows for you to create the business you dreamt of when you started this whole journey.</p>
        </div>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="02"
          eyebrow="THE DIAGNOSIS"
          title="You are not under-marketed. You are under-measured."
        />
        <div className="offer-prose">
          <p>Good months, bad months. Cash flow that swings. No idea where the next client comes from.</p>
          <p>So you buy more attention. More ads. More content. More noise.</p>
        </div>
        <blockquote className="offer-quote offer-quote-paper">
          “If your data shows that your offer hasn’t converted before, why would doing more of the same produce any better?”
        </blockquote>
        <div className="offer-definition">
          <span className="card-code">INTRODUCING</span>
          <h3>Introducing High ROI marketing</h3>
          <div className="offer-prose">
            <p>Before we spend a dollar, answer one question: how will every dollar we spend produce a return? Floor of 3:1. Gold standard is 10:1.</p>
            <p>After 1000+ founder sales conversations across growth roles, I can say for certain that less than 1% truly have their metrics and what drives them clear.</p>
            <p>This is how to take a first principles approach. Get clear on the metrics. Measure against a baseline. Make an observation. Test an explanation. Use the result to decide what comes next.</p>
          </div>
        </div>
        <p className="offer-lede">The five leaks. Each maps to a number you can measure.</p>
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
          Do not scale until the leaks prove that our investment can hold
        </p>
        <div className="offer-scoreboard">
          <p className="offer-lede">
            Know your numbers. If you&apos;re running a business and executing marketing but you&apos;re not hitting these, there&apos;s significant room for improvement:
          </p>
          <ol>
            {numberChecks.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="offer-prose">
          <p>
            <strong>Every piece of communication with the business should further people along a clear journey.</strong> Marketing works. The reason most business owners aren&apos;t great at it is that they don&apos;t know how to really listen to their market.
          </p>
        </div>
      </section>

      <section className="section split-section grid-bg offer-shift">
        <div>
          <Eyebrow>THE SHIFT</Eyebrow>
          <h2>This is a system that helps businesses truly master their market by becoming an expert in a specific category only they can own.</h2>
        </div>
        <div className="offer-prose">
          <p>For most owners, marketing is a burst. A post here. An ad there. Hope in between.</p>
          <p>Becoming a Category King requires a focus on first principles. It asks us to zoom out & take a look at the signals our market is leaving us. By starting with our market first, we can build a business that is truly the best in it’s market.</p>
        </div>
      </section>
      <p className="offer-warning">But it’s not easy. This is only for owners who want to change. Not marginal gains.</p>

      <section className="section offer-section">
        <header className="section-heading">
          <div className="section-index">§04</div>
          <div>
            <Eyebrow>BECOMING THE CEO</Eyebrow>
          </div>
        </header>
        <div className="home-about-grid">
          <figure className="home-about-portrait">
            <img src="/ben-professional.jpg" alt="Ben Killen" />
            <figcaption>
              <span>BEN KILLEN / FOUNDER</span>
              <span>FRACTIONAL GROWTH EXECUTIVE</span>
            </figcaption>
          </figure>
          <div className="offer-prose">
            <p>The primary purpose of this offer is to help business owners truly operationalise themselves out of their business.</p>
            <p>It’s my firm belief that as business owners, if we truly want to have our business achieve it’s full potential we should NEVER abdicate away our marketing. Marketing is the act of listening to our customers, building a solution to their biggest problems, with our expertise.</p>
            <p>My work is about helping business owners make the shift to thinking like the true innovators that have come before. The people who have shaped markets by using their expertise to truly listen to what people want & create a solution to their biggest problems.</p>
            <p>As a head of growth in over 10 different industries over the last decade this has been my obsession for hundreds of clients.</p>
          </div>
        </div>
        <h2 className="offer-statement">
          You are the biggest asset your business has. It’s time to take your expertise & apply it to your market, not just your business”.
        </h2>
        <blockquote className="offer-quote">
          “All business strategy is really just pricing strategy”
        </blockquote>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="05"
          eyebrow="THE PROCESS"
          title="The Category King Process."
          copy="A first principles approach to hitting consistent monthly profits & leading your own category - starting with the quickest path to early sales."
        />
        <ol className="offer-rail">
          {process.map((step) => (
            <li key={step.code}>
              <span>{step.code}</span>
              <div>
                {step.week ? <em>{step.week}</em> : null}
                <h3>
                  {step.code === "BONUS" ? "Week one bonus — " : step.code === "THEN" ? "Then — " : `Step ${step.code} — `}
                  {step.title}
                </h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="offer-prose">
          <p>Every plan is customised to where your business is today. If you don&apos;t have consistent impressions or clarity on lifetime value yet, this is harder, and you&apos;ll need an offer that can scale.</p>
        </div>
        <div className="offer-example" id="category-example">
          <Eyebrow>WHY A CATEGORY KING OFFER SCALES</Eyebrow>
          <h3>An Illustrated example of the difference a Category King Offer Makes — WHY A CATEGORY KING OFFER SCALES</h3>
          <p>
            <strong>A worked example: allied health.</strong> The same clinical skill sold two ways. One runs a standard service offer. The other owns a category. The only difference is the offer you build and the audience you target.
          </p>
          <DualFunnel />
          <p className="offer-caveat offer-illustration-note">
            <strong>Note:</strong> {illustrationNumbersNote}
          </p>
          <div className="offer-compare-wrap">
            <table className="offer-compare">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Standard service offer</th>
                  <th scope="col">Category King offer</th>
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
          <div className="offer-prose">
            <p>
              <strong>The read:</strong> the standard offer can only work on warm, cheap, hand-held traffic, because its customer acquisition cost is higher than what the customer pays in 30 days <strong>and</strong> higher than their lifetime value. The Category King offer generates enough 30-day cash to cover acquisition, so it can scale on cold traffic and paid ads.
            </p>
          </div>
        </div>
      </section>

      <section className="section offer-section" id="work">
        <SectionHeading
          number="06"
          eyebrow="FLAGSHIP CASE"
          title="The real allied health example."
          copy="Same clinicians. A named category. A system that could hold paid traffic."
        />
        <MtpCaseFeature />
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="07"
          eyebrow="THE OFFER"
          title="$10,000 to your bottom line in 30 days. Or you don't pay."
        />
        <div className="offer-spec">
          <div>
            <span className="card-code">What you get</span>
            <div className="output-grid offer-get">
              {[
                "Tailored Category King system installed and run for a minimum of 30 days within your business. We’ll either use your tools OR recommend the best tools available to optimise for scale based on your specific numbers.",
                "Weekly WIP meetings & direct access to me as your fractional growth executive + my business resource & IP.",
                "Dashboard updated weekly with key insights reported on to suggest action.",
                "All IP: code, copy assets etc. stays yours regardless of whether we hit our target or not.",
              ].map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="card-code">What it costs: All figures in USD.</span>
            <div className="offer-costs">
              <article>
                <strong>$0</strong>
                <p>until we hit $10,000 from agreed channels (TBD on call pending your current acquisitions).</p>
              </article>
              <article>
                <strong>$5000</strong>
                <p>initial payment on success, to cover startup investment of time into building the system. Most of the hard work is done in the first 30 days.</p>
              </article>
              <article>
                <strong>$300 p/m</strong>
                <p>Ongoing maintenance of the system & work with my time TBD pending the size of our success. Base retainer $300 p/m for consulting & WIP reporting.</p>
              </article>
              <article>
                <strong>&lt; $99 USD p/m</strong>
                <p>Software costs TBD billed direct by the platform - In most cases costs &lt; $99 USD p/m.</p>
              </article>
            </div>
          </div>
        </div>
        <div className="button-row">
          <StrategyButton />
        </div>
      </section>

      <section className="offer-guarantee grid-bg">
        <span className="section-index">§08</span>
        <Eyebrow>THE GUARANTEE</Eyebrow>
        <h2>Miss, and you owe nothing.</h2>
        <p>
          We do the rest. If we miss $10,000 in 30 days, we’ll continue working with you until we hit our target. No labour invoice. No hidden fees. We’ll also give you everything we built & work with you until you hit your target.
        </p>
      </section>

      <section className="section offer-section">
        <SectionHeading
          number="09"
          eyebrow="WHO IT'S FOR"
          title="Category kings only. Not marginal gains."
        />
        <div className="offer-fit">
          <article>
            <span className="card-code">Apply if</span>
            <ul>
              <li>Founder-led business doing <strong>$10k to $100k a month</strong></li>
              <li>Ready to systemise, not just try harder</li>
            </ul>
          </article>
          <article>
            <span className="card-code">Do not apply if</span>
            <ul>
              <li>Pre-revenue</li>
              <li>Want marginal gains</li>
              <li>Not ready to commit to a process</li>
              <li>Want someone to run your business for you</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section offer-section">
        <header className="section-heading">
          <div className="section-index">§10</div>
          <div>
            <Eyebrow>WHO&apos;S BEHIND IT</Eyebrow>
          </div>
        </header>
        <div className="home-about-grid">
          <figure className="home-about-portrait">
            <img src="/ben-professional.jpg" alt="Ben Killen presenting at Bybit" />
            <figcaption>
              <span>BEN KILLEN</span>
              <span>10+ YEARS / SALES-DRIVEN MARKETING</span>
            </figcaption>
          </figure>
          <div className="offer-prose">
            <p>
              <strong>Ben Killen.</strong> 10+ years in sales-driven marketing. Fractional growth executive across agency, coaching, allied health, fitness, recruitment, real estate, crypto, consulting & E-Commerce niches.
            </p>
            <blockquote className="offer-quote">
              <span className="card-code">Position</span>
              Marketing is not buying attention. It&apos;s turning the right attention into profitable customers through a system you can measure.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <header className="section-heading">
          <div className="section-index">§11</div>
          <div>
            <Eyebrow>FAQ</Eyebrow>
          </div>
        </header>
        <div className="faq-list">
          <article>
            <h3>What exactly do I pay?</h3>
            <p>Nothing up front. Nothing at all unless we add $10,000 on terms as agreed. Then a single success fee of $5000 upon hitting the target.</p>
          </article>
          <article>
            <h3>Do you do ads?</h3>
            <p>Ads can be something we use if the metrics show that we can achieve scale. The benefit of high ROI marketing is that we can start with $10-30 per day to get all of the data we need.</p>
          </article>
        </div>
      </section>

      <section className="offer-final-h2 grid-bg">
        <h2>Add $10,000 to your bottom line in 30 days. Or I’ll work for free until I do.</h2>
      </section>

      <OfferAtom />
    </SiteFrame>
  );
}
