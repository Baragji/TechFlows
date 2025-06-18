'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  UsersIcon,
  GlobeAltIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { getUpcomingEvents, eventCategories, Event } from '@/data/events';

const EventsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const allEvents = getUpcomingEvents();
  
  // Filter events based on category, type and search
  const filteredEvents = allEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.categories.includes(selectedCategory);
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const eventTypes = [
    { id: 'all', name: 'Alle', icon: '📅' },
    { id: 'webinar', name: 'Webinarer', icon: '💻' },
    { id: 'workshop', name: 'Workshops', icon: '🛠️' },
    { id: 'conference', name: 'Konferencer', icon: '🎤' },
    { id: 'meetup', name: 'Meetups', icon: '🤝' }
  ];

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
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Deltag i vores webinarer, workshops og konferencer for at udvide din viden 
            og netværk inden for teknologi og digital innovation
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Søg i events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-glass-light border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent-blue transition-colors"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            </div>
          </div>

          {/* Event Type Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {eventTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedType === type.id
                    ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white'
                    : 'bg-glass-light text-white/70 hover:text-white hover:bg-glass-medium'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{type.icon}</span>
                {type.name}
              </motion.button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-accent-green to-accent-blue text-white'
                  : 'bg-glass-light text-white/70 hover:text-white hover:bg-glass-medium'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FunnelIcon className="w-4 h-4 inline-block mr-2" />
              Alle Kategorier
            </motion.button>
            
            {eventCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-accent-green to-accent-blue text-white'
                    : 'bg-glass-light text-white/70 hover:text-white hover:bg-glass-medium'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70">
            Viser {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` i kategorien "${eventCategories.find(c => c.id === selectedCategory)?.name}"`}
            {selectedType !== 'all' && ` af typen "${eventTypes.find(t => t.id === selectedType)?.name}"`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-glass-light rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarIcon className="w-12 h-12 text-white/50" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ingen events fundet
            </h3>
            <p className="text-white/70 mb-8">
              Prøv at justere dine søgekriterier eller vælg andre filtre.
            </p>
            <motion.button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
                setSearchTerm('');
              }}
              className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ryd alle filtre
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Event Card Component
interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'webinar': return 'from-accent-blue to-accent-purple';
      case 'workshop': return 'from-accent-green to-accent-blue';
      case 'conference': return 'from-accent-purple to-accent-pink';
      case 'meetup': return 'from-accent-orange to-accent-gold';
      default: return 'from-accent-blue to-accent-purple';
    }
  };

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
  
  return (
    <motion.article
      className="bg-glass-light backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/events/${event.slug}`}>
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Event Type Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getEventTypeColor(event.type)} text-white`}>
              {event.type === 'webinar' && '💻 Webinar'}
              {event.type === 'workshop' && '🛠️ Workshop'}
              {event.type === 'conference' && '🎤 Konference'}
              {event.type === 'meetup' && '🤝 Meetup'}
            </span>
          </div>

          {/* Featured Badge */}
          {event.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-accent-gold to-accent-orange text-white">
                ⭐ Featured
              </span>
            </div>
          )}

          {/* Price Badge */}
          <div className="absolute bottom-4 right-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-glass-dark/80 backdrop-blur-sm text-white">
              {event.price.type === 'free' ? 'Gratis' : `${event.price.amount} ${event.price.currency}`}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
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
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-sm text-white/70">
              <ClockIcon className="w-4 h-4 mr-2 text-accent-green" />
              <span>{event.time} • {event.duration}</span>
            </div>
            <div className="flex items-center text-sm text-white/70">
              {event.location.type === 'online' ? (
                <GlobeAltIcon className="w-4 h-4 mr-2 text-accent-purple" />
              ) : (
                <MapPinIcon className="w-4 h-4 mr-2 text-accent-orange" />
              )}
              <span>
                {event.location.type === 'online' ? 'Online Event' : 
                 event.location.type === 'physical' ? `${event.location.venue}, ${event.location.city}` :
                 'Hybrid Event'}
              </span>
            </div>
            <div className="flex items-center text-sm text-white/70">
              <UsersIcon className="w-4 h-4 mr-2 text-accent-gold" />
              <span>
                {event.registered}/{event.capacity} tilmeldt
                {isAlmostFull && (
                  <span className="ml-2 px-2 py-1 bg-accent-orange/20 text-accent-orange rounded text-xs">
                    Få pladser tilbage
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {event.categories.slice(0, 2).map((categoryId, catIndex) => {
              const categoryInfo = eventCategories.find(c => c.id === categoryId);
              return (
                <span
                  key={catIndex}
                  className={`px-2 py-1 text-xs bg-glass-medium rounded-md ${categoryInfo?.color || 'text-white/60'}`}
                >
                  <span className="mr-1">{categoryInfo?.icon}</span>
                  {categoryInfo?.name}
                </span>
              );
            })}
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
  );
};

export default EventsGrid;