import { LazyBlogGrid } from '@/components/lazy/LazyComponents';
import BlogHero from '@/components/sections/BlogHero';
import Newsletter from '@/components/sections/Newsletter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - TechFlow Solutions',
  description:
    'Læs vores seneste artikler om teknologi, webudvikling, digitalisering og innovation. Hold dig opdateret med de nyeste trends og best practices.',
  keywords: 'blog, teknologi, webudvikling, digitalisering, innovation, artikler',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <LazyBlogGrid />
      <Newsletter />
    </>
  );
}
