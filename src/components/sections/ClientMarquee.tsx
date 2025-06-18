'use client';

import { motion } from 'framer-motion';
import { clients } from '@/data/clients';

const ClientMarquee: React.FC = () => {
  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-glass-dark/20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Betroet af innovative virksomheder
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Vi er stolte af at arbejde sammen med fremadtænkende virksomheder 
            der ønsker at skabe ekstraordinære digitale oplevelser.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-obsidian-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-obsidian-950 to-transparent z-10" />
          
          {/* Marquee */}
          <motion.div
            className="flex space-x-16"
            animate={{
              x: [0, -50 * clients.length + '%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center group"
              >
                <div className="relative w-full h-full flex items-center justify-center bg-glass-light backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:bg-glass-medium">
                  {/* Placeholder for client logo */}
                  <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/60 text-xs font-medium text-center px-2">
                      {client.name}
                    </span>
                  </div>
                  
                  {/* Uncomment when actual logos are available */}
                  {/* <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  /> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">
              50+
            </div>
            <div className="text-white/70 text-sm">
              Tilfredse klienter
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-green mb-2">
              200+
            </div>
            <div className="text-white/70 text-sm">
              Projekter leveret
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">
              98%
            </div>
            <div className="text-white/70 text-sm">
              Klient tilfredshed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
              5+
            </div>
            <div className="text-white/70 text-sm">
              År erfaring
            </div>
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Brancher vi betjener
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Health & Fitness',
              'E-commerce',
              'Manufacturing',
              'Consulting',
              'Healthcare',
              'Education',
              'Financial Services',
              'Food & Beverage',
              'Technology',
              'Renewable Energy'
            ].map((industry, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-glass-light backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMarquee;