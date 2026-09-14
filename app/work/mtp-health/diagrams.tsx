export function ReferralPath() {
  return (
    <svg
      className="work-referral-svg"
      viewBox="0 0 720 168"
      role="img"
      aria-label="Referrers become an assessment, then The Knee Program"
    >
      <text x="0" y="18" fill="#8a8f98" fontSize="11" letterSpacing="0.14em" fontFamily="ui-monospace, monospace">
        REFERRAL PATHWAY
      </text>
      {[
        ["01", "Referrers", "Doctors · physios · allied · gyms", 0],
        ["02", "Assessment", "Named conversion mechanism", 248],
        ["03", "Knee Program", "12-week specialised offer", 496],
      ].map(([code, title, copy, x]) => (
        <g key={code} transform={`translate(${x}, 40)`}>
          <rect
            width="208"
            height="112"
            fill="rgba(102,124,255,0.08)"
            stroke="#667cff"
          />
          <text x="16" y="28" fill="#bbc4ff" fontSize="11" fontFamily="ui-monospace, monospace">
            {code}
          </text>
          <text x="16" y="56" fill="#f4f4f2" fontSize="16">
            {title}
          </text>
          <text x="16" y="82" fill="#8a8f98" fontSize="12">
            {copy}
          </text>
        </g>
      ))}
      <line x1="208" y1="96" x2="248" y2="96" stroke="#667cff" />
      <line x1="456" y1="96" x2="496" y2="96" stroke="#667cff" />
    </svg>
  );
}
