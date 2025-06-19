#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🖼️  Creating missing images...\n');

// Create a simple SVG placeholder
const createSVGPlaceholder = (width, height, text, bgColor = '#1a1a1a', textColor = '#ffffff') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
</svg>`;
};

// Missing images to create
const missingImages = [
  { path: 'public/images/clients/fittrack-logo.svg', width: 120, height: 60, text: 'FitTrack' },
  { path: 'public/images/clients/nordic-design-logo.svg', width: 120, height: 60, text: 'Nordic Design' },
  { path: 'public/images/clients/consulting-group-logo.svg', width: 120, height: 60, text: 'Consulting Group' },
  { path: 'public/images/clients/fashion-forward-logo.svg', width: 120, height: 60, text: 'Fashion Forward' },
  { path: 'public/images/clients/traditional-manufacturing-logo.svg', width: 120, height: 60, text: 'Manufacturing' },
  { path: 'public/images/clients/local-service-logo.svg', width: 120, height: 60, text: 'Local Service' },
  { path: 'public/images/clients/techstart-logo.svg', width: 120, height: 60, text: 'TechStart' },
  { path: 'public/images/clients/green-energy-logo.svg', width: 120, height: 60, text: 'Green Energy' },
  { path: 'public/images/clients/healthcare-plus-logo.svg', width: 120, height: 60, text: 'Healthcare+' },
  { path: 'public/images/clients/edutech-logo.svg', width: 120, height: 60, text: 'EduTech' },
  { path: 'public/images/clients/financial-advisors-logo.svg', width: 120, height: 60, text: 'Financial' },
  { path: 'public/images/clients/restaurant-chain-logo.svg', width: 120, height: 60, text: 'Restaurant' },
  { path: 'public/images/placeholder.svg', width: 400, height: 300, text: 'Placeholder' },
  { path: 'public/images/og-default.jpg', width: 1200, height: 630, text: 'TechFlow Solutions' }
];

// Create missing images
missingImages.forEach(image => {
  const fullPath = path.join(process.cwd(), image.path);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create SVG content
  const svgContent = createSVGPlaceholder(image.width, image.height, image.text);
  
  // Write file
  fs.writeFileSync(fullPath, svgContent);
  console.log(`✅ Created: ${image.path}`);
});

console.log('\n🎉 All missing images created successfully!');
console.log('\n📝 Note: These are placeholder images. Replace them with actual images when available.');