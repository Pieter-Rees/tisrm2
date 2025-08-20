'use client';

import Breadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import AnimatedGrid from '@/components/common/animated-grid';
import UnifiedLayout from '@/components/layout/unified-layout';
import { INSURANCE_CATEGORIES } from '@/data/content';

export default function Verzekeringen() {
  return (
    <UnifiedLayout
      title="Verzekeringen"
      breadcrumb={<Breadcrumb capitalizeLinks />}
    >
      <AnimatedGrid
        items={INSURANCE_CATEGORIES}
        renderItem={(card) => (
          <Card
            title={card.title}
            description={card.description}
            cta={card.cta}
            ctaLink={card.ctaLink}
            buttonVariant={card.buttonVariant}
          />
        )}
      />
    </UnifiedLayout>
  );
}
