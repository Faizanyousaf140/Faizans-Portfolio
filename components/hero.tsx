import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { facts, profile } from '@/data/portfolio';

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"/> OPEN TO AI/ML & FULL-STACK ROLES <span className="availability-line" /></div>
          <div className="hero-intro"><span className="eyebrow-line" /> MUHAMMAD FAIZAN YOUSAF</div>
          <h1 id="hero-title">AI <span className="hero-emphasis">models.</span><br /><span className="hero-outline">Full-stack</span> apps.</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-lede">I build <strong>full-stack applications and AI/ML systems</strong>, from Next.js interfaces and Python APIs to <strong>NLP, RAG and model fine-tuning</strong>. At Deaimer, I also contribute coding tasks and evaluation harnesses for AI agents.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={18}/></a>
            <a className="button button-outline" href={profile.resume} download="Faizan_Yousaf_Software_Engineer.pdf">Download résumé <ArrowUpRight size={16}/></a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={18}/></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={18}/></a>
            <span className="social-divider" />
            <span><MapPin size={14} aria-hidden="true"/> {profile.location}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-halo" aria-hidden="true"/>
          <div className="portrait-frame">
            <div className="portrait-photo"><Image src="/images/faizan-newest.webp" alt="Muhammad Faizan Yousaf" fill preload sizes="(max-width: 520px) 82vw, (max-width: 760px) 436px, (max-width: 980px) 40vw, 440px" /></div>
            <div className="portrait-overlay"/>
            <div className="portrait-bottom"><span>ENGINEERING</span><span className="portrait-star"><Sparkles size={15}/></span><span>+ INTELLIGENCE</span></div>
          </div>
          <div className="floating-chip floating-chip-top"><span className="chip-icon">&lt;/&gt;</span><div><small>BUILDING WITH</small><strong>Next.js / TypeScript</strong></div></div>
          <div className="floating-chip floating-chip-bottom"><span className="chip-symbol">✳</span><div><small>MODELS & APPLICATIONS</small><strong>AI/ML · NLP · LLMs</strong></div></div>
          <div className="orbit-mark orbit-mark-one" aria-hidden="true">+</div><div className="orbit-mark orbit-mark-two" aria-hidden="true">✳</div>
        </div>
      </div>
      <div className="container facts-wrap"><div className="facts-row">
        {facts.map((fact, i) => <div className="fact" key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span>{i !== facts.length - 1 && <span className="fact-separator" aria-hidden="true"/>}</div>)}
        <a href="#work" className="scroll-prompt">SCROLL TO EXPLORE <ArrowDownRight size={18}/></a>
      </div></div>
    </section>
  );
}
