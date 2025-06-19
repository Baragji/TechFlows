# Accessibility Testing Guide

## 📋 Indholdsfortegnelse

1. [Introduktion til Accessibility](#introduktion-til-accessibility)
2. [WCAG Guidelines](#wcag-guidelines)
3. [Automated Testing](#automated-testing)
4. [Manual Testing](#manual-testing)
5. [Common Patterns](#common-patterns)
6. [Tools og Resources](#tools-og-resources)

## Introduktion til Accessibility

Accessibility (a11y) handler om at gøre webapplikationer tilgængelige for alle brugere, inklusiv dem med handicaps. Dette inkluderer:

- **Visuelle handicaps**: Blindhed, svagsynethed, farveblindhed
- **Auditive handicaps**: Døvhed, høretab
- **Motoriske handicaps**: Begrænsede bevægelser, tremor
- **Kognitive handicaps**: Dysleksi, ADHD, hukommelsesbesvær

## WCAG Guidelines

### WCAG 2.1 Principper

1. **Perceivable** (Opfattelig)
   - Information skal kunne opfattes af brugeren
   - Alt tekst for billeder
   - Tilstrækkelig farvekontrast
   - Skalerbar tekst

2. **Operable** (Betjenelig)
   - Interface skal kunne betjenes
   - Tastatur tilgængelighed
   - Ingen seizure-inducerende indhold
   - Navigerbar struktur

3. **Understandable** (Forståelig)
   - Information skal være forståelig
   - Læsbar tekst
   - Forudsigelig funktionalitet
   - Input assistance

4. **Robust** (Robust)
   - Indhold skal være robust nok til forskellige teknologier
   - Valid markup
   - Kompatibilitet med assistive teknologier

### Compliance Levels

- **Level A**: Minimum niveau
- **Level AA**: Standard niveau (anbefalet)
- **Level AAA**: Højeste niveau

## Automated Testing

### Jest-Axe Setup

```typescript
import { axe, toHaveNoViolations } from 'jest-axe'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Basic accessibility test
it('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### Custom Axe Rules

```typescript
// Test med specifikke regler
it('should pass color contrast checks', async () => {
  const { container } = render(<MyComponent />)
  const results = await axe(container, {
    rules: {
      'color-contrast': { enabled: true }
    }
  })
  expect(results).toHaveNoViolations()
})

// Disable specifikke regler
it('should pass accessibility except known issues', async () => {
  const { container } = render(<MyComponent />)
  const results = await axe(container, {
    rules: {
      'color-contrast': { enabled: false } // Midlertidig disable
    }
  })
  expect(results).toHaveNoViolations()
})
```

### Axe Tags

```typescript
// Test kun WCAG 2.1 AA regler
const results = await axe(container, {
  tags: ['wcag21aa']
})

// Test kun best practices
const results = await axe(container, {
  tags: ['best-practice']
})
```

## Manual Testing

### Keyboard Navigation

```typescript
// Test tab navigation
it('supports keyboard navigation', async () => {
  const user = userEvent.setup()
  render(<MyForm />)
  
  // Tab gennem elementer
  await user.tab()
  expect(screen.getByLabelText('Name')).toHaveFocus()
  
  await user.tab()
  expect(screen.getByLabelText('Email')).toHaveFocus()
  
  // Shift+Tab tilbage
  await user.tab({ shift: true })
  expect(screen.getByLabelText('Name')).toHaveFocus()
})

// Test Enter og Space keys
it('activates button with Enter and Space', async () => {
  const handleClick = jest.fn()
  const user = userEvent.setup()
  
  render(<button onClick={handleClick}>Click me</button>)
  
  const button = screen.getByRole('button')
  button.focus()
  
  await user.keyboard('{Enter}')
  expect(handleClick).toHaveBeenCalledTimes(1)
  
  await user.keyboard(' ') // Space
  expect(handleClick).toHaveBeenCalledTimes(2)
})
```

### Screen Reader Support

```typescript
// Test ARIA labels
it('provides proper ARIA labels', () => {
  render(<MyComponent />)
  
  const button = screen.getByRole('button', { name: 'Close dialog' })
  expect(button).toHaveAttribute('aria-label', 'Close dialog')
})

// Test live regions
it('announces status changes', () => {
  render(<MyComponent />)
  
  const status = screen.getByRole('status')
  expect(status).toHaveAttribute('aria-live', 'polite')
  expect(status).toHaveTextContent('Form submitted successfully')
})

// Test describedby relationships
it('associates help text with input', () => {
  render(<MyForm />)
  
  const input = screen.getByLabelText('Password')
  const helpText = screen.getByText('Must be at least 8 characters')
  
  expect(input).toHaveAttribute('aria-describedby', helpText.id)
})
```

### Focus Management

```typescript
// Test focus trap i modals
it('traps focus within modal', async () => {
  const user = userEvent.setup()
  render(<Modal isOpen={true} />)
  
  const firstButton = screen.getByRole('button', { name: 'Save' })
  const lastButton = screen.getByRole('button', { name: 'Cancel' })
  
  // Focus starter på første element
  expect(firstButton).toHaveFocus()
  
  // Tab til sidste element
  await user.tab()
  expect(lastButton).toHaveFocus()
  
  // Tab igen går tilbage til første
  await user.tab()
  expect(firstButton).toHaveFocus()
})

// Test focus restoration
it('restores focus when modal closes', async () => {
  const user = userEvent.setup()
  render(<PageWithModal />)
  
  const openButton = screen.getByRole('button', { name: 'Open Modal' })
  
  // Åbn modal
  await user.click(openButton)
  
  // Luk modal
  await user.keyboard('{Escape}')
  
  // Focus er tilbage på open button
  expect(openButton).toHaveFocus()
})
```

## Common Patterns

### Form Accessibility

```typescript
// Komplet form accessibility test
describe('Accessible Form', () => {
  it('has proper labels and associations', () => {
    render(<ContactForm />)
    
    // Alle inputs har labels
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    
    // Required fields er markeret
    const nameInput = screen.getByLabelText(/name/i)
    expect(nameInput).toHaveAttribute('required')
    expect(nameInput).toHaveAttribute('aria-required', 'true')
  })
  
  it('shows validation errors accessibly', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    // Submit uden at udfylde
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    
    // Error er associeret med input
    const nameInput = screen.getByLabelText(/name/i)
    const errorMessage = screen.getByText('Name is required')
    
    expect(nameInput).toHaveAttribute('aria-invalid', 'true')
    expect(nameInput).toHaveAttribute('aria-describedby', errorMessage.id)
  })
})
```

### Navigation Accessibility

```typescript
// Navigation landmarks
it('has proper navigation landmarks', () => {
  render(<MainNavigation />)
  
  const nav = screen.getByRole('navigation')
  expect(nav).toHaveAttribute('aria-label', 'Main navigation')
  
  // Skip link
  const skipLink = screen.getByText('Skip to main content')
  expect(skipLink).toHaveAttribute('href', '#main-content')
})

// Breadcrumb navigation
it('provides breadcrumb navigation', () => {
  render(<Breadcrumbs />)
  
  const nav = screen.getByRole('navigation', { name: 'Breadcrumb' })
  expect(nav).toHaveAttribute('aria-label', 'Breadcrumb')
  
  const list = within(nav).getByRole('list')
  const items = within(list).getAllByRole('listitem')
  
  // Sidste item er current page
  const currentPage = items[items.length - 1]
  expect(currentPage).toHaveAttribute('aria-current', 'page')
})
```

### Image Accessibility

```typescript
// Alt text testing
it('provides meaningful alt text for images', () => {
  render(<ProductCard product={mockProduct} />)
  
  const productImage = screen.getByAltText(`${mockProduct.name} product image`)
  expect(productImage).toBeInTheDocument()
  
  // Decorative images har tom alt
  const decorativeImage = screen.getByRole('img', { name: '' })
  expect(decorativeImage).toHaveAttribute('alt', '')
})

// Complex images
it('provides long descriptions for complex images', () => {
  render(<Chart data={chartData} />)
  
  const chart = screen.getByRole('img')
  expect(chart).toHaveAttribute('aria-describedby')
  
  const description = screen.getByText(/This chart shows/)
  expect(description).toBeInTheDocument()
})
```

## Tools og Resources

### Browser Extensions

1. **axe DevTools** - Automated accessibility testing
2. **WAVE** - Web accessibility evaluation
3. **Lighthouse** - Performance og accessibility audit
4. **Color Contrast Analyzer** - Kontrast checking

### Screen Readers

1. **NVDA** (Windows) - Gratis screen reader
2. **JAWS** (Windows) - Professionel screen reader
3. **VoiceOver** (macOS/iOS) - Built-in screen reader
4. **TalkBack** (Android) - Built-in screen reader

### Testing Commands

```bash
# Kør accessibility tests
npm run test:a11y

# Kør med coverage
npm run test:coverage

# Kør i watch mode
npm run test:watch
```

### Pa11y Configuration

```json
// .pa11yrc.json
{
  "standard": "WCAG2AA",
  "runners": ["axe", "htmlcs"],
  "includeNotices": true,
  "includeWarnings": true,
  "ignore": [
    "WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail"
  ]
}
```

### HTML Validation

```json
// .htmlvalidate.json
{
  "extends": ["html-validate:recommended"],
  "rules": {
    "missing-alt": "error",
    "empty-src": "error",
    "no-redundant-alt": "error"
  }
}
```

## Best Practices Checklist

### ✅ Grundlæggende
- [ ] Alle billeder har meningsfuld alt tekst
- [ ] Alle form inputs har labels
- [ ] Farvekontrast opfylder WCAG AA (4.5:1)
- [ ] Siden kan navigeres kun med tastatur
- [ ] Focus indicators er synlige

### ✅ Avanceret
- [ ] ARIA landmarks er korrekt implementeret
- [ ] Live regions annoncerer ændringer
- [ ] Focus management i dynamisk indhold
- [ ] Error messages er associeret med inputs
- [ ] Skip links er tilgængelige

### ✅ Testing
- [ ] Automated axe tests på alle komponenter
- [ ] Manual keyboard navigation tests
- [ ] Screen reader testing
- [ ] Mobile accessibility testing
- [ ] Performance impact af a11y features

## Troubleshooting

### Almindelige Problemer

1. **"Button not accessible by keyboard"**
   - Brug `<button>` i stedet for `<div onClick>`
   - Tilføj `tabIndex={0}` hvis nødvendigt

2. **"Missing form label"**
   - Brug `<label htmlFor="inputId">` eller `aria-label`
   - Associér labels korrekt med inputs

3. **"Insufficient color contrast"**
   - Test kontrast med online tools
   - Brug mørkere farver eller større tekst

4. **"Focus not visible"**
   - Tilføj synlige focus styles
   - Test med kun tastatur navigation

For mere detaljeret information, se [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) og [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility).