#!/usr/bin/env node

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
      const matches = content.match(/["']\/images\/[^"']+["']/g);
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
  
  console.log(`\n📊 Image Validation Results:`);
  console.log(`✅ Existing images: ${existingImages.length}`);
  console.log(`❌ Missing images: ${missingImages.length}`);
  
  if (missingImages.length > 0) {
    console.log(`\n❌ Missing images:`);
    missingImages.forEach(img => console.log(`   - ${img}`));
  }
  
  return { existingImages, missingImages };
}

validateImages();
