export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const statusColors = {
  implemented: "#00C48C",
  partial: "#FFB800",
  inProgress: "#FFB800",
  critical: "#FF4757",
  notImplemented: "#FF4757",
  excluded: "#4A5568",
  pending: "#4A5568",
};

export function statusColor(status) {
  return statusColors[status] ?? statusColors.pending;
}
