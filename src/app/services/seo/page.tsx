import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'SEO & Digital Marketing | TechFlow Solutions',
  description: 'Professionel SEO og digital marketing for at øge din online synlighed.',
};

// SEO service redirects to digital strategy for now
export default function SEOPage() {
  redirect('/services/digital-strategi');
}
