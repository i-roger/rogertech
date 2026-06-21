import SectionBadge from '../ui/sectionBadge';
import SectionTitle from '../ui/sectionTitle';
import ServiceCard from './serviceCard';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 border-b border-white/5 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center space-y-4 mb-16">
          <SectionBadge>SOLUÇÕES INTEGRADAS PARA A SUA MARCA</SectionBadge>
          <SectionTitle>Módulos de Engenharia de Alta Conversão</SectionTitle>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Aceleramos a sua operação através de infraestruturas modernas desenvolvidas especificamente para o seu modelo de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 font-mono">
          <ServiceCard
            icon="⌘"
            title="Landing Pages Premium"
            description="Landing pages modernas e profissionais desenvolvidas para transformar visitantes em clientes, integradas ao WhatsApp e otimizadas para gerar mais resultados para o seu negócio."
            footerLabel="Estrutura de Conversão"
            color="indigo"
          />
          <ServiceCard
            icon="📊"
            title="Sistemas & SaaS Web"
            description="Portais de clientes customizados, painéis administrativos escaláveis em nuvem e estruturas de banco de dados modernas e de alto rendimento."
            footerLabel="Escopo Corporativo"
            color="emerald"
          />
          <ServiceCard
            icon="⚡"
            title="Aplicações Mobile"
            description="Aplicativos nativos integrados para iOS e Android com interfaces responsivas rápidas, design limpo e alta otimização de hardware."
            footerLabel="Desenvolvimento Nativo"
            color="indigo"
          />
          <ServiceCard
            icon="⚙"
            title="Integração & Automação"
            description="Conexão direta de APIs de pagamentos, e-mails automatizados e pixel do Meta taticamente calibrados."
            footerLabel="Configuração de APIs"
            color="purple"
          />
          <ServiceCard
            icon="🛠️"
            title="Suporte de TI & PC"
            description="Suporte técnico rápido para a estabilidade da sua empresa, manutenção de computadores/notebooks, otimização térmica/hardware e infraestrutura de redes locais."
            footerLabel="Manutenção & TI"
            color="amber"
            iconAnimated
          />
        </div>
      </div>
    </section>
  );
}
