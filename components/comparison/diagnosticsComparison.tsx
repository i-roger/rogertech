import SectionBadge from '../ui/sectionBadge';
import SectionTitle from '../ui/sectionTitle';
import ComparisonTable from '../analytics/comparisonTable';

export default function DiagnosticsComparison() {
  return (
    <section id="supportit" className="py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 space-y-6">
            <SectionBadge>SUPORTE DE TI & PC</SectionBadge>
            <SectionTitle>Diagnóstico Completo vs Básico</SectionTitle>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Um computador lento nem sempre precisa ser trocado. Realizamos uma análise técnica completa para identificar gargalos, falhas e oportunidades reais de otimização antes de qualquer manutenção ou upgrade.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ComparisonTable
              topLeft="COMPLETO VS BÁSICO"
              topRight="INFORMAÇÕES"
              headers={[
                { text: "Completo", className: "font-semibold text-white text-center uppercase" },
                { text: "Básico", className: "font-semibold text-white text-center uppercase" },
              ]}
              rows={[
                [
                  { text: "Teste completos", className: "py-4 text-emerald-400 font-bold text-center" },
                  { text: "Verificação rápida", className: "py-4 text-emerald-400 font-bold text-center" },
                ],
                [
                  { text: "Benchmark", className: "py-4 text-emerald-400 font-bold text-center" },
                  { text: "Identificação do problema principal", className: "py-4 text-emerald-400 font-bold text-center" },
                ],
                [
                  { text: "Temperaturas", className: "py-4 text-emerald-400 font-bold text-center" },
                  { text: "X", className: "py-4 text-zinc-500 text-center" },
                ],
                [
                  { text: "Saúde SSD", className: "py-4 text-emerald-400 font-bold text-center" },
                  { text: "X", className: "py-4 text-zinc-500 text-center" },
                ],
                [
                  { text: "Plano de Upgrade/otimização", className: "py-4 text-emerald-400 font-bold text-center" },
                  { text: "X", className: "py-4 text-zinc-500 text-center" },
                ],
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
