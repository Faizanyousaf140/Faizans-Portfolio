import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://faizanyousafs-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Faizan Yousaf — Full-Stack & Applied AI Engineer', template: '%s | Faizan Yousaf' },
  description: 'Portfolio of Muhammad Faizan Yousaf, a FAST-NUCES computer science graduate and Software Engineer building full-stack applications, RAG systems and reliable AI evaluations.',
  keywords: ['Faizan Yousaf', 'Full-Stack Engineer', 'Next.js', 'TypeScript', 'Python', 'Applied AI', 'RAG', 'Software Engineer', 'Django REST'],
  authors: [{ name: 'Muhammad Faizan Yousaf' }],
  creator: 'Muhammad Faizan Yousaf',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: '/', siteName: 'Faizan Yousaf — Portfolio',
    title: 'Faizan Yousaf — Full-Stack & Applied AI Engineer',
    description: 'Thoughtful products. Reliable systems. Practical AI.',
    images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Faizan Yousaf portfolio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Faizan Yousaf — Engineering & Applied AI', images: ['/og-cover.png'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#101513' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
