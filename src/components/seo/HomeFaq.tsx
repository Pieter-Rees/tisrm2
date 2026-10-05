import { FaqSection } from '@/components/seo/FaqSection';
import { PAGE_FAQS } from '@/lib/seo/pageFaqs';

export function HomeFaq() {
  return <FaqSection faqs={PAGE_FAQS.home} />;
}
