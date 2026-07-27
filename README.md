# Ampri OÜ veebisait

Ühelehe-sait Harjumaa elektrifirmale. Ehitatud briefi järgi (`Ampri veebisait — brief.md`).

## Käivitamine

Staatiline sait — serveeri ükskõik millega:

```bash
python3 -m http.server 8471
# → http://localhost:8471
```

Deploy: lohista `index.html`, `styles.css`, `main.js` Cloudflare Pages'i.

## Failid

- `index.html` — kogu struktuur, copy, JSON-LD (schema.org/Electrician), monogrammi SVG
- `styles.css` — bränd (paber/tint/vask), animatsioonid, mobile-first paigutus
- `main.js` — avamise moment, scroll-reveal, numbrite lugemine, vorm

## Enne launch'i asendada (otsi "täpsustamisel" ja "5555")

- Telefoninumber `+372 5555 5555` (4 kohta: päis, hero, B2B, jalus + JSON-LD)
- E-mail `info@ampri.ee`
- MTR nr `TEL000000`, registrikood `10000000`
- Fotod: `.work-photo` ja `.about-photo` placeholder'id → päris pildid (webp, lazy load)
- Referentsi nimed B2B plokis
- Vormi backend (praegu ainult demo-kinnitus) — nt Cloudflare Pages Function või Formspree

## Avamise moment

Leht laadib hämaras, lüliti klõpsab ise 0.8 s pärast ja tuled lähevad põlema.
Jookseb üks kord sessiooni kohta (`sessionStorage`), `prefers-reduced-motion` puhul vahele jäetud.
Lüliti jääb töökorda — klõps kustutab/süütab tuled.
