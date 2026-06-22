import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { cardVariants } from "../../lib/motion";

export default function ComingSoon({ title, estimatedDate }) {
  return (
    <motion.div
      variants={cardVariants}
      className="artifact-card coming-soon card p-6 flex flex-col items-center text-center gap-3"
    >
      <Lock size={24} className="coming-soon-icon" />
      <p className="text-sm font-semibold text-text-primary font-display">{title}</p>
      <p className="text-xs text-text-secondary font-body">Content in Progress</p>
      {estimatedDate && <p className="text-xs text-text-tertiary font-mono">Estimated: {estimatedDate}</p>}
      <div className="w-full h-1 bg-base-elevated rounded-full overflow-hidden">
        <div className="h-full bg-accent-primary rounded-full" style={{ width: "0%" }} />
      </div>
    </motion.div>
  );
}
