import type { ReactNode } from 'react';

import { WebPageJsonLdLayout } from '@/components/seo/WebPageJsonLdLayout';
import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import { PAGE_META } from '@/lib/seo/pageMeta';

export const metadata = buildPageMetadata(PAGE_META.hospitality);

export default function HorecaLayout({ children }: { children: ReactNode }) {
  return (
    <WebPageJsonLdLayout pageKey="hospitality" withService withBreadcrumbs>
      {children}
    </WebPageJsonLdLayout>
  );
}
