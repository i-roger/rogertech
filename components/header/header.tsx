'use client';

import { useState } from 'react';
import { scrollToSection } from '@/lib/utils';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            <span className="text-white font-extrabold tracking-tight text-base sm:text-lg hover:text-indigo-400 transition-colors duration-200 cursor-pointer" onClick={() => scrollToSection('hero')}>
              ROGERTECH
            </span>
          </div>

          <nav className="hidden lg:flex space-x-8 text-xs font-semibold tracking-wider text-zinc-400">
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors cursor-pointer">Início</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">Nossas Soluções</button>
            <button onClick={() => scrollToSection('analytics')} className="hover:text-white transition-colors cursor-pointer">Engenharia de Conversão</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors cursor-pointer">Portfólio Ativo</button>
            <button onClick={() => scrollToSection('supportit')} className="hover:text-white transition-colors cursor-pointer">Suporte de TI & PC</button>
            <button onClick={() => scrollToSection('contact')} className="bg-indigo-600/10 text-indigo-400 border border-indigo-500/30 px-4 py-1.5 rounded-full hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all font-mono cursor-pointer">Planejar Projeto</button>
          </nav>

          

          <div className="lg:hidden flex items-center">
            <button className="text-zinc-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="text-lg cursor-pointer hover:text-white p-2 focus:outline-none">☰</span>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[#09090b]/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 text-xs">
          <button onClick={() => { scrollToSection('hero'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 border border-white/5 rounded text-zinc-400 hover:text-white hover:border-white/25 transition-all font-mono">Início</button>
          <button onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 border border-white/5 rounded text-zinc-400 hover:text-white hover:border-white/25 transition-all font-mono">Nossas Soluções</button>
          <button onClick={() => { scrollToSection('analytics'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 border border-white/5 rounded text-zinc-400 hover:text-white hover:border-white/25 transition-all font-mono">Engenharia de Conversão</button>
          <button onClick={() => { scrollToSection('portfolio'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-3 border border-white/5 rounded text-zinc-400 hover:text-white hover:border-white/25 transition-all font-mono">Portfólio Ativo</button>
          <button onClick={() => scrollToSection('supportit')} className="hover:text-white transition-colors cursor-pointer">Suporte de TI & PC</button>
          <button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} className="block w-full text-center py-3 bg-indigo-600 text-white rounded font-bold transition-all font-mono">Planejar Projeto</button>
        </div>
      )}
    </header>
  );
}
