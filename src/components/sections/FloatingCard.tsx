'use client';
import Image from 'next/image'

interface FloatingCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  linkText: string;
  href: string;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({ title, subtitle, imageUrl, linkText, href }) => {
  return (
    <div className="fixed bottom-8 left-8 z-30">
      <div className="glass-hero rounded-[12px] p-3 flex items-center gap-4">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            width={64} 
            height={64} 
            className="w-16 h-16 rounded-lg object-cover"
            loading="lazy"
            sizes="64px"
          />
        ) : (
          <div className="w-16 h-16 bg-glass-light rounded-lg flex items-center justify-center">
            <span className="text-white/60 text-xs">📄</span>
          </div>
        )}
        <div>
          <p className="text-sm text-white/70">{subtitle}</p>
          <h3 className="font-semibold text-white">{title}</h3>
          <a href={href} className="text-sm text-accent-blue hover:underline">{linkText}</a>
        </div>
      </div>
    </div>
  );
};