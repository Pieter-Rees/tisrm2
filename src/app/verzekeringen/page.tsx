import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema } from '@/lib/seo/organizationSchema';
import { PAGE_META } from '@/lib/seo/pageMeta';

import VerzekeringenPageContent from './VerzekeringenPageContent';

export default function VerzekeringenPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          name: PAGE_META.insurance.title,
          description: PAGE_META.insurance.description,
          path: PAGE_META.insurance.path,
        })}
      />
      <VerzekeringenPageContent />
    </>
  );
}
