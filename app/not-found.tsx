import type { Metadata } from "next";
import { Arrow, Eyebrow, SiteFrame } from "./components";
import RevenueValence from "./RevenueValence";
import { SiteLink } from "./SiteLink";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page does not exist. Discover the first principles of marketing and never see business the same again.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteFrame conversion>
      <section className="missing-page grid-bg" aria-labelledby="missing-title">
        <div className="missing-copy-block">
          <p className="missing-kicker">404</p>
          <Eyebrow>Category King System</Eyebrow>
          <h1 id="missing-title">
            This page is gone.
            <span>The first principles are not.</span>
          </h1>
          <p className="missing-copy">
            The link you followed does not lead anywhere. The offer does. Growth
            Labs installs the atom of marketing — who sees it, who cares, who
            buys, and what a customer is worth — until{" "}
            <em>$10,000 hits your bottom line</em>. Or I work for free until it
            does.
          </p>
        </div>
        <div className="missing-stage">
          <RevenueValence />
          <div className="hero-side-label">
            CLICK THE ATOM TO REVEAL BRANDS / DRAG TO ORBIT
          </div>
        </div>
        <SiteLink className="button missing-cta" href="/">
          <span>
            Discover the first principles of marketing &amp; never see business
            the same again
          </span>
          <Arrow />
        </SiteLink>
      </section>
    </SiteFrame>
  );
}
