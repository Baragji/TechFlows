Her er **15 “copy-paste-klare”** prompts, lige til at smide i Midjourney, DALL·E 3, Firefly eller hvilket som helst andet generativt billed-værktøj du bruger.
Alle er formateret, så output passer perfekt som **16:9 hero- eller case-billeder** med `object-cover`:

---

## 🌟 Hero-sektioner

| # | Brug                     | Prompt (kopiér alt på linjen)                                                                                                                                                                                                                                                                                                                         |
| - | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Forside (Main Hero)**  | `Ultra-wide cinematic shot, diverse tech-startup team collaborating around sleek touchscreen table in glass office at dusk, cool teal & cobalt accent lights, soft rim-lighting, depth-of-field, 50 mm lens, realistic, high detail, editorial style, negative space right side for headline, muted #1a1a1a background shadows, 16:9 --ar 16:9 --v 6` |
| 2 | **About-hero**           | `Modern Copenhagen skyline sunrise seen through floor-to-ceiling windows of minimalist office lounge, two professionals in casual blazers discussing charts on laptop, subtle emerald & aqua reflections, matte glass overlay feel, aspirational, cinematic color grading, plenty of left-side empty space, 16:9 --ar 16:9 --v 6`                     |
| 3 | **Services landing**     | `Macro-to-wide transition style image: abstract layered glass panels with floating UI icons (code, analytics, cloud, mobile) in neon cyan & electric blue, soft blur edges, bokeh background, futurist yet corporate, high resolution, 16:9 --ar 16:9 --v 6`                                                                                          |
| 4 | **Blog / Insights hero** | `Editorial photo of thoughtful woman reading industry insights on holographic display, dark studio backdrop, violet-cyan gradient rim light, slight grain for magazine vibe, negative space on top left, 16:9 --ar 16:9 --v 6`                                                                                                                        |
| 5 | **Events hero**          | `Wide angle shot of modern conference stage with LED wall, speaker silhouette, audience in soft focus, teal & indigo lighting, energetic yet professional, center stage empty for overlay, 16:9 --ar 16:9 --v 6`                                                                                                                                      |

---

## 📂 Case-studies (et billede pr. case)

> **Tip:** Skift {{Brand}} til dit rigtige kundenavn, ellers lad den stå generisk.

| # | Prompt                                                                                                                                                                                |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A | `Dynamic action shot of courier picking up eco-friendly fashion parcel, rainy city street reflections, brand logo on package, cool green highlights, cinematic, 16:9 --ar 16:9 --v 6` |
| B | `E-commerce warehouse automation robots sorting boxes for {{Brand}}, neon blue scanning lasers, motion blur, high-tech, gritty texture, 16:9 --ar 16:9 --v 6`                         |
| C | `Close-up of mobile banking app UI in user’s hand, coffee shop bokeh, teal accent buttons glowing, modern scandinavian color palette, lifestyle realism, 16:9 --ar 16:9 --v 6`        |
| D | `Lifestyle outdoor shot, runner wearing wireless fitness earbuds, sunrise lens flare, subtle cyan gradient overlay, tagline space bottom right, 16:9 --ar 16:9 --v 6`                 |
| E | `Luxury home interior with AR furniture configurator projected in mid-air, user gesturing to rotate sofa, cool aquamarine highlights, sleek nordic style, 16:9 --ar 16:9 --v 6`       |
| F | `Top-down view of creative team sketching UX wireframes on iPad, color-coded post-its, dark wood desk, accent light strips, storytelling vibe, 16:9 --ar 16:9 --v 6`                  |

---

## 🛠️ Sådan bruger du dem

1. **Kopier prompten** ind i dit AI-værktøj.
2. Vælg output-størrelse **1920×1080** eller højere.
3. Hvis din generator kræver “no text”, tilføj: `--no text, logo`
4. Efter download skal du blot placere billedet i `/public/images/` og kalde din `OptimizedImage`-komponent med `objectFit="cover"` og det passende focal point.

---

### Husk

* **Brand-farver:** Sørg for at teal/emerald (#30c5b1) eller cobalt (#2f81f7) altid er synlige som accent.
* **Negative space:** Hold plads i billedet, så glass-overlays og headlines ikke kolliderer med vigtige motiver.
* **Kontrast:** Læg evt. et let mørkt overlay (`bg-black/40`) direkte i CSS, så hvid tekst opfylder WCAG.

Når du har genereret og indsat disse billeder, er du ét lag fra at være 100 % visuelt på linje med Obsidian-looket.

Sig til, hvis du vil have prompts til GIF/video-loops eller yderligere farve-grading-profiler.
