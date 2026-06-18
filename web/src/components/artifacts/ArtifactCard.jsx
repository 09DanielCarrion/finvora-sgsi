import { FileText, BarChart3, GitBranch } from "lucide-react";
import Badge from "../common/Badge";
import ComingSoon from "./ComingSoon";

const TYPE_ICONS = { document: FileText, chart: BarChart3, diagram: GitBranch };

export default function ArtifactCard({ id, name, status = "comingSoon", type = "document", estimatedDate, onClick }) {
  if (status === "comingSoon") {
    return <ComingSoon title={`${id} - ${name}`} estimatedDate={estimatedDate} />;
  }

  const Icon = TYPE_ICONS[type] ?? FileText;

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-navy-800 border border-navy-700 rounded-xl p-5 hover:border-blue-electric transition-colors flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-blue-electric">{id}</span>
        <Icon size={16} className="text-gray-500" />
      </div>
      <p className="text-sm font-semibold text-white">{name}</p>
      <Badge variant="implemented">Completed</Badge>
    </button>
  );
}
