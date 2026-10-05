import type { ReactNode } from 'react';

import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';
import { PAGE_META } from '@/lib/seo/pageMeta';

export const metadata = buildPageMetadata(PAGE_META.insurance);

export default function VerzekeringenLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
