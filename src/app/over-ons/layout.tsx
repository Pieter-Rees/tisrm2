import type { ReactNode } from 'react';

import { WebPageJsonLdLayout } from '@/components/seo/WebPageJsonLdLayout';
import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import { PAGE_META } from '@/lib/seo/pageMeta';

export const metadata = buildPageMetadata(PAGE_META.about);

export default function OverOnsLayout({ children }: { children: ReactNode }) {
  return (
    <WebPageJsonLdLayout pageKey="about" withBreadcrumbs>
      {children}
    </WebPageJsonLdLayout>
  );
}
