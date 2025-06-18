import { Metadata } from 'next';
import ServiceTemplate from '@/components/templates/ServiceTemplate';

export const metadata: Metadata = {
  title: 'Hjemmeside Udvikling | TechFlow Solutions',
  description: 'Moderne, responsive hjemmesider der konverterer besøgende til kunder. Professionel webdesign og udvikling med fokus på brugeroplevelse og performance.',
  keywords: 'hjemmeside udvikling, webdesign, responsive design, SEO, CMS, WordPress, Next.js',
};

const features = [
  {
    title: 'Responsive Design',
    description: 'Perfekt visning på alle enheder - desktop, tablet og mobil med optimeret brugeroplevelse.',
    icon: 'DevicePhoneMobileIcon',
  },
  {
    title: 'SEO Optimeret',
    description: 'Bygget med søgemaskineoptimering fra starten for bedre synlighed og organisk trafik.',
    icon: 'MagnifyingGlassIcon',
  },
  {
    title: 'Performance Fokus',
    description: 'Lynhurtige indlæsningstider og optimeret kode for den bedste brugeroplevelse.',
    icon: 'BoltIcon',
  },
  {
    title: 'CMS Integration',
    description: 'Brugervenlige content management systemer så du nemt kan opdatere dit indhold.',
    icon: 'GlobeAltIcon',
  },
  {
    title: 'Analytics Setup',
    description: 'Komplet opsætning af tracking og analytics for at måle din hjemmesides performance.',
    icon: 'ChartBarIcon',
  },
  {
    title: 'Sikkerhed & Backup',
    description: 'Avancerede sikkerhedsforanstaltninger og automatiske backups for ro i sindet.',
    icon: 'ShieldCheckIcon',
  },
];

const benefits = [
  {
    title: 'Øget Konvertering',
    description: 'Professionelt design og optimeret brugeroplevelse der konverterer flere besøgende til kunder.',
    metric: '+40%',
  },
  {
    title: 'Bedre SEO Ranking',
    description: 'Teknisk optimeret kode og struktur der forbedrer din placering i søgeresultaterne.',
    metric: '+65%',
  },
  {
    title: 'Hurtigere Indlæsning',
    description: 'Optimeret performance der reducerer bounce rate og forbedrer brugeroplevelsen.',
    metric: '< 2s',
  },
  {
    title: 'Mobilvenlig',
    description: 'Responsive design der fungerer perfekt på alle enheder og skærmstørrelser.',
    metric: '100%',
  },
];

const process = [
  {
    step: 1,
    title: 'Analyse & Strategi',
    description: 'Vi analyserer dine behov, målgruppe og konkurrenter for at skabe den optimale strategi for din hjemmeside.',
  },
  {
    step: 2,
    title: 'Design & Wireframes',
    description: 'Udvikling af wireframes og visuelle designs der afspejler dit brand og optimerer brugeroplevelsen.',
  },
  {
    step: 3,
    title: 'Udvikling & Kodning',
    description: 'Professionel kodning med moderne teknologier og best practices for performance og sikkerhed.',
  },
  {
    step: 4,
    title: 'Test & Optimering',
    description: 'Grundig testing på alle enheder og browsere samt optimering af hastighed og SEO.',
  },
  {
    step: 5,
    title: 'Launch & Support',
    description: 'Lancering af din hjemmeside med fuld support og træning i at administrere dit nye site.',
  },
];

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'WordPress',
  'Shopify',
  'Webflow',
  'Figma',
  'Google Analytics',
  'Search Console',
  'Cloudflare',
  'Vercel',
];

export default function HjemmesiderPage() {
  return (
    <ServiceTemplate
      title="Hjemmeside Udvikling"
      subtitle="Moderne, responsive hjemmesider der konverterer"
      description="Vi skaber professionelle hjemmesider der ikke bare ser godt ud, men også leverer resultater. Med fokus på brugeroplevelse, performance og konvertering hjælper vi din virksomhed med at skille sig ud online og tiltrække flere kunder."
      heroGradient="from-accent-blue to-accent-purple"
      icon="GlobeAltIcon"
      features={features}
      benefits={benefits}
      process={process}
      technologies={technologies}
      caseStudyTitle="Succeshistorie: 300% stigning i leads"
      caseStudyDescription="Vi hjalp en lokal virksomhed med at redesigne deres hjemmeside, hvilket resulterede i en dramatisk stigning i leads og online synlighed."
      caseStudyMetrics={[
        { label: 'Stigning i leads', value: '+300%' },
        { label: 'Hurtigere indlæsning', value: '75%' },
        { label: 'Bedre SEO ranking', value: '+150%' },
      ]}
    />
  );
}