import type { Metadata } from "next";
import OfferLanding from "../offer/OfferLanding";

export const metadata: Metadata = {
  title: "Category King System",
  description:
    "Add $10,000 to your bottom line in 30 days. Or I work for free until we do.",
  robots: { index: false, follow: false },
};

export default function GrowthPartnershipPage() {
  return <OfferLanding variant="partnership" />;
}
