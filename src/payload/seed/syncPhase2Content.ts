/**
 * Fill empty Phase 2 CMS fields on existing pages/globals (does not overwrite editor data).
 * Run: node --import tsx src/payload/seed/syncPhase2Content.ts
 */
import { config as loadEnv } from 'dotenv';
import { getPayload } from 'payload';

import { INSURANCE_CATEGORIES } from '../../data/content';
import { documentSeedData } from './documentSeedData';

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

async function sync() {
  const payload = await getPayload({ config });

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
  if (taxiDoc && (!taxiDoc.lists || taxiDoc.lists.length === 0)) {
    await payload.update({
      collection: 'pages',
      id: taxiDoc.id,
      overrideAccess: true,
      data: {
        lists: taxiLists.map((list) => ({
          title: list.title,
          items: list.items.map((label) => ({ label })),
        })),
      },
    });
    console.log('synced taxi.lists');
  }

  const home = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
    overrideAccess: true,
  });
  const homeDoc = home.docs[0];
  if (homeDoc && !homeDoc.testimonial?.quote) {
    await payload.update({
      collection: 'pages',
      id: homeDoc.id,
      overrideAccess: true,
      data: {
        testimonial: {
          quote:
            (Array.isArray(homeDoc.body) &&
              homeDoc.body[4] &&
              typeof homeDoc.body[4] === 'object' &&
              'text' in homeDoc.body[4] &&
              String(homeDoc.body[4].text)) ||
            'De weldaden van een verzekering komen samen met het onheil aan het licht.',
          name: 'René Enthoven',
          title: 'Directeur TIS Risk Managers',
        },
      },
    });
    console.log('synced home.testimonial');
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
