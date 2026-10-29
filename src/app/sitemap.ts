import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

import type { MetadataRoute } from 'next';

import {
  APP_CONFIG,
  NAVIGATION_ROUTES,
  getKnowledgeArticlePath,
} from '@/constants/app';
import { KNOWLEDGE_ARTICLES } from '@/data/kennisbank';

const appDir = join(process.cwd(), 'src', 'app');

/**
 * Newest modification time of the files that make up a route, so every URL
 * gets its own lastmod instead of one shared constant. Falls back to
 * APP_CONFIG.contentUpdatedAt when the sources are not readable (e.g. a
 * runtime that ships only the build output).
 */
function getRouteLastModified(path: string): Date {
  const routeDir = join(appDir, ...path.split('/').filter(Boolean));

  try {
    const modifiedTimes = readdirSync(routeDir, { withFileTypes: true })
      .filter(entry => entry.isFile())
      .map(entry => statSync(join(routeDir, entry.name)).mtimeMs);

    if (modifiedTimes.length > 0) {
      return new Date(Math.max(...modifiedTimes));
    }
  } catch {
    // Fall through to the configured date below.
  }

  return new Date(APP_CONFIG.contentUpdatedAt);
}

const marketingRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: NAVIGATION_ROUTES.home, changeFrequency: 'weekly', priority: 1 },
  {
    path: NAVIGATION_ROUTES.businessInsurance,
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  { path: NAVIGATION_ROUTES.taxi, changeFrequency: 'weekly', priority: 0.9 },
  {
    path: NAVIGATION_ROUTES.realEstate,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.hospitality,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.liability,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.construction,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.absence,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.personalInsurance,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.riskAdvice,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.knowledgeBase,
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  { path: NAVIGATION_ROUTES.about, changeFrequency: 'monthly', priority: 0.7 },
  {
    path: NAVIGATION_ROUTES.contact,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: NAVIGATION_ROUTES.downloads,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: NAVIGATION_ROUTES.damageReport,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  ...KNOWLEDGE_ARTICLES.map(({ slug }) => ({
    path: getKnowledgeArticlePath(slug),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  })),
];

/** `output: export` refuses metadata routes that are not pinned to static. */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return marketingRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${APP_CONFIG.url}${path === '/' ? '' : path}`,
    lastModified: getRouteLastModified(path),
    changeFrequency,
    priority,
  }));
}
