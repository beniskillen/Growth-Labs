"use client";

import { useState } from "react";
import type { ValenceMetricId } from "../brand";
import { AuditButton } from "../components";
import RevenueValence from "../RevenueValence";

export default function OfferAtom() {
  const [focusId, setFocusId] = useState<ValenceMetricId | null>(null);

  return (
    <section className="offer-atom grid-bg" aria-label="First principles marketing">
      <h2>First principles marketing</h2>
      <div className="offer-atom-stage">
        <RevenueValence focusId={focusId} onFocus={setFocusId} />
        <div className="hero-side-label">
          CLICK THE ATOM TO REVEAL BRANDS / DRAG TO ORBIT
        </div>
      </div>
      <p className="offer-atom-callout">
        You&apos;ve scrolled this far, why not just get a strategy for your time
      </p>
      <AuditButton>BOOK A STRATEGY SESSION</AuditButton>
    </section>
  );
}
