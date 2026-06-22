function riskLevel(likelihood, impact) {
  const score = likelihood + impact;
  if (score <= 3) return 1;
  if (score <= 5) return 2;
  if (score <= 7) return 3;
  if (score <= 9) return 4;
  return 5;
}

export default function RiskHeatMap({ title = "Risk Heat Map" }) {
  const rows = [5, 4, 3, 2, 1];
  const cols = [1, 2, 3, 4, 5];

  return (
    <div className="card p-6">
      <p className="gauge-label">{title}</p>
      <div className="flex gap-2">
        <span className="text-[10px] text-text-secondary font-mono [writing-mode:vertical-rl] self-center">
          IMPACT (1-5)
        </span>
        <div className="heatmap-grid flex-1">
          {rows.map((impact) =>
            cols.map((likelihood) => (
              <div
                key={`${impact}-${likelihood}`}
                className="heatmap-cell"
                data-level={riskLevel(likelihood, impact)}
              />
            ))
          )}
        </div>
      </div>
      <p className="text-center text-[10px] text-text-secondary font-mono mt-2">LIKELIHOOD (1-5)</p>
    </div>
  );
}
