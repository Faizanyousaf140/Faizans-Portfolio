import Image from 'next/image';
import { ArrowUpRight, BrainCircuit, Code2, FileCode2, FileText, Fuel, GitBranch, Layers, Mic2, ShieldCheck, ShoppingBag, SlidersHorizontal } from 'lucide-react';
import type { Project } from '@/data/portfolio';

const iconMap = {
  knowledge: Layers, rental: FileText, document: FileCode2,
  route: Fuel, clinical: BrainCircuit, truck: GitBranch,
  testing: ShieldCheck, store: ShoppingBag, meeting: Mic2,
  triage: SlidersHorizontal, agent: Code2,
};

const graphicLabel: Record<Project['visual'], [string, string]> = {
  knowledge: ['AI / WORKSPACE', 'Context-aware search'],
  rental: ['PRODUCT / PLATFORM', 'Property operations'],
  document: ['MODEL / MULTIMODAL', 'Image → Markdown'],
  route: ['BACKEND / MAPS', 'Optimized fuel stops'],
  clinical: ['RESEARCH / RAG', 'Evidence retrieval'],
  truck: ['ROUTING / COMPLIANCE', 'Driver trip planning'],
  testing: ['TESTING / CI', 'Validate · Automate'],
  store: ['ECOMMERCE / UX', 'Product storefront'],
  meeting: ['AUDIO / NLP', 'Meetings into meaning'],
  triage: ['DECISION / REVIEW', 'Explainable scoring'],
  agent: ['WORK IN PROGRESS', 'Human-reviewed testing'],
};

export function ProjectArt({ project, large = false }: { project: Project; large?: boolean }) {
  const Icon = iconMap[project.visual];
  const [label, line] = graphicLabel[project.visual];
  return (
    <div className={`project-art art-${project.visual} ${large ? 'art-large' : ''}`}>
      {project.image ? <>
        <Image className="project-screenshot" src={project.image} fill sizes={large ? '(max-width: 800px) 100vw, 560px' : '(max-width: 600px) 100vw, 400px'} alt={`${project.name} project visual`} />
        <div className="screenshot-shade"/>
      </> : <>
        <div className="art-mesh" aria-hidden="true"/>
        <div className="art-panel art-panel-back" aria-hidden="true"/>
        <div className="art-panel art-panel-front">
          <div className="panel-top"><div className="panel-dots"><i/><i/><i/></div><span>{project.name.toUpperCase()}</span><ArrowUpRight size={13}/></div>
          <div className="panel-body"><div className="art-symbol"><Icon size={large ? 54 : 43} strokeWidth={1.35}/></div><div className="panel-lines"><i/><i/><i/></div><div className="panel-number">0{project.slug.length % 7 + 1}<span> / SYSTEM</span></div></div>
        </div>
      </>}
      <div className="art-caption"><small>{label}</small><strong>{line}</strong></div>
    </div>
  );
}
