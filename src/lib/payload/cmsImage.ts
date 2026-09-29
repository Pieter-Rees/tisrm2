import { resolveMediaUrl } from './resolveMediaUrl';

export { resolveMediaUrl };

/** Payload media URLs may be absolute or served outside /public. */
export function isCmsMediaSrc(src: string): boolean {
  return (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('/api/') ||
    src.startsWith('/media/')
  );
}

export function pageImageSrc(
  cmsUrl: string | null | undefined,
  fallback: string,
): string {
  if (cmsUrl && cmsUrl.trim().length > 0) {
    return cmsUrl;
  }
  return fallback;
}
