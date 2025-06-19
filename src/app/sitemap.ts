import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/data/blogPosts';
import { getUpcomingEvents } from '@/data/events';
import { caseStudies } from '@/data/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techflow.dk';
  
  // Use a fixed date for static pages to avoid hydration mismatches
  const staticLastModified = new Date('2024-01-01T00:00:00.000Z');
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: staticLastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: staticLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: staticLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticLastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: staticLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticLastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticLastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ];

  // Blog posts
  const blogPosts = getPublishedPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: staticLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Case studies
  const caseStudyPages = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: staticLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Events
  const eventPages = getUpcomingEvents().map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: staticLastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...blogPosts,
    ...caseStudyPages,
    ...eventPages,
  ];
}