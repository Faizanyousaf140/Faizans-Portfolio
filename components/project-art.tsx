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
  const image = project.image;

  if (image) {
    const kindLabel = project.imageKind === 'concept' ? 'AI CONCEPT ILLUSTRATION'
      : project.imageKind === 'illustration' ? 'PROJECT ILLUSTRATION'
      : project.imageKind === 'training' ? 'PROJECT TRAINING SAMPLES' : undefined;
    const alt = project.imageKind === 'concept' ? `AI-generated concept illustration for ${project.name}; not a screenshot or model output`
      : project.imageKind === 'illustration' ? `Illustrative project overview for ${project.name}; not a live screenshot`
      : project.imageKind === 'training' ? `${project.name} training sample comparison from the project repository`
      : `${project.name} application screenshot`;

    return <figure className={`project-art art-${project.visual} has-project-image ${large ? 'art-large' : ''} ${project.imageKind === 'concept' ? 'has-concept-image' : ''}`}>
      <a className="project-image-link" href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size image: ${project.name}`}>
        <Image className="project-screenshot" src={image.src} width={image.width} height={image.height} sizes="(max-width: 520px) 90vw, (max-width: 760px) 94vw, (max-width: 980px) 44vw, 590px" alt={alt} />
      </a>
      <figcaption className="art-image-caption">
        <div className="art-image-description"><small>{label}</small><strong>{line}</strong></div>
        <div className="art-image-actions">
          {kindLabel && <span className="concept-image-label">{kindLabel}</span>}
          <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${project.name}`}>View full image</a>
        </div>
      </figcaption>
    </figure>;
  }

  return (
    <div className={`project-art art-${project.visual} ${large ? 'art-large' : ''}`}>
        <div className="art-mesh" aria-hidden="true"/>
        <div className="art-panel art-panel-back" aria-hidden="true"/>
        <div className="art-panel art-panel-front">
          <div className="panel-top"><div className="panel-dots"><i/><i/><i/></div><span>{project.name.toUpperCase()}</span><ArrowUpRight size={13}/></div>
          <div className="panel-body"><div className="art-symbol"><Icon size={large ? 54 : 43} strokeWidth={1.35}/></div><div className="panel-lines"><i/><i/><i/></div></div>
        </div>
      <div className="art-caption"><small>{label}</small><strong>{line}</strong></div>
    </div>
  );
}
