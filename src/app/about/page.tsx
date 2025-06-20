import AboutContent from '@/components/sections/AboutContent';
import AboutHero from '@/components/sections/AboutHero';
import TeamSection from '@/components/sections/TeamSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om os - TechFlow Solutions',
  description: 'Lær mere om TechFlow Solutions - dit pålidelige teknologipartner',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutContent />
      <TeamSection />
    </div>
  );
}
