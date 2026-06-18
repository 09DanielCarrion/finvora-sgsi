import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function NonConformityBanner({ finding, correctiveAction, diff }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg border border-status-critical/30 bg-[#1A0A0A] mt-3">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full flex items-center justify-between px-4 py-2 text-xs font-medium text-status-critical"
      >
        Non-Conformity Identified
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          <div className="border-l-4 border-status-critical pl-3">
            <p className="text-[11px] text-gray-500 mb-1">Auditor Finding</p>
            <p className="text-xs text-gray-300">{finding}</p>
          </div>
          <div className="border-l-4 border-status-partial pl-3">
            <p className="text-[11px] text-gray-500 mb-1">Corrective Action</p>
            <p className="text-xs text-gray-300">{correctiveAction}</p>
          </div>
          {diff && (
            <div className="border-l-4 border-status-implemented pl-3">
              <p className="text-[11px] text-gray-500 mb-1">Changes Applied</p>
              <p className="text-xs text-status-implemented">{diff}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
