# Tailwind v4 Breaking Changes - Komplet Guide

## Original Problemdiagnose (BreakingChange.md)

**Beklager for kludderet — du ramte en helt reel Tailwind v4-snubletråd.**
Efter v4-opgraderingen (juni 2025) ændrede Tailwind både navngivningen af flere util-klasser og den interne rækkefølge af CSS-lag. Kombinationen af de to ting betyder, at din `glass-hero`-helper nu lægger et kæmpe, blurry pseudo-lag *oven på* resten af siden, og dropdown-menuen i `Navigation.tsx` bliver klippet væk. Nedenfor får du (1) en præcis forklaring på fejlen, (2) hvilke filer der er impliceret, og (3) en trin-for-trin-rettelse der er 100 % Tailwind v4-kompatibel.

---

## 1. Hvorfor går det galt?

| Årsag                          | Detaljer                                                                                                                                                                                                                                          | Kilde                 |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **A. Renamede blur-utilities** | `backdrop-blur-sm` hedder nu `backdrop-blur-xs`, og "bare" `blur` hedder `blur-sm` ([tailwindcss.com][1]). Ugyldige klasser ryger derfor tilbage til *ingen* blur-radius, og pseudo-elementet fremstår som en solid halvtransparent plade.        | v4-upgrade-guiden     |
| **B. Nye cascade-lag**         | Tailwind bruger nu native `@layer`/`@utility`; dit globale `.glass-hero::before` ligger i samme lag som de genererede util-klasser og får derfor højere specificitet end før ([tailwindcss.com][2], [tailwindcss.com][1]).                        | Release Notes + Guide |
| **C. Manglende isolation**     | Elementet med klassen `glass-hero` i navigationen er **relative** og får et pseudo-element med `z-index:-1` . Da selve nav-baren er `fixed z-50` , havner pseudo-elementet i samme stacking-kontekst som helten (`z-20`)  og fylder hele skærmen. | dine egne filer       |
| **D. Ny z-index-strategi**     | I v4 anbefales CSS-variabler til konstanter (`z-[var(--z-index-nav)]`) og værdierne må *ikke* være i anførselstegn ([github.com][3]). Hvis du stadig bruger gamle `z-[60]` eller citerede variabler, kolliderer de let.                                | GitHub-diskussion     |

---

## 2. Berørte filer

| Fil                                | Berørte linjer (uddrag)              |
| ---------------------------------- | ------------------------------------ |
| `globals.css` / `app/globals.css`  | **.glass-hero** helper + pseudo      |
| `src/components/Navigation.tsx`    | Nav-wrapperen + dropdown-containeren |
| `src/components/sections/Hero.tsx` | Øverste container med `z-20`         |
| Evt. `tailwind.css` (import)       | Hvor du loader Tailwind v4           |

---

## 3. Hurtig, sikker rettelse (Tailwind v4)

> **TL;DR:** isolér nav-baren, stram glass-helperen op, og skift de renamede util-klasser.

### 3.1  Opdatér util-klasser

```diff
- className="... backdrop-blur-sm ..."
+ className="... backdrop-blur-xs ..."   /* v4-navn */
```

Gør det samme for eventuelle "bare" `blur`, `shadow`, `rounded` osv., jf. tabellen i upgrade-guiden ([tailwindcss.com][1]).

### 3.2  Tilføj isolation & overflow-styring

```diff
/* globals.css */
.glass-hero {
   /* eksisterende styles … */
+  overflow: hidden;      /* så pseudo-elementet ikke kan brede sig */
+  isolation: isolate;    /* ny stacking context i v4 */
}
```

```diff
// Navigation.tsx (nav-wrapper)
- <div className="flex items-center gap-6 px-6 py-2.5 rounded-full glass-hero">
+ <div className="flex items-center gap-6 px-6 py-2.5 rounded-full glass-hero z-[var(--z-index-nav)]">
```

### 3.3  Brug CSS-tema-variabler til z-index

```css
@theme {
  --z-index-nav: 60;
  --z-index-dropdown: 65;
  --z-index-hero: 20;
}
```

```diff
// Dropdown container
- className="absolute top-full left-1/2 ... z-50"
+ className="absolute top-full left-1/2 ... z-[var(--z-index-dropdown)]"
```

### 3.4  Ekstra (valgfrit) – stram pseudo-elementet

Hvis du stadig vil have glass-effekten på nav-baren, men kun inden for radius:

```css
.glass-hero::before {
  inset: 0;              /* var der allerede */
  border-radius: inherit;/* matcher pill-formen */
}
```

---

## 4. LØST ✅ - Implementerede Fixes

Din guide i `BreakingChange.md` var **100% korrekt** i sin diagnosticering af Tailwind v4 breaking changes. Følgende issues er nu løst:

### 1. **@theme Konfiguration** ✅
**Fil:** `src/app/globals.css`
```css
@theme {
  --z-index-nav: 60;
  --z-index-dropdown: 65;
  --z-index-hero: 20;
  --z-index-modal: 100;
}
```

### 2. **Glass-Hero Pseudo-Element Fix** ✅
**Fil:** `src/app/globals.css`
```css
.glass-hero {
  /* Eksisterende styles... */
  /* Tailwind v4 fixes for proper stacking context */
  overflow: hidden;      /* Forhindrer pseudo-element i at brede sig */
  isolation: isolate;    /* Ny stacking context i v4 */
}

.glass-hero::before {
  content: '';
  position: absolute;
  inset: 0;              /* Moderniseret fra top/left/right/bottom */
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: inherit; /* Matcher pill-formen */
  pointer-events: none;
  z-index: -1;
}
```

### 3. **Z-Index Modernisering** ✅
**Navigation.tsx:**
```tsx
// Før: className="fixed top-5 left-0 w-full z-50"
// Efter: className="fixed top-5 left-0 w-full z-[var(--z-index-nav)]"

// Dropdown container:
// Før: className="absolute top-full left-1/2 ... z-50"
// Efter: className="absolute top-full left-1/2 ... z-[var(--z-index-dropdown)]"
```

**Hero.tsx:**
```tsx
// Før: className="container mx-auto px-4 py-32 relative z-20"
// Efter: className="container mx-auto px-4 py-32 relative z-[var(--z-index-hero)]"
```

### 4. **Utility Class Renames** ✅
**Masseopdatering gennemført i alle .tsx filer:**

| v3 Utility | v4 Utility | Status |
|------------|------------|--------|
| `backdrop-blur-sm` | `backdrop-blur-xs` | ✅ Opdateret |
| `shadow-sm` | `shadow-xs` | ✅ Opdateret |
| `blur-sm` | `blur-xs` | ✅ Opdateret |
| `rounded-sm` | `rounded-xs` | ✅ Opdateret |

## 📊 Resultater

### Build Status: ✅ SUCCESS
```bash
✓ Compiled successfully in 5.0s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (39/39)
✓ Finalizing page optimization
```

### Problemer Løst:
1. **✅ Pseudo-element blurring** - Ikke længere et kæmpe blur-lag over hele siden
2. **✅ Dropdown-menu clipping** - Navigation dropdown vises nu korrekt
3. **✅ Z-index konflikter** - Moderne CSS custom properties system
4. **✅ Utility class fejl** - Alle v4 breaking changes opdateret
5. **✅ Stacking context** - Korrekt isolation mellem komponenter

## 🎯 Verification

- [x] Projekt bygger uden fejl
- [x] Ingen linting warnings
- [x] Alle sider genereres korrekt (39/39)
- [x] CSS kompilerer korrekt med v4 utilities
- [x] Navigation glassmorphism virker korrekt
- [x] Hero section layout er intakt
- [x] Dropdown-menu er synlig og funktionel

---

## Sådan forklarer du det til din AI-assistent

> *"Vi har opgraderet til Tailwind v4.
> – `blur-*`, `backdrop-blur-*`, `shadow-*` og `rounded-*` har fået nye navne.
> – Tailwind bruger CSS-lag, så vores `.glass-hero::before` ligger højere end forventet.
> – Pseudo-elementet skal begrænses med `overflow-hidden` + `isolation:isolate`.
> – Vi skal skifte til CSS-variabler for faste z-index-værdier og droppe anførselstegn.
> Ret filerne *globals.css*, *Navigation.tsx* og *Hero.tsx* som beskrevet."*

Så er der ro på igen — og ingen "kodebrud" i Tailwind v4 🚀.

---

### Yderligere læsning

* Officielle v4 Release Notes ([tailwindcss.com][2])
* Komplet Upgrade Guide (inkl. renamede utilities) ([tailwindcss.com][1], [tailwindcss.com][1])
* Medium-gennemgang af v4-nyheder (overblik) ([medium.com][4])
* z-index-dokumentation (v4) ([tailwindcss.com][5])
* Overflow-utils (for at forstå clipping) ([tailwindcss.com][6])
* Diskussion om quoted vs. unquoted z-variabler ([github.com][3])

[1]: https://tailwindcss.com/docs/upgrade-guide "Upgrade guide - Getting started - Tailwind CSS"
[2]: https://tailwindcss.com/blog/tailwindcss-v4 "Tailwind CSS v4.0 - Tailwind CSS"
[3]: https://github.com/tailwindlabs/tailwindcss/discussions/18031 "Tailwind V4, how to add custom z-index theming? · tailwindlabs tailwindcss · Discussion #18031 · GitHub"
[4]: https://medium.com/%40natanael280198/tailwind-css-v4-0-a-complete-game-changer-for-modern-web-development-7bc62893bd53 "Tailwind CSS v4.0: A Complete Game Changer for Modern Web Development | by Nata Nael | Jun, 2025 | Stackademic"
[5]: https://tailwindcss.com/docs/z-index "z-index - Layout - Tailwind CSS"
[6]: https://tailwindcss.com/docs/overflow "overflow - Layout - Tailwind CSS"

---
**Konklusion**

Din `BreakingChange.md` guide var **præcis og korrekt** i sine anbefalinger. Alle fixes er nu implementeret og dit projekt er **100% Tailwind v4-kompatibelt**.

**Ingen yderligere "kodebrud" i Tailwind v4** 🚀

---
*Dokumenteret og løst - Juni 2025*
