'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies, categories, type CaseStudy } from '@/data/caseStudies';
import CaseStudyCard from '@/components/ui/CaseStudyCard';

const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>(caseStudies);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'all') {
      setFilteredCaseStudies(caseStudies);
    } else {
      setFilteredCaseStudies(
        caseStudies.filter(study => study.category === categoryId)
      );
    }
  };

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
            Vores Portfolio
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Udforsk vores succeshistorier og se hvordan vi har hjulpet virksomheder 
            med at opnå ekstraordinære resultater gennem innovative digitale løsninger.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/25'
                  : 'bg-glass-light backdrop-blur-sm text-white/70 hover:text-white hover:bg-glass-medium border border-white/10 hover:border-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-white/60">
            Viser {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'projekt' : 'projekter'}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredCaseStudies.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-glass-light rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Ingen projekter fundet
            </h3>
            <p className="text-white/60">
              Prøv at vælge en anden kategori eller kontakt os for at høre om kommende projekter.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Klar til at skabe din egen succeshistorie?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Lad os diskutere hvordan vi kan hjælpe din virksomhed med at opnå 
            lignende resultater gennem skræddersyede digitale løsninger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.a>
            <motion.a
              href="/prisberegner"
              className="inline-flex items-center px-8 py-4 bg-glass-light backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-glass-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Få et tilbud
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;