import Badge from "../common/Badge";

export default function RecentArtifacts({ items = [], title = "Recent Artifacts" }) {
  return (
    <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
      <p className="text-sm font-medium text-gray-400 mb-4">{title}</p>
      {items.length === 0 ? (
        <p className="text-xs text-gray-500">No artifacts integrated yet.</p>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-blue-electric">{item.id}</span>
                <p className="text-sm text-white">{item.name}</p>
                <p className="text-[11px] text-gray-500">{item.date}</p>
              </div>
              <Badge variant="implemented">{item.status}</Badge>
            </div>
          ))}
        </div>
      )}
      <button className="w-full mt-4 text-xs text-blue-electric hover:text-blue-cyan">View All Documentation</button>
    </div>
  );
}
