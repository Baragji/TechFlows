'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  UsersIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { getFeaturedEvents } from '@/data/events';
import Image from 'next/image'

const FeaturedEvents: React.FC = () => {
  const featuredEvents = getFeaturedEvents().slice(0, 3);

  if (featuredEvents.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-glass-dark/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kommende Events
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Deltag i vores eksklusive webinarer, workshops og konferencer. 
            Lær fra eksperter og netværk med andre professionelle.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/events"
              className="inline-flex items-center px-6 py-3 bg-glass-light backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-glass-medium transition-all duration-300 group"
            >
              Se alle events
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-glass-light backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
            >
              <Link href={`/events/${event.slug}`}>
                <div className="relative">
                  <Image 
                    src={event.image || '/images/events/default-event.svg'} 
                    alt={event.title || 'Event billede'} 
                    width={800} 
                    height={600} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/events/default-event.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-glass-dark/80 backdrop-blur-sm rounded-xl p-3 text-center">
                      <div className="text-white font-bold text-lg leading-none">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-accent-blue text-xs font-medium uppercase">
                        {new Date(event.date).toLocaleDateString('da-DK', { month: 'short' })}
                      </div>
                    </div>
                  </div>

                  {/* Event Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r from-accent-blue to-accent-purple text-white">
                      {event.type === 'webinar' && '💻 Webinar'}
                      {event.type === 'workshop' && '🛠️ Workshop'}
                      {event.type === 'conference' && '🎤 Konference'}
                      {event.type === 'meetup' && '🤝 Meetup'}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-glass-dark/80 backdrop-blur-sm text-white">
                      {event.price.type === 'free' ? 'Gratis' : `${event.price.amount} DKK`}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 mb-4 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-white/70">
                      <CalendarIcon className="w-4 h-4 mr-2 text-accent-blue" />
                      <span>{formatDate(event.date)} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-white/70">
                      <ClockIcon className="w-4 h-4 mr-2 text-accent-green" />
                      <span>{event.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-white/70">
                      {event.location.type === 'online' ? (
                        <GlobeAltIcon className="w-4 h-4 mr-2 text-accent-purple" />
                      ) : (
                        <MapPinIcon className="w-4 h-4 mr-2 text-accent-orange" />
                      )}
                      <span>
                        {event.location.type === 'online' ? 'Online Event' : 
                         event.location.type === 'physical' ? event.location.city :
                         'Hybrid Event'}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-white/70">
                      <UsersIcon className="w-4 h-4 mr-2 text-accent-gold" />
                      <span>
                        {event.registered}/{event.capacity} tilmeldt
                        {(event.capacity - event.registered) <= 10 && (
                          <span className="ml-2 px-2 py-1 bg-accent-orange/20 text-accent-orange rounded text-xs">
                            Få pladser
                          </span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-accent-blue font-medium group-hover:text-accent-purple transition-colors duration-300">
                      {event.registration.isOpen ? 'Tilmeld dig' : 'Læs mere'}
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                    
                    {!event.registration.isOpen && (
                      <span className="text-xs text-white/50">
                        Tilmelding lukket
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-glass-light backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mist aldrig et event
            </h3>
            <p className="text-white/70 mb-6">
              Tilmeld dig vores nyhedsbrev og få besked om nye events, exclusive workshops og special tilbud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/events"
                className="px-8 py-4 bg-linear-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Se alle events
              </motion.a>
              <motion.a
                href="/#newsletter"
                className="px-8 py-4 bg-glass-medium backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-glass-light transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tilmeld nyhedsbrev
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvents;