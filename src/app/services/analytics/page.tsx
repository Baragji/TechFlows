import { Metadata } from 'next';
import ServiceTemplate from '@/components/templates/ServiceTemplate';

export const metadata: Metadata = {
  title: 'Analytics & Tracking | TechFlow Solutions',
  description: 'Datadrevet indsigt gennem avancerede analytics løsninger. Fra Google Analytics til custom dashboards - optimer din digitale performance.',
  keywords: 'analytics, tracking, Google Analytics, conversion tracking, data visualisering, KPIs, dashboards',
};

const features = [
  {
    title: 'Google Analytics Setup',
    description: 'Professionel opsætning af Google Analytics 4 med custom events og enhanced e-commerce tracking.',
    icon: 'ChartBarIcon',
  },
  {
    title: 'Custom Dashboards',
    description: 'Skræddersyede dashboards der visualiserer dine vigtigste metrics og KPIs i real-time.',
    icon: 'PresentationChartLineIcon',
  },
  {
    title: 'Conversion Tracking',
    description: 'Detaljeret sporing af konverteringer og customer journey for optimering af salgsprocessen.',
    icon: 'CursorArrowRaysIcon',
  },
  {
    title: 'Brugeradfærd Analyse',
    description: 'Dybdegående analyse af hvordan brugere interagerer med din hjemmeside eller app.',
    icon: 'EyeIcon',
  },
  {
    title: 'Funnel Optimering',
    description: 'Identifikation og optimering af flaskehalse i dine salgs- og konverteringsfunnels.',
    icon: 'FunnelIcon',
  },
  {
    title: 'Real-time Monitoring',
    description: 'Kontinuerlig overvågning af performance med automatiske alerts ved kritiske ændringer.',
    icon: 'ClockIcon',
  },
];

const benefits = [
  {
    title: 'Datadrevne Beslutninger',
    description: 'Træf informerede beslutninger baseret på faktiske data frem for gætværk.',
    metric: '+180%',
  },
  {
    title: 'Øget Konvertering',
    description: 'Identificer og optimer elementer der forbedrer konverteringsraten betydeligt.',
    metric: '+65%',
  },
  {
    title: 'Bedre ROI',
    description: 'Optimer marketing spend og fokuser på kanaler der leverer de bedste resultater.',
    metric: '+120%',
  },
  {
    title: 'Hurtigere Optimering',
    description: 'Real-time data gør det muligt at reagere hurtigt på trends og ændringer.',
    metric: '10x',
  },
];

const process = [
  {
    step: 1,
    title: 'Krav & Målsætning',
    description: 'Definition af hvilke metrics der er vigtige for din forretning og dine mål.',
  },
  {
    step: 2,
    title: 'Tracking Plan',
    description: 'Udvikling af omfattende tracking plan der dækker alle relevante touchpoints.',
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'Teknisk implementering af tracking koder, events og conversion goals.',
  },
  {
    step: 4,
    title: 'Dashboard Setup',
    description: 'Oprettelse af custom dashboards og rapporter tilpasset dine specifikke behov.',
  },
  {
    step: 5,
    title: 'Testing & Validering',
    description: 'Grundig testing for at sikre at alle data bliver tracked korrekt og præcist.',
  },
  {
    step: 6,
    title: 'Træning & Support',
    description: 'Træning af dit team i at bruge analytics værktøjerne og fortolke data.',
  },
];

const technologies = [
  'Google Analytics 4',
  'Google Tag Manager',
  'Google Data Studio',
  'Facebook Pixel',
  'LinkedIn Insight Tag',
  'Hotjar',
  'Mixpanel',
  'Amplitude',
  'Tableau',
  'Power BI',
  'Custom APIs',
  'BigQuery',
];

export default function AnalyticsPage() {
  return (
    <ServiceTemplate
      title="Analytics & Tracking"
      subtitle="Datadrevet indsigt for bedre resultater"
      description="Vi implementerer avancerede analytics løsninger der giver dig den indsigt du behøver for at træffe bedre beslutninger. Fra basic tracking til komplekse data visualiseringer - vi hjælper dig med at forstå og optimere din digitale performance."
      heroGradient="from-accent-purple to-accent-blue"
      icon="ChartBarIcon"
      features={features}
      benefits={benefits}
      process={process}
      technologies={technologies}
      caseStudyTitle="Succeshistorie: 3x forbedring i konvertering"
      caseStudyDescription="Gennem detaljeret analytics og A/B testing hjalp vi en e-commerce virksomhed med at tredoble deres konverteringsrate på 6 måneder."
      caseStudyMetrics={[
        { label: 'Konverteringsforbedring', value: '3x' },
        { label: 'Reduktion i bounce rate', value: '-45%' },
        { label: 'Stigning i session duration', value: '+120%' },
      ]}
    />
  );
}