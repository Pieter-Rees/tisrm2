import { Inter } from "next/font/google";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { Providers } from "./providers";
import { pageInfo } from "@/data/general";

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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
