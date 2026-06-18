import { useOutletContext } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import ArtifactCard from "../components/artifacts/ArtifactCard";
import { projectState } from "../data/project-state";
import { t } from "../lib/i18n";

const B3_ARTIFACTS = [
  { id: "B3-01", name: "Post-Implementation Security Metrics" },
  { id: "B3-02", name: "Security Incident Simulation" },
  { id: "B3-03", name: "Internal Audit Report" },
  { id: "B3-04", name: "Identified Non-Conformities & Classification" },
  { id: "B3-05", name: "Corrective Actions with Root Cause Analysis" },
  { id: "B3-06", name: "Management Review - Minutes & Decisions" },
  { id: "B3-07", name: "Improvement Cycle" },
  { id: "B3-08", name: "Changes in the Environment" },
  { id: "B3-09", name: "Final Executive Summary for the CEO" },
];

export default function Operations() {
  const { lang } = useOutletContext();

  const allOthersComplete =
    projectState.artifacts.B0.completed === projectState.artifacts.B0.total &&
    projectState.artifacts.B1.completed === projectState.artifacts.B1.total &&
    projectState.artifacts.B2.completed === projectState.artifacts.B2.total &&
    projectState.artifacts.B3.completed >= projectState.artifacts.B3.total - 1;

  return (
    <div>
      <Breadcrumb items={[t(lang, "dashboard"), t(lang, "operations")]} />
      <h1 className="text-2xl font-bold text-white mb-6">ISMS Operations</h1>
      <div className="grid grid-cols-3 gap-5">
        {B3_ARTIFACTS.map((artifact) => (
          <ArtifactCard key={artifact.id} {...artifact} status="comingSoon" />
        ))}
        <div className="bg-navy-800 border border-dashed border-blue-electric rounded-xl p-6 flex flex-col items-center text-center gap-3">
          <p className="text-sm font-semibold text-white">B3-10 - AI Auditor Report</p>
          <p className="text-xs text-gray-400">
            Single activation, once all other artifacts are complete
          </p>
          <button
            disabled={!allOthersComplete}
            className={`text-xs font-medium px-4 py-2 rounded-full ${
              allOthersComplete
                ? "bg-blue-electric text-white"
                : "bg-navy-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            Run AI Auditor
          </button>
        </div>
      </div>
    </div>
  );
}
