'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  results: string[];
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'eco-fashion',
    title: 'E-commerce Platform for Sustainable Fashion',
    client: 'EcoStyle Nordic',
    description: 'Udvikling af en moderne e-commerce platform med fokus på bæredygtig mode og miljøvenlige leveringsløsninger.',
    image: '/images/case-studies/Casestudies1.png',
    tags: ['E-commerce', 'Sustainability', 'Mobile-first'],
    results: ['300% øgning i online salg', '50% reduktion i returrate', '95% kundetilfredshed'],
    href: '/case-studies/eco-fashion'
  },
  {
    id: 'warehouse-automation',
    title: 'AI-Powered Warehouse Management',
    client: 'LogiTech Solutions',
    description: 'Implementering af AI-drevet lagerautomatisering med robotteknologi og real-time tracking.',
    image: '/images/case-studies/Casestudies2.png',
    tags: ['AI', 'Automation', 'IoT'],
    results: ['70% hurtigere ordrebehandling', '40% reduktion i fejl', '€2M årlige besparelser'],
    href: '/case-studies/warehouse-automation'
  },
  {
    id: 'mobile-banking',
    title: 'Next-Gen Mobile Banking App',
    client: 'Nordic Bank',
    description: 'Udvikling af en sikker og brugervenlig mobile banking app med avancerede finansielle funktioner.',
    image: '/images/case-studies/Casestudies3.png',
    tags: ['FinTech', 'Mobile App', 'Security'],
    results: ['1M+ downloads', '4.8★ app rating', '60% øgning i digital adoption'],
    href: '/case-studies/mobile-banking'
  },
  {
    id: 'fitness-tracker',
    title: 'Smart Fitness Ecosystem',
    client: 'FitTrack Pro',
    description: 'Komplet fitness økosystem med wearables, app og AI-baseret træningsoptimering.',
    image: '/images/case-studies/Casestudies4.png',
    tags: ['IoT', 'Health Tech', 'AI'],
    results: ['500K aktive brugere', '85% retention rate', '25% forbedring i fitness resultater'],
    href: '/case-studies/fitness-tracker'
  },
  {
    id: 'ar-furniture',
    title: 'AR Furniture Visualization',
    client: 'Nordic Design House',
    description: 'Augmented Reality løsning til visualisering af møbler i kundens hjem før køb.',
    image: '/images/case-studies/Casestudies5.jpg',
    tags: ['AR/VR', 'E-commerce', '3D'],
    results: ['45% øgning i konvertering', '80% reduktion i returner', 'Branche innovation award'],
    href: '/case-studies/ar-furniture'
  },
  {
    id: 'ux-wireframes',
    title: 'Digital Transformation Platform',
    client: 'Enterprise Solutions',
    description: 'Omfattende digital transformation med fokus på UX design og workflow optimering.',
    image: '/images/case-studies/Casestudies6.png',
    tags: ['UX/UI', 'Enterprise', 'Workflow'],
    results: ['90% forbedring i workflow', '50% reduktion i onboarding tid', '€5M ROI første år'],
    href: '/case-studies/digital-transformation'
  }
];

const CaseStudiesShowcase = () => {
  return (
    <section className="py-24 bg-obsidian-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
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
            <span className="px-4 py-2 bg-glass-light backdrop-blur-sm rounded-full text-sm font-medium text-white/80 border border-white/10">
              Vores Arbejde
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Case Studies der
            <span className="block bg-linear-to-r from-accent-blue via-accent-green to-accent-purple bg-clip-text text-transparent">
              inspirerer
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Udforsk hvordan vi har hjulpet virksomheder med at transformere deres digitale tilstedeværelse 
            og opnå målbare resultater gennem innovative teknologiløsninger.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={caseStudy.href} className="block">
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20">
                  {/* Case Study Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-obsidian-darker/80 via-transparent to-transparent" />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {caseStudy.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-accent-blue text-sm font-medium">{caseStudy.client}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed mb-4 group-hover:text-white/80 transition-colors duration-300">
                      {caseStudy.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2">
                      {caseStudy.results.slice(0, 2).map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-center text-sm text-white/60 group-hover:text-accent-green transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2" />
                          {result}
                        </div>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="mt-6 flex items-center text-white font-medium group-hover:text-accent-blue transition-all duration-300">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Læs case study
                      </span>
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
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
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
            Vil du se alle vores projekter?
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center px-8 py-4 bg-linear-to-r from-accent-green to-accent-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-green/25 transition-all duration-300 hover:scale-105"
          >
            Se alle case studies
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

export default CaseStudiesShowcase;