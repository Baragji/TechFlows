import type { Metadata } from 'next';
import EventsHero from '@/components/sections/EventsHero';
import EventsGrid from '@/components/sections/EventsGrid';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Events - Webinarer, Workshops & Konferencer | TechFlow Solutions',
  description:
    'Deltag i vores teknologi events. Gratis webinarer, hands-on workshops og networking konferencer om webudvikling, AI og digital transformation.',
  keywords: 'events, webinarer, workshops, konferencer, teknologi, webudvikling, AI, digital transformation',
  openGraph: {
    title: 'Tech Events - Udvid din viden | TechFlow Solutions',
    description: 'Deltag i webinarer, workshops og konferencer om de nyeste teknologi trends. Netværk med eksperter og udvid din viden.',
    images: ['/api/placeholder/1200/630'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Events - Udvid din viden | TechFlow Solutions',
    description: 'Deltag i webinarer, workshops og konferencer om de nyeste teknologi trends.',
    images: ['/api/placeholder/1200/630'],
  }
};

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <EventsGrid />
      <Newsletter />
    </main>
  );
}