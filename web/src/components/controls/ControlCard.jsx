import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Badge from "../common/Badge";
import V1V2Toggle from "./V1V2Toggle";
import NonConformityBanner from "./NonConformityBanner";
import { statusColor } from "../../lib/utils";

const STATUS_VARIANT = {
  implemented: "implemented",
  partial: "partial",
  notImplemented: "critical",
  excluded: "excluded",
  pending: "excluded",
};

const SECTIONS = ["Gap Analysis", "Implementation Details", "Related Controls & Clauses"];

export default function ControlCard({ control, nonConformity }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [version, setVersion] = useState("v1");

  return (
    <div
      className="bg-navy-800 rounded-xl p-4 hover:bg-navy-800/80 transition-colors"
      style={{ borderLeft: `4px solid ${statusColor(control.status)}` }}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-blue-electric">{control.id}</span>
            <Badge variant="neutral">Domain {control.domain}</Badge>
          </div>
          <p className="text-sm font-semibold text-white mt-1">{control.name}</p>
        </div>
        {nonConformity && <V1V2Toggle version={version} setVersion={setVersion} />}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <Badge variant={STATUS_VARIANT[control.status] ?? "excluded"}>{control.status}</Badge>
        {control.soaStatus && <Badge variant="neutral">{control.soaStatus}</Badge>}
        {control.riskLevel && <Badge variant="partial">Risk: {control.riskLevel}</Badge>}
      </div>

      <div className="mt-3 space-y-1">
        {SECTIONS.map((section) => (
          <div key={section}>
            <button
              onClick={() => setExpandedSection(expandedSection === section ? null : section)}
              className="w-full flex items-center justify-between py-1.5 text-xs text-gray-400 hover:text-white"
            >
              {section}
              {expandedSection === section ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expandedSection === section && (
              <p className="text-xs text-gray-500 pb-2">No content integrated yet.</p>
            )}
          </div>
        ))}
      </div>

      {version === "v2" && nonConformity && (
        <NonConformityBanner
          finding={nonConformity.finding}
          correctiveAction={nonConformity.correctiveAction}
          diff={nonConformity.diff}
        />
      )}
    </div>
  );
}
