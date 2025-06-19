'use client';
import { motion } from 'framer-motion';
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
    <motion.div
      className="fixed bottom-8 left-8 z-30"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
    >
      <div className="backdrop-blur-[20px] bg-white/10 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-[12px] p-3 flex items-center gap-4">
        <Image src={imageUrl} alt={title} width={800} height={600} className="w-16 h-16 rounded-lg object-cover" />
        <div>
          <p className="text-sm text-white/70">{subtitle}</p>
          <h3 className="font-semibold text-white">{title}</h3>
          <a href={href} className="text-sm text-accent-blue hover:underline">{linkText}</a>
        </div>
      </div>
    </motion.div>
  );
};