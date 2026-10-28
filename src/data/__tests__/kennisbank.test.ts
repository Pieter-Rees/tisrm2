import { NAVIGATION_ROUTES, getKnowledgeArticlePath } from '@/constants/app';
import {
  KNOWLEDGE_ARTICLES,
  KNOWLEDGE_CATEGORIES,
  getKnowledgeArticle,
  getKnowledgeArticlesByCategory,
} from '@/data/kennisbank';

describe('knowledge base data', () => {
  it('ships every article from the copy deck with unique slugs', () => {
    const slugs = KNOWLEDGE_ARTICLES.map(article => article.slug);

    expect(KNOWLEDGE_ARTICLES).toHaveLength(12);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach(slug => expect(slug).toMatch(/^[a-z0-9-]+$/));
  });

  it('gives every article a meta title, description and body', () => {
    KNOWLEDGE_ARTICLES.forEach(article => {
      expect(article.metaTitle.length).toBeGreaterThan(0);
      expect(article.metaDescription.length).toBeGreaterThan(0);
      expect(article.intro.length).toBeGreaterThan(0);
      expect(article.blocks.length).toBeGreaterThan(0);
    });
  });

  it('looks articles up by slug', () => {
    const [first] = KNOWLEDGE_ARTICLES;
    expect(first).toBeDefined();
    expect(getKnowledgeArticle(first!.slug)).toBe(first);
    expect(getKnowledgeArticle('bestaat-niet')).toBeUndefined();
  });

  it('groups articles without dropping or duplicating any', () => {
    const groups = getKnowledgeArticlesByCategory();
    const grouped = groups.flatMap(group => group.articles);

    expect(grouped).toHaveLength(KNOWLEDGE_ARTICLES.length);
    groups.forEach(group => {
      expect(KNOWLEDGE_CATEGORIES).toContain(group.category);
      expect(group.articles.length).toBeGreaterThan(0);
    });
  });

  it('builds knowledge article paths under the index route', () => {
    expect(getKnowledgeArticlePath('tx-keurmerk-verzekeringen')).toBe(
      `${NAVIGATION_ROUTES.knowledgeBase}/tx-keurmerk-verzekeringen`,
    );
  });

  it('returns grouped articles with summary fields only', () => {
    const groups = getKnowledgeArticlesByCategory();
    const summaryOnlyKeys = ['slug', 'title', 'summary'];

    groups.forEach(group => {
      group.articles.forEach(article => {
        expect(Object.keys(article).sort()).toEqual(summaryOnlyKeys.sort());
        expect(article).not.toHaveProperty('blocks');
        expect(article).not.toHaveProperty('intro');
        expect(article).not.toHaveProperty('metaTitle');
        expect(article).not.toHaveProperty('metaDescription');
        expect(article).not.toHaveProperty('category');
      });
    });

    const [fullArticle] = KNOWLEDGE_ARTICLES;
    expect(fullArticle).toBeDefined();
    expect(fullArticle!.blocks.length).toBeGreaterThan(0);

    const groupedArticle = groups
      .flatMap(group => group.articles)
      .find(entry => entry.slug === fullArticle!.slug);
    expect(groupedArticle).toEqual({
      slug: fullArticle!.slug,
      title: fullArticle!.title,
      summary: fullArticle!.summary,
    });
  });
});
