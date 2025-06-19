import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const defaultConfig = {
  siteName: 'TechFlow Solutions',
  siteUrl: 'https://techflowsolutions.dk',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@techflowdk',
  locale: 'da_DK',
  type: 'website' as const,
};

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    image = defaultConfig.defaultImage,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
  } = config;

  const fullTitle = title.includes(defaultConfig.siteName) 
    ? title 
    : `${title} | ${defaultConfig.siteName}`;
  
  const fullUrl = url ? `${defaultConfig.siteUrl}${url}` : defaultConfig.siteUrl;
  const fullImage = image.startsWith('http') ? image : `${defaultConfig.siteUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultConfig.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: defaultConfig.locale,
      type,
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
      tags,
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: defaultConfig.twitterHandle,
      site: defaultConfig.twitterHandle,
    },
    
    // Additional meta tags
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
    
    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },
  };
}

// JSON-LD structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: defaultConfig.siteName,
    url: defaultConfig.siteUrl,
    logo: `${defaultConfig.siteUrl}/images/logo.png`,
    description: 'Professionel webudvikling og digitale løsninger',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+45-12-34-56-78',
      contactType: 'customer service',
      email: 'info@techflowsolutions.dk',
    },
    sameAs: [
      'https://linkedin.com/company/techflow-solutions',
      'https://github.com/techflow-solutions',
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: defaultConfig.siteName,
    url: defaultConfig.siteUrl,
    description: 'Professionel webudvikling og digitale løsninger',
    publisher: {
      '@type': 'Organization',
      name: defaultConfig.siteName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${defaultConfig.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${defaultConfig.siteUrl}${item.url}`,
    })),
  };
}
