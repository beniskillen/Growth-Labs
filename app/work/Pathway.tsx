export function Pathway({
  aria,
  steps,
}: {
  aria: string;
  steps: readonly (readonly [string, string, readonly string[]])[];
}) {
  const slots = steps.slice(0, 3);
  const xs = [0, 248, 496];

  return (
    <svg
      className="work-referral-svg"
      viewBox="0 0 720 204"
      role="img"
      aria-label={aria}
    >
      <text
        x="0"
        y="18"
        fill="#8a8f98"
        fontSize="11"
        letterSpacing="0.14em"
        fontFamily="ui-monospace, monospace"
      >
        PRIMARY ACQUISITION PATHWAY
      </text>
      {slots.map(([code, title, lines], index) => (
        <g key={code} transform={`translate(${xs[index]}, 40)`}>
          <rect
            width="208"
            height="148"
            fill="rgba(102,124,255,0.08)"
            stroke="#667cff"
          />
          <text x="16" y="28" fill="#bbc4ff" fontSize="11" fontFamily="ui-monospace, monospace">
            {code}
          </text>
          <text x="16" y="56" fill="#f4f4f2" fontSize="16">
            {title}
          </text>
          {lines.map((line, lineIndex) => (
            <text
              key={line}
              x="16"
              y={82 + lineIndex * 16}
              fill="#8a8f98"
              fontSize="12"
            >
              {line}
            </text>
          ))}
        </g>
      ))}
      <line x1="208" y1="114" x2="248" y2="114" stroke="#667cff" />
      <line x1="456" y1="114" x2="496" y2="114" stroke="#667cff" />
    </svg>
  );
}
