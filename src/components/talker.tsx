'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import { BsQuote } from 'react-icons/bs';

import { SPACING_SCALE } from '@/constants/layout';
import { HEADING_STYLES, PARAGRAPH_STYLES } from '@/constants/typography';
import {
  testimonialContainerStyles,
  testimonialContentStyles,
  testimonialLayoutStyles,
} from '@/styles/components/testimonial.styles';
import type { TalkerProps } from '@/types/components';

const DEFAULT_TESTIMONIAL = {
  name: 'René Enthoven',
  title: 'Directeur TIS Risk Managers',
  image: '/rene.jpg',
  quote:
    'De weldaden van een verzekering komen samen met het onheil aan het licht.',
  company: 'TIS Risk Managers',
} as const;
const Talker = memo<TalkerProps>(
  ({
    name = DEFAULT_TESTIMONIAL.name,
    title = DEFAULT_TESTIMONIAL.title,
    image = DEFAULT_TESTIMONIAL.image,
    quote = DEFAULT_TESTIMONIAL.quote,
    company = DEFAULT_TESTIMONIAL.company,
    'data-testid': testId,
  }) => {
    return (
      <Box
        data-testid={testId}
        as="section"
        role="region"
        aria-label="Customer testimonial"
        {...testimonialContainerStyles}
      >
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={testimonialLayoutStyles.gap}
          alignItems="center"
          justifyContent="center"
        >
          <Box flex="0 0 auto">
            <Box
              position="relative"
              width={{ base: '200px', lg: '280px' }}
              height={{ base: '200px', lg: '280px' }}
              borderRadius="full"
              overflow="hidden"
              border="4px solid"
              borderColor="white"
              boxShadow="xl"
            >
              <Image
                src={image}
                alt={`Portrait of ${name}, ${title}`}
                fill
                sizes="(max-width: 768px) 200px, 280px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                loading="lazy"
              />
            </Box>
          </Box>

          <VStack
            alignItems="center"
            gap={testimonialContentStyles.gap}
            flex="1"
            textAlign="center"
          >
            <Box color="text.accent" aria-hidden="true">
              <BsQuote size="48" />
            </Box>

            <Box
              {...PARAGRAPH_STYLES.large}
              fontStyle="italic"
              lineHeight="loose"
              maxWidth="600px"
            >
              {quote}
            </Box>

            <VStack alignItems="center" gap={SPACING_SCALE.xs}>
              <Text {...HEADING_STYLES.h4} mb="0">
                {name}
              </Text>
              <Text {...PARAGRAPH_STYLES.body}>{title}</Text>
              {company && (
                <Text
                  {...PARAGRAPH_STYLES.small}
                  color="text.accent"
                  fontWeight="medium"
                >
                  {company}
                </Text>
              )}
            </VStack>
          </VStack>
        </Flex>
      </Box>
    );
  },
);

Talker.displayName = 'Talker';

export default Talker;
