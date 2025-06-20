import Contact from '@/components/sections/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | TechFlow Solutions',
  description:
    'Kontakt TechFlow Solutions for professionel webudvikling, app udvikling og digitale løsninger. Vi er klar til at hjælpe dig med dit næste projekt.',
  keywords: 'kontakt, TechFlow Solutions, webudvikling, app udvikling, digitale løsninger',
  openGraph: {
    title: 'Kontakt | TechFlow Solutions',
    description:
      'Kontakt TechFlow Solutions for professionel webudvikling, app udvikling og digitale løsninger.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
