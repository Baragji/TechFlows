'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getFeaturedCaseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/ui/CaseStudyCard';

const FeaturedCaseStudies: React.FC = () => {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <section className="py-20 bg-obsidian-950">
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
            Succeshistorier
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Se hvordan vi har hjulpet virksomheder med at transformere deres 
            digitale tilstedeværelse og opnå ekstraordinære resultater.
          </p>
        </motion.div>

        {/* Featured Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredCaseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>

        {/* CTA to View All */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 mb-6">
            Vil du se flere af vores projekter og succeshistorier?
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:scale-105"
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

export default FeaturedCaseStudies;