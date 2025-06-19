import Hero from '@/components/sections/Hero';
import AIIdeas from '@/components/sections/AIIdeas';
import Services from '@/components/sections/Services';
import CaseStudiesShowcase from '@/components/sections/CaseStudiesShowcase';
import Contact from '@/components/sections/Contact';
import StructuredData from '@/components/seo/StructuredData';
import { FloatingCard } from '@/components/sections/FloatingCard';
import { 
  LazyStatsSection,
  LazyClientMarquee,
  LazyTestimonialsCarousel,
  LazyFeaturedEvents
} from '@/components/lazy/LazyComponents';

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
      <FloatingCard 
        title="Featured Case Study"
        subtitle="Digital Transformation"
        imageUrl="/images/case-studies/digital-transformation-hero/hero.jpg" 
        linkText="Læs mere"
        href="/case-studies/digital-transformation-hero"
      />
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
