import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/common/Breadcrumb";
import ArtifactCard from "../components/artifacts/ArtifactCard";
import { projectState } from "../data/project-state";
import { t } from "../lib/i18n";
import { containerVariants, cardVariants } from "../lib/motion";

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
      <div className="page-header">
        <Breadcrumb items={[t(lang, "dashboard"), t(lang, "operations")]} />
        <h1 className="page-title">ISMS Operations</h1>
      </div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-3 gap-5"
      >
        {B3_ARTIFACTS.map((artifact) => (
          <ArtifactCard key={artifact.id} {...artifact} block="B3" status="comingSoon" />
        ))}
        <motion.div
          variants={cardVariants}
          className="artifact-card coming-soon card p-6 flex flex-col items-center text-center gap-3"
        >
          <p className="text-sm font-semibold text-text-primary font-display">B3-10 - AI Auditor Report</p>
          <p className="text-xs text-text-secondary font-body">
            Single activation, once all other artifacts are complete
          </p>
          <button
            disabled={!allOthersComplete}
            className={`text-xs font-medium font-body px-4 py-2 rounded-full ${
              allOthersComplete
                ? "bg-accent-primary text-white"
                : "bg-base-elevated text-text-secondary cursor-not-allowed"
            }`}
          >
            Run AI Auditor
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
