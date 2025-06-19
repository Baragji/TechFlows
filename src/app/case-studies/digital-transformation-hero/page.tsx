import { Metadata } from 'next'
import CaseStudyDetail from '@/components/templates/CaseStudyDetail'

export const metadata: Metadata = {
  title: 'Digital Transformation Hero | Case Study | TechFlow Solutions',
  description: 'Læs om hvordan vi hjælp Digital Transformation Hero med at modernisere deres digitale platform og øge konverteringsraten med 150%.',
  keywords: 'digital transformation, case study, webudvikling, modernisering, konvertering',
  openGraph: {
    title: 'Digital Transformation Hero | Case Study | TechFlow Solutions',
    description: 'Læs om hvordan vi hjælp Digital Transformation Hero med at modernisere deres digitale platform.',
    type: 'article',
  },
}

const caseStudyData = {
  id: 'digital-transformation-hero',
  title: 'Digital Transformation Hero - Modernisering af digital platform',
  client: 'Digital Transformation Hero',
  category: 'strategy' as const,
  heroImage: '/images/case-studies/digital-transformation-hero/hero.jpg',
  shortDescription: 'En omfattende digital transformation der resulterede i 150% øgning i konverteringsrate og forbedret brugeroplevelse.',
  challenge: 'Klienten havde en forældet platform med dårlig performance og lav konverteringsrate. Brugerne forlod ofte siden på grund af langsom indlæsningstid og forvirrende navigation.',
  solution: 'Vi designede og udviklede en helt ny platform med fokus på performance, brugeroplevelse og moderne teknologi. Implementerede progressive web app funktionalitet og optimerede for mobile enheder.',
  results: 'Platformen opnåede 150% øgning i konverteringsrate, 75% reduktion i indlæsningstid, 200% øgning i brugerengagement og 180% øgning i mobile trafik.',
  metrics: [
    { label: 'Konverteringsrate', value: '+150%', description: 'Øgning i konverteringsrate' },
    { label: 'Indlæsningstid', value: '-75%', description: 'Reduktion i indlæsningstid' },
    { label: 'Brugerengagement', value: '+200%', description: 'Øgning i tid på siden' },
    { label: 'Mobile trafik', value: '+180%', description: 'Øgning i mobile besøgende' }
  ],
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'AWS'],
  testimonial: {
    quote: "TechFlow Solutions transformerede vores digitale tilstedeværelse fuldstændigt. Resultatet overgik alle vores forventninger.",
    author: "Maria Hansen",
    position: "CEO",
    company: "Digital Transformation Hero"
  },
  timeline: '6 måneder',
  budget: '300.000 - 500.000 DKK',
  featured: true,
  slug: 'digital-transformation-hero'
}

export default function DigitalTransformationHeroPage() {
  return <CaseStudyDetail caseStudy={caseStudyData} />
}