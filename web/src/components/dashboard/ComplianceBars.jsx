const LABELS = { iso27001: "ISO 27001:2022", gdpr: "GDPR Readiness", euAiAct: "EU AI Act", pciDss: "PCI DSS v4.0" };

export default function ComplianceBars({ compliance, title = "Compliance Status" }) {
  return (
    <div className="card p-6">
      <p className="gauge-label">{title}</p>
      <div>
        {Object.entries(compliance).map(([key, value]) => (
          <div key={key} className="compliance-bar-item">
            <span className="compliance-label">{LABELS[key] ?? key}</span>
            <div className="compliance-track">
              <div className="compliance-fill" style={{ width: `${value}%` }} />
            </div>
            <span className="compliance-pct">{value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
