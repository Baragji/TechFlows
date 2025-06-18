'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, UserIcon, TagIcon, FunnelIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { getPublishedPosts, blogCategories, BlogPost } from '@/data/blogPosts';

const BlogGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const allPosts = getPublishedPosts();
  
  // Filter posts based on category and search
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-glass-dark/20">
      <div className="container mx-auto px-4">
        {/* Filter Controls */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Søg i artikler..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-glass-light border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent-blue transition-colors"
              />
              <TagIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white'
                  : 'bg-glass-light text-white/70 hover:text-white hover:bg-glass-medium'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FunnelIcon className="w-4 h-4 inline-block mr-2" />
              Alle
            </motion.button>
            
            {blogCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white'
                    : 'bg-glass-light text-white/70 hover:text-white hover:bg-glass-medium'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70">
            Viser {filteredPosts.length} artikel{filteredPosts.length !== 1 ? 'r' : ''}
            {selectedCategory !== 'all' && ` i kategorien "${selectedCategory}"`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-glass-light rounded-full flex items-center justify-center mx-auto mb-6">
              <TagIcon className="w-12 h-12 text-white/50" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ingen artikler fundet
            </h3>
            <p className="text-white/70 mb-8">
              Prøv at justere dine søgekriterier eller vælg en anden kategori.
            </p>
            <motion.button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ryd filtre
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Blog Post Card Component
interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  const categoryInfo = blogCategories.find(cat => cat.name === post.category);
  
  return (
    <motion.article
      className="bg-glass-light backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-glass-dark/80 backdrop-blur-sm ${categoryInfo?.color || 'text-white'}`}>
              <span className="mr-2">{categoryInfo?.icon}</span>
              {post.category}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-accent-gold to-accent-orange text-white">
                ⭐ Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          {/* Meta Information */}
          <div className="flex items-center space-x-4 text-sm text-white/70 mb-4">
            <div className="flex items-center space-x-1">
              <CalendarIcon className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <UserIcon className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/70 mb-4 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-xs bg-glass-medium rounded-md text-white/60"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="flex items-center text-accent-blue font-medium group-hover:text-accent-purple transition-colors duration-300">
            Læs mere
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogGrid;
