import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { Work } from '@/components/work';
import { Experience } from '@/components/experience';
import { Research } from '@/components/research';
import { About } from '@/components/about';
import { Credentials } from '@/components/credentials';
import { Contact } from '@/components/contact';
import { SiteFooter } from '@/components/site-footer';

export default function HomePage() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content"><Hero/><Work/><Experience/><Research/><About/><Credentials/><Contact/></main>
    <SiteFooter />
  </>;
}
