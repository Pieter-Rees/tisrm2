'use client';

import ContactInfo from '@/components/contact-info';
import Logo from '@/components/logo';
import { FadeInUp, ScaleIn, SlideInLeft } from '@/components/page-animation';
import { UnifiedLayout } from '@/components/layout';
import { PARAGRAPH_STYLES, SECTION_SPACING } from '@/constants/typography';
import {
  // contactGridStyles,
  // contactGridItemStyles,
  // contactLogoContainerStyles,
  // contactImageContainerStyles,
  // contactImageStyles,
  // contactCtaSectionStyles,
  // contactCtaButtonStyles,
} from '@/styles/components/page.styles';
import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Contact() {
  const handleSchadeClick = () => {
    window.open(
      'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <UnifiedLayout title="Contact">
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Grid
          gridTemplateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap="6"
          alignItems="stretch"
          width="100%"
        >
          <GridItem display="flex" flexDirection="column" minW="0">
            <SlideInLeft>
              <Flex width="100%" py="8" justifyContent="center">
                <Logo />
              </Flex>
              <ContactInfo buttonVariant="outline" />
            </SlideInLeft>
          </GridItem>
          <GridItem display="flex" flexDirection="column" minW="0">
            <Box
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
              position="relative"
              width="full"
              height={{ base: '300px', md: '400px', lg: '500px' }}
              minHeight="300px"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.02)',
                boxShadow: 'xl',
              }}
            >
              <Image
                src="/bb.jpg"
                alt="Office building of TIS Risk Managers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
              />
            </Box>
          </GridItem>
        </Grid>

        <ScaleIn delay={0.4}>
          <Box pt="12" textAlign="center">
            <FadeInUp delay={0.5}>
              <Text {...PARAGRAPH_STYLES.body} textAlign="center">
                Wil u uw schade inzien of een schade melden, klik op
                onderstaande knop.
              </Text>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <Button
                bg="blue.500"
                color="white"
                borderRadius="lg"
                transition="all 0.2s ease-in-out"
                _hover={{
                  bg: 'blue.600',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                onClick={handleSchadeClick}
              >
                Schade melden
              </Button>
            </FadeInUp>
          </Box>
        </ScaleIn>
      </Flex>
    </UnifiedLayout>
  );
}
