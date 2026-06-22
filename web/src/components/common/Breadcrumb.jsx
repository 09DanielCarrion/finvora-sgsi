import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight size={12} className="breadcrumb-sep" />}
          <span className={i === items.length - 1 ? "text-text-primary" : ""}>{item}</span>
        </span>
      ))}
    </div>
  );
}
