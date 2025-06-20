# 🚀 Quick Reference Guide - TechFlow Next.js

## ⚡ Hyppigt Brugte Kommandoer

### Development
```bash
# Start development server
npm run dev

# Start med debugging
npm run dev:debug

# Build til produktion
npm run build

# Start production server
npm start
```

### Quality Assurance
```bash
# Kør alle kvalitetschecks
npm run quality:check

# Fix automatiske problemer
npm run quality:fix

# ESLint (inkl. hydration checks)
npm run lint
npm run lint:fix
npm run lint:report  # HTML rapport

# TypeScript type checking
npm run type-check

# Testing
npm run test
npm run test:coverage
npm run test:a11y
```

### Performance & Analysis
```bash
# Bundle analyse
npm run analyze

# Performance audit
npm run audit:performance

# Lighthouse test
npm run lighthouse
```

---

## 🔧 Hurtige Fixes

### Hydration Mismatch Fix
```tsx
// ❌ Forårsager hydration mismatch
const timestamp = new Date().toISOString();

// ✅ Correct pattern
const [timestamp, setTimestamp] = useState('');
useEffect(() => {
  setTimestamp(new Date().toISOString());
}, []);
```

### Tailwind v4 Z-Index
```tsx
// ❌ Gammel v3 syntax
className="z-50"

// ✅ v4 med CSS variables
className="z-[var(--z-index-nav)]"
```

### Browser API Usage
```tsx
// ❌ Forårsager fejl ved SSR
const width = window.innerWidth;

// ✅ Correct pattern
const [width, setWidth] = useState(0);
useEffect(() => {
  setWidth(window.innerWidth);
}, []);
```

---

## 🚨 Troubleshooting Checklist

### Build Fejl
1. `npm run type-check` - Check TypeScript errors
2. `npm run lint` - Check linting issues
3. `npm ci` - Clean install dependencies
4. `rm -rf .next && npm run build` - Clean build

### Hydration Errors
1. Check for browser APIs i render logic
2. Verificer CSS klasse konsistens
3. Se efter `Math.random()` eller `Date()` calls
4. Tjek HTML nesting struktur

### Deployment Issues
1. Verificer Node.js version (≥20.0.0)
2. Check `package-lock.json` er committet
3. Test lokal production build
4. Verificer environment variables

---

## 📁 File Structure Quick Reference

### Core Configuration
- `next.config.ts` - Next.js konfiguration
- `tailwind.config.ts` - Tailwind CSS setup
- `tsconfig.json` - TypeScript konfiguration
- `eslint.config.mjs` - ESLint v9 flat config
- `package.json` - Dependencies og scripts

### Source Structure
```
src/
├── app/                 # App Router (Next.js 13+)
├── components/          # React komponenter
│   ├── ui/             # Basis UI komponenter
│   ├── sections/       # Side-sektioner
│   └── debug/          # Debug komponenter
├── hooks/              # Custom React hooks
├── lib/                # Utility funktioner
└── styles/             # Global styles
```

### Documentation
```
docs-samlet/
├── vejledninger/       # Primære guides
├── breaking-changes/   # Breaking change fixes
├── best-practices/     # Code quality standards
└── debugging/          # Debugging tools
```

---

## 🎯 Common Workflows

### New Feature Development
1. `git checkout -b feature/new-feature`
2. `npm run dev` - Start development
3. Develop feature with live reload
4. `npm run quality:check` - Verify quality
5. `npm run test` - Run tests
6. Commit changes
7. Create pull request

### Bug Fixing
1. Identificer problemet via logs/console
2. Check relevant documentation i `docs-samlet/`
3. Implementer fix
4. `npm run lint:fix` - Auto-fix hvor muligt
5. `npm run test` - Verify fix
6. `npm run build` - Test production build

### Pre-deployment
1. `npm run build` - Verify build success
2. `npm run quality:check` - All checks pass
3. `npm run test:coverage` - Coverage targets met
4. `npm run lint:report` - Check HTML rapport
5. Deploy til staging/production

---

## 🔍 Debug Patterns

### Console Debugging
```tsx
// Server vs Client debugging
if (typeof window !== 'undefined') {
  console.log('Client-side:', data);
} else {
  console.log('Server-side:', data);
}

// useEffect debugging
useEffect(() => {
  console.log('Client-side effect:', data);
}, [data]);
```

### Conditional Rendering Debug
```tsx
// Temporary disable SSR for debugging
const NoSSRComponent = dynamic(() => import('./Component'), {
  ssr: false
});

// Suppress hydration warning (temporary)
<div suppressHydrationWarning>
  {/* Problematic content */}
</div>
```

---

## 📊 Performance Quick Checks

### Bundle Size
```bash
npm run build
npm run analyze  # Opens analyzer in browser
```

### Core Web Vitals
```bash
npm run lighthouse
# Or check Vercel Analytics after deployment
```

### Memory Usage
```bash
npm run build:memory-debug
```

---

## ⚠️ Common Pitfalls

### 1. Hydration Issues
- Undgå browser APIs i render
- Brug `useEffect` for client-side kode
- Konsistente CSS klasser

### 2. TypeScript Errors
- Specificer eksplicitte typer
- Undgå `any` type
- Brug proper interfaces

### 3. Performance Issues
- Optimér images med Next.js Image
- Lazy load komponenter med `dynamic`
- Monitorér bundle size

### 4. Accessibility
- Test med screenreader
- Verificer farvekontrast
- Inkluder proper ARIA labels

---

## 🔗 Quick Links

### Internal Docs
- [Complete Hydration Guide](./vejledninger/01_HYDRATION_KOMPLET_GUIDE.md)
- [Tailwind v4 Fixes](./breaking-changes/01_TAILWIND_V4_BREAKING_CHANGES.md)
- [Best Practices](./best-practices/01_CODE_QUALITY_BEST_PRACTICES.md)

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React 19 Guide](https://react.dev)

---

## 🏆 Success Metrics

### Green Indicators
- ✅ `npm run build` - Successful build
- ✅ `npm run lint` - 0 errors (warnings OK)
- ✅ `npm run test` - All tests pass
- ✅ `npm run type-check` - 0 TypeScript errors

### Performance Targets
- **Lighthouse Score**: >90
- **Build Time**: <5 minutes
- **Bundle Size**: Monitor with analyzer
- **Test Coverage**: >80%

---

**Gem denne fil som bogmærke for hurtig reference! 🔖**

*Updated: Juni 2025 | Next.js 15.3.3 | Status: Production Ready*
