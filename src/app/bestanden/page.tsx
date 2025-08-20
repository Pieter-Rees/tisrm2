'use client';

import Card from '@/components/card';
import AnimatedGrid from '@/components/common/animated-grid';
import UnifiedLayout from '@/components/layout/unified-layout';
import { AVAILABLE_DOCUMENTS } from '@/data/content';

export default function Bestanden() {
  return (
    <UnifiedLayout title="Downloads">
      <AnimatedGrid
        items={AVAILABLE_DOCUMENTS}
        renderItem={(doc) => (
          <Card
            variant="downloads"
            title={doc.title}
            downloadLink={doc.link}
          />
        )}
      />
    </UnifiedLayout>
  );
}
