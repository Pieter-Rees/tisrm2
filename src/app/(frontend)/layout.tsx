import Footer from '@/components/footer';
import Header from '@/components/header';
import { DevPerformanceMonitor } from '@/components/performance-monitor';
import { SiteSettingsProvider } from '@/components/site-settings-provider';
import { getSiteSettings } from '@/lib/payload/getSiteSettings';
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Providers } from '@/app/(frontend)/providers';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

interface FrontendLayoutProps {
  children: ReactNode;
}

export default async function FrontendLayout({ children }: FrontendLayoutProps) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="nl" suppressHydrationWarning className="light">
      <body suppressHydrationWarning className={inter.className}>
        <GoogleTagManager gtmId="G-3HPHN1BV1Q" />
        <Providers>
          <SiteSettingsProvider value={siteSettings}>
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
          </SiteSettingsProvider>
        </Providers>
      </body>
    </html>
  );
}

export { metadata } from '@/app/(frontend)/metadata';
