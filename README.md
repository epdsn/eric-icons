# Eric Icons

Build a **custom icon font** from a folder of SVGs—similar to [Font Awesome](https://fontawesome.com/), but with your own glyphs. The toolchain produces webfonts (WOFF2, WOFF, TTF), an **SVG font** (`epicons.svg`), a stylesheet with `@font-face` and icon classes, a preview page, and a JSON map of codepoints.

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

Open `dist/epicons.html` in a browser to preview every icon.

<!-- icon-gallery:start -->
## Icon gallery

GitHub does not load custom webfonts in README pages, so this gallery embeds each [source SVG](svg/) with `<img>` (the same artwork as the `epicons` font after `npm run build`). In your app, use `ei` plus `ei-*` where `*` is the name under each icon.

<table>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/add.svg" width="36" height="36" alt="add" /><br /><sub><code>ei-add</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/arrow-down.svg" width="36" height="36" alt="arrow-down" /><br /><sub><code>ei-arrow-down</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/arrow-left.svg" width="36" height="36" alt="arrow-left" /><br /><sub><code>ei-arrow-left</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/arrow-right.svg" width="36" height="36" alt="arrow-right" /><br /><sub><code>ei-arrow-right</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/arrow-up.svg" width="36" height="36" alt="arrow-up" /><br /><sub><code>ei-arrow-up</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/assign.svg" width="36" height="36" alt="assign" /><br /><sub><code>ei-assign</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/channels-and-detectors.svg" width="36" height="36" alt="channels-and-detectors" /><br /><sub><code>ei-channels-and-detectors</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/clone.svg" width="36" height="36" alt="clone" /><br /><sub><code>ei-clone</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/close.svg" width="36" height="36" alt="close" /><br /><sub><code>ei-close</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/command-center.svg" width="36" height="36" alt="command-center" /><br /><sub><code>ei-command-center</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/confirmation-light.svg" width="36" height="36" alt="confirmation-light" /><br /><sub><code>ei-confirmation-light</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/confirmation.svg" width="36" height="36" alt="confirmation" /><br /><sub><code>ei-confirmation</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/connect.svg" width="36" height="36" alt="connect" /><br /><sub><code>ei-connect</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/connected.svg" width="36" height="36" alt="connected" /><br /><sub><code>ei-connected</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/dark-mode.svg" width="36" height="36" alt="dark-mode" /><br /><sub><code>ei-dark-mode</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/device.svg" width="36" height="36" alt="device" /><br /><sub><code>ei-device</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/discovery.svg" width="36" height="36" alt="discovery" /><br /><sub><code>ei-discovery</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/download.svg" width="36" height="36" alt="download" /><br /><sub><code>ei-download</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/edit.svg" width="36" height="36" alt="edit" /><br /><sub><code>ei-edit</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/emergency-vehicle.svg" width="36" height="36" alt="emergency-vehicle" /><br /><sub><code>ei-emergency-vehicle</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/grid.svg" width="36" height="36" alt="grid" /><br /><sub><code>ei-grid</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/help.svg" width="36" height="36" alt="help" /><br /><sub><code>ei-help</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/intersection.svg" width="36" height="36" alt="intersection" /><br /><sub><code>ei-intersection</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/light-bar.svg" width="36" height="36" alt="light-bar" /><br /><sub><code>ei-light-bar</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/light-mode.svg" width="36" height="36" alt="light-mode" /><br /><sub><code>ei-light-mode</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/list.svg" width="36" height="36" alt="list" /><br /><sub><code>ei-list</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/logout.svg" width="36" height="36" alt="logout" /><br /><sub><code>ei-logout</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/maximize-panel-left.svg" width="36" height="36" alt="maximize-panel-left" /><br /><sub><code>ei-maximize-panel-left</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/menu.svg" width="36" height="36" alt="menu" /><br /><sub><code>ei-menu</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/minimize-panel-left.svg" width="36" height="36" alt="minimize-panel-left" /><br /><sub><code>ei-minimize-panel-left</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/network-scan.svg" width="36" height="36" alt="network-scan" /><br /><sub><code>ei-network-scan</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/open.svg" width="36" height="36" alt="open" /><br /><sub><code>ei-open</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/refresh.svg" width="36" height="36" alt="refresh" /><br /><sub><code>ei-refresh</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/remove.svg" width="36" height="36" alt="remove" /><br /><sub><code>ei-remove</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/save-device.svg" width="36" height="36" alt="save-device" /><br /><sub><code>ei-save-device</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/save.svg" width="36" height="36" alt="save" /><br /><sub><code>ei-save</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/security.svg" width="36" height="36" alt="security" /><br /><sub><code>ei-security</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/settings-sliders.svg" width="36" height="36" alt="settings-sliders" /><br /><sub><code>ei-settings-sliders</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/settings.svg" width="36" height="36" alt="settings" /><br /><sub><code>ei-settings</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/signal-medium.svg" width="36" height="36" alt="signal-medium" /><br /><sub><code>ei-signal-medium</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/signal-strong.svg" width="36" height="36" alt="signal-strong" /><br /><sub><code>ei-signal-strong</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/signal-weak.svg" width="36" height="36" alt="signal-weak" /><br /><sub><code>ei-signal-weak</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/sort-a-z.svg" width="36" height="36" alt="sort-a-z" /><br /><sub><code>ei-sort-a-z</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/sort-z-a.svg" width="36" height="36" alt="sort-z-a" /><br /><sub><code>ei-sort-z-a</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/three-dots.svg" width="36" height="36" alt="three-dots" /><br /><sub><code>ei-three-dots</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/time-and-date.svg" width="36" height="36" alt="time-and-date" /><br /><sub><code>ei-time-and-date</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/traffic-light.svg" width="36" height="36" alt="traffic-light" /><br /><sub><code>ei-traffic-light</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/transit-vehicle.svg" width="36" height="36" alt="transit-vehicle" /><br /><sub><code>ei-transit-vehicle</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%"><img src="svg/upload.svg" width="36" height="36" alt="upload" /><br /><sub><code>ei-upload</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/user-management.svg" width="36" height="36" alt="user-management" /><br /><sub><code>ei-user-management</code></sub></td>
<td align="center" valign="top" width="25%"><img src="svg/user.svg" width="36" height="36" alt="user" /><br /><sub><code>ei-user</code></sub></td>
<td></td>
</tr>
</table>

<!-- icon-gallery:end -->

## Adding icons

1. Put **one SVG per icon** in the `svg/` folder.
2. The **file name** (without `.svg`) becomes the icon id.
3. Run `npm run build`.
4. (Optional) Run `npm run readme:icons` to refresh the **Icon gallery** section below (HTML table generated by [`scripts/update-readme-icons.js`](scripts/update-readme-icons.js)).

| File           | Icon id | CSS classes (default)   |
| -------------- | ------- | ----------------------- |
| `star.svg`     | `star`  | `ei` and `ei-star` |
| `heart.svg`    | `heart` | `ei` and `ei-heart` |

Use **lowercase, hyphenated** names (e.g. `arrow-left.svg`) so class names stay predictable.

**SVG tips:** Prefer simple filled paths; very complex or multi-color artwork may not convert cleanly to a single-color font glyph.

## Use on the web

Copy the contents of `dist/` (or publish them to your CDN) and link the CSS:

```html
<link rel="stylesheet" href="path/to/epicons.css" />
```

Markup matches the usual “base + specific” pattern:

```html
<i class="ei ei-star" aria-hidden="true"></i>
<i class="ei ei-heart" aria-hidden="true"></i>
```

Size and color with normal CSS (`font-size`, `color`, etc.).

## Install as a system font

Use **`dist/epicons.ttf`**: on Windows, open the file and choose **Install** (or drag it into **Settings → Personalization → Fonts**).

## Configuration

Edit [`.fantasticonrc.js`](.fantasticonrc.js):

| Option | Purpose |
| ------------- | ------- |
| `inputDir`    | Folder of source SVGs (`./svg`) |
| `outputDir`   | Build output (`./dist`) |
| `name`        | Base name for output files and font family in CSS (`epicons`) |
| `prefix`      | Class prefix (`ei` → `.ei-*`, e.g. `.ei-star`) |
| `fontTypes`   | `woff2`, `woff`, `ttf`, `svg`, etc. |
| `assetTypes`  | `css`, `html`, `json`; add `scss` / `ts` if needed |
| `fontsUrl`    | URL/path prefix for font files in generated CSS (`.` = same folder as the CSS file) |

After changing `fontsUrl` for production (e.g. a CDN base path), run `npm run build` again.

## Scripts

| Command        | Description |
| -------------- | ----------- |
| `npm run build` | Generate fonts and assets into `dist/` |
| `npm run clean` | Delete the `dist/` folder |
| `npm run readme:icons` | Regenerate the README **Icon gallery** from `svg/*.svg` |

## Build output

After `npm run build`, `dist/` typically contains:

- **`epicons.css`** – `@font-face` and icon rules  
- **`epicons.woff2`**, **`epicons.woff`**, **`epicons.ttf`**, **`epicons.svg`**  
- **`epicons.html`** – icon preview  
- **`epicons.json`** – name → codepoint map for apps or tooling  

`dist/` is gitignored; clone the repo and build locally (or adjust `.gitignore` if you want to version built files).

## Windows note

Fantasticon’s SVG glob can fail on Windows path separators. This repo applies a tiny [patch-package](https://github.com/ds300/patch-package) fix on `npm install` (`patches/fantasticon+4.1.0.patch`).

## License

ISC (see [`package.json`](package.json)).
