import { APP_CONFIG } from '@/constants/app';

const SEGMENT_LABELS: Record<string, string> = {
  verzekeringen: 'Verzekeringen',
  particulier: 'Particulier',
  zakelijk: 'Zakelijk',
  taxi: 'Taxi',
  'risk-management': 'Risk management',
  'over-ons': 'Over ons',
  contact: 'Contact',
  downloads: 'Downloads',
  'meld-schade': 'Schade melden',
  offerte: 'Offerte',
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function formatBreadcrumbSegment(segment: string): string {
  const mapped = SEGMENT_LABELS[segment];
  if (mapped) return mapped;

  return decodeURIComponent(segment)
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function buildBreadcrumbItems(path: string): BreadcrumbItem[] {
  const segments = path.split('/').filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];

  segments.forEach((segment, index) => {
    items.push({
      name: formatBreadcrumbSegment(segment),
      path: `/${segments.slice(0, index + 1).join('/')}`,
    });
  });

  return items;
}

export function toAbsoluteUrl(path: string): string {
  return `${APP_CONFIG.url}${path === '/' ? '' : path}`;
}
