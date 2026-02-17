# Hair Ritual by Tuba

Webseite fuer den Friseursalon "Hair Ritual by Tuba" in Schlangen.

## Tech-Stack

- **Framework:** Astro 5 (statisches SSG)
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Schriften:** `@fontsource/playfair-display` (Serifen) + `@fontsource/inter` (Sans) – lokal, kein CDN
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Projektstruktur

```
src/
  assets/                    # Bilder, Logos, SVGs (werden von Astro optimiert)
    logo-black.png
    logo-white.png
    background.jpeg
    background-logo.jpeg
    *.svg                    # Illustrationen fuer Leistungen, Vorher/Nachher etc.
  data/
    salon.json               # Zentrale Stammdaten (Kontakt, Oeffnungszeiten, Leistungen, Preise)
  styles/
    global.css               # Design-System: Farbpalette, Buttons, Animationen (@theme Direktive)
  layouts/
    Layout.astro             # Basis-Layout mit Navigation, Footer, Font-Imports
  components/
    PageHeader.astro         # Wiederverwendbarer Seiten-Header (label, slot, description)
    TestimonialCard.astro    # Kundenbewertungs-Karte
    BeforeAfterCard.astro    # Vorher/Nachher-Vergleichskarte
    ServiceHighlight.astro   # Leistungs-Highlight-Karte
  pages/
    index.astro              # Startseite (Hero-Video, Vertrauen, USPs, Testimonials, CTA)
    leistungen.astro         # Leistungen & Preise
    ueber-uns.astro          # Ueber-uns-Seite
    kontakt.astro            # Kontaktformular + Infos
public/
  hero.mp4                   # Hero-Hintergrundvideo
  favicon.svg                # Favicon (SVG)
  favicon.ico                # Favicon (ICO Fallback)
```

## Wichtige Konventionen

- **Stammdaten:** Alle Geschaeftsdaten (Adresse, Telefon, Oeffnungszeiten, Leistungen, Preise) liegen in `src/data/salon.json`. Aenderungen dort wirken sich auf die gesamte Seite aus.
- **Base-Pfad:** In `astro.config.mjs` wird `base` umgebungsabhaengig gesetzt: `/` lokal, `/hair-ritual-by-tuba` in Production. Interne Links muessen `import.meta.env.BASE_URL` verwenden.
- **Sprache:** Die Webseite ist auf Deutsch (`lang="de"`).
- **Design-System:** Farbpalette (Weiss/Creme/Beige/Gold), Typografie und Utility-Klassen (`btn-primary`, `btn-outline`, `section-label`, `divider`) sind in `global.css` definiert.
- **Bilder:** Astro `<Image>` Komponente fuer optimierte Bilder verwenden. Logos liegen in `src/assets/`.
- **MCP:** Playwright MCP ist konfiguriert (`.mcp.json`) – zum Testen der Seite im Browser nutzen.

## Commands

- `npm run dev` – Lokaler Dev-Server auf Port 4321
- `npm run build` – Production-Build nach `dist/`
- `npm run preview` – Vorschau des Production-Builds
