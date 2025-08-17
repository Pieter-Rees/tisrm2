import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Providers } from './providers';
import { pageInfo } from '../data/general';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: pageInfo.title,
  description: pageInfo.pageDescription,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="G-3HPHN1BV1Q" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div
            style={{
              padding: '16px 0',
              width: '100%',
              maxWidth: '1700px',
              margin: '0 auto',
            }}
          >
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
