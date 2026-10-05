import {
  FadeInUp,
  ScaleIn,
  StaggerContainer,
} from '@/components/page-animation';
import { UnifiedLayout } from '@/components/layout';
import StarList from '@/components/star-list';
import { PARAGRAPH_STYLES } from '@/constants/typography';
import { SPACING_SCALE } from '@/constants/layout';
import { COMPANY_ENTITIES } from '@/data/content';
import { isCmsMediaSrc, pageImageSrc } from '@/lib/payload/cmsImage';
import { getPageBySlug } from '@/lib/payload/getPageBySlug';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Fragment } from 'react';

export const dynamic = 'force-dynamic';

export default async function Overons() {
  const page = await getPageBySlug('over-ons');
  const paragraphs = page?.body?.length ? page.body : [];
  const companyEntities =
    page?.lists?.[0]?.items?.length ?
      page.lists[0].items
    : [...COMPANY_ENTITIES];
  const teamSrc = pageImageSrc(page?.featuredImageUrl, '/team.jpg');

  return (
    <UnifiedLayout title={page?.title || 'Over ons'}>
      <StaggerContainer>
        <Flex direction="column" gap={SPACING_SCALE.md}>
          {paragraphs.map((text, index) => (
            <Fragment key={index}>
              <FadeInUp delay={index * 0.1}>
                <Text {...PARAGRAPH_STYLES.body}>{text}</Text>
              </FadeInUp>
              {index === 1 && (
                <FadeInUp delay={0.2}>
                  <StarList listItems={companyEntities} />
                </FadeInUp>
              )}
            </Fragment>
          ))}

          {paragraphs.length <= 1 && (
            <FadeInUp delay={0.2}>
              <StarList listItems={companyEntities} />
            </FadeInUp>
          )}

          <ScaleIn delay={0.4}>
            <Flex
              width="full"
              justifyContent="center"
              mt={SPACING_SCALE.lg}
            >
              <Box
                transform={{ base: '', lg: 'rotate(2deg)' }}
                width="fit-content"
                borderRadius="lg"
                boxShadow="lg"
                overflow="hidden"
              >
                <Image
                  src={teamSrc}
                  alt="Team photo of ENTO Group members"
                  width={750}
                  height={250}
                  unoptimized={isCmsMediaSrc(teamSrc)}
                  style={{ display: 'block' }}
                />
              </Box>
            </Flex>
          </ScaleIn>
        </Flex>
      </StaggerContainer>
    </UnifiedLayout>
  );
}
