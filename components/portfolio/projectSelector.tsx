import { Project } from '@/lib/types';

interface ProjectSelectorProps {
  projectsData: Record<string, Project>;
  selectedNode: string;
  onSelect: (key: string) => void;
}

export default function ProjectSelector({ projectsData, selectedNode, onSelect }: ProjectSelectorProps) {
  return (
    <div className="lg:col-span-4 space-y-4 font-mono">
      {Object.keys(projectsData).map((nodeKey) => {
        const proj = projectsData[nodeKey];
        const isActive = selectedNode === nodeKey;
        return (
          <div
            key={nodeKey}
            onClick={() => onSelect(nodeKey)}
            className={`cursor-pointer border p-5 rounded-xl transition-all duration-300 block ${
              isActive ? 'border-indigo-500 bg-indigo-500/5 shadow-lg' : 'border-white/5 hover:border-white/20 bg-zinc-900/30'
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className={`text-[10px] font-bold ${isActive ? 'text-indigo-400' : 'text-zinc-500'}`}>
                {nodeKey.toUpperCase()}
              </span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            </div>
            <h4 className="text-sm font-bold text-white font-sans">{proj.deviceTitle}</h4>
            <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1 font-sans">{proj.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
