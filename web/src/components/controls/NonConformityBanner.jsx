import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NonConformityBanner({ finding, correctiveAction, diff }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-status-critical/30 bg-status-critical/[0.04] mt-3">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between px-4 py-2 text-xs font-medium font-body text-status-critical"
      >
        Non-Conformity Identified
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          <div className="border-l-4 border-status-critical pl-3">
            <p className="text-[11px] text-text-secondary font-body mb-1">Auditor Finding</p>
            <p className="text-xs text-text-primary font-body">{finding}</p>
          </div>
          <div className="border-l-4 border-status-warning pl-3">
            <p className="text-[11px] text-text-secondary font-body mb-1">Corrective Action</p>
            <p className="text-xs text-text-primary font-body">{correctiveAction}</p>
          </div>
          {diff && (
            <div className="border-l-4 border-status-success pl-3">
              <p className="text-[11px] text-text-secondary font-body mb-1">Changes Applied</p>
              <p className="text-xs text-status-success font-body">{diff}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
