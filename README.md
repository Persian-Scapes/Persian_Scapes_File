# Tehran Cinema Atlas

A static website prototype for an Iranian-themed movie-location museum project.

## Main pages

- `index.html` — Home page with project name, subtitle, hero image placeholder, short description, statistics, and featured locations.
- `locations.html` — 15 location cards with filters and links to details.
- `location-details.html?id=LOCATION_ID` — dynamic detail page for each location.
- `films.html` — film cards with director, year, and location count.
- `film-details.html?id=FILM_ID` — dynamic detail page for each film with gallery and related locations.
- `about.html` — project goal, method, location criteria, matching levels, and research notes.

## Content files

- `js/data.js` — normalized data created from your uploaded `Films.json`, `locstion.json`, and `routes.json`.
- `js/*.js` — page rendering scripts.
- `css/style.css` — basic visual style. You can redesign this file freely.
- `assets/images/placeholder.svg` — fallback image when your real photos are not added yet.
- `assets/images/hero-placeholder.svg` — homepage hero placeholder.

## How to add your design

1. Replace image paths in `js/data.js` or put your images in matching folders.
2. Edit `css/style.css` for colors, typography, spacing, card style, and Iranian visual identity.
3. Add music/audio later by creating an audio field in the location objects and rendering it in `location-details.js`.
4. Add real source links and bibliography in the `sources` arrays.

## Counts

- Locations: 15
- Films: 9
- Routes available in data: 15


## Movie-specific themes

This version includes individual movie pages with separate color palettes, mood descriptions, motif chips, and an optional dialogue-audio button. See `MOVIE_THEMES_GUIDE.md`.


## Included temporary generated visual placeholders
This version includes generated poster-style and film-frame-style images so the site is visually testable immediately. These are not official movie posters or screenshots. Replace them with your researched/approved assets using the same file paths.
