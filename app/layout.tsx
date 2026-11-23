import type { Metadata, Viewport } from 'next';
import { profile } from '@/data/portfolio';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://faizanyousafs-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Faizan Yousaf — Software Engineer, AI/LLM Applications & Evaluation', template: '%s | Faizan Yousaf' },
  description: 'Software engineer building LLM applications and evaluation harnesses for coding agents. Explore full-stack products, retrieval systems, model fine-tuning and AI evaluation work at Deaimer.',
  authors: [{ name: 'Muhammad Faizan Yousaf' }],
  creator: 'Muhammad Faizan Yousaf',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: '/', siteName: 'Faizan Yousaf — Portfolio',
    title: 'Faizan Yousaf — Software Engineer, AI/LLM Applications & Evaluation',
    description: 'LLM applications, coding-agent evaluation and the software behind them.',
    images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Faizan Yousaf portfolio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Faizan Yousaf — Software Engineer, AI/LLM Applications & Evaluation', images: ['/og-cover.png'] },
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
  image: new URL('/images/faizan-newest.webp', siteUrl).href,
  jobTitle: profile.jobTitle,
  description: profile.bio,
  sameAs: [profile.github, profile.linkedin, profile.huggingface],
  worksFor: { '@type': 'Organization', name: 'Deaimer', url: 'https://www.deaimer.com/' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'FAST National University of Computer and Emerging Sciences', url: 'https://nu.edu.pk/' },
  knowsAbout: ['LLM applications', 'Coding-agent evaluation', 'Evaluation harnesses', 'Retrieval-augmented generation', 'Full-stack software engineering', 'Natural language processing'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} />{children}</body></html>;
}
