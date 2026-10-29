const productImageSources = ['/mercedes.png', '/audi.png'];

/** Product shots get a padded navy stage instead of a full-bleed crop. */
export function isProductImage(src: string | undefined | null): boolean {
  if (!src || typeof src !== 'string') return false;
  const path = src.split('?')[0] ?? src;
  return productImageSources.includes(path);
}
