import { pageInfo } from '@/data/general';
import type { Metadata } from 'next';

import { PAGE_META } from '@/lib/seo/pageMeta';

const ogImage = {
  url: '/1.webp',
  width: 1200,
  height: 630,
  alt: 'TIS Risk Managers',
};

export const metadata: Metadata = {
  metadataBase: new URL(pageInfo.url),
  // Page titles come from the copy deck verbatim, so no brand template here.
  title: {
    default: PAGE_META.home.title,
    template: '%s',
  },
  description: PAGE_META.home.description,
  keywords: [
    'verzekeringen',
    'risicoadvies',
    'TIS Risk Managers',
    'schadeafhandeling',
    'zakelijke verzekeringen',
    'particuliere verzekeringen',
    'taxiverzekering',
    'verzekeringsadvies Amsterdam',
  ],
  authors: [{ name: pageInfo.name }],
  creator: pageInfo.name,
  publisher: pageInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
  },
  openGraph: {
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    type: 'website',
    locale: 'nl_NL',
    siteName: pageInfo.name,
    url: pageInfo.url,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
