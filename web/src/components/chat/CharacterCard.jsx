import { Shield, Code2, Scale, BarChart3 } from "lucide-react";

const ICONS = { CISO: Shield, CTO: Code2, LegalDirector: Scale, CFO: BarChart3 };
const COLORS = {
  CISO: "text-blue-electric border-blue-electric",
  CTO: "text-blue-cyan border-blue-cyan",
  LegalDirector: "text-purple-400 border-purple-400",
  CFO: "text-status-implemented border-status-implemented",
};
const TITLES = {
  CISO: "Chief Information Security Officer",
  CTO: "Chief Technology Officer",
  LegalDirector: "Legal Director",
  CFO: "Chief Financial Officer",
};
const DESCRIPTIONS = {
  CISO: "Controls, risks, and security decisions",
  CTO: "Infrastructure, AI systems, technical feasibility",
  LegalDirector: "Regulations, legal obligations, SoA exclusions",
  CFO: "Budget, ROI, financial trade-offs",
};

export default function CharacterCard({ character, onClick, active }) {
  const Icon = ICONS[character];
  return (
    <button
      onClick={onClick}
      className={`w-full text-left bg-navy-700 hover:bg-navy-700/70 border rounded-lg p-3 flex items-start gap-3 transition-colors ${
        active ? COLORS[character] : "border-navy-700"
      }`}
    >
      <Icon size={20} className={COLORS[character].split(" ")[0]} />
      <div>
        <p className="text-sm font-semibold text-white">{TITLES[character]}</p>
        <p className="text-xs text-gray-400">{DESCRIPTIONS[character]}</p>
      </div>
    </button>
  );
}
