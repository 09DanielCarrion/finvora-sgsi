import { useOutletContext } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import ArtifactCard from "../components/artifacts/ArtifactCard";
import { t } from "../lib/i18n";

const B0_ARTIFACTS = [
  { id: "B0-00", name: "Consultant Onboarding Brief" },
  { id: "B0-01", name: "Corporate Profile" },
  { id: "B0-02", name: "Organizational Chart" },
  { id: "B0-03", name: "Internal & External Context Analysis" },
  { id: "B0-04", name: "Interested Parties & Requirements" },
  { id: "B0-05", name: "ISMS Scope" },
  { id: "B0-06", name: "Current Technology Architecture" },
  { id: "B0-07", name: "Information Asset Inventory" },
  { id: "B0-08", name: "Data Flows" },
  { id: "B0-09", name: "Current Security Controls" },
  { id: "B0-10", name: "Security Budget" },
  { id: "B0-11", name: "Historical Security Incidents" },
  { id: "B0-12", name: "Critical Suppliers & Contracts" },
  { id: "B0-13", name: "AI Systems in Operation" },
  { id: "B0-14", name: "Risk Appetite & Certification Objectives" },
  { id: "B0-15", name: "Applicable Regulations & Compliance Status" },
];

export default function Company() {
  const { lang } = useOutletContext();

  return (
    <div>
      <Breadcrumb items={[t(lang, "dashboard"), t(lang, "company")]} />
      <h1 className="text-2xl font-bold text-white mb-1">Finvora S.A.C.</h1>
      <p className="text-sm text-gray-400 mb-6">ISO 27001 SGSI Documentation</p>
      <div className="grid grid-cols-3 gap-5">
        {B0_ARTIFACTS.map((artifact) => (
          <ArtifactCard key={artifact.id} {...artifact} status="comingSoon" />
        ))}
      </div>
    </div>
  );
}
