'use client';

import { Box, Button, Heading, Text, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { memo } from 'react';
import { BsArrowRight, BsDownload, BsTelephone, BsFileEarmarkText } from 'react-icons/bs';

import { HEADING_STYLES, PARAGRAPH_STYLES } from '@/constants/typography';
import { cn } from '@/lib/utils';
import { getCardStyles } from '@/styles/components/card.styles';
import type { CardProps } from '@/types/components';
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
          p={variant === 'downloads' ? '0' : { base: '4', md: '6' }}
          flex="1"
          display="flex"
          flexDirection="column"
        >
          {variant === 'downloads' && (
            <Box
              display="flex"
              alignItems="center"
              gap="3"
              mb="4"
            >
              <Icon
                as={BsFileEarmarkText}
                color="blue.500"
                boxSize="5"
              />
              <Heading as="h3" {...HEADING_STYLES.h4} mb="0">
                {title}
              </Heading>
            </Box>
          )}
          {variant !== 'downloads' && (
            <Heading as="h3" {...HEADING_STYLES.h4} mb={description ? '3' : '0'}>
              {title}
            </Heading>
          )}

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
                  width="full"
                  gap="2"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  colorScheme="green"
                  variant="outline"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = phone;
                  }}
                >
                  <BsTelephone />
                  Bel nu
                </Button>
              )}

              {downloadLink && (
                <Button
                  width="full"
                  gap="2"
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
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
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
                  width="full"
                  gap="2"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  colorScheme="blue"
                  variant="solid"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
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
