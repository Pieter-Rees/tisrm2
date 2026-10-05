import type { ReactNode } from 'react';

import { JsonLd } from '@/components/seo/JsonLd';
import {
  getBreadcrumbListSchema,
  getFaqPageSchema,
  getServiceSchema,
  getWebPageSchema,
  SERVICE_TYPES,
} from '@/lib/seo/organizationSchema';
import { PAGE_FAQS, type PageFaqKey } from '@/lib/seo/pageFaqs';
import { PAGE_META } from '@/lib/seo/pageMeta';

type ServicePageKey = keyof typeof SERVICE_TYPES;

type WebPageJsonLdLayoutProps = {
  children: ReactNode;
  pageKey: keyof typeof PAGE_META;
  /** Emit Service JSON-LD for this page (must be a known service page). */
  withService?: boolean;
  /** Emit BreadcrumbList JSON-LD derived from the page path. */
  withBreadcrumbs?: boolean;
  /** Emit FAQPage JSON-LD from PAGE_FAQS (must match visible FAQ on the page). */
  faqKey?: PageFaqKey;
};

export function WebPageJsonLdLayout({
  children,
  pageKey,
  withService = false,
  withBreadcrumbs = false,
  faqKey,
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
      {withService && pageKey in SERVICE_TYPES ?
        <JsonLd
          data={getServiceSchema({
            name: SERVICE_TYPES[pageKey as ServicePageKey],
            description: page.description,
            path: page.path,
            serviceType: SERVICE_TYPES[pageKey as ServicePageKey],
          })}
        />
      : null}
      {withBreadcrumbs ?
        <JsonLd data={getBreadcrumbListSchema([], page.path)} />
      : null}
      {faqKey ?
        <JsonLd data={getFaqPageSchema([...PAGE_FAQS[faqKey]])} />
      : null}
      {children}
    </>
  );
}
