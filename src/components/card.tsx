'use client';

import React from 'react';
import { Box, Heading, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import type { CardProps } from '@/types/components';

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  altText,
  downloadLink,
  cta,
  ctaLink,
  phone,
  variant = 'default',
}) => {
  const hasCta = cta || phone || downloadLink;

  const getCardBg = () => {
    switch (variant) {
      case 'sidebar':
        return 'white';
      default:
        return 'white';
    }
  };

  // For cards with ctaLink, use LinkBox pattern
  if (ctaLink && cta) {
    return (
      <LinkBox
        as="article"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg={getCardBg()}
        _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
        transition="all 0.2s ease-in-out"
      >
        {image && (
          <Box
            overflow="hidden"
            borderTopRadius="lg"
            backgroundImage={`url(${image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            height="200px"
            aria-label={altText || title}
          />
        )}
        <Box p="4">
          <Heading as="h2" size="lg" mb={image ? '4' : '0'} color="gray.900">
            <LinkOverlay href={ctaLink}>{title}</LinkOverlay>
          </Heading>
          {description && (
            <Text mb={hasCta ? '4' : '0'} color="gray.800">
              {description}
            </Text>
          )}
        </Box>
      </LinkBox>
    );
  }

  // For phone links
  if (phone) {
    return (
      <LinkBox
        as="article"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg={getCardBg()}
        _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
        transition="all 0.2s ease-in-out"
      >
        <Box p="4">
          <Heading as="h2" size="lg" mb="4" color="gray.900">
            <LinkOverlay href={phone}>{title}</LinkOverlay>
          </Heading>
          {description && (
            <Text color="gray.800" textAlign="center">
              {description}
            </Text>
          )}
        </Box>
      </LinkBox>
    );
  }

  // For download links
  if (downloadLink) {
    return (
      <LinkBox
        as="article"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg={getCardBg()}
        _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
        transition="all 0.2s ease-in-out"
      >
        <Box p="4">
          <Heading as="h2" size="lg" mb="4" color="gray.900">
            <LinkOverlay href={downloadLink} download>
              {title}
            </LinkOverlay>
          </Heading>
          {description && (
            <Text color="gray.800">{description}</Text>
          )}
        </Box>
      </LinkBox>
    );
  }

  // Static card (no link)
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg={getCardBg()}
    >
      {image && (
        <Box
          overflow="hidden"
          borderTopRadius="lg"
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          height="200px"
          aria-label={altText || title}
        />
      )}
      <Box p="4">
        <Heading as="h2" size="lg" mb={image ? '4' : '0'} color="gray.900">
          {title}
        </Heading>
        {description && (
          <Text color="gray.800">{description}</Text>
        )}
      </Box>
    </Box>
  );
};

export default Card;