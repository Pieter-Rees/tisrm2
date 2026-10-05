import { JsonLd } from '@/components/seo/JsonLd';
import {
  getBreadcrumbListSchema,
  getServiceSchema,
  getWebPageSchema,
  SERVICE_TYPES,
} from '@/lib/seo/organizationSchema';
import { PAGE_META } from '@/lib/seo/pageMeta';

import VerzekeringenPageContent from './VerzekeringenPageContent';

export default function VerzekeringenPage() {
  const page = PAGE_META.insurance;

  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          name: page.title,
          description: page.description,
          path: page.path,
        })}
      />
      <JsonLd
        data={getServiceSchema({
          name: page.title,
          description: page.description,
          path: page.path,
          serviceType: SERVICE_TYPES.insurance,
        })}
      />
      <JsonLd data={getBreadcrumbListSchema([], page.path)} />
      <VerzekeringenPageContent />
    </>
  );
}
