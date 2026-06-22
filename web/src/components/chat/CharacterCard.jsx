import { Shield, Code2, Scale, BarChart3 } from "lucide-react";

const ICONS = { CISO: Shield, CTO: Code2, LegalDirector: Scale, CFO: BarChart3 };
const CLASS = { CISO: "char-ciso", CTO: "char-cto", LegalDirector: "char-legal", CFO: "char-cfo" };
const ICON_COLOR = { CISO: "#3B82F6", CTO: "#06B6D4", LegalDirector: "#8B5CF6", CFO: "#10B981" };
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

export default function CharacterCard({ character, onClick }) {
  const Icon = ICONS[character];
  return (
    <button onClick={onClick} className={`character-card w-full text-left ${CLASS[character]}`}>
      <span className="character-avatar">
        <Icon size={18} color={ICON_COLOR[character]} />
      </span>
      <div>
        <p className="character-name">{TITLES[character]}</p>
        <p className="character-role">{DESCRIPTIONS[character]}</p>
      </div>
    </button>
  );
}
