'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  ChartBarIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'hjemmesider',
    title: 'Hjemmeside Udvikling',
    description: 'Moderne, responsive hjemmesider der konverterer besøgende til kunder med fokus på brugeroplevelse og performance.',
    features: ['Responsive Design', 'SEO Optimeret', 'CMS Integration', 'Performance Optimering'],
    icon: GlobeAltIcon,
    href: '/services/hjemmesider',
    gradient: 'from-accent-blue to-accent-purple',
    stats: { projects: '150+', satisfaction: '98%', avgIncrease: '+40%' }
  },
  {
    id: 'webshop',
    title: 'E-commerce Løsninger',
    description: 'Professionelle webshops der øger dit salg med integrerede betalingsløsninger og avanceret produkthåndtering.',
    features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Commerce'],
    icon: ShoppingCartIcon,
    href: '/services/webshop',
    gradient: 'from-accent-green to-accent-blue',
    stats: { projects: '75+', satisfaction: '96%', avgIncrease: '+85%' }
  },
  {
    id: 'apps',
    title: 'App Udvikling',
    description: 'Native og cross-platform apps til iOS og Android med fokus på brugeroplevelse og skalerbarhed.',
    features: ['iOS & Android', 'Cross-platform', 'API Integration', 'Push Notifications'],
    icon: DevicePhoneMobileIcon,
    href: '/services/apps',
    gradient: 'from-accent-purple to-accent-orange',
    stats: { projects: '50+', satisfaction: '99%', avgIncrease: '+120%' }
  },
  {
    id: 'automatisering',
    title: 'Proces Automatisering',
    description: 'Automatiser manuelle processer og workflows for øget effektivitet og reducerede omkostninger.',
    features: ['Workflow Automation', 'API Integration', 'Data Processing', 'Custom Solutions'],
    icon: CogIcon,
    href: '/services/automatisering',
    gradient: 'from-accent-orange to-accent-green',
    stats: { projects: '100+', satisfaction: '97%', avgIncrease: '+200%' }
  },
  {
    id: 'digital-strategi',
    title: 'Digital Strategi',
    description: 'Strategisk rådgivning og planlægning af din digitale transformation og teknologiske roadmap.',
    features: ['Digital Transformation', 'Technology Roadmap', 'Competitive Analysis', 'ROI Optimization'],
    icon: LightBulbIcon,
    href: '/services/digital-strategi',
    gradient: 'from-accent-blue to-accent-green',
    stats: { projects: '25+', satisfaction: '100%', avgIncrease: '+250%' }
  },
  {
    id: 'analytics',
    title: 'Analytics & Tracking',
    description: 'Implementering af avancerede analytics løsninger for datadrevet beslutningstagning og optimering.',
    features: ['Google Analytics', 'Custom Dashboards', 'Conversion Tracking', 'Performance Metrics'],
    icon: ChartBarIcon,
    href: '/services/analytics',
    gradient: 'from-accent-purple to-accent-blue',
    stats: { projects: '200+', satisfaction: '95%', avgIncrease: '+180%' }
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-obsidian-950">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-2 bg-glass-light backdrop-blur-sm rounded-full text-sm font-medium text-white/80 border border-white/10">
                Komplet Service Portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Teknologiske løsninger
              <span className="block bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green bg-clip-text text-transparent">
                der driver vækst
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fra hjemmesider og apps til automatisering og digital strategi - vi leverer skræddersyede løsninger 
              der transformerer din forretning og skaber målbare resultater.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
              <Link
                href="/prisberegner"
                className="inline-flex items-center px-8 py-4 bg-glass-light backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-glass-medium"
              >
                Beregn pris
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
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
                  <div className="relative h-full bg-glass-light backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:bg-glass-medium overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-sm text-white/60 group-hover:text-white/70 transition-colors duration-300"
                            >
                              <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2 group-hover:bg-accent-purple transition-colors duration-300"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6 p-4 bg-glass-dark/30 rounded-lg">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-sm font-semibold text-accent-green">{service.stats.projects}</div>
                            <div className="text-xs text-white/60">Projekter</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-accent-blue">{service.stats.satisfaction}</div>
                            <div className="text-xs text-white/60">Tilfredshed</div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-accent-purple">{service.stats.avgIncrease}</div>
                            <div className="text-xs text-white/60">Gns. stigning</div>
                          </div>
                        </div>
                      </div>

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

                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-glass-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klar til at transformere din forretning?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Lad os diskutere hvordan vores løsninger kan hjælpe din virksomhed med at vokse og innovere
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:scale-105"
              >
                Få et tilbud
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
              <Link
                href="/prisberegner"
                className="inline-flex items-center px-8 py-4 bg-glass-light backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-glass-medium"
              >
                Beregn pris
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}