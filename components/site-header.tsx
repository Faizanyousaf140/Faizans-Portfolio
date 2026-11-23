'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/portfolio';

const nav = [
  { text: 'Projects', href: '#work' },
  { text: 'Experience', href: '#experience' },
  { text: 'Research', href: '#research' },
  { text: 'About', href: '#about' },
  { text: 'Credentials', href: '#credentials' },
  { text: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    const desktop = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="Faizan Yousaf, back to top" onClick={() => setOpen(false)}>
          <span className="mark-box">F<span>Y</span></span><span className="mark-text">Faizan<span className="accent"> Yousaf</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(item => <a href={item.href} key={item.href}>{item.text}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
        <button ref={toggleRef} type="button" className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(v => !v)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
        {nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.text}<ArrowUpRight size={16}/></a>)}
        <a href={profile.resume} download="Faizan_Yousaf_Software_Engineer.pdf" onClick={() => setOpen(false)}>Download résumé <ArrowUpRight size={16}/></a>
      </nav>}
    </header>
  );
}
