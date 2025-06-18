export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  type: 'webinar' | 'workshop' | 'conference' | 'meetup';
  status: 'upcoming' | 'live' | 'completed' | 'cancelled';
  date: string;
  time: string;
  duration: string;
  location: {
    type: 'online' | 'physical' | 'hybrid';
    venue?: string;
    address?: string;
    city?: string;
    url?: string;
  };
  speakers: {
    name: string;
    role: string;
    company: string;
    image: string;
    bio: string;
  }[];
  agenda: {
    time: string;
    title: string;
    description: string;
    speaker?: string;
  }[];
  capacity: number;
  registered: number;
  price: {
    type: 'free' | 'paid';
    amount?: number;
    earlyBird?: number;
    currency?: string;
  };
  registration: {
    isOpen: boolean;
    deadline: string;
    requirements: string[];
    benefits: string[];
  };
  categories: string[];
  tags: string[];
  image: string;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const eventCategories = [
  {
    id: 'webudvikling',
    name: 'Webudvikling',
    description: 'Modern webudvikling tekniker og frameworks',
    color: 'text-accent-blue',
    icon: '🌐'
  },
  {
    id: 'automatisering',
    name: 'Automatisering',
    description: 'Business process automation og AI integration',
    color: 'text-accent-purple',
    icon: '⚙️'
  },
  {
    id: 'digital-strategi',
    name: 'Digital Strategi',
    description: 'Digitalisering og transformation strategier',
    color: 'text-accent-green',
    icon: '📊'
  },
  {
    id: 'teknologi',
    name: 'Teknologi',
    description: 'Seneste teknologi trends og innovationer',
    color: 'text-accent-orange',
    icon: '💻'
  }
];

export const events: Event[] = [
  {
    id: '1',
    slug: 'ai-integration-webudvikling-2024',
    title: 'AI Integration i Moderne Webudvikling',
    description: 'Lær hvordan du integrerer AI i dine webprojekter med praktiske eksempler og hands-on workshops.',
    fullDescription: `
      <p>Kunstig intelligens revolutionerer webudvikling. I dette intensive webinar lærer du:</p>
      <ul>
        <li>Hvordan du implementerer AI chatbots og virtuelle assistenter</li>
        <li>Machine learning integration i React og Next.js applikationer</li>
        <li>Personalisering af brugeroplevelser med AI</li>
        <li>Etiske overvejelser ved AI implementation</li>
        <li>Praktiske use cases og ROI beregninger</li>
      </ul>
      <p>Dette webinar er perfekt for webudviklere, tech leads og beslutningstagere der vil forstå og implementere AI teknologier.</p>
    `,
    type: 'webinar',
    status: 'upcoming',
    date: '2024-04-15',
    time: '14:00',
    duration: '2 timer',
    location: {
      type: 'online',
      url: 'https://zoom.us/webinar/register'
    },
    speakers: [
      {
        name: 'Yousef Beshara',
        role: 'CEO & Lead Developer',
        company: 'TechFlow Solutions',
        image: '/api/placeholder/150/150',
        bio: 'Med over 8 års erfaring inden for webudvikling og AI integration har Yousef hjulpet 50+ virksomheder med at implementere cutting-edge teknologier.'
      },
      {
        name: 'Sarah Nielsen',
        role: 'ML Engineer',
        company: 'AI Solutions Denmark',
        image: '/api/placeholder/150/150',
        bio: 'Sarah specialiserer sig i machine learning integration og har udviklet AI løsninger for store danske virksomheder.'
      }
    ],
    agenda: [
      {
        time: '14:00',
        title: 'Velkommen og introduktion til AI i web',
        description: 'Oversigt over dagens program og AI landscape',
        speaker: 'Yousef Beshara'
      },
      {
        time: '14:15',
        title: 'AI Chatbots - Fra idé til implementation',
        description: 'Praktisk guide til at bygge intelligente chatbots',
        speaker: 'Yousef Beshara'
      },
      {
        time: '14:45',
        title: 'Machine Learning i webudvikling',
        description: 'Integration af ML modeller i moderne web apps',
        speaker: 'Sarah Nielsen'
      },
      {
        time: '15:15',
        title: 'Pause',
        description: 'Networking og Q&A',
      },
      {
        time: '15:30',
        title: 'Personalisering med AI',
        description: 'Hvordan AI kan skabe unikke brugeroplevelser',
        speaker: 'Sarah Nielsen'
      },
      {
        time: '15:45',
        title: 'Live demo og hands-on workshop',
        description: 'Byg din første AI-integrerede webapplikation',
        speaker: 'Yousef Beshara'
      }
    ],
    capacity: 100,
    registered: 67,
    price: {
      type: 'free'
    },
    registration: {
      isOpen: true,
      deadline: '2024-04-14',
      requirements: [
        'Grundlæggende kendskab til JavaScript',
        'Erfaring med React eller lignende framework',
        'Computer med internet forbindelse'
      ],
      benefits: [
        'Adgang til alle præsentationer og materiale',
        'Live Q&A session med eksperterne',
        'Netværksmuligheder med andre deltagere',
        'Certifikat for deltagelse',
        'Optagelse af webinar (tilgængelig i 30 dage)'
      ]
    },
    categories: ['webudvikling', 'teknologi'],
    tags: ['AI', 'Machine Learning', 'React', 'Integration', 'Automation'],
    image: '/api/placeholder/800/400',
    featured: true,
    seo: {
      title: 'AI Integration i Moderne Webudvikling - Gratis Webinar | TechFlow',
      description: 'Lær at integrere AI i dine webprojekter. Gratis webinar med hands-on workshop om chatbots, ML og personalisering.',
      keywords: ['AI integration', 'webudvikling', 'machine learning', 'chatbots', 'webinar', 'gratis']
    }
  },
  {
    id: '2',
    slug: 'automatisering-forretningsprocesser-workshop',
    title: 'Automatisering af Forretningsprocesser - Hands-on Workshop',
    description: 'Intensive workshop om hvordan du identificerer og automatiserer repetitive processer i din virksomhed.',
    fullDescription: `
      <p>Spar tid og ressourcer ved at automatisere dine forretningsprocesser. I denne praktiske workshop lærer du:</p>
      <ul>
        <li>Process mapping og identifikation af automation muligheder</li>
        <li>No-code/low-code automation værktøjer</li>
        <li>Integration mellem forskellige systemer og platforme</li>
        <li>ROI beregning og business case udvikling</li>
        <li>Change management ved implementation af automation</li>
      </ul>
      <p>Workshoppen inkluderer praktiske øvelser hvor du arbejder med reelle business cases.</p>
    `,
    type: 'workshop',
    status: 'upcoming',
    date: '2024-04-22',
    time: '10:00',
    duration: '4 timer',
    location: {
      type: 'physical',
      venue: 'TechFlow Solutions HQ',
      address: 'Vesterbrogade 123',
      city: 'København'
    },
    speakers: [
      {
        name: 'Yousef Beshara',
        role: 'Automation Specialist',
        company: 'TechFlow Solutions',
        image: '/api/placeholder/150/150',
        bio: 'Yousef har implementeret automation løsninger der har sparet virksomheder over 10.000 timer årligt.'
      }
    ],
    agenda: [
      {
        time: '10:00',
        title: 'Velkommen og process mapping',
        description: 'Lær at identificere automation muligheder',
        speaker: 'Yousef Beshara'
      },
      {
        time: '11:00',
        title: 'No-code automation værktøjer',
        description: 'Hands-on med Zapier, Power Automate og lignende',
        speaker: 'Yousef Beshara'
      },
      {
        time: '12:00',
        title: 'Frokostpause',
        description: 'Netværk og diskussion'
      },
      {
        time: '13:00',
        title: 'System integration workshop',
        description: 'Forbind dine eksisterende systemer',
        speaker: 'Yousef Beshara'
      },
      {
        time: '14:00',
        title: 'ROI beregning og implementation plan',
        description: 'Byg din automation roadmap',
        speaker: 'Yousef Beshara'
      }
    ],
    capacity: 20,
    registered: 14,
    price: {
      type: 'paid',
      amount: 1299,
      earlyBird: 999,
      currency: 'DKK'
    },
    registration: {
      isOpen: true,
      deadline: '2024-04-20',
      requirements: [
        'Grundlæggende forståelse af forretningsprocesser',
        'Laptop medbragt',
        'Adgang til virksomhedens systemer (valgfrit)'
      ],
      benefits: [
        'Alle workshop materialer og templates',
        'Personlig automation assessment',
        '30 dages email support',
        'Adgang til eksklusiv automation community',
        'Certification of completion',
        'Frokost og refreshments inkluderet'
      ]
    },
    categories: ['automatisering', 'digital-strategi'],
    tags: ['Automation', 'Process Optimization', 'No-code', 'Integration', 'ROI'],
    image: '/api/placeholder/800/400',
    featured: true,
    seo: {
      title: 'Automatisering Workshop - Optimér Forretningsprocesser | TechFlow',
      description: 'Hands-on workshop om business process automation. Lær no-code værktøjer og spar tid i din virksomhed.',
      keywords: ['automatisering', 'forretningsprocesser', 'workshop', 'no-code', 'process optimization']
    }
  },
  {
    id: '3',
    slug: 'digital-transformation-conference-2024',
    title: 'Digital Transformation Conference 2024',
    description: 'Danmarks største konference om digital transformation med internationale talere og case studies.',
    fullDescription: `
      <p>Bliv inspireret og lær af de bedste inden for digital transformation. Konferencen byder på:</p>
      <ul>
        <li>Keynotes fra internationale eksperter</li>
        <li>Case studies fra danske success historier</li>
        <li>Netværksmuligheder med 500+ deltagere</li>
        <li>Parallelle tracks for forskellige brancher</li>
        <li>Innovation showcase med de nyeste teknologier</li>
        <li>Roundtables og interactive sessions</li>
      </ul>
      <p>Perfekt for C-level executives, IT ledere og alle der driver digital innovation.</p>
    `,
    type: 'conference',
    status: 'upcoming',
    date: '2024-05-15',
    time: '09:00',
    duration: '2 dage',
    location: {
      type: 'physical',
      venue: 'Bella Center København',
      address: 'Center Boulevard 5',
      city: 'København'
    },
    speakers: [
      {
        name: 'Dr. Maria Andersson',
        role: 'Chief Digital Officer',
        company: 'Nordic Digital Group',
        image: '/api/placeholder/150/150',
        bio: 'Maria har ledet digital transformation i over 20 organisationer og er anerkendt ekspert i change management.'
      },
      {
        name: 'James Wilson',
        role: 'VP of Innovation',
        company: 'TechGlobal Inc.',
        image: '/api/placeholder/150/150',
        bio: 'James har implementeret AI og automation løsninger for Fortune 500 virksomheder i over 15 år.'
      },
      {
        name: 'Yousef Beshara',
        role: 'Digital Transformation Expert',
        company: 'TechFlow Solutions',
        image: '/api/placeholder/150/150',
        bio: 'Yousef deler insights om digital transformation i SMV segment og success stories fra danske virksomheder.'
      }
    ],
    agenda: [
      {
        time: '09:00',
        title: 'Registration og morning coffee',
        description: 'Netværk og velkomst'
      },
      {
        time: '10:00',
        title: 'Opening Keynote: Future of Digital Business',
        description: 'Visionary talk om digital transformation trends',
        speaker: 'Dr. Maria Andersson'
      },
      {
        time: '11:00',
        title: 'AI Revolution in Enterprise',
        description: 'Hvordan AI transformer store organisationer',
        speaker: 'James Wilson'
      },
      {
        time: '12:00',
        title: 'Networking lunch',
        description: 'Fortsæt samtalerne over frokost'
      },
      {
        time: '13:30',
        title: 'Danish Digital Success Stories',
        description: 'Case studies fra danske virksomheder',
        speaker: 'Yousef Beshara'
      },
      {
        time: '15:00',
        title: 'Interactive Roundtables',
        description: 'Branche-specifik diskussion og networking'
      }
    ],
    capacity: 500,
    registered: 342,
    price: {
      type: 'paid',
      amount: 3999,
      earlyBird: 2999,
      currency: 'DKK'
    },
    registration: {
      isOpen: true,
      deadline: '2024-05-10',
      requirements: [
        'Business card og LinkedIn profil',
        'Relevant erhvervserfaring inden for digital/tech'
      ],
      benefits: [
        'Adgang til alle sessions og keynotes',
        'Premium networking events',
        'Alle præsentationer og recordings',
        'Digital transformation toolkit',
        'Eksklusiv adgang til speaker dinner',
        'Alle måltider og refreshments inkluderet',
        'Certificate of attendance'
      ]
    },
    categories: ['digital-strategi', 'teknologi'],
    tags: ['Digital Transformation', 'Leadership', 'Innovation', 'Networking', 'Conference'],
    image: '/api/placeholder/800/400',
    featured: true,
    seo: {
      title: 'Digital Transformation Conference 2024 - Danmarks Største Event',
      description: 'Join 500+ ledere på Danmarks største digital transformation konference. Internationale talere og danske success stories.',
      keywords: ['digital transformation', 'konference', 'innovation', 'ledelse', 'teknologi']
    }
  }
];

export const getEventBySlug = (slug: string): Event | undefined => {
  return events.find(event => event.slug === slug);
};

export const getUpcomingEvents = (): Event[] => {
  return events.filter(event => event.status === 'upcoming');
};

export const getFeaturedEvents = (): Event[] => {
  return events.filter(event => event.featured && event.status === 'upcoming');
};

export const getEventsByCategory = (category: string): Event[] => {
  return events.filter(event => event.categories.includes(category) && event.status === 'upcoming');
};