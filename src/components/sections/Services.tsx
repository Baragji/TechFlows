'use client';

import {
    ChartBarIcon,
    CogIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    LightBulbIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: 'hjemmesider',
    title: 'Hjemmeside Udvikling',
    description: 'Moderne, responsive hjemmesider der konverterer besøgende til kunder med fokus på brugeroplevelse og performance.',
    features: ['Responsive Design', 'SEO Optimeret', 'CMS Integration', 'Performance Optimering'],
    icon: GlobeAltIcon,
    href: '/services/hjemmesider',
    gradient: 'from-accent-blue to-accent-purple',
  },
  {
    id: 'webshop',
    title: 'E-commerce Løsninger',
    description: 'Professionelle webshops der øger dit salg med integrerede betalingsløsninger og avanceret produkthåndtering.',
    features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Commerce'],
    icon: ShoppingCartIcon,
    href: '/services/webshop',
    gradient: 'from-accent-green to-accent-blue',
  },
  {
    id: 'apps',
    title: 'App Udvikling',
    description: 'Native og cross-platform apps til iOS og Android med fokus på brugeroplevelse og skalerbarhed.',
    features: ['iOS & Android', 'Cross-platform', 'API Integration', 'Push Notifications'],
    icon: DevicePhoneMobileIcon,
    href: '/services/apps',
    gradient: 'from-accent-purple to-accent-orange',
  },
  {
    id: 'automatisering',
    title: 'Proces Automatisering',
    description: 'Automatiser manuelle processer og workflows for øget effektivitet og reducerede omkostninger.',
    features: ['Workflow Automation', 'API Integration', 'Data Processing', 'Custom Solutions'],
    icon: CogIcon,
    href: '/services/automatisering',
    gradient: 'from-accent-orange to-accent-green',
  },
  {
    id: 'digital-strategi',
    title: 'Digital Strategi',
    description: 'Strategisk rådgivning og planlægning af din digitale transformation og teknologiske roadmap.',
    features: ['Strategisk Planlægning', 'Technology Roadmap', 'Competitive Analysis', 'ROI Optimization'],
    icon: LightBulbIcon,
    href: '/services/digital-strategi',
    gradient: 'from-accent-blue to-accent-green',
  },
  {
    id: 'analytics',
    title: 'Analytics & Tracking',
    description: 'Implementering af avancerede analytics løsninger for datadrevet beslutningstagning og optimering.',
    features: ['Google Analytics', 'Custom Dashboards', 'Conversion Tracking', 'Performance Metrics'],
    icon: ChartBarIcon,
    href: '/services/analytics',
    gradient: 'from-accent-purple to-accent-blue',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-obsidian-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 bg-glass-light backdrop-blur-sm rounded-full text-sm font-medium text-white/80 border border-[rgba(255,255,255,0.7)]">
              Vores Ekspertise
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Løsninger der
            <span className="block bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green bg-clip-text text-transparent">
              driver vækst
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Vi leverer skræddersyede teknologiske løsninger der transformerer din forretning
            og skaber målbare resultater gennem innovation og ekspertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 hover:bg-white/10 overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent-blue/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center text-sm text-white/60 group-hover:text-white/70 transition-colors duration-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2 group-hover:bg-accent-purple transition-colors duration-300" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Link */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-white font-medium hover:text-accent-blue transition-all duration-300 group-hover:translate-x-1"
                    >
                      Læs mere
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 mb-6">
            Klar til at transformere din forretning?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:scale-105"
          >
            Start dit projekt
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
