'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationProps, NavItem, NavDropdown } from '@/types/navigation';
import { useNavbarScroll } from '@/hooks/useScrollAnimation';

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll(50);
  const pathname = usePathname();

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'Forside', href: '/' },
    { label: 'Om os', href: '/about' },
  ];

  const servicesDropdown: NavDropdown = {
    label: 'Services',
    href: '/#services',
    items: [
      { label: 'Hjemmesideudvikling', href: '/services/hjemmesider' },
      { label: 'Webshopudvikling', href: '/services/webshop' },
      { label: 'App-udvikling', href: '/services/apps' },
      { label: 'Automatisering', href: '/services/automatisering' },
    ],
  };

  const additionalNavItems: NavItem[] = [
    { label: 'Udtalelser', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/#contact' },
  ];

  // Handle escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-custom' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-primary hover:text-accent transition-colors"
            >
              TechFlow Solutions
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Regular nav items */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-accent bg-accent/10'
                      : 'text-text-dark hover:text-accent hover:bg-background-light'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <Link
                  href={servicesDropdown.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-text-dark hover:text-accent hover:bg-background-light transition-colors flex items-center"
                >
                  {servicesDropdown.label}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {servicesDropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-text-dark hover:bg-background-light hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional nav items */}
              {additionalNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-accent bg-accent/10'
                      : 'text-text-dark hover:text-accent hover:bg-background-light'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/prisberegner"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-accent hover:bg-hover transition-colors"
              >
                Prisberegner
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-dark hover:text-accent hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="hamburger">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-custom">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                pathname === item.href
                  ? 'text-accent bg-accent/10'
                  : 'text-text-dark hover:text-accent hover:bg-background-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Services */}
          <div className="px-3 py-2">
            <div className="text-base font-medium text-text-dark mb-2">
              {servicesDropdown.label}
            </div>
            <div className="pl-4 space-y-1">
              {servicesDropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-sm text-text-light hover:text-accent hover:bg-background-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {additionalNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                pathname === item.href
                  ? 'text-accent bg-accent/10'
                  : 'text-text-dark hover:text-accent hover:bg-background-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/prisberegner"
            className="block mx-3 mt-4 px-4 py-2 rounded-md text-center text-base font-medium text-white bg-accent hover:bg-hover transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Prisberegner
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
