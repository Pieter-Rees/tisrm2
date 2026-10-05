import type { ReactNode } from 'react';

import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema } from '@/lib/seo/organizationSchema';
import { PAGE_META } from '@/lib/seo/pageMeta';

type WebPageJsonLdLayoutProps = {
  children: ReactNode;
  pageKey: keyof typeof PAGE_META;
};

export function WebPageJsonLdLayout({
  children,
  pageKey,
}: WebPageJsonLdLayoutProps) {
  const page = PAGE_META[pageKey];

  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          name: page.title,
          description: page.description,
          path: page.path,
        })}
      />
      {children}
    </>
  );
}
