import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://faizanyousafs-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Faizan Yousaf — Full-Stack AI, ML & NLP Engineer', template: '%s | Faizan Yousaf' },
  description: 'Muhammad Faizan Yousaf builds full-stack AI products, LLM applications and NLP systems. Explore RAG, QLoRA fine-tuning, generative models and frontier-agent evaluation work at Deaimer.',
  keywords: ['Faizan Yousaf', 'Full-Stack AI Engineer', 'AI Engineer', 'Machine Learning Engineer', 'NLP Engineer', 'LLM Developer', 'Next.js', 'TypeScript', 'Python', 'RAG', 'Harness Engineering'],
  authors: [{ name: 'Muhammad Faizan Yousaf' }],
  creator: 'Muhammad Faizan Yousaf',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: '/', siteName: 'Faizan Yousaf — Portfolio',
    title: 'Faizan Yousaf — Full-Stack AI, ML & NLP Engineer',
    description: 'Full-stack AI products, LLM applications, NLP and frontier-agent evaluation.',
    images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Faizan Yousaf portfolio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Faizan Yousaf — Full-Stack AI, ML & NLP Engineer', images: ['/og-cover.png'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#101513' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
