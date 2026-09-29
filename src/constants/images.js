const productImageSources = ['/mercedes.png', '/audi.png']

export function isProductImage(src) {
  if (!src || typeof src !== 'string') return false
  const path = src.split('?')[0]
  return productImageSources.includes(path)
}
