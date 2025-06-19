'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  CalendarIcon, 
  MapPinIcon,
  GlobeAltIcon,
  ArrowLeftIcon,
  ShareIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { Event, getUpcomingEvents, eventCategories } from '@/data/events';
import StructuredData from '@/components/seo/StructuredData';
import Image from 'next/image'

interface EventDetailProps {
  event: Event;
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    experience: '',
    expectations: ''
  });

  const relatedEvents = getUpcomingEvents()
    .filter(e => e.id !== event.id && e.categories.some(cat => event.categories.includes(cat)))
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const spotsLeft = event.capacity - event.registered;
  const isAlmostFull = spotsLeft <= 10;

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the registration to your backend
    setShowRegistrationModal(false);
    // Show success message or redirect
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } else if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const eventData = {
    name: event.title,
    startDate: `${event.date}T${event.time}:00`,
    endDate: `${event.date}T${event.time}:00`, // You might want to calculate actual end time
    description: event.description,
    image: event.image,
    location: event.location.type === 'online' ? {
      '@type': 'VirtualLocation',
      url: event.location.url || 'https://techflow.dk/events'
    } : {
      '@type': 'Place',
      name: event.location.venue,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.location.address,
        addressLocality: event.location.city,
        addressCountry: 'DK'
      }
    },
    offers: {
      '@type': 'Offer',
      price: event.price.type === 'free' ? '0' : event.price.amount?.toString(),
      priceCurrency: 'DKK',
      availability: event.registration.isOpen ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut'
    }
  };

  return (
    <article className="min-h-screen bg-linear-to-br from-background via-background to-glass-dark">
      <StructuredData type="Event" data={eventData} />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/events/default-event.svg" alt="Event billede" width={800} height={600} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/90 to-background" />
        </div>
        
        <div className="relative container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/events"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Tilbage til events
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Type & Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center space-x-4 mb-6"
              >
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-linear-to-r from-accent-blue to-accent-purple text-white">
                  {event.type === 'webinar' && '💻 Webinar'}
                  {event.type === 'workshop' && '🛠️ Workshop'}
                  {event.type === 'conference' && '🎤 Konference'}
                  {event.type === 'meetup' && '🤝 Meetup'}
                </span>
                {event.featured && (
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-linear-to-r from-accent-gold to-accent-orange text-white">
                    ⭐ Featured Event
                  </span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {event.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                {event.description}
              </motion.p>

              {/* Event Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid sm:grid-cols-2 gap-6 mb-8"
              >
                <div className="bg-glass-light backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <CalendarIcon className="w-8 h-8 text-accent-blue mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Dato & Tid</h3>
                  <p className="text-white/70">{formatDate(event.date)}</p>
                  <p className="text-white/70">{event.time} • {event.duration}</p>
                </div>
                
                <div className="bg-glass-light backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  {event.location.type === 'online' ? (
                    <GlobeAltIcon className="w-8 h-8 text-accent-green mb-3" />
                  ) : (
                    <MapPinIcon className="w-8 h-8 text-accent-orange mb-3" />
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2">Lokation</h3>
                  <p className="text-white/70">
                    {event.location.type === 'online' ? 'Online Event' : 
                     event.location.type === 'physical' ? `${event.location.venue}` :
                     'Hybrid Event'}
                  </p>
                  {event.location.address && (
                    <p className="text-white/70 text-sm">{event.location.address}, {event.location.city}</p>
                  )}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {event.categories.map((categoryId, index) => {
                  const categoryInfo = eventCategories.find(c => c.id === categoryId);
                  return (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium bg-glass-medium backdrop-blur-sm ${categoryInfo?.color || 'text-white'}`}
                    >
                      <span className="mr-2">{categoryInfo?.icon}</span>
                      {categoryInfo?.name}
                    </span>
                  );
                })}
              </motion.div>
            </div>

            {/* Registration Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="sticky top-24"
              >
                <div className="bg-glass-light backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-6">
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">
                      {event.price.type === 'free' ? 'Gratis' : 
                       event.price.earlyBird ? `${event.price.earlyBird} ${event.price.currency}` : 
                       `${event.price.amount} ${event.price.currency}`}
                    </div>
                    {event.price.earlyBird && event.price.type === 'paid' && (
                      <div className="text-white/70 text-sm">
                        <span className="line-through">{event.price.amount} {event.price.currency}</span>
                        <span className="ml-2 px-2 py-1 bg-accent-green/20 text-accent-green rounded text-xs">
                          Early Bird
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Capacity */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70">Tilmeldte</span>
                      <span className="text-white font-semibold">{event.registered}/{event.capacity}</span>
                    </div>
                    <div className="w-full bg-glass-medium rounded-full h-2">
                      <div 
                        className="bg-linear-to-r from-accent-blue to-accent-purple h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                    {isAlmostFull && (
                      <p className="text-accent-orange text-sm mt-2">
                        ⚠️ Kun {spotsLeft} pladser tilbage
                      </p>
                    )}
                  </div>

                  {/* Registration Button */}
                  {event.registration.isOpen ? (
                    <motion.button
                      onClick={() => setShowRegistrationModal(true)}
                      className="w-full px-6 py-4 bg-linear-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 mb-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Tilmeld dig nu
                    </motion.button>
                  ) : (
                    <div className="w-full px-6 py-4 bg-glass-medium text-white/70 text-center rounded-xl mb-4">
                      Tilmelding lukket
                    </div>
                  )}

                  {/* Share Button */}
                  <motion.button
                    onClick={handleShare}
                    className="w-full px-6 py-3 bg-glass-medium backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-glass-light transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShareIcon className="w-5 h-5 mr-2" />
                    Del event
                  </motion.button>
                </div>

                {/* Event Info */}
                <div className="bg-glass-light backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Event Info</h3>
                  <div className="space-y-3 text-sm text-white/70">
                    <div>
                      <strong className="text-white">Registreringsdeadline:</strong><br />
                      {new Date(event.registration.deadline).toLocaleDateString('da-DK')}
                    </div>
                    <div>
                      <strong className="text-white">Krav:</strong>
                      <ul className="mt-2 space-y-1">
                        {event.registration.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="w-4 h-4 text-accent-green mr-2 mt-0.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Full Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Om Dette Event</h2>
              <div 
                className="prose prose-lg prose-invert max-w-none text-white/90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: event.fullDescription }}
              />
            </motion.div>

            {/* Agenda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Program</h2>
              <div className="space-y-4">
                {event.agenda.map((item, index) => (
                  <div key={index} className="bg-glass-light backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <div className="text-accent-blue font-mono font-semibold">
                          {item.time}
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      {item.speaker && (
                        <div className="text-sm text-white/70">
                          Speaker: {item.speaker}
                        </div>
                      )}
                    </div>
                    <p className="text-white/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Speakers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Talere</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="bg-glass-light backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-start space-x-4">
                      <Image src="/images/events/default-event.svg" alt="Event billede" width={800} height={600} className="w-16 h-16 rounded-full object-cover" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {speaker.name}
                        </h3>
                        <p className="text-accent-blue text-sm mb-2">
                          {speaker.role} • {speaker.company}
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {speaker.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Hvad Får Du</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {event.registration.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-accent-green shrink-0 mt-1" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-20 bg-glass-dark/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Andre Events Du Måske Kan Lide
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedEvents.map((relatedEvent, index) => (
                <motion.article
                  key={relatedEvent.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-glass-light backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <Link href={`/events/${relatedEvent.slug}`}>
                    <div className="relative">
                      <Image src="/images/events/default-event.svg" alt="Event billede" width={800} height={600} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r from-accent-blue to-accent-purple text-white">
                          {relatedEvent.type === 'webinar' && '💻'}
                          {relatedEvent.type === 'workshop' && '🛠️'}
                          {relatedEvent.type === 'conference' && '🎤'}
                          {relatedEvent.type === 'meetup' && '🤝'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                        {relatedEvent.title}
                      </h3>
                      
                      <p className="text-white/70 mb-4 leading-relaxed line-clamp-3">
                        {relatedEvent.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <span>{formatDate(relatedEvent.date)}</span>
                        <span>
                          {relatedEvent.price.type === 'free' ? 'Gratis' : `${relatedEvent.price.amount} DKK`}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-glass-light backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Tilmeld dig {event.title}</h2>
              <button
                onClick={() => setShowRegistrationModal(false)}
                className="text-white/70 hover:text-white"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleRegistration} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Fulde navn *</label>
                  <input
                    type="text"
                    required
                    value={registrationData.name}
                    onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-glass-medium border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent-blue"
                    placeholder="Dit fulde navn"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={registrationData.email}
                    onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-glass-medium border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent-blue"
                    placeholder="din@email.dk"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Virksomhed</label>
                  <input
                    type="text"
                    value={registrationData.company}
                    onChange={(e) => setRegistrationData({...registrationData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-glass-medium border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent-blue"
                    placeholder="Din virksomhed"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={registrationData.phone}
                    onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-glass-medium border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent-blue"
                    placeholder="+45 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Erfaring niveau</label>
                <select
                  value={registrationData.experience}
                  onChange={(e) => setRegistrationData({...registrationData, experience: e.target.value})}
                  className="w-full px-4 py-3 bg-glass-medium border border-white/20 rounded-xl text-white focus:outline-none focus:border-accent-blue"
                >
                  <option value="">Vælg dit erfaring niveau</option>
                  <option value="beginner">Begynder</option>
                  <option value="intermediate">Mellem</option>
                  <option value="advanced">Avanceret</option>
                  <option value="expert">Ekspert</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">Hvad håber du at få ud af dette event?</label>
                <textarea
                  rows={4}
                  value={registrationData.expectations}
                  onChange={(e) => setRegistrationData({...registrationData, expectations: e.target.value})}
                  className="w-full px-4 py-3 bg-glass-medium border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent-blue resize-none"
                  placeholder="Del dine forventninger og mål..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-linear-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Bekræft tilmelding
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="flex-1 px-6 py-4 bg-glass-medium backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-glass-light transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Annuller
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </article>
  );
};

export default EventDetail;