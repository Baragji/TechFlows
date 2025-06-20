'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const FooterEnhanced: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmail('');
    setIsSubmitting(false);
    // Here you would typically send to your newsletter service
  };

  const footerLinks = {
    services: [
      { name: 'Hjemmeside Udvikling', href: '/services/hjemmesider' },
      { name: 'E-commerce Løsninger', href: '/services/webshop' },
      { name: 'App Udvikling', href: '/services/apps' },
      { name: 'Automatisering', href: '/services/automatisering' },
      { name: 'Digital Strategi', href: '/services/digital-strategi' },
      { name: 'Analytics & Tracking', href: '/services/analytics' },
    ],
    company: [
      { name: 'Om Os', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Kontakt', href: '/contact' },
      { name: 'Prisberegner', href: '/prisberegner' },
    ],
    legal: [
      { name: 'Privatlivspolitik', href: '/privacy' },
      { name: 'Handelsbetingelser', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
    social: [
      { name: 'LinkedIn', href: '#', icon: '🔗' },
      { name: 'Twitter', href: '#', icon: '🐦' },
      { name: 'Facebook', href: '#', icon: '📘' },
      { name: 'Instagram', href: '#', icon: '📸' },
    ],
  };

  return (
    <footer className="bg-glass-dark/50 backdrop-blur-xs border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">TechFlow Solutions</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Vi skaber digitale løsninger der driver vækst og innovation. Fra idé til
                implementering leverer vi resultater der overgår forventninger.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Hold dig opdateret</h4>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Din email adresse"
                      className="w-full px-4 py-3 bg-glass-light border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent-blue transition-colors"
                      required
                    />
                    <EnvelopeIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Tilmelder...' : 'Tilmeld Nyhedsbrev'}
                  </motion.button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <EnvelopeIcon className="w-5 h-5 text-accent-blue" />
                  <a href="mailto:info@techflow.dk" className="hover:text-white transition-colors">
                    info@techflow.dk
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <PhoneIcon className="w-5 h-5 text-accent-green" />
                  <a href="tel:+4512345678" className="hover:text-white transition-colors">
                    +45 12 34 56 78
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPinIcon className="w-5 h-5 text-accent-purple" />
                  <span>København, Danmark</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Tjenester</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                    >
                      {link.name}
                      <ArrowRightIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Virksomhed</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                    >
                      {link.name}
                      <ArrowRightIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal & Social */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Juridisk</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                    >
                      {link.name}
                      <ArrowRightIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <h4 className="text-lg font-semibold text-white mb-4">Følg Os</h4>
              <div className="flex space-x-3">
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-glass-light border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-glass-medium hover:border-accent-blue transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-white/70 text-sm">
                © 2024 TechFlow Solutions. Alle rettigheder forbeholdes.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-white/70">
                  <ShieldCheckIcon className="w-4 h-4 text-accent-green" />
                  <span className="text-xs">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <GlobeAltIcon className="w-4 h-4 text-accent-blue" />
                  <span className="text-xs">Dansk Virksomhed</span>
                </div>
              </div>
            </div>

            <div className="text-white/70 text-sm">CVR: 12345678</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEnhanced;
