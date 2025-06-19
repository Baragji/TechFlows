# Troubleshooting Guide

## 📋 Indholdsfortegnelse

1. [Installation Problemer](#installation-problemer)
2. [Konfiguration Fejl](#konfiguration-fejl)
3. [Test Execution Fejl](#test-execution-fejl)
4. [TypeScript Problemer](#typescript-problemer)
5. [Next.js Specifikke Problemer](#nextjs-specifikke-problemer)
6. [Performance Problemer](#performance-problemer)
7. [Debugging Tips](#debugging-tips)

## Installation Problemer

### Problem: "npm install" fejler

**Symptomer:**
```bash
npm ERR! peer dep missing: react@^18.0.0
```

**Løsninger:**
```bash
# 1. Ryd npm cache
npm cache clean --force

# 2. Slet node_modules og package-lock.json
rm -rf node_modules package-lock.json

# 3. Installer igen
npm install

# 4. Hvis peer dependency problemer:
npm install --legacy-peer-deps
```

### Problem: "Permission denied" fejl

**Symptomer:**
```bash
EACCES: permission denied, mkdir '/usr/local/lib/node_modules'
```

**Løsninger:**
```bash
# 1. Brug npx i stedet for global installation
npx create-next-app@latest

# 2. Eller fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### Problem: "Module not found" efter installation

**Symptomer:**
```bash
Cannot find module '@testing-library/react'
```

**Løsninger:**
```bash
# 1. Verificér installation
npm list @testing-library/react

# 2. Geninstaller specifik pakke
npm install --save-dev @testing-library/react@latest

# 3. Tjek package.json for korrekte versioner
```

## Konfiguration Fejl

### Problem: Jest kan ikke finde moduler

**Symptomer:**
```bash
Cannot find module '@/components/MyComponent'
```

**Løsning:**
```javascript
// jest.config.mjs - Tjek moduleNameMapper
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
  // Tilføj andre aliases hvis nødvendigt
  '^~/(.*)$': '<rootDir>/$1',
}
```

### Problem: "SyntaxError: Unexpected token 'export'"

**Symptomer:**
```bash
SyntaxError: Unexpected token 'export'
```

**Løsning:**
```javascript
// jest.config.mjs - Tilføj transform ignore patterns
transformIgnorePatterns: [
  'node_modules/(?!(.*\.mjs$|@testing-library|some-es-module))',
],
```

### Problem: "TextEncoder is not defined"

**Symptomer:**
```bash
ReferenceError: TextEncoder is not defined
```

**Løsning:**
```javascript
// jest.setup.js - Tilføj polyfills
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
```

### Problem: "window.matchMedia is not a function"

**Symptomer:**
```bash
TypeError: window.matchMedia is not a function
```

**Løsning:**
```javascript
// jest.setup.js - Mock matchMedia (allerede inkluderet)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
```

## Test Execution Fejl

### Problem: Tests timeout

**Symptomer:**
```bash
Timeout - Async callback was not invoked within the 5000 ms timeout
```

**Løsninger:**
```javascript
// 1. Øg timeout i jest.config.mjs
testTimeout: 10000, // 10 sekunder

// 2. Eller i specifik test
it('async test', async () => {
  // test code
}, 10000) // 10 sekunder timeout

// 3. Brug waitFor for async operations
import { waitFor } from '@testing-library/react'

await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument()
}, { timeout: 5000 })
```

### Problem: "act" warnings

**Symptomer:**
```bash
Warning: An update to Component inside a test was not wrapped in act(...)
```

**Løsninger:**
```javascript
// 1. Brug userEvent i stedet for fireEvent
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()
await user.click(button)

// 2. Wrap i act hvis nødvendigt
import { act } from '@testing-library/react'

act(() => {
  // State updates
})

// 3. Brug waitFor for async updates
await waitFor(() => {
  expect(screen.getByText('Updated')).toBeInTheDocument()
})
```

### Problem: "Cannot read property of undefined"

**Symptomer:**
```bash
TypeError: Cannot read property 'title' of undefined
```

**Løsninger:**
```javascript
// 1. Tilføj default props
const MyComponent = ({ data = {} }) => {
  return <div>{data.title || 'Default Title'}</div>
}

// 2. Mock data korrekt
const mockData = {
  title: 'Test Title',
  description: 'Test Description'
}

render(<MyComponent data={mockData} />)

// 3. Tjek for eksistens før brug
const MyComponent = ({ data }) => {
  if (!data) return <div>Loading...</div>
  return <div>{data.title}</div>
}
```

## TypeScript Problemer

### Problem: "Cannot find name 'jest'"

**Symptomer:**
```typescript
Cannot find name 'jest'
Cannot find name 'expect'
```

**Løsning:**
```bash
# Installer TypeScript types
npm install --save-dev @types/jest @types/jest-axe
```

```json
// tsconfig.json - Tilføj jest types
{
  "compilerOptions": {
    "types": ["jest", "@testing-library/jest-dom"]
  }
}
```

### Problem: "Property does not exist on type"

**Symptomer:**
```typescript
Property 'toBeInTheDocument' does not exist on type 'Matchers<HTMLElement>'
```

**Løsning:**
```typescript
// jest.setup.js - Import jest-dom matchers
import '@testing-library/jest-dom'

// Eller i test fil
import '@testing-library/jest-dom/extend-expect'
```

### Problem: Mock type errors

**Symptomer:**
```typescript
Argument of type 'Mock<any, any>' is not assignable to parameter
```

**Løsning:**
```typescript
// Proper mock typing
const mockFunction = jest.fn() as jest.MockedFunction<typeof originalFunction>

// Eller brug jest.mocked
import { jest } from '@jest/globals'

const mockedFunction = jest.mocked(originalFunction)
```

## Next.js Specifikke Problemer

### Problem: "useRouter" mock fejl

**Symptomer:**
```bash
Error: useRouter() should be used inside <Router>
```

**Løsning:**
```javascript
// jest.setup.js - Mock Next.js router (allerede inkluderet)
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}))
```

### Problem: Next.js Image component fejl

**Symptomer:**
```bash
Error: Image with src "/test.jpg" must use "width" and "height" properties
```

**Løsning:**
```javascript
// jest.setup.js - Mock Next.js Image (allerede inkluderet)
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))
```

### Problem: "Cannot resolve module" for Next.js internals

**Symptomer:**
```bash
Cannot resolve module 'next/font/google'
```

**Løsning:**
```javascript
// jest.config.mjs - Mock Next.js modules
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
  '^next/font/(.*)$': '<rootDir>/__mocks__/next-font.js',
}
```

```javascript
// __mocks__/next-font.js
module.exports = {
  Inter: () => ({
    className: 'inter-font',
  }),
}
```

## Performance Problemer

### Problem: Tests kører langsomt

**Løsninger:**
```javascript
// 1. Brug --maxWorkers flag
"scripts": {
  "test": "jest --maxWorkers=4"
}

// 2. Optimér test setup
// Undgå tunge imports i test filer
// Brug lazy loading hvor muligt

// 3. Mock tunge dependencies
jest.mock('heavy-library', () => ({
  heavyFunction: jest.fn(() => 'mocked result')
}))
```

### Problem: Høj memory usage

**Løsninger:**
```javascript
// jest.config.mjs - Begræns memory usage
module.exports = {
  maxWorkers: '50%',
  workerIdleMemoryLimit: '512MB',
  
  // Clear mocks mellem tests
  clearMocks: true,
  restoreMocks: true,
}
```

## Debugging Tips

### 1. Debug Test Output

```javascript
// Se DOM output
import { screen } from '@testing-library/react'

it('debug test', () => {
  render(<MyComponent />)
  screen.debug() // Printer hele DOM
  screen.debug(screen.getByRole('button')) // Printer specifik element
})
```

### 2. Debug Queries

```javascript
// Se tilgængelige roller
import { logRoles } from '@testing-library/dom'

it('debug roles', () => {
  const { container } = render(<MyComponent />)
  logRoles(container)
})

// Se alle queries
screen.getByRole('button') // Fejler med liste af tilgængelige roller
```

### 3. Debug Async Operations

```javascript
// Brug waitFor med debug
await waitFor(() => {
  screen.debug()
  expect(screen.getByText('Loaded')).toBeInTheDocument()
})
```

### 4. Debug Jest Configuration

```bash
# Kør Jest med debug info
npm test -- --verbose --no-cache

# Se Jest config
npm test -- --showConfig
```

### 5. Debug Coverage Issues

```bash
# Kør coverage med detaljeret output
npm run test:coverage -- --verbose

# Se hvilke filer der ikke er dækket
npm run test:coverage -- --collectCoverageFrom="src/**/*.{ts,tsx}"
```

## Almindelige Kommandoer

```bash
# Kør tests med verbose output
npm test -- --verbose

# Kør kun ændrede filer
npm test -- --onlyChanged

# Kør specifik test fil
npm test MyComponent.test.tsx

# Kør tests med pattern
npm test -- --testNamePattern="should render"

# Update snapshots
npm test -- --updateSnapshot

# Kør uden cache
npm test -- --no-cache

# Watch mode med coverage
npm run test:watch -- --coverage
```

## Hjælp og Support

### Dokumentation
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Library Docs](https://testing-library.com/docs/)
- [Jest-Axe Documentation](https://github.com/nickcolley/jest-axe)

### Community
- [Stack Overflow](https://stackoverflow.com/questions/tagged/jest)
- [GitHub Issues](https://github.com/facebook/jest/issues)
- [Discord Communities](https://discord.gg/testing-library)

### Debugging Tools
- Chrome DevTools
- VS Code Jest Extension
- Jest Runner Extension

Hvis du støder på problemer der ikke er dækket her, tjek først:
1. Console output for specifikke fejlmeddelelser
2. Jest og Testing Library dokumentation
3. GitHub issues for lignende problemer
4. Stack Overflow for community løsninger