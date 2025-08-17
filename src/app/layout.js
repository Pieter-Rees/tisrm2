import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import { pageInfo } from "../data/general";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: pageInfo.title,
  description: pageInfo.pageDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
              margin: '0 auto'
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
