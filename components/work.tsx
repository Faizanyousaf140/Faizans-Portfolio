'use client';

import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Github, Layers3 } from 'lucide-react';
import { profile, projects, type Project, type ProjectCategory } from '@/data/portfolio';
import { ProjectArt } from '@/components/project-art';

const choices = ['All', 'AI / ML', 'Full-stack', 'LLMs / RAG', 'NLP', 'Generative AI', 'Computer Vision', 'Backend', 'Testing'] as const;
type CategoryFilter = 'All' | ProjectCategory;

function ProjectActions({ project }: { project: Project }) {
  return <><div className="project-links">
    {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source code`}><Github size={16}/> Source <ArrowUpRight size={14}/></a> : <span className="project-coming-soon">Private prototype · details above</span>}
    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} demo`}><ArrowUpRight size={15}/> {project.demoLabel || 'Demo'}</a>}
  </div>{project.demoNote && <p className="project-demo-note">{project.demoNote}</p>}</>;
}

function ProjectEvaluation({ project }: { project: Project }) {
  if (!project.evaluation) return null;
  return <div className="project-evaluation"><strong>{project.evaluation.value}</strong><p>{project.evaluation.detail}</p><a href={project.evaluation.url} target="_blank" rel="noopener noreferrer" aria-label={`Evaluation evidence: ${project.name}`}>Read evaluation evidence</a></div>;
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return <article className={`featured-card ${index === 0 ? 'featured-wide' : ''}`}>
    <ProjectArt project={project} large wide={index === 0} />
    <div className="featured-copy">
      <div className="featured-topline"><span>{project.eyebrow}</span><span className="feature-counter">0{index + 1} / 03</span></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.attribution && <p className="project-attribution">{project.attribution}</p>}
      <p className="feature-detail">{project.detail}</p>
      <ProjectEvaluation project={project}/>
      <div className="tech-list">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
      <ProjectActions project={project}/>
    </div>
  </article>;
}

function CompactProject({ project }: { project: Project }) {
  return <article className="compact-project">
    {project.image && <div className="compact-project-art compact-project-image"><ProjectArt project={project}/></div>}
    <div className="compact-project-body">
      <div className="compact-category"><span>{project.category}</span>{project.status !== 'Completed' && <span className="development-badge">IN DEVELOPMENT</span>}</div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.attribution && <p className="project-attribution">{project.attribution}</p>}
      <details className="project-notes"><summary>Implementation notes</summary><p>{project.detail}</p></details>
      <ProjectEvaluation project={project}/>
      <div className="tech-list tech-list-small">{project.stack.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div>
      <ProjectActions project={project}/>
    </div>
  </article>;
}

export function Work() {
  const [selected, setSelected] = useState<CategoryFilter>('All');
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter(p => p.featured);
  const archive = projects
    .filter(p => !p.featured && (selected === 'All' || p.category === selected))
    .sort((a, b) => choices.indexOf(a.category) - choices.indexOf(b.category));
  const other = selected === 'All' && !showAll ? archive.filter(p => p.selected) : archive;
  return <section className="work-section section-pad" id="work" aria-labelledby="work-title">
    <div className="container">
      <div className="section-heading section-heading-split">
        <div><div className="section-kicker"><span className="section-count">01</span> SELECTED WORK</div><h2 id="work-title">Things I&apos;ve <span className="section-heading-accent">built.</span></h2></div>
        <p>Web products, machine learning pipelines, LLM applications and NLP projects, with the APIs, interfaces and tests that make them usable.</p>
      </div>
      <div className="featured-grid">{featured.map((p,i) => <FeaturedProject key={p.slug} project={p} index={i}/>)}</div>
      <div className="archive-heading">
        <div><span className="archive-small">AI / ML, FULL-STACK & BACKEND</span><h3>More selected work <Layers3 size={24}/></h3></div>
        <a href={profile.github} className="text-link" target="_blank" rel="noopener noreferrer">All GitHub repositories <ArrowUpRight size={16}/></a>
      </div>
      <div className="filter-tabs" role="group" aria-label="Filter projects by category">
        {choices.map(choice => <button key={choice} type="button" aria-pressed={selected === choice} className={`filter-tab ${selected === choice ? 'active' : ''}`} onClick={() => setSelected(choice)}>{choice}</button>)}
      </div>
      <div id="project-archive">{other.length ? <div className="projects-grid">{other.map(p => <CompactProject key={p.slug} project={p}/>)}</div> : <div className="empty-projects">No additional projects in this category. Explore the featured projects above. <button type="button" onClick={() => setSelected('All')}>See all <ArrowRight size={14}/></button></div>}</div>
      {selected === 'All' && <div className="project-archive-toggle"><button className="button button-outline" type="button" aria-expanded={showAll} aria-controls="project-archive" onClick={() => setShowAll(value => !value)}>{showAll ? 'Show selected projects' : `Show all ${projects.length} projects`}</button><p>{showAll ? 'Includes coursework, model experiments and prototypes.' : 'Explore more NLP, generative AI, computer vision and testing work, or choose a category above.'}</p></div>}
      <div className="work-footer-note"><span className="note-asterisk">*</span> A portfolio of selected work, not a claim that every prototype is production-deployed. Development status is shown explicitly.</div>
    </div>
  </section>;
}
