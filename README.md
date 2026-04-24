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

Each tile uses a light background so filled icons stay readable in **dark mode** (and labels use dark text on that tile).

<table>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/add.svg" width="36" height="36" alt="add" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-add</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/arrow-down.svg" width="36" height="36" alt="arrow-down" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-arrow-down</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/arrow-left.svg" width="36" height="36" alt="arrow-left" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-arrow-left</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/arrow-right.svg" width="36" height="36" alt="arrow-right" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-arrow-right</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/arrow-up.svg" width="36" height="36" alt="arrow-up" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-arrow-up</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/assign.svg" width="36" height="36" alt="assign" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-assign</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/bus.svg" width="36" height="36" alt="bus" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-bus</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/channels-and-detectors.svg" width="36" height="36" alt="channels-and-detectors" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-channels-and-detectors</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/clone.svg" width="36" height="36" alt="clone" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-clone</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/close.svg" width="36" height="36" alt="close" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-close</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/command-center.svg" width="36" height="36" alt="command-center" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-command-center</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/confirmation-light.svg" width="36" height="36" alt="confirmation-light" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-confirmation-light</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/confirmation.svg" width="36" height="36" alt="confirmation" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-confirmation</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/connect.svg" width="36" height="36" alt="connect" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-connect</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/connected.svg" width="36" height="36" alt="connected" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-connected</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/dark-mode.svg" width="36" height="36" alt="dark-mode" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-dark-mode</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/device.svg" width="36" height="36" alt="device" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-device</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/discovery.svg" width="36" height="36" alt="discovery" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-discovery</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/download.svg" width="36" height="36" alt="download" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-download</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/edit.svg" width="36" height="36" alt="edit" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-edit</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/emergency-vehicle.svg" width="36" height="36" alt="emergency-vehicle" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-emergency-vehicle</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/gauge.svg" width="36" height="36" alt="gauge" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-gauge</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/grid.svg" width="36" height="36" alt="grid" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-grid</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/help.svg" width="36" height="36" alt="help" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-help</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/intersection.svg" width="36" height="36" alt="intersection" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-intersection</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/light-bar.svg" width="36" height="36" alt="light-bar" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-light-bar</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/light-mode.svg" width="36" height="36" alt="light-mode" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-light-mode</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/list.svg" width="36" height="36" alt="list" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-list</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/logout.svg" width="36" height="36" alt="logout" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-logout</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/maximize-panel-left.svg" width="36" height="36" alt="maximize-panel-left" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-maximize-panel-left</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/menu.svg" width="36" height="36" alt="menu" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-menu</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/minimize-panel-left.svg" width="36" height="36" alt="minimize-panel-left" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-minimize-panel-left</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/moon.svg" width="36" height="36" alt="moon" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-moon</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/network-scan.svg" width="36" height="36" alt="network-scan" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-network-scan</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/open.svg" width="36" height="36" alt="open" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-open</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/refresh.svg" width="36" height="36" alt="refresh" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-refresh</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/remove.svg" width="36" height="36" alt="remove" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-remove</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/save-device.svg" width="36" height="36" alt="save-device" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-save-device</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/save.svg" width="36" height="36" alt="save" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-save</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/security.svg" width="36" height="36" alt="security" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-security</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/settings-sliders.svg" width="36" height="36" alt="settings-sliders" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-settings-sliders</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/settings.svg" width="36" height="36" alt="settings" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-settings</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/signal-medium.svg" width="36" height="36" alt="signal-medium" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-signal-medium</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/signal-strong.svg" width="36" height="36" alt="signal-strong" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-signal-strong</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/signal-weak.svg" width="36" height="36" alt="signal-weak" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-signal-weak</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/sort-a-z.svg" width="36" height="36" alt="sort-a-z" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-sort-a-z</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/sort-z-a.svg" width="36" height="36" alt="sort-z-a" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-sort-z-a</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/three-dots.svg" width="36" height="36" alt="three-dots" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-three-dots</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/time-and-date.svg" width="36" height="36" alt="time-and-date" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-time-and-date</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/traffic-light.svg" width="36" height="36" alt="traffic-light" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-traffic-light</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/transit-vehicle.svg" width="36" height="36" alt="transit-vehicle" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-transit-vehicle</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/upload.svg" width="36" height="36" alt="upload" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-upload</code></sub></td>
</tr>
<tr>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/user-management.svg" width="36" height="36" alt="user-management" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-user-management</code></sub></td>
<td align="center" valign="top" width="25%" style="background-color:#e8eaed;padding:10px 8px;color:#1f2328"><img src="svg/user.svg" width="36" height="36" alt="user" style="filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)" /><br /><sub><code style="color:#1f2328;font-size:0.75em">ei-user</code></sub></td>
<td></td>
<td></td>
</tr>
</table>

<!-- icon-gallery:end -->

## Adding icons

1. Put **one SVG per icon** in the `svg/` folder.
2. The **file name** (without `.svg`) becomes the icon id.
3. Run `npm run build` — this also refreshes the **Icon gallery** section below (via [`scripts/update-readme-icons.js`](scripts/update-readme-icons.js)). To update only the gallery without a font build, run `npm run readme:icons`.

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
| `npm run build` | Generate fonts and assets into `dist/` and refresh the README **Icon gallery** |
| `npm run clean` | Delete the `dist/` folder |
| `npm run readme:icons` | Regenerate only the README **Icon gallery** (no font build) |

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
