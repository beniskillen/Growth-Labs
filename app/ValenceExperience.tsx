"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import RevenueValence from "./RevenueValence";
import { valenceMetrics, type ValenceMetricId } from "./brand";

const chapters: {
  id: ValenceMetricId;
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
}[] = [
  {
    id: "tam",
    index: "00",
    eyebrow: "OUTER BOUNDARY",
    title: "TAM is the market you could own.",
    copy: "The outermost shell is not a vanity number. It is your potential — the demand that exists if the system underneath can actually hold water.",
  },
  {
    id: "impressions",
    index: "01",
    eyebrow: "INNER SHELL / ATTENTION",
    title: "Impressions, unique visitors, click-through.",
    copy: "Before economics, there is attention. Enough of the right people have to see the offer, land on the property, and care enough to click. Weak CTR is a message problem, not a budget problem.",
  },
  {
    id: "cvr",
    index: "02",
    eyebrow: "OUTER SHELL / ECONOMICS",
    title: "Conversion, CAC and lifetime value.",
    copy: "Page CVR tells you if intent becomes a client. CAC tells you what that client cost. LTV tells you whether the math can scale. Do not buy more traffic until these three agree.",
  },
  {
    id: "revenue",
    index: "03",
    eyebrow: "NUCLEUS",
    title: "Your brand sits in the centre.",
    copy: "The nucleus is the brand — a tight cluster of atoms, not a logo wall. Click the diagram and the client marks expand out from that core. Every valence shell exists to protect and compound it.",
  },
];

export default function ValenceExperience({ children }: { children: ReactNode }) {
  const copyRef = useRef<HTMLElement>(null);
  const [focusId, setFocusId] = useState<ValenceMetricId | null>(null);
  const [chapterId, setChapterId] = useState<ValenceMetricId | null>("tam");

  useEffect(() => {
    const root = copyRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-chapter]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.getAttribute("data-chapter") as ValenceMetricId | null;
        if (id) setChapterId(id);
      },
      { root: null, threshold: [0.35, 0.55, 0.75], rootMargin: "-8% 0px -35% 0px" },
    );
    for (const node of nodes) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="atom-shell">
      <section className="atom-hero grid-bg" aria-label="Revenue atom">
        <div className="atom-hero-frame">
          <RevenueValence focusId={focusId} onFocus={setFocusId} />
          <div className="hero-side-label">
            CLICK THE ATOM TO REVEAL BRANDS / DRAG TO ORBIT
          </div>
        </div>
      </section>

      <section className="atom-copy-module grid-bg" ref={copyRef}>
        <section className="home-hero home-hero-atom">{children}</section>
        <div className="valence-chapters" id="system">
          {chapters.map((chapter) => (
            <article
              className="valence-chapter"
              data-chapter={chapter.id}
              data-active={chapterId === chapter.id}
              key={chapter.id}
            >
              <span className="card-code">
                {chapter.index} / {chapter.eyebrow}
              </span>
              <h3>{chapter.title}</h3>
              <p>{chapter.copy}</p>
              {chapter.id === "impressions" ? (
                <ul className="valence-metric-list">
                  {valenceMetrics
                    .filter((metric) => metric.shell === 1)
                    .map((metric) => (
                      <li key={metric.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setFocusId(metric.id);
                            document
                              .querySelector(".atom-hero")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          {metric.label}
                        </button>
                        <span>{metric.question}</span>
                      </li>
                    ))}
                </ul>
              ) : null}
              {chapter.id === "cvr" ? (
                <ul className="valence-metric-list">
                  {valenceMetrics
                    .filter((metric) => metric.shell === 2)
                    .map((metric) => (
                      <li key={metric.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setFocusId(metric.id);
                            document
                              .querySelector(".atom-hero")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          {metric.label}
                        </button>
                        <span>{metric.question}</span>
                      </li>
                    ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
