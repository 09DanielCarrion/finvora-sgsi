import Badge from "../common/Badge";

export default function RecentArtifacts({ items = [], title = "Recent Artifacts" }) {
  return (
    <div className="card p-6">
      <p className="gauge-label">{title}</p>
      {items.length === 0 ? (
        <p className="text-xs text-text-secondary font-body">No artifacts integrated yet.</p>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-accent-secondary">{item.id}</span>
                <p className="text-sm text-text-primary font-body">{item.name}</p>
                <p className="text-[11px] text-text-secondary font-mono">{item.date}</p>
              </div>
              <Badge variant="implemented">{item.status}</Badge>
            </div>
          ))}
        </div>
      )}
      <button className="w-full mt-4 text-xs text-accent-primary hover:text-accent-secondary font-body">
        View All Documentation
      </button>
    </div>
  );
}
