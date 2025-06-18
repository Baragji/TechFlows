import { Metadata } from 'next';
import ServiceTemplate from '@/components/templates/ServiceTemplate';

export const metadata: Metadata = {
  title: 'App Udvikling | TechFlow Solutions',
  description: 'Professionel udvikling af mobile apps og web applikationer. Native iOS/Android apps og cross-platform løsninger der engagerer dine brugere.',
  keywords: 'app udvikling, mobile apps, iOS, Android, React Native, Flutter, web apps, mobile development',
};

const features = [
  {
    title: 'Native & Cross-platform',
    description: 'Udvikling af både native iOS/Android apps og cross-platform løsninger for optimal performance.',
    icon: 'DevicePhoneMobileIcon',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless integration med cloud services for data sync, backup og skalerbarhed.',
    icon: 'CloudIcon',
  },
  {
    title: 'Push Notifications',
    description: 'Intelligent notification system der engagerer brugere og øger retention rates.',
    icon: 'BellIcon',
  },
  {
    title: 'Sikkerhed & Privacy',
    description: 'End-to-end encryption og avancerede sikkerhedsforanstaltninger for beskyttelse af brugerdata.',
    icon: 'ShieldCheckIcon',
  },
  {
    title: 'Analytics & Insights',
    description: 'Detaljeret brugeranalyse og app performance metrics for kontinuerlig optimering.',
    icon: 'ChartBarIcon',
  },
  {
    title: 'API Integration',
    description: 'Robust integration med tredjepartsservices og eksisterende business systemer.',
    icon: 'CogIcon',
  },
];

const benefits = [
  {
    title: 'Øget Brugerengagement',
    description: 'Intuitive interfaces og personaliserede oplevelser der holder brugerne aktive.',
    metric: '+120%',
  },
  {
    title: 'Højere Retention Rate',
    description: 'Smart onboarding og engagement features der reducerer churn rate betydeligt.',
    metric: '+75%',
  },
  {
    title: 'Hurtigere Time-to-Market',
    description: 'Effektiv udviklingsprocces der får din app på markedet hurtigere end konkurrenterne.',
    metric: '50%',
  },
  {
    title: 'Cross-platform Reach',
    description: 'Én kodebase der når både iOS og Android brugere med native performance.',
    metric: '100%',
  },
];

const process = [
  {
    step: 1,
    title: 'Idé & Konceptudvikling',
    description: 'Vi hjælper med at raffinere din app-idé og udvikle et solidt koncept med markedsanalyse.',
  },
  {
    step: 2,
    title: 'UX/UI Design',
    description: 'Skabelse af intuitive wireframes og visuelt tiltalende designs der følger platform guidelines.',
  },
  {
    step: 3,
    title: 'Prototype & MVP',
    description: 'Udvikling af en funktionel prototype eller MVP for at teste kernefunktionalitet og bruger feedback.',
  },
  {
    step: 4,
    title: 'Udvikling & Kodning',
    description: 'Professionel app udvikling med moderne teknologier og best practices for performance.',
  },
  {
    step: 5,
    title: 'Testing & QA',
    description: 'Omfattende testing på forskellige enheder og platforme for at sikre fejlfri funktionalitet.',
  },
  {
    step: 6,
    title: 'App Store Launch',
    description: 'Assistance med app store submission, optimering og marketing for succesfuld lancering.',
  },
];

const technologies = [
  'React Native',
  'Flutter',
  'Swift (iOS)',
  'Kotlin (Android)',
  'Firebase',
  'AWS Amplify',
  'GraphQL',
  'TypeScript',
  'Redux',
  'Expo',
  'Fastlane',
  'TestFlight',
];

export default function AppsPage() {
  return (
    <ServiceTemplate
      title="App Udvikling"
      subtitle="Native og cross-platform apps der engagerer"
      description="Vi udvikler mobile apps der ikke bare fungerer, men skaber værdi for dine brugere og din forretning. Fra simple utility apps til komplekse enterprise løsninger - vi har ekspertisen til at bringe din vision til live på iOS og Android."
      heroGradient="from-accent-purple to-accent-orange"
      icon="DevicePhoneMobileIcon"
      features={features}
      benefits={benefits}
      process={process}
      technologies={technologies}
      caseStudyTitle="Succeshistorie: 100K+ downloads på 6 måneder"
      caseStudyDescription="Vi udviklede en fitness tracking app der opnåede over 100.000 downloads og 4.8 stjerner i rating inden for de første 6 måneder."
      caseStudyMetrics={[
        { label: 'Downloads', value: '100K+' },
        { label: 'App Store Rating', value: '4.8★' },
        { label: 'Daglige aktive brugere', value: '15K+' },
      ]}
    />
  );
}