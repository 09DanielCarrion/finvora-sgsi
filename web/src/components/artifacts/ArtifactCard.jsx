import { motion } from "framer-motion";
import { FileText, BarChart3, GitBranch } from "lucide-react";
import ComingSoon from "./ComingSoon";
import { cardVariants } from "../../lib/motion";

const TYPE_ICONS = { document: FileText, chart: BarChart3, diagram: GitBranch };

export default function ArtifactCard({ id, name, block = "B0", status = "comingSoon", type = "document", estimatedDate, onClick }) {
  if (status === "comingSoon") {
    return <ComingSoon title={`${id} - ${name}`} estimatedDate={estimatedDate} />;
  }

  const Icon = TYPE_ICONS[type] ?? FileText;

  return (
    <motion.button
      variants={cardVariants}
      onClick={onClick}
      data-block={block}
      className="artifact-card card w-full text-left p-5 flex flex-col gap-3"
    >
      <div className="block-indicator" />
      <div className="flex items-center justify-between">
        <span className="artifact-id font-mono">{id}</span>
        <Icon size={14} className="text-text-secondary" />
      </div>
      <p className="text-sm font-semibold text-text-primary font-display">{name}</p>
      <span className="status-badge completed">Completed</span>
    </motion.button>
  );
}
