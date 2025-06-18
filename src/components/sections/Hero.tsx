'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image - matching HTML example */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/hero/Forside (Main Hero).png')",
        }}
      />
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        {/* Subtle Obsidian-style dots pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Very subtle geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-accent-blue/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-accent-purple/3 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-6 h-6 bg-purple-400 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/6 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-32 relative z-20">
        <motion.div
          className="max-w-4xl mx-auto text-left ml-[20%] bg-obsidian-overlay backdrop-blur-hero rounded-3xl p-12 border border-glass-light"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <div className="space-y-6">
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
                className="px-4 py-2 border border-glass-strong rounded-full text-sm text-white/90 hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
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
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-obsidian-darker bg-white rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start dit projekt nu
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