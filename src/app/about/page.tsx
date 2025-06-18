import type { Metadata } from 'next';
import AboutHero from '@/components/sections/AboutHero';
import AboutContent from '@/components/sections/AboutContent';
import TeamSection from '@/components/sections/TeamSection';

export const metadata: Metadata = {
  title: 'Om os - TechFlow Solutions',
  description: 'Lær mere om TechFlow Solutions - dit pålidelige teknologipartner',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <TeamSection />
    </main>
  );
}
