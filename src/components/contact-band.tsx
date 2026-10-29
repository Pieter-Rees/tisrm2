'use client';

import MediaFrame from '@/components/media-frame';
import { ButtonLink } from '@/components/ui/button-link';
import { PAGE_CONTAINER, copyGap, sectionPy, splitGap } from '@/constants/spacing';
import { HEADING_STYLES } from '@/constants/typography';
import { contactInfo } from '@/data/general';
import { DESIGN_BUTTON_STYLES } from '@/styles/components/button.styles';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export interface ContactBandProps {
  title?: string;
  description?: string;
}

const ContactBand = ({
  title = 'Direct antwoord op uw vragen?',
  description = 'Bel ons of vraag vrijblijvend een offerte aan. Wij denken graag met u mee.',
}: ContactBandProps) => {
  return (
    <Box
      as="section"
      width="100%"
      position="relative"
      overflow="hidden"
      color="white"
      bg="navy.700"
    >
      <Box position="absolute" inset="0" opacity="0.22">
        <MediaFrame
          src="/1.webp"
          alt=""
          height="100%"
          objectPosition="center 40%"
        />
      </Box>
      <Box
        position="absolute"
        inset="0"
        bgImage="linear-gradient(to right, rgba(11,31,58,0.94) 0%, rgba(11,31,58,0.88) 55%, rgba(11,31,58,0.82) 100%)"
      />
      <Container {...PAGE_CONTAINER} position="relative" py={sectionPy}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'flex-start', lg: 'center' }}
          justify="space-between"
          gap={splitGap}
        >
          <Flex
            direction="column"
            gap={copyGap}
            align="flex-start"
            maxW="600px"
          >
            <Text {...HEADING_STYLES.eyebrow} color="gold.400">
              Contact
            </Text>
            <Box width="56px" height="1px" bg="gold.400" />
            <Heading as="h2" {...HEADING_STYLES.h2} color="white" mb="0">
              {title}
            </Heading>
            <Text
              color="white"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="medium"
              mb="0"
              lineHeight="1.45"
            >
              {description}
            </Text>
          </Flex>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            gap="5"
            align="stretch"
            minW={{ lg: '280px' }}
          >
            <ButtonLink
              href={contactInfo.phoneHref}
              size="lg"
              minW={{ md: '230px' }}
              {...DESIGN_BUTTON_STYLES.onDark}
            >
              {contactInfo.phone}
            </ButtonLink>
            <ButtonLink
              href="/offerte"
              size="lg"
              minW={{ md: '230px' }}
              {...DESIGN_BUTTON_STYLES.outlineOnDark}
            >
              Offerte aanvragen
            </ButtonLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactBand;
