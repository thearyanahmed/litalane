const modules = import.meta.glob('./assets/care/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const urls = Object.keys(modules)
  .sort()
  .map((k) => modules[k]);

export function careImages() {
  return urls;
}

export const firstCareImage = urls[0] ?? null;
