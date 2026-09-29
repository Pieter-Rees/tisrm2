export function resolveMediaUrl(media: unknown): string | null {
  if (!media || typeof media !== 'object') {
    return null;
  }
  if ('url' in media && typeof media.url === 'string' && media.url.length > 0) {
    return media.url;
  }
  return null;
}
