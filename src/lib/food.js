const modules = import.meta.glob('./assets/food/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const urls = Object.keys(modules)
  .sort()
  .map((k) => modules[k]);

export function foodImages() {
  return urls;
}

export const firstFoodImage = urls[0] ?? null;
