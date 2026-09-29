'use client'

import { Box, Container } from '@chakra-ui/react'
import PageTransition from '@/components/page-transition'
import PageHero from '@/components/page-hero'
import ContactBand from '@/components/contact-band'
import GridLayout from '@/components/gridLayout'
import Breadcrumb from '@/components/breadcrumb'
import { contentPy } from '@/constants/spacing'
import { lightSurfaceGradient } from '@/constants/surfaces'

export const defaultHeroMinHeight = { base: '52vh', md: '62vh' }

export default function InnerPage({
  hero,
  children,
  sidebar = true,
  showContactBand = true,
  contactBandProps = {},
  afterContent = null,
  contentPadding,
}) {
  const heroProps = {
    minHeight: defaultHeroMinHeight,
    ...hero,
  }

  return (
    <PageTransition>
      <PageHero {...heroProps} />
      <Box bgGradient={lightSurfaceGradient}>
        <Container pt={contentPy} pb={contentPy} {...contentPadding}>
          <GridLayout
            title={hero?.title}
            hideTitle
            breadcrumb={<Breadcrumb capitalizeLinks />}
            sidebar={sidebar}
          >
            {children}
          </GridLayout>
        </Container>
      </Box>
      {afterContent}
      {showContactBand && <ContactBand {...contactBandProps} />}
    </PageTransition>
  )
}
