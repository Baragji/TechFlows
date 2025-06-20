import ServiceTemplate from '@/components/templates/ServiceTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webdesign & UI/UX | TechFlow Solutions',
  description: 'Professionelt webdesign med fokus på brugeroplevelse, konvertering og moderne æstetik. Skab det perfekte første indtryk med vores designekspertise.',
  keywords: 'webdesign, UI/UX design, brugeroplevelse, interface design, visuel identitet, responsive design, Figma',
};

const features = [
  {
    title: 'UI/UX Design',
    description: 'Intuitiv brugeroplevelse og moderne interface design der guider brugeren mod konvertering.',
    icon: 'PaintBrushIcon',
  },
  {
    title: 'Responsive Layout',
    description: 'Designs der fungerer perfekt på alle skærmstørrelser og enheder med optimal brugeroplevelse.',
    icon: 'DevicePhoneMobileIcon',
  },
  {
    title: 'Brand Integration',
    description: 'Konsistent visuel identitet der styrker dit brand og skaber genkendelse hos dine kunder.',
    icon: 'StarIcon',
  },
  {
    title: 'Konverteringsoptimering',
    description: 'Strategisk placering af elementer og call-to-actions for maksimal konvertering.',
    icon: 'CursorArrowRaysIcon',
  },
  {
    title: 'Prototyping',
    description: 'Interaktive prototyper der visualiserer den endelige brugeroplevelse før udvikling.',
    icon: 'EyeIcon',
  },
  {
    title: 'Accessibility',
    description: 'Tilgængelige designs der overholder WCAG guidelines og inkluderer alle brugere.',
    icon: 'UserGroupIcon',
  },
];

const benefits = [
  {
    title: 'Professionelt Indtryk',
    description: 'Moderne, poleret design der skaber tillid og troværdighed hos dine besøgende.',
    metric: '+85%',
  },
  {
    title: 'Bedre Engagement',
    description: 'Optimeret brugeroplevelse der holder besøgende længere på din hjemmeside.',
    metric: '+60%',
  },
  {
    title: 'Højere Konvertering',
    description: 'Strategisk design der guider brugerne mod ønskede handlinger og øger salget.',
    metric: '+45%',
  },
  {
    title: 'Mobilvenlig',
    description: 'Responsive design optimeret for mobile enheder hvor størstedelen af trafik kommer fra.',
    metric: '100%',
  },
];

const process = [
  {
    step: 1,
    title: 'Research & Analyse',
    description: 'Grundig analyse af din målgruppe, konkurrenter og branche for at forstå designkravene.',
  },
  {
    step: 2,
    title: 'Wireframes & Struktur',
    description: 'Skabelse af wireframes og informationsarkitektur der optimerer brugerrejsen.',
  },
  {
    step: 3,
    title: 'Visuel Design',
    description: 'Udvikling af det visuelle design med fokus på æstetik, branding og brugeroplevelse.',
  },
  {
    step: 4,
    title: 'Prototyping',
    description: 'Interaktive prototyper der demonstrerer funktionalitet og brugerinteraktioner.',
  },
  {
    step: 5,
    title: 'Testing & Iteration',
    description: 'Brugertesting og iterativ forbedring af designet baseret på feedback og data.',
  },
];

const technologies = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'InVision',
  'Miro',
  'Framer',
  'Tailwind CSS',
  'CSS Grid',
  'Flexbox',
  'SCSS',
  'Styled Components',
  'Storybook',
];

export default function WebdesignPage() {
  return (
    <ServiceTemplate
      title="Webdesign & UI/UX"
      subtitle="Professionelt design der konverterer"
      description="Vi skaber visuelt imponerende og brugervenlige designs der ikke bare ser fantastiske ud, men også leverer målbare resultater. Vores designproces fokuserer på at kombinere æstetik med funktionalitet for at skabe den perfekte brugeroplevelse."
      heroGradient="from-accent-purple to-accent-pink"
      icon="PaintBrushIcon"
      features={features}
      benefits={benefits}
      process={process}
      technologies={technologies}
      caseStudyTitle="Redesign resulterede i 200% flere leads"
      caseStudyDescription="Vi redesignede en kompleks B2B platform og optimerede brugeroplevelsen, hvilket resulterede i dramatisk forbedret engagement og konvertering."
      caseStudyMetrics={[
        { label: 'Stigning i leads', value: '+200%' },
        { label: 'Forbedret engagement', value: '+120%' },
        { label: 'Reduceret bounce rate', value: '-40%' },
      ]}
    />
  );
}
