const modules = import.meta.glob('./assets/home/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const urls = Object.keys(modules)
  .sort()
  .map((k) => modules[k]);

export function homeImages() {
  return urls;
}

export const firstHomeImage = urls[0] ?? null;
