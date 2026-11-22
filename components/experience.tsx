import Image from 'next/image';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { experience, profile } from '@/data/portfolio';

export function Experience() {
  return <section id="experience" className="experience-section section-pad" aria-labelledby="experience-title">
    <div className="container">
      <div className="section-heading section-heading-split">
        <div><div className="section-kicker"><span className="section-count">02</span> EXPERIENCE</div><h2 id="experience-title">Where I&apos;ve <span className="section-heading-accent">grown.</span></h2></div>
        <p>Hands-on software engineering, systematic evaluation and teaching technical concepts to others.</p>
      </div>
      <div className="experience-layout">
        <div className="experience-aside"><div className="aside-square"><BriefcaseBusiness size={30} strokeWidth={1.4}/><span>HOW I WORK</span></div><h3>Build.<br/>Break.<br/><span>Improve.</span></h3><p>I value readable code, reproducible tests and honest documentation just as much as a polished interface.</p></div>
        <div className="timeline">
          {experience.map((item,i) => <article className="timeline-entry" key={item.organization}>
            <div className="timeline-rail"><span className={i === 0 ? 'timeline-node active' : 'timeline-node'}/></div>
            <div className="timeline-content">
              <div className="timeline-meta"><span>{item.when}</span><span>{item.kind}</span></div>
              <h3>{item.position}</h3>
              <div className="timeline-org">{item.logo && item.organizationUrl ? <a className="timeline-company-logo" href={item.organizationUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.organization}`}><Image src={item.logo} alt={item.organization} width={199} height={48} sizes="166px" /></a> : item.organization}</div>
              <p className="timeline-summary">{item.summary}</p>
              <ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              {item.models && <div className="experience-models"><span>MODELS WORKED WITH</span><div className="tech-list">{item.models.map(model => <span key={model}>{model}</span>)}</div></div>}
              {item.certificate && <a className="experience-certificate" href={item.certificate.image} target="_blank" rel="noopener noreferrer">{item.certificate.label} <ArrowUpRight size={15} aria-hidden="true" /></a>}
              {item.authorUrl && <div className="timeline-research-links"><a href="#research">Explore my research</a><a href={item.authorUrl} target="_blank" rel="noopener noreferrer">Deaimer author profile</a></div>}
            </div>
          </article>)}
        </div>
      </div>
      <div className="education-strip">
        <div className="education-symbol"><Image src="/education/fast-nuces.webp" alt="FAST National University of Computer and Emerging Sciences logo" width={64} height={64} sizes="(max-width: 520px) 44px, 64px" /></div>
        <div><span className="education-label">EDUCATION</span><h3>BS Computer Science <span>· FAST-NUCES</span></h3><p>Chiniot–Faisalabad Campus · August 2022 – June 2026</p></div>
        <div className="education-grade"><span>CGPA</span><strong>3.33<span> / 4.00</span></strong></div>
        <a className="education-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="View education on LinkedIn"><ArrowUpRight size={21}/></a>
      </div>
    </div>
  </section>;
}
