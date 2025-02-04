import { Inter } from "next/font/google";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Providers } from "./providers";
import { pageInfo } from "../data/general";
import { Flex, Container } from "@chakra-ui/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: pageInfo.title,
  description: pageInfo.pageDescription,
  keywords: [
    "TIS",
    "TISRM",
    "TIS RISK MANAGERS",
    "TIS Risk Managers",
    "TISRM.nl",
    "Enthoven",
    "Verzekeringen",
    "Verzekering",
    "Verzekeraar",
    "Verzekeraars",
    "Taxi",
    "Taxi verzekering",
    "Taxi verzekeringen",
    "Taxi verzekeraar",
    "Taxi verzekeraars",
    "Tis Taxi",
    "Tis Taxi verzekering",
    "Tis Taxi verzekeringen",
    "Tis Taxi verzekeraar",
    "Tis Taxi verzekeraars"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          strategy="afterInteractive"
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=G-3HPHN1BV1Q`}
        />
        <Script
          async
          strategy="afterInteractive"
          id="google-analytics-inline"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3HPHN1BV1Q', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>

      <body className={inter.className}>
        <Providers>
          <Header />
          <Flex
            paddingY='4'
            width='100%'
            maxWidth={{ xl: "1700px" }}
            margin="0 auto"
            flexDirection='column'
          >


            {children}
          </Flex>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
