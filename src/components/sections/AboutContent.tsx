'use client';

import { motion } from 'framer-motion';
import { useCounterAnimation } from '@/hooks/useScrollAnimation';
import {
  LightBulbIcon,
  StarIcon,
  CubeIcon,
  UserGroupIcon,
  EyeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

interface Stat {
  number: string;
  label: string;
}

interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const AboutContent = () => {
  const stats: Stat[] = [
    { number: '75', label: 'Tilfredse kunder' },
    { number: '150', label: 'Projekter leveret' },
    { number: '7', label: 'Års erfaring' },
    { number: '98', label: '% kundetilfredshed' },
  ];

  // Counter animations for stats
  const counter1 = useCounterAnimation(75);
  const counter2 = useCounterAnimation(150);
  const counter3 = useCounterAnimation(7);
  const counter4 = useCounterAnimation(98);

  const values: Value[] = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Vi holder os altid opdateret med de nyeste teknologier og trends',
    },
    {
      icon: StarIcon,
      title: 'Kvalitet',
      description: 'Vi leverer altid professionelt håndværk af højeste standard',
    },
    {
      icon: CubeIcon,
      title: 'Enkelhed',
      description: 'Vi skaber intuitive løsninger, der er nemme at bruge og forstå',
    },
    {
      icon: UserGroupIcon,
      title: 'Samarbejde',
      description: 'Vi arbejder tæt sammen med vores kunder som ægte partnere',
    },
    {
      icon: EyeIcon,
      title: 'Transparens',
      description: 'Vi kommunikerer åbent og ærligt gennem hele processen',
    },
    {
      icon: SparklesIcon,
      title: 'Bæredygtighed',
      description: 'Vi tænker langsigtet og skaber løsninger der holder',
    },
  ];

  return (
    <section className="py-20 bg-obsidian-darker">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Historie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Vores historie</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                TechFlow Solutions blev grundlagt med en klar vision: at gøre teknologi tilgængelig
                og værdiskabende for alle virksomheder, uanset størrelse. Vi startede som et lille
                team af passionerede udviklere og er vokset til at blive en pålidelig partner for
                virksomheder, der ønsker at udnytte teknologiens fulde potentiale.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Vores mission</h3>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Hos TechFlow Solutions tror vi på, at teknologi skal gøre livet lettere, ikke mere
                kompliceret. Vi hjælper virksomheder med at automatisere deres processer og skabe
                digitale løsninger, der virkelig gør en forskel. Vores mål er at være den
                teknologipartner, der forstår både forretning og teknologi.
              </p>
            </motion.div>

            {/* Værdier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Vores værdier</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors duration-300 border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-accent-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                        <p className="text-white/70">{value.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Tilgang */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Vores tilgang</h3>
              <p className="text-lg text-white/70 leading-relaxed mb-4">
                Vi tror på, at de bedste løsninger opstår gennem tæt samarbejde mellem kunde og
                leverandør. Derfor starter vi altid med at forstå jeres forretning, jeres
                udfordringer og jeres mål. Først derefter designer vi teknologiløsninger, der passer
                præcist til jeres behov.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Vores agile arbejdsmetode sikrer, at I altid er involveret i processen, og at vi kan
                tilpasse os undervejs. Vi leverer ikke bare kode - vi leverer værdi.
              </p>
            </motion.div>
          </div>

          {/* Statistics Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sticky top-8">
              <h3 className="text-xl font-semibold text-white mb-8 text-center">
                Vores resultater
              </h3>
              <div className="space-y-8">
                {stats.map((stat, index) => {
                  const counters = [counter1, counter2, counter3, counter4];
                  const currentCounter = counters[index];

                  return (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      ref={currentCounter.elementRef as React.RefObject<HTMLDivElement>}
                    >
                      <div className="text-4xl font-bold text-accent-blue mb-2">
                        {Math.round(currentCounter.count)}
                        {stat.label.includes('%') ? '' : '+'}
                      </div>
                      <div className="text-white/60 font-medium">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
