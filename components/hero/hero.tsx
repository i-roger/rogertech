'use client';

import { scrollToSection } from '@/lib/utils';
import SystemDashboard from './systemDashboard';

interface HeroProps {
  uxValue: number;
  perfValue: number;
  diagnosticsLogs: string[];
}

export default function Hero({ uxValue, perfValue, diagnosticsLogs }: HeroProps) {
  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 rounded-full text-xs text-indigo-400 font-semibold tracking-wide">
              <span>✦ Engenharia de Software focada em Resultados Comerciais</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Aceleramos o seu faturamento com <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300">tecnologia de alto nível.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-sans">
              Não criamos apenas sites. Projetamos e construímos ecossistemas digitais robustos, Landing Pages de alta conversão e plataformas web otimizadas de alta conversão para transformar visitantes em faturamento recorrente para a sua marca.
            </p>

            <div className="grid grid-cols-3 gap-6 py-4 max-w-lg border-y border-white/5">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Otimização Mobile-First</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">&lt; 0.8s</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Tempo de Resposta</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">+3x</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Retorno em Conversão</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button onClick={() => scrollToSection('contact')} className="bg-white text-zinc-950 px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer">
                Construir meu Sistema
              </button>
              <button onClick={() => scrollToSection('services')} className="border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-lg text-sm font-bold text-white tracking-wide transition-colors cursor-pointer">
                Nossas Soluções
              </button>
            </div>
          </div>

          <div className="hidden md:grid lg:col-span-5">
            <SystemDashboard uxValue={uxValue} perfValue={perfValue} diagnosticsLogs={diagnosticsLogs} />
          </div>

        </div>
      </div>
    </section>
  );
}
