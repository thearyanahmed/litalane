import manifest from './assets/care/manifest.json';

const urls = import.meta.glob(
  './assets/care/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
);

function urlFor(name) {
  return urls[`./assets/care/${name}`];
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

export function careImages() {
  return pictures;
}

export const firstCareImage = pictures[0] ?? null;
