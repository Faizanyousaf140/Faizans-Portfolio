import type { Metadata, Viewport } from 'next';
import { profile } from '@/data/portfolio';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://faizanyousafs-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Faizan Yousaf — AI/ML Engineer & Full-Stack Developer', template: '%s | Faizan Yousaf' },
  description: 'AI/ML engineer and full-stack developer building web applications, machine learning pipelines, NLP systems and LLM features with Next.js, TypeScript and Python.',
  authors: [{ name: 'Muhammad Faizan Yousaf' }],
  creator: 'Muhammad Faizan Yousaf',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: '/', siteName: 'Faizan Yousaf — Portfolio',
    title: 'Faizan Yousaf — AI/ML Engineer & Full-Stack Developer',
    description: 'Full-stack web products, machine learning, NLP and LLM applications.',
    images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Faizan Yousaf portfolio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Faizan Yousaf — AI/ML Engineer & Full-Stack Developer', images: ['/og-cover.png'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#101513' };

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl.replace(/\/$/, '')}/#person`,
  name: profile.fullName,
  alternateName: profile.shortName,
  url: siteUrl,
  image: new URL('/images/faizan-blue-portrait.webp', siteUrl).href,
  jobTitle: profile.jobTitle,
  description: profile.bio,
  sameAs: [profile.github, profile.linkedin, profile.huggingface],
  worksFor: { '@type': 'Organization', name: 'Deaimer', url: 'https://www.deaimer.com/' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'FAST National University of Computer and Emerging Sciences', url: 'https://nu.edu.pk/' },
  knowsAbout: ['Machine learning', 'Full-stack software engineering', 'Natural language processing', 'LLM applications', 'Computer vision', 'Model fine-tuning', 'Retrieval-augmented generation', 'Coding-agent evaluation', 'Evaluation harnesses'],
};

const themeScript = `(function(){var theme='dark';try{var saved=localStorage.getItem('portfolio-theme');theme=saved==='light'||saved==='dark'?saved:matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}catch(e){theme=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=theme;})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} />{children}</body></html>;
}
