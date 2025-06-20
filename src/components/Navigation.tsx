'use client';

import { Icon } from '@/components/ui';
import { NavDropdown, NavigationProps, NavItem } from '@/types/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navigation: React.FC<NavigationProps> = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        icon: 'palette',
      },
      {
        label: 'Webshop',
        href: '/services/webshop',
        description: 'E-commerce løsninger',
        icon: 'shopping-cart',
      },
      {
        label: 'SEO',
        href: '/services/seo',
        description: 'Søgemaskineoptimering',
        icon: 'search',
      },
      {
        label: 'Hosting',
        href: '/services/hosting',
        description: 'Pålidelig webhosting',
        icon: 'server',
      },
      {
        label: 'Vedligeholdelse',
        href: '/services/vedligeholdelse',
        description: 'Løbende support og opdateringer',
        icon: 'wrench',
      },
      {
        label: 'Branding',
        href: '/services/branding',
        description: 'Logo og visuel identitet',
        icon: 'star',
      },
    ],
  };

  // Additional nav items
  const additionalNavItems: NavItem[] = [{ label: 'Portfolio', href: '/portfolio' }];

  // Handle scroll effect
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // eslint-disable-line no-restricted-globals
    };

    window.addEventListener('scroll', handleScroll); // eslint-disable-line no-restricted-globals
    return () => window.removeEventListener('scroll', handleScroll); // eslint-disable-line no-restricted-globals
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    if (!activeDropdown && !isMobileMenuOpen) {
      return;
    }

    const handleClickOutside = () => {
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside); // eslint-disable-line no-restricted-globals
    return () => document.removeEventListener('click', handleClickOutside); // eslint-disable-line no-restricted-globals
  }, [activeDropdown, isMobileMenuOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown); // eslint-disable-line no-restricted-globals
    return () => document.removeEventListener('keydown', handleKeyDown); // eslint-disable-line no-restricted-globals
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[var(--z-index-nav)] transition-all duration-500 ease-out ${
          isScrolled ? 'top-4' : 'top-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        aria-label="Hovednavigation"
      >
        {/* Glassmorphism Container */}
        <motion.div
          className={`
            relative overflow-visible rounded-full glass-nav
            transition-all duration-500 ease-out
            ${isScrolled ? 'shadow-2xl shadow-black/[.3]' : 'shadow-xl shadow-black/[.2]'}
          `}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background gradient - Wrapped to fix WebKit clipping bug */}
          <div className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[.05] via-purple-500/[.05] to-blue-500/[.05] animate-pulse opacity-[.5]" />
          </div>

          {/* Navigation Content */}
          <div className="relative flex items-center px-8 py-4 gap-8 glass-text-container">
            {/* Logo */}
            <motion.div
              className="shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="text-xl font-bold text-white hover:text-blue-200 transition-all duration-300"
              >
                TechFlow
                <span className="text-blue-300 ml-1">Solutions</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Regular nav items */}
              {navItems.map((item) => (
                <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={item.href}
                    className={`
                      text-sm font-medium transition-all duration-300 relative
                      ${
                        pathname === item.href
                          ? 'text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:rounded-full'
                          : 'text-white/[.9] hover:text-white hover:scale-105'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Services Dropdown */}
              <div className="relative z-30">
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDropdown(activeDropdown === 'services' ? null : 'services');
                  }}
                  className={`
                    text-sm font-medium transition-all duration-300 flex items-center gap-2
                    ${
                      activeDropdown === 'services'
                        ? 'text-white scale-105'
                        : 'text-white/[.9] hover:text-white hover:scale-105'
                    }
                  `}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {servicesDropdown.label}
                  <motion.div
                    animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon name="chevron-down" className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Services Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-96 z-[var(--z-index-dropdown)]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="glass-dropdown rounded-3xl shadow-2xl shadow-black/[.5] overflow-hidden">
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-3">
                            {servicesDropdown.items.map((item, index) => (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/[.1] hover:scale-105 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/[.2] to-purple-400/[.2] flex items-center justify-center group-hover:from-blue-400/[.3] group-hover:to-purple-400/[.3] transition-all duration-300">
                                    <Icon
                                      name={item.icon || 'star'}
                                      className="w-5 h-5 text-blue-300"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-white font-medium text-sm group-hover:text-blue-200 transition-colors duration-300">
                                      {item.label}
                                    </h3>
                                    <p className="text-white/[.6] text-xs mt-1 group-hover:text-white/[.8] transition-colors duration-300">
                                      {item.description}
                                    </p>
                                  </div>
                                  <Icon
                                    name="arrow-right"
                                    className="w-4 h-4 text-white/[.4] group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300"
                                  />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Additional nav items */}
              {additionalNavItems.map((item) => (
                <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={item.href}
                    className={`
                      text-sm font-medium transition-all duration-300 relative
                      ${
                        pathname === item.href
                          ? 'text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:rounded-full'
                          : 'text-white/[.9] hover:text-white hover:scale-105'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/[.1] hover:bg-white/[.2] transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[calc(var(--z-index-nav)-5)] lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/[.5] backdrop-blur-xs" />

            {/* Mobile Menu Content */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md"
            >
              <div className="glass-dropdown rounded-3xl shadow-2xl shadow-black/[.5] overflow-hidden">
                <div className="p-6 space-y-4">
                  {/* Mobile nav items */}
                  {[...navItems, ...additionalNavItems].map((item) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`
                          block p-4 rounded-2xl transition-all duration-300 hover:bg-white/[.1]
                          ${pathname === item.href ? 'bg-white/[.1] text-white' : 'text-white/[.9] hover:text-white'}
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Services */}
                  <div className="border-t border-white/[.1] pt-4">
                    <h3 className="text-white font-medium mb-3 px-4">Services</h3>
                    {servicesDropdown.items.map((item) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 p-3 ml-2 rounded-xl transition-all duration-300 hover:bg-white/[.1]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Icon name={item.icon || 'star'} className="w-4 h-4 text-blue-300" />
                          <span className="text-white/[.9] text-sm">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
