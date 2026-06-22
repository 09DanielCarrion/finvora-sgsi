import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import Badge from "../common/Badge";
import V1V2Toggle from "./V1V2Toggle";
import NonConformityBanner from "./NonConformityBanner";

const STATUS_VARIANT = {
  implemented: "implemented",
  partial: "partial",
  notImplemented: "critical",
  excluded: "excluded",
  pending: "excluded",
};

const SECTIONS = ["Gap Analysis", "Implementation Details", "Related Controls & Clauses"];

export default function ControlDrawer({ control, nonConformity, onClose }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [version, setVersion] = useState("v1");

  return (
    <div className={`control-drawer ${control ? "open" : ""}`}>
      {control && (
        <>
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-accent-secondary">{control.id}</span>
                <Badge variant="neutral">Domain {control.domain}</Badge>
              </div>
              <p className="text-base font-semibold text-text-primary font-display mt-1">{control.name}</p>
            </div>
            <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
              <X size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Badge variant={STATUS_VARIANT[control.status] ?? "excluded"}>{control.status}</Badge>
            {control.soaStatus && <Badge variant="neutral">{control.soaStatus}</Badge>}
            {control.riskLevel && <Badge variant="partial">Risk: {control.riskLevel}</Badge>}
            {nonConformity && <V1V2Toggle version={version} setVersion={setVersion} />}
          </div>

          <div className="space-y-1">
            {SECTIONS.map((section) => (
              <div key={section}>
                <button
                  onClick={() => setExpandedSection(expandedSection === section ? null : section)}
                  className="w-full flex items-center justify-between py-1.5 text-xs font-body text-text-secondary hover:text-text-primary"
                >
                  {section}
                  {expandedSection === section ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {expandedSection === section && (
                  <p className="text-xs text-text-tertiary font-body pb-2">No content integrated yet.</p>
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
        </>
      )}
    </div>
  );
}
