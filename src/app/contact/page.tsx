'use client';

import ContactInfo from '@/components/contact-info';
import Logo from '@/components/logo';
import { UnifiedLayout } from '@/components/layout';
import { COMPONENT_SPACING } from '@/constants/layout';
import { PARAGRAPH_STYLES, SECTION_SPACING } from '@/constants/typography';
import { primaryButtonStyles } from '@/styles/components/button.styles';
import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  const handleSchadeClick = () => {
    router.push('/meld-schade');
  };

  return (
    <UnifiedLayout title="Contact">
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Grid
          gridTemplateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={COMPONENT_SPACING.grid.md}
          alignItems="stretch"
          width="100%"
        >
          <GridItem display="flex" flexDirection="column" minW="0">
            <Flex
              width="100%"
              py={SECTION_SPACING.small}
              justifyContent="center"
            >
              <Logo />
            </Flex>
            <ContactInfo buttonVariant="outline" />
          </GridItem>
          <GridItem display="flex" flexDirection="column" minW="0">
            <Box
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
              position="relative"
              width="full"
              height={{ base: '300px', md: '400px', lg: '500px' }}
              minHeight="300px"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.02)',
                boxShadow: 'xl',
              }}
            >
              <Image
                src="/bb.jpg"
                alt="Office building of TIS Risk Managers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
              />
            </Box>
          </GridItem>
        </Grid>

        <Box textAlign="center">
          <Flex direction="column" gap={SECTION_SPACING.small} align="center">
            <Text {...PARAGRAPH_STYLES.body} textAlign="center">
              Wil u uw schade inzien of een schade melden, klik op
              onderstaande knop.
            </Text>
            <Button {...primaryButtonStyles} onClick={handleSchadeClick}>
              Schade melden
            </Button>
          </Flex>
        </Box>
      </Flex>
    </UnifiedLayout>
  );
}
