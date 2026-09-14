export function LeakSchematic() {
  return (
    <svg
      className="offer-leak-svg"
      viewBox="0 0 280 420"
      role="img"
      aria-label="Five measurable leaks in a marketing system"
    >
      <rect x="28" y="28" width="120" height="364" fill="none" stroke="rgba(244,244,242,0.25)" />
      <rect x="36" y="196" width="104" height="188" fill="rgba(102,124,255,0.16)" />
      <line x1="36" y1="196" x2="140" y2="196" stroke="#667cff" strokeWidth="1.5" />
      {[
        ["01", 72],
        ["02", 132],
        ["03", 192],
        ["04", 252],
        ["05", 312],
      ].map(([label, y]) => (
        <g key={label}>
          <line x1="148" y1={Number(y)} x2="198" y2={Number(y)} stroke="#667cff" />
          <circle cx="148" cy={Number(y)} r="4" fill="#0a0a0b" stroke="#667cff" />
          <text x="208" y={Number(y) + 4} fill="#8a8f98" fontSize="11" fontFamily="ui-monospace, monospace">
            {label}
          </text>
        </g>
      ))}
      <text x="48" y="52" fill="#8a8f98" fontSize="9" letterSpacing="0.12em" fontFamily="ui-monospace, monospace">
        HOLD
      </text>
      <text x="48" y="368" fill="#bbc4ff" fontSize="9" letterSpacing="0.12em" fontFamily="ui-monospace, monospace">
        LEAK
      </text>
    </svg>
  );
}

export function DualFunnel({
  leftLabel = "STANDARD / 1,000 CLICKS",
  rightLabel = "CATEGORY KING / 1,000 CLICKS",
}: {
  leftLabel?: string;
  rightLabel?: string;
} = {}) {
  return (
    <svg
      className="offer-funnel-svg"
      viewBox="0 0 720 280"
      role="img"
      aria-label={`${leftLabel} versus ${rightLabel}`}
    >
      <text x="0" y="22" fill="#8a8f98" fontSize="11" letterSpacing="0.14em" fontFamily="ui-monospace, monospace">
        {leftLabel}
      </text>
      <text x="380" y="22" fill="#bbc4ff" fontSize="11" letterSpacing="0.14em" fontFamily="ui-monospace, monospace">
        {rightLabel}
      </text>

      <polygon points="20,48 320,48 270,118 70,118" fill="rgba(244,244,242,0.06)" stroke="rgba(244,244,242,0.25)" />
      <polygon points="80,128 260,128 230,188 110,188" fill="rgba(244,244,242,0.04)" stroke="rgba(244,244,242,0.2)" />
      <polygon points="120,198 220,198 200,258 140,258" fill="rgba(244,244,242,0.03)" stroke="rgba(244,244,242,0.16)" />

      <polygon points="400,48 700,48 650,118 450,118" fill="rgba(102,124,255,0.12)" stroke="#667cff" />
      <polygon points="460,128 640,128 610,188 490,188" fill="rgba(102,124,255,0.18)" stroke="#667cff" />
      <polygon points="500,198 600,198 580,258 520,258" fill="rgba(102,124,255,0.28)" stroke="#667cff" />

      <text x="86" y="86" fill="#b6bac1" fontSize="13">1,000 clicks</text>
      <text x="108" y="162" fill="#b6bac1" fontSize="13">10 opt-ins</text>
      <text x="118" y="232" fill="#b6bac1" fontSize="13">1 customer</text>

      <text x="466" y="86" fill="#f4f4f2" fontSize="13">1,000 clicks</text>
      <text x="488" y="162" fill="#f4f4f2" fontSize="13">100 opt-ins</text>
      <text x="498" y="232" fill="#f4f4f2" fontSize="13">30 customers</text>
    </svg>
  );
}
