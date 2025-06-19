'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)"
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0
    }
  };

  const heroWords = ["Du", "kunne", "vokse", "lige", "nu"];
  const subWords = ["Lad", "os", "accelerere", "din", "digitale", "transformation"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image - optimized with bg-fixed only */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/hero/obsidian-bg.jpg')",
        }}
      />
      
      {/* Static Background Elements - no animation for performance */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle Obsidian-style dots pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Very subtle geometric shapes - static for performance */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-accent-blue/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-accent-purple/3 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-20 flex justify-end">
        <motion.div
          className="w-1/2 text-left glass-hero p-6 rounded-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <div className="space-y-6 mb-6">
            <motion.div
              className="flex flex-wrap justify-start gap-4 text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {heroWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block"
                  style={{ transformOrigin: "50% 100%" }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: index * 0.1 
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-start gap-3 text-2xl md:text-4xl lg:text-5xl font-medium text-white/90 leading-tight"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {subWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block"
                  style={{ transformOrigin: "50% 100%" }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.5 + index * 0.1 
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light mb-8"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            Vi skaber digitale løsninger der ikke bare ser godt ud – de leverer målbare resultater. 
            Fra apps der engagerer til hjemmesider der konverterer og automatisering der sparer tid.
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          >
            {['Web Development', 'App Development', 'Digital Marketing', 'SEO', 'Automation'].map((tag, index) => (
              <motion.span
                key={index}
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white/90 px-3 py-1 text-xs rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="pt-8"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/prisberegner"
                className="inline-flex items-center justify-center bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg transition-all duration-300"
              >
                Kom i gang i dag
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center text-white/40 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-sm font-medium mb-2">Scroll for mere</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 border border-blue-100 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 border border-purple-100 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default Hero;