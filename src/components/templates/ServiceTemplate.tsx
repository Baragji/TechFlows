'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  CheckIcon,
  CogIcon,
  BoltIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentTextIcon,
  CloudArrowUpIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  BookOpenIcon,
  PencilIcon,
  EyeIcon,
  BuildingStorefrontIcon,
  PaintBrushIcon,
  ComputerDesktopIcon,
  CubeTransparentIcon,
  BeakerIcon,
  CursorArrowRaysIcon,
  PresentationChartLineIcon,
  FunnelIcon,
  CloudIcon,
  BellIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

// Icon mapping
const iconMap = {
  'CogIcon': CogIcon,
  'BoltIcon': BoltIcon,
  'ChartBarIcon': ChartBarIcon,
  'ClockIcon': ClockIcon,
  'DocumentTextIcon': DocumentTextIcon,
  'CloudArrowUpIcon': CloudArrowUpIcon,
  'GlobeAltIcon': GlobeAltIcon,
  'DevicePhoneMobileIcon': DevicePhoneMobileIcon,
  'MagnifyingGlassIcon': MagnifyingGlassIcon,
  'ShieldCheckIcon': ShieldCheckIcon,
  'ShoppingCartIcon': ShoppingCartIcon,
  'CreditCardIcon': CreditCardIcon,
  'TruckIcon': TruckIcon,
  'UserGroupIcon': UserGroupIcon,
  'PresentationChartBarIcon': PresentationChartBarIcon,
  'LightBulbIcon': LightBulbIcon,
  'RocketLaunchIcon': RocketLaunchIcon,
  'BookOpenIcon': BookOpenIcon,
  'PencilIcon': PencilIcon,
  'EyeIcon': EyeIcon,
  'BuildingStorefrontIcon': BuildingStorefrontIcon,
  'PaintBrushIcon': PaintBrushIcon,
  'ComputerDesktopIcon': ComputerDesktopIcon,
  'CubeTransparentIcon': CubeTransparentIcon,
  'BeakerIcon': BeakerIcon,
  'CursorArrowRaysIcon': CursorArrowRaysIcon,
  'PresentationChartLineIcon': PresentationChartLineIcon,
  'FunnelIcon': FunnelIcon,
  'CloudIcon': CloudIcon,
  'BellIcon': BellIcon,
  'TrophyIcon': TrophyIcon,
};

interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

interface ServiceBenefit {
  title: string;
  description: string;
  metric?: string;
}

interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  heroGradient: string;
  icon: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  process: ServiceProcess[];
  technologies: string[];
  caseStudyTitle?: string;
  caseStudyDescription?: string;
  caseStudyMetrics?: { label: string; value: string }[];
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  subtitle,
  description,
  heroGradient,
  icon: iconName,
  features,
  benefits,
  process,
  technologies,
  caseStudyTitle,
  caseStudyDescription,
  caseStudyMetrics,
}) => {
  // Get the icon component from the mapping
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || CogIcon;
  return (
    <div className="min-h-screen bg-obsidian-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-br ${heroGradient} opacity-10 rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-br ${heroGradient} opacity-5 rounded-full blur-3xl`}></div>
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
              href="/#services"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Tilbage til services
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={`w-24 h-24 bg-linear-to-br ${heroGradient} rounded-2xl flex items-center justify-center mx-auto shadow-2xl`}>
                <IconComponent className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className={`inline-flex items-center px-8 py-4 bg-linear-to-r ${heroGradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hvad vi leverer
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Omfattende løsninger tilpasset dine specifikke behov
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-glass-light backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.icon && (
                  <div className="mb-4">
                    {(() => {
                      const FeatureIcon = iconMap[feature.icon as keyof typeof iconMap] || CogIcon;
                      return <FeatureIcon className="w-8 h-8 text-accent-blue" />;
                    })()}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Fordelene for din virksomhed
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Målbare resultater der driver vækst og effektivitet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                    {benefit.metric && (
                      <span className="ml-2 text-accent-green font-bold">
                        {benefit.metric}
                      </span>
                    )}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vores proces
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              En struktureret tilgang der sikrer succes fra start til slut
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="shrink-0">
                  <div className={`w-12 h-12 bg-linear-to-br ${heroGradient} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Teknologier vi bruger
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Moderne teknologier der sikrer skalerbarhed og performance
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
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

      {/* Case Study Section */}
      {caseStudyTitle && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {caseStudyTitle}
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                {caseStudyDescription}
              </p>

              {caseStudyMetrics && (
                <div className="grid md:grid-cols-3 gap-8">
                  {caseStudyMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-accent-green mb-2">
                        {metric.value}
                      </div>
                      <div className="text-white/70">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
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
              Klar til at komme i gang?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Lad os diskutere hvordan vi kan hjælpe din virksomhed med at vokse
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={`inline-flex items-center px-8 py-4 bg-linear-to-r ${heroGradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}
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
};

export default ServiceTemplate;