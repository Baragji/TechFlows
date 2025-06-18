'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GlobeAltIcon, 
  ShoppingCartIcon, 
  DevicePhoneMobileIcon, 
  CogIcon 
} from '@heroicons/react/24/outline';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const services: Service[] = [
  {
    id: 'hjemmesider',
    title: 'Hjemmesideudvikling',
    description: 'Moderne, responsive hjemmesider der konverterer besøgende til kunder',
    icon: GlobeAltIcon,
    href: '/services/hjemmesider'
  },
  {
    id: 'webshop',
    title: 'Webshopudvikling',
    description: 'Professionelle e-commerce løsninger der øger dit salg',
    icon: ShoppingCartIcon,
    href: '/services/webshop'
  },
  {
    id: 'apps',
    title: 'App-udvikling',
    description: 'Native og cross-platform apps til iOS og Android',
    icon: DevicePhoneMobileIcon,
    href: '/services/apps'
  },
  {
    id: 'automatisering',
    title: 'Automatisering',
    description: 'Automatiser manuelle processer og workflows for øget effektivitet',
    icon: CogIcon,
    href: '/services/automatisering'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Vores services
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Vi tilbyder skræddersyede løsninger til din virksomhed
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-custom hover:shadow-custom-lg transition-all duration-300 border border-border hover:border-accent/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-accent font-medium hover:text-hover transition-colors duration-300 group-hover:translate-x-1"
                >
                  Læs mere
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;