import Image from 'next/image';
import { deaimerAuthorUrl, research } from '@/data/portfolio';

export function Research() {
  return <section className="research-section section-pad" id="research" aria-labelledby="research-title">
    <div className="container">
      <div className="section-heading section-heading-split">
        <div><div className="section-kicker">PUBLISHED ON DEAIMER</div><h2 id="research-title">Research & <span className="section-heading-accent">writing.</span></h2></div>
        <p>Perspectives published on Deaimer&apos;s research platform, covering agent evaluation, human oversight and security.</p>
      </div>
      <div className="research-grid">{research.map(article => <article className="research-card" key={article.slug}>
        <div className="research-cover"><Image src={article.image} alt="" fill sizes="(max-width: 520px) 90vw, (max-width: 980px) 40vw, 380px" /></div>
        <div className="research-card-body">
          <div className="research-meta"><span>{article.topic}</span><span>Perspective</span></div>
          <time dateTime={article.date}>{new Date(`${article.date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>
          <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
          <p>{article.description}</p>
          <div className="research-actions">
            <a className="research-read" href={article.url} target="_blank" rel="noopener noreferrer" aria-label={`Read article: ${article.title}`}>Read article</a>
            <a href={`${article.url}/download`} target="_blank" rel="noopener noreferrer" aria-label={`Download PDF: ${article.title}`}>Download PDF</a>
          </div>
        </div>
      </article>)}</div>
      <a className="research-author-link" href={deaimerAuthorUrl} target="_blank" rel="noopener noreferrer">View my Deaimer author profile</a>
    </div>
  </section>;
}
