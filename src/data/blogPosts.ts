export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  published: boolean;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Webudvikling',
    slug: 'webudvikling',
    description: 'Tips og trends inden for moderne webudvikling',
    color: 'text-accent-blue',
    icon: '🌐'
  },
  {
    id: '2',
    name: 'SEO',
    slug: 'seo',
    description: 'Søgemaskineoptimering og digital marketing',
    color: 'text-accent-green',
    icon: '📈'
  },
  {
    id: '3',  
    name: 'Automatisering',
    slug: 'automatisering',
    description: 'Business process automation og workflow',
    color: 'text-accent-purple',
    icon: '⚙️'
  },
  {
    id: '4',
    name: 'App Udvikling',
    slug: 'app-udvikling', 
    description: 'Mobile app development og native løsninger',
    color: 'text-accent-orange',
    icon: '📱'
  },
  {
    id: '5',
    name: 'Tech Insights',
    slug: 'tech-insights',
    description: 'Dybdegående tekniske analyser og fremtidsperspektiver',
    color: 'text-accent-gold',
    icon: '💡'
  },
  {
    id: '6',
    name: 'Case Studies',
    slug: 'case-studies',
    description: 'Detaljerede analyser af succesfulde projekter',
    color: 'text-accent-blue',
    icon: '📊'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'fremtiden-for-webudvikling-trends-2024',
    title: 'Fremtiden for Webudvikling: Trends i 2024',
    excerpt: 'Udforsk de seneste trends inden for webudvikling, fra AI-integration til progressive web apps og hvad det betyder for din virksomhed.',
    content: `
# Fremtiden for Webudvikling: Trends i 2024

Webudvikling er i konstant udvikling, og 2024 bringer flere spændende trends, der vil forme hvordan vi bygger og interagerer med websites.

## AI-Integration Bliver Mainstream

Kunstig intelligens er ikke længere en fremtidsteknologi - det er her nu. Vi ser flere websites integrere AI-drevne funktioner som:

- **Chatbots og virtuelle assistenter** der kan håndtere kundeservice 24/7
- **Personaliseret indhold** baseret på brugeradfærd og præferencer  
- **Automatisk A/B testing** der optimerer konverteringsrater
- **AI-genereret indhold** til SEO og social media

## Progressive Web Apps (PWA) Tager Fart

PWAs kombinerer det bedste fra web og mobile apps:

- **Offline funktionalitet** - Virker selv uden internetforbindelse
- **Push notifikationer** - Engager brugere som en native app
- **App-lignende oplevelse** - Kan installeres på hjemmeskærmen
- **Hurtigere load times** - Caching gør apps lynhurtige

## Micro-Frontends Arkitektur

Store virksomheder adopterer micro-frontends for:

- **Skalerbarhed** - Forskellige teams kan arbejde uafhængigt
- **Teknologi diversitet** - Brug forskellige frameworks til forskellige dele
- **Deployment fleksibilitet** - Deploy dele af applikationen separat
- **Maintenance** - Lettere at vedligeholde og opdatere

## Hvad Betyder Det For Din Virksomhed?

Disse trends påvirker alle virksomheder:

1. **Forbedret brugeroplevelse** fører til højere konverteringsrater
2. **AI-integration** kan automatisere repetitive opgaver
3. **PWAs** giver mobile-first experiences uden app store
4. **Moderne arkitektur** sikrer fremtidssikrede løsninger

Vil du have hjælp til at implementere disse trends i din virksomhed? Kontakt os for en gratis konsultation.
    `,
    author: 'Yousef Beshara',
    date: '15. marts 2024',
    readTime: '5 min',
    category: 'Webudvikling',
    tags: ['AI', 'PWA', 'Trends', 'Frontend', 'Udvikling'],
    image: '/api/placeholder/800/400',
    published: true,
    featured: true,
    seo: {
      title: 'Fremtiden for Webudvikling: Trends i 2024 | TechFlow Solutions',
      description: 'Udforsk de seneste trends inden for webudvikling i 2024. AI-integration, PWAs og micro-frontends - se hvordan de påvirker din virksomhed.',
      keywords: ['webudvikling', 'AI', 'PWA', 'trends 2024', 'frontend', 'udvikling']
    }
  },
  {
    id: '2',
    slug: 'seo-optimering-hjemmeside-guide',
    title: 'Sådan Optimerer du din Hjemmeside for Søgemaskiner',
    excerpt: 'En komplet guide til SEO-optimering af din hjemmeside. Lær de vigtigste teknikker til at forbedre din synlighed på Google.',
    content: `
# Sådan Optimerer du din Hjemmeside for Søgemaskiner

SEO er afgørende for online succes. Her er de vigtigste teknikker til at forbedre din hjemmesides synlighed.

## On-Page SEO Grundlæggende

### 1. Keyword Research
- Brug værktøjer som Google Keyword Planner
- Find long-tail keywords med lavere konkurrence
- Forstå søgeintention bag keywords

### 2. Title Tags og Meta Descriptions
- Skriv unikke title tags på under 60 tegn
- Craft compelling meta descriptions på 155-160 tegn
- Inkluder primære keywords naturligt

### 3. Header Struktur
- Brug H1 for hovedoverskrift (kun én per side)
- Strukturer indhold med H2, H3 etc.
- Inkluder keywords i headers

## Teknisk SEO

### Site Speed Optimering
- Komprimer billeder og brug moderne formater (WebP)
- Minify CSS og JavaScript
- Brug CDN for hurtigere load times
- Implementer lazy loading

### Mobile Optimization
- Responsive design er et must
- Test med Google's Mobile-Friendly Test
- Sørg for hurtige load times på mobile

### Schema Markup
- Implementer structured data
- Hjælp søgemaskiner med at forstå dit indhold
- Øg chancerne for rich snippets

## Content Strategy

### Kvalitetsindhold
- Skriv for brugere først, søgemaskiner bagefter
- Løs brugerens problemer og besvar spørgsmål
- Opdater indhold regelmæssigt

### Intern Linking
- Link til relaterede sider på dit site
- Brug beskrivende anchor text
- Skab en logisk site struktur

## Local SEO

### Google My Business
- Opret og optimér din GMB profil
- Saml positive anmeldelser
- Post regelmæssige opdateringer

### NAP Consistency
- Sørg for konsistent Name, Address, Phone
- Brug samme information overalt online
- Opbyg lokale citationer

## Måling og Monitoring

### Google Analytics & Search Console
- Track organisk trafik og rankings
- Monitor for tekniske fejl
- Identificér forbedringspotentiale

### Regelmæssige SEO Audits
- Udfør månedlige SEO tjek
- Hold øje med konkurrenternes strategier
- Juster strategi baseret på resultater

Vil du have hjælp til at implementere en komplet SEO strategi? Kontakt os for en gratis SEO audit.
    `,
    author: 'Tech Specialist',
    date: '10. marts 2024',
    readTime: '8 min',
    category: 'SEO',
    tags: ['SEO', 'Google', 'Optimering', 'Søgemaskiner', 'Marketing'],
    image: '/api/placeholder/800/400',
    published: true,
    featured: true,
    seo: {
      title: 'SEO Guide 2024: Optimér din Hjemmeside for Google | TechFlow',
      description: 'Komplet guide til SEO-optimering. Lær on-page SEO, teknisk SEO og local SEO teknikker til at forbedre din Google ranking.',
      keywords: ['SEO', 'søgemaskineoptimering', 'Google ranking', 'hjemmeside optimering', 'SEO guide']
    }
  },
  {
    id: '3',
    slug: 'automatisering-forretningsprocesser',
    title: 'Automatisering af Forretningsprocesser',
    excerpt: 'Discover hvordan automatisering kan spare tid og ressourcer i din virksomhed. Fra simple workflows til komplekse systemer.',
    content: `
# Automatisering af Forretningsprocesser

Automatisering er nøglen til at skalere din virksomhed effektivt. Lær hvordan du kan spare tid og ressourcer.

## Hvad er Process Automation?

Process automation handler om at bruge teknologi til at udføre repetitive opgaver automatisk, hvilket frigør tid til mere værditilvækst.

## Områder for Automatisering

### 1. Email Marketing
- Automatiske welcome serier
- Triggered emails baseret på adfærd
- Segmenterede kampagner
- A/B testing af emner og indhold

### 2. Kundeservice
- Chatbots til almindelige spørgsmål
- Ticket routing og prioritering
- Automatiske svar og opfølgning
- Kundepaneler med selvbetjening

### 3. Salgsprocesser
- Lead scoring og kvalificering
- Automated follow-up emails
- CRM opdateringer
- Rapport generering

### 4. Administrative Opgaver
- Fakturering og betalinger
- Regnskab og bookkeeping
- Personalehåndtering
- Inventory management

## Implementering af Automatisering

### Fase 1: Identificer Processer
- Map nuværende workflows
- Identificer repetitive opgaver
- Beregn tid brugt på manuel arbejde
- Prioriter baseret på ROI

### Fase 2: Vælg Værktøjer
- **Zapier** - Forbind forskellige apps
- **Microsoft Power Automate** - Enterprise løsninger
- **Custom udvikling** - Skræddersyede løsninger

### Fase 3: Test og Optimér
- Start med simple automationer
- Monitor og måle resultater
- Justér baseret på performance
- Skaler succesfulde processer

## ROI af Automatisering

### Tidsbesparelser
- Reducér manuel arbejde med 60-80%
- Frigør tid til strategiske opgaver
- Hurtigere response times

### Kvalitetsforbedringer
- Eliminér menneskelige fejl
- Konsistente processer
- Bedre data kvalitet

### Skalerbarhed
- Håndter flere kunder uden flere ansatte
- Automatisk skalering ved vækst
- Reducerede operational costs

## Kom i Gang

1. **Audit** - Identificer automationsmuligheder
2. **Prioritér** - Fokusér på high-impact processer
3. **Implementér** - Start småt og byg videre
4. **Måle** - Track ROI og effektivitet

Vil du have hjælp til at identificere automationsmuligheder i din virksomhed? Kontakt os for en gratis process audit.
    `,
    author: 'Yousef Beshara',
    date: '5. marts 2024',
    readTime: '6 min',
    category: 'Automatisering',
    tags: ['Automatisering', 'Process', 'Effektivitet', 'ROI', 'Workflow'],
    image: '/api/placeholder/800/400',
    published: true,
    featured: false,
    seo: {
      title: 'Automatisering af Forretningsprocesser - Spar Tid og Ressourcer',
      description: 'Lær hvordan du kan automatisere forretningsprocesser for at spare tid og ressourcer. Fra email marketing til kundeservice.',
      keywords: ['automatisering', 'forretningsprocesser', 'workflow', 'effektivitet', 'ROI']
    }
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category && post.published);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured && post.published);
};

export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.published);
};