import { CheckCircle2, Circle } from "lucide-react";

export default function MilestoneTimeline({ milestones, title = "Project Milestones" }) {
  return (
    <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
      <p className="text-sm font-medium text-gray-400 mb-6">{title}</p>
      <div className="flex items-center justify-between">
        {milestones.map((m, i) => (
          <div key={m.id} className="flex flex-col items-center gap-2 flex-1">
            {m.completed ? (
              <CheckCircle2 size={20} className="text-status-implemented" />
            ) : (
              <Circle size={20} className="text-gray-600" />
            )}
            <span className="text-[11px] text-gray-400 uppercase">{m.label}</span>
            {i < milestones.length - 1 && (
              <div className={`hidden`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
