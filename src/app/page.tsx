import Hero from '@/components/sections/Hero';
import AIIdeas from '@/components/sections/AIIdeas';
import Services from '@/components/sections/Services';
import FeaturedCaseStudies from '@/components/sections/FeaturedCaseStudies';
import StatsSection from '@/components/sections/StatsSection';
import ClientMarquee from '@/components/sections/ClientMarquee';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import FeaturedEvents from '@/components/sections/FeaturedEvents';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <AIIdeas />
      <Services />
      <FeaturedCaseStudies />
      <StatsSection />
      <ClientMarquee />
      <TestimonialsCarousel />
      <FeaturedEvents />
      <Contact />
    </main>
  );
}
