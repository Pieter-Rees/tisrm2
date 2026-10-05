import type { ReactNode } from 'react';

import { WebPageJsonLdLayout } from '@/components/seo/WebPageJsonLdLayout';
import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import { PAGE_META } from '@/lib/seo/pageMeta';

export const metadata = buildPageMetadata(PAGE_META.insuranceBusiness);

export default function ZakelijkLayout({ children }: { children: ReactNode }) {
  return (
    <WebPageJsonLdLayout
      pageKey="insuranceBusiness"
      withService
      withBreadcrumbs
      faqKey="insuranceBusiness"
    >
      {children}
    </WebPageJsonLdLayout>
  );
}
