import { NAVIGATION_ROUTES, PRIMARY_NAVIGATION } from '@/constants/app';
import { PAGE_META } from '@/lib/seo/pageMeta';

const pages = Object.values(PAGE_META);

describe('PAGE_META', () => {
  it('gives every page a title, description, H1 and absolute path', () => {
    pages.forEach(page => {
      expect(page.title.length).toBeGreaterThan(0);
      expect(page.description.length).toBeGreaterThan(0);
      expect(page.heading.length).toBeGreaterThan(0);
      expect(page.path).toMatch(/^\//);
    });
  });

  it('keeps one page per path', () => {
    const paths = pages.map(page => page.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('covers every route in the primary navigation', () => {
    PRIMARY_NAVIGATION.forEach(({ href }) => {
      expect(paths()).toContain(href);
    });
  });

  it('matches the migrated URL structure', () => {
    expect(PAGE_META.businessInsurance.path).toBe(
      NAVIGATION_ROUTES.businessInsurance,
    );
    expect(PAGE_META.taxi.path).toBe(NAVIGATION_ROUTES.taxi);
    expect(PAGE_META.riskAdvice.path).toBe(NAVIGATION_ROUTES.riskAdvice);
    expect(PAGE_META.damageReport.path).toBe(NAVIGATION_ROUTES.damageReport);
  });
});

function paths() {
  return pages.map(page => page.path);
}
