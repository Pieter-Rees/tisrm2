'use client';

import ContactInfo from '@/components/contact-info';
import Logo from '@/components/logo';
import { FadeInUp, ScaleIn, SlideInLeft } from '@/components/page-animation';
import PageLayout from '@/components/page-layout';
import { UI_CONSTANTS } from '@/constants/app';
import { PARAGRAPH_STYLES, SECTION_SPACING } from '@/constants/typography';
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
    <PageLayout title="Contact">
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={SECTION_SPACING.small}
          alignItems="stretch"
          width="100%"
        >
          <GridItem display="flex" flexDirection="column" minW="0">
            <SlideInLeft>
              <Flex
                width="100%"
                py={SECTION_SPACING.medium}
                justifyContent="center"
              >
                <Logo />
              </Flex>
              <ContactInfo buttonVariant="outline" />
            </SlideInLeft>
          </GridItem>
          <GridItem display="flex" minW="0">
            <Box
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
              position="relative"
              width="full"
              height={{ base: '300px', md: '400px', lg: '500px' }}
              minHeight="300px"
              transition={UI_CONSTANTS.hover.image.transition}
              _hover={UI_CONSTANTS.hover.image}
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
          <Box pt={SECTION_SPACING.large} textAlign="center">
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
                onClick={handleSchadeClick}
                size="lg"
                borderRadius="lg"
                transition={UI_CONSTANTS.hover.button.transition}
                _hover={{
                  bg: 'blue.600',
                  ...UI_CONSTANTS.hover.button,
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
              >
                Schade melden
              </Button>
            </FadeInUp>
          </Box>
        </ScaleIn>
      </Flex>
    </PageLayout>
  );
}
