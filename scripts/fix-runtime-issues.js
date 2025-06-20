#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Runtime Issues...\n');

// Color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function logSuccess(message) {
  console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

function logWarning(message) {
  console.log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
}

function logInfo(message) {
  console.log(`${colors.blue}ℹ️  ${message}${colors.reset}`);
}

// 1. Create environment variables file
function createEnvFile() {
  console.log(`${colors.bold}${colors.blue}1. Creating environment variables...${colors.reset}`);

  const envPath = path.join(process.cwd(), '.env.local');
  const envContent = `# Site Configuration
NEXT_PUBLIC_SITE_URL=https://techflowsolutions.dk

# Analytics (optional)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=

# Performance Monitoring
NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING=true

# Image Optimization
NEXT_PUBLIC_IMAGE_DOMAINS=techflowsolutions.dk,localhost

# Contact Form (if needed)
NEXT_PUBLIC_CONTACT_EMAIL=info@techflowsolutions.dk
`;

  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, envContent);
    logSuccess('Created .env.local file');
  } else {
    logInfo('.env.local already exists');
  }
}

// 2. Create placeholder images directory structure
function createImageDirectories() {
  console.log(`\n${colors.bold}${colors.blue}2. Creating image directory structure...${colors.reset}`);

  const imageDirectories = [
    'public/images/case-studies',

    'public/images/testimonials',
    'public/images/team',
    'public/images/blog',
    'public/images/events',
    'public/images/services',
    'public/images/clients'
  ];

  imageDirectories.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      logSuccess(`Created directory: ${dir}`);
    } else {
      logInfo(`Directory exists: ${dir}`);
    }
  });
}

// 3. Create placeholder images
function createPlaceholderImages() {
  console.log(`\n${colors.bold}${colors.blue}3. Creating placeholder images...${colors.reset}`);

  // Create a simple SVG placeholder
  const createSVGPlaceholder = (width, height, text) => {
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1a1a1a"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#ffffff" text-anchor="middle" dy=".3em">${text}</text>
</svg>`;
  };

  const placeholders = [

    { path: 'public/og-image.png', width: 1200, height: 630, text: 'OG Image' },
    { path: 'public/icon-32x32.png', width: 32, height: 32, text: '32' },
    { path: 'public/icon-192x192.png', width: 192, height: 192, text: '192' },
    { path: 'public/apple-touch-icon.png', width: 180, height: 180, text: 'Apple' }
  ];

  placeholders.forEach(placeholder => {
    const fullPath = path.join(process.cwd(), placeholder.path);
    if (!fs.existsSync(fullPath)) {
      const svgContent = createSVGPlaceholder(placeholder.width, placeholder.height, placeholder.text);
      fs.writeFileSync(fullPath, svgContent);
      logSuccess(`Created placeholder: ${placeholder.path}`);
    } else {
      logInfo(`Image exists: ${placeholder.path}`);
    }
  });
}

// 4. Create image validation utility
function createImageValidationUtility() {
  console.log(`\n${colors.bold}${colors.blue}4. Creating image validation utility...${colors.reset}`);

  const utilPath = path.join(process.cwd(), 'src', 'utils', 'imageValidation.ts');
  const utilContent = `// Image validation and fallback utilities
export const validateImageSrc = (src: string | undefined | null): string => {
  if (!src || src.trim() === '') {
    return '/images/placeholder.svg';
  }

  // Check if it's a valid URL or path
  try {
    if (src.startsWith('http') || src.startsWith('/')) {
      return src;
    }
    return '/images/placeholder.svg';
  } catch {
    return '/images/placeholder.svg';
  }
};

export const getImageWithFallback = (src: string | undefined | null, fallback?: string): string => {
  const validSrc = validateImageSrc(src);
  return validSrc === '/images/placeholder.svg' && fallback ? fallback : validSrc;
};

// Image loading error handler
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (img.src !== '/images/placeholder.svg') {
    img.src = '/images/placeholder.svg';
  }
};

// Generate placeholder data URL
export const generatePlaceholderDataURL = (width: number, height: number, text?: string): string => {
  const svg = \`<svg width="\${width}" height="\${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#1a1a1a"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#ffffff" text-anchor="middle" dy=".3em">\${text || 'Image'}</text>
  </svg>\`;

  return \`data:image/svg+xml;base64,\${Buffer.from(svg).toString('base64')}\`;
};
`;

  const utilsDir = path.dirname(utilPath);
  if (!fs.existsSync(utilsDir)) {
    fs.mkdirSync(utilsDir, { recursive: true });
  }

  fs.writeFileSync(utilPath, utilContent);
  logSuccess('Created image validation utility');
}

// 5. Create enhanced Image component
function createEnhancedImageComponent() {
  console.log(`\n${colors.bold}${colors.blue}5. Creating enhanced Image component...${colors.reset}`);

  const componentPath = path.join(process.cwd(), 'src', 'components', 'ui', 'SafeImage.tsx');
  const componentContent = `'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { validateImageSrc, generatePlaceholderDataURL } from '@/utils/imageValidation';

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string | undefined | null;
  fallbackSrc?: string;
  showPlaceholder?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  showPlaceholder = true,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(() => validateImageSrc(src));
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      } else if (showPlaceholder && typeof width === 'number' && typeof height === 'number') {
        setImageSrc(generatePlaceholderDataURL(width, height, alt || 'Image'));
      }
    }
  };

  // If no valid src and no fallback, render placeholder div
  if (!imageSrc && !showPlaceholder) {
    return null;
  }

  if (!imageSrc && showPlaceholder) {
    return (
      <div
        className={\`bg-gray-200 flex items-center justify-center \${className || ''}\`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">{alt || 'Image'}</span>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default SafeImage;
`;

  fs.writeFileSync(componentPath, componentContent);
  logSuccess('Created SafeImage component');
}

// 6. Update package.json scripts
function updatePackageScripts() {
  console.log(`\n${colors.bold}${colors.blue}6. Updating package.json scripts...${colors.reset}`);

  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  packageJson.scripts = {
    ...packageJson.scripts,
    'fix-runtime': 'node scripts/fix-runtime-issues.js',
    'validate-images': 'node scripts/validate-images.js',
    'dev:safe': 'npm run fix-runtime && npm run dev',
    'build:safe': 'npm run fix-runtime && npm run build'
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  logSuccess('Updated package.json scripts');
}

// 7. Create image validation script
function createImageValidationScript() {
  console.log(`\n${colors.bold}${colors.blue}7. Creating image validation script...${colors.reset}`);

  const scriptPath = path.join(process.cwd(), 'scripts', 'validate-images.js');
  const scriptContent = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🖼️  Validating images...');

const srcPath = path.join(process.cwd(), 'src');
const publicPath = path.join(process.cwd(), 'public');

// Find all image references in code
function findImageReferences(dir) {
  const imageRefs = new Set();
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      const subRefs = findImageReferences(fullPath);
      subRefs.forEach(ref => imageRefs.add(ref));
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');

      // Find image paths
      const matches = content.match(/["']\\/images\\/[^"']+["']/g);
      if (matches) {
        matches.forEach(match => {
          const imagePath = match.slice(1, -1); // Remove quotes
          imageRefs.add(imagePath);
        });
      }
    }
  }

  return imageRefs;
}

// Check if images exist
function validateImages() {
  const imageRefs = findImageReferences(srcPath);
  const missingImages = [];
  const existingImages = [];

  for (const imageRef of imageRefs) {
    const fullPath = path.join(publicPath, imageRef);
    if (fs.existsSync(fullPath)) {
      existingImages.push(imageRef);
    } else {
      missingImages.push(imageRef);
    }
  }

  console.log(\`\\n📊 Image Validation Results:\`);
  console.log(\`✅ Existing images: \${existingImages.length}\`);
  console.log(\`❌ Missing images: \${missingImages.length}\`);

  if (missingImages.length > 0) {
    console.log(\`\\n❌ Missing images:\`);
    missingImages.forEach(img => console.log(\`   - \${img}\`));
  }

  return { existingImages, missingImages };
}

validateImages();
`;

  fs.writeFileSync(scriptPath, scriptContent);
  logSuccess('Created image validation script');
}

// Run all fixes
async function runAllFixes() {
  try {
    createEnvFile();
    createImageDirectories();
    createPlaceholderImages();
    createImageValidationUtility();
    createEnhancedImageComponent();
    updatePackageScripts();
    createImageValidationScript();

    console.log(`\n${colors.bold}${colors.green}🎉 Runtime issues fixed successfully!${colors.reset}`);
    console.log(`\n${colors.cyan}Next steps:${colors.reset}`);
    console.log(`1. Run ${colors.yellow}npm run validate-images${colors.reset} to check for missing images`);
    console.log(`2. Run ${colors.yellow}npm run dev${colors.reset} to test the fixes`);
    console.log(`3. Replace placeholder images with actual images when available`);
    console.log(`4. Use the SafeImage component for better error handling`);

  } catch (error) {
    console.error(`${colors.red}❌ Fix failed:${colors.reset}`, error);
    process.exit(1);
  }
}

runAllFixes();
