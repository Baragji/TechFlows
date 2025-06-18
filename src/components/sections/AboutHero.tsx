'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Om TechFlow Solutions
            </h1>
            <p className="text-xl text-text-light leading-relaxed">
              Vi bygger bro mellem teknologi og forretning med innovative løsninger der skaber reel
              værdi
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {[1, 2, 3, 4, 5, 6].map((box, index) => (
                <motion.div
                  key={box}
                  className={`
                    aspect-square rounded-2xl
                    ${
                      index === 0
                        ? 'bg-gradient-to-br from-primary to-accent'
                        : index === 1
                          ? 'bg-gradient-to-br from-secondary to-primary'
                          : index === 2
                            ? 'bg-gradient-to-br from-accent to-secondary'
                            : index === 3
                              ? 'bg-gradient-to-br from-primary to-secondary'
                              : index === 4
                                ? 'bg-gradient-to-br from-secondary to-accent'
                                : 'bg-gradient-to-br from-accent to-primary'
                    }
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 2 + index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
