import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { FooterSection, ContactInfo } from '@/types/navigation';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  // Footer data configuration
  const footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { label: 'Hjemmesideudvikling', href: '/services/hjemmesider' },
        { label: 'Webshopudvikling', href: '/services/webshop' },
        { label: 'App-udvikling', href: '/services/apps' },
        { label: 'Automatisering', href: '/services/automatisering' },
      ],
    },
    {
      title: 'Links',
      links: [
        { label: 'Om os', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Prisberegner', href: '/prisberegner' },
        { label: 'Kontakt', href: '/#contact' },
      ],
    },
  ];

  const contactInfo: ContactInfo = {
    email: 'kontakt@techflowsolutions.dk',
    phone: '+45 12 34 56 78',
  };

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      {/* Footer */}
      <Footer
        sections={footerSections}
        contactInfo={contactInfo}
        companyName="TechFlow Solutions"
        tagline="Innovative teknologiløsninger der skaber værdi"
        year={new Date().getFullYear()}
      />
    </div>
  );
};

export default Layout;