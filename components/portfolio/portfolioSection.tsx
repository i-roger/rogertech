'use client';

import { useState } from 'react';
import { projectsData } from '@/lib/data';
import SectionBadge from '../ui/sectionBadge';
import SectionTitle from '../ui/sectionTitle';
import ProjectSelector from './projectSelector';
import ProjectViewer from './projectViewer';

export default function PortfolioSection() {
  const [selectedNode, setSelectedNode] = useState<string>("Panorama");

  return (
    <section id="portfolio" className="py-20 border-b border-white/5 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center space-y-4 mb-16">
          <SectionBadge color="gold">PORTFÓLIO E NODES ATIVOS</SectionBadge>
          <SectionTitle>Projetos Reais em Funcionamento</SectionTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <ProjectSelector
            projectsData={projectsData}
            selectedNode={selectedNode}
            onSelect={setSelectedNode}
          />
          <ProjectViewer project={projectsData[selectedNode]} />
        </div>
      </div>
    </section>
  );
}
