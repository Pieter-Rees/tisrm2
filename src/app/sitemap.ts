import type { MetadataRoute } from 'next';

import { APP_CONFIG, NAVIGATION_ROUTES } from '@/constants/app';

const marketingRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: NAVIGATION_ROUTES.home, changeFrequency: 'weekly', priority: 1 },
  { path: NAVIGATION_ROUTES.taxi, changeFrequency: 'weekly', priority: 0.9 },
  {
    path: NAVIGATION_ROUTES.insurance,
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    path: NAVIGATION_ROUTES.insurancePersonal,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.insuranceBusiness,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: NAVIGATION_ROUTES.riskManagement,
    changeFrequency: 'monthly',
    priority: 0.8,
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(APP_CONFIG.contentUpdatedAt);

  return marketingRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${APP_CONFIG.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
