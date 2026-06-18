import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight size={14} />}
          <span className={i === items.length - 1 ? "text-white" : ""}>{item}</span>
        </span>
      ))}
    </div>
  );
}
