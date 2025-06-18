'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Fremtiden for Webudvikling: Trends i 2024',
    excerpt:
      'Udforsk de seneste trends inden for webudvikling, fra AI-integration til progressive web apps og hvad det betyder for din virksomhed.',
    author: 'Yousef Beshara',
    date: '15. marts 2024',
    readTime: '5 min',
    category: 'Webudvikling',
    image: '/api/placeholder/400/250',
  },
  {
    id: '2',
    title: 'Sådan Optimerer du din Hjemmeside for Søgemaskiner',
    excerpt:
      'En komplet guide til SEO-optimering af din hjemmeside. Lær de vigtigste teknikker til at forbedre din synlighed på Google.',
    author: 'Tech Specialist',
    date: '10. marts 2024',
    readTime: '8 min',
    category: 'SEO',
    image: '/api/placeholder/400/250',
  },
  {
    id: '3',
    title: 'Automatisering af Forretningsprocesser',
    excerpt:
      'Discover hvordan automatisering kan spare tid og ressourcer i din virksomhed. Fra simple workflows til komplekse systemer.',
    author: 'Yousef Beshara',
    date: '5. marts 2024',
    readTime: '6 min',
    category: 'Automatisering',
    image: '/api/placeholder/400/250',
  },
  {
    id: '4',
    title: 'Cybersikkerhed for Små Virksomheder',
    excerpt:
      'Beskyt din virksomhed mod cybertrusler med disse praktiske tips og best practices for små og mellemstore virksomheder.',
    author: 'Tech Specialist',
    date: '28. februar 2024',
    readTime: '7 min',
    category: 'Sikkerhed',
    image: '/api/placeholder/400/250',
  },
  {
    id: '5',
    title: 'Bæredygtig Webudvikling',
    excerpt:
      'Lær hvordan du kan udvikle miljøvenlige websites der både performer godt og reducerer dit CO2-aftryk.',
    author: 'Yousef Beshara',
    date: '20. februar 2024',
    readTime: '4 min',
    category: 'Bæredygtighed',
    image: '/api/placeholder/400/250',
  },
  {
    id: '6',
    title: 'Data-Drevet Beslutningstagning',
    excerpt:
      'Hvordan du bruger data analytics til at træffe bedre forretningsbeslutninger og optimere din digitale strategi.',
    author: 'Tech Specialist',
    date: '15. februar 2024',
    readTime: '9 min',
    category: 'Analytics',
    image: '/api/placeholder/400/250',
  },
];

const categories = [
  'Alle',
  'Webudvikling',
  'SEO',
  'Automatisering',
  'Sikkerhed',
  'Bæredygtighed',
  'Analytics',
];

export default function BlogGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Seneste Artikler</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Udforsk vores samling af artikler om teknologi, innovation og digitale løsninger
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <UserIcon className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                  >
                    Læs mere
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
            Indlæs flere artikler
          </button>
        </motion.div>
      </div>
    </section>
  );
}
