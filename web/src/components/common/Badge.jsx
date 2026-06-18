import { cn } from "../../lib/utils";

const VARIANTS = {
  implemented: "bg-status-implemented/15 text-status-implemented border-status-implemented/40",
  partial: "bg-status-partial/15 text-status-partial border-status-partial/40",
  critical: "bg-status-critical/15 text-status-critical border-status-critical/40",
  excluded: "bg-status-excluded/15 text-gray-400 border-status-excluded/40",
  neutral: "bg-blue-electric/15 text-blue-electric border-blue-electric/40",
  comingSoon: "bg-navy-700 text-gray-400 border-navy-700",
};

export default function Badge({ children, variant = "neutral", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border",
        VARIANTS[variant] ?? VARIANTS.neutral,
        className
      )}
    >
      {children}
    </span>
  );
}
