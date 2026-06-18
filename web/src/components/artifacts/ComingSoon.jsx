import { Lock } from "lucide-react";

export default function ComingSoon({ title, estimatedDate }) {
  return (
    <div className="bg-navy-800 border border-dashed border-blue-electric rounded-xl p-6 flex flex-col items-center text-center gap-3">
      <Lock size={28} className="text-blue-electric animate-pulse" />
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="text-xs text-gray-400">Content in Progress</p>
      {estimatedDate && <p className="text-xs text-gray-500">Estimated: {estimatedDate}</p>}
      <div className="w-full h-1.5 bg-navy-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-electric rounded-full" style={{ width: "0%" }} />
      </div>
    </div>
  );
}
