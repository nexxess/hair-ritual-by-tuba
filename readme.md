# Hair Ritual by Tuba

Webseite fuer den Friseursalon **Hair Ritual by Tuba** in Schlangen.

**Live:** [nexxess.github.io/hair-ritual-by-tuba](https://nexxess.github.io/hair-ritual-by-tuba)

## Tech-Stack

- **Framework:** [Astro 5](https://astro.build/) (statisches SSG)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- **Schriften:** Playfair Display + Inter (lokal via `@fontsource`, kein CDN)
- **Deployment:** GitHub Pages via GitHub Actions

## Schnellstart

```bash
# Abhaengigkeiten installieren
npm install

# Dev-Server starten (http://localhost:4321)
npm run dev

# Production-Build
npm run build

# Build-Vorschau
npm run preview
```

## Projektstruktur

```
src/
  assets/             # Bilder, Logos, SVGs (Astro-optimiert)
  components/
    PageHeader.astro        # Wiederverwendbarer Seiten-Header
    TestimonialCard.astro   # Kundenbewertungs-Karte
    BeforeAfterCard.astro   # Vorher/Nachher-Karte
    ServiceHighlight.astro  # Leistungs-Highlight
  data/
    salon.json         # Zentrale Stammdaten (Kontakt, Oeffnungszeiten, Leistungen, Preise)
  layouts/
    Layout.astro       # Basis-Layout mit Navigation, Footer, Font-Imports
  pages/
    index.astro        # Startseite (Hero-Video, Vertrauen, USPs, Testimonials, CTA)
    leistungen.astro   # Leistungen & Preise
    ueber-uns.astro    # Ueber-uns-Seite
    kontakt.astro      # Kontaktformular & Infos
  styles/
    global.css         # Design-System (Farbpalette, Buttons, Animationen)
public/
  hero.mp4             # Hero-Hintergrundvideo
  favicon.svg          # Favicon
```

## Stammdaten

Alle Geschaeftsdaten (Adresse, Telefon, Oeffnungszeiten, Leistungen, Preise) liegen zentral in `src/data/salon.json`. Aenderungen dort wirken sich automatisch auf die gesamte Seite aus.

## Design-System

Die Farbpalette basiert auf warmen, eleganten Toenen:

| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Cream | `#fff8f0` | Hintergruende |
| Beige | `#f5ede3` | Sektions-Hintergruende |
| Gold | `#b8956a` | Akzente, Buttons, Links |
| Text Primary | `#2c2420` | Ueberschriften, Fliesstext |
| Text Secondary | `#6b5e54` | Sekundaerer Text |

Utility-Klassen wie `btn-primary`, `btn-outline`, `section-label` und `divider` sind in `src/styles/global.css` definiert.

## Deployment

Das Deployment erfolgt automatisch ueber GitHub Actions bei Push auf `main`. Die Konfiguration liegt in `.github/workflows/deploy.yml`.

Der Base-Pfad wird in `astro.config.mjs` umgebungsabhaengig gesetzt:
- Lokal: `/`
- Production: `/hair-ritual-by-tuba`

Interne Links verwenden `import.meta.env.BASE_URL`.

## Hero-Video komprimieren

```bash
ffmpeg -i hero.mp4 -c:v libx264 -profile:v main -level 3.1 -crf 23 -preset slow -vf "scale='min(720,iw)':-2" -c:a aac -b:a 128k -movflags +faststart -y output.mp4
```
