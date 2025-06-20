'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { BlogPost, blogCategories, getPublishedPosts } from '@/data/blogPosts';
import StructuredData from '@/components/seo/StructuredData';
import Image from 'next/image';

interface BlogPostDetailProps {
  post: BlogPost;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const categoryInfo = blogCategories.find((cat) => cat.name === post.category);
  const relatedPosts = getPublishedPosts()
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else if (typeof window !== 'undefined') {
      // Fallback for browsers that don't support native sharing
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  const articleData = {
    headline: post.title,
    image: post.image,
    author: post.author,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
  };

  return (
    <article className="min-h-screen bg-linear-to-br from-background via-background to-glass-dark">
      <StructuredData type="Article" data={articleData} />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/events/default-event.svg"
            alt="Event billede"
            width={800}
            height={600}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Tilbage til blog
            </Link>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-glass-light backdrop-blur-xs ${categoryInfo?.color || 'text-white'}`}
            >
              <span className="mr-2">{categoryInfo?.icon}</span>
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/80 mb-8 max-w-3xl leading-relaxed"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-white/70 mb-8"
          >
            <div className="flex items-center space-x-2">
              <UserIcon className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-5 h-5" />
              <span>{post.readTime} læsning</span>
            </div>
            <motion.button
              onClick={handleShare}
              className="flex items-center space-x-2 bg-glass-light backdrop-blur-xs px-4 py-2 rounded-xl hover:bg-glass-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShareIcon className="w-5 h-5" />
              <span>Del</span>
            </motion.button>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-glass-medium backdrop-blur-xs text-white/70"
              >
                <TagIcon className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <div
                className="blog-content text-white/90 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/\n/g, '<br />')
                    .replace(/#{1,6} /g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">')
                    .replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-white font-semibold">$1</strong>'
                    ),
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-glass-dark/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Relaterede Artikler
              </h2>
              <p className="text-white/70 text-lg">
                Udforsk flere artikler inden for {post.category}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-glass-light backdrop-blur-xs rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative">
                      <Image
                        src="/images/events/default-event.svg"
                        alt="Event billede"
                        width={800}
                        height={600}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium bg-glass-dark/80 backdrop-blur-xs ${categoryInfo?.color || 'text-white'}`}
                        >
                          <span className="mr-2">{categoryInfo?.icon}</span>
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                        {relatedPost.title}
                      </h3>

                      <p className="text-white/70 mb-4 leading-relaxed">{relatedPost.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-white/60">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-glass-light backdrop-blur-xs rounded-2xl p-12 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Har du spørgsmål eller brug for hjælp?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Vores team af eksperter er klar til at hjælpe dig med at implementere de løsninger, vi
              har beskrevet i denne artikel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-linear-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kontakt os
              </motion.a>
              <motion.a
                href="/blog"
                className="px-8 py-4 bg-glass-medium backdrop-blur-xs border border-white/20 text-white font-semibold rounded-xl hover:bg-glass-light transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Læs flere artikler
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};

export default BlogPostDetail;
