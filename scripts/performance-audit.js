#!/usr/bin/env node

/**
 * Performance Audit Script
 * Analyzes the codebase for performance issues and optimization opportunities
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 TechFlow Performance Audit Starting...\n');

// 1. Analyze Image Usage
function analyzeImages() {
  console.log('📸 IMAGE ANALYSIS:');
  
  const imageUsage = [];
  const srcDir = path.join(__dirname, '../src');
  
  function scanForImages(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanForImages(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Find image references
        const imageMatches = content.match(/src=["']([^"']*\.(jpg|jpeg|png|gif|webp|svg))["']/gi);
        if (imageMatches) {
          imageMatches.forEach(match => {
            const src = match.match(/src=["']([^"']*)["']/)[1];
            imageUsage.push({
              file: filePath.replace(srcDir, ''),
              src: src,
              isPlaceholder: src.includes('placeholder'),
              isOptimized: src.includes('.webp') || src.includes('next/image')
            });
          });
        }
      }
    });
  }
  
  scanForImages(srcDir);
  
  console.log(`   Total images found: ${imageUsage.length}`);
  console.log(`   Placeholder images: ${imageUsage.filter(img => img.isPlaceholder).length}`);
  console.log(`   Optimized images: ${imageUsage.filter(img => img.isOptimized).length}`);
  console.log(`   Needs optimization: ${imageUsage.filter(img => !img.isOptimized && !img.isPlaceholder).length}\n`);
  
  return imageUsage;
}

// 2. Analyze Bundle Size
function analyzeBundleSize() {
  console.log('📦 BUNDLE SIZE ANALYSIS:');
  
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  const dependencies = Object.keys(packageJson.dependencies || {});
  const devDependencies = Object.keys(packageJson.devDependencies || {});
  
  console.log(`   Dependencies: ${dependencies.length}`);
  console.log(`   Dev Dependencies: ${devDependencies.length}`);
  
  // Check for heavy dependencies
  const heavyDeps = dependencies.filter(dep => 
    ['lodash', 'moment', 'jquery', 'bootstrap'].includes(dep)
  );
  
  if (heavyDeps.length > 0) {
    console.log(`   ⚠️  Heavy dependencies found: ${heavyDeps.join(', ')}`);
  } else {
    console.log(`   ✅ No obviously heavy dependencies detected`);
  }
  
  console.log('');
}

// 3. Analyze Component Structure
function analyzeComponents() {
  console.log('🧩 COMPONENT ANALYSIS:');
  
  const componentsDir = path.join(__dirname, '../src/components');
  let totalComponents = 0;
  let lazyLoadedComponents = 0;
  
  function scanComponents(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanComponents(filePath);
      } else if (file.endsWith('.tsx')) {
        totalComponents++;
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('lazy(') || content.includes('dynamic(')) {
          lazyLoadedComponents++;
        }
      }
    });
  }
  
  scanComponents(componentsDir);
  
  console.log(`   Total components: ${totalComponents}`);
  console.log(`   Lazy loaded: ${lazyLoadedComponents}`);
  console.log(`   Could be lazy loaded: ${totalComponents - lazyLoadedComponents}\n`);
}

// 4. Analyze SEO Implementation
function analyzeSEO() {
  console.log('🔍 SEO ANALYSIS:');
  
  const appDir = path.join(__dirname, '../src/app');
  let pagesWithMetadata = 0;
  let totalPages = 0;
  
  function scanPages(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanPages(filePath);
      } else if (file === 'page.tsx') {
        totalPages++;
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('export const metadata') || content.includes('generateMetadata')) {
          pagesWithMetadata++;
        }
      }
    });
  }
  
  scanPages(appDir);
  
  console.log(`   Total pages: ${totalPages}`);
  console.log(`   Pages with metadata: ${pagesWithMetadata}`);
  console.log(`   Missing metadata: ${totalPages - pagesWithMetadata}\n`);
}

// 5. Performance Recommendations
function generateRecommendations(imageUsage) {
  console.log('💡 PERFORMANCE RECOMMENDATIONS:\n');
  
  console.log('🖼️  IMAGE OPTIMIZATION:');
  if (imageUsage.filter(img => !img.isOptimized && !img.isPlaceholder).length > 0) {
    console.log('   ❌ Replace <img> tags with Next.js Image component');
    console.log('   ❌ Convert images to WebP format');
    console.log('   ❌ Implement lazy loading for images');
  } else {
    console.log('   ✅ Images are well optimized');
  }
  
  console.log('\n📦 BUNDLE OPTIMIZATION:');
  console.log('   ✅ Implement code splitting for routes');
  console.log('   ✅ Use dynamic imports for heavy components');
  console.log('   ✅ Tree shake unused dependencies');
  
  console.log('\n⚡ PERFORMANCE OPTIMIZATIONS:');
  console.log('   ✅ Implement service worker for caching');
  console.log('   ✅ Add preload hints for critical resources');
  console.log('   ✅ Optimize font loading with font-display: swap');
  
  console.log('\n🔍 SEO OPTIMIZATIONS:');
  console.log('   ✅ Add structured data (JSON-LD)');
  console.log('   ✅ Generate XML sitemap');
  console.log('   ✅ Implement robots.txt');
  console.log('   ✅ Add Open Graph images');
}

// Run audit
async function runAudit() {
  const imageUsage = analyzeImages();
  analyzeBundleSize();
  analyzeComponents();
  analyzeSEO();
  generateRecommendations(imageUsage);
  
  console.log('🎯 Audit completed! Check recommendations above.\n');
}

runAudit().catch(console.error);