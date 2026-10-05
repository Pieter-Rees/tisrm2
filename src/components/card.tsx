'use client';

import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import {
  BsArrowRight,
  BsDownload,
  BsFileEarmarkText,
  BsTelephone,
} from 'react-icons/bs';

import { ButtonLink } from '@/components/ui/button-link';
import { SPACING_PATTERNS, SPACING_SCALE } from '@/constants/layout';
import { HEADING_STYLES, PARAGRAPH_STYLES } from '@/constants/typography';
import { cn } from '@/lib/utils';
import { cardActionStyles, getCardStyles } from '@/styles/components/card.styles';
import type { CardProps } from '@/types/components';

const Card = memo<CardProps>(
  ({
    title,
    titleAs = 'h3',
    description,
    image,
    altText,
    downloadLink,
    cta,
    ctaLink,
    phone,
    variant = 'default',
    loading = false,
    disabled = false,
    className,
    'data-testid': testId,
  }) => {
    const hasAction = Boolean(cta || phone || downloadLink);
    const isInteractive = Boolean(ctaLink || phone || downloadLink);
    const cardStyles = getCardStyles(variant, disabled, isInteractive);

    const cardContent = (
      <>
        {image && (
          <Box
            position="relative"
            overflow="hidden"
            borderTopRadius="lg"
            height={{
              base: '140px',
              sm: '160px',
              md: '180px',
              lg: '200px',
              xl: '240px',
            }}
            bg="gray.100"
          >
            <Image
              src={image}
              alt={altText || title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              loading={loading ? 'eager' : 'lazy'}
            />
          </Box>
        )}

        <Box
          p={variant === 'downloads' ? '0' : SPACING_PATTERNS.card.padding}
          flex="1"
          display="flex"
          flexDirection="column"
        >
          {variant === 'downloads' && (
            <Box display="flex" alignItems="center" gap={SPACING_SCALE.sm} mb={SPACING_SCALE.md}>
              <Icon as={BsFileEarmarkText} color="blue.500" boxSize="5" />
              <Heading as={titleAs} {...HEADING_STYLES.h4} mb="0">
                {title}
              </Heading>
            </Box>
          )}
          {variant !== 'downloads' && (
            <Heading as={titleAs} {...HEADING_STYLES.h4}>
              {title}
            </Heading>
          )}

          {description && (
            <Text {...PARAGRAPH_STYLES.body} flex="1">
              {description}
            </Text>
          )}

          {hasAction && (
            <Box {...(description ? cardActionStyles : { mt: 'auto' })}>
              {phone && (
                <ButtonLink
                  href={phone}
                  width="full"
                  gap={SPACING_SCALE.xs}
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  colorScheme="green"
                  variant="outline"
                >
                  <BsTelephone />
                  Bel nu
                </ButtonLink>
              )}

              {downloadLink && (
                <ButtonLink
                  href={downloadLink}
                  download
                  width="full"
                  gap={SPACING_SCALE.xs}
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    transform: 'translateY(-1px)',
                    boxShadow: 'md',
                  }}
                  bg="blue.500"
                  color="white"
                  variant="solid"
                  size="md"
                  fontWeight="medium"
                  borderRadius="md"
                >
                  <BsDownload />
                  Download
                </ButtonLink>
              )}

              {cta && ctaLink && (
                <ButtonLink
                  href={ctaLink}
                  width="full"
                  gap={SPACING_SCALE.xs}
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  colorScheme="blue"
                  variant="solid"
                >
                  {cta}
                  <BsArrowRight />
                </ButtonLink>
              )}
            </Box>
          )}
        </Box>
      </>
    );

    return (
      <Box
        as="article"
        className={cn('card', className)}
        data-testid={testId}
        data-variant={variant}
        {...cardStyles}
        aria-label={`${title}${description ? `: ${description}` : ''}`}
        w="100%"
        h="100%"
      >
        {cardContent}
      </Box>
    );
  },
);

Card.displayName = 'Card';

export default Card;
