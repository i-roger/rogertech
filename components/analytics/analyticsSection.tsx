import SectionBadge from '../ui/sectionBadge';
import SectionTitle from '../ui/sectionTitle';
import ComparisonTable from './comparisonTable';

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 space-y-6">
            <SectionBadge>ENGENHARIA DE CONVERSÃO</SectionBadge>
            <SectionTitle>Engenharia Digital Desenvolvida para Escala</SectionTitle>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Sua empresa não cresce com sites lentos ou modelos prontos de criadores visuais. Criamos estruturas com arquitetura própria de alta performance, focando na velocidade que o seu funil de tráfego pago exige.
            </p>

            <div className="space-y-4 pt-2 font-sans">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs mt-0.5 font-mono">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Velocidade como Alavanca de Vendas</h4>
                  <p className="text-xs text-zinc-400">Menos de 1 segundo de carregamento significa uma redução drástica de clientes potenciais que saem da sua página.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs mt-0.5 font-mono">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Rastreabilidade Científica de Cliques</h4>
                  <p className="text-xs text-zinc-400">Mapeamento preciso de interações para otimizar os seus anúncios e otimizar o seu ROI diário.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ComparisonTable
              topLeft="METRICA COMPARTILHADA"
              topRight="MÉDIAS DE MERCADO"
              headers={[
                { text: "INDICADORES CHAVE", className: "font-semibold text-zinc-500" },
                { text: "ARQUITETURA ROGERTECH", className: "font-semibold text-white text-center" },
                { text: "CONVENCIONAIS", className: "font-semibold text-zinc-500 text-center" },
              ]}
              rows={[
                [
                  { text: "Carregamento Completo", className: "py-4 font-semibold text-white font-sans" },
                  { text: "Menos de 0.8 Segundos", className: "py-4 text-emerald-400 font-bold text-center" },
                  { text: "3-6 Segundos", className: "py-4 text-zinc-500 text-center" },
                ],
                [
                  { text: "Taxa Média de Conversão", className: "py-4 font-semibold text-white font-sans" },
                  { text: "8% - 15%", className: "py-4 text-emerald-400 font-bold text-center" },
                  { text: "1% - 3%", className: "py-4 text-zinc-500 text-center" },
                ],
                [
                  { text: "Nota de Desempenho Google", className: "py-4 font-semibold text-white font-sans" },
                  { text: "98+ / 100", className: "py-4 text-indigo-400 font-bold text-center" },
                  { text: "Abaixo de 60/100", className: "py-4 text-zinc-500 text-center" },
                ],
                [
                  { text: "Segurança de Dados", className: "py-4 font-semibold text-white font-sans" },
                  { text: "Totalmente Blindado", className: "py-4 text-emerald-400 font-bold text-center" },
                  { text: "Vulnerável a Invasões", className: "py-4 text-red-400/80 text-center" },
                ],
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
