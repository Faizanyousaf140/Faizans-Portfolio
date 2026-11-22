import Image from 'next/image';
import { ArrowUpRight, BrainCircuit, Code2, FileCode2, FileText, Fuel, GitBranch, Languages, Layers, Mic2, ScanEye, ShieldCheck, ShoppingBag, SlidersHorizontal, Sparkles } from 'lucide-react';
import type { Project } from '@/data/portfolio';

const iconMap = {
  knowledge: Layers, rental: FileText, document: FileCode2,
  route: Fuel, clinical: BrainCircuit, truck: GitBranch,
  testing: ShieldCheck, store: ShoppingBag, meeting: Mic2,
  triage: SlidersHorizontal, agent: Code2, nlp: Languages, generative: Sparkles, vision: ScanEye,
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
  nlp: ['LANGUAGE / MODELS', 'Understanding language'],
  generative: ['GENERATIVE / VISION', 'Learning to generate'],
  vision: ['VISION / REPRESENTATIONS', 'Images into understanding'],
};

export function ProjectArt({ project, large = false }: { project: Project; large?: boolean }) {
  const Icon = iconMap[project.visual];
  const [label, line] = graphicLabel[project.visual];
  return (
    <div className={`project-art art-${project.visual} ${large ? 'art-large' : ''} ${project.image ? 'has-project-image' : ''} ${project.imageKind === 'concept' ? 'has-concept-image' : ''}`}>
      {project.image ? <>
        <Image className="project-screenshot" src={project.image} fill sizes={large ? '(max-width: 800px) 100vw, 560px' : '(max-width: 600px) 100vw, 400px'} alt={project.imageKind === 'concept' ? `AI-generated concept illustration for ${project.name}; not a screenshot or model output` : project.imageKind === 'illustration' ? `Illustrative project overview for ${project.name}; not a live screenshot` : project.imageKind === 'training' ? `${project.name} training sample comparison from the project repository` : `${project.name} application screenshot`} />
        <div className="screenshot-shade"/>
      </> : <>
        <div className="art-mesh" aria-hidden="true"/>
        <div className="art-panel art-panel-back" aria-hidden="true"/>
        <div className="art-panel art-panel-front">
          <div className="panel-top"><div className="panel-dots"><i/><i/><i/></div><span>{project.name.toUpperCase()}</span><ArrowUpRight size={13}/></div>
          <div className="panel-body"><div className="art-symbol"><Icon size={large ? 54 : 43} strokeWidth={1.35}/></div><div className="panel-lines"><i/><i/><i/></div><div className="panel-number">0{project.slug.length % 7 + 1}<span> / SYSTEM</span></div></div>
        </div>
      </>}
      {project.imageKind === 'concept' && <span className="concept-image-label">AI CONCEPT ILLUSTRATION</span>}
      {project.imageKind === 'illustration' && <span className="concept-image-label">PROJECT ILLUSTRATION</span>}
      {project.imageKind === 'training' && <span className="concept-image-label">PROJECT TRAINING SAMPLES</span>}
      <div className="art-caption"><small>{label}</small><strong>{line}</strong></div>
    </div>
  );
}
