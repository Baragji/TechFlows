'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface Stat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const stats: Stat[] = [
  {
    id: '1',
    value: 200,
    suffix: '+',
    label: 'Projekter Leveret',
    description: 'Succesfulde digitale løsninger implementeret',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-accent-blue'
  },
  {
    id: '2',
    value: 98,
    suffix: '%',
    label: 'Klient Tilfredshed',
    description: 'Baseret på klient feedback og reviews',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'text-accent-green'
  },
  {
    id: '3',
    value: 50,
    suffix: '+',
    label: 'Tilfredse Klienter',
    description: 'Virksomheder der stoler på vores ekspertise',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'text-accent-purple'
  },
  {
    id: '4',
    value: 5,
    suffix: '+',
    label: 'År Erfaring',
    description: 'Dyb ekspertise inden for digital udvikling',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'text-accent-gold'
  }
];

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-glass-dark/20">
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
            Vores Resultater
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Tallene taler for sig selv. Vi leverer konsistent høj kvalitet og 
            ekstraordinære resultater for vores klienter.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-glass-light backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-glass-medium group-hover:scale-105">
                {/* Icon */}
                <div className={`${stat.color} mb-6 flex justify-center`}>
                  <div className="w-16 h-16 bg-glass-medium rounded-xl flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>

                {/* Value */}
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {inView ? (
                    <>
                      {stat.prefix}
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        delay={index * 0.2}
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    `${stat.prefix || ''}0${stat.suffix || ''}`
                  )}
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Metrics */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-glass-light backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Gennemsnitlige Resultater for Vores Klienter
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-green mb-2">
                  {inView ? <CountUp end={285} duration={2.5} suffix="%" /> : '0%'}
                </div>
                <div className="text-white/70">
                  Stigning i online synlighed
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-blue mb-2">
                  {inView ? <CountUp end={4.2} duration={2.5} decimals={1} suffix="x" /> : '0x'}
                </div>
                <div className="text-white/70">
                  ROI på digitale investeringer
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-purple mb-2">
                  {inView ? <CountUp end={65} duration={2.5} suffix="%" /> : '0%'}
                </div>
                <div className="text-white/70">
                  Reduktion i operationelle omkostninger
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 mb-6">
            Vil du være den næste succeshistorie?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-linear-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lad os tale om dit projekt
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;