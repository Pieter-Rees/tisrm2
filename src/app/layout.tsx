import Footer from '@/components/footer';
import Header from '@/components/header';
import { DevPerformanceMonitor } from '@/components/performance-monitor';
import { JsonLd } from '@/components/seo/JsonLd';
import { EXTERNAL_LINKS } from '@/constants/app';
import {
  getOrganizationSchema,
  getWebSiteSchema,
} from '@/lib/seo/organizationSchema';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { Providers } from './providers';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="nl"
      suppressHydrationWarning
      className={`light ${sansFont.variable}`}
    >
      <head>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
      </head>
      <body
        suppressHydrationWarning
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
        <Script id="ga-init" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${EXTERNAL_LINKS.gaId}');`}
        </Script>
        <Script
          id="ga-src"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${EXTERNAL_LINKS.gaId}`}
        />
      </body>
    </html>
  );
}

export { metadata } from '@/app/metadata';
