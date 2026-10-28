import { NAVIGATION_ROUTES } from '@/constants/app';
import { buildBreadcrumbItems } from '@/lib/seo/breadcrumbs';

const knowledgeArticleSlug = 'tx-keurmerk-verzekeringen';
const nestedKnowledgePath = `${NAVIGATION_ROUTES.knowledgeBase}/${knowledgeArticleSlug}`;

describe('Breadcrumb Logic', () => {
  it('builds items for a nested knowledge base article path', () => {
    const items = buildBreadcrumbItems(nestedKnowledgePath);

    expect(items).toHaveLength(3);
    expect(items[0]).toEqual({ name: 'Home', path: '/' });
    expect(items[1]).toEqual({
      name: 'Kennisbank',
      path: NAVIGATION_ROUTES.knowledgeBase,
    });
    expect(items[2]).toEqual({
      name: 'Tx Keurmerk Verzekeringen',
      path: nestedKnowledgePath,
    });
  });

  it('returns only home on the root path', () => {
    expect(buildBreadcrumbItems('/')).toEqual([{ name: 'Home', path: '/' }]);
  });

  it('builds a single-segment path for top-level routes', () => {
    const items = buildBreadcrumbItems(NAVIGATION_ROUTES.personalInsurance);

    expect(items).toHaveLength(2);
    expect(items[1]).toEqual({
      name: 'Particuliere verzekeringen',
      path: NAVIGATION_ROUTES.personalInsurance,
    });
  });
});
