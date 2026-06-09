#!/usr/bin/env node
// Generate webp + avif variants per image, compute focal points with smartcrop,
// and write a single manifest.json per kind.
//
// Usage:
//   node scripts/process.mjs                  # food, care, home
//   node scripts/process.mjs care home        # subset
//
// Per source image (kind-NN.jpg / .jpeg / .png):
//   kind-NN.webp   (q80)
//   kind-NN.avif   (q55, effort 4)
//
// Manifest shape (src/lib/assets/<kind>/manifest.json):
//   {
//     "care-01.jpg": {
//       "src": "care-01.jpg",
//       "w": 1800, "h": 1200,
//       "webp": "care-01.webp",
//       "avif": "care-01.avif",
//       "focal": [0.42, 0.5]
//     }
//   }

import smartcrop from 'smartcrop-sharp';
import sharp from 'sharp';
import { readdir, writeFile, unlink } from 'node:fs/promises';
import { join, parse } from 'node:path';

const KIND_ARGS = process.argv.slice(2);
const KINDS = KIND_ARGS.length ? KIND_ARGS : ['food', 'care', 'home'];

const SRC_RE = /\.(jpe?g|png)$/i;
const VARIANT_RE = /\.(webp|avif)$/i;

for (const kind of KINDS) {
  const dir = `src/lib/assets/${kind}`;
  let entries;
  try {
    entries = await readdir(dir);
  } catch {
    console.log(`skip [${kind}]: dir '${dir}' missing`);
    continue;
  }

  for (const f of entries) {
    if (VARIANT_RE.test(f)) {
      await unlink(join(dir, f)).catch(() => {});
    }
  }

  const sources = entries.filter((f) => SRC_RE.test(f)).sort();
  if (sources.length === 0) {
    console.log(`skip [${kind}]: no source images in '${dir}'`);
    continue;
  }

  console.log(`==> ${kind}  (${sources.length} source(s))`);
  const manifest = {};

  for (const src of sources) {
    const fp = join(dir, src);
    const base = parse(src).name;
    try {
      const meta = await sharp(fp).metadata();
      const w = meta.width ?? 0;
      const h = meta.height ?? 0;
      if (!w || !h) {
        console.warn(`  ${src}: skipped (no dimensions)`);
        continue;
      }

      const webpName = `${base}.webp`;
      const avifName = `${base}.avif`;
      await sharp(fp).webp({ quality: 80 }).toFile(join(dir, webpName));
      await sharp(fp).avif({ quality: 55, effort: 4 }).toFile(join(dir, avifName));

      const roi = Math.min(w, h, 200);
      const { topCrop } = await smartcrop.crop(fp, { width: roi, height: roi });
      const fx = +((topCrop.x + topCrop.width / 2) / w).toFixed(3);
      const fy = +((topCrop.y + topCrop.height / 2) / h).toFixed(3);

      manifest[src] = { src, w, h, webp: webpName, avif: avifName, focal: [fx, fy] };
      console.log(`  ${src}: ${w}x${h}  webp+avif  focal=${fx},${fy}`);
    } catch (err) {
      console.warn(`  ${src}: error (${err.message})`);
    }
  }

  const outPath = join(dir, 'manifest.json');
  await writeFile(outPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`done [${kind}]: wrote ${outPath}\n`);
}
