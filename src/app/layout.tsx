import Footer from '@/components/footer';
import Header from '@/components/header';
import { DevPerformanceMonitor } from '@/components/performance-monitor';
import { GoogleTagManager } from '@next/third-parties/google';
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
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <GoogleTagManager gtmId="G-3HPHN1BV1Q" />
      </head>
      <body
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
      </body>
    </html>
  );
}

export { metadata } from '@/app/metadata';
