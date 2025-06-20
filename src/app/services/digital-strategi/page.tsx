import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Strategi | TechFlow Solutions',
  description: 'Strategisk rådgivning og planlægning af din digitale transformation. Technology roadmap og digital innovation for konkurrencefordel.',
  keywords: 'digital strategi, digital transformation, technology roadmap, innovation, konkurrenceanalyse, ROI optimering',
};

const features = [
  {
    title: 'Strategisk Planlægning',
    description: 'Omfattende strategi for at digitalisere og modernisere dine forretningsprocesser.',
    icon: 'RocketLaunchIcon',
  },
  {
    title: 'Technology Roadmap',
    description: 'Detaljeret plan for teknologisk udvikling og implementering over tid.',
    icon: 'PresentationChartLineIcon',
  },
  {
    title: 'Konkurrenceanalyse',
    description: 'Dybdegående analyse af markedet og konkurrenter for at identificere muligheder.',
    icon: 'MagnifyingGlassIcon',
  },
  {
    title: 'ROI Optimering',
    description: 'Fokus på løsninger der leverer målbare resultater og maksimerer return on investment.',
    icon: 'ChartBarIcon',
  },
  {
    title: 'Innovation Workshops',
    description: 'Faciliterede workshops der fremmer innovation og kreativ problemløsning.',
    icon: 'LightBulbIcon',
  },
  {
    title: 'Performance Metrics',
    description: 'Etablering af KPIs og metrics for at måle succes og kontinuerlig forbedring.',
    icon: 'TrophyIcon',
  },
];

const benefits = [
  {
    title: 'Strategisk Klarhed',
    description: 'Klar vision og roadmap for din digitale transformation og teknologiske udvikling.',
    metric: '100%',
  },
  {
    title: 'Konkurrencefordel',
    description: 'Identificering af unikke muligheder der giver dig forspring på konkurrenterne.',
    metric: '+150%',
  },
  {
    title: 'Reduceret Risiko',
    description: 'Minimering af teknologiske risici gennem grundig planlægning og analyse.',
    metric: '-70%',
  },
  {
    title: 'Øget ROI',
    description: 'Optimerede investeringer i teknologi der leverer målbare forretningsresultater.',
    metric: '+250%',
  },
];

const process = [
  {
    step: 1,
    title: 'Current State Analyse',
    description: 'Omfattende evaluering af eksisterende teknologi, processer og digital modenhed.',
  },
  {
    step: 2,
    title: 'Vision & Målsætning',
    description: 'Definition af digital vision og specifikke, målbare mål for transformationen.',
  },
  {
    step: 3,
    title: 'Gap Analyse',
    description: 'Identifikation af forskellen mellem nuværende tilstand og ønskede fremtidige tilstand.',
  },
  {
    step: 4,
    title: 'Strategiudvikling',
    description: 'Udvikling af detaljeret digital strategi med prioriterede initiativer og tidsplan.',
  },
  {
    step: 5,
    title: 'Roadmap Planlægning',
    description: 'Skabelse af praktisk implementeringsplan med milepæle og ressourcekrav.',
  },
  {
    step: 6,
    title: 'Implementering & Opfølgning',
    description: 'Support under implementering og løbende evaluering af fremskridt og resultater.',
  },
];

const technologies = [
  'Digital Analytics',
  'Business Intelligence',
  'Cloud Strategy',
  'AI & Machine Learning',
  'IoT Integration',
  'Blockchain',
  'Cybersecurity',
  'Data Strategy',
  'API Strategy',
  'Microservices',
  'DevOps',
  'Agile Methodologies',
];

export default function DigitalStrategiPage() {
  return (
    <ServiceTemplate
      title="Digital Strategi"
      subtitle="Strategisk rådgivning for digital transformation"
      description="Vi hjælper virksomheder med at navigere den digitale transformation gennem strategisk planlægning og ekspert rådgivning. Fra teknologi roadmaps til innovation strategier - vi sikrer at dine digitale investeringer skaber reel værdi og konkurrencefordel."
      heroGradient="from-accent-blue to-accent-green"
      icon="LightBulbIcon"
      features={features}
      benefits={benefits}
      process={process}
      technologies={technologies}
      caseStudyTitle="Succeshistorie: 5x ROI på digital transformation"
      caseStudyDescription="Vi guidede en traditionel virksomhed gennem en komplet digital transformation, hvilket resulterede i 5x return on investment og markedslederskab."
      caseStudyMetrics={[
        { label: 'ROI på transformation', value: '5x' },
        { label: 'Effektivitetsforbedring', value: '+300%' },
        { label: 'Markedsandel stigning', value: '+45%' },
      ]}
    />
  );
}
