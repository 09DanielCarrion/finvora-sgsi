import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/common/Breadcrumb";
import ArtifactCard from "../components/artifacts/ArtifactCard";
import { t } from "../lib/i18n";
import { containerVariants } from "../lib/motion";

const B2_ARTIFACTS = [
  { id: "B2-01", name: "AI System Classification under EU AI Act" },
  { id: "B2-02", name: "Per-System Obligations Analysis (Arts. 9-15)" },
  { id: "B2-03", name: "EU AI Act <-> ISO 27001 <-> NIST AI RMF <-> ISO 42001 Mapping" },
  { id: "B2-04", name: "AI-Specific Risk Register" },
  { id: "B2-05", name: "EU AI Act Compliance Plan" },
  { id: "B2-06", name: "Additional ISO 42001 Controls" },
  { id: "B2-07", name: "NIST AI RMF Profile for Finvora" },
  { id: "B2-08", name: "Executive Summary - Block 2" },
];

export default function EUAIAct() {
  const { lang } = useOutletContext();

  return (
    <div>
      <div className="page-header">
        <Breadcrumb items={[t(lang, "dashboard"), t(lang, "euAiAct")]} />
        <h1 className="page-title">EU AI Act + AI Frameworks</h1>
      </div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-3 gap-5"
      >
        {B2_ARTIFACTS.map((artifact) => (
          <ArtifactCard key={artifact.id} {...artifact} block="B2" status="comingSoon" />
        ))}
      </motion.div>
    </div>
  );
}
