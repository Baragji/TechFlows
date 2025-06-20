/**
 * Script to fix hydration mismatch issues by replacing inconsistent CSS classes
 * Replaces generic Tailwind classes with custom consistent classes
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping of old classes to new consistent classes
const classMapping = {
  'text-gray-900': 'text-text-dark',
  'text-gray-600': 'text-text-light',
  'text-gray-800': 'text-text-dark',
  'text-gray-700': 'text-text-dark',
  'text-gray-500': 'text-text-light',
};

// Directories to scan
const searchDirs = [
  'src/components',
  'src/app',
  'src/hooks'
];

/**
 * Recursively find all .tsx and .jsx files
 */
function findTsxFiles(dir) {
  const files = [];

  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...findTsxFiles(fullPath));
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${dir}:`, error.message);
  }

  return files;
}

/**
 * Replace classes in a file
 */
function fixClassesInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Replace each class mapping
    for (const [oldClass, newClass] of Object.entries(classMapping)) {
      const regex = new RegExp(oldClass, 'g');
      if (content.includes(oldClass)) {
        content = content.replace(regex, newClass);
        hasChanges = true;
        console.log(`  ✓ ${oldClass} → ${newClass}`);
      }
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 Fixing hydration mismatch issues...\n');

  let totalFiles = 0;
  let changedFiles = 0;

  for (const dir of searchDirs) {
    console.log(`📁 Scanning ${dir}...`);

    const files = findTsxFiles(dir);
    totalFiles += files.length;

    for (const file of files) {
      console.log(`\n📄 Processing ${file.replace(process.cwd(), '')}:`);

      if (fixClassesInFile(file)) {
        changedFiles++;
        console.log(`  ✅ Updated`);
      } else {
        console.log(`  ➖ No changes needed`);
      }
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`  Total files scanned: ${totalFiles}`);
  console.log(`  Files modified: ${changedFiles}`);

  if (changedFiles > 0) {
    console.log(`\n🔍 Running lint check...`);
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log(`✅ Lint check passed`);
    } catch (error) {
      console.log(`⚠️  Lint check found issues - please review`);
    }
  }

  console.log(`\n✅ Hydration fix completed!`);
  console.log(`\nNext steps:`);
  console.log(`1. Test your application: npm run dev`);
  console.log(`2. Check for hydration errors in browser console`);
  console.log(`3. Run build test: npm run build`);
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { classMapping, findTsxFiles, fixClassesInFile };

