# Eric Icons

Build a **custom icon font** from a folder of SVGs—similar to [Font Awesome](https://fontawesome.com/), but with your own glyphs. The toolchain produces webfonts (WOFF2, WOFF, TTF), a stylesheet with `@font-face` and icon classes, a preview page, and a JSON map of codepoints.

Powered by [Fantasticon](https://github.com/tancredi/fantasticon).

## Requirements

- [Node.js](https://nodejs.org/) (v22+ recommended; matches Fantasticon’s engine range)

## Quick start

```bash
git clone https://github.com/epdsn/eric-icons.git
cd eric-icons
npm install
npm run build
```

Open `dist/eric-icons.html` in a browser to preview every icon.

## Adding icons

1. Put **one SVG per icon** in the `svg/` folder.
2. The **file name** (without `.svg`) becomes the icon id.
3. Run `npm run build`.

| File           | Icon id | CSS classes (default)   |
| -------------- | ------- | ----------------------- |
| `star.svg`     | `star`  | `eric` and `eric-star` |
| `heart.svg`    | `heart` | `eric` and `eric-heart` |

Use **lowercase, hyphenated** names (e.g. `arrow-left.svg`) so class names stay predictable.

**SVG tips:** Prefer simple filled paths; very complex or multi-color artwork may not convert cleanly to a single-color font glyph.

## Use on the web

Copy the contents of `dist/` (or publish them to your CDN) and link the CSS:

```html
<link rel="stylesheet" href="path/to/eric-icons.css" />
```

Markup matches the usual “base + specific” pattern:

```html
<i class="eric eric-star" aria-hidden="true"></i>
<i class="eric eric-heart" aria-hidden="true"></i>
```

Size and color with normal CSS (`font-size`, `color`, etc.).

## Install as a system font

Use **`dist/eric-icons.ttf`**: on Windows, open the file and choose **Install** (or drag it into **Settings → Personalization → Fonts**).

## Configuration

Edit [`.fantasticonrc.js`](.fantasticonrc.js):

| Option | Purpose |
| ------------- | ------- |
| `inputDir`    | Folder of source SVGs (`./svg`) |
| `outputDir`   | Build output (`./dist`) |
| `name`        | Font family name in CSS (`eric-icons`) |
| `prefix`      | Class prefix (`eric` → `.eric-*`) |
| `fontTypes`   | `woff2`, `woff`, `ttf`, etc. |
| `assetTypes`  | `css`, `html`, `json`; add `scss` / `ts` if needed |
| `fontsUrl`    | URL/path prefix for font files in generated CSS (`.` = same folder as the CSS file) |

After changing `fontsUrl` for production (e.g. a CDN base path), run `npm run build` again.

## Scripts

| Command        | Description |
| -------------- | ----------- |
| `npm run build` | Generate fonts and assets into `dist/` |
| `npm run clean` | Delete the `dist/` folder |

## Build output

After `npm run build`, `dist/` typically contains:

- **`eric-icons.css`** – `@font-face` and icon rules  
- **`eric-icons.woff2`**, **`eric-icons.woff`**, **`eric-icons.ttf`**  
- **`eric-icons.html`** – icon preview  
- **`eric-icons.json`** – name → codepoint map for apps or tooling  

`dist/` is gitignored; clone the repo and build locally (or adjust `.gitignore` if you want to version built files).

## Windows note

Fantasticon’s SVG glob can fail on Windows path separators. This repo applies a tiny [patch-package](https://github.com/ds300/patch-package) fix on `npm install` (`patches/fantasticon+4.1.0.patch`).

## License

ISC (see [`package.json`](package.json)).
