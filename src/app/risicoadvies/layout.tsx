import type { ReactNode } from 'react';

import { WebPageJsonLdLayout } from '@/components/seo/WebPageJsonLdLayout';
import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import { PAGE_META } from '@/lib/seo/pageMeta';

export const metadata = buildPageMetadata(PAGE_META.riskAdvice);

export default function RisicoadviesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WebPageJsonLdLayout
      pageKey="riskAdvice"
      withService
      withBreadcrumbs
      faqKey="riskAdvice"
    >
      {children}
    </WebPageJsonLdLayout>
  );
}
