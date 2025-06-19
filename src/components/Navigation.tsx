'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationProps, NavItem, NavDropdown } from '@/types/navigation';
import { useNavbarScroll } from '@/hooks/useScrollAnimation';
import { Icon } from '@/components/ui';

const Navigation: React.FC<NavigationProps> = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isScrolled = useNavbarScroll(50);
  const pathname = usePathname();

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'Forside', href: '/' },
    { label: 'Om os', href: '/about' },
  ];

  // Services dropdown
  const servicesDropdown: NavDropdown = {
    label: 'Services',
    href: '/services',
    items: [
      {
        label: 'Webdesign',
        href: '/services/webdesign',
        description: 'Moderne og responsive websites',
        icon: 'palette'
      },
      {
        label: 'Webshop',
        href: '/services/webshop',
        description: 'E-commerce løsninger',
        icon: 'shopping-cart'
      },
      {
        label: 'SEO',
        href: '/services/seo',
        description: 'Søgemaskineoptimering',
        icon: 'search'
      },
      {
        label: 'Hosting',
        href: '/services/hosting',
        description: 'Pålidelig webhosting',
        icon: 'server'
      },
      {
        label: 'Vedligeholdelse',
        href: '/services/vedligeholdelse',
        description: 'Løbende support og opdateringer',
        icon: 'wrench'
      },
      {
        label: 'Branding',
        href: '/services/branding',
        description: 'Logo og visuel identitet',
        icon: 'star'
      }
    ]
  };

  // Additional nav items
  const additionalNavItems: NavItem[] = [
    { label: 'Portfolio', href: '/portfolio' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1440px] rounded-full backdrop-blur-[20px] border border-white/10 ${
        isScrolled 
          ? 'bg-black/70' 
          : 'bg-[rgba(35,35,40,0.85)]'
      }`}
      style={{ '--navbar-height': '72px' } as React.CSSProperties}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Navigation Group */}
        <motion.div 
          className="flex items-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Logo */}
          <motion.div 
            className="shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="text-lg font-semibold transition-all duration-300 text-white hover:text-accent-blue"
            >
              TechFlow
              <span className="text-accent-blue ml-1">Solutions</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Regular nav items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-normal transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-white/90 hover:text-white/70'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Mega Menu */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'services' ? null : 'services');
                }}
                className={`text-sm font-normal transition-all duration-300 flex items-center ${
                  activeDropdown === 'services'
                    ? 'text-white'
                    : 'text-white/90 hover:text-white/70'
                }`}
              >
                {servicesDropdown.label}
                <motion.div
                  animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-1"
                >
                  <Icon name="chevron-down" className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Services Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-[rgba(35,35,40,0.85)] backdrop-blur-[20px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {servicesDropdown.items.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-center p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="shrink-0 w-10 h-10 bg-accent-blue/10 rounded-lg flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors duration-300">
                                <Icon name={item.icon || 'globe'} className="w-5 h-5 text-accent-blue" />
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-white group-hover:text-accent-blue transition-colors duration-300">
                                  {item.label}
                                </div>
                                <div className="text-sm text-white/70 mt-1">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Additional nav items */}
            {additionalNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-normal transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-white/90 hover:text-white/70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right Navigation Group */}
        <motion.div 
          className="hidden lg:flex items-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Language Selector */}
          <div className="flex items-center gap-1 cursor-pointer pr-4 border-r border-white/20">
            <span className="text-sm">🌐</span>
            <span className="text-sm text-white/90">▾</span>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/prisberegner"
              className="text-sm font-medium text-white hover:text-white/70 transition-all duration-300"
            >
              Få et tilbud →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;