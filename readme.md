# Hair Ritual by Tuba

Webseite fuer den Friseursalon "Hair Ritual by Tuba" in Schlangen.

## Commands

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Installiert Abhaengigkeiten                  |
| `npm run dev`       | Startet Dev-Server auf `localhost:4321`       |
| `npm run build`     | Baut die Seite nach `./dist/`                |
| `npm run preview`   | Vorschau des Production-Builds               |

## Hero-Video komprimieren

```bash
ffmpeg -i hero.mp4 -c:v libx264 -profile:v main -level 3.1 -crf 23 -preset slow -vf "scale='min(720,iw)':-2" -c:a aac -b:a 128k -movflags +faststart -y output.mp4
```