#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 TechFlow Optimization Script Starting...\n');

// Color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function logSuccess(message) {
  console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

function logInfo(message) {
  console.log(`${colors.blue}ℹ️  ${message}${colors.reset}`);
}

function logWarning(message) {
  console.log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
}

// 1. Fix image optimization by replacing <img> with Next.js Image
function optimizeImages() {
  console.log(`${colors.bold}${colors.cyan}1. Optimizing images...${colors.reset}`);
  
  const srcPath = path.join(process.cwd(), 'src');
  const imgTagPattern = /<img([^>]*)>/g;
  let filesModified = 0;
  
  function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file already imports Image
    const hasImageImport = content.includes("from 'next/image'") || content.includes('from "next/image"');
    
    const newContent = content.replace(imgTagPattern, (match, attributes) => {
      modified = true;
      
      // Extract src and alt attributes
      const srcMatch = attributes.match(/src=["']([^"']+)["']/);
      const altMatch = attributes.match(/alt=["']([^"']+)["']/);
      const classMatch = attributes.match(/className=["']([^"']+)["']/);
      const widthMatch = attributes.match(/width=["']?(\d+)["']?/);
      const heightMatch = attributes.match(/height=["']?(\d+)["']?/);
      
      const src = srcMatch ? srcMatch[1] : '';
      const alt = altMatch ? altMatch[1] : '';
      const className = classMatch ? ` className="${classMatch[1]}"` : '';
      const width = widthMatch ? widthMatch[1] : '800';
      const height = heightMatch ? heightMatch[1] : '600';
      
      return `<Image src="${src}" alt="${alt}" width={${width}} height={${height}}${className} />`;
    });
    
    if (modified) {
      // Add Image import if not present
      let finalContent = newContent;
      if (!hasImageImport) {
        // Find the last import statement
        const importLines = finalContent.split('\n');
        let lastImportIndex = -1;
        
        for (let i = 0; i < importLines.length; i++) {
          if (importLines[i].trim().startsWith('import ')) {
            lastImportIndex = i;
          }
        }
        
        if (lastImportIndex >= 0) {
          importLines.splice(lastImportIndex + 1, 0, "import Image from 'next/image'");
          finalContent = importLines.join('\n');
        }
      }
      
      fs.writeFileSync(filePath, finalContent);
      filesModified++;
      logSuccess(`Optimized images in ${filePath.replace(process.cwd(), '.')}`);
    }
  }
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        scanDirectory(fullPath);
      } else if (file.name.endsWith('.tsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<img')) {
          processFile(fullPath);
        }
      }
    }
  }
  
  scanDirectory(srcPath);
  
  if (filesModified > 0) {
    logSuccess(`Optimized images in ${filesModified} files`);
  } else {
    logInfo('No image optimization needed');
  }
}

// 2. Create color consistency configuration
function createColorSystem() {
  console.log(`\n${colors.bold}${colors.cyan}2. Creating consistent color system...${colors.reset}`);
  
  const colorSystemPath = path.join(process.cwd(), 'src', 'styles', 'colors.ts');
  const stylesDir = path.join(process.cwd(), 'src', 'styles');
  
  // Create styles directory if it doesn't exist
  if (!fs.existsSync(stylesDir)) {
    fs.mkdirSync(stylesDir, { recursive: true });
  }
  
  const colorSystem = `// TechFlow Color System - Centralized color management
export const colors = {
  // Primary brand colors
  primary: {
    50: '#f8f8f8',
    100: '#f0f0f0',
    200: '#e4e4e4',
    300: '#d1d1d1',
    400: '#b4b4b4',
    500: '#9a9a9a',
    600: '#818181',
    700: '#6a6a6a',
    800: '#5a5a5a',
    900: '#4a4a4a',
    950: '#1a1a1a',
  },
  
  // Obsidian theme colors
  obsidian: {
    dark: '#0a0a0a',
    darker: 'rgb(20, 20, 25)',
    medium: 'rgb(35, 35, 40)',
    light: '#3a3a3a',
    lighter: '#4a4a4a',
    overlay: 'rgba(20, 20, 25, 0.7)',
    nav: 'rgba(35, 35, 40, 0.95)',
    navScrolled: 'rgba(35, 35, 40, 0.98)',
    navHover: 'rgba(30, 30, 35, 0.95)',
  },
  
  // Accent colors
  accent: {
    blue: '#3b82f6',
    green: '#10b981',
    purple: '#8b5cf6',
    orange: '#f59e0b',
    gold: '#f59e0b',
  },
  
  // Glass morphism colors
  glass: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    strong: 'rgba(255, 255, 255, 0.4)',
    dark: 'rgba(0, 0, 0, 0.1)',
    darker: 'rgba(0, 0, 0, 0.2)',
  },
  
  // Semantic colors
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Text colors
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    tertiary: 'rgba(255, 255, 255, 0.5)',
    inverse: '#1a1a1a',
  },
} as const;

// Color utility functions
export const getColorValue = (colorPath: string): string => {
  const keys = colorPath.split('.');
  let value: any = colors;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(\`Color path "\${colorPath}" not found\`);
      return '#000000';
    }
  }
  
  return value;
};

// Gradient utilities
export const gradients = {
  primary: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  success: 'linear-gradient(135deg, #10b981, #3b82f6)',
  warning: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
} as const;

export default colors;
`;
  
  fs.writeFileSync(colorSystemPath, colorSystem);
  logSuccess('Created centralized color system');
}

// 3. Add performance monitoring
function addPerformanceMonitoring() {
  console.log(`\n${colors.bold}${colors.cyan}3. Adding performance monitoring...${colors.reset}`);
  
  const performanceHookPath = path.join(process.cwd(), 'src', 'hooks', 'usePerformance.ts');
  const hooksDir = path.join(process.cwd(), 'src', 'hooks');
  
  // Create hooks directory if it doesn't exist
  if (!fs.existsSync(hooksDir)) {
    fs.mkdirSync(hooksDir, { recursive: true });
  }
  
  const performanceHook = `import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export const usePerformance = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      const metrics: PerformanceMetrics = {};
      
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input':
            metrics.fid = entry.processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + (entry as any).value;
            }
            break;
          case 'navigation':
            metrics.ttfb = (entry as PerformanceNavigationTiming).responseStart;
            break;
        }
      }
      
      // Log metrics (in production, send to analytics)
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }
      
      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production' && Object.keys(metrics).length > 0) {
        // Replace with your analytics service
        // analytics.track('performance_metrics', metrics);
      }
    });
    
    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
};

// Web Vitals helper
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Replace with your analytics service
    // analytics.track('web_vital', {
    //   name: metric.name,
    //   value: metric.value,
    //   id: metric.id,
    // });
  }
};
`;
  
  fs.writeFileSync(performanceHookPath, performanceHook);
  logSuccess('Added performance monitoring hook');
}

// 4. Create SEO optimization utilities
function createSEOUtils() {
  console.log(`\n${colors.bold}${colors.cyan}4. Creating SEO utilities...${colors.reset}`);
  
  const seoUtilsPath = path.join(process.cwd(), 'src', 'utils', 'seo.ts');
  const utilsDir = path.join(process.cwd(), 'src', 'utils');
  
  // Create utils directory if it doesn't exist
  if (!fs.existsSync(utilsDir)) {
    fs.mkdirSync(utilsDir, { recursive: true });
  }
  
  const seoUtils = `import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
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
    : \`\${title} | \${defaultConfig.siteName}\`;
  
  const fullUrl = url ? \`\${defaultConfig.siteUrl}\${url}\` : defaultConfig.siteUrl;
  const fullImage = image.startsWith('http') ? image : \`\${defaultConfig.siteUrl}\${image}\`;

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
    logo: \`\${defaultConfig.siteUrl}/images/logo.png\`,
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
      target: \`\${defaultConfig.siteUrl}/search?q={search_term_string}\`,
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
      item: \`\${defaultConfig.siteUrl}\${item.url}\`,
    })),
  };
}
`;
  
  fs.writeFileSync(seoUtilsPath, seoUtils);
  logSuccess('Created SEO utilities');
}

// 5. Update package.json scripts
function updatePackageScripts() {
  console.log(`\n${colors.bold}${colors.cyan}5. Updating package.json scripts...${colors.reset}`);
  
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Add optimization scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    'health-check': 'node scripts/health-check.js',
    'optimize': 'node scripts/optimize.js',
    'type-check': 'tsc --noEmit',
    'format': 'prettier --write "src/**/*.{ts,tsx,js,jsx,json,css,md}"',
    'format:check': 'prettier --check "src/**/*.{ts,tsx,js,jsx,json,css,md}"',
    'build:analyze': 'ANALYZE=true npm run build',
    'test:lighthouse': 'npm run build && npm start & sleep 5 && npm run lighthouse && kill %1',
    'precommit': 'npm run type-check && npm run lint && npm run format:check',
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  logSuccess('Updated package.json scripts');
}

// Run all optimizations
async function runOptimizations() {
  try {
    optimizeImages();
    createColorSystem();
    addPerformanceMonitoring();
    createSEOUtils();
    updatePackageScripts();
    
    console.log(`\n${colors.bold}${colors.green}🎉 Optimization complete!${colors.reset}`);
    console.log(`\n${colors.cyan}Next steps:${colors.reset}`);
    console.log(`1. Run ${colors.yellow}npm run health-check${colors.reset} to verify improvements`);
    console.log(`2. Run ${colors.yellow}npm run build${colors.reset} to test the build`);
    console.log(`3. Run ${colors.yellow}npm run build:analyze${colors.reset} to analyze bundle size`);
    console.log(`4. Run ${colors.yellow}npm run type-check${colors.reset} to verify TypeScript`);
    
  } catch (error) {
    console.error(`${colors.red}❌ Optimization failed:${colors.reset}`, error);
    process.exit(1);
  }
}

runOptimizations();