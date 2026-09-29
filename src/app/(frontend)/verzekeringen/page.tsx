import Breadcrumb from '@/components/breadcrumb';
import Card from '@/components/card';
import AnimatedGrid from '@/components/common/animated-grid';
import { UnifiedLayout } from '@/components/layout';
import { INSURANCE_CATEGORIES } from '@/data/content';
import { getPageBySlug } from '@/lib/payload/getPageBySlug';

export const dynamic = 'force-dynamic';

export default async function Verzekeringen() {
  const page = await getPageBySlug('verzekeringen');
  const cmsCards = page?.cards?.length ? page.cards : null;
  const lists = page?.lists ?? [];

  const cards = cmsCards
    ? cmsCards.map((card) => ({
        id: card.ctaLink,
        title: card.title,
        description: card.description,
        cta: card.cta,
        ctaLink: card.ctaLink,
        buttonVariant: card.buttonVariant,
      }))
    : INSURANCE_CATEGORIES.map((card, index) => {
        const cms = lists[index];
        return {
          ...card,
          title: cms?.title || card.title,
          description: cms?.items[0] || card.description,
        };
      });

  return (
    <UnifiedLayout
      title={page?.title || 'Verzekeringen'}
      breadcrumb={<Breadcrumb capitalizeLinks />}
    >
      <AnimatedGrid
        items={cards}
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
