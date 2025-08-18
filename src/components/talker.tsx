'use client';

import { memo } from 'react';
import { Flex, Text, Box, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { BsQuote } from 'react-icons/bs';

import { cn } from '@/lib/utils';
import type { TalkerProps } from '@/types/components';
import { PARAGRAPH_STYLES, SECTION_SPACING } from '@/constants/typography';
const DEFAULT_TESTIMONIAL = {
  name: 'René Enthoven',
  title: 'Directeur TIS Risk Managers',
  image: '/rene.jpg',
  quote: 'De weldaden van een verzekering komen samen met het onheil aan het licht.',
  company: 'TIS Risk Managers',
} as const;
const Talker = memo<TalkerProps>(({
  name = DEFAULT_TESTIMONIAL.name,
  title = DEFAULT_TESTIMONIAL.title,
  image = DEFAULT_TESTIMONIAL.image,
  quote = DEFAULT_TESTIMONIAL.quote,
  company = DEFAULT_TESTIMONIAL.company,
  className,
  'data-testid': testId,
}) => {
  return (
    <Box
      data-testid={testId}
      as="section"
      role="region"
      aria-label="Customer testimonial"
      py={{ base: '12', lg: '20' }}
      px={{ base: '4', lg: '8' }}
      bg="gray.50"
      borderRadius="xl"
      boxShadow="sm"
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: '8', lg: '16' }}
        justify="center"
        align="center"
        maxW="4xl"
        mx="auto"
      >

        <Box
          position="relative"
          flexShrink={0}
          order={{ base: 1, lg: 0 }}
        >
          <Box
            position="relative"
            width={{ base: '200px', lg: '280px' }}
            height={{ base: '200px', lg: '280px' }}
            borderRadius="full"
            overflow="hidden"
            boxShadow="xl"
            bg="gray.200"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 'full',
              boxShadow: 'inset 0 0 0 4px white',
              zIndex: 1,
            }}
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


        <VStack
          align={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          gap="6"
          flex="1"
          maxW={{ base: 'full', lg: '2xl' }}
        >

          <Box color="blue.500" opacity="0.8">
            <BsQuote size="48" />
          </Box>


          <Box
            position="relative"
            {...PARAGRAPH_STYLES.large}
            fontStyle="italic"
            pl="4"
            pr="4"
          >
            {quote}
          </Box>


          <VStack gap="1" align={{ base: 'center', lg: 'flex-start' }}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="text.primary"
              lineHeight="tight"
            >
              {name}
            </Text>
            <Text
              fontSize="md"
              color="text.accent"
              fontWeight="medium"
            >
              {title}
            </Text>
            {company && (
              <Text
                fontSize="sm"
                color="text.muted"
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
});

Talker.displayName = 'Talker';

export default Talker;