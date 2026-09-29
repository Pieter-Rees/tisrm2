import { Fraunces, Manrope } from 'next/font/google'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import { Providers } from './providers'
import { pageInfo } from '../data/general'
import { Box } from '@chakra-ui/react'
import { GoogleTagManager } from '@next/third-parties/google'
import BackgroundVideo from '@/components/background-video'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: pageInfo.title,
  description: pageInfo.pageDescription,
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${manrope.variable}`}>
      <GoogleTagManager gtmId="G-3HPHN1BV1Q" />
      <body className={manrope.className}>
        <Providers>
          <Box
            position="fixed"
            inset="0"
            zIndex="0"
            pointerEvents="none"
            overflow="hidden"
          >
            <BackgroundVideo />
          </Box>
          <Box position="relative" zIndex="1">
            <Header />
            <Box as="main" width="100%" minHeight="60vh">
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  )
}
