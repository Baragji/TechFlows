import TestimonialsCTA from '@/components/sections/TestimonialsCTA';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import TestimonialsHero from '@/components/sections/TestimonialsHero';
import TestimonialsStats from '@/components/sections/TestimonialsStats';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kundeanmeldelser - TechFlow Solutions',
  description:
    'Læs hvad vores kunder siger om vores services. Se anmeldelser og erfaringer fra virksomheder der har valgt TechFlow Solutions som deres teknologipartner.',
  keywords: 'anmeldelser, kundeerfaringer, testimonials, referencer, kundetilfredshed',
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsStats />
      <TestimonialsCTA />
    </>
  );
}
