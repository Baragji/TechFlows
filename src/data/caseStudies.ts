export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  clientLogo?: string;
  category: 'app' | 'web' | 'automation' | 'analytics' | 'strategy';
  heroImage: string;
  heroVideo?: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: string;
  };
  timeline: string;
  budget: string;
  featured: boolean;
  slug: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Fitness Tracking App - Fra Idé til 100K+ Downloads',
    client: 'FitTrack Pro',
    category: 'app',
    heroImage: '/images/case-studies/fittrack-hero.jpg',
    shortDescription: 'En komplet fitness tracking app der opnåede over 100.000 downloads og 4.8 stjerner i rating inden for de første 6 måneder.',
    challenge: 'Klienten havde en vision om en fitness app, men manglede teknisk ekspertise og en klar strategi for markedslancering. Konkurrencen på fitness app markedet er intens, og det var kritisk at skabe en app der skilte sig ud.',
    solution: 'Vi udviklede en brugervenlig fitness tracking app med AI-drevne træningsanbefalinger, social features og gamification elementer. Appen blev bygget med React Native for cross-platform kompatibilitet og integreret med populære fitness devices.',
    results: 'Appen opnåede over 100.000 downloads inden for 6 måneder, med en gennemsnitlig rating på 4.8 stjerner. Brugerne bruger i gennemsnit 25 minutter dagligt i appen, og retention raten efter 30 dage er 68%.',
    metrics: [
      { label: 'Downloads', value: '100K+', description: 'Inden for første 6 måneder' },
      { label: 'App Store Rating', value: '4.8★', description: 'Baseret på 2,500+ anmeldelser' },
      { label: 'Daglig Engagement', value: '25 min', description: 'Gennemsnitlig session længde' },
      { label: 'Retention Rate', value: '68%', description: 'Efter 30 dage' }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Firebase', 'HealthKit', 'Google Fit'],
    testimonial: {
      quote: 'TechFlow Solutions forvandlede vores idé til en succesfuld app der overgik alle vores forventninger. Deres ekspertise inden for både udvikling og markedsstrategi var afgørende for vores succes.',
      author: 'Sarah Jensen',
      position: 'CEO & Founder',
      company: 'FitTrack Pro'
    },
    timeline: '4 måneder',
    budget: '200.000 - 400.000 DKK',
    featured: true,
    slug: 'fittrack-pro-app'
  },
  {
    id: '2',
    title: 'E-commerce Platform - Fra 0 til 1M+ i Årligt Salg',
    client: 'Nordic Design Co.',
    category: 'web',
    heroImage: '/images/case-studies/nordic-design-hero.jpg',
    shortDescription: 'Vi hjalp en startup med at lancere deres e-commerce platform, som inden for det første år genererede over 1 million kroner i salg.',
    challenge: 'En ny designvirksomhed havde brug for en professionel e-commerce løsning der kunne håndtere deres unikke produkter og komplekse prisstruktur. De havde ingen online tilstedeværelse og manglede erfaring med digital markedsføring.',
    solution: 'Vi udviklede en skræddersyet e-commerce platform med avanceret produktkonfiguration, integreret lagerstyring og automatiseret markedsføring. Platformen blev optimeret til SEO og integreret med sociale medier og email marketing.',
    results: 'Virksomheden genererede over 1 million kroner i salg det første år, med en gennemsnitlig konverteringsrate på 3.2%. Organisk trafik steg med 450% og email marketing kampagner opnåede en åbningsrate på 28%.',
    metrics: [
      { label: 'Årligt Salg', value: '1M+ DKK', description: 'Første år efter lancering' },
      { label: 'Konverteringsrate', value: '3.2%', description: 'Over branche gennemsnit' },
      { label: 'Organisk Trafik', value: '+450%', description: 'Stigning i første år' },
      { label: 'Email Åbningsrate', value: '28%', description: 'Marketing kampagner' }
    ],
    technologies: ['Next.js', 'Shopify Plus', 'Stripe', 'Klaviyo', 'Google Analytics', 'Facebook Pixel'],
    testimonial: {
      quote: 'TechFlow Solutions gav os ikke bare en webshop, men en komplet digital forretningsløsning. Deres strategiske tilgang til både teknologi og marketing var nøglen til vores succes.',
      author: 'Michael Andersen',
      position: 'Founder',
      company: 'Nordic Design Co.'
    },
    timeline: '3 måneder',
    budget: '150.000 - 300.000 DKK',
    featured: true,
    slug: 'nordic-design-ecommerce'
  },
  {
    id: '3',
    title: 'Automatisering - 40 Timer Sparet Ugentligt',
    client: 'Consulting Group ApS',
    category: 'automation',
    heroImage: '/images/case-studies/automation-hero.jpg',
    shortDescription: 'Vi automatiserede en virksomheds fakturerings- og rapporteringsprocesser, hvilket sparede dem 40 timer ugentligt og reducerede fejl med 98%.',
    challenge: 'En konsulentvirksomhed brugte 40+ timer ugentligt på manuelle fakturerings- og rapporteringsprocesser. Dette resulterede i hyppige fejl, forsinkede fakturaer og frustrerede medarbejdere der ikke kunne fokusere på værdiskabende arbejde.',
    solution: 'Vi implementerede en komplet automatiseringsløsning der integrerer CRM, projektledelse og økonomisystem. Automatiske workflows håndterer nu fakturering, rapportering og klientkommunikation med minimal manuel indgriben.',
    results: 'Virksomheden sparer nu 40 timer ugentligt på administrative opgaver, fejlraten er reduceret med 98%, og fakturaer sendes automatisk til tiden. Medarbejderne kan nu fokusere på klientarbejde og forretningsudvikling.',
    metrics: [
      { label: 'Timer Sparet', value: '40h/uge', description: 'Administrative opgaver' },
      { label: 'Fejlreduktion', value: '98%', description: 'I faktureringsprocessen' },
      { label: 'Hurtigere Fakturering', value: '85%', description: 'Reduktion i behandlingstid' },
      { label: 'ROI', value: '340%', description: 'Første år efter implementering' }
    ],
    technologies: ['Zapier', 'Microsoft Power Automate', 'HubSpot', 'QuickBooks', 'Slack', 'Google Workspace'],
    testimonial: {
      quote: 'Automatiseringen har revolutioneret vores daglige arbejde. Vi kan nu fokusere på det vi er bedst til - at levere værdi til vores klienter - i stedet for at drukne i administrative opgaver.',
      author: 'Lars Petersen',
      position: 'Managing Partner',
      company: 'Consulting Group ApS'
    },
    timeline: '6 uger',
    budget: '75.000 - 150.000 DKK',
    featured: false,
    slug: 'consulting-automation'
  },
  {
    id: '4',
    title: 'Analytics & Optimering - 3x Forbedring i Konvertering',
    client: 'Fashion Forward',
    category: 'analytics',
    heroImage: '/images/case-studies/analytics-hero.jpg',
    shortDescription: 'Gennem detaljeret analytics og A/B testing hjalp vi en e-commerce virksomhed med at tredoble deres konverteringsrate på 6 måneder.',
    challenge: 'En etableret modevirksomhed havde høj trafik til deres webshop, men lav konverteringsrate på kun 1.1%. De manglede indsigt i brugeradfærd og havde ingen systematisk tilgang til optimering.',
    solution: 'Vi implementerede avanceret analytics tracking, heatmap analyse og A/B testing framework. Gennem dataanalyse identificerede vi flaskehalse i købsprocessen og testede systematisk forbedringer til design og brugeroplevelse.',
    results: 'Konverteringsraten steg fra 1.1% til 3.4% over 6 måneder - en forbedring på 209%. Dette resulterede i en omsætningsstigning på 2.8 millioner kroner årligt uden øget marketingbudget.',
    metrics: [
      { label: 'Konverteringsforbedring', value: '3x', description: 'Fra 1.1% til 3.4%' },
      { label: 'Omsætningsstigning', value: '2.8M DKK', description: 'Årlig merindtægt' },
      { label: 'A/B Tests Kørt', value: '47', description: 'Systematisk optimering' },
      { label: 'Bounce Rate Reduktion', value: '32%', description: 'Forbedret brugeroplevelse' }
    ],
    technologies: ['Google Analytics 4', 'Hotjar', 'Optimizely', 'Google Tag Manager', 'Mixpanel', 'Tableau'],
    testimonial: {
      quote: 'TechFlow Solutions\' databaserede tilgang til optimering har været en game-changer for vores business. De forvandlede vores website fra en omkostning til vores mest profitable salgskanal.',
      author: 'Emma Sørensen',
      position: 'E-commerce Director',
      company: 'Fashion Forward'
    },
    timeline: '6 måneder',
    budget: '100.000 - 200.000 DKK',
    featured: true,
    slug: 'fashion-forward-analytics'
  },
  {
    id: '5',
    title: 'Digital Transformation - 5x ROI på 18 Måneder',
    client: 'Traditional Manufacturing A/S',
    category: 'strategy',
    heroImage: '/images/case-studies/digital-transformation-hero.jpg',
    shortDescription: 'Vi guidede en traditionel virksomhed gennem en komplet digital transformation, hvilket resulterede i 5x return on investment og markedslederskab.',
    challenge: 'En 50-årig produktionsvirksomhed stod over for digital disruption fra konkurrenter. De havde forældede systemer, ingen online tilstedeværelse og manglede digital kompetence internt.',
    solution: 'Vi udviklede en holistisk digital strategi der omfattede ny website, CRM implementation, automatiserede workflows, digital marketing og medarbejderuddannelse. Transformationen blev rullet ud i faser for at minimere disruption.',
    results: 'Virksomheden opnåede 5x return on investment inden for 18 måneder, øgede deres markedsandel med 23% og reducerede operationelle omkostninger med 30%. De er nu markedsledere inden for digital innovation i deres branche.',
    metrics: [
      { label: 'ROI', value: '5x', description: 'Inden for 18 måneder' },
      { label: 'Markedsandel', value: '+23%', description: 'Stigning i markedsposition' },
      { label: 'Omkostningsreduktion', value: '30%', description: 'Operationelle besparelser' },
      { label: 'Lead Generation', value: '+380%', description: 'Kvalificerede leads' }
    ],
    technologies: ['Salesforce', 'HubSpot', 'Microsoft 365', 'Power BI', 'WordPress', 'Mailchimp'],
    testimonial: {
      quote: 'TechFlow Solutions reddede vores virksomhed. Deres strategiske tilgang til digital transformation har ikke bare moderniseret vores forretning, men gjort os til markedsledere.',
      author: 'Jens Møller',
      position: 'CEO',
      company: 'Traditional Manufacturing A/S'
    },
    timeline: '18 måneder',
    budget: '500.000 - 1.000.000 DKK',
    featured: true,
    slug: 'traditional-manufacturing-transformation'
  },
  {
    id: '6',
    title: 'Hjemmeside Redesign - 300% Stigning i Leads',
    client: 'Local Service Pro',
    category: 'web',
    heroImage: '/images/case-studies/website-redesign-hero.jpg',
    shortDescription: 'Vi hjalp en lokal virksomhed med at redesigne deres hjemmeside, hvilket resulterede i en dramatisk stigning i leads og online synlighed.',
    challenge: 'En lokal servicevirksomhed havde en forældet hjemmeside der ikke genererede leads. Deres online tilstedeværelse var svag, og de tabte kunder til konkurrenter med bedre digitale løsninger.',
    solution: 'Vi redesignede deres hjemmeside med fokus på lokal SEO, brugeroplevelse og lead generation. Implementerede booking system, kundereviews og optimerede for mobile enheder.',
    results: 'Hjemmesiden genererer nu 300% flere leads, organisk trafik er steget med 250%, og booking rate er forbedret med 180%. Virksomheden har udvidet med 3 nye medarbejdere baseret på øget efterspørgsel.',
    metrics: [
      { label: 'Lead Stigning', value: '+300%', description: 'Månedlige henvendelser' },
      { label: 'Organisk Trafik', value: '+250%', description: 'SEO forbedringer' },
      { label: 'Booking Rate', value: '+180%', description: 'Online bookinger' },
      { label: 'Mobile Konvertering', value: '+420%', description: 'Mobile optimering' }
    ],
    technologies: ['WordPress', 'Elementor', 'Yoast SEO', 'Google My Business', 'Calendly', 'Trustpilot'],
    timeline: '8 uger',
    budget: '50.000 - 100.000 DKK',
    featured: false,
    slug: 'local-service-website'
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.featured);
};

export const getCaseStudiesByCategory = (category: CaseStudy['category']): CaseStudy[] => {
  return caseStudies.filter(study => study.category === category);
};

export const categories = [
  { id: 'all', label: 'Alle Projekter' },
  { id: 'app', label: 'App Udvikling' },
  { id: 'web', label: 'Hjemmesider & Webshops' },
  { id: 'automation', label: 'Automatisering' },
  { id: 'analytics', label: 'Analytics & Data' },
  { id: 'strategy', label: 'Digital Strategi' }
] as const;