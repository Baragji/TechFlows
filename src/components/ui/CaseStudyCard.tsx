'use client';

import { CaseStudy } from '@/data/caseStudies';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

const categoryColors = {
  app: 'from-blue-500 to-purple-600',
  web: 'from-green-500 to-teal-600',
  automation: 'from-orange-500 to-red-600',
  analytics: 'from-purple-500 to-pink-600',
  strategy: 'from-indigo-500 to-blue-600',
};

const categoryLabels = {
  app: 'App Udvikling',
  web: 'Web Udvikling',
  automation: 'Automatisering',
  analytics: 'Analytics',
  strategy: 'Digital Strategi',
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index = 0 }) => {
  return (
    <motion.div
      className="group relative glass-surface rounded-2xl overflow-hidden hover:border-white/[.2] transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* Hero Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/[.5] to-gray-950/[.5] z-10" />
        <Image
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className={`px-3 py-1 bg-gradient-to-r ${categoryColors[caseStudy.category]} text-white text-sm font-medium rounded-full`}
          >
            {categoryLabels[caseStudy.category]}
          </span>
        </div>

        {/* Featured Badge */}
        {caseStudy.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-accent-gold text-obsidian-950 text-sm font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Client */}
        <div className="text-accent-blue text-sm font-medium mb-2">{caseStudy.client}</div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-accent-blue transition-colors duration-300">
          {caseStudy.title}
        </h3>

        {/* Description */}
        <p className="text-white/[.7] text-sm leading-relaxed mb-4 line-clamp-3">
          {caseStudy.shortDescription}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg font-bold text-accent-green">{metric.value}</div>
              <div className="text-xs text-white/[.6]">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 glass-surface-medium text-white/[.8] text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {caseStudy.technologies.length > 3 && (
            <span className="px-2 py-1 glass-surface-medium text-white/[.6] text-xs rounded-md">
              +{caseStudy.technologies.length - 3} mere
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center text-accent-blue hover:text-white transition-colors duration-300 group/link"
        >
          <span className="font-medium">Læs case study</span>
          <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default CaseStudyCard;
