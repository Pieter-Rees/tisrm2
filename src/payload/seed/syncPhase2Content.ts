/**
 * Fill empty Phase 2+ CMS fields on existing pages/globals (does not overwrite editor data).
 * Run: node --import tsx src/payload/seed/syncPhase2Content.ts
 */
import { config as loadEnv } from 'dotenv';
import { getPayload } from 'payload';

import {
  COMPANY_ENTITIES,
  INSURANCE_CATEGORIES,
} from '../../data/content';
import { EXTERNAL_LINKS, NAVIGATION_ROUTES } from '../../constants/app';
import { formCopySeedData } from './formCopyData';
import { documentSeedData } from './documentSeedData';
import {
  ensureMediaFromPublic,
  isFormGroupPopulated,
} from './helpers';

loadEnv({ path: '.env.local' });

const config = (await import('../../payload.config')).default;

const taxiLists = [
  {
    title: 'Taxiverzekering',
    items: [
      'Bent u op zoek naar een goede verzekering voor uw taxi, dan hebben wij voor u een passende oplossing. Onze taxiverzekering biedt een uitgebreide dekking, welke ook aan te vullen is met bijvoorbeeld de door het TX Keurmerk vereiste dekkingen, denk bijvoorbeeld aan de aansprakelijkheid voor bedrijven en de ongevallen inzittendenverzekering.',
    ],
  },
  {
    title: 'Wagenpark',
    items: [
      "TIS Risk Managers biedt ook voor wagenparken oplossingen. Buiten het bieden van een scherpe offerte, kunnen wij een risico analyse van uw bedrijf maken. Waar zitten de risico's, wordt er misschien risico's over het hoofd gezien en hoe voorkomen e/o dekken wij dit af? Samen met de klant komen wij dan tot mooie resultaten en een langdurige samenwerking.",
      'Bent u geïnteresseerd? Neem gerust contact met ons op, zodat wij een ontmoetingsgesprek kunnen inplannen!',
    ],
  },
  {
    title: 'Schadeafhandeling',
    items: [
      'De schadeafdeling van TIS Risk Managers is erg uniek, door haar transparantie. Door middel van een online dossier kan de klant de complete afwikkeling volgen door in te loggen. Hierdoor ziet de klant wat er gebeurd en de status achterhalen. Dit dossier is in te zien via zowel de PC, tablet als uw mobiele telefoon! U kunt via de app dan ook digitaal uw schademelden en stukken, als het schadeformulier, direct aan het schadedossier toevoegen. Mede hierdoor wordt veel tijd gewonnen.',
    ],
  },
];

const homeFeatureCards = [
  {
    title: 'Risk Managers',
    description:
      'TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd in het register GRMC.',
    cta: 'Lees meer',
    ctaLink: NAVIGATION_ROUTES.riskManagement,
    imageFile: 'slider-2.jpg',
    buttonVariant: 'ghost' as const,
  },
  {
    title: 'Maatwerk Verzekeringen',
    description:
      'De verzekeringen van TIS zijn stuk voor stuk maatwerk. De standaard verzekeringsproducten zijn vaak niet toereikend, waardoor er een kans bestaat dat er geen dekking is óf juist dekking heeft voor zaken die geen betrekking hebben op u of uw bedrijf.',
    cta: 'Lees meer',
    ctaLink: NAVIGATION_ROUTES.insurance,
    imageFile: 'unieke-kenmerken.jpg',
    buttonVariant: 'ghost' as const,
  },
  {
    title: 'Digitale Schadeafhandeling',
    description:
      'TIS biedt u een volledig digitale schadeafhandeling. Door deze specialisatie staan wij bekend om het snel en vakkundig afwikkelen van uw schade, van een inbraak, stormschade of het verhalen van uw bedrijfsschade.',
    cta: 'Lees meer',
    ctaLink: EXTERNAL_LINKS.damageReport,
    imageFile: 'slider-3.jpg',
    buttonVariant: 'ghost' as const,
  },
];

async function sync() {
  const payload = await getPayload({ config });

  const formCopy = await payload.findGlobal({
    slug: 'formCopy',
    overrideAccess: true,
  });
  const offerteEmpty = !isFormGroupPopulated(formCopy?.offerte);
  const meldEmpty = !isFormGroupPopulated(formCopy?.meldSchade);
  if (offerteEmpty || meldEmpty) {
    await payload.updateGlobal({
      slug: 'formCopy',
      overrideAccess: true,
      data: {
        _status: 'published',
        ...(offerteEmpty
          ? { offerte: formCopySeedData.offerte ?? {} }
          : {}),
        ...(meldEmpty
          ? { meldSchade: formCopySeedData.meldSchade ?? {} }
          : {}),
      },
    });
    console.log(
      `synced formCopy (${[
        offerteEmpty ? 'offerte' : null,
        meldEmpty ? 'meldSchade' : null,
      ]
        .filter(Boolean)
        .join(', ')})`,
    );
  }

  const downloads = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'downloads' } },
    limit: 1,
    overrideAccess: true,
  });
  const downloadsDoc = downloads.docs[0];
  if (
    downloadsDoc &&
    (!downloadsDoc.documents || downloadsDoc.documents.length === 0)
  ) {
    await payload.update({
      collection: 'pages',
      id: downloadsDoc.id,
      overrideAccess: true,
      data: {
        documents: documentSeedData.map((doc) => ({
          title: doc.title,
          link: doc.link,
        })),
      },
    });
    console.log('synced downloads.documents');
  }

  const verzekeringen = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'verzekeringen' } },
    limit: 1,
    overrideAccess: true,
  });
  const verzekeringenDoc = verzekeringen.docs[0];
  if (
    verzekeringenDoc &&
    (!verzekeringenDoc.cards || verzekeringenDoc.cards.length === 0)
  ) {
    await payload.update({
      collection: 'pages',
      id: verzekeringenDoc.id,
      overrideAccess: true,
      data: {
        cards: INSURANCE_CATEGORIES.map((card) => ({
          title: card.title,
          description: card.description,
          cta: card.cta,
          ctaLink: card.ctaLink,
          buttonVariant: card.buttonVariant,
        })),
      },
    });
    console.log('synced verzekeringen.cards');
  }

  const taxi = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'taxi' } },
    limit: 1,
    overrideAccess: true,
  });
  const taxiDoc = taxi.docs[0];
  if (taxiDoc) {
    const patch: {
      lists?: Array<{ title: string; items: Array<{ label: string }> }>;
      body?: Array<{ text: string }>;
    } = {};

    if (!taxiDoc.lists || taxiDoc.lists.length === 0) {
      patch.lists = taxiLists.map((list) => ({
        title: list.title,
        items: list.items.map((label) => ({ label })),
      }));
    }

    const bodyTexts = (taxiDoc.body ?? [])
      .map((block) =>
        block && typeof block === 'object' && 'text' in block
          ? String(block.text ?? '')
          : '',
      )
      .filter(Boolean);
    const hasDuplicateBody =
      bodyTexts.length > 1 &&
      bodyTexts.some((text, index) => index > 0 && text === bodyTexts[index - 1]);
    const listsReady =
      (taxiDoc.lists && taxiDoc.lists.length > 0) || Boolean(patch.lists);
    if (listsReady && (hasDuplicateBody || bodyTexts.length > 0)) {
      // Content lives in lists; clear duplicated/legacy body paragraphs.
      patch.body = [];
    }

    if (Object.keys(patch).length > 0) {
      await payload.update({
        collection: 'pages',
        id: taxiDoc.id,
        overrideAccess: true,
        data: patch,
      });
      console.log(
        `synced taxi (${Object.keys(patch).join(', ')})`,
      );
    }
  }

  const overOns = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'over-ons' } },
    limit: 1,
    overrideAccess: true,
  });
  const overOnsDoc = overOns.docs[0];
  if (overOnsDoc) {
    const patch: Record<string, unknown> = {};
    if (!overOnsDoc.lists || overOnsDoc.lists.length === 0) {
      patch['lists'] = [
        {
          title: 'Ondernemingen',
          items: COMPANY_ENTITIES.map((label) => ({ label })),
        },
      ];
    }
    if (!overOnsDoc.featuredImage) {
      patch['featuredImage'] = await ensureMediaFromPublic(
        payload,
        'team.jpg',
        'Teamfoto ENTO Groep',
      );
    }
    if (Object.keys(patch).length > 0) {
      await payload.update({
        collection: 'pages',
        id: overOnsDoc.id,
        overrideAccess: true,
        data: patch,
      });
      console.log(`synced over-ons (${Object.keys(patch).join(', ')})`);
    }
  }

  const home = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
    overrideAccess: true,
  });
  const homeDoc = home.docs[0];
  if (homeDoc) {
    const patch: Record<string, unknown> = {};

    if (!homeDoc.featuredImage) {
      patch['featuredImage'] = await ensureMediaFromPublic(
        payload,
        '1.webp',
        'TIS Risk Managers hero',
      );
    }

    if (!homeDoc.testimonial?.quote) {
      patch['testimonial'] = {
        quote:
          (Array.isArray(homeDoc.body) &&
            homeDoc.body[4] &&
            typeof homeDoc.body[4] === 'object' &&
            'text' in homeDoc.body[4] &&
            String(homeDoc.body[4].text)) ||
          'De weldaden van een verzekering komen samen met het onheil aan het licht.',
        name: 'René Enthoven',
        title: 'Directeur TIS Risk Managers',
        image: await ensureMediaFromPublic(
          payload,
          'rene.jpg',
          'René Enthoven',
        ),
      };
    } else if (!homeDoc.testimonial?.image) {
      patch['testimonial'] = {
        ...homeDoc.testimonial,
        image: await ensureMediaFromPublic(
          payload,
          'rene.jpg',
          'René Enthoven',
        ),
      };
    }

    if (!homeDoc.cards || homeDoc.cards.length === 0) {
      const cards = [];
      for (const card of homeFeatureCards) {
        const imageId = await ensureMediaFromPublic(
          payload,
          card.imageFile,
          card.title,
        );
        cards.push({
          title: card.title,
          description: card.description,
          cta: card.cta,
          ctaLink: card.ctaLink,
          buttonVariant: card.buttonVariant,
          image: imageId,
        });
      }
      patch['cards'] = cards;
    }

    if (Object.keys(patch).length > 0) {
      await payload.update({
        collection: 'pages',
        id: homeDoc.id,
        overrideAccess: true,
        data: patch,
      });
      console.log(`synced home (${Object.keys(patch).join(', ')})`);
    }
  }

  const siteSettings = await payload.findGlobal({
    slug: 'siteSettings',
    overrideAccess: true,
  });
  if (siteSettings && !siteSettings.postalBox?.box) {
    await payload.updateGlobal({
      slug: 'siteSettings',
      overrideAccess: true,
      data: {
        postalBox: {
          box: 'Postbus 12887',
          postalCode: '1100 AW',
          city: 'Amsterdam',
        },
        linkedInUrl: 'https://www.linkedin.com/company/tisrm/',
      },
    });
    console.log('synced siteSettings postalBox + linkedInUrl');
  }
}

sync()
  .then(() => {
    console.log('phase2 sync complete');
    process.exit(0);
  })
  .catch((error) => {
    console.error('phase2 sync failed', error);
    process.exit(1);
  });
