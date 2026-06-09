import manifest from './assets/food/manifest.json';

const urls = import.meta.glob(
  './assets/food/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
);

function urlFor(name) {
  return urls[`./assets/food/${name}`];
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

export function foodImages() {
  return pictures;
}

export const firstFoodImage = pictures[0] ?? null;
