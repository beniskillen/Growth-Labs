import type { Metadata } from "next";
import OfferLanding from "./offer/OfferLanding";

export const metadata: Metadata = {
  title: "Category King System",
  description:
    "I will make you $10,000 to your bottom line in 90 days. Or I will work for free until I do.",
};

export default function HomePage() {
  return <OfferLanding variant="schedule" />;
}
