import { cn } from "../../lib/utils";

const VARIANTS = {
  implemented: "bg-status-success/15 text-status-success border-status-success/40",
  partial: "bg-status-warning/15 text-status-warning border-status-warning/40",
  critical: "bg-status-critical/15 text-status-critical border-status-critical/40",
  excluded: "bg-status-pending/30 text-text-secondary border-status-pending/50",
  neutral: "bg-accent-primary/15 text-accent-primary border-accent-primary/40",
  comingSoon: "bg-base-elevated text-text-secondary border-border-subtle",
};

export default function Badge({ children, variant = "neutral", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border font-body",
        VARIANTS[variant] ?? VARIANTS.neutral,
        className
      )}
    >
      {children}
    </span>
  );
}
