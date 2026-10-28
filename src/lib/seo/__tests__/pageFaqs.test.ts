import { getFaqPageSchema } from '@/lib/seo/organizationSchema';
import { PAGE_FAQS } from '@/lib/seo/pageFaqs';

describe('PAGE_FAQS', () => {
  it('keeps home FAQs aligned with FAQ schema', () => {
    const schema = getFaqPageSchema([...PAGE_FAQS.home]);
    expect(schema.mainEntity).toHaveLength(PAGE_FAQS.home.length);
  });

  it('provides service FAQs for taxi, risk and insurance pages', () => {
    expect(PAGE_FAQS.taxi.length).toBeGreaterThanOrEqual(3);
    expect(PAGE_FAQS.riskAdvice.length).toBeGreaterThanOrEqual(3);
    expect(PAGE_FAQS.personalInsurance.length).toBeGreaterThanOrEqual(3);
    expect(PAGE_FAQS.businessInsurance.length).toBeGreaterThanOrEqual(3);
  });
});
