import { AuditButton, Eyebrow, SiteFrame, TrustBar } from "../components";
import { SiteLink } from "../SiteLink";
import "./guarantee.css";

const LOOM = "https://www.loom.com/embed/3a9f9fc4977c40dba0c92f7dc9e059e5";
const YOUTUBE = "https://www.youtube.com/embed/BtrYQ4xf9rA";
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const PROCESS = `${base}/visuals/v/tactic-vs-strategy.html?theme=dark&bare=1`;

const LINKEDIN = "https://www.linkedin.com/in/benjamin-grant-killen/";

const faces = [
  ["/work/mtp-health/clinic-floor.jpg", "MTP Health"],
  ["/work/fortem/headshot.jpg", "Fortem"],
  ["/work/ethos/floor.jpg", "Ethos"],
] as const;

const results = [
  {
    href: "/work/mtp-health",
    image: "/work/mtp-health/clinic-floor.jpg",
    alt: "MTP Health clinic floor",
    index: "01",
    name: "MTP Health",
    niche: "Allied health",
    metric: "+300% customer LTV · 3 new clinics",
    support: "Paid Advertising · Funnel Design · Fractional Head of Growth",
    body: "From breaking even to scaling to multiple locations. MTP Health used the Category King process to become a leader in its industry.",
  },
  {
    href: "https://www.fortemmedia.com/",
    external: true,
    image: "/work/fortem/headshot.jpg",
    alt: "Ben Killen in a Fortem shirt",
    focus: "center 20%",
    index: "02",
    name: "FORTEM Media",
    niche: "Creative agency",
    metric: "$1.3M+ sales",
    support: "Sales Strategy · Funnel Design · Paid Advertising",
    body: "As a senior Business Development professional, Ben implemented industry-specific offerings that allowed him to generate over $1.3M in attributable sales as the business became a Category King internationally.",
  },
  {
    href: "https://www.ethosperformance.com.au/ben-killen/",
    external: true,
    image: "/work/ethos/floor.jpg",
    alt: "Coaches on the Ethos Performance floor",
    index: "03",
    name: "Ethos Performance",
    niche: "Combat performance",
    metric: "$80k+ online",
    support: "Funnel build · Offer Design & Implementation",
    body: "The Category King process allowed Ethos Performance to capture its strong traffic and generate an additional 6 figures in high-margin revenue, while building a strong nurturing process for new leads.",
  },
] as const;

const faqs = [
  {
    q: "Who actually does the work?",
    a: "We do. And here's the thing. Everyone says done for you, then hands you a document and disappears. That's not this. Pending the business and its current constraint, Growth Labs implements the work, then manages it ongoing to the scope, to get the result that was agreed. You approve the work and handle the customers it produces. That's the deal.",
  },
  {
    q: "How much time do I have to put in?",
    a: "A few hours a week. Enough to approve the work and follow up the customers. You are not building the page, the list, the ads or the ledger. You bring the business. Ben brings the system.",
  },
  {
    q: "Does this work from a standing start?",
    a: "Your starting point does not decide whether a path can be built. It decides the size of the number that can be written down. One offer, one market, one channel. It does not have to be a course or a community. The buyer is the same either way: someone who has to trust the offer before they pay. If the business cannot hold a written target, the call ends in a smaller test, a diagnostic, or a no.",
  },
  {
    q: "How does the guarantee work? What does “you don't pay” mean?",
    a: "Exactly what it sounds like. We guarantee revenue added on top of what you make now, up to $100k a month, inside 180 days. Your number goes in writing before we start, and it can be lower. Miss it, and you don't pay the service fee. Ads and software stay yours. We offer this because we know marketing works, and we want the clients we work with to trust that we have their best interests in mind, instead of making empty promises. Your number depends on your niche and what you already have in place. We don't guess. We look at the business on the call and tell you. Nothing is in force until it is signed.",
  },
  {
    q: "How long does it take?",
    a: "180 days. Long enough to build the path and read the number in writing. Short enough that you are not locked in forever. What those 180 days look like for your business is mapped on the call. If you want to keep going after that, it is a separate agreement. It does not roll on by itself.",
  },
  {
    q: "How much does it cost?",
    a: "The fee depends on the guarantee you qualify for. You get that number on the call. It is set so the result in writing is worth more than the fee. If that does not hold for your business, the answer is no. Ads, software and other outside costs stay yours. If you need a different structure, that gets worked out on the call.",
  },
  {
    q: "Is that one payment forever, or a subscription?",
    a: "It depends on the scope that fits, and on what you want. Some work is a build with an end. Some is a continuing engagement. Neither starts on its own, and neither is a cut of the business unless you sign for one. A tail, equity or a share exists only in a signed addendum. The default is that none of those apply. The right structure is chosen on the call.",
  },
  {
    q: "What actually happens on the call?",
    a: "No pitch. You talk to Ben. Bring the numbers you have. He looks at the business, shows you what the system would change, and tells you the number that can go in writing. Worst case, you leave knowing the constraint. Best case, you leave with a written target, up to $100k a month, and a remedy. If the business cannot hold it, you get a smaller test, a diagnostic, or a no.",
  },
] as const;

function ScheduleCall() {
  return (
    <div className="g-cta g-wrap">
      <AuditButton arrow={false}>Get a Growth Strategy</AuditButton>
    </div>
  );
}

export default function GuaranteeLanding() {
  return (
    <SiteFrame conversion>
      <article className="guarantee">
        <section className="g-hero">
          <div className="g-wrap">
            <div className="g-proof">
              <div className="g-faces" aria-hidden="true">
                {faces.map(([src]) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    style={
                      src.endsWith("headshot.jpg")
                        ? { objectPosition: "center 18%" }
                        : undefined
                    }
                  />
                ))}
              </div>
              <p>
                Published case work
                <br />
                Health, culture, agencies, performance
              </p>
            </div>
            <Eyebrow>Category King System</Eyebrow>
            <h1>
              Add up to $100k/month to your business in <em>180 days</em> or you
              don&apos;t pay
            </h1>
            <figure className="g-video">
              <div className="g-video-frame">
                <iframe
                  src={LOOM}
                  title="Category King system video"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </figure>
            <p className="g-subhead">
              Schedule a free growth strategy to get this system of
              first-principles-led growth broken down for your business. This
              system will give a clear roadmap to help your business achieve
              guaranteed revenue in 180 days or less by factoring in your
              numbers to put together a growth roadmap.
            </p>
          </div>
        </section>

        <section className="g-block" aria-labelledby="results-heading">
          <div className="g-wrap-wide">
            <header className="g-center">
              <p className="g-kicker g-kicker-center">
                <span>Our results</span>
              </p>
              <h2 id="results-heading">
                Businesses we&apos;ve helped become <em>Category Kings</em>
              </h2>
              <p className="g-lede">
                A series of flagship examples implementing the foundational
                principles of growth to achieve specific objectives and
                measurable results.
              </p>
            </header>
            <div className="g-results">
              {results.map((study) => (
                <SiteLink
                  className="g-card"
                  href={study.href}
                  key={study.href}
                  target={"external" in study ? "_blank" : undefined}
                  rel={"external" in study ? "noreferrer" : undefined}
                >
                  <img
                    src={study.image}
                    alt={study.alt}
                    style={
                      "focus" in study
                        ? { objectPosition: study.focus }
                        : undefined
                    }
                  />
                  <div className="g-card-body">
                    <div className="g-card-top">
                      <span>{study.niche}</span>
                      <span>{study.index}</span>
                    </div>
                    <h3>{study.name}</h3>
                    <p className="g-metric">{study.metric}</p>
                    <p className="g-support">{study.support}</p>
                    <p>{study.body}</p>
                    <span className="g-card-more">Full case study</span>
                  </div>
                </SiteLink>
              ))}
            </div>
            <p className="g-portfolio">
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                Full portfolio and experience
                <span>LinkedIn</span>
              </a>
            </p>
          </div>
        </section>

        <section className="g-block g-cta-band">
          <div className="g-cta g-wrap">
            <h2>Want guaranteed growth for your business?</h2>
            <AuditButton arrow={false}>Get a Growth Strategy</AuditButton>
          </div>
          <TrustBar caption="We've worked with" />
        </section>

        <section className="g-block" aria-labelledby="system-heading">
          <div className="g-wrap">
            <header className="g-center">
              <h2 id="system-heading">
                Not ready to speak to someone? <em>Learn the full system.</em>
              </h2>
              <p className="g-lede">
                Watch the full breakdown of the entire scaling system to
                implement this growth roadmap for yourself.
              </p>
            </header>
            <figure className="g-video">
              <div className="g-video-frame">
                <iframe
                  src={YOUTUBE}
                  title="How Boring Businesses Can Generate an Extra $100k Per Month in 6 Months (Full Course)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption>
                <span>Full course</span>
                <span>Ben Killen</span>
              </figcaption>
            </figure>
            <figure className="g-process">
              <iframe
                src={PROCESS}
                title="The way most owners think about growth goes against the natural laws of the universe"
                loading="lazy"
              />
              <figcaption>
                <span>Illustration, not a forecast</span>
                <span>Same two years · same scale</span>
              </figcaption>
            </figure>
            <div className="g-copy">
              <p>
                The Category King system is the process behind the work on this
                page. One offer. One market. One path, read in money collected.
              </p>
              <p>
                Instead of copying the tactic everyone else is already running,
                every prospect is routed through a path you can actually read.
                The message turns attention into a conversation. The offer turns
                that conversation into a customer. What happens after the first
                purchase is what makes the number compound.
              </p>
              <p>
                Every stage is tracked in cleared cash, so you know what a
                conversation and a customer are worth. A platform screenshot is
                not the number.
              </p>
              <p>
                You approve the offer, the claims and the spend. Growth Labs
                builds and runs the named scope. Decisions follow the data in
                the business, not a guess borrowed from the market.
              </p>
              <p>
                The result is a written roadmap for where the business actually
                sits. Where a guarantee is offered, it is set against that
                scope, and it is confirmed in writing on the back of a growth
                strategy.
              </p>
            </div>
          </div>
          <div className="g-follow">
            <ScheduleCall />
          </div>
        </section>

        <section className="g-block" aria-labelledby="faq-heading">
          <div className="g-wrap">
            <header className="g-center">
              <h2 id="faq-heading">Questions</h2>
              <p className="g-lede">
                Straight answers. Your number, your fee and your remedy are
                written down before anyone starts. The signed paper is the
                contract.
              </p>
            </header>
            <div className="g-faq">
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="g-follow-lg">
            <ScheduleCall />
          </div>
        </section>

        <section className="g-block g-disclaimer" aria-labelledby="disclaimer-heading">
          <details className="g-disclaimer-toggle">
            <summary id="disclaimer-heading">Important: earnings and results</summary>
            <div className="g-disclaimer-copy">
              <p>
                Ben Killen and the businesses in these case studies are operators.
                Their experiences do not guarantee a similar result. The figures
                above are historical highlights from published Growth Labs case
                studies, or, where a card says so, a model. They are not a forecast
                of your revenue, profit or timeline.
              </p>
              <p>
                “Up to $100k/month” is the ceiling of a target that is written for
                your business before work starts. It is not a statement that every
                business adds $100k a month, and it is not a statement that Growth
                Labs will pay you that amount. “You don&apos;t pay” means only the
                service-fee remedy in the agreement you sign. The guarantee applies
                when the terms in that agreement are met. Advertising, software and
                other third-party costs are separate. Results vary with the offer,
                the market, capacity, follow-through and factors outside either
                party&apos;s control.
              </p>
              <p>
                An offer on this page depends on the business&apos;s numbers, the
                potential shown by proprietary data analysis, and final agreement
                from the Growth Labs director. A guarantee is not in force until
                the relevant agreement is completed, reviewed and signed. Nothing
                here limits rights that cannot legally be
                limited, including guarantees under the Australian Consumer Law.
              </p>
            </div>
          </details>
          <div className="g-legal-row">
            <span>
              <SiteLink href="/privacy">Privacy</SiteLink>
              {" · "}
              <SiteLink href="/terms">Terms</SiteLink>
            </span>
            <span>
              BenIsKillen Investments Pty Ltd as trustee for the Killen Family
              Trust · ABN 28 718 502 605 · Growth Labs
            </span>
          </div>
        </section>
      </article>
    </SiteFrame>
  );
}
