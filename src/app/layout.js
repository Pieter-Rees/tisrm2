import { Inter } from "next/font/google";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Providers } from "./providers";
import { pageInfo } from "../data/general";
import { Flex, Container } from "@chakra-ui/react";
import Breadcrumb from "@/components/breadcrumb";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: pageInfo.title,
  description: pageInfo.pageDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
            <Container
              paddingTop='20'
            >
              <Breadcrumb capitalizeLinks />
            </Container>
          </Flex>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
