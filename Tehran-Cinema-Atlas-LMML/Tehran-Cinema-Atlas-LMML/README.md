# Tehran Cinema Atlas — LMML complete redesign

A static, no-build website for the **Live Museum of Movie Locations (LMML)** project in Information Modeling and Web Technologies.

## Included

- 15 Tehran filming-location catalogue items
- 9 Iranian film pages with individual palettes, moods and motif sets
- 3 narratives:
  - practical one-day route
  - historical production timeline
  - thematic city lenses
- 5 switchable visual systems:
  - Contemporary Atlas
  - Qajar Lithograph
  - Tehran Modernism
  - Video Archive 1998
  - Tehran 2035
- 9 explicit reading modes per location: 3 audiences × 3 detail levels
- “Do you want to play?” frame-matching activity
- evidence, facts and source panels
- film-still / present-day comparison on every location page
- live map links, embedded exact-location map, offline coordinate diagram
- narrative-aware previous/next navigation
- global previous/next page navigation
- QR code for every location and a regeneration script
- JSON, JavaScript, CSV, JSON-LD, GeoJSON and GPX data
- cover, exhibition, locations, films, documentation, disclaimer and creator pages
- responsive navigation and persistent theme/reading preferences

## Run it

The pages work by opening `index.html` directly. For the most reliable experience, run a small local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

No package installation or build step is required.

## Important work before submission

1. Replace the placeholder deployment address in `data/atlas.json` and `data/atlas.js`:

```text
https://example.org/tehran-cinema-atlas/
```

2. Regenerate QR codes:

```bash
python -m pip install "qrcode[pil]"
python regenerate_qr.py
```

3. Verify all image licences and add complete attribution.
4. Verify source claims, coordinates, current access rules, opening hours and fees.
5. Conduct fieldwork for the exact camera position and compass orientation. The source dataset does not contain dependable bearings, so the website deliberately labels them as requiring field verification.
6. Add short licensed dialogue MP3 files to the prepared paths in `assets/audio/` to activate the audio buttons.
7. Complete the creator/group details in `about-creators.html`.

## Main files

- `index.html` — cover page
- `exhibition.html` — narratives, chapters, route links and atlas map
- `collection.html` — searchable/filterable location catalogue
- `location.html?id=...` — dynamic active catalogue record
- `films.html` — film collection
- `film.html?id=...` — film-specific themed page
- `documentation.html` — design rationale and requirement matrix
- `disclaimer.html` — academic scope, rights and safety
- `data/atlas.json` — complete dataset
- `assets/css/base.css` — shared components and default design
- `assets/css/themes.css` — the four alternative historical/future themes

## Research honesty

The redesign uses the information present in the supplied Tehran project. It does not invent exact camera bearings. Missing or uncertain information is identified in the interface and documentation rather than silently completed.
