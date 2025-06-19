# Komplet Testing & Accessibility Setup Guide

Denne mappe indeholder alt hvad du behøver for at opsætte et komplet testing og accessibility setup i dine Next.js projekter.

## 📁 Indhold

- `setup-script.sh` - Automatisk installationsscript
- `config/` - Alle konfigurationsfiler
- `templates/` - Test templates og eksempler
- `docs/` - Detaljeret dokumentation

## 🚀 Hurtig Start

1. Kopiér hele `testing-setup` mappen til dit projekt
2. Kør setup scriptet: `./setup-script.sh`
3. Følg instruktionerne i terminalen

## 📋 Hvad Bliver Installeret

### Dependencies
- Jest (^29.7.0) - Test framework
- @testing-library/react (^14.1.2) - React testing utilities
- @testing-library/jest-dom (^6.1.5) - Jest DOM matchers
- @testing-library/user-event (^14.5.1) - User interaction simulation
- jest-axe (^8.0.0) - Accessibility testing
- @types/jest (^29.5.8) - TypeScript support for Jest
- @types/jest-axe (^3.5.9) - TypeScript support for jest-axe
- jest-environment-jsdom (^29.7.0) - DOM environment for tests

### Konfigurationsfiler
- `jest.config.mjs` - Jest konfiguration med Next.js integration
- `jest.setup.js` - Global test setup
- `.htmlvalidate.json` - HTML validering
- `.pa11yrc.json` - Pa11y accessibility testing

### NPM Scripts
- `test` - Kør alle tests
- `test:watch` - Kør tests i watch mode
- `test:coverage` - Kør tests med coverage rapport
- `test:a11y` - Kør accessibility tests
- `validate:html` - HTML validering

## 🔧 Konfiguration

Alle konfigurationsfiler er optimeret til:
- Next.js 14+ med App Router
- TypeScript support
- ES Modules
- Accessibility testing
- Coverage rapportering

## 📚 Læs Mere

Se `docs/` mappen for detaljeret dokumentation om:
- Hvordan man skriver tests
- Accessibility best practices
- Troubleshooting guide
- Avancerede konfigurationer