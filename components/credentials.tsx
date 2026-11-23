import Image from 'next/image';
import { ArrowUpRight, Medal } from 'lucide-react';
import { credentials, type Credential } from '@/data/portfolio';

function CertificateCard({ credential: c }: { credential: Credential }) {
  return <article className="certificate">
    <a className="certificate-preview" href={c.image.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size certificate image: ${c.name}`}>
      <Image src={c.image.src} width={c.image.width} height={c.image.height} alt={`${c.name} certificate awarded to Muhammad Faizan Yousaf`} sizes="(max-width: 520px) 90vw, (max-width: 980px) 45vw, 320px" />
    </a>
    <div className="certificate-detail"><span>{c.provider} · {c.date}</span><h3>{c.name}</h3><small>{c.label}</small></div>
    <div className="certificate-actions">
      <a className="certificate-image-link" href={c.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open certificate image: ${c.name}`}>View image</a>
      {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`View credential: ${c.name}`} className="certificate-link">Verify credential</a>}
    </div>
  </article>;
}

export function Credentials() {
  return <section className="credentials-section section-pad" id="credentials" aria-labelledby="credentials-title">
    <div className="container">
      <div className="section-heading section-heading-split">
        <div><div className="section-kicker"><span className="section-count">04</span> LEARNING & MILESTONES</div><h2 id="credentials-title">Still <span className="section-heading-accent">learning.</span> Always.</h2></div>
        <p>Machine learning and NLP coursework, internship certificates and a nationally administered competency assessment.</p>
      </div>
      <div className="credentials-layout">
        <div className="achievement-card">
          <div className="achievement-top"><div className="achievement-icon"><Medal size={27}/></div><span>HEC · 2026</span></div>
          <div className="achievement-metric">97.7<span>th</span></div><h3>Percentile</h3>
          <p>National Skills Competency Test for IT Graduates · 71 / 100 points</p>
          <a className="achievement-preview" href="/certificates/hec-nsct-result.webp" target="_blank" rel="noopener noreferrer" aria-label="View full-size HEC test result image">
            <span className="achievement-preview-image"><Image src="/certificates/hec-nsct-result.webp" alt="HEC National Skills Competency Test result showing 71 points and 97.7th percentile" width={1601} height={1813} sizes="(max-width: 760px) 85vw, (max-width: 980px) 42vw, 420px" /></span>
            <span className="achievement-preview-caption">View result image</span>
          </a>
          <a className="achievement-foot achievement-proof" href="https://drive.google.com/file/d/1ah8CnYb5MKX_K-Mob808zeQZgUoyHt7n/view" target="_blank" rel="noopener noreferrer" aria-label="View HEC National Skills Competency Test result">VIEW HEC RESULT <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="certification-stack">
          {credentials.slice(0, 4).map(c => <CertificateCard key={c.name} credential={c} />)}
          <details className="additional-credentials"><summary>Additional coursework · Google certificates</summary><div className="certification-stack">{credentials.slice(4).map(c => <CertificateCard key={c.name} credential={c} />)}</div></details>
        </div>
      </div>
    </div>
  </section>;
}
