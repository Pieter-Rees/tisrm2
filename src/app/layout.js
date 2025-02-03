import { Inter } from "next/font/google";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Providers } from "./providers";
import { pageInfo } from "../data/general";
import { Flex, Container } from "@chakra-ui/react";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: pageInfo.title,
  description: pageInfo.pageDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-3HPHN1BV1Q" />
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
