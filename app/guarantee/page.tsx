import type { Metadata } from "next";
import GuaranteeLanding from "./GuaranteeLanding";

export const metadata: Metadata = {
  title: "Add up to $100k/month in 180 days",
  description:
    "Add up to $100k a month to your business in 180 days, or you don't pay the service fee. The number depends on the business, the data analysis, and agreement from the Growth Labs director.",
  robots: { index: false, follow: false },
};

export default function GuaranteePage() {
  return <GuaranteeLanding />;
}
