import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEventBySlug, getUpcomingEvents } from '@/data/events';
import EventDetail from '@/components/templates/EventDetail';

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const events = getUpcomingEvents();
  
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Event Not Found - TechFlow Solutions',
    };
  }

  return {
    title: event.seo.title,
    description: event.seo.description,
    keywords: event.seo.keywords.join(', '),
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.description,
      images: [event.image],
    }
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return <EventDetail event={event} />;
}