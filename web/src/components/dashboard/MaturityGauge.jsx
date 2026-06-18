export default function MaturityGauge({ value = 0, label = "ISMS Maturity Score" }) {
  const angle = (value / 100) * 180;

  return (
    <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 flex flex-col items-center">
      <p className="text-sm font-medium text-gray-400 mb-4">{label}</p>
      <div className="relative w-48 h-24 overflow-hidden">
        <div
          className="absolute w-48 h-48 rounded-full"
          style={{
            background: "conic-gradient(from 180deg, #FF4757, #FFB800, #00C48C)",
            clipPath: "inset(0 0 50% 0)",
          }}
        />
        <div className="absolute w-36 h-36 rounded-full bg-navy-800 left-1/2 top-0 -translate-x-1/2" />
        <div
          className="absolute left-1/2 bottom-0 w-1 h-20 bg-blue-electric origin-bottom"
          style={{ transform: `translateX(-50%) rotate(${angle - 90}deg)` }}
        />
      </div>
      <p className="text-3xl font-bold text-white mt-2">{value}%</p>
      <p className="text-xs text-gray-500">Initialization Pending</p>
    </div>
  );
}
