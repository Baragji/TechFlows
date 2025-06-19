'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { CaseStudy, caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/ui/CaseStudyCard';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

const categoryColors = {
  app: 'from-blue-500 to-purple-600',
  web: 'from-green-500 to-teal-600',
  automation: 'from-orange-500 to-red-600',
  analytics: 'from-purple-500 to-pink-600',
  strategy: 'from-indigo-500 to-blue-600'
};

const categoryLabels = {
  app: 'App Udvikling',
  web: 'Web Udvikling',
  automation: 'Automatisering',
  analytics: 'Analytics',
  strategy: 'Digital Strategi'
};

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ caseStudy }) => {
  const relatedCaseStudies = caseStudies
    .filter(study => study.id !== caseStudy.id && study.category === caseStudy.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-obsidian-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-br ${categoryColors[caseStudy.category]} opacity-10 rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-br ${categoryColors[caseStudy.category]} opacity-5 rounded-full blur-3xl`}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Tilbage til case studies
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Category & Client */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className={`px-4 py-2 bg-linear-to-r ${categoryColors[caseStudy.category]} text-white font-medium rounded-full`}>
                {categoryLabels[caseStudy.category]}
              </span>
              <span className="text-accent-blue font-medium">
                {caseStudy.client}
              </span>
              {caseStudy.featured && (
                <span className="px-3 py-1 bg-accent-gold text-obsidian-950 text-sm font-medium rounded-full">
                  Featured
                </span>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {caseStudy.title}
            </motion.h1>

            {/* Short Description */}
            <motion.p
              className="text-xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {caseStudy.shortDescription}
            </motion.p>

            {/* Project Info */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-glass-light backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Projektvarighed</h3>
                <p className="text-white/70">{caseStudy.timeline}</p>
              </div>
              <div className="bg-glass-light backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Budget</h3>
                <p className="text-white/70">{caseStudy.budget}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-obsidian-900/50 to-obsidian-950/50 z-10" />
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-glass-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resultater
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Målbare resultater der demonstrerer projektets succes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {caseStudy.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center bg-glass-light backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-green mb-2">
                  {metric.value}
                </div>
                <div className="text-white font-medium mb-2">
                  {metric.label}
                </div>
                {metric.description && (
                  <div className="text-white/60 text-sm">
                    {metric.description}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Udfordringen
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Løsningen
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Resultatet
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {caseStudy.results}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-glass-dark/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Teknologier Brugt
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Moderne teknologier der sikrede projektets succes
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {caseStudy.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-glass-light backdrop-blur-sm rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-glass-light backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed italic">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  {caseStudy.testimonial.avatar && (
                    <Image
                      src={caseStudy.testimonial.avatar}
                      alt={caseStudy.testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  )}
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      {caseStudy.testimonial.author}
                    </div>
                    <div className="text-white/70 text-sm">
                      {caseStudy.testimonial.position}
                    </div>
                    <div className="text-accent-blue text-sm">
                      {caseStudy.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-glass-dark/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Relaterede Projekter
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Udforsk andre projekter inden for {categoryLabels[caseStudy.category].toLowerCase()}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedCaseStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  caseStudy={study}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klar til at skabe din egen succeshistorie?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Lad os diskutere hvordan vi kan hjælpe din virksomhed med at opnå 
              lignende resultater gennem skræddersyede digitale løsninger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={`inline-flex items-center px-8 py-4 bg-linear-to-r ${categoryColors[caseStudy.category]} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}
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
                Få et tilbud
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;