import { PieChart, Pie, Cell } from "recharts";

const COLORS = {
  implemented: "#10B981",
  inProgress: "#F59E0B",
  pending: "#334155",
  excluded: "#1A2D4A",
};

export default function ControlDonut({ stats, title = "Control Distribution" }) {
  const data = [
    { name: "implemented", value: stats.implemented },
    { name: "inProgress", value: stats.inProgress },
    { name: "pending", value: stats.pending },
    { name: "excluded", value: stats.excluded },
  ];

  return (
    <div className="card p-6 flex flex-col items-center">
      <p className="gauge-label self-start">{title}</p>
      <div className="relative">
        <PieChart width={160} height={160}>
          <Pie data={data} dataKey="value" innerRadius={50} outerRadius={75} startAngle={90} endAngle={-270}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={COLORS[entry.name]} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-text-primary font-display">
            {stats.implemented}/{stats.total}
          </span>
          <span className="text-[10px] text-text-secondary font-mono">CONTROLS</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-3 text-[11px] text-text-secondary font-mono">
        {data.map((entry) => (
          <span key={entry.name} className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[entry.name] }} />
            {entry.name}
          </span>
        ))}
      </div>
    </div>
  );
}
