export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#09090b] py-8 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="bg-zinc-950/60 py-2 border-y border-white/5 overflow-hidden relative">
          <div className="flex space-x-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap text-[9px] text-zinc-500">
            <span>[LATEST_DEPLOY] PANORAMA_GAMES</span>
            <a className="hover:brightness-200" href="https://api.whatsapp.com/send?phone=5521999055127">[CLIQUE AQUI] <span className="text-[#10b981]">WHATSAPP</span></a>
          </div>
        </div>
        <div className="text-[11px] text-zinc-500 font-sans font-medium">
          © <span className="text-white font-bold">ROGERTECH</span> 2026<br/>Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
