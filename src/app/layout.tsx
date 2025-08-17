import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Providers } from './providers';
import { GoogleTagManager } from '@next/third-parties/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

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

// Export metadata at end of file to avoid fast refresh warnings
export { metadata } from './metadata';
