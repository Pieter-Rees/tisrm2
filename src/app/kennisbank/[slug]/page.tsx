import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { JsonLd } from '@/components/seo/JsonLd';
import { NAVIGATION_ROUTES, getKnowledgeArticlePath } from '@/constants/app';
import { KNOWLEDGE_ARTICLES, getKnowledgeArticle } from '@/data/kennisbank';
import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import {
  getArticleSchema,
  getBreadcrumbListSchema,
  getWebPageSchema,
} from '@/lib/seo/organizationSchema';

import ArticleContent from './ArticleContent';

type ArticleParams = { slug: string };

export function generateStaticParams(): ArticleParams[] {
  return KNOWLEDGE_ARTICLES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ArticleParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) {
    return {};
  }

  return buildPageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: getKnowledgeArticlePath(article.slug),
  });
}

export default async function KennisbankArticle({
  params,
}: {
  params: Promise<ArticleParams>;
}) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) {
    notFound();
  }

  const path = getKnowledgeArticlePath(article.slug);

  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          name: article.title,
          description: article.metaDescription,
          path,
        })}
      />
      <JsonLd
        data={getArticleSchema({
          headline: article.title,
          description: article.metaDescription,
          path,
        })}
      />
      <JsonLd
        data={getBreadcrumbListSchema(
          [
            { name: 'Home', path: '/' },
            { name: 'Kennisbank', path: NAVIGATION_ROUTES.knowledgeBase },
            { name: article.title, path },
          ],
          path,
        )}
      />
      <ArticleContent article={article} />
    </>
  );
}
