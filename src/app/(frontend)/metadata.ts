import { pageInfo } from '@/data/general';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageInfo.name,
  description: pageInfo.description,
  keywords: [
    'verzekeringen',
    'risk management',
    'TIS',
    'schadeafhandeling',
    'bedrijfsverzekeringen',
    'particuliere verzekeringen',
    'taxi verzekeringen',
  ],
  authors: [{ name: pageInfo.name }],
  creator: pageInfo.name,
  publisher: pageInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: pageInfo.name,
    description: pageInfo.description,
    type: 'website',
    locale: 'nl_NL',
    siteName: pageInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: pageInfo.name,
    description: pageInfo.description,
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
