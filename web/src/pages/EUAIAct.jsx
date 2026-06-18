import { useOutletContext } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import ArtifactCard from "../components/artifacts/ArtifactCard";
import { t } from "../lib/i18n";

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
      <Breadcrumb items={[t(lang, "dashboard"), t(lang, "euAiAct")]} />
      <h1 className="text-2xl font-bold text-white mb-6">EU AI Act + AI Frameworks</h1>
      <div className="grid grid-cols-3 gap-5">
        {B2_ARTIFACTS.map((artifact) => (
          <ArtifactCard key={artifact.id} {...artifact} status="comingSoon" />
        ))}
      </div>
    </div>
  );
}
