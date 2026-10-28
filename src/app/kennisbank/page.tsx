import { WebPageJsonLdLayout } from '@/components/seo/WebPageJsonLdLayout';
import { getKnowledgeArticlesByCategory } from '@/data/kennisbank';
import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import { PAGE_META } from '@/lib/seo/pageMeta';

import KennisbankContent from './KennisbankContent';

export const metadata = buildPageMetadata(PAGE_META.knowledgeBase);

export default function Kennisbank() {
  return (
    <WebPageJsonLdLayout pageKey="knowledgeBase" withBreadcrumbs>
      <KennisbankContent groups={getKnowledgeArticlesByCategory()} />
    </WebPageJsonLdLayout>
  );
}
