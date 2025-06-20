# Debugging Guide for TechFlow Next.js - Komplet Guide

Denne guide viser dig hvordan du kan debugge din Next.js applikation på forskellige måder.

## 🚀 Hurtig Start

### 1. Server-side Debugging med Browser DevTools

```bash
# Start development server med debugging
npm run dev:debug
```

Dette starter serveren med `--inspect` flag. Du vil se output som:
```
Debugger listening on ws://127.0.0.1:9229/...
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

**Chrome:**
1. Åbn Chrome og gå til `chrome://inspect`
2. Klik "Open dedicated DevTools for Node"
3. Sæt breakpoints i din server-side kode

**Firefox:**
1. Åbn Firefox og gå til `about:debugging`
2. Klik "This Firefox" i venstre sidebar
3. Find din Next.js applikation under "Remote Targets"
4. Klik "Inspect" for at åbne debugger
5. Gå til "Debugger" tab

### 2. VS Code Debugging

#### Setup:
1. Åbn VS Code i dit projekt
2. Gå til Debug panel (`Ctrl+Shift+D` på Windows/Linux, `⇧+⌘+D` på macOS)
3. Vælg en af følgende konfigurationer:

#### Tilgængelige Konfigurationer:

- **"Next.js: debug server-side"** - Debug kun server-side kode
- **"Next.js: debug client-side"** - Debug kun client-side kode i Chrome
- **"Next.js: debug full stack"** - Debug både server og client samtidig

#### Sådan bruges det:
1. Sæt breakpoints i din kode
2. Vælg ønsket debug konfiguration
3. Tryk `F5` eller klik "Start Debugging"

### 3. NPM Scripts til Debugging

```bash
# Development debugging
npm run dev:debug          # Normal debugging
npm run dev:debug-brk      # Break før kode starter

# Build debugging
npm run build:debug        # Debug build processen
npm run build:memory-debug # Memory usage debugging

# Production debugging
npm run start:debug        # Debug production server
```

## 🔍 Debugging Teknikker

### Client-side Debugging

1. **Browser DevTools:**
   - Åbn DevTools (`F12`)
   - Gå til Sources tab
   - Find dine filer under `webpack://_N_E/./`
   - Sæt breakpoints

2. **Console Debugging:**
   ```javascript
   console.log('Debug info:', data);
   console.error('Error:', error);
   console.table(arrayData);
   ```

### Server-side Debugging

1. **Console Logging:**
   ```javascript
   console.log('Server debug:', data);
   ```

2. **Breakpoints:**
   - Sæt breakpoints i VS Code eller browser DevTools
   - Brug `debugger;` statements i koden

### Memory Debugging

```bash
# Kør build med memory debugging
npm run build:memory-debug
```

Dette viser:
- Heap usage
- Garbage collection statistikker
- Automatiske heap snapshots

## 🛠️ Avancerede Debugging Teknikker

### 1. Network Debugging

```javascript
// I next.config.ts
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

### 2. Performance Debugging

```bash
# Kør performance audit
npm run audit:performance

# Lighthouse test
npm run lighthouse
```

### 3. Production Debugging

```bash
# Build og test production lokalt
npm run build
npm run start:debug
```

### 4. ISR Cache Debugging

Tilføj til `.env.local`:
```
NEXT_PRIVATE_DEBUG_CACHE=1
```

## 🚨 Troubleshooting

### Windows Brugere

Hvis `NODE_OPTIONS='--inspect'` ikke virker på Windows:

```bash
# Installer cross-env
npm install --save-dev cross-env

# Opdater scripts i package.json
"dev:debug": "cross-env NODE_OPTIONS='--inspect' next dev --turbopack"
```

### Port Konflikter

Hvis port 9229 er optaget:
```bash
NODE_OPTIONS='--inspect=9230' npm run dev
```

### Docker Debugging

For remote debugging i Docker:
```bash
NODE_OPTIONS='--inspect=0.0.0.0:9229' npm run dev
```

## 📝 Tips og Tricks

1. **Conditional Breakpoints:** Højreklik på breakpoint for betingelser
2. **Watch Variables:** Tilføj variabler til watch panel
3. **Call Stack:** Undersøg call stack for at forstå flow
4. **Source Maps:** Sørg for at source maps er aktiveret
5. **Hot Reload:** Debugging virker med hot reload

## 🔗 Nyttige Links

- [Next.js Debugging Docs](https://nextjs.org/docs/app/guides/debugging)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [VS Code Debugging](https://code.visualstudio.com/docs/editor/debugging)
- [Node.js Inspector](https://nodejs.org/en/docs/inspector/)

---

**Pro Tip:** Start altid med `npm run dev:debug` for den bedste debugging oplevelse! 🎯
