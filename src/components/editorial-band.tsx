'use client';

import MediaFrame from '@/components/media-frame';
import { ButtonLink } from '@/components/ui/button-link';
import { copyGap, sectionPy } from '@/constants/spacing';
import { lightSurfaceGradient } from '@/constants/surfaces';
import { HEADING_STYLES, PARAGRAPH_STYLES } from '@/constants/typography';
import { DESIGN_BUTTON_STYLES } from '@/styles/components/button.styles';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

interface EditorialBandProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  ctaLabel?: string;
  reverse?: boolean;
  imageAlt?: string;
  indexLabel?: string;
}

const EditorialBand = ({
  title,
  description,
  image,
  href,
  ctaLabel = 'Ontdek meer',
  reverse = false,
  imageAlt,
  indexLabel,
}: EditorialBandProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // `idle` is what server rendering and a JS-less browser get, so the band is
  // readable by default; the observer only adds the reveal on top of it.
  const [reveal, setReveal] = useState<'idle' | 'hidden' | 'shown'>('idle');

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setReveal('shown');
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    setReveal(current => (current === 'idle' ? 'hidden' : current));
    return () => observer.disconnect();
  }, []);

  const isHidden = reveal === 'hidden';

  return (
    <Box
      ref={ref}
      as="section"
      width="100%"
      bgImage={lightSurfaceGradient}
      opacity={isHidden ? 0 : 1}
      transform={isHidden ? 'translateY(36px)' : 'translateY(0)'}
      transition={
        reveal === 'shown' ?
          'opacity 0.85s ease-out, transform 0.85s ease-out'
        : 'none'
      }
    >
      <Flex
        direction={{ base: 'column', lg: reverse ? 'row-reverse' : 'row' }}
        align="stretch"
        minHeight={{ lg: '72vh' }}
      >
        <Box
          flex={{ base: 'none', lg: '1.2' }}
          position="relative"
          overflow="hidden"
          minHeight={{ base: '46vh', lg: '72vh' }}
        >
          <Box position="absolute" inset="0">
            <MediaFrame src={image} alt={imageAlt || title} height="100%" />
          </Box>
        </Box>

        <Flex
          flex="1"
          direction="column"
          justify="center"
          gap={copyGap}
          px={{ base: 6, md: 10, lg: 12, xl: 16, '2xl': 20 }}
          py={sectionPy}
          maxW={{ lg: '560px', xl: '640px' }}
          w="100%"
          alignSelf="center"
        >
          {indexLabel && (
            <Text {...HEADING_STYLES.eyebrow} color="navy.500">
              {indexLabel}
            </Text>
          )}
          <Box width="56px" height="1px" bg="gold.400" />
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            {title}
          </Heading>
          <Text {...PARAGRAPH_STYLES.lead} maxW="440px">
            {description}
          </Text>
          {href && (
            <Box>
              <ButtonLink href={href} {...DESIGN_BUTTON_STYLES.textLink}>
                {ctaLabel}
              </ButtonLink>
            </Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default EditorialBand;
