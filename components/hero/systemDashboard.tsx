interface SystemDashboardProps {
  uxValue: number;
  perfValue: number;
  diagnosticsLogs: string[];
}

export default function SystemDashboard({ uxValue, perfValue, diagnosticsLogs }: SystemDashboardProps) {
  return (
    <div className="border border-white/10 bg-zinc-900/40 rounded-2xl overflow-hidden p-6 space-y-4 shadow-2xl relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex justify-between items-center border-b border-white/5 pb-3">
        <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">TECNOLOGIAS DE PONTA</span>
        <span className="text-[10px] text-zinc-500 font-mono">ROGERTECH STACK V2</span>
      </div>

      <div className="p-2 space-y-4 font-sans">
        <div className="flex justify-between text-xs items-center">
          <span className="text-zinc-400">Velocidade de Processamento:</span>
          <span className="text-indigo-400 font-mono">{uxValue}% / 100%</span>
        </div>
        <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden">
          <div className="bg-indigo-500 h-full transition-all duration-1000" style={{ width: `${uxValue}%` }} />
        </div>

        <div className="flex justify-between text-xs items-center">
          <span className="text-zinc-400">Retenção de Tráfego:</span>
          <span className="text-emerald-400 font-mono">{perfValue}% / 100%</span>
        </div>
        <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden">
          <div className="bg-[#10b981] h-full transition-all duration-1000" style={{ width: `${perfValue}%` }} />
        </div>

        <div className="border-t border-white/5 pt-4 space-y-2">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-mono">ÚLTIMAS ENTREGAS</span>
          <div className="space-y-2 text-xs font-mono">
            {diagnosticsLogs.slice(0, 3).map((log, idx) => (
              <div key={idx} className="flex justify-between text-zinc-400 border-b border-white/5 pb-1">
                <span>{log}</span>
                <span className="text-emerald-400">ONLINE</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
