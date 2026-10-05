import Footer from '@/components/footer';
import Header from '@/components/header';
import { DevPerformanceMonitor } from '@/components/performance-monitor';
import { JsonLd } from '@/components/seo/JsonLd';
import { EXTERNAL_LINKS } from '@/constants/app';
import {
  getOrganizationSchema,
  getWebSiteSchema,
} from '@/lib/seo/organizationSchema';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl" suppressHydrationWarning className="light">
      <head>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
      </head>
      <body
        suppressHydrationWarning
        className={inter.className}
        style={{ backgroundColor: 'white', color: 'black' }}
      >
        <Providers>
          <DevPerformanceMonitor />
          <Header />
          <main
            style={{
              width: '100%',
              margin: '0 auto',
            }}
          >
            {children}
          </main>
          <Footer />
        </Providers>
        <GoogleAnalytics gaId={EXTERNAL_LINKS.gaId} />
      </body>
    </html>
  );
}

export { metadata } from '@/app/metadata';
