import { files } from 'virtual:food-manifest';

export function foodImages(base = '') {
  return files.map((f) => `${base}/food/${f}`);
}
