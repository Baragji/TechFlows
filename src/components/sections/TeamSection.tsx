'use client';

import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Yousef Beshara',
      role: 'Grundlægger & Lead Developer',
      description:
        'Passioneret om at skabe innovative teknologiløsninger der gør en reel forskel for virksomheder.',
      initials: 'YB',
      gradientFrom: 'from-primary',
      gradientTo: 'to-accent',
    },
    {
      name: 'Tech Specialist',
      role: 'Senior Udvikler',
      description:
        'Ekspert i moderne webudvikling og automatisering med fokus på skalerbare løsninger.',
      initials: 'TS',
      gradientFrom: 'from-secondary',
      gradientTo: 'to-primary',
    },
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Mød teamet</h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            De dygtige mennesker bag TechFlow Solutions
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Avatar */}
              <motion.div
                className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg`}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                {member.initials}
              </motion.div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-text-dark mb-2">{member.name}</h3>
              <p className="text-accent font-semibold mb-4">{member.role}</p>
              <p className="text-text-light leading-relaxed">{member.description}</p>

              {/* Decorative Element */}
              <motion.div
                className="mt-6 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-dark mb-4">Klar til at arbejde sammen?</h3>
            <p className="text-text-light mb-6">
              Vi ser frem til at høre om dit projekt og hvordan vi kan hjælpe dig med at nå dine
              mål.
            </p>
            <motion.a
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-hover transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt os i dag
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
