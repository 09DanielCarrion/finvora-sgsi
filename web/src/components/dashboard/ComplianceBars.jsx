const LABELS = { iso27001: "ISO 27001:2022", gdpr: "GDPR Readiness", euAiAct: "EU AI Act", pciDss: "PCI DSS v4.0" };

export default function ComplianceBars({ compliance, title = "Compliance Status" }) {
  return (
    <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
      <p className="text-sm font-medium text-gray-400 mb-4">{title}</p>
      <div className="space-y-4">
        {Object.entries(compliance).map(([key, value]) => (
          <div key={key}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-gray-300">{LABELS[key] ?? key}</span>
              <span className="text-gray-400">{value}%</span>
            </div>
            <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-electric rounded-full" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
