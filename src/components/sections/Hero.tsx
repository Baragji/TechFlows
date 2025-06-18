'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovative teknologiløsninger der skaber værdi
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-text-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vi specialiserer os i udvikling af apps, hjemmesider og automatisering af arbejdsprocesser med fokus på innovation og effektivitet
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-hover transition-colors duration-300 shadow-custom hover:shadow-custom-lg"
              >
                Udforsk vores services
              </Link>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-accent font-semibold rounded-lg border-2 border-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                Start dit projekt
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative">
            <motion.div 
              className="grid grid-cols-3 gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {[1, 2, 3, 4, 5, 6].map((box, index) => (
                <motion.div
                  key={box}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-primary to-accent' :
                    index % 3 === 1 ? 'from-secondary to-primary' :
                    'from-accent to-secondary'
                  } shadow-custom`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.1),
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 2
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default Hero;