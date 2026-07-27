# Ampri OÜ veebisait — design & build brief

> Kopeeri see fail Claude Code projekti juurkausta (nt `CLAUDE.md` või `BRIEF.md`) ja ehita selle järgi.

## Projekt ühe lausega
Ühelehe-veebisait Harjumaa elektrifirmale Ampri OÜ: usaldusväärne, personaalne, teistest eristuv — igav valdkond, isiksusega bränd (inspiratsioon: Pink's Window Services, aga meie versioon on kvaliteedi-keskne, mitte armas).

## Sihtgrupid (tähtsuse järjekorras)
1. **Eraisik Harjumaal**, kes otsib elektrikut koju. Tahab: kiire kontakt, usaldus, päris inimene, päris tööd. Otsustab emotsiooni + usalduse pealt.
2. **Objektijuht**, kes otsib elektrikut/partnerit ehitusobjektile. Tahab: kompetentsi tõestust 30 sekundiga — MTR, tehtud objektid, teostusjoonised, mahuvõime, referentsid. Vibe on teisejärguline, faktid loevad.

Mõlemad saavad hero'st kohe oma raja (vt struktuur).

## Bränd

### Värvid
- Taust (paber): `#F6F1E9` — läbivalt, soe ja personaalne
- Tint (tekst, pealkirjad): `#26211B` — süsimustjas, mitte hall; kontrast peab olema tugev
- Vask (aktsent, CTA-d, logo): `#B96A24`, hover `#C9772E`
- Sekundaarne tekst: `#7A7164`
- Piirjooned: `#CFC4B4`
- Tume plokk (ainult B2B/objektijuhi sektsioon): taust `#26211B`, tekst `#F0E9DE`, aktsent vask
- Reegel: vask on AKTSENT, mitte täidis. Kui vaske on igal pool, kaotab ta efekti.

### Logo
- **Märk: A + välk monogramm** — A-täht, mille parem jalg on välgunool. Tint-must A, vask välk. EI MINGIT TEKSTI märgi sees.
- Vajab kõva iteratsiooni: proportsioonid, välgu nurk, joone kaal. Genereeri SVG, itereeri kuni on täpne ja insenerlikult puhas — märk peab ütlema "perfektsionist".
- **Sõnamärk: AMPRI** slab-serifis, märgi kõrval päises.

### Tüpograafia
- Pealkirjad: slab-serif, jäme — nt Zilla Slab (Google Fonts), alternatiiv Bitter. Suured ja julged.
- Kehatekst: puhas sans — Inter või Source Sans 3.
- Vanakooli töökoja-sildi tunne pealkirjades, loetavus kehas.

### Toon
Otsekohene, enesekindel, kvaliteedi-kinnisideega. Ei mingit korporatiivset vahtu ("terviklahendused", "kliendikesksus"). Lühikesed laused. Väike muie on lubatud, cringe mitte.

## Struktuur (üks leht, ülevalt alla)

1. **Päis** — monogramm + AMPRI sõnamärk vasakul, telefoninumber (tap-to-call) + "Küsi pakkumist" nupp paremal. Kleepuv.
2. **Hero**
   - H1: **"Elektritööd, mis saavad tehtud õigesti. Esimesel korral."**
   - Alapealkiri: "15 aastat kogemust Harjumaal. Eraisikutele ja ehitusobjektidele."
   - CTA-d: "Helista: [number]" (vask, primaarne) + "Küsi pakkumist" (outline)
3. **Kaks rada** — kaks kaarti kõrvuti:
   - "Vajad elektrikut koju?" → kerib teenuste/usalduse juurde
   - "Otsid partnerit objektile?" → kerib tumeda B2B ploki juurde
4. **Teenused** — 3 kaarti: hoonete elektripaigaldiste ehitamine, elektripaigaldiste remont, teostusjoonised. Igal 1–2 lauset inimkeeles, mitte loetelu.
5. **Tehtud tööd** — fotogrid pealkirjadega (mis objekt, mis tehti). KÕIGE TÄHTSAM usalduselement. Placeholder'id kuni isalt fotod tulevad.
6. **Miks Ampri / isa lugu** — päris foto isast + lühilugu: Tallinna Polütehnikumis õppinud, 15 aastat, töötab ise iga objekti kallal, "piisavalt hea" ei loe. Kvaliteedi-nurk siin täies mahus.
7. **Tume B2B plokk** (taust `#26211B`) — objektijuhile: MTR registreering (nr), teostusjoonised, mis tüüpi objekte teeme, mahuvõime, 1–2 referentsi. Faktid, mitte jutt. CTA: "Võta ühendust" + otse e-mail/telefon.
8. **Hinnapäringu vorm** — max 3 välja: nimi, kontakt (tel/email), mure kirjeldus. Lubadus vormi all: "Vastame 24 tunni jooksul."
9. **Jalus** — Ampri OÜ, registrikood, MTR nr, telefon, e-mail, piirkond (Harjumaa), monogramm suurelt vase toonis.

## Liikumine ja üllatus
Leht peab TUNDUMA kvaliteetne — sujuv, elus, viimistletud. Metafoor kõigele: **elekter/vool**.

- **Avamise moment (peamine üllatus):** leht laadib hämaras/tuhmis toonis, hero's on lülitit meenutav element — lüliti klõpsab (ise, ~0.8s pärast laadimist) ja "tuled lähevad põlema": taust heleneb paberitooniks, vask süttib, sisu ilmub. Üks kord, kiire, mitte tüütu. See on esimene asi, mida külastaja mäletab.
- **Monogrammi välk joonistab end ise** SVG stroke-animatsiooniga (laadides ja footeris scroll'imisel) — nagu vool jookseks läbi.
- **Vask-alajooned linkidel/pealkirjadel** animeeruvad hover'il vasakult paremale nagu juhe, mis pinge alla läheb.
- **Scroll-reveal:** sektsioonid ilmuvad pehme fade + väikese nihkega (kasuta IntersectionObserver'it, mitte rasket libi). Fotod grid'is astmeliselt (stagger).
- **Numbrid loevad üles** (15 aastat, X objekti) kui vaatevälja jõuavad.
- **Nupud:** selge press-tunne (scale 0.98), vask-hover sujuv, mitte järsk.
- **Tume B2B plokk:** üleminek heledast tumedasse sujuv — nagu astuks teise ruumi.
- Reeglid: 60fps (ainult transform/opacity), kõik kiire (200–400ms, avamise moment erandina ~1s), `prefers-reduced-motion` austatud, mitte ükski animatsioon ei tohi lugemist segada. Liikumine ütleb "täpsus", mitte "tsirkus" — pigem vähem ja perfektselt kui palju ja lohakalt.

## Tehniline
- Staatiline sait: Astro (eelistatud) või plain HTML + Tailwind. Ei mingit CMS-i, ei mingit JS-raamistikku ilma põhjuseta.
- Hosting: Cloudflare Pages. Domeen: ampri.ee (kontrolli saadavus).
- Mobile-first — eraisik tuleb Google'ist telefoniga. Tap-to-call kõikjal, kus number.
- Kiirus: Lighthouse 95+. Fotod optimeeritud (webp, lazy load).
- Keel: ainult eesti keel alustuseks.

## SEO
- Title: "Elektrik Harjumaal — Ampri OÜ | Elektritööd ja teostusjoonised"
- Sihtfraasid: "elektrik Harjumaa", "elektritööd Tallinn/Harjumaa", "elektripaigaldise ehitus"
- JSON-LD: `schema.org/Electrician` (LocalBusiness) — nimi, piirkond, telefon, lahtiolek
- NB (väljaspool koodi): Google Business Profile on eraisikute kanalis ilmselt suurema ROI-ga kui sait ise. Tee kohe, kogu arvustusi.

## Isalt vaja (enne launch'i, placeholder'id seniks)
- [ ] 5–10 fotot tehtud töödest + mis objekt/mis tehti
- [ ] 1 hea portree-foto
- [ ] MTR registreeringu number
- [ ] Registrikood, ametlik firmanimi, telefoninumber, e-mail
- [ ] Tüüpobjektide list (mida teeb, mida ei tee)
- [ ] 1–2 referentsi objektijuhtidele (nimi + objekt, loaga)

## Mida MITTE teha
- Sinine värv + välgu-klišee stock-fotoga
- Stock-fotod üldse — parem placeholder kui võõras mudel kiivriga
- Korporatiivne "Meist / Teenused / Kontakt" tühjus
- Rohkem kui 3 välja vormis
- Vaske täidisvärvina igal pool
