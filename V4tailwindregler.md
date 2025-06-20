**Kort fortalt:** Tailwind CSS v4 skruer ned for “magien” og op for determinismen. Frameworket skal kunne udlede *alle* klassenavne statisk, bruger CSS-først-konfiguration i stedet for `tailwind.config.js`, og kræver den nye `[...]`-syntaks til *alle* arbitrære værdier. Det gør den lidt “striks”, men løsningen på din cirkel-bug virker stadig — du skal blot skrive den med idiomatisk v4-syntaks og sikre, at enhver klasse er synlig i kildekoden.([tailwindcss.com][1], [tailwindcss.com][1])

## Hvorfor virker Tailwind v4 mere rigid?

### 1. Statiske klassenavne

Den nye bygge-motor genererer kun CSS for klasser, der findes som *fulde* strenge i dine templates. Dynamiske sammensatte navne som `text-${size}-700` kompileres ikke længere, medmindre du safelister dem.([github.com][2], [github.com][3])

### 2. CSS-først-konfiguration

Design-tokens flyttes ind i CSS via `@theme`, mens `tailwind.config.js` kun er nødvendig til plugins. Det betyder, at skræddersyede utilities (fx `.glass-nav`) er helt legitime, så længe de defineres som almindelig CSS.([gist.github.com][4], [tailwindcss.com][1])

### 3. Ny arbitrær syntaks

Alle brugerdefinerede værdier skal i `[]`, fx `bg-[#0005]` eller `shadow-[0_8px_32px_rgb(0_0_0_/_0.4)]`. Farve/opacity-forkortelser som `/30` fungerer stadig, men kun når de matcher en dokumenteret utility.([tailwindcss.com][5], [tailwindcss.com][6])

### 4. Strammere fil-scanning

Auto-detektionen i monorepos og NX/PNPM-workspaces er mindre “aggressiv”; du skal nogle gange pege Tailwind eksplicit mod dine kildefiler med `@source` eller `content`-array’et.([github.com][2], [tailwindcss.com][7])

## Hvad betyder det for din navigation?

| Udfordring                                     | Klassisk fix                                                           | v4-kompatibelt fix                                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Gradient-/blur-lag breder sig som kæmpe cirkel | `overflow-hidden` på hele nav-containeren (men så klippes dropdown’en) | Lav *kun* gradient-laget klippet, ved at pakke det ind i et element med `overflow-hidden rounded-full`            |
| Custom util `.glass-nav`                       | CSS-klasse i global stylesheet                                         | Kan beholdes uændret; Tailwind ignorerer klasse uden prefix, så længe den ikke skal trækkes ind i build-processen |
| Arbitrære farver/opacity i Tailwind-klasser    | `from-blue-500/5`                                                      | `from-blue-500/[.05]` (ny form)                                                                                   |

### Eksempel-markup (v4-sikker)

```jsx
<motion.nav className="fixed inset-x-0 z-[var(--z-index-nav)]">
  <motion.div
    className="relative rounded-full overflow-visible glass-nav shadow-xl transition-all"
  >
    {/* Klippes og kan ikke fange pointer-events */}
    <span
      aria-hidden
      className="
        pointer-events-none absolute inset-0 rounded-full overflow-hidden
        before:absolute before:inset-0
        before:bg-gradient-to-r
        before:from-blue-500/[.05]
        before:via-purple-500/[.05]
        before:to-blue-500/[.05]
      "
    />
    {/* …resten af navigationen… */}
  </motion.div>
</motion.nav>
```

*Alle* Tailwind-klasser er nu fuldt kvalificerede strenge; ingen template-litterals eller betingede sammensætninger, så kompileren fanger dem.

## Tjekliste til opgradering af resten af projektet

1. **Scan kildekoden for skabelon-sammensatte klasse­strenge** (`text-${color}-600`, `grid-cols-${n}`) og omskriv til fulde klasselister eller brug `clsx()` med konstant fallback.([reddit.com][8])
2. **Opdater alle arbitrære værdier til bracket-syntaksen**; Tailwind smider en fejllog, hvis den gamle form bruges.([tailwindcss.com][9])
3. **Flyt design-tokens** (farver, spacing) til `@theme { ... }` i din CSS, så du kan referere dem med `var(--color-accent)` direkte.([tailwindcss.com][1])
4. **Tilføj `@source` direktiver** i `globals.css`, hvis auto-detektion ikke finder komponentfiler i en monorepo.([gist.github.com][4])
5. **Kør Tailwinds officielle upgrade-script**; det håndterer \~90 % af breaking changes automatisk.([tailwindcss.com][10])

## Konklusion

Tailwind v4 kræver, at dine klassenavne er *synlige* og *utvetydige*, men det begrænser dig ikke i at lave glas-morphisme eller fancy gradienter. Ved at klippe kun gradient-laget (ikke hele nav-containeren) med `rounded-full overflow-hidden` — skrevet i den nye bracket-venlige syntaks — forsvinder den store cirkel, og din *Services*-dropdown fungerer som forventet.

[1]: https://tailwindcss.com/blog/tailwindcss-v4?utm_source=chatgpt.com "Tailwind CSS v4.0"
[2]: https://github.com/tailwindlabs/tailwindcss/issues/13136?utm_source=chatgpt.com "v4: Automatic content detection in monorepos only finds direct ..."
[3]: https://github.com/tailwindlabs/tailwindcss/discussions/12884?utm_source=chatgpt.com "Arbitrary Values Will Not Compile · tailwindlabs tailwindcss - GitHub"
[4]: https://gist.github.com/backnotprop/936b1e83ede4b472d174925402dd919c?utm_source=chatgpt.com "Tailwind v4 Info doc (similar to llms.txt, rules, etc ... - GitHub Gist"
[5]: https://tailwindcss.com/docs/just-in-time-mode?utm_source=chatgpt.com "Just-in-Time Mode - Tailwind CSS"
[6]: https://tailwindcss.com/docs/styling-with-utility-classes?utm_source=chatgpt.com "Styling with utility classes - Core concepts - Tailwind CSS"
[7]: https://tailwindcss.com/docs/detecting-classes-in-source-files?utm_source=chatgpt.com "Detecting classes in source files - Core concepts - Tailwind CSS"
[8]: https://www.reddit.com/r/tailwindcss/comments/1idw75y/upgrading_to_v4_broke_my_projects_is_sticking/?utm_source=chatgpt.com "Upgrading to V4 broke my projects, is sticking with V3 the only way?"
[9]: https://tailwindcss.com/blog/tailwindcss-v4-beta?utm_source=chatgpt.com "Tailwind CSS v4.0 Beta 1"
[10]: https://tailwindcss.com/docs/upgrade-guide?utm_source=chatgpt.com "Upgrade guide - Getting started - Tailwind CSS"
