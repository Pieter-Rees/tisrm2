/**
 * Create-if-missing Phase 1 seed: pages by slug + siteSettings + formCopy.
 * Existing pages/globals are left unchanged so editor edits survive re-seed.
 * Run: node --import tsx src/payload/seed/phase1.ts
 */
import { config as loadEnv } from 'dotenv';
import { getPayload } from 'payload';

import { formCopySeedData } from './formCopyData';

loadEnv({ path: '.env.local' });

const config = (await import('../../payload.config')).default;

type PageSeed = {
  slug: string;
  title: string;
  body: string[];
  lists?: Array<{ title: string; items: string[] }>;
};

const pages: PageSeed[] = [
  {
    slug: 'home',
    title: 'Home',
    body: [
      'Waarom kiezen voor TIS?',
      'Ontdek onze unieke aanpak en specialisaties die ons onderscheiden in de verzekeringsmarkt',
      'Klaar voor persoonlijk advies?',
      'Neem contact op voor een vrijblijvend gesprek over uw verzekeringsbehoefte',
      'De weldaden van een verzekering komen samen met het onheil aan het licht.',
    ],
    lists: [
      {
        title: 'Risk Managers',
        items: [
          'TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd in het register GRMC.',
        ],
      },
      {
        title: 'Maatwerk Verzekeringen',
        items: [
          'De verzekeringen van TIS zijn stuk voor stuk maatwerk. De standaard verzekeringsproducten zijn vaak niet toereikend, waardoor er een kans bestaat dat er geen dekking is óf juist dekking heeft voor zaken die geen betrekking hebben op u of uw bedrijf.',
        ],
      },
      {
        title: 'Digitale Schadeafhandeling',
        items: [
          'TIS biedt u een volledig digitale schadeafhandeling. Door deze specialisatie staan wij bekend om het snel en vakkundig afwikkelen van uw schade, van een inbraak, stormschade of het verhalen van uw bedrijfsschade.',
        ],
      },
    ],
  },
  {
    slug: 'over-ons',
    title: 'Over ons',
    body: [
      'De ENTO Groep is opgericht in 1994 en is begonnen als zelfstandige auto lease maatschappij voor het MKB. In 1998 is daar de discipline verzekeringen aan toegevoegd. In 2002 werd middels een overname van een grote assurantie portefeuille uit het oosten van Nederland de basis voor het huidige concern gelegd. Inmiddels is de tweede generatie in het bedrijf gekomen. Door nieuwe impulsen zijn wij reeds ook gecertificeerd Risico Managers en als zodanig geregistreerd in het GRMC register.',
      'Thans bestaat de ENTO groep uit de ondernemingen:',
      'Uit een zeer modern en inspirerend kantoor wordt de onderneming gedreven met geavanceerde software en bedrijfsmodel. Door gebruik te maken van diverse gespecialiseerde diensten zoals een call center en een uitbesteedde schade afdeling zijn wij in staat met een relatief klein team een mooie omzet te genereren. Focus ligt op advisering in Risico management en financiële vraagstukken.',
    ],
  },
  {
    slug: 'verzekeringen',
    title: 'Verzekeringen',
    body: [],
    lists: [
      {
        title: 'Particulier',
        items: [
          'U verwacht als particulier de beste service tegen scherpe premies, alsmede een snelle afhandeling van mogelijke schades. Bij TIS geniet u van adviseurs die op de juiste momenten bereikbaar zijn en de persoonlijke aandacht geven waar u als klant behoefte heeft.',
        ],
      },
      {
        title: 'Zakelijk',
        items: [
          "Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn, zijn alle risico's wel goed afgedekt en dan wel tegen de juiste premies? Wij nemen graag samen met u uw verzekeringspakket door en houden deze up to date, zodat ook u kunt genieten van de rust die TIS biedt.",
        ],
      },
      {
        title: 'Taxi',
        items: [
          'TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties én de klanten zelf.',
        ],
      },
    ],
  },
  {
    slug: 'verzekeringen-particulier',
    title: 'Particulier',
    body: [
      'Iedereen is op zoek naar de goedkoopste verzekering, maar u verwacht van ons natuurlijk wél een goed advies als adviseur over de allerbeste dekkingen. TIS is daarbij een uitstekend partner als zijnde erkend Risico Manager en als zodanig geregistreerd in het GRMC register. Hierdoor bent u verzekerd van het beste advies.',
      'Wij bieden verzekeringen tegen een concurrerend tarief, zonder daarbij de kwaliteit van het product uit het oog te verliezen.',
      'Of u nu een auto-, bromfiets-, aansprakelijkheid- of woonhuisverzekering nodig heeft, wij staan voor u klaar!',
      'Bovendien proberen wij al uw particuliere (schade) verzekeringen samen te voegen in één pakket, waardoor u een makkelijk overzicht heeft van uw lopende verzekeringen. Daarbij geeft een pakket aantrekkelijke kortingen over de premies.',
      'Wij groeien graag met u mee.',
      'Bent u geïnteresseerd of heeft u vragen, neem dan gerust contact op via de mail of bel ons!',
    ],
    lists: [
      {
        title: 'Onderweg',
        items: [
          'Autoverzekering',
          'Oldtimer',
          'Bromfiets',
          'Motor',
          'Aanhanger',
          'Caravan',
          'Camper',
        ],
      },
      {
        title: 'Gezinssituatie',
        items: ['Aansprakelijkheid', 'Rechtsbijstand', 'Ongevallen'],
      },
      {
        title: 'Wonen',
        items: ['Opstal', 'Inboedel', 'Kostbaarheden', 'Recreatiewoning'],
      },
      {
        title: 'Vrije tijd',
        items: ['Reis', 'Pleziervaartuigen', 'Recreatiegoederen'],
      },
    ],
  },
  {
    slug: 'verzekeringen-zakelijk',
    title: 'Zakelijk',
    body: [
      'TIS is al meer dan 25 jaar een landelijk werkend assurantiekantoor, welke altijd gespecialiseerd is geweest in verzekeren van het personenvervoer. Door onze jarenlange expertise in de personenvervoerbranche genieten wij veel vertrouwen bij de verzekeringsmaatschappijen. Als klant bent u degene die daar direct van profiteert. Doordat voorwaarden, mogelijkheden en premies per maatschappij verschillen en wij onafhankelijk zijn, kunnen wij voor de meest passende mogelijkheden combineren voor uw bedrijf. Dit resulteert in een zeer goede Prijs-Kwaliteit verhouding, waarmee u geniet van de meest uitgebreide voorwaarden tegen aantrekkelijke premies.',
      'Om u hierbij te helpen en beschermen tegen de mogelijke financiële gevolgen van schade in welke situatie dan ook, bieden wij u altijd de beste verzekering op maat. Omdat wij 100% onafhankelijk zijn bekijken wij per onderneming en per verzekering waar deze het beste kan worden ondergebracht. Hierdoor zijn wij instaat voor u het beste uit de markt te kiezen, tegen de aantrekkelijkste premies.',
      'Wilt u uw verzekeringspakket een grondig met ons doorlopen? Neem dan gerust contact met ons op!',
    ],
    lists: [
      {
        title: 'Vastgoed en bedrijfsgebouwen',
        items: ['Opstal', 'Huurderving', 'Taxaties'],
      },
      {
        title: 'Inhoud en horeca',
        items: [
          'Bedrijfsschade',
          'Huurdersbelang',
          'Inventaris en goederen',
          'Elektronica',
        ],
      },
      {
        title: 'Bouw en transport',
        items: [
          'Construction Allrisk (CAR)',
          'Goederentransport',
          'Transport eigen vervoer',
          'Transport en verblijf verzekering',
        ],
      },
      {
        title: 'Aansprakelijkheid',
        items: [
          'Bedrijfs- en/of beroepsaansprakelijkheid',
          'Vervoerdersaansprakelijkheid',
          'Bestuurdersaansprakelijkheid',
          'Milieuschade',
          'Werkgeversaansprakelijkheid',
        ],
      },
      {
        title: 'Motorrijtuigen',
        items: ['Personen en bedrijfswagens', 'Wagenparken'],
      },
      {
        title: 'Overige',
        items: ['Rechtsbijstand', 'Collectieve ongevallen'],
      },
    ],
  },
  {
    slug: 'taxi',
    title: 'Personenvervoer',
    body: [
      'Bent u op zoek naar een goede verzekering voor uw taxi, dan hebben wij voor u een passende oplossing. Onze taxiverzekering biedt een uitgebreide dekking, welke ook aan te vullen is met bijvoorbeeld de door het TX Keurmerk vereiste dekkingen, denk bijvoorbeeld aan de aansprakelijkheid voor bedrijven en de ongevallen inzittendenverzekering.',
      "TIS Risk Managers biedt ook voor wagenparken oplossingen. Buiten het bieden van een scherpe offerte, kunnen wij een risico analyse van uw bedrijf maken. Waar zitten de risico's, wordt er misschien risico's over het hoofd gezien en hoe voorkomen e/o dekken wij dit af? Samen met de klant komen wij dan tot mooie resultaten en een langdurige samenwerking.",
      "TIS Risk Managers biedt ook voor wagenparken oplossingen. Buiten het bieden van een scherpe offerte, kunnen wij een risico analyse van uw bedrijf maken. Waar zitten de risico's, wordt er misschien risico's over het hoofd gezien en hoe voorkomen e/o dekken wij dit af? Samen met de klant komen wij dan tot mooie resultaten en een langdurige samenwerking.",
      'Bent u geïnteresseerd? Neem gerust contact met ons op, zodat wij een ontmoetingsgesprek kunnen inplannen!',
      'De schadeafdeling van TIS Risk Managers is erg uniek, door haar transparantie. Door middel van een online dossier kan de klant de complete afwikkeling volgen door in te loggen. Hierdoor ziet de klant wat er gebeurd en de status achterhalen. Dit dossier is in te zien via zowel de PC, tablet als uw mobiele telefoon! U kunt via de app dan ook digitaal uw schademelden en stukken, als het schadeformulier, direct aan het schadedossier toevoegen. Mede hierdoor wordt veel tijd gewonnen.',
    ],
  },
  {
    slug: 'risk-management',
    title: 'Risk Management',
    body: [
      'TIS RM wil haar dienstverlening altijd verbeteren, uitbreiden en professionaliseren.',
      "Wij kunnen voor u een risicoinventarisatie uitvoeren. Samen met u maken wij een rapport, waarin uw unieke bedrijfs- en risicoprofiel naar voren komt. Hiermee kunnen wij samen precies zien waar u en uw bedrijf risico's lopen, waarmee wij kunnen bepalen in welke mate het risico invloed op u heeft. Is het verstandig om hier een verzekering voor af te sluiten, of is het beter om dit risico zelf te dragen?",
      'Ieder relevant risico komt in het onderzoek naar voren, welke wij duidelijk voor u rubriceren in een rapport. In de vorm van een risicoadvies geven wij vervolgens aan op welke wijze met ieder risico kan worden omgegaan, dit kan op een aantal manieren:',
      'Het vermijden van het risico • Het verminderen/voorkomen van het risico • Het verzekeren van het risico • Het zelf-dragen van het risico',
      'Per risico brengen wij dan tevens in kaart in hoeverre uw huidige verzekeringspakket hiervoor al dan niet dekking biedt en wat de kwaliteit daarvan is.',
      "Het is de kunst om na een grondige risico-inventarisatie te komen tot een 'onbewust (on)verzekerde situatie tot bewust (on)verzekerde situatie' en dat met een doorlopend karakter.",
      'In de samenvatting splitsen wij de volgende zaken:',
    ],
    lists: [
      {
        title: 'Samenvatting',
        items: [
          'Bedrijfsmiddelen',
          'Bedrijfsactiviteiten',
          'Vervoer & Logistiek',
          'Personeel',
          'Preventie',
        ],
      },
    ],
  },
  {
    slug: 'contact',
    title: 'Contact',
    body: [
      'Wil u uw schade inzien of een schade melden, klik op onderstaande knop.',
    ],
  },
  {
    slug: 'downloads',
    title: 'Downloads',
    body: [],
  },
];

async function createPageIfMissing(
  payload: Awaited<ReturnType<typeof getPayload>>,
  page: PageSeed,
) {
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: page.slug } },
    limit: 1,
  });

  if (existing.docs[0]) {
    console.log(`skipped page: ${page.slug} (already exists)`);
    return;
  }

  await payload.create({
    collection: 'pages',
    data: {
      title: page.title,
      slug: page.slug,
      _status: 'published',
      body: page.body.map((text) => ({ text })),
      lists: (page.lists ?? []).map((list) => ({
        title: list.title,
        items: list.items.map((label) => ({ label })),
      })),
    },
  });
  console.log(`created page: ${page.slug}`);
}

function isBlank(value: unknown): boolean {
  return value == null || (typeof value === 'string' && value.trim() === '');
}

async function seed() {
  const payload = await getPayload({ config });

  for (const page of pages) {
    await createPageIfMissing(payload, page);
  }

  const siteSettings = await payload.findGlobal({ slug: 'siteSettings' });
  if (!isBlank(siteSettings?.companyName)) {
    console.log('skipped siteSettings (already exists)');
  } else {
    await payload.updateGlobal({
      slug: 'siteSettings',
      data: {
        _status: 'published',
        companyName: 'TIS Risk Managers',
        phone: '+31 20 636 8191',
        email: 'info@tisrm.nl',
        address: {
          street: 'Muiderstraat 1',
          postalCode: '1011 PZ',
          city: 'Amsterdam',
          country: 'Nederland',
        },
        navItems: [
          { label: 'Home', href: '/' },
          { label: 'Verzekeringen', href: '/verzekeringen' },
          { label: 'Taxi', href: '/taxi' },
          { label: 'Risk Management', href: '/risk-management' },
          { label: 'Over ons', href: '/over-ons' },
          { label: 'Downloads', href: '/downloads' },
          { label: 'Contact', href: '/contact' },
        ],
        postalBox: {
          box: 'Postbus 12887',
          postalCode: '1100 AW',
          city: 'Amsterdam',
        },
        linkedInUrl: 'https://www.linkedin.com/company/tisrm/',
      },
    });
    console.log('created siteSettings');
  }

  const formCopy = await payload.findGlobal({ slug: 'formCopy' });
  const formCopyExists =
    formCopy?.offerte != null || formCopy?.meldSchade != null;
  if (formCopyExists) {
    console.log('skipped formCopy (already exists)');
  } else {
    await payload.updateGlobal({
      slug: 'formCopy',
      data: {
        _status: 'published',
        offerte: formCopySeedData.offerte ?? {},
        meldSchade: formCopySeedData.meldSchade ?? {},
      },
    });
    console.log('created formCopy');
  }
}

seed()
  .then(() => {
    console.log('seed complete');
    process.exit(0);
  })
  .catch((error) => {
    console.error('seed failed', error);
    process.exit(1);
  });
