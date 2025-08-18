import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Providers } from './providers';
import { GoogleTagManager } from '@next/third-parties/google';
import type { ReactNode } from 'react';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
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
      <body className={inter.className} style={{ backgroundColor: 'white', color: 'black' }}>
        <Providers>
          <Header />
          <main
            style={{
              padding: '0 0 16px 0',
              width: '100%',
              margin: '0 auto',
              minHeight: 'calc(100vh - 200px)', // Ensure minimum height for content
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

// Export metadata at end of file to avoid fast refresh warnings
export { metadata } from './metadata';
