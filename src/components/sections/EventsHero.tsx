'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { getFeaturedEvents } from '@/data/events';

const EventsHero: React.FC = () => {
  const featuredEvents = getFeaturedEvents();
  const nextEvent = featuredEvents[0];

  const stats = [
    {
      value: '500+',
      label: 'Deltagere',
      icon: <UsersIcon className="w-8 h-8" />,
      color: 'text-accent-blue'
    },
    {
      value: '12+',
      label: 'Events årligt',
      icon: <CalendarIcon className="w-8 h-8" />,
      color: 'text-accent-green'
    },
    {
      value: '95%',
      label: 'Tilfredse deltagere',
      icon: <GlobeAltIcon className="w-8 h-8" />,
      color: 'text-accent-purple'
    }
  ];

  return (
    <section className="relative min-h-screen bg-linear-to-br from-background via-background to-glass-dark flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-linear-to-r from-accent-blue/20 to-accent-purple/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-glass-light backdrop-blur-sm text-accent-blue border border-accent-blue/20">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Kommende Events
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Udvid din
              <span className="bg-linear-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                {' '}viden
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
            >
              Deltag i vores webinarer, workshops og konferencer. Lær fra eksperter, 
              netværk med ligesindede og hold dig opdateret med de nyeste teknologi trends.
            </motion.p>

            {/* Next Event Highlight */}
            {nextEvent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-glass-light backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Næste Event
                    </h3>
                    <h4 className="text-2xl font-bold text-accent-blue mb-2">
                      {nextEvent.title}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {new Date(nextEvent.date).toLocaleDateString('da-DK', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} • {nextEvent.time}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r from-accent-gold to-accent-orange text-white">
                    {nextEvent.price.type === 'free' ? 'Gratis' : `${nextEvent.price.amount} DKK`}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-white/70">
                    <div className="flex items-center space-x-1">
                      <UsersIcon className="w-4 h-4" />
                      <span>{nextEvent.registered}/{nextEvent.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {nextEvent.location.type === 'online' ? (
                        <GlobeAltIcon className="w-4 h-4" />
                      ) : (
                        <CalendarIcon className="w-4 h-4" />
                      )}
                      <span>
                        {nextEvent.location.type === 'online' ? 'Online' : nextEvent.location.city}
                      </span>
                    </div>
                  </div>
                  
                  <motion.a
                    href={`/events/${nextEvent.slug}`}
                    className="px-6 py-3 bg-linear-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Tilmeld dig
                  </motion.a>
                </div>
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#events"
                className="px-8 py-4 bg-linear-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Se alle events
              </motion.a>
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-glass-light backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-glass-medium transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Foreslå et event
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Stats Card */}
              <div className="bg-glass-light backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-accent-blue/5 to-accent-purple/5" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    Event Statistics
                  </h3>
                  
                  <div className="space-y-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className={`p-3 rounded-xl bg-glass-medium ${stat.color}`}>
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-white/70">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-r from-accent-blue to-accent-purple rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-r from-accent-green to-accent-blue rounded-full opacity-20 blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;