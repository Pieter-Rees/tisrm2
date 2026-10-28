import type { ReactNode } from 'react';

import { WebPageJsonLdLayout } from '@/components/seo/WebPageJsonLdLayout';
import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import { PAGE_META } from '@/lib/seo/pageMeta';

export const metadata = buildPageMetadata(PAGE_META.absence);

export default function VerzuimLayout({ children }: { children: ReactNode }) {
  return (
    <WebPageJsonLdLayout pageKey="absence" withService withBreadcrumbs>
      {children}
    </WebPageJsonLdLayout>
  );
}
