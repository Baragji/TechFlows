import { Metadata } from 'next';
import TestimonialsHero from '@/components/sections/TestimonialsHero';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import TestimonialsStats from '@/components/sections/TestimonialsStats';
import TestimonialsCTA from '@/components/sections/TestimonialsCTA';

export const metadata: Metadata = {
  title: 'Kundeanmeldelser - TechFlow Solutions',
  description:
    'Læs hvad vores kunder siger om vores services. Se anmeldelser og erfaringer fra virksomheder der har valgt TechFlow Solutions som deres teknologipartner.',
  keywords: 'anmeldelser, kundeerfaringer, testimonials, referencer, kundetilfredshed',
};

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsStats />
      <TestimonialsCTA />
    </main>
  );
}
