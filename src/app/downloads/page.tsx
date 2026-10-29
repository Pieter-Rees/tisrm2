'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import { ContentLink, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import PageHero from '@/components/page-hero';
import { NAVIGATION_ROUTES } from '@/constants/app';
import { COMPONENT_SPACING } from '@/constants/layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import { DOCUMENT_GROUPS } from '@/data/documents';
import { PAGE_META } from '@/lib/seo/pageMeta';

const INTRO_LEAD =
  'Hier vindt u belangrijke formulieren en documenten van TIS Risk Managers. U kunt deze eenvoudig downloaden.';

export default function Downloads() {
  return (
    <>
      <PageHero
        title={PAGE_META.downloads.heading}
        description={INTRO_LEAD}
        image="/slider-3.jpg"
        ctaLabel="Neem contact op"
        ctaHref={NAVIGATION_ROUTES.contact}
      />

      <UnifiedLayout breadcrumb={<Breadcrumb />}>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
            <Text {...PARAGRAPH_STYLES.lead}>{INTRO_LEAD}</Text>
            <Text {...PARAGRAPH_STYLES.body}>
              Heeft u vragen of kunt u een document niet vinden? Neem gerust
              contact met ons op.
            </Text>
          </Flex>

          {DOCUMENT_GROUPS.map(group => (
            <Flex
              as="section"
              key={group.title}
              direction="column"
              gap={PROSE_STACK_GAP}
            >
              <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
                {group.title}
              </Heading>
              <Box
                display="grid"
                gridTemplateColumns={{
                  base: '1fr',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)',
                }}
                gap={COMPONENT_SPACING.grid.sm}
                alignItems="stretch"
              >
                {group.documents.map(document => (
                  <Card
                    key={document.id}
                    variant="downloads"
                    title={document.title}
                    titleAs="h3"
                    description={document.description}
                    downloadLink={document.link}
                  />
                ))}
              </Box>
            </Flex>
          ))}

          <Box as="section">
            <ContentLink
              href={NAVIGATION_ROUTES.damageReport}
              label="Wilt u schade melden of heeft u hulp nodig bij de afhandeling?"
            />
          </Box>

          <PageCta
            title="Heeft u vragen?"
            text="Kunt u een formulier niet vinden of heeft u hulp nodig? Onze adviseurs helpen u graag verder."
            actionLabel="Neem contact op"
            actionHref={NAVIGATION_ROUTES.contact}
          />
        </Flex>
      </UnifiedLayout>
    </>
  );
}
