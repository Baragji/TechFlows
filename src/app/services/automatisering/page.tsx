import { Metadata } from 'next';
import ServiceTemplate from '@/components/templates/ServiceTemplate';

export const metadata: Metadata = {
  title: 'Proces Automatisering | TechFlow Solutions',
  description: 'Automatiser manuelle processer og workflows for øget effektivitet og reducerede omkostninger. Custom automation løsninger til din virksomhed.',
  keywords: 'automatisering, workflow automation, proces optimering, RPA, API integration, business automation',
};

const features = [
  {
    title: 'Workflow Automation',
    description: 'Automatisering af komplekse forretningsprocesser og workflows for øget effektivitet.',
    icon: 'CogIcon',
  },
  {
    title: 'API Integration',
    description: 'Seamless integration mellem forskellige systemer og platforme for automatisk dataflow.',
    icon: 'CloudArrowUpIcon',
  },
  {
    title: 'Data Processing',
    description: 'Automatisk behandling og analyse af store datamængder med intelligent algoritmer.',
    icon: 'ChartBarIcon',
  },
  {
    title: 'Tidsbesparende Løsninger',
    description: 'Eliminering af repetitive opgaver der frigør tid til mere værdiskabende aktiviteter.',
    icon: 'ClockIcon',
  },
  {
    title: 'Dokumentautomatisering',
    description: 'Automatisk generering, behandling og distribution af dokumenter og rapporter.',
    icon: 'DocumentTextIcon',
  },
  {
    title: 'Performance Monitoring',
    description: 'Real-time overvågning og optimering af automatiserede processer for maksimal effektivitet.',
    icon: 'BoltIcon',
  },
];

const benefits = [
  {
    title: 'Reducerede Omkostninger',
    description: 'Betydelige besparelser gennem eliminering af manuelle processer og fejl.',
    metric: '-60%',
  },
  {
    title: 'Øget Produktivitet',
    description: 'Medarbejdere kan fokusere på strategiske opgaver i stedet for repetitive tasks.',
    metric: '+200%',
  },
  {
    title: 'Færre Fejl',
    description: 'Automatiserede processer eliminerer menneskelige fejl og sikrer konsistens.',
    metric: '-95%',
  },
  {
    title: 'Hurtigere Processer',
    description: 'Dramatisk reduktion i behandlingstid for rutineopgaver og workflows.',
    metric: '24/7',
  },
];

const process = [
  {
    step: 1,
    title: 'Procesanalyse',
    description: 'Grundig analyse af eksisterende processer for at identificere automatiseringsmuligheder.',
  },
  {
    step: 2,
    title: 'ROI Beregning',
    description: 'Beregning af potentielle besparelser og return on investment for hver automatisering.',
  },
  {
    step: 3,
    title: 'Løsningsdesign',
    description: 'Design af skræddersyede automatiseringsløsninger der passer til jeres specifikke behov.',
  },
  {
    step: 4,
    title: 'Udvikling & Test',
    description: 'Udvikling og grundig testing af automatiseringsløsninger i sikre testmiljøer.',
  },
  {
    step: 5,
    title: 'Implementering',
    description: 'Gradvis udrulning af automatiseringer med minimal disruption af eksisterende processer.',
  },
  {
    step: 6,
    title: 'Optimering & Support',
    description: 'Kontinuerlig overvågning og optimering af automatiseringer for maksimal effekt.',
  },
];

const technologies = [
  'Python',
  'Node.js',
  'Zapier',
  'Microsoft Power Automate',
  'UiPath',
  'Selenium',
  'REST APIs',
  'GraphQL',
  'Docker',
  'AWS Lambda',
  'Google Cloud Functions',
  'Webhook Integration',
];

export default function AutomatiseringPage() {
  return (
    <ServiceTemplate
      title="Proces Automatisering"
      subtitle="Automatiser for øget effektivitet og vækst"
      description="Vi hjælper virksomheder med at automatisere manuelle processer og workflows, hvilket frigør ressourcer og reducerer omkostninger. Fra simple task automation til komplekse business process automation - vi skaber løsninger der transformerer din drift."
      heroGradient="from-accent-orange to-accent-green"
      icon="CogIcon"
      features={features}
      benefits={benefits}
      process={process}
      technologies={technologies}
      caseStudyTitle="Succeshistorie: 40 timer sparet ugentligt"
      caseStudyDescription="Vi automatiserede en virksomheds fakturerings- og rapporteringsprocesser, hvilket sparede dem 40 timer ugentligt og reducerede fejl med 98%."
      caseStudyMetrics={[
        { label: 'Timer sparet ugentligt', value: '40h' },
        { label: 'Reduktion i fejl', value: '98%' },
        { label: 'Årlige besparelser', value: '500K DKK' },
      ]}
    />
  );
}