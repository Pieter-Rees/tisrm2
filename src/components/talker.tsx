'use client';

import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import { BsQuote } from 'react-icons/bs';

import { PARAGRAPH_STYLES } from '@/constants/typography';
import { testimonialContainerStyles } from '@/styles/components/testimonial.styles';
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
          gap={{ base: '8', lg: '12' }}
          alignItems="center"
          justifyContent="center"
        >
          <Box flex="0 0 auto" mb={{ base: '4', lg: '0' }}>
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
                priority
              />
            </Box>
          </Box>

          <VStack alignItems="center" gap="6" flex="1" textAlign="center">
            <Box color="blue.500" opacity="0.6">
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

            <VStack alignItems="center" gap="1" mt="4">
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                {name}
              </Text>
              <Text fontSize="md" color="gray.600">
                {title}
              </Text>
              {company && (
                <Text fontSize="sm" color="blue.600" fontWeight="medium">
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
