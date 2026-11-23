import { ArrowUpRight, Code2, Compass, FlaskConical, ShieldCheck } from 'lucide-react';
import { profile, skills } from '@/data/portfolio';

const values = [
  { icon: Code2, title: 'Product thinking', description: 'Clear interfaces, realistic workflows and maintainable implementation.' },
  { icon: FlaskConical, title: 'Applied machine learning', description: 'Data preparation, model training and evaluation for language and vision tasks.' },
  { icon: ShieldCheck, title: 'Verification first', description: 'Edge cases, repeatable tests and evidence before confident claims.' },
];

export function About() {
  return <section className="about-section section-pad" id="about" aria-labelledby="about-title">
    <div className="container">
      <div className="section-heading section-heading-split">
        <div><div className="section-kicker"><span className="section-count">03</span> THE PERSON BEHIND THE CODE</div><h2 id="about-title">Curious by nature.<br/><span className="section-heading-accent">Practical by design.</span></h2></div>
        <p>I&apos;m a FAST-NUCES computer science graduate working across full-stack development, machine learning, NLP and LLM applications. I take projects from data and model experiments through APIs to a usable interface.</p>
      </div>
      <div className="about-layout">
        <div className="about-manifesto"><span className="quotation-mark">“</span><p>For me, good engineering means knowing <em>why</em> something works, not only that it runs.</p><div className="manifesto-footer"><span>FAIZAN YOUSAF</span><Compass size={21}/></div></div>
        <div className="value-grid">{values.map(({icon:Icon, title, description},i) => <div className="value-card" key={title}><div className="value-top"><Icon size={22} strokeWidth={1.7}/><span>0{i+1}</span></div><h3>{title}</h3><p>{description}</p></div>)}</div>
      </div>
      <div className="skills-section">
        <div className="skills-lead"><span className="archive-small">TOOLS & ENGINEERING SKILLS</span><h3>What I work with<span className="accent">.</span></h3><p>Languages, frameworks and methods I use to build full-stack apps, train and evaluate ML models, and develop NLP and LLM features.</p><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Explore my code <ArrowUpRight size={15}/></a></div>
        <div className="skill-groups">{skills.map(g => <div className="skill-group" key={g.title}><h4>{g.title}</h4><div>{g.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}</div></div>)}</div>
      </div>
    </div>
  </section>;
}
