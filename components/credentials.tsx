import { ArrowUpRight, Award, BookOpenCheck, Medal } from 'lucide-react';
import { credentials } from '@/data/portfolio';

export function Credentials() {
  return <section className="credentials-section section-pad" id="credentials" aria-labelledby="credentials-title">
    <div className="container">
      <div className="section-heading section-heading-split">
        <div><div className="section-kicker"><span className="section-count">04</span> LEARNING & MILESTONES</div><h2 id="credentials-title">Still <span className="section-heading-accent">learning.</span> Always.</h2></div>
        <p>Completed coursework and a nationally administered competency assessment. In-progress courses are not shown as earned certificates.</p>
      </div>
      <div className="credentials-layout">
        <div className="achievement-card"><div className="achievement-top"><div className="achievement-icon"><Medal size={27}/></div><span>HEC · 2026</span></div><div className="achievement-metric">97.7<span>th</span></div><h3>Percentile</h3><p>National Skills Competency Test for IT Graduates · 71 / 100 points</p><a className="achievement-foot achievement-proof" href="https://drive.google.com/file/d/1ah8CnYb5MKX_K-Mob808zeQZgUoyHt7n/view" target="_blank" rel="noopener noreferrer" aria-label="View HEC National Skills Competency Test result">VIEW HEC RESULT <ArrowUpRight size={15} aria-hidden="true" /></a></div>
        <div className="certification-stack">{credentials.map((c,i) => <div className="certificate" key={c.name}>
          <div className="certificate-icon">{i === 0 ? <Award size={24}/> : <BookOpenCheck size={24}/>}</div>
          <div className="certificate-detail"><span>{c.provider} · {c.date}</span><h3>{c.name}</h3><small>{c.label}</small></div>
          {c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`View credential: ${c.name}`} className="certificate-link"><ArrowUpRight size={20}/></a> : <span className="certificate-no-link" aria-label="Verification link not yet added">—</span>}
        </div>)}</div>
      </div>
    </div>
  </section>;
}
