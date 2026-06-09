import manifest from './assets/home/manifest.json';

const urls = import.meta.glob(
  './assets/home/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
);

function urlFor(name) {
  return urls[`./assets/home/${name}`];
}

const pictures = Object.keys(manifest)
  .sort()
  .map((key) => {
    const m = manifest[key];
    return {
      img: { src: urlFor(m.src), w: m.w, h: m.h },
      sources: {
        avif: urlFor(m.avif),
        webp: urlFor(m.webp)
      },
      focal: m.focal
    };
  });

export function homeImages() {
  return pictures;
}

export const firstHomeImage = pictures[0] ?? null;
