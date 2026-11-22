import { ArrowUp } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner">
    <a className="wordmark footer-wordmark" href="#top"><span className="mark-box">F<span>Y</span></span><span className="mark-text">faizan<span className="accent">.</span>dev</span></a>
    <p>© {new Date().getFullYear()} {profile.shortName}. Designed & developed with Next.js + TypeScript.</p>
    <a className="back-to-top" href="#top">BACK TO TOP <ArrowUp size={15}/></a>
  </div></footer>;
}
