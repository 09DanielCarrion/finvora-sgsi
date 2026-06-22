import { CheckCircle2, Circle } from "lucide-react";

export default function MilestoneTimeline({ milestones, title = "Project Milestones" }) {
  return (
    <div className="card p-6">
      <p className="gauge-label">{title}</p>
      <div className="timeline">
        {milestones.map((m) => (
          <div key={m.id} className="timeline-item">
            <div className={`timeline-dot ${m.completed ? "completed" : ""}`}>
              {m.completed ? (
                <CheckCircle2 size={14} className="text-status-success" />
              ) : (
                <Circle size={14} className="text-text-tertiary" />
              )}
            </div>
            <span className="timeline-label">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
