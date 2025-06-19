import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import FooterEnhanced from './FooterEnhanced';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="grow pt-[var(--navbar-height)]">{children}</main>

      {/* Enhanced Footer */}
      <FooterEnhanced />
    </div>
  );
};

export default Layout;
