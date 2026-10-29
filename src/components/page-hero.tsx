'use client';

import MediaFrame, { PhotoVeil } from '@/components/media-frame';
import { ButtonLink } from '@/components/ui/button-link';
import { isProductImage } from '@/constants/images';
import { PAGE_CONTAINER, copyGap, splitGap } from '@/constants/spacing';
import { HEADING_STYLES } from '@/constants/typography';
import { DESIGN_BUTTON_STYLES } from '@/styles/components/button.styles';
import type { ResponsiveValue } from '@/types/components';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';

type HeroFrame = 'cover' | 'portrait' | 'product';

function resolveFrame(image: string, frame: HeroFrame): HeroFrame {
  if (isProductImage(image)) return 'product';
  if (frame === 'portrait') return 'portrait';
  return 'cover';
}

export interface PageHeroProps {
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  frame?: HeroFrame;
  ctaLabel?: string;
  ctaHref?: string;
  eyebrow?: string;
  minHeight?: ResponsiveValue<string>;
}

const PageHero = ({
  title,
  description,
  image,
  imageAlt,
  frame = 'cover',
  ctaLabel,
  ctaHref,
  eyebrow,
  minHeight = { base: '58vh', md: '72vh' },
}: PageHeroProps) => {
  const resolvedFrame = resolveFrame(image, frame);
  const isCover = resolvedFrame === 'cover';
  const alt = imageAlt || title;

  return (
    <Box
      position="relative"
      width="100%"
      minHeight={isCover ? minHeight : 'auto'}
      overflow="hidden"
      mb="0"
      bg={isCover ? undefined : 'navy.800'}
    >
      {isCover && (
        <Box position="absolute" inset="0">
          <MediaFrame src={image} alt="" height="100%" />
          <PhotoVeil />
        </Box>
      )}
      <Container
        {...PAGE_CONTAINER}
        position="relative"
        height="100%"
        minHeight={isCover ? minHeight : 'auto'}
        display="flex"
        alignItems={isCover ? 'flex-end' : 'center'}
        pb={{ base: 12, md: 20 }}
        pt={{ base: 12, md: 20 }}
      >
        <Flex
          direction={isCover ? 'column' : { base: 'column', lg: 'row' }}
          align={isCover ? 'flex-start' : 'center'}
          justify="space-between"
          width="100%"
          gap={splitGap}
        >
          <Flex
            direction="column"
            maxW={{ base: '100%', md: '860px' }}
            gap={copyGap}
            flex={isCover ? undefined : '1.15'}
            opacity="0"
            animation="heroFade 0.95s ease-out forwards"
          >
            {eyebrow && (
              <Text {...HEADING_STYLES.eyebrow} color="gold.400">
                {eyebrow}
              </Text>
            )}
            <Box width="56px" height="1px" bg="gold.400" />
            <Heading as="h1" {...HEADING_STYLES.display} color="white" mb="0">
              {title}
            </Heading>
            {description && (
              <Text
                color="white"
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="medium"
                mb="0"
                maxW="640px"
                lineHeight="1.45"
              >
                {description}
              </Text>
            )}
            {ctaLabel && ctaHref && (
              <Box>
                <ButtonLink
                  href={ctaHref}
                  size="lg"
                  {...DESIGN_BUTTON_STYLES.onDark}
                >
                  {ctaLabel}
                </ButtonLink>
              </Box>
            )}
          </Flex>
          {resolvedFrame === 'product' && (
            <Flex
              flex="1"
              align="center"
              justify="center"
              minW={{ lg: '380px' }}
              w="100%"
            >
              <Image
                src={image}
                alt={alt}
                maxW="100%"
                maxH={{ base: '200px', md: '340px' }}
                width="auto"
                height="auto"
                objectFit="contain"
              />
            </Flex>
          )}
          {resolvedFrame === 'portrait' && (
            <Box flex="1" maxW="560px" w="100%">
              <Image
                src={image}
                alt={alt}
                width="100%"
                height="auto"
                display="block"
              />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default PageHero;
