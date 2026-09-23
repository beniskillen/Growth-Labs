import type { Metadata } from "next";
import { CaseStudyPage } from "../CaseStudyPage";
import { study } from "./copy";

export const metadata: Metadata = {
  title: study.meta.title,
  description: study.meta.description,
};

export default function EthosCase() {
  return <CaseStudyPage study={study} />;
}
