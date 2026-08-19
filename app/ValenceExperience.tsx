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
    title: "Revenue sits in the centre — proven by clients.",
    copy: "The logos are not decoration. They are the nucleus: real businesses where the system has already been installed. Every shell exists to protect and compound that core.",
  },
];

export default function ValenceExperience({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [focusId, setFocusId] = useState<ValenceMetricId | null>("tam");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-chapter]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.getAttribute("data-chapter") as ValenceMetricId | null;
        if (id) setFocusId(id);
      },
      { root: null, threshold: [0.28, 0.5, 0.72], rootMargin: "-12% 0px -42% 0px" },
    );
    for (const node of nodes) observer.observe(node);

    const onScroll = () => {
      const rect = root.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight * 0.4, 1);
      const passed = Math.min(Math.max(-rect.top, 0), total);
      setScrollProgress(passed / total);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="atom-shell grid-bg" ref={rootRef}>
      <div className="atom-left">
        <section className="home-hero home-hero-atom">{children}</section>
        <div className="valence-chapters" id="system">
          {chapters.map((chapter) => (
            <article
              className="valence-chapter"
              data-chapter={chapter.id}
              data-active={focusId === chapter.id}
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
                        <button type="button" onClick={() => setFocusId(metric.id)}>
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
                        <button type="button" onClick={() => setFocusId(metric.id)}>
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
      </div>
      <aside className="valence-rail">
        <div className="valence-rail-inner">
          <RevenueValence
            focusId={focusId}
            scrollProgress={scrollProgress}
            onFocus={setFocusId}
          />
          <div className="hero-side-label">SCROLL TO ORBIT / HOVER TO FOCUS</div>
        </div>
      </aside>
    </div>
  );
}
