function cellColor(likelihood, impact) {
  const score = likelihood + impact;
  if (score <= 3) return "#1f4d3a";
  if (score <= 5) return "#3d5a2e";
  if (score <= 7) return "#7a6a1f";
  if (score <= 9) return "#7a3a1f";
  return "#7a1f1f";
}

export default function RiskHeatMap({ title = "Risk Heat Map" }) {
  const rows = [5, 4, 3, 2, 1];
  const cols = [1, 2, 3, 4, 5];

  return (
    <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
      <p className="text-sm font-medium text-gray-400 mb-4">{title}</p>
      <div className="flex">
        <div className="flex flex-col justify-between text-[10px] text-gray-500 pr-2 -rotate-0">
          <span className="[writing-mode:vertical-rl] mx-auto">IMPACT (1-5)</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {rows.map((impact) =>
            cols.map((likelihood) => (
              <div
                key={`${impact}-${likelihood}`}
                className="w-9 h-9 rounded"
                style={{ backgroundColor: cellColor(likelihood, impact) }}
              />
            ))
          )}
        </div>
      </div>
      <p className="text-center text-[10px] text-gray-500 mt-2">LIKELIHOOD (1-5)</p>
    </div>
  );
}
