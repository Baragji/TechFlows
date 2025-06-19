#!/bin/bash

# Komplet Testing & Accessibility Setup Script
# Dette script opsætter et komplet testing miljø for Next.js projekter

set -e  # Exit ved fejl

echo "🚀 Starter Testing & Accessibility Setup..."
echo "================================================"

# Tjek om vi er i et Node.js projekt
if [ ! -f "package.json" ]; then
    echo "❌ Fejl: package.json ikke fundet. Kør scriptet fra projektets rod."
    exit 1
fi

# Tjek om Next.js er installeret
if ! grep -q "next" package.json; then
    echo "⚠️  Advarsel: Next.js ikke fundet i package.json. Fortsætter alligevel..."
fi

echo "📦 Installerer testing dependencies..."

# Installer alle nødvendige testing packages
npm install --save-dev \
    jest@^29.7.0 \
    @testing-library/react@^14.1.2 \
    @testing-library/jest-dom@^6.1.5 \
    @testing-library/user-event@^14.5.1 \
    jest-axe@^8.0.0 \
    @types/jest@^29.5.8 \
    @types/jest-axe@^3.5.9 \
    jest-environment-jsdom@^29.7.0

echo "✅ Dependencies installeret!"

echo "📁 Kopierer konfigurationsfiler..."

# Kopiér konfigurationsfiler til projektets rod
cp testing-setup/config/jest.config.mjs ./
cp testing-setup/config/jest.setup.js ./
cp testing-setup/config/.htmlvalidate.json ./
cp testing-setup/config/.pa11yrc.json ./

echo "✅ Konfigurationsfiler kopieret!"

echo "📝 Opdaterer package.json scripts..."

# Backup eksisterende package.json
cp package.json package.json.backup

# Tilføj test scripts til package.json
node testing-setup/scripts/update-package-json.js

echo "✅ Package.json opdateret!"

echo "🧪 Opretter test eksempler..."

# Opret test mappe hvis den ikke eksisterer
mkdir -p src/components/__tests__

# Kopiér test templates
cp testing-setup/templates/example.test.tsx src/components/__tests__/

echo "✅ Test eksempler oprettet!"

echo "🔍 Kører initial test for at verificere setup..."

# Kør en hurtig test for at sikre alt virker
npm test -- --passWithNoTests --verbose

echo "🎉 Setup fuldført!"
echo "================================================"
echo "📋 Næste skridt:"
echo "1. Kør 'npm test' for at køre alle tests"
echo "2. Kør 'npm run test:watch' for watch mode"
echo "3. Kør 'npm run test:coverage' for coverage rapport"
echo "4. Se 'testing-setup/docs/' for detaljeret dokumentation"
echo "================================================"

echo "💾 Backup af original package.json gemt som package.json.backup"
echo "🔧 Alle konfigurationsfiler er nu i projektets rod"
echo "📚 Læs testing-setup/README.md for mere information"