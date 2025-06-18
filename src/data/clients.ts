export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
  industry: string;
}

export const clients: Client[] = [
  {
    id: '1',
    name: 'FitTrack Pro',
    logo: '/images/clients/fittrack-logo.svg',
    website: 'https://fittrackpro.com',
    industry: 'Health & Fitness'
  },
  {
    id: '2',
    name: 'Nordic Design Co.',
    logo: '/images/clients/nordic-design-logo.svg',
    website: 'https://nordicdesign.dk',
    industry: 'Design & Furniture'
  },
  {
    id: '3',
    name: 'Consulting Group ApS',
    logo: '/images/clients/consulting-group-logo.svg',
    industry: 'Business Consulting'
  },
  {
    id: '4',
    name: 'Fashion Forward',
    logo: '/images/clients/fashion-forward-logo.svg',
    website: 'https://fashionforward.dk',
    industry: 'Fashion & Retail'
  },
  {
    id: '5',
    name: 'Traditional Manufacturing A/S',
    logo: '/images/clients/traditional-manufacturing-logo.svg',
    industry: 'Manufacturing'
  },
  {
    id: '6',
    name: 'Local Service Pro',
    logo: '/images/clients/local-service-logo.svg',
    industry: 'Local Services'
  },
  {
    id: '7',
    name: 'TechStart Innovation',
    logo: '/images/clients/techstart-logo.svg',
    industry: 'Technology'
  },
  {
    id: '8',
    name: 'Green Energy Solutions',
    logo: '/images/clients/green-energy-logo.svg',
    industry: 'Renewable Energy'
  },
  {
    id: '9',
    name: 'Healthcare Plus',
    logo: '/images/clients/healthcare-plus-logo.svg',
    industry: 'Healthcare'
  },
  {
    id: '10',
    name: 'EduTech Academy',
    logo: '/images/clients/edutech-logo.svg',
    industry: 'Education Technology'
  },
  {
    id: '11',
    name: 'Financial Advisors Group',
    logo: '/images/clients/financial-advisors-logo.svg',
    industry: 'Financial Services'
  },
  {
    id: '12',
    name: 'Restaurant Chain Denmark',
    logo: '/images/clients/restaurant-chain-logo.svg',
    industry: 'Food & Beverage'
  }
];

export const getClientsByIndustry = (industry: string): Client[] => {
  return clients.filter(client => client.industry === industry);
};

export const getAllIndustries = (): string[] => {
  return [...new Set(clients.map(client => client.industry))];
};