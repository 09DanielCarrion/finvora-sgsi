import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import ArtifactCard from "../components/artifacts/ArtifactCard";
import ArtifactViewer from "../components/artifacts/ArtifactViewer";
import { t } from "../lib/i18n";
import { b0Artifacts } from "../data/artifacts/B0";

export default function Company() {
  const { lang } = useOutletContext();
  const [activeArtifact, setActiveArtifact] = useState(null);

  return (
    <div>
      <Breadcrumb items={[t(lang, "dashboard"), t(lang, "company")]} />
      <h1 className="text-2xl font-bold text-white mb-1">Finvora S.A.C.</h1>
      <p className="text-sm text-gray-400 mb-6">ISO 27001 SGSI Documentation</p>
      <div className="grid grid-cols-3 gap-5">
        {b0Artifacts.map((artifact) => (
          <ArtifactCard
            key={artifact.id}
            id={artifact.id}
            name={artifact.name}
            status="completed"
            onClick={() => setActiveArtifact(artifact)}
          />
        ))}
      </div>
      <ArtifactViewer artifact={activeArtifact} onClose={() => setActiveArtifact(null)} />
    </div>
  );
}
