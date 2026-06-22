import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/common/Breadcrumb";
import ArtifactCard from "../components/artifacts/ArtifactCard";
import ArtifactViewer from "../components/artifacts/ArtifactViewer";
import { t } from "../lib/i18n";
import { b0Artifacts } from "../data/artifacts/B0";
import { containerVariants } from "../lib/motion";

export default function Company() {
  const { lang } = useOutletContext();
  const [activeArtifact, setActiveArtifact] = useState(null);

  return (
    <div>
      <div className="page-header">
        <Breadcrumb items={[t(lang, "dashboard"), t(lang, "company")]} />
        <h1 className="page-title">Finvora S.A.C.</h1>
        <p className="text-sm text-text-secondary font-body mt-1">ISO 27001 SGSI Documentation</p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-3 gap-5"
      >
        {b0Artifacts.map((artifact) => (
          <ArtifactCard
            key={artifact.id}
            id={artifact.id}
            name={artifact.name}
            block="B0"
            status="completed"
            onClick={() => setActiveArtifact(artifact)}
          />
        ))}
      </motion.div>
      <ArtifactViewer artifact={activeArtifact} onClose={() => setActiveArtifact(null)} />
    </div>
  );
}
