#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 TechFlow Next.js Health Check Starting...\n');

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

const issues = [];
const warnings = [];
const successes = [];

function logError(message) {
  console.log(`${colors.red}❌ ${message}${colors.reset}`);
  issues.push(message);
}

function logWarning(message) {
  console.log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
  warnings.push(message);
}

function logSuccess(message) {
  console.log(`${colors.green}✅ ${message}${colors.reset}`);
  successes.push(message);
}

function logInfo(message) {
  console.log(`${colors.blue}ℹ️  ${message}${colors.reset}`);
}

// 1. Check for missing pages
function checkMissingPages() {
  console.log(`${colors.bold}${colors.cyan}1. Checking for missing pages...${colors.reset}`);
  
  const srcPath = path.join(process.cwd(), 'src');
  const appPath = path.join(srcPath, 'app');
  
  // Find all href links in components
  const hrefPattern = /href=["']([^"']+)["']/g;
  const linkedPages = new Set();
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        scanDirectory(fullPath);
      } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        let match;
        
        while ((match = hrefPattern.exec(content)) !== null) {
          const href = match[1];
          if (href.startsWith('/') && !href.startsWith('/#') && !href.includes('mailto:') && !href.includes('tel:')) {
            linkedPages.add(href);
          }
        }
      }
    }
  }
  
  scanDirectory(srcPath);
  
  // Check if pages exist
  for (const page of linkedPages) {
    const pagePath = page === '/' ? path.join(appPath, 'page.tsx') : path.join(appPath, page.slice(1), 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      logError(`Missing page: ${page} (expected at ${pagePath})`);
    } else {
      logSuccess(`Page exists: ${page}`);
    }
  }
}

// 2. Check for image optimization issues
function checkImageOptimization() {
  console.log(`\n${colors.bold}${colors.cyan}2. Checking image optimization...${colors.reset}`);
  
  const srcPath = path.join(process.cwd(), 'src');
  const imgTagPattern = /<img[^>]*>/g;
  let imgTagCount = 0;
  
  function scanForImgTags(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        scanForImgTags(fullPath);
      } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const matches = content.match(imgTagPattern);
        
        if (matches) {
          imgTagCount += matches.length;
          logWarning(`Found ${matches.length} <img> tags in ${fullPath.replace(process.cwd(), '.')}`);
        }
      }
    }
  }
  
  scanForImgTags(srcPath);
  
  if (imgTagCount > 0) {
    logError(`Found ${imgTagCount} unoptimized <img> tags. Use Next.js Image component instead.`);
  } else {
    logSuccess('No unoptimized <img> tags found');
  }
}

// 3. Check CSS consistency
function checkCSSConsistency() {
  console.log(`\n${colors.bold}${colors.cyan}3. Checking CSS consistency...${colors.reset}`);
  
  const globalsCssPath = path.join(process.cwd(), 'src', 'app', 'globals.css');
  const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.ts');
  
  if (fs.existsSync(globalsCssPath)) {
    const globalsContent = fs.readFileSync(globalsCssPath, 'utf8');
    
    // Check for CSS custom properties
    const customProps = globalsContent.match(/--[\w-]+:/g) || [];
    logInfo(`Found ${customProps.length} CSS custom properties`);
    
    // Check for potential CSS issues
    const invalidCssPattern = /\bor\s*:/g;
    if (invalidCssPattern.test(globalsContent)) {
      logError('Found invalid CSS property "or" in globals.css');
    }
    
    if (globalsContent.includes('@theme')) {
      logError('Found invalid @theme directive in globals.css');
    }
    
    logSuccess('CSS file structure looks good');
  }
  
  if (fs.existsSync(tailwindConfigPath)) {
    logSuccess('Tailwind config exists');
  } else {
    logError('Tailwind config missing');
  }
}

// 4. Check for performance issues
function checkPerformance() {
  console.log(`\n${colors.bold}${colors.cyan}4. Checking performance configuration...${colors.reset}`);
  
  const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (fs.existsSync(nextConfigPath)) {
    const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
    
    if (nextConfig.includes('compress: true')) {
      logSuccess('Compression enabled');
    } else {
      logWarning('Compression not explicitly enabled');
    }
    
    if (nextConfig.includes('images:')) {
      logSuccess('Image optimization configured');
    } else {
      logWarning('Image optimization not configured');
    }
    
    if (nextConfig.includes('experimental:')) {
      logSuccess('Experimental optimizations enabled');
    } else {
      logWarning('No experimental optimizations enabled');
    }
  }
  
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (packageJson.scripts && packageJson.scripts.analyze) {
      logSuccess('Bundle analyzer script available');
    } else {
      logWarning('Bundle analyzer script not available');
    }
  }
}

// 5. Check TypeScript configuration
function checkTypeScript() {
  console.log(`\n${colors.bold}${colors.cyan}5. Checking TypeScript configuration...${colors.reset}`);
  
  const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
  
  if (fs.existsSync(tsconfigPath)) {
    const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
    
    if (tsconfig.compilerOptions && tsconfig.compilerOptions.strict) {
      logSuccess('Strict TypeScript mode enabled');
    } else {
      logWarning('Strict TypeScript mode not enabled');
    }
    
    logSuccess('TypeScript configuration exists');
  } else {
    logError('TypeScript configuration missing');
  }
}

// 6. Check dependencies
function checkDependencies() {
  console.log(`\n${colors.bold}${colors.cyan}6. Checking dependencies...${colors.reset}`);
  
  try {
    execSync('npm audit --audit-level=high', { stdio: 'pipe' });
    logSuccess('No high-severity security vulnerabilities found');
  } catch (error) {
    logWarning('Security vulnerabilities found - run "npm audit" for details');
  }
  
  try {
    execSync('npm outdated', { stdio: 'pipe' });
    logSuccess('All dependencies are up to date');
  } catch (error) {
    logWarning('Some dependencies are outdated - run "npm outdated" for details');
  }
}

// Run all checks
async function runHealthCheck() {
  checkMissingPages();
  checkImageOptimization();
  checkCSSConsistency();
  checkPerformance();
  checkTypeScript();
  checkDependencies();
  
  // Summary
  console.log(`\n${colors.bold}${colors.magenta}📊 Health Check Summary${colors.reset}`);
  console.log(`${colors.green}✅ Successes: ${successes.length}${colors.reset}`);
  console.log(`${colors.yellow}⚠️  Warnings: ${warnings.length}${colors.reset}`);
  console.log(`${colors.red}❌ Issues: ${issues.length}${colors.reset}`);
  
  if (issues.length === 0) {
    console.log(`\n${colors.green}${colors.bold}🎉 All critical issues resolved!${colors.reset}`);
  } else {
    console.log(`\n${colors.red}${colors.bold}🚨 ${issues.length} critical issues need attention${colors.reset}`);
  }
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      successes: successes.length,
      warnings: warnings.length,
      issues: issues.length
    },
    details: {
      successes,
      warnings,
      issues
    }
  };
  
  fs.writeFileSync('health-check-report.json', JSON.stringify(report, null, 2));
  console.log(`\n📄 Detailed report saved to health-check-report.json`);
}

runHealthCheck().catch(console.error);