interface RuleEyebrowProps {
  /** Rule index in the page's access-control chain (1-based). */
  n: number;
  /** Destination this rule matches, e.g. "/about". */
  target: string;
  /** Human-readable section name shown after the rule syntax. */
  label: string;
  /** ACL verdict — defaults to ACCEPT. */
  verdict?: "ACCEPT" | "LOG" | "ESTABLISHED";
}

/**
 * Section eyebrow styled as a firewall ACL rule — Sameer's actual professional
 * vernacular (Sophos XGS rule syntax), used consistently as the page's one
 * connective visual signature instead of a generic "// Section" label.
 */
export default function RuleEyebrow({ n, target, label, verdict = "ACCEPT" }: RuleEyebrowProps) {
  return (
    <span className="rule-eyebrow">
      <span className="rule-eyebrow-id">RULE {String(n).padStart(2, "0")}</span>
      <span className="rule-eyebrow-sep" aria-hidden="true">·</span>
      <span className="rule-eyebrow-syntax">
        PERMIT ANY <span aria-hidden="true">→</span> {target}
      </span>
      <span className="rule-eyebrow-verdict">[{verdict}]</span>
      <span className="rule-eyebrow-label">{label}</span>
    </span>
  );
}
