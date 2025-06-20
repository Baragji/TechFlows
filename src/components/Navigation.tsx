'use client';

import { Icon } from '@/components/ui';
import { NavigationProps, NavItem } from '@/types/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

const Navigation: React.FC<NavigationProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Navigation items - memoized to prevent useEffect dependency issues
  const navItems: NavItem[] = useMemo(
    () => [
      { label: 'Forside', href: '/' },
      { label: 'Om os', href: '/about' },
    ],
    []
  );

  // Additional nav items - memoized to prevent useEffect dependency issues
  const additionalNavItems: NavItem[] = useMemo(
    () => [{ label: 'Portfolio', href: '/portfolio' }],
    []
  );

  // Handle scroll effect with improved threshold
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // eslint-disable-line no-restricted-globals
    };

    window.addEventListener('scroll', handleScroll, { passive: true }); // eslint-disable-line no-restricted-globals
    return () => window.removeEventListener('scroll', handleScroll); // eslint-disable-line no-restricted-globals
  }, []);

  // Update active indicator position
  useEffect(() => {
    if (!navRef.current) {
      return;
    }

    const allNavItems = [...navItems, ...additionalNavItems];
    const activeItem = allNavItems.find((item) => item.href === pathname);

    if (activeItem) {
      const activeElement = navRef.current.querySelector(
        `[data-nav-item="${activeItem.href}"]`
      ) as HTMLElement;
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        setActiveIndicator({
          width: rect.width,
          left: rect.left - navRect.left,
        });
      }
    }
  }, [pathname, navItems, additionalNavItems]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    if (!isMobileMenuOpen) {
      return;
    }

    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside); // eslint-disable-line no-restricted-globals
    return () => document.removeEventListener('click', handleClickOutside); // eslint-disable-line no-restricted-globals
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
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
        {/* Enhanced Navigation Container */}
        <div className="relative">
          {/* Professional White Glassmorphism Layer */}
          <motion.div
            className={`
              relative rounded-full transition-all duration-700 ease-out glass-nav
              ${isScrolled ? 'glass-nav-scrolled' : ''}
            `}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Enhanced backdrop texture for better blur visibility */}
            <div className="pointer-events-none absolute inset-0 rounded-full overflow-hidden opacity-40">
              <div className="absolute inset-0 bg-gradient-to-r from-white/[.08] via-gray-50/[.12] to-white/[.08] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            </div>

            {/* Enhanced Navigation Content */}
            <div
              className="relative flex items-center px-8 py-5 gap-10 glass-text-container"
              ref={navRef}
            >
              {/* Enhanced Logo */}
              <motion.div
                className="shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Link
                  href="/"
                  className="text-xl font-bold text-white hover:text-blue-100 transition-all duration-300 group"
                >
                  <span className="relative">
                    TechFlow
                    <span className="text-blue-200 ml-1 group-hover:text-blue-100 transition-colors duration-300">
                      Solutions
                    </span>
                  </span>
                </Link>
              </motion.div>

              {/* Enhanced Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2 relative">
                {/* Navigation Items */}
                {[...navItems, ...additionalNavItems].map((item) => (
                  <motion.div key={item.href} className="relative">
                    <Link
                      href={item.href}
                      data-nav-item={item.href}
                      className={`
                        nav-item relative z-10 text-sm font-medium transition-all duration-300
                        ${
                          pathname === item.href
                            ? 'text-white font-semibold'
                            : 'text-white/90 hover:text-white'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Active Indicator */}
                <motion.div
                  className="nav-indicator active"
                  animate={{
                    width: activeIndicator.width,
                    left: activeIndicator.left,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </div>

              {/* Enhanced Mobile Menu Button */}
              <motion.button
                className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/[.08] hover:bg-white/[.15] transition-all duration-300 backdrop-blur-sm border border-white/[.1]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name={isMobileMenuOpen ? 'close' : 'menu'} className="w-5 h-5 text-white" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[calc(var(--z-index-nav)-5)] lg:hidden"
          >
            {/* Enhanced Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(12px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
            />

            {/* Enhanced Mobile Menu Content */}
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1,
              }}
              className="relative top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md"
            >
              <div className="glass-dropdown rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                <div className="p-8 space-y-2">
                  {/* Enhanced Mobile nav items */}
                  {[...navItems, ...additionalNavItems].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`
                          block p-4 rounded-2xl transition-all duration-300 group
                          ${
                            pathname === item.href
                              ? 'bg-white/10 text-white font-semibold shadow-lg'
                              : 'text-white/90 hover:text-white hover:bg-white/5'
                          }
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center justify-between">
                          {item.label}
                          {pathname === item.href && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-blue-400 rounded-full"
                            />
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
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
