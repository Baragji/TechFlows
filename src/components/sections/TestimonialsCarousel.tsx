'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Lars Nielsen',
    position: 'CEO',
    company: 'Nielsen & Co',
    content: 'TechFlow Solutions leverede en fantastisk hjemmeside der overgik alle vores forventninger. Deres professionelle tilgang og tekniske ekspertise er i verdensklasse.',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: '2',
    name: 'Maria Andersen',
    position: 'Marketing Director',
    company: 'Andersen Group',
    content: 'Vores webshop har øget salget med 250% siden TechFlow implementerede deres e-commerce løsning. Utroligt professionelt arbejde!',
    rating: 5,
    image: '/api/placeholder/80/80',
  },
  {
    id: '3',
    name: 'Thomas Olsen',
    position: 'Founder',
    company: 'StartupDK',
    content: 'Den app TechFlow udviklede har revolutioneret vores business. Kvaliteten og leveringstiden var fantastisk.',
    rating: 5,
    image: '/api/placeholder/80/80',
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-20 bg-glass-dark/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hvad Vores Klienter Siger
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Læs hvad vores tilfredse klienter siger om deres oplevelse med TechFlow Solutions
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="bg-glass-light backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-6 h-6 text-accent-gold" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl text-white/90 mb-8 leading-relaxed italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-glass-medium rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="text-white font-semibold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-white/70">
                          {testimonial.position}
                        </div>
                        <div className="text-accent-blue font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-glass-light backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-glass-medium transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-glass-light backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-glass-medium transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent-blue scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 mb-6">
            Vil du også opnå fantastiske resultater?
          </p>
          <motion.a
            href="/testimonials"
            className="inline-flex items-center px-8 py-4 bg-glass-light backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-glass-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Se Alle Testimonials
            <motion.svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;