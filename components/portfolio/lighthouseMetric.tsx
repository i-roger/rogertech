interface LighthouseMetricProps {
  label: string;
  value: number;
}

export default function LighthouseMetric({ label, value }: LighthouseMetricProps) {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-950/50 border border-white/5 p-4 rounded-xl text-center space-y-3">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-zinc-800"
            strokeWidth="3.5"
            fill="transparent"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            className="stroke-emerald-500 transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            strokeWidth="3.5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xs font-bold text-[#10b981] font-mono">{value}</span>
      </div>
      <span className="text-[10px] text-zinc-400 font-sans tracking-tight font-medium uppercase">{label}</span>
    </div>
  );
}
