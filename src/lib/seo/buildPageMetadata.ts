import type { Metadata } from 'next';

import { APP_CONFIG } from '@/constants/app';

const defaultOgImage = {
  url: '/1.webp',
  width: 1200,
  height: 630,
  alt: 'TIS Risk Managers',
};

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: BuildPageMetadataInput): Metadata {
  const canonicalPath = path === '/' ? '/' : path;
  const absoluteUrl = `${APP_CONFIG.url}${canonicalPath === '/' ? '' : canonicalPath}`;
  // Brand every title here instead of relying on the root title.template,
  // which does not reach segments nested two levels deep.
  const brandedTitle = `${title} | ${APP_CONFIG.name}`;

  return {
    title: {
      absolute: brandedTitle,
    },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url: absoluteUrl,
      type: 'website',
      locale: 'nl_NL',
      siteName: APP_CONFIG.name,
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [defaultOgImage.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
