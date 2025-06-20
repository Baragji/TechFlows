import React, { ReactNode } from 'react';
import FooterEnhanced from './FooterEnhanced';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col bg-obsidian-dark ${className}`}>
      {/* Navigation */}
      <Navigation />

      {/* Main Content - Fjernet main tag, da det skal være i individuelle sider */}
      <div className="grow bg-obsidian-dark">{children}</div>

      {/* Enhanced Footer */}
      <FooterEnhanced />
    </div>
  );
};

export default Layout;
