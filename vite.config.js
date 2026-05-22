import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

const FOOD_DIR = path.resolve('static/food');
const FOOD_RE = /\.(jpe?g|png|webp|avif)$/i;

function listFood() {
  if (!fs.existsSync(FOOD_DIR)) return [];
  return fs
    .readdirSync(FOOD_DIR)
    .filter((f) => FOOD_RE.test(f))
    .sort();
}

function foodManifestPlugin() {
  const id = 'virtual:food-manifest';
  const resolved = '\0' + id;
  return {
    name: 'food-manifest',
    resolveId(src) {
      if (src === id) return resolved;
    },
    load(src) {
      if (src === resolved) {
        return `export const files = ${JSON.stringify(listFood())};`;
      }
    },
    configureServer(server) {
      try {
        fs.watch(FOOD_DIR, { persistent: false }, () => {
          const mod = server.moduleGraph.getModuleById(resolved);
          if (mod) server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: 'full-reload' });
        });
      } catch {}
    }
  };
}

export default defineConfig({
  plugins: [foodManifestPlugin(), sveltekit()]
});
