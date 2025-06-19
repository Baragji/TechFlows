# Code Quality & Maintainability Guide

Denne guide beskriver de implementerede kodekvalitets- og vedligeholdelsesværktøjer i TechFlow Next.js projektet.

## 📋 Oversigt

Projektet er konfigureret med et omfattende sæt værktøjer og processer for at sikre høj kodekvalitet, konsistens og vedligeholdelse:

- **ESLint** - Statisk kodeanalyse og linting
- **Prettier** - Kodeformatering
- **TypeScript** - Type safety og bedre udvikleroplevelse
- **Jest** - Unit testing og coverage
- **Jest-Axe** - Accessibility testing
- **Husky** - Git hooks for kvalitetssikring
- **Lint-staged** - Kør linting kun på ændrede filer
- **GitHub Actions** - Kontinuerlig integration
- **VSCode** - Optimeret udvikleroplevelse

## 🚀 Hurtig Start

### Installation af Dependencies

```bash
# Installer alle dependencies
npm install

# Initialiser Husky git hooks
npm run prepare
```

### Daglige Kommandoer

```bash
# Udvikling med hot reload
npm run dev

# Kør alle kvalitetschecks
npm run quality:check

# Fix automatiske problemer
npm run quality:fix

# Kør tests med coverage
npm run test:coverage
```

## 🔧 Konfiguration

### ESLint Konfiguration

ESLint er konfigureret med:
- **Next.js** specifikke regler
- **React** og **React Hooks** regler
- **TypeScript** support
- **Accessibility** regler (jsx-a11y)
- **Hydration** specifikke advarsler
- **Performance** optimering regler

Konfigurationsfil: `eslint.config.mjs`

### Prettier Konfiguration

Prettier sikrer konsistent kodeformatering:
- Single quotes for JavaScript/TypeScript
- 2 spaces indentation
- 80 character line width
- Trailing commas hvor muligt

Konfigurationsfil: `.prettierrc.json`

### TypeScript Konfiguration

Strenge TypeScript indstillinger for bedre type safety:
- `strict: true`
- `noUnusedLocals: true`
- `noImplicitReturns: true`
- `exactOptionalPropertyTypes: true`

Konfigurationsfil: `tsconfig.eslint.json`

### Jest Konfiguration

Test setup med:
- JSDOM environment for React testing
- Jest-Axe for accessibility testing
- Coverage rapportering
- Mock setup for Next.js komponenter

Konfigurationsfil: `jest.config.mjs`

## 📝 Scripts Reference

### Udvikling
```bash
npm run dev              # Start udviklings server
npm run dev:debug        # Start med Node.js debugger
npm run build            # Build til produktion
npm run start            # Start produktion server
```

### Kodekvalitet
```bash
npm run lint             # Kør ESLint
npm run lint:fix         # Fix ESLint problemer automatisk
npm run format           # Format kode med Prettier
npm run format:check     # Check Prettier formatering
npm run type-check       # TypeScript type checking
```

### Testing
```bash
npm run test             # Kør alle tests
npm run test:watch       # Kør tests i watch mode
npm run test:coverage    # Kør tests med coverage
npm run test:ci          # Kør tests for CI/CD
npm run test:a11y        # Kør accessibility tests
```

### Validering
```bash
npm run validate:html    # HTML validering
npm run validate:a11y    # Accessibility validering
npm run validate:all     # Alle valideringer
```

### Kvalitetssikring
```bash
npm run quality:check    # Komplet kvalitetscheck
npm run quality:fix      # Fix automatiske problemer
npm run pre-commit       # Kør pre-commit checks
```

## 🔄 Git Workflow

### Pre-commit Hooks

Husky kører automatisk følgende checks før hver commit:
1. **Lint-staged** - Linting og formatering af ændrede filer
2. **Type checking** - TypeScript validering
3. **Tests** - Kør tests relateret til ændrede filer

### Lint-staged Konfiguration

Kører automatisk på staged filer:
- **JavaScript/TypeScript**: ESLint fix + Prettier
- **JSON/Markdown**: Prettier formatering
- **CSS/SCSS**: Prettier formatering
- **TypeScript**: Type checking

## 🚀 CI/CD Pipeline

### GitHub Actions

Automatisk kvalitetssikring på:
- **Push** til main/develop branches
- **Pull requests** til main/develop

#### Quality Check Job
- Type checking
- Linting
- Code formatting check
- Unit tests med coverage
- HTML validering
- Build verification

#### Accessibility Check Job
- Pa11y accessibility testing
- Kører efter successful quality check

#### Security Check Job
- NPM audit for sikkerhedssårbarheder
- Dependency vulnerability scanning

## 🛠️ VSCode Integration

### Anbefalede Extensions

Automatisk installation af:
- **ESLint** - Real-time linting
- **Prettier** - Automatisk formatering
- **Tailwind CSS** - IntelliSense for Tailwind
- **Jest** - Test runner integration
- **Axe Linter** - Accessibility linting
- **TypeScript** - Enhanced TypeScript support

### Editor Indstillinger

- **Format on save** aktiveret
- **Auto-fix ESLint** på save
- **Organize imports** på save
- **Tailwind CSS** IntelliSense
- **Jest** integration

## 📊 Code Coverage

### Coverage Targets

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

### Coverage Rapporter

```bash
# Generer coverage rapport
npm run test:coverage

# Åbn HTML rapport
open coverage/lcov-report/index.html
```

## ♿ Accessibility Testing

### Automatisk Testing

- **Jest-Axe** - Unit test niveau
- **Pa11y** - Side niveau testing
- **ESLint jsx-a11y** - Statisk analyse

### Accessibility Guidelines

- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Color contrast** validation

## 🐛 Debugging & Troubleshooting

### Common Issues

#### ESLint Errors
```bash
# Fix automatiske problemer
npm run lint:fix

# Check specifikke filer
npx eslint src/components/MyComponent.tsx
```

#### TypeScript Errors
```bash
# Type check hele projektet
npm run type-check

# Check specifik fil
npx tsc --noEmit src/components/MyComponent.tsx
```

#### Test Failures
```bash
# Kør tests i verbose mode
npm test -- --verbose

# Kør specifik test fil
npm test -- MyComponent.test.tsx

# Debug tests
npm test -- --detectOpenHandles
```

### Performance Optimization

#### ESLint Performance
```bash
# Kør ESLint med timing
npx eslint . --debug

# Cache ESLint resultater
npx eslint . --cache
```

#### Jest Performance
```bash
# Kør tests parallelt
npm test -- --maxWorkers=4

# Cache test resultater
npm test -- --cache
```

## 📈 Metrics & Monitoring

### Code Quality Metrics

- **ESLint warnings/errors** - Skal være 0
- **TypeScript errors** - Skal være 0
- **Test coverage** - 80%+ target
- **Accessibility violations** - 0 critical issues

### Performance Metrics

```bash
# Bundle analyse
npm run analyze

# Performance audit
npm run audit:performance

# Lighthouse scoring
npm run lighthouse
```

## 🔄 Maintenance

### Dependency Updates

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Security audit
npm audit
npm audit fix
```

### Configuration Updates

- **ESLint rules** - Review quarterly
- **TypeScript config** - Update with new TS versions
- **Jest config** - Update with new Jest versions
- **GitHub Actions** - Keep actions up to date

## 📚 Best Practices

### Code Style

1. **Konsistent navngivning** - camelCase for variabler, PascalCase for komponenter
2. **Meaningful names** - Beskrivende navne for funktioner og variabler
3. **Small functions** - Hold funktioner små og fokuserede
4. **Type annotations** - Eksplicitte typer hvor nødvendigt

### Testing

1. **Test pyramid** - Flere unit tests, færre integration tests
2. **Accessibility first** - Inkluder a11y tests i alle komponenter
3. **Mock external dependencies** - Isoler unit tests
4. **Descriptive test names** - Klare beskrivelser af hvad der testes

### Performance

1. **Lazy loading** - Brug dynamic imports for store komponenter
2. **Memoization** - React.memo og useMemo hvor relevant
3. **Bundle optimization** - Analyser og optimer bundle størrelse
4. **Image optimization** - Brug Next.js Image komponenten

## 🆘 Support

### Documentation

- [ESLint Documentation](https://eslint.org/docs/)
- [Prettier Documentation](https://prettier.io/docs/)
- [Jest Documentation](https://jestjs.io/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Team Resources

- **Code reviews** - Alle PRs skal reviewes
- **Pair programming** - Komplekse features
- **Knowledge sharing** - Ugentlige tech talks
- **Documentation** - Hold dokumentation opdateret

---

**Sidste opdatering**: Januar 2025
**Version**: 1.0.0
**Maintainer**: TechFlow Development Team