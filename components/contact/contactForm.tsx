'use client';

import { useState, FormEvent } from 'react';
import SectionBadge from '../ui/sectionBadge';
import SectionTitle from '../ui/sectionTitle';

export default function ContactForm() {
  const [formName, setFormName] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formService, setFormService] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappText = `*ROGERTECH*\n` +
                         `-----------------------------------------\n` +
                         `*Nome / Empresa:* ${formName}\n` +
                         `*Contato:* ${formContact}\n` +
                         `*Serviço:* ${formService}\n` +
                         `*Mensagem:* ${formMessage}\n`;

    const url = `https://api.whatsapp.com/send?phone=5521999055127&text=${encodeURIComponent(whatsappText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 space-y-6 text-left">
            <SectionBadge color='emerald'>PLANEJAR PROJETO</SectionBadge>
            <SectionTitle>Vamos Configurar a sua Solução?</SectionTitle>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Insira as especificações da sua demanda comercial. Nosso sistema processará uma Assinatura de Código (Hash) única que permite uma conexão ágil com nossa equipe técnica de desenvolvimento.
            </p>
            <div className="border border-white/5 bg-zinc-900/30 p-4 rounded-xl space-y-2 font-sans">
              <span className="text-white font-bold text-xs block">📲 Conexão Instantânea no WhatsApp</span>
              <p className="text-xs text-zinc-400">
                O formulário gera as especificações perfeitas de negócio que enviam um sumário de escopo direto para nossa caixa de entrada no WhatsApp.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-white/10 bg-zinc-900/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-3 font-mono">
                Entre em contato
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans" suppressHydrationWarning>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-zinc-500 uppercase text-[9px] font-mono block">NOME / EMPRESA</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-zinc-950/40 border border-white/10 focus:border-indigo-500 text-white px-4 py-3 rounded-lg outline-none transition-all font-sans"
                      placeholder="Ex: Roberto Carlos"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-zinc-500 uppercase text-[9px] font-mono block">CANAL DE CONTATO DIRETO</label>
                    <input
                      type="text"
                      required
                      value={formContact}
                      onChange={(e) => setFormContact(e.target.value)}
                      className="w-full bg-zinc-950/40 border border-white/10 focus:border-indigo-500 text-white px-4 py-3 rounded-lg outline-none transition-all font-sans"
                      placeholder="Ex: email, Instagram ou celular."
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-zinc-500 uppercase text-[9px] font-mono block">SERVIÇOS</label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full bg-zinc-950 border border-white/10 focus:border-indigo-500 text-white px-4 py-3 rounded-lg outline-none transition-all font-mono"
                      suppressHydrationWarning
                    >
                      <option value="Landing Pages e Sites">Landing Pages e Sites</option>
                      <option value="Automações e APIs">Automações e APIs</option>
                      <option value="Aplicativos Mobile" >Aplicativos Mobile</option>
                      <option value="Formatação">Formatação</option>
                      <option value="Formatação + Partição de Backup">Formatação + Partição de Backup</option>
                      <option value="Diagnóstico técnico Básico">Diagnóstico técnico Básico</option>
                      <option value="Diagnóstico técnico Completo">Diagnóstico técnico Completo</option>
                      <option value="Outros...">Outros...</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-500 uppercase text-[9px] font-mono block">MENSAGEM</label>
                  <textarea
                    rows={3}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-zinc-950/40 border border-white/10 focus:border-indigo-500 text-white px-4 py-3 rounded-lg outline-none transition-all font-sans"
                    placeholder="Descreva brevemente sua dor de negócio ou o sistema que você gostaria de construir..."
                    suppressHydrationWarning
                  />
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-lg font-bold text-sm tracking-wide hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/10 flex items-center justify-center space-x-2 font-mono cursor-pointer">
                  <span>Enviar para Análise</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
