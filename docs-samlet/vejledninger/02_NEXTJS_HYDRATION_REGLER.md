# Next.js Hydration Regler og Best Practices

## 📋 Oversigt

Denne guide beskriver Next.js hydration-regler, almindelige fejl og løsninger baseret på officiel Next.js dokumentation og vores egne erfaringer fra projektet.

## ⚠️ Hvad er Hydration Mismatch?

**Text content does not match server-rendered HTML**

While rendering your application, there was a difference between the React tree that was pre-rendered from the server and the React tree that was rendered during the first render in the browser (hydration).

Hydration is when React converts the pre-rendered HTML from the server into a fully interactive application by attaching event handlers.

---

## 🐛 Almindelige Årsager til Hydration Fejl

### 1. Incorrect nesting of HTML tags
```html
<!-- ❌ Forkert HTML nesting -->
<p>
  <div>Content</div>  <!-- div kan ikke være i p -->
</p>

<p>
  <p>Content</p>      <!-- p kan ikke være i p -->
</p>

<p>
  <ul><li>Item</li></ul>  <!-- ul kan ikke være i p -->
</p>

<!-- ❌ Interactive Content nesting -->
<a href="#">
  <a href="#">Link i link</a>  <!-- a kan ikke være i a -->
</a>

<button>
  <button>Button i button</button>  <!-- button kan ikke være i button -->
</button>
```

```html
<!-- ✅ Korrekt HTML nesting -->
<div>
  <p>Content</p>
</div>

<div>
  <ul><li>Item</li></ul>
</div>

<div>
  <a href="#">Link</a>
  <a href="#">Andet link</a>
</div>
```

### 2. Browser-only API usage
```javascript
// ❌ Vil forårsage hydration mismatch
const width = window.innerWidth;
const item = localStorage.getItem('key');
const userAgent = navigator.userAgent;

// ❌ Conditional rendering baseret på browser APIs
return (
  <div>
    {typeof window !== 'undefined' && <BrowserComponent />}
  </div>
);
```

### 3. Time-dependent APIs
```javascript
// ❌ Vil forårsage hydration mismatch
const timestamp = new Date().toISOString();
const randomId = Math.random();
const currentTime = Date.now();

return <div>Generated at: {timestamp}</div>;
```

### 4. CSS-in-JS Libraries
```javascript
// ❌ Forkert konfiguration kan forårsage mismatch
const StyledComponent = styled.div`
  color: ${Math.random() > 0.5 ? 'red' : 'blue'};
`;
```

### 5. Browser Extensions
- Ad blockers
- Accessibility extensions
- Custom CSS injectors
- Developer tools modifications

### 6. CDN/Edge Configuration Issues
- Cloudflare Auto Minify
- HTML modifications ved edge-niveau
- Compression artifacts

---

## 💡 Løsningsstrategier

### Solution 1: useEffect for Client-Only Code

Ensure that the component renders the same content server-side as it does during the initial client-side render to prevent a hydration mismatch. You can intentionally render different content on the client with the useEffect hook.

```javascript
import { useState, useEffect } from 'react'

export default function ClientOnlyComponent() {
  const [isClient, setIsClient] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    setIsClient(true)
    setWindowWidth(window.innerWidth)
    setTimestamp(new Date().toISOString())
  }, [])

  if (!isClient) {
    return <div>Loading...</div>  // Server-side fallback
  }

  return (
    <div>
      <p>Window width: {windowWidth}px</p>
      <p>Generated at: {timestamp}</p>
    </div>
  )
}
```

**During React hydration, useEffect is called. This means browser APIs like window are available to use without hydration mismatches.**

### Solution 2: Disabling SSR on Specific Components

Next.js allows you to disable prerendering on specific components, which can prevent hydration mismatches.

```javascript
import dynamic from 'next/dynamic'

// Component der kun skal køre på client
const NoSSRComponent = dynamic(() => import('../components/no-ssr'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

const InteractiveChart = dynamic(() => import('../components/Chart'), {
  ssr: false,
  loading: () => <div>Loading chart...</div>
})

export default function Page() {
  return (
    <div>
      <h1>Server-rendered content</h1>
      <NoSSRComponent />
      <InteractiveChart />
    </div>
  )
}
```

### Solution 3: suppressHydrationWarning

Sometimes content will inevitably differ between the server and client, such as a timestamp. You can silence the hydration mismatch warning by adding `suppressHydrationWarning={true}` to the element.

```javascript
export default function TimestampComponent() {
  return (
    <div>
      <p>Static content</p>
      <time
        dateTime="2025-06-01"
        suppressHydrationWarning
      >
        {new Date().toLocaleString()}
      </time>
    </div>
  )
}
```

**Good to know:**
- This only works one level deep, and is intended to be an escape hatch. Don't overuse it.
- React will not attempt to patch mismatched text content when `suppressHydrationWarning={true}` is set.

---

## 📱 Common iOS Issues

iOS attempts to detect phone numbers, email addresses, and other data in text content and convert them into links, leading to hydration mismatches.

This can be disabled with the following meta tag:

```html
<meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"
/>
```

I Next.js kan du tilføje dette i `app/layout.tsx`:

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  other: {
    'format-detection': 'telephone=no, date=no, email=no, address=no'
  }
}
```

---

## 🎯 Best Practices for Hydration

### 1. Consistent Server/Client Rendering

```javascript
// ✅ Korrekt pattern
const MyComponent = ({ initialData }) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    // Client-side updates efter hydration
    fetchUpdatedData().then(setData)
  }, [])

  return <div>{data.title}</div>
}
```

### 2. Proper HTML Structure

```javascript
// ✅ Valid HTML nesting
const ValidComponent = () => (
  <article>
    <header>
      <h1>Title</h1>
      <nav>
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
      </nav>
    </header>
    <section id="section1">
      <p>Content here</p>
    </section>
  </article>
)
```

### 3. Conditional Client-Side Features

```javascript
// ✅ Pattern for browser-specific features
const BrowserFeatureComponent = () => {
  const [hasBrowserFeature, setHasBrowserFeature] = useState(false)

  useEffect(() => {
    setHasBrowserFeature('geolocation' in navigator)
  }, [])

  return (
    <div>
      <p>Location feature: {hasBrowserFeature ? 'Available' : 'Not available'}</p>
    </div>
  )
}
```

### 4. Deterministic Content Generation

```javascript
// ✅ Brug props i stedet for tilfældige værdier
const CardComponent = ({ seed, timestamp }) => {
  const cardId = `card-${seed}` // Deterministisk ID

  return (
    <div id={cardId}>
      <time dateTime={timestamp}>
        {new Date(timestamp).toLocaleDateString()}
      </time>
    </div>
  )
}

// Server-side eller getServerSideProps
export async function getServerSideProps() {
  return {
    props: {
      seed: 'consistent-seed-value',
      timestamp: new Date().toISOString()
    }
  }
}
```

---

## 🔧 Debugging Hydration Issues

### 1. React Developer Tools

```javascript
// Aktivér strict mode for bedre fejlrapportering
export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  )
}
```

### 2. Console Debugging

```javascript
const DebuggingComponent = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    console.log('Client-side mount')
    setIsClient(true)
  }, [])

  console.log('Render phase:', { isServer: !isClient, isClient })

  return <div>Debug info in console</div>
}
```

### 3. Temporary Debugging with suppressHydrationWarning

```javascript
// Kun til debugging - fjern i production
const DebugComponent = () => (
  <div suppressHydrationWarning>
    <p>Server time: {new Date().toISOString()}</p>
  </div>
)
```

---

## 🚨 Common Pitfalls og Hvordan du Undgår Dem

### 1. Date/Time Rendering

```javascript
// ❌ Vil altid forårsage mismatch
const BadTimeComponent = () => (
  <p>Current time: {new Date().toLocaleString()}</p>
)

// ✅ Korrekt approach
const GoodTimeComponent = ({ serverTime }) => {
  const [clientTime, setClientTime] = useState(serverTime)

  useEffect(() => {
    const interval = setInterval(() => {
      setClientTime(new Date().toISOString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <p>Current time: {new Date(clientTime).toLocaleString()}</p>
}
```

### 2. Random Content Generation

```javascript
// ❌ Vil forårsage mismatch
const BadRandomComponent = () => (
  <div className={`color-${Math.floor(Math.random() * 10)}`}>
    Random content
  </div>
)

// ✅ Deterministisk på server, random på client
const GoodRandomComponent = ({ initialSeed }) => {
  const [seed, setSeed] = useState(initialSeed)

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10))
  }, [])

  return (
    <div className={`color-${seed}`}>
      Random content
    </div>
  )
}
```

### 3. Browser API Usage

```javascript
// ❌ Direkte browser API brug
const BadBrowserComponent = () => {
  const isOnline = navigator.onLine

  return <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
}

// ✅ useEffect for browser APIs
const GoodBrowserComponent = () => {
  const [isOnline, setIsOnline] = useState(true) // Safe default

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine)

    updateOnlineStatus() // Initial check
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [])

  return <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
}
```

---

## 🎯 Testing Hydration

### 1. Test Both Server and Client Rendering

```javascript
// __tests__/hydration.test.tsx
import { render, hydrate } from '@testing-library/react'
import { renderToString } from 'react-dom/server'

test('component hydrates without mismatch', () => {
  const Component = () => <div>Test content</div>

  // Simulate server rendering
  const serverHTML = renderToString(<Component />)

  // Create container with server HTML
  const container = document.createElement('div')
  container.innerHTML = serverHTML

  // Hydrate should not throw
  expect(() => {
    hydrate(<Component />, container)
  }).not.toThrow()
})
```

### 2. ESLint Rules for Hydration

```javascript
// eslint.config.mjs
export default [
  {
    rules: {
      // Advar om potentielle hydration problemer
      'react/no-unescaped-entities': 'error',
      'jsx-a11y/no-invalid-html-nesting': 'error',
    }
  }
]
```

---

## 📖 Sammenfatning

### Key Takeaways

1. **Consistency is key** - Server og client skal render identisk HTML
2. **Use useEffect for browser APIs** - Aldrig direkte browser API brug i render
3. **Avoid time-dependent content** - Brug props eller useState + useEffect
4. **Proper HTML nesting** - Følg HTML5 specifikationer
5. **Test hydration** - Brug både server og client rendering tests

### Quick Checklist

- [ ] Ingen browser APIs i render logic
- [ ] Ingen `Math.random()` eller `Date()` i render
- [ ] Korrekt HTML nesting struktur
- [ ] `useEffect` for client-side kode
- [ ] `suppressHydrationWarning` kun som sidste udvej
- [ ] Test både server og client rendering

---

**Kilder:**
- [Next.js Hydration Documentation](https://nextjs.org/docs/messages/react-hydration-error)
- [React Hydration Patterns](https://react.dev/reference/react-dom/hydrate)
- TechFlow Project Fixes (Juni 2025)

**Status**: ✅ Tested and Verified
**Last Updated**: Juni 2025
