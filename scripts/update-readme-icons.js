const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const readmePath = path.join(root, 'README.md');
const svgDir = path.join(root, 'svg');
const START = '<!-- icon-gallery:start -->';
const END = '<!-- icon-gallery:end -->';
const COLS = 4;
/** Light card so dark SVG fills stay visible on GitHub dark mode; label text stays dark on the card. */
const CELL_STYLE =
  'background-color:#e8eaed;padding:10px 8px;color:#1f2328';
const CODE_STYLE = 'color:#1f2328;font-size:0.75em';
/** Dark grey glyph in the gallery (~#4a4d55) instead of pure black */
const IMG_STYLE =
  'filter:invert(29%) sepia(5%) saturate(0%) hue-rotate(201deg) brightness(96%) contrast(90%)';

function buildGallery() {
  const files = fs
    .readdirSync(svgDir)
    .filter((f) => f.endsWith('.svg'))
    .sort();

  const rows = [];
  for (let i = 0; i < files.length; i += COLS) {
    const chunk = files.slice(i, i + COLS);
    const cells = chunk
      .map((f) => {
        const id = f.replace(/\.svg$/, '');
        return `<td align="center" valign="top" width="25%" style="${CELL_STYLE}"><img src="svg/${f}" width="36" height="36" alt="${id}" style="${IMG_STYLE}" /><br /><sub><code style="${CODE_STYLE}">ei-${id}</code></sub></td>`;
      })
      .join('\n');
    const pad = COLS - chunk.length;
    const padHtml =
      pad > 0
        ? '\n' +
          Array.from({ length: pad }, () => '<td></td>').join('\n')
        : '';
    rows.push(`<tr>\n${cells}${padHtml}\n</tr>`);
  }

  return `${START}
## Icon gallery

GitHub does not load custom webfonts in README pages, so this gallery embeds each [source SVG](svg/) with \`<img>\` (the same artwork as the \`epicons\` font after \`npm run build\`). In your app, use \`ei\` plus \`ei-*\` where \`*\` is the name under each icon.

Each tile uses a light background so filled icons stay readable in **dark mode** (and labels use dark text on that tile).

<table>
${rows.join('\n')}
</table>

${END}`;
}

let readme = fs.readFileSync(readmePath, 'utf8');
const gallery = buildGallery();

if (readme.includes(START) && readme.includes(END)) {
  readme = readme.replace(new RegExp(`${START}[\\s\\S]*?${END}`), gallery);
} else {
  const anchor = '\n## Adding icons';
  if (!readme.includes(anchor.trim())) {
    throw new Error('README.md: expected "## Adding icons" section for gallery insertion');
  }
  readme = readme.replace(anchor, `\n${gallery}\n${anchor}`);
}

fs.writeFileSync(readmePath, readme);
