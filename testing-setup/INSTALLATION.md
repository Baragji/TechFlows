# 🚀 Installation Guide

## Hurtig Start

### 1. Kopiér Testing Setup

```bash
# Kopiér hele testing-setup mappen til dit projekt
cp -r /path/to/testing-setup /path/to/your-project/

# Naviger til dit projekt
cd /path/to/your-project
```

### 2. Kør Setup Script

```bash
# Gør scriptet eksekverbart
chmod +x testing-setup/setup-script.sh

# Kør setup scriptet
./testing-setup/setup-script.sh
```

### 3. Verificér Installation

```bash
# Test at alt virker
npm test
npm run test:coverage
npm run validate:html
```

## 📋 Detaljeret Installation

### Forudsætninger

- **Node.js**: >= 18.0.0
- **npm**: >= 8.0.0
- **Next.js**: >= 13.0.0
- **React**: >= 18.0.0
- **TypeScript**: >= 4.9.0 (valgfrit)

### Tjek Forudsætninger

```bash
# Tjek versioner
node --version    # Skal være >= 18.0.0
npm --version     # Skal være >= 8.0.0
npx next --version # Skal være >= 13.0.0
```

### Manuel Installation

Hvis du foretrækker manuel installation:

#### 1. Installer Dependencies

```bash
# Testing dependencies
npm install --save-dev \
  @testing-library/react@^14.1.2 \
  @testing-library/jest-dom@^6.1.5 \
  @testing-library/user-event@^14.5.1 \
  jest@^29.7.0 \
  jest-environment-jsdom@^29.7.0 \
  @types/jest@^29.5.8

# Accessibility dependencies
npm install --save-dev \
  jest-axe@^8.0.0 \
  @types/jest-axe@^3.5.9 \
  axe-core@^4.8.3 \
  pa11y@^8.0.0 \
  html-validate@^8.7.4

# Development dependencies (valgfrit)
npm install --save-dev \
  eslint-plugin-jest@^27.6.0 \
  eslint-plugin-testing-library@^6.2.0 \
  eslint-plugin-jsx-a11y@^6.8.0
```

#### 2. Kopiér Konfigurationsfiler

```bash
# Jest konfiguration
cp testing-setup/config/jest.config.mjs ./
cp testing-setup/config/jest.setup.js ./

# Accessibility konfiguration
cp testing-setup/config/.htmlvalidate.json ./
cp testing-setup/config/.pa11yrc.json ./
```

#### 3. Opdatér package.json

```bash
# Brug automatisk script
node testing-setup/scripts/update-package-json.js

# Eller tilføj manuelt:
```

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --watchAll=false",
    "test:debug": "jest --verbose --no-cache",
    "test:accessibility": "jest --testPathPattern=accessibility",
    "validate:html": "html-validate \"**/*.html\"",
    "validate:a11y": "pa11y http://localhost:3000",
    "lint:test": "eslint **/*.test.{js,jsx,ts,tsx}"
  }
}
```

#### 4. Opret Test Mappe

```bash
# Opret test struktur
mkdir -p src/__tests__
mkdir -p src/components/__tests__
mkdir -p src/pages/__tests__

# Kopiér eksempel test
cp testing-setup/templates/example.test.tsx src/__tests__/
```

## 🔧 Konfiguration

### Jest Konfiguration

`jest.config.mjs` indeholder:

- **TypeScript support**: Automatisk transpilering
- **ES Modules**: Support for moderne JavaScript
- **Path mapping**: `@/` aliases til `src/`
- **JSDOM environment**: Browser-lignende miljø
- **Coverage**: Automatisk coverage rapportering
- **Next.js mocking**: Built-in mocks for Next.js komponenter

### Jest Setup

`jest.setup.js` inkluderer:

- **Jest DOM matchers**: `toBeInTheDocument()`, etc.
- **Jest-Axe**: Accessibility testing utilities
- **Next.js mocks**: Router, Image, Link komponenter
- **Browser API mocks**: `matchMedia`, `IntersectionObserver`, etc.
- **Global utilities**: Hjælpefunktioner til tests

### Accessibility Konfiguration

**HTML Validate** (`.htmlvalidate.json`):
- WCAG 2.1 AA compliance
- Semantic HTML validation
- ARIA attribute checking
- Custom accessibility rules

**Pa11y** (`.pa11yrc.json`):
- Automated accessibility testing
- WCAG 2.1 standard
- Custom viewport settings
- Wait conditions for SPA

## 📁 Projekt Struktur

Efter installation vil dit projekt have:

```
your-project/
├── jest.config.mjs          # Jest konfiguration
├── jest.setup.js            # Jest setup og mocks
├── .htmlvalidate.json       # HTML validation regler
├── .pa11yrc.json           # Pa11y konfiguration
├── package.json            # Opdateret med test scripts
├── src/
│   ├── __tests__/          # Globale tests
│   ├── components/
│   │   └── __tests__/      # Komponent tests
│   └── pages/
│       └── __tests__/      # Side tests
└── testing-setup/          # Setup filer (kan slettes efter installation)
    ├── README.md
    ├── setup-script.sh
    ├── versions.json
    ├── config/
    ├── docs/
    ├── scripts/
    └── templates/
```

## 🧪 Test Kommandoer

### Basis Kommandoer

```bash
# Kør alle tests
npm test

# Kør tests i watch mode
npm run test:watch

# Kør tests med coverage
npm run test:coverage

# Kør tests for CI/CD
npm run test:ci
```

### Accessibility Kommandoer

```bash
# Kør accessibility tests
npm run test:accessibility

# Validér HTML
npm run validate:html

# Kør Pa11y (kræver running server)
npm run dev &  # Start server
npm run validate:a11y
```

### Debug Kommandoer

```bash
# Debug tests
npm run test:debug

# Kør specifik test
npm test MyComponent.test.tsx

# Kør tests med pattern
npm test -- --testNamePattern="should render"

# Update snapshots
npm test -- --updateSnapshot
```

## 🔍 Verificering

### 1. Test Installation

```bash
# Tjek at Jest virker
npm test -- --version

# Kør eksempel test
npm test example.test.tsx
```

### 2. Test Accessibility

```bash
# Tjek Jest-Axe
npm run test:accessibility

# Tjek HTML validation
echo '<div><p>Test</p></div>' > test.html
npm run validate:html test.html
rm test.html
```

### 3. Test Coverage

```bash
# Generer coverage rapport
npm run test:coverage

# Tjek coverage filer
ls coverage/
open coverage/lcov-report/index.html  # macOS
```

## 🚨 Troubleshooting

### Almindelige Problemer

#### "Cannot find module" fejl

```bash
# Ryd cache og geninstaller
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript fejl

```bash
# Installer manglende types
npm install --save-dev @types/jest @types/jest-axe

# Tjek tsconfig.json
cat tsconfig.json | grep -A 5 "types"
```

#### Jest konfiguration fejl

```bash
# Verificér Jest config
npm test -- --showConfig

# Test uden cache
npm test -- --no-cache
```

### Få Hjælp

1. **Tjek dokumentation**: `testing-setup/docs/`
2. **Læs troubleshooting guide**: `testing-setup/docs/troubleshooting.md`
3. **Verificér versioner**: `testing-setup/versions.json`
4. **Tjek logs**: Kør kommandoer med `--verbose` flag

## 📚 Næste Skridt

1. **Læs guides**:
   - `testing-setup/docs/testing-guide.md`
   - `testing-setup/docs/accessibility-guide.md`

2. **Opret dine første tests**:
   - Brug `testing-setup/templates/example.test.tsx` som reference
   - Start med simple komponent tests
   - Tilføj accessibility tests

3. **Integrér i workflow**:
   - Tilføj tests til CI/CD pipeline
   - Sæt coverage targets
   - Automatisér accessibility checks

4. **Udvid setup**:
   - Tilføj custom matchers
   - Integrér med Storybook
   - Tilføj visual regression tests

## 🎯 Best Practices

- **Skriv tests først**: Test-driven development
- **Test bruger adfærd**: Fokusér på hvad brugeren ser og gør
- **Inkludér accessibility**: Gør det til en del af din workflow
- **Hold tests simple**: En test per adfærd
- **Mock eksternt**: Mock API calls og tunge dependencies
- **Brug descriptive navne**: Tests skal være selvdokumenterende

## 📞 Support

Hvis du har problemer:

1. Tjek `troubleshooting.md`
2. Verificér versioner i `versions.json`
3. Søg i dokumentationen
4. Opret issue med detaljeret fejlbeskrivelse

---

**Tillykke! 🎉 Du har nu et komplet testing og accessibility setup til dit Next.js projekt.**