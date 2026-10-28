import type { ReactNode } from 'react';

import { WebPageJsonLdLayout } from '@/components/seo/WebPageJsonLdLayout';
import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import { PAGE_META } from '@/lib/seo/pageMeta';

export const metadata = buildPageMetadata(PAGE_META.liability);

export default function AansprakelijkheidLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WebPageJsonLdLayout pageKey="liability" withService withBreadcrumbs>
      {children}
    </WebPageJsonLdLayout>
  );
}
