'use client';

import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import { BsArrowRight, BsDownload, BsTelephone } from 'react-icons/bs';

import { UI_CONSTANTS } from '@/constants/app';
import { HEADING_STYLES, PARAGRAPH_STYLES } from '@/constants/typography';
import { cn } from '@/lib/utils';
import type { CardProps } from '@/types/components';
const CARD_VARIANTS = {
  default: {
    bg: 'white',
    shadow: 'lg',
    hover: {
      ...UI_CONSTANTS.hover.card,
      transform: 'translateY(-2px)',
    },
  },
  sidebar: {
    bg: 'white',
    shadow: 'md',
    hover: UI_CONSTANTS.hover.subtle,
  },
  downloads: {
    bg: 'blue.50',
    shadow: 'md',
    hover: {
      ...UI_CONSTANTS.hover.card,
      transform: 'scale(1.02)',
    },
  },
  elevated: {
    bg: 'white',
    shadow: 'xl',
    hover: UI_CONSTANTS.hover.card,
  },
} as const;
const Card = memo<CardProps>(
  ({
    title,
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
    const variantStyles = CARD_VARIANTS[variant];
    const hasAction = Boolean(cta || phone || downloadLink);
    const isInteractive = Boolean(ctaLink || phone || downloadLink);

    const cardStyles = {
      border: '1px solid',
      borderColor: disabled ? 'gray.300' : 'gray.200',
      borderRadius: 'lg',
      overflow: 'hidden',
      bg: disabled ? 'gray.50' : variantStyles.bg,
      boxShadow: variantStyles.shadow,
      transition: variantStyles.hover.transition,
      opacity: disabled ? 0.6 : 1,
      cursor: isInteractive && !disabled ? 'pointer' : 'default',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      _hover: !disabled && isInteractive ? variantStyles.hover : {},
      _focus: {
        outline: '2px solid',
        outlineColor: 'blue.500',
        outlineOffset: '2px',
      },
    };

    const cardContent = (
      <>
        {image && (
          <Box
            position="relative"
            overflow="hidden"
            borderTopRadius="lg"
            height={{ base: '200px', md: '240px' }}
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
          p={{ base: '4', md: '6' }}
          flex="1"
          display="flex"
          flexDirection="column"
        >
          <Heading as="h3" {...HEADING_STYLES.h4} mb={description ? '3' : '0'}>
            {title}
          </Heading>

          {description && (
            <Text
              {...PARAGRAPH_STYLES.body}
              mb={hasAction ? '4' : '0'}
              flex="1"
            >
              {description}
            </Text>
          )}

          {hasAction && (
            <Box mt="auto">
              {phone && (
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="blue"
                  width="full"
                  gap="2"
                  transition={UI_CONSTANTS.hover.button.transition}
                  _hover={UI_CONSTANTS.hover.button}
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = phone;
                  }}
                >
                  <BsTelephone />
                  Bel nu
                </Button>
              )}

              {downloadLink && (
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                  gap="2"
                  transition={UI_CONSTANTS.hover.button.transition}
                  _hover={UI_CONSTANTS.hover.button}
                  onClick={e => {
                    e.preventDefault();
                    const link = document.createElement('a');
                    link.href = downloadLink;
                    link.download = '';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <BsDownload />
                  Download
                </Button>
              )}

              {cta && ctaLink && (
                <Button
                  size="sm"
                  variant="outline"
                  colorScheme="blue"
                  width="full"
                  gap="2"
                  transition={UI_CONSTANTS.hover.button.transition}
                  _hover={UI_CONSTANTS.hover.button}
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = ctaLink;
                  }}
                >
                  {cta}
                  <BsArrowRight />
                </Button>
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
        role="article"
        aria-label={`${title}${description ? `: ${description}` : ''}`}
      >
        {cardContent}
      </Box>
    );
  },
);

Card.displayName = 'Card';

export default Card;
