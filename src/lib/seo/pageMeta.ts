import { NAVIGATION_ROUTES } from '@/constants/app';

/**
 * Meta titles and descriptions are taken verbatim from the TIS SEO copy deck,
 * including the brand suffix where the deck specifies one. `heading` is the
 * single H1 that belongs to the page.
 */
export const PAGE_META = {
  home: {
    title: 'Verzekeringsadviseur voor ondernemers | TIS Risk Managers',
    description:
      'Assurantiekantoor in Amsterdam voor personenvervoer, vastgoed, horeca, bouw en MKB. Persoonlijk advies en een eigen schadeafdeling. Bel 020 636 8191.',
    heading: 'Onafhankelijk verzekeringsadvies in Amsterdam',
    path: NAVIGATION_ROUTES.home,
  },
  businessInsurance: {
    title: 'Zakelijke verzekeringen voor het MKB | TIS Risk Managers',
    description:
      'Bedrijfsverzekeringen op maat: aansprakelijkheid, bedrijfsschade, inventaris, wagenpark en verzuim. Advies van een vaste adviseur. Bel 020 636 8191.',
    heading: 'Zakelijke verzekeringen voor ondernemers',
    path: NAVIGATION_ROUTES.businessInsurance,
  },
  taxi: {
    title: 'Taxiverzekering en wagenparkverzekering | TIS Risk Managers',
    description:
      'Al 25 jaar specialist in taxiverzekeringen en wagenparken. Inclusief TX Keurmerk-dekkingen en eigen schadeafhandeling voor taxibedrijven. Bel 020 636 8191.',
    heading: 'Taxi- en wagenparkverzekering',
    path: NAVIGATION_ROUTES.taxi,
  },
  realEstate: {
    title: 'Opstalverzekering en VvE-verzekering | TIS Risk Managers',
    description:
      'Opstalverzekering, huurderving en aansprakelijkheid voor VvE’s, verhuurders en beleggers. Wij toetsen ook of uw herbouwwaarde nog klopt. Bel 020 636 8191.',
    heading: 'Verzekeringen voor vastgoed en VvE’s',
    path: NAVIGATION_ROUTES.realEstate,
  },
  hospitality: {
    title: 'Horecaverzekering restaurant en café | TIS Risk Managers',
    description:
      'Inventaris, goederen, bedrijfsschade en aansprakelijkheid voor de horeca. Eén pakket, één adviseur en snelle schadeafhandeling. Bel 020 636 8191.',
    heading: 'Horecaverzekering voor restaurant, café en bar',
    path: NAVIGATION_ROUTES.hospitality,
  },
  liability: {
    title: 'Aansprakelijkheidsverzekering bedrijf | TIS Risk Managers',
    description:
      'AVB en BAV voor ondernemers en zzp’ers. Wij leggen uit welke dekking u nodig heeft en brengen beide onder in één pakket. Bel 020 636 8191.',
    heading: 'Aansprakelijkheidsverzekering voor ondernemers',
    path: NAVIGATION_ROUTES.liability,
  },
  construction: {
    title: 'CAR-verzekering en bouwverzekering | TIS Risk Managers',
    description:
      'CAR-verzekering, werkmaterieel en beroepsaansprakelijkheid voor aannemers, installatiebedrijven, architecten en adviseurs. Bel 020 636 8191.',
    heading: 'Verzekeringen voor bouw en technische bedrijven',
    path: NAVIGATION_ROUTES.construction,
  },
  absence: {
    title: 'Verzuimverzekering voor werkgevers | TIS Risk Managers',
    description:
      'Loondoorbetaling bij ziekte verzekeren, verzuimverzekering mkb, WIA en collectieve ongevallen. Inclusief arbodienstverlening. Bel 020 636 8191.',
    heading: 'Ziekteverzuim en personeel',
    path: NAVIGATION_ROUTES.absence,
  },
  personalInsurance: {
    title: 'Particuliere verzekeringen | TIS Risk Managers',
    description:
      'Woonhuis, inboedel, kostbaarheden, oldtimer en tweede woning. Voor wie meer te verzekeren heeft dan een standaardpolis dekt. Bel 020 636 8191.',
    heading: 'Particuliere verzekeringen',
    path: NAVIGATION_ROUTES.personalInsurance,
  },
  riskAdvice: {
    title: 'Verzekeringen laten beoordelen | TIS Risk Managers',
    description:
      'GRMC-geregistreerde adviseurs nemen uw polissen door en bepalen met u per risico wat u verzekert en wat u zelf draagt. Bel 020 636 8191.',
    heading: 'Risk Management voor ondernemers',
    path: NAVIGATION_ROUTES.riskAdvice,
  },
  knowledgeBase: {
    title: 'Kennisbank verzekeringen | TIS Risk Managers',
    description:
      'Uitleg over taxiverzekeringen, VvE en vastgoed, horeca, aansprakelijkheid, bouw en verzuim. Geschreven door onze eigen adviseurs.',
    heading: 'Kennisbank',
    path: NAVIGATION_ROUTES.knowledgeBase,
  },
  about: {
    title: 'Over TIS Risk Managers | Assurantiekantoor Amsterdam',
    description:
      'Sinds 1994 actief, tweede generatie, GRMC-geregistreerd. Assurantiekantoor in Amsterdam met een eigen schadeafdeling. Bel 020 636 8191.',
    heading: 'Over ons',
    path: NAVIGATION_ROUTES.about,
  },
  damageReport: {
    title: 'Schade melden bij uw adviseur | TIS Risk Managers',
    description:
      'Meld uw schade rechtstreeks bij de schadeafdeling van TIS Risk Managers. Wat u aanlevert en wat er daarna gebeurt. Bel 020 636 8191.',
    heading: 'Schade melden',
    path: NAVIGATION_ROUTES.damageReport,
  },
  downloads: {
    title: 'Schadeformulieren downloaden | TIS Risk Managers',
    description:
      'Download het Europees schadeformulier, aanvraagformulieren, machtiging incasso, dienstenwijzer en privacyverklaring van TIS Risk Managers.',
    heading: 'Formulieren en documenten',
    path: NAVIGATION_ROUTES.downloads,
  },
  contact: {
    title: 'Contact en openingstijden | TIS Risk Managers',
    description:
      'TIS Risk Managers, Muiderstraat 1 Amsterdam. Bel 020 636 8191 of mail info@tisrm.nl. U krijgt een adviseur aan de lijn, geen keuzemenu.',
    heading: 'Contact',
    path: NAVIGATION_ROUTES.contact,
  },
  quote: {
    title: 'Offerte aanvragen | TIS Risk Managers',
    description:
      'Vraag een vrijblijvende offerte aan bij TIS Risk Managers voor uw verzekeringen.',
    heading: 'Offerte aanvragen',
    path: NAVIGATION_ROUTES.quote,
  },
} as const;

export type PageMetaKey = keyof typeof PAGE_META;
