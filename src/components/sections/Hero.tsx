'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const Hero = () => {
  const heroWords = ['Du', 'kunne', 'vokse', 'lige', 'nu'];
  const subWords = ['Lad', 'os', 'accelerere', 'din', 'digitale', 'transformation'];

  // Prevent hydration mismatch by only adding animations after client mount
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScrollToServices = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined') {
      // eslint-disable-next-line no-restricted-globals
      const servicesElement = document.getElementById('services');
      servicesElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
            backgroundSize: '60px 60px',
          }}
        />

        {/* Very subtle geometric shapes - static for performance */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-accent-blue/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-accent-purple/3 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-(--z-index-hero) flex justify-center">
        <div className="w-full max-w-4xl text-center glass-hero p-6 pb-20 rounded-xl relative">
          {/* Main Headline */}
          <div className="space-y-6 mb-6">
            <div className="flex flex-wrap justify-center gap-4 text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
              {heroWords.map((word, index) => (
                <span key={index} className="inline-block">
                  {word}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 text-2xl md:text-4xl lg:text-5xl font-medium text-white/90 leading-tight">
              {subWords.map((word, index) => (
                <span key={index} className="inline-block">
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Vi skaber digitale løsninger der ikke bare ser godt ud – de leverer målbare resultater.
            Fra apps der engagerer til hjemmesider der konverterer og automatisering der sparer tid.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Web Development', 'App Development', 'Digital Marketing', 'SEO', 'Automation'].map(
              (tag, index) => (
                <span
                  key={index}
                  className="bg-transparent border border-white/30 hover:bg-white/10 text-white/90 px-3 py-1 text-xs rounded-full transition-colors duration-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="pt-8 pb-16 text-center">
            <Link
              href="/prisberegner"
              className="inline-flex items-center justify-center bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl glass-hero"
            >
              Kom i gang i dag
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
            <div
              className="flex flex-col items-center text-white/40 cursor-pointer hover:text-white/60 transition-colors duration-300"
              onClick={handleScrollToServices}
            >
              <span className="text-xs md:text-sm font-medium mb-2">Scroll for mere</span>
              <svg
                className={`w-5 h-5 md:w-6 md:h-6 ${isClient ? 'animate-bounce' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-blue-100 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 border border-purple-100 rounded-full opacity-20" />
      </div>
    </section>
  );
};

export default Hero;
