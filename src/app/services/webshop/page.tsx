import { Metadata } from 'next';
import ServiceTemplate from '@/components/templates/ServiceTemplate';

export const metadata: Metadata = {
  title: 'E-commerce & Webshop Udvikling | TechFlow Solutions',
  description: 'Professionelle webshops der øger dit salg. Komplet e-commerce løsninger med betalingsintegration, lagerstyring og avanceret analytics.',
  keywords: 'webshop udvikling, e-commerce, online butik, Shopify, WooCommerce, betalingsintegration, lagerstyring',
};

const features = [
  {
    title: 'Betalingsintegration',
    description: 'Sikre betalingsløsninger med support for alle større betalingsmetoder og kryptovaluta.',
    icon: 'CreditCardIcon',
  },
  {
    title: 'Lagerstyring',
    description: 'Avanceret inventory management med automatisk opdatering og low-stock notifikationer.',
    icon: 'ChartBarIcon',
  },
  {
    title: 'Mobiloptimeret',
    description: 'Fuldt responsive design optimeret til mobile shopping med touch-venlige interfaces.',
    icon: 'DevicePhoneMobileIcon',
  },
  {
    title: 'Forsendelsesintegration',
    description: 'Automatisk integration med forsendelsespartnere og real-time tracking for kunder.',
    icon: 'TruckIcon',
  },
  {
    title: 'Sikkerhed & PCI Compliance',
    description: 'Højeste sikkerhedsstandarder med SSL, PCI compliance og GDPR overholdelse.',
    icon: 'ShieldCheckIcon',
  },
  {
    title: 'Analytics & Rapporter',
    description: 'Detaljerede salgsrapporter og customer insights for datadrevet beslutningstagning.',
    icon: 'ChartBarIcon',
  },
];

const benefits = [
  {
    title: 'Øget Online Salg',
    description: 'Optimeret checkout-proces og brugeroplevelse der konverterer flere besøgende til købere.',
    metric: '+85%',
  },
  {
    title: 'Reduceret Cart Abandonment',
    description: 'Streamlined checkout og trust signals der reducerer antallet af forladte kurve.',
    metric: '-45%',
  },
  {
    title: 'Højere AOV',
    description: 'Smart product recommendations og upselling features der øger gennemsnitlig ordreværdi.',
    metric: '+35%',
  },
  {
    title: 'Automatiseret Drift',
    description: 'Automatiserede processer der reducerer manuel administration og fejl.',
    metric: '80%',
  },
];

const process = [
  {
    step: 1,
    title: 'E-commerce Strategi',
    description: 'Analyse af dit marked, produkter og konkurrenter for at udvikle den optimale e-commerce strategi.',
  },
  {
    step: 2,
    title: 'Platform Valg',
    description: 'Valg af den bedste e-commerce platform baseret på dine behov, budget og skalerbarhed.',
  },
  {
    step: 3,
    title: 'Design & UX',
    description: 'Udvikling af brugervenligt design med fokus på konvertering og optimal shopping experience.',
  },
  {
    step: 4,
    title: 'Udvikling & Integration',
    description: 'Kodning af webshop med integration til betalinger, forsendelse og tredjepartsservices.',
  },
  {
    step: 5,
    title: 'Test & Optimering',
    description: 'Omfattende testing af alle funktioner og optimering af performance og konvertering.',
  },
  {
    step: 6,
    title: 'Launch & Marketing',
    description: 'Lancering af webshop med SEO-optimering og digital marketing strategi for at drive trafik.',
  },
];

const technologies = [
  'Shopify Plus',
  'WooCommerce',
  'Magento',
  'Next.js Commerce',
  'Stripe',
  'PayPal',
  'Klarna',
  'Mailchimp',
  'Google Analytics 4',
  'Facebook Pixel',
  'Klaviyo',
  'Zendesk',
];

export default function WebshopPage() {
  return (
    <ServiceTemplate
      title="E-commerce & Webshop"
      subtitle="Professionelle webshops der øger dit salg"
      description="Vi bygger skalerbare e-commerce løsninger der ikke bare sælger produkter, men skaber exceptionelle shopping oplevelser. Fra små boutique shops til store enterprise løsninger - vi har ekspertisen til at drive dit online salg."
      heroGradient="from-accent-green to-accent-blue"
      icon="ShoppingCartIcon"
      features={features}
      benefits={benefits}
      process={process}
      technologies={technologies}
      caseStudyTitle="Succeshistorie: Fra 0 til 1M+ i årligt salg"
      caseStudyDescription="Vi hjalp en startup med at lancere deres e-commerce platform, som inden for det første år genererede over 1 million kroner i salg."
      caseStudyMetrics={[
        { label: 'Årligt salg', value: '1M+ DKK' },
        { label: 'Konverteringsrate', value: '4.2%' },
        { label: 'Gennemsnitlig ordreværdi', value: '850 DKK' },
      ]}
    />
  );
}