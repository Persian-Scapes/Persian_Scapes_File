# Movie Theme Pages Guide

This version includes one dedicated page for each film, for example:

- `film-banoo.html`
- `film-tehran-roozegare-no.html`
- `film-white-nights.html`
- `film-chess-of-the-wind.html`
- `film-close-up.html`
- `film-kamalolmolk.html`
- `film-once-upon-a-time-cinema.html`
- `film-my-uncle-napoleon.html`
- `film-im-not-angry.html`

## How the movie themes work

The content and theme information are inside:

```text
js/data.js
```

Each film object has:

```js
theme: {
  name: "Cold Mansion / Isolation",
  mood: "Quiet, snowy, private...",
  primary: "#07101c",
  secondary: "#16283d",
  accent: "#9f7448",
  motifs: ["snow", "courtyard", "old mansion"],
  dialogue_audio: "assets/audio/banoo-dialogue.mp3"
}
```

The JavaScript file:

```text
js/film-details.js
```

reads the film ID from each page, finds the correct film in `js/data.js`, then applies CSS variables such as `--film-primary`, `--film-secondary`, and `--film-accent`.

The CSS file:

```text
css/style.css
```

uses those variables to change the page background, borders, buttons, badges, and panels.

## How to explain this in the presentation

You can say:

> Each movie has its own theme object in the data file. JavaScript loads the correct film, then applies its colors and mood to the page using CSS variables. This keeps the HTML structure reusable while allowing every film page to have a different visual identity.

## How to add audio

Put your short mp3 dialogue clips inside:

```text
assets/audio/
```

Then make sure the file name matches the `dialogue_audio` path in `js/data.js`.

Example:

```text
assets/audio/banoo-dialogue.mp3
```

The button on the film page is already connected with JavaScript. It will work when the mp3 file exists.


## Included temporary generated visual placeholders
This version includes generated poster-style and film-frame-style images so the site is visually testable immediately. These are not official movie posters or screenshots. Replace them with your researched/approved assets using the same file paths.
