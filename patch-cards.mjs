/**
 * patch-cards.mjs
 * ───────────────────────────────────────────────────────────────
 * Batch-updates all dark navy card styles across your Astro project
 * to match Option E background + E-3 typography + metallic lustre.
 *
 * Run from your project root:
 *   node patch-cards.mjs
 *
 * Add --apply flag to write changes (default is dry-run preview):
 *   node patch-cards.mjs --apply
 * ───────────────────────────────────────────────────────────────
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const APPLY = process.argv.includes('--apply');
const SRC   = './src';   // adjust if your source folder differs

// ── Colour / typography replacements ───────────────────────────
// Each entry: { find: string|RegExp, replace: string, label: string }
// Applied in order — put more specific patterns first.
const REPLACEMENTS = [

  // ── 1. OLD GRADIENT (any combo of navy-deep/ink/black CSS vars) ──
  // Matches the three-stop gradient used across most card components.
  {
    label: 'Card background gradient → Option E (no black)',
    find: /background:\s*\n?\s*radial-gradient\(ellipse 90% 70% at 35% 40%, rgba\(8,56,146,0\.9\)[^)]+\),\s*\n?\s*radial-gradient\(ellipse 50% 60% at 95% 90%, rgba\(192,24,30,\.07\)[^)]+\),\s*\n?\s*linear-gradient\(155deg, var\(--navy-deep\) 0%, var\(--ink\) 55%, var\(--black\) 100%\)/g,
    replace:
`background:
      radial-gradient(ellipse 100% 60% at 20% -10%, rgba(140,180,255,.14) 0%, transparent 55%),
      radial-gradient(ellipse 60%  80% at 90% 110%, rgba(8,56,146,.25) 0%, transparent 55%),
      linear-gradient(145deg, #0e2454 0%, #163060 50%, #1a3875 100%)`,
  },

  // ── 2. SIMPLE gradient fallback (inline single-line versions) ──
  {
    label: 'Inline gradient fallback → Option E',
    find: /linear-gradient\(155deg,\s*var\(--navy-deep\)\s*0%,\s*var\(--ink\)\s*55%,\s*var\(--black\)\s*100%\)/g,
    replace: `linear-gradient(145deg, #0e2454 0%, #163060 50%, #1a3875 100%)`,
  },

  // ── 3. DESCRIPTION TEXT COLOR ──
  // var(--fog) and common hardcoded semi-white greys used on dark cards
  {
    label: 'Desc color var(--fog) → #e2ecf8',
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{[^}]*?)color:\s*var\(--fog\)/g,
    replace: '$1color: #e2ecf8',
  },
  {
    label: 'Desc color #9ab0cc → #e2ecf8',
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{[^}]*?)color:\s*#9ab0cc/g,
    replace: '$1color: #e2ecf8',
  },
  {
    label: 'Desc color #a0bcd8 → #e2ecf8',
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{[^}]*?)color:\s*#a0bcd8/g,
    replace: '$1color: #e2ecf8',
  },

  // ── 4. DESCRIPTION FONT SIZE ──
  // clamp patterns that resolve lower than 14px, and explicit 12/13px
  {
    label: 'Desc font-size clamp(12px…) → 14px',
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{[^}]*?)font-size:\s*clamp\(12px,[^)]+\)/g,
    replace: '$1font-size: 14px',
  },
  {
    label: 'Desc font-size clamp(13px,1\.15vw,14px) → 14px',
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{[^}]*?)font-size:\s*clamp\(13px,1\.15vw,14px\)/g,
    replace: '$1font-size: 14px',
  },
  {
    label: 'Desc font-size 12px → 14px (inside -desc rule)',
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{[^}]*?)font-size:\s*12px/g,
    replace: '$1font-size: 14px',
  },
  {
    label: 'Desc font-size 13px → 14px (inside -desc rule)',
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{[^}]*?)font-size:\s*13px/g,
    replace: '$1font-size: 14px',
  },

  // ── 5. DESCRIPTION FONT WEIGHT ──
  {
    label: 'Desc font-weight 400 → 300 (inside -desc rule)',
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{[^}]*?)font-weight:\s*400/g,
    replace: '$1font-weight: 300',
  },
  {
    label: 'Desc font-weight missing → add 300 before color line',
    // Only patches if weight is absent — heuristic: desc block has color: #e2ecf8 but no font-weight
    find: /(\s*\.(?:ind|wwd|svc|prod|card)-desc\s*\{(?:(?!font-weight)[^}])*?)(\s*color:\s*#e2ecf8)/g,
    replace: '$1\n    font-weight: 300;$2',
  },

];

// ── Metallic ::before sheen — injected after each card class block ──
// We look for the card rule closure and insert ::before if missing.
const SHEEN_MARKER   = '/* metallic-sheen */';
const SHEEN_SNIPPET  = `
  /* metallic-sheen */
  .{{PREFIX}}-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(180,210,255,.35) 25%,
      rgba(200,225,255,.55) 50%,
      rgba(180,210,255,.35) 75%,
      transparent 100%
    );
    z-index: 1;
    pointer-events: none;
  }`;

// ── File walker ──────────────────────────────────────────────────
function walk(dir, results = []) {
  readdirSync(dir).forEach(f => {
    const full = join(dir, f);
    if (statSync(full).isDirectory()) { walk(full, results); }
    else if (['.astro', '.css', '.scss'].includes(extname(f))) { results.push(full); }
  });
  return results;
}

// ── Detect card prefix (ind, wwd, svc …) ────────────────────────
function detectPrefixes(content) {
  const matches = content.match(/\.([\w]+)-card\b/g) ?? [];
  return [...new Set(matches.map(m => m.replace(/^\./,'').replace(/-card$/,'')))];
}

// ── Main ────────────────────────────────────────────────────────
const files   = walk(SRC);
let   changed = 0;

files.forEach(file => {
  const original = readFileSync(file, 'utf8');
  let   content  = original;
  const log      = [];

  // Apply text replacements
  REPLACEMENTS.forEach(({ label, find, replace }) => {
    const next = content.replace(find, replace);
    if (next !== content) {
      log.push(`  ✓ ${label}`);
      content = next;
    }
  });

  // Inject ::before sheen for each card prefix if not already present
  detectPrefixes(content).forEach(prefix => {
    if (!content.includes(SHEEN_MARKER) && content.includes(`.${prefix}-card`)) {
      const insertAfter = new RegExp(`(\\.${prefix}-card\\s*\\{[^}]+\\})`, 'g');
      const patched = content.replace(insertAfter, (match) => {
        return match + SHEEN_SNIPPET.replace(/\{\{PREFIX\}\}/g, prefix);
      });
      if (patched !== content) {
        log.push(`  ✓ Injected ::before metallic sheen for .${prefix}-card`);
        content = patched;
      }
    }
  });

  if (content !== original) {
    changed++;
    console.log(`\n📄 ${file}`);
    log.forEach(l => console.log(l));

    if (APPLY) {
      writeFileSync(file, content, 'utf8');
      console.log('  → Written ✅');
    } else {
      console.log('  → Dry run (add --apply to write)');
    }
  }
});

console.log(`\n${ APPLY ? 'Patched' : 'Would patch' } ${changed} file(s).`);
if (!APPLY && changed > 0) {
  console.log('Run with --apply to write changes:\n  node patch-cards.mjs --apply');
}
