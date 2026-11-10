import type { Metadata } from "next";
import { Eyebrow, SiteFrame } from "../components";
import { SiteLink } from "../SiteLink";
import "../legal/legal.css";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Website terms for Growth Labs, and a plain-language account of the three services agreements.",
};

const BOOK = "https://calendly.com/ben_killen/growth_strategy";

export default function TermsPage() {
  return (
    <SiteFrame>
      <article className="legal-page">
        <div className="legal-doc">
          <Eyebrow>Growth Labs</Eyebrow>
          <h1>Terms</h1>
          <p className="legal-meta">10 November 2026 · Website terms</p>

          <p>
            These terms cover use of this website. They are not a services
            contract. Booking a call, watching a video or browsing a case study
            does not create an engagement, a guarantee or a debt. Work starts
            when the relevant agreement is completed and signed.
          </p>
          <p>
            The Provider is BenIsKillen Investments Pty Ltd as trustee for the
            Killen Family Trust. ABN 28 718 502 605. Growth Labs is the product.
            Ben Killen acts for the Provider and does not give a personal
            guarantee. A signed services agreement is governed by the law of
            New South Wales and applicable Commonwealth law.
          </p>

          <h2>The sentence on the home page</h2>
          <p>
            The <SiteLink href="/">home page</SiteLink> says Growth Labs can add
            up to $100k a month to a business in 180 days, or you don&apos;t
            pay. Read that sentence with the limits below. It is a ceiling and a
            description of a service-fee remedy. It is not an offer you accept
            by using the site.
          </p>
          <ul>
            <li>
              The figure that applies to you is written before work starts. It
              can be lower than $100k a month. $100k is the top of the range,
              not the default.
            </li>
            <li>
              “You don&apos;t pay” means the Provider&apos;s service fee, on the
              terms of the signed remedy. It does not mean Growth Labs pays you
              $100k. It does not mean profit. It does not cancel advertising,
              software or other third-party invoices.
            </li>
            <li>
              180 days is the planned 90-day accelerator plus up to 90 further
              days of the same campaign if the written target is missed.
            </li>
            <li>
              An offer applies only when it fits the business&apos;s numbers, the
              potential shown by Growth Labs&apos; proprietary data analysis, and
              a final agreement from the Growth Labs director. It is not in force
              until that agreement is signed.
            </li>
          </ul>

          <h2>When an offer applies</h2>
          <p>
            The offers described on this site, including proof of concept, the
            90-day accelerator and growth operating, are subject to the
            business&apos;s numbers, the potential shown by Growth Labs&apos;
            proprietary data analysis, and final agreement from the Growth Labs
            director, acting for the Provider. A page, a video or a booking is
            not that agreement. Work starts when the relevant agreement is
            completed and signed.
          </p>

          <h2>01 — Proof of concept</h2>
          <p>
            Category King Proof of Concept is a bounded test of one niche offer.
            The point is to see whether it can reach qualified contacts, produce
            responses and booked conversations, and convert customers into
            attributable collected revenue. The first formal review is aimed at
            day 30. That is not a fixed end date, and it is not a promise that a
            customer&apos;s own payment terms will settle inside 30 days.
          </p>
          <p>
            The older commercial table is an AUD $500 deposit,
            reconciled against work actually delivered, and an AUD $1,500
            success fee if qualifying net revenue reaches AUD $5,000. A separate
            proof measure is three customers from the agreed hypothesis. Three
            customers below $5,000 do not, on that older table, earn the success
            fee.
          </p>
          <p>
            A direction dated 2 November 2026 proposes a different remedy for
            the proof of concept: if the agreed result is not at least AUD
            $10,000 in qualifying net revenue inside the agreed window, the
            service fee for that scope is not charged, and a service fee paid in
            advance for that scope is returned. The measurement window, the fee
            if the result is hit, and the treatment of third-party costs are
            still marked to be agreed. Until those blanks are filled, the older
            numbers and the November direction should not be mixed into one
            price.
          </p>
          <p>
            Qualifying net revenue, on the older schedule, is cleared customer
            payments attributable to the agreed campaign, minus GST or sales tax
            collected, refunds and chargebacks, and pre-approved advertising and
            software for that scope. Unpaid invoices, pipeline and lifetime-value
            forecasts do not count. It is not profit.
          </p>

          <h2>02 — 90-day accelerator</h2>
          <p>
            Category King Accelerator: Growth &amp; Scale is a planned 90-day
            engagement for one offer, one market and one channel. The channel is
            either B2B growth execution or paid advertising, chosen before
            signing. Setup during the first 30 days can include one conversion
            asset, one prospect database and one follow-up path. A full website,
            a rebrand, a CRM migration and a whole operating system are outside
            that fee.
          </p>
          <p>
            Provider fees are AUD $2,000 to set up, unless the
            signed schedule waives that fee, plus AUD $2,000 for each 30-day
            period. Three periods are AUD $6,000. With setup, the total is AUD
            $8,000. Without setup, it is AUD $6,000. External media and tools
            are extra and client-funded, with a written cap. There is no second
            success fee and no sales commission.
          </p>
          <p>
            The result commitment is at least AUD $10,000 of qualifying
            collected campaign revenue by day 90, after agreed advertising spend
            and before Provider service fees. If the shared ledger is short, the
            proposed remedy is up to 90 more calendar days of the same channel
            at AUD $0 provider service fee. The extension ends when the
            cumulative measure hits the target, or when the extra 90 days end.
            It is not an open-ended free retainer, and it is not an agreement to
            hand over AUD $10,000 in cash. Approved ad spend continues during
            the extension.
          </p>
          <p>
            The client supplies the lawful audience, access, budget, approvals,
            fulfilment and honest payment records. A miss has to be real,
            documented, and given a chance to be fixed. The Provider cannot void
            the remedy over a trivial delay, and cannot exit for convenience to
            avoid it. Leaving early ends future extension work. It does not
            erase rights that have already accrued.
          </p>

          <h2>03 — Growth operating</h2>
          <p>
            Growth Operating is the coordination of a client-owned system after,
            or apart from, the campaign. The mode is advisory, done-with-you, or
            done-for-you, and the schedule names who builds and who sends. The
            Provider is not appointed CEO, director or guarantor of the whole
            business.
          </p>
          <p>
            The template fee is a blank. On the pathway that follows a
            successful accelerator, the working continuation is AUD $2,000 a
            month plus a proposed 5% of positive attributable contribution.
            That 5% is not the price for every client, and it does not buy
            unlimited channels. A 20% of ad spend charge is a different option
            and applies only if a schedule selects it. Commission, equity, a
            faculty licence and a profit share are off unless a separate
            addendum is signed.
          </p>
          <p>
            Operating metrics are targets. This agreement creates no AUD $10,000
            campaign guarantee unless a finished performance schedule is
            attached and priced. Each month is one experiment, a weekly written
            report and a decision. A second experiment waits until that decision
            is recorded.
          </p>

          <h2>What stays with you</h2>
          <ul>
            <li>You own your accounts, your data and the materials you supply.</li>
            <li>
              Intellectual property built for the engagement is dealt with in the
              intellectual-property clause of the signed agreement. The website
              itself, including this copy and the visual system, stays with the
              Provider.
            </li>
            <li>
              You approve factual and regulated claims before they go out. The
              Provider does not give legal, tax, financial-product, credit or
              health advice, and does not promise a clinical or investment
              outcome.
            </li>
            <li>
              Australian Consumer Law guarantees that cannot be excluded remain.
              A capped remedy is in addition to those rights, not a replacement
              for them.
            </li>
          </ul>

          <h2>Case studies on this site</h2>
          <p>
            Case study figures are historical highlights, or models where the
            page says “on the model”. They describe other businesses. They are
            not a representation that your business will produce the same
            revenue, margin, audience or timeline. Individual results depend on
            the offer, the market, the budget, fulfilment and work outside
            either party&apos;s control.
          </p>

          <h2>Using the website</h2>
          <p>
            You may read the pages and book a call through{" "}
            <a href={BOOK}>the strategy link</a>. You may not copy the site for
            a competing offer, interfere with its operation, or submit someone
            else&apos;s personal information without a lawful basis. Video is
            hosted by Loom and YouTube. Their terms apply to playback.
          </p>
          <p>
            The site is provided as it stands. Pages can change, including this
            offer, and a change to the website does not amend a contract
            already signed. The <SiteLink href="/privacy">privacy policy</SiteLink>{" "}
            describes how personal information from a visit or a booking is
            handled.
          </p>

          <h2>Liability</h2>
          <p>
            To the extent the law allows, the Provider is not liable for loss
            that comes from relying on the website alone, including a decision
            to spend money on ads before an agreement is signed. Nothing on
            this page excludes liability for fraud, or a guarantee or remedy
            that the Australian Consumer Law says cannot be excluded. Where the
            law allows a limit, liability for website use is limited to
            resupplying the page or the cost of doing so.
          </p>

          <h2>Disputes</h2>
          <p>
            A dispute about a signed agreement follows that agreement: a notice,
            ten business days of good-faith discussion, then mediation if both
            sides agree. Urgent court relief and a complaint to a regulator
            remain available. A question about these website terms can start
            with the booking link, marked Terms.
          </p>
        </div>
      </article>
    </SiteFrame>
  );
}
