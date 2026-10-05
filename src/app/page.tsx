import { JsonLd } from '@/components/seo/JsonLd';
import {
  getFaqPageSchema,
  getWebPageSchema,
  HOME_FAQS,
} from '@/lib/seo/organizationSchema';
import { PAGE_META } from '@/lib/seo/pageMeta';

import HomePageContent from './HomePageContent';

export default function Homepage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          name: PAGE_META.home.title,
          description: PAGE_META.home.description,
          path: PAGE_META.home.path,
        })}
      />
      <JsonLd data={getFaqPageSchema(HOME_FAQS)} />
      <HomePageContent />
    </>
  );
}
