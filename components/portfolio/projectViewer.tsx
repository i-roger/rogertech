import { Project } from '@/lib/types';
import LighthouseMetric from './lighthouseMetric';

interface ProjectViewerProps {
  project: Project;
}

export default function ProjectViewer({ project }: ProjectViewerProps) {
  return (
    <div className="lg:col-span-8">
      <div className="border border-white/10 bg-zinc-900/40 rounded-2xl overflow-hidden shadow-2xl relative">

        <div className="bg-[#0b0b14] border-b border-white/10 px-6 py-4 flex justify-between items-center font-mono">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs text-white font-bold uppercase">{project.title}</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase block font-mono tracking-wider">SOBRE O PROJETO</span>
            <p className="text-sm text-zinc-300 leading-relaxed font-sans">{project.desc}</p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase block font-mono tracking-wider">STACK DE DESENVOLVIMENTO</span>
            <div className="flex flex-wrap gap-1.5 pt-1 font-sans">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="border border-indigo-500/15 bg-indigo-500/5 text-indigo-300 text-[10px] px-3.5 py-1 rounded-full font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 space-y-4">
            <span className="text-[10px] text-zinc-500 uppercase block font-mono tracking-wider">MÉTRICAS DO LIGHTHOUSE (PRODUÇÃO)</span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <LighthouseMetric label="Performance" value={project.lighthouse.performance} />
              <LighthouseMetric label="Acessibilidade" value={project.lighthouse.accessibility} />
              <LighthouseMetric label="Práticas Recomendadas" value={project.lighthouse.bestPractices} />
              <LighthouseMetric label="SEO" value={project.lighthouse.seo} />
            </div>
          </div>

          {project.liveUrl && (
            <div className="pt-2 font-mono">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-indigo-600/10 hover:bg-indigo-600 hover:text-white border border-indigo-500/20 text-indigo-400 text-xs font-semibold py-2.5 px-6 rounded-lg tracking-wide transition-all"
              >
                <span>Acessar Projeto</span>
                <span className="ml-2">→</span>
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
