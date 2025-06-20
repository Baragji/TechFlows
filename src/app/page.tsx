import {
  LazyClientMarquee,
  LazyFeaturedEvents,
  LazyStatsSection,
  LazyTestimonialsCarousel
} from '@/components/lazy/LazyComponents';
import AIIdeas from '@/components/sections/AIIdeas';
import CaseStudiesShowcase from '@/components/sections/CaseStudiesShowcase';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import StructuredData from '@/components/seo/StructuredData';

export default function Home() {
  const organizationData = {
    name: 'TechFlow Solutions',
    url: 'https://techflow.dk',
    logo: 'https://techflow.dk/logo.png',
    description: 'Innovative teknologiløsninger til moderne virksomheder. Specialiseret i app udvikling, hjemmesider og automatisering.',
  };

  return (
    <main>
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="WebSite" data={{ name: 'TechFlow Solutions', url: 'https://techflow.dk' }} />
      <StructuredData type="LocalBusiness" data={{}} />

      <Hero />
      <AIIdeas />
      <Services />
      <CaseStudiesShowcase />
      <LazyStatsSection />
      <LazyClientMarquee />
      <LazyTestimonialsCarousel />
      <LazyFeaturedEvents />
      <Contact />
    </main>
  );
}
