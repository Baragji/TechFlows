# 🔍 Modern Hydration Detection Setup - TechFlow Solutions

Dette projekt er nu udstyret med et **moderne ESLint v9 kompatibelt** hydration-detektionssystem, der giver dig statisk analyse og fanger hydration-fejl før de når production.

## 🚀 Hvad er installeret

### 1. ESLint v9 Flat Config Setup
- **Modern flat-config** (`eslint.config.js`) - Kompatibel med ESLint v9
- **Next.js plugin** - Fanger SSR-specifikke fejl
- **React plugins** - React og React Hooks regler
- **Custom hydration rules** - Specifikke regler for hydration-fejl

### 2. Hydration-Specifikke Regler
- **DOM globals warning** - Advarer om direkte `window`/`document` brug
- **Non-deterministic values** - Fanger `Math.random()`, `Date.now()`, `new Date()`
- **React SSR rules** - Fanger almindelige React hydration-fejl
- **Next.js SSR rules** - Next.js specifikke hydration-problemer

## 📋 Tilgængelige Kommandoer

```bash
# Standard linting med hydration regler (strenge - ingen warnings tilladt)
npm run lint

# Generer HTML-rapport med alle hydration-fejl
npm run lint:report

# Kør hydration checks (samme som lint)
npm run lint:hydration

# Auto-fix fixable issues
npm run lint:fix

# Build med strenge linting regler
npm run build
```

## 🔧 Sådan bruger du systemet

### 1. Live Fejlmarkering i VS Code
- Installer **ESLint extension** i VS Code
- Fejl vises automatisk med røde understregninger
- Hover over fejl for at se forklaringer og løsninger

### 2. HTML Rapport Generation
```bash
npm run lint:report
```
- Åbner `hydration-report.html` i din browser
- Viser alle hydration-relaterede fejl organiseret efter fil
- Klik på fejl for at se kode-kontekst og løsningsforslag

### 3. Command Line Output
```bash
npm run lint
```
- Viser fejl direkte i terminalen
- Farvekodet output for hurtig identifikation
- Tæller errors vs warnings

## ⚠️ Hydration Regler der Fanges

### 1. DOM Globals (Warning)
```javascript
// ❌ Vil give warning
const width = window.innerWidth;
const item = localStorage.getItem('key');
document.getElementById('test');

// ✅ Korrekt måde
useEffect(() => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const item = localStorage.getItem('key');
  }
}, []);
```

### 2. Non-deterministic Values (Warning)
```javascript
// ❌ Vil give warning
const randomId = Math.random();
const timestamp = new Date();
const now = Date.now();

// ✅ Korrekt måde
const [randomId, setRandomId] = useState(null);
const [timestamp, setTimestamp] = useState('');

useEffect(() => {
  setRandomId(Math.random());
  setTimestamp(new Date().toISOString());
}, []);
```

### 3. React SSR Rules (Error)
```javascript
// ❌ Vil give fejl
{items.map(item => <div>{item.name}</div>)} // Mangler key

// ❌ Vil give fejl
<p><div>Content</div></p> // Forkert HTML nesting

// ✅ Korrekt måde
{items.map(item => <div key={item.id}>{item.name}</div>)}
<div><p>Content</p></div>
```

### 4. Next.js SSR Rules (Error)
```javascript
// ❌ Vil give fejl
<img src="/image.jpg" alt="Image" /> // Brug Next.js Image

// ❌ Vil give fejl
<head><title>Title</title></head> // Brug Next.js Head

// ✅ Korrekt måde
import Image from 'next/image';
import Head from 'next/head';

<Image src="/image.jpg" alt="Image" width={100} height={100} />
<Head><title>Title</title></Head>
```

## 🛠️ Fejlfinding Workflow

### 1. Udvikling
1. Skriv kode i VS Code
2. Se fejl live med røde understregninger
3. Læs ESLint beskeder for løsningsforslag
4. Fix fejl baseret på hydration best practices

### 2. Pre-commit
```bash
npm run lint
```
- Kør før commit for at fange hydration-fejl
- **Ingen warnings tilladt** i production build
- Automatisk fejl-rapportering

### 3. CI/CD Integration
```bash
npm run lint:report
```
- Generer rapport i CI pipeline
- Arkiver HTML-rapport som build artifact
- Fail build ved hydration-fejl

## 📊 Rapporttyper

### 1. Console Output
```bash
npm run lint
```
- Hurtig oversigt i terminal
- Viser fejl-count og placering
- Farvekodet for hurtig identifikation

### 2. HTML Rapport
```bash
npm run lint:report
```
- Detaljeret visuel rapport i browser
- Klik-bar navigation mellem fejl
- Kode-highlighting med kontekst
- Løsningsforslag for hver fejl-type

### 3. VS Code Integration
- Live fejlmarkering under kodning
- Quick fixes hvor muligt
- Integrated med Git workflow
- Hover tooltips med forklaringer

## 🎯 Best Practices for Hydration

### 1. Client-Side Only Code
```javascript
// Pattern 1: useEffect
useEffect(() => {
  // Browser-only kode her
  const width = window.innerWidth;
  setWidth(width);
}, []);

// Pattern 2: Conditional rendering
const [isClient, setIsClient] = useState(false);
useEffect(() => setIsClient(true), []);

return isClient ? <ClientComponent /> : <ServerComponent />;

// Pattern 3: Dynamic import med ssr: false
const NoSSRComponent = dynamic(() => import('./Component'), {
  ssr: false
});
```

### 2. Deterministic Rendering
```javascript
// Brug props eller state i stedet for tilfældige værdier
const Component = ({ timestamp, randomSeed }) => {
  return <div data-timestamp={timestamp}>{content}</div>;
};

// Eller flyt til useEffect
const [clientData, setClientData] = useState(null);
useEffect(() => {
  setClientData({
    timestamp: Date.now(),
    random: Math.random()
  });
}, []);
```

### 3. Proper HTML Structure
```javascript
// Følg HTML5 nesting regler
const ValidStructure = () => (
  <article>
    <header>
      <h1>Title</h1>
    </header>
    <section>
      <p>Content</p>
    </section>
  </article>
);
```

## 🔍 Debugging Tips

### 1. ESLint Output Analysis
- **Errors** = Må fixes før build
- **Warnings** = Potentielle hydration-problemer
- **Line numbers** = Præcis placering af problemet

### 2. Console Debugging
```javascript
// Debug hydration i useEffect
useEffect(() => {
  console.log('Client-side render:', someValue);
}, []);

// Debug server vs client forskelle
if (typeof window !== 'undefined') {
  console.log('Client:', clientValue);
} else {
  console.log('Server:', serverValue);
}
```

### 3. Conditional Rendering for Debugging
```javascript
// Temporarily disable SSR for debugging
const NoSSRComponent = dynamic(() => import('./Component'), {
  ssr: false
});

// Or use suppressHydrationWarning temporarily (not recommended for production)
<div suppressHydrationWarning>
  {/* Problematic content */}
</div>
```

## 📈 Monitoring og Metrics

### Development
- ESLint warnings i VS Code
- Console errors i browser DevTools
- Build-time fejl-rapportering

### Production
- Error boundaries fanger hydration fejl
- Performance monitoring tracker hydration tid
- User experience metrics for layout shifts

## 🚨 Almindelige Fejl og Løsninger

### 1. "window is not defined"
```javascript
// ❌ Problem
const width = window.innerWidth;

// ✅ Løsning
const [width, setWidth] = useState(0);
useEffect(() => {
  setWidth(window.innerWidth);
}, []);
```

### 2. "Text content does not match"
```javascript
// ❌ Problem
<div>{new Date().toLocaleString()}</div>

// ✅ Løsning
const [dateString, setDateString] = useState('');
useEffect(() => {
  setDateString(new Date().toLocaleString());
}, []);
return <div>{dateString || 'Loading...'}</div>;
```

### 3. "Invalid HTML nesting"
```javascript
// ❌ Problem
<p><div>Content</div></p>

// ✅ Løsning
<div><p>Content</p></div>
```

### 4. "Math.random() hydration mismatch"
```javascript
// ❌ Problem
const id = `item-${Math.random()}`;

// ✅ Løsning
const [id, setId] = useState('');
useEffect(() => {
  setId(`item-${Math.random()}`);
}, []);
```

## 🎉 Resultat

Med dette moderne setup får du:
- ✅ **ESLint v9 kompatibilitet** - Fremtidssikret
- ✅ **Live fejldetektering** i VS Code
- ✅ **Detaljerede HTML-rapporter** 
- ✅ **Automatisk fejlfinding** i CI/CD
- ✅ **Best practice enforcement**
- ✅ **Ingen forældede dependencies**

Dit projekt er nu fuldt udstyret med moderne hydration-fejl detection! 🚀

## 🔧 Tekniske Detaljer

### ESLint Configuration
- **Flat config** (`eslint.config.js`) - Moderne ESLint v9 format
- **Plugin kompatibilitet** - Kun plugins der virker med ESLint v9
- **Custom rules** - Specifikke hydration-regler
- **Ignore patterns** - Udelukker build-filer og node_modules

### Removed Problematic Packages
- ❌ `eslint-plugin-react-ssr` - Forældet (2017), ikke kompatibel med ESLint v9
- ❌ `@builder.io/react-hydration-overlay` - Ikke kompatibel med React 19
- ❌ `eslint-plugin-ssr-friendly` - API-inkompatibilitet med ESLint v9

### Working Modern Stack
- ✅ ESLint v9 med flat config
- ✅ Next.js 15 med React 19
- ✅ TypeScript support
- ✅ Custom hydration rules
- ✅ HTML rapport generation