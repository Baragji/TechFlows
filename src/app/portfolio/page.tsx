import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Portfolio | TechFlow Solutions',
  description: 'Se vores portfolio af digitale løsninger og succesfulde projekter.',
};

// Portfolio page redirects to case studies for now
export default function PortfolioPage() {
  redirect('/case-studies');
}
