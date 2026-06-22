import { useCountUp } from "../../lib/useCountUp";

export default function MaturityGauge({ value = 0, label = "ISMS Maturity Score" }) {
  const animated = useCountUp(value);
  const dash = (value / 100) * 283;

  return (
    <div className="gauge-card">
      <p className="gauge-label">{label}</p>
      <div className="relative flex flex-col items-center">
        <svg viewBox="0 0 200 120" className="w-full max-w-[260px]">
          <path
            d="M 20 110 A 90 90 0 0 1 180 110"
            fill="none"
            stroke="#1A2D4A"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 20 110 A 90 90 0 0 1 180 110"
            fill="none"
            stroke="rgba(59,130,246,0.3)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${dash} 283`}
            filter="url(#gaugeBlur)"
          />
          <path
            d="M 20 110 A 90 90 0 0 1 180 110"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${dash} 283`}
            className="transition-[stroke-dasharray] duration-700"
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <filter id="gaugeBlur">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
        </svg>
        <div className="absolute bottom-2 flex flex-col items-center">
          <span className="gauge-number font-display">{animated}%</span>
          <span className="gauge-sub">
            {value < 40 ? "Critical Gap" : value < 70 ? "In Progress" : "On Track"}
          </span>
        </div>
      </div>
    </div>
  );
}
