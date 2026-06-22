import { motion } from "framer-motion";
import { cardVariants } from "../../lib/motion";
import { statusColor } from "../../lib/utils";

const STATUS_KEY = {
  implemented: "implemented",
  partial: "partial",
  notImplemented: "missing",
  excluded: "excluded",
  pending: "pending",
};

export default function ControlCard({ control, onClick }) {
  return (
    <motion.button
      variants={cardVariants}
      onClick={onClick}
      data-status={STATUS_KEY[control.status] ?? "pending"}
      className="control-card-compact w-full"
    >
      <span className="control-id">{control.id}</span>
      <span className="control-name">{control.name}</span>
      <span className="control-status-dot" style={{ backgroundColor: statusColor(control.status) }} />
    </motion.button>
  );
}
