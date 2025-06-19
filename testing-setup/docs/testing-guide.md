# Komplet Testing Guide

## 📋 Indholdsfortegnelse

1. [Grundlæggende Testing](#grundlæggende-testing)
2. [Component Testing](#component-testing)
3. [Accessibility Testing](#accessibility-testing)
4. [Mocking Strategies](#mocking-strategies)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

## Grundlæggende Testing

### Test Struktur

Alle tests følger AAA-mønsteret:
- **Arrange**: Opsæt test data og komponenter
- **Act**: Udfør handlinger
- **Assert**: Verificér resultater

```typescript
describe('ComponentName', () => {
  it('should do something specific', () => {
    // Arrange
    const props = { title: 'Test Title' }
    
    // Act
    render(<ComponentName {...props} />)
    
    // Assert
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})
```

### Test Kategorier

1. **Unit Tests**: Test individuelle komponenter isoleret
2. **Integration Tests**: Test komponent interaktioner
3. **Accessibility Tests**: Test WCAG compliance
4. **Visual Tests**: Test UI rendering

## Component Testing

### Rendering Tests

```typescript
// Basic rendering
it('renders without crashing', () => {
  render(<MyComponent />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

// Conditional rendering
it('shows loading state when loading', () => {
  render(<MyComponent loading={true} />)
  expect(screen.getByText('Loading...')).toBeInTheDocument()
})
```

### Props Testing

```typescript
// Required props
it('displays title from props', () => {
  const title = 'Test Title'
  render(<MyComponent title={title} />)
  expect(screen.getByText(title)).toBeInTheDocument()
})

// Optional props with defaults
it('uses default value when prop not provided', () => {
  render(<MyComponent />)
  expect(screen.getByText('Default Title')).toBeInTheDocument()
})
```

### Event Testing

```typescript
// User interactions
it('calls onClick when button is clicked', async () => {
  const handleClick = jest.fn()
  const user = userEvent.setup()
  
  render(<MyComponent onClick={handleClick} />)
  
  await user.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

// Form submissions
it('submits form with correct data', async () => {
  const handleSubmit = jest.fn()
  const user = userEvent.setup()
  
  render(<MyForm onSubmit={handleSubmit} />)
  
  await user.type(screen.getByLabelText('Name'), 'John Doe')
  await user.click(screen.getByRole('button', { name: 'Submit' }))
  
  expect(handleSubmit).toHaveBeenCalledWith({ name: 'John Doe' })
})
```

## Accessibility Testing

### Automated A11y Tests

```typescript
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

it('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### Manual A11y Tests

```typescript
// ARIA attributes
it('has proper ARIA labels', () => {
  render(<MyComponent />)
  
  const button = screen.getByRole('button')
  expect(button).toHaveAttribute('aria-label', 'Close dialog')
})

// Keyboard navigation
it('supports keyboard navigation', async () => {
  const user = userEvent.setup()
  render(<MyComponent />)
  
  await user.tab()
  expect(screen.getByRole('button')).toHaveFocus()
})

// Screen reader support
it('provides screen reader announcements', () => {
  render(<MyComponent />)
  
  expect(screen.getByRole('status')).toHaveTextContent('Form submitted successfully')
})
```

### Common A11y Patterns

1. **Semantic HTML**: Brug korrekte HTML elementer
2. **ARIA Labels**: Tilføj beskrivende labels
3. **Focus Management**: Håndter fokus korrekt
4. **Color Contrast**: Test kontrast forhold
5. **Keyboard Support**: Understøt tastatur navigation

## Mocking Strategies

### Next.js Mocks

```typescript
// Router mock
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
  usePathname: () => '/current-path',
}))

// Image mock
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}))
```

### API Mocks

```typescript
// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'test' }),
  })
) as jest.Mock

// Mock external libraries
jest.mock('some-library', () => ({
  someFunction: jest.fn(() => 'mocked result'),
}))
```

### Data Mocks

```typescript
// Mock data modules
jest.mock('@/data/events', () => ({
  events: [
    { id: '1', title: 'Test Event', date: '2024-01-01' }
  ]
}))
```

## Best Practices

### 1. Test Naming

```typescript
// ✅ Good: Beskrivende og specifik
it('displays error message when form validation fails', () => {})

// ❌ Bad: Vag og uspecifik
it('works correctly', () => {})
```

### 2. Test Organization

```typescript
describe('MyComponent', () => {
  describe('when loading', () => {
    it('shows loading spinner', () => {})
    it('disables form inputs', () => {})
  })
  
  describe('when loaded', () => {
    it('displays content', () => {})
    it('enables form inputs', () => {})
  })
})
```

### 3. Setup og Cleanup

```typescript
describe('MyComponent', () => {
  beforeEach(() => {
    // Setup før hver test
    jest.clearAllMocks()
  })
  
  afterEach(() => {
    // Cleanup efter hver test
    cleanup()
  })
})
```

### 4. Custom Render Function

```typescript
// utils/test-utils.tsx
const customRender = (ui, options = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <Router>
        {children}
      </Router>
    </ThemeProvider>
  )
  
  return render(ui, { wrapper: Wrapper, ...options })
}

export { customRender as render }
```

## Troubleshooting

### Almindelige Fejl

#### 1. "Cannot find module" fejl
```bash
# Løsning: Tjek moduleNameMapper i jest.config.mjs
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
}
```

#### 2. "TextEncoder is not defined"
```javascript
// Tilføj til jest.setup.js
import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
```

#### 3. "window.matchMedia is not a function"
```javascript
// Allerede inkluderet i jest.setup.js
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    // ... andre properties
  })),
})
```

### Debug Tips

1. **Brug screen.debug()** til at se DOM output
2. **Brug logRoles()** til at se tilgængelige roller
3. **Brug waitFor()** til async operationer
4. **Tjek console output** for warnings

### Performance Tips

1. **Brug describe.skip()** til at springe tests over midlertidigt
2. **Brug it.only()** til at køre kun én test
3. **Mock tunge dependencies** for hurtigere tests
4. **Brug shallow rendering** når det er passende

## Eksempel Test Suite

Se `templates/example.test.tsx` for et komplet eksempel på en test suite der dækker:
- Basic rendering
- Props testing
- Event handling
- Accessibility testing
- Error states
- Edge cases