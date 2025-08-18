'use client';

import { memo } from 'react';
import { Box, Heading, Text, LinkBox, LinkOverlay, Button } from '@chakra-ui/react';
import { BsDownload, BsTelephone, BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { CardProps } from '@/types/components';
const CARD_VARIANTS = {
  default: {
    bg: 'white',
    shadow: 'lg',
    hoverShadow: 'xl',
    transform: 'translateY(-2px)',
  },
  sidebar: {
    bg: 'white',
    shadow: 'md',
    hoverShadow: 'lg',
    transform: 'translateY(-1px)',
  },
  downloads: {
    bg: 'blue.50',
    shadow: 'md',
    hoverShadow: 'lg',
    transform: 'scale(1.02)',
  },
  elevated: {
    bg: 'white',
    shadow: 'xl',
    hoverShadow: '2xl',
    transform: 'translateY(-4px)',
  },
} as const;
const Card = memo<CardProps>(({
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
    transition: 'all 0.2s ease-in-out',
    opacity: disabled ? 0.6 : 1,
    cursor: isInteractive && !disabled ? 'pointer' : 'default',
    _hover: !disabled ? {
      boxShadow: variantStyles.hoverShadow,
      transform: variantStyles.transform,
    } : {},
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
      
      <Box p={{ base: '4', md: '6' }}>
        <Heading 
          as="h3" 
          size={{ base: 'md', md: 'lg' }} 
          mb={description ? '3' : '0'} 
          color="gray.900"
          fontWeight="semibold"
        >
          {title}
        </Heading>
        
        {description && (
          <Text 
            color="gray.700" 
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight="relaxed"
            mb={hasAction ? '4' : '0'}
          >
            {description}
          </Text>
        )}

        {hasAction && (
          <Box mt="4">
            {phone && (
              <Button
                asChild
                size="sm"
                variant="outline"
                colorScheme="blue"
                width="full"
                gap="2"
              >
                <a href={phone}>
                  <BsTelephone />
                  Bel nu
                </a>
              </Button>
            )}
            
            {downloadLink && (
              <Button
                asChild
                size="sm"
                variant="solid"
                colorScheme="blue"
                width="full"
                gap="2"
              >
                <a href={downloadLink} download>
                  <BsDownload />
                  Download
                </a>
              </Button>
            )}
            
            {cta && ctaLink && (
              <Button
                size="sm"
                variant="outline"
                colorScheme="blue"
                width="full"
                gap="2"
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


  if (isInteractive && !disabled) {
    const linkProps = downloadLink 
      ? { href: downloadLink, download: true }
      : { href: phone || ctaLink || '#' };

    return (
      <LinkBox
        as="article"
        className={cn('card', className)}
        data-testid={testId}
        data-variant={variant}
        {...cardStyles}
        role="article"
        aria-label={`${title}${description ? `: ${description}` : ''}`}
      >
        <LinkOverlay {...linkProps} aria-label={`Navigate to ${title}`}>
          {cardContent}
        </LinkOverlay>
      </LinkBox>
    );
  }


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
});

Card.displayName = 'Card';

export default Card;