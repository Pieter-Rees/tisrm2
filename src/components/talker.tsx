'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import { BsQuote } from 'react-icons/bs';

import { PARAGRAPH_STYLES, SECTION_SPACING } from '@/constants/typography';
import { testimonialContainerStyles } from '@/styles/components/testimonial.styles';
import type { TalkerProps } from '@/types/components';
import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';
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
          gap={SECTION_SPACING.small}
          alignItems="center"
          justifyContent="center"
        >
          <Box flex="0 0 auto" mb={{ base: SPACING_SCALE.md.base, lg: "0" }}>
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

          <VStack alignItems="center" gap={COMPONENT_SPACING.form.group} flex="1" textAlign="center">
            <Box color="blue.700">
              <BsQuote size="48" />
            </Box>

            <Box
              {...PARAGRAPH_STYLES.large}
              fontStyle="italic"
              lineHeight="1.8"
              maxWidth="600px"
              color="gray.700"
            >
              {quote}
            </Box>

            <VStack alignItems="center" gap={SPACING_SCALE.xs} mt={SPACING_SCALE.md}>
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                {name}
              </Text>
              <Text fontSize="md" color="gray.700">
                {title}
              </Text>
              {company && (
                <Text fontSize="sm" color="blue.900" fontWeight="medium">
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
