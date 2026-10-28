import { NAVIGATION_ROUTES, getKnowledgeArticlePath } from '@/constants/app';
import type { ContentBlock } from '@/types/content';

export const KNOWLEDGE_CATEGORIES = [
  'Taxi en personenvervoer',
  'Vastgoed en VvE',
  'Horeca',
  'Aansprakelijkheid',
  'Bouw en techniek',
  'Personeel en verzuim',
  'Kiezen en vergelijken',
] as const;

export type KnowledgeCategory = (typeof KNOWLEDGE_CATEGORIES)[number];

export type KnowledgeArticle = {
  slug: string;
  /** Single H1 of the article. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: KnowledgeCategory;
  /** Teaser on the knowledge base index. */
  summary: string;
  /** Opening paragraph, rendered as lead text. */
  intro: string;
  blocks: readonly ContentBlock[];
};

/** Everything the knowledge base index needs, without the article body. */
export type KnowledgeArticleSummary = Pick<
  KnowledgeArticle,
  'slug' | 'title' | 'summary'
>;

export type KnowledgeCategoryGroup = {
  category: KnowledgeCategory;
  articles: readonly KnowledgeArticleSummary[];
};

export const KNOWLEDGE_ARTICLES: readonly KnowledgeArticle[] = [
  {
    slug: 'tx-keurmerk-verzekeringen',
    title: 'Welke verzekeringen vraagt het TX Keurmerk?',
    metaTitle: 'Welke verzekeringen vraagt het TX Keurmerk?',
    metaDescription:
      'Welke dekkingen een taxibedrijf nodig heeft voor het TX Keurmerk, en waar het bij een audit in de praktijk misgaat. Uitleg van onze taxispecialisten.',
    category: 'Taxi en personenvervoer',
    summary:
      'Welke verzekeringseisen gelden voor taxibedrijven met het TX Keurmerk en waar moet u op letten?',
    intro:
      'Het TX Keurmerk stelt eisen aan taxibedrijven op het gebied van bedrijfsvoering, personeel en verzekeringen. Dat laatste onderdeel leidt in de praktijk tot de meeste misverstanden, omdat ondernemers ervan uitgaan dat hun gewone taxiverzekering voldoende is. Dat is lang niet altijd zo.',
    blocks: [
      {
        kind: 'callout',
        title: 'Let op',
        text: 'De exacte eisen van het TX Keurmerk worden periodiek bijgesteld. Raadpleeg altijd de actuele keurmerkreglementen of bel ons voor de stand van zaken op dit moment.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Waarom het keurmerk eisen stelt aan uw verzekeringen',
      },
      {
        kind: 'paragraph',
        text: 'Het TX Keurmerk is bedoeld om de kwaliteit in de taxibranche zichtbaar te maken, en daar hoort bij dat een gecertificeerd bedrijf zijn verplichtingen kan dragen als er iets misgaat. Voor opdrachtgevers in het contractvervoer, zoals gemeenten, zorginstellingen en scholen, is dat vaak de reden dat zij het keurmerk überhaupt eisen.',
      },
      {
        kind: 'paragraph',
        text: 'Veel aanbestedingen in het doelgroepenvervoer hebben het keurmerk als harde voorwaarde. Verliest u uw certificering, dan verliest u die contracten.',
      },
      { kind: 'heading', level: 2, text: 'De wettelijk verplichte basis' },
      {
        kind: 'paragraph',
        text: 'Ongeacht het keurmerk is een WA-dekking verplicht op grond van de Wet aansprakelijkheidsverzekering motorrijtuigen. Die dekt schade die u met uw voertuig bij anderen veroorzaakt. Voor taxi’s geldt daarbij dat het voertuig moet zijn verzekerd voor zakelijk personenvervoer, niet voor particulier gebruik.',
      },
      {
        kind: 'paragraph',
        text: 'Dat lijkt een open deur, maar het gaat regelmatig mis bij ondernemers die met een eigen auto beginnen en die later zakelijk gaan inzetten zonder de polis aan te passen. Bij schade kan de verzekeraar dan weigeren uit te keren.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'De aanvullende dekkingen die het keurmerk vraagt',
      },
      {
        kind: 'paragraph',
        text: 'Boven op de wettelijke basis gaat het om dekkingen die te maken hebben met uw passagiers, uw chauffeurs en uw aansprakelijkheid als bedrijf.',
      },
      { kind: 'heading', level: 3, text: 'Ongevallen inzittendenverzekering' },
      {
        kind: 'paragraph',
        text: 'Keert een vooraf afgesproken bedrag uit bij blijvend letsel of overlijden van inzittenden, ongeacht wie schuldig is aan het ongeval. Het voordeel is dat er geen discussie over de schuldvraag nodig is voordat er wordt uitgekeerd.',
      },
      {
        kind: 'heading',
        level: 3,
        text: 'Bedrijfsaansprakelijkheidsverzekering (AVB)',
      },
      {
        kind: 'paragraph',
        text: 'Dekt schade die u of uw medewerkers veroorzaken buiten het verkeer om. Denk aan een chauffeur die een rolstoel beschadigt bij het in- of uitladen, of letsel van een passagier bij het instappen. Dat valt niet onder de WA-dekking van het voertuig, want die geldt alleen voor deelname aan het verkeer.',
      },
      {
        kind: 'heading',
        level: 3,
        text: 'Werkgeversaansprakelijkheid voor motorrijtuigen',
      },
      {
        kind: 'paragraph',
        text: 'In de praktijk vaak WEGAM genoemd. Als werkgever bent u aansprakelijk voor schade die uw chauffeur tijdens werktijd in het verkeer oploopt, ook als hij de aanrijding zelf veroorzaakte. Een gewone cascodekking vangt dat niet op, want die vergoedt alleen het voertuig.',
      },
      {
        kind: 'paragraph',
        text: 'Deze dekking wordt het vaakst over het hoofd gezien, terwijl claims hier het hoogst oplopen zodra er sprake is van blijvend letsel.',
      },
      { kind: 'heading', level: 2, text: 'Waar het bij een audit misgaat' },
      {
        kind: 'paragraph',
        text: 'Uit onze ervaring met keurmerkaudits komen vier terugkerende problemen naar voren.',
      },
      {
        kind: 'list',
        items: [
          'De polis staat op de verkeerde naam. Op naam van de ondernemer privé in plaats van de onderneming, of op een oude bv-naam na een herstructurering.',
          'Een dekking is wel aangevraagd maar nooit geaccepteerd. De aanvraag loopt nog of is afgewezen zonder dat iemand dat heeft opgemerkt.',
          'Het verzekerd bedrag is te laag. De dekking bestaat, maar het bedrag voldoet niet aan de gestelde minimumeis.',
          'Een voertuig staat niet op de polis. Bij losse polissen per auto gebeurt het dat een nieuw voertuig wel rijdt maar nog niet is aangemeld.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Dat laatste punt is een van de redenen waarom wij bij meerdere voertuigen een wagenparkpolis adviseren. Daarbij is het aan- en afmelden eenvoudiger en loopt u minder risico op een gat in de dekking.',
      },
      {
        kind: 'link',
        label: 'Lees wanneer een wagenparkverzekering loont',
        href: getKnowledgeArticlePath('wagenparkverzekering-of-losse-polissen'),
      },
      { kind: 'heading', level: 2, text: 'Wat u het beste kunt doen' },
      {
        kind: 'paragraph',
        text: 'Leg uw polisbladen naast de actuele keurmerkeisen voordat de audit komt, niet erna. Controleer daarbij de tenaamstelling, de verzekerde bedragen en of alle voertuigen erop staan.',
      },
      {
        kind: 'paragraph',
        text: 'Wij doen die toetsing kosteloos voor taxiondernemers, ook als u nog geen relatie van ons bent. Stuur uw polisbladen naar info@tisrm.nl of bel 020 636 8191, dan hoort u binnen enkele werkdagen wat er klopt en wat niet.',
      },
      {
        kind: 'link',
        label: 'Naar taxi- en wagenparkverzekering',
        href: NAVIGATION_ROUTES.taxi,
      },
    ],
  },
  {
    slug: 'wagenparkverzekering-of-losse-polissen',
    title: 'Wagenparkverzekering of losse polissen: wat is voordeliger?',
    metaTitle: 'Wagenparkverzekering of losse polissen: wat is voordeliger?',
    metaDescription:
      'Vanaf hoeveel voertuigen een wagenparkverzekering loont, hoe uw premie dan wordt bepaald en waarom u daarmee invloed krijgt op uw kosten.',
    category: 'Taxi en personenvervoer',
    summary:
      'Wanneer kan een wagenparkverzekering interessant zijn en welke factoren bepalen de premie en voorwaarden?',
    intro:
      'Rijdt u met meerdere voertuigen, dan komt vroeg of laat de vraag of u ze los verzekert of onderbrengt in één wagenparkpolis. Het antwoord hangt af van meer dan alleen het aantal auto’s, al is dat wel het makkelijkste startpunt.',
    blocks: [
      {
        kind: 'heading',
        level: 2,
        text: 'Vanaf hoeveel voertuigen loont het?',
      },
      {
        kind: 'paragraph',
        text: 'Verzekeraars hanteren verschillende grenzen, maar in de praktijk begint een wagenparkpolis interessant te worden vanaf ongeveer vijf voertuigen. Sommige maatschappijen doen het al vanaf drie, andere pas vanaf tien. Voor taxibedrijven liggen die grenzen vaak lager dan voor gewone bedrijfswagens, omdat het schadebeeld in deze branche beter bekend is.',
      },
      {
        kind: 'paragraph',
        text: 'Belangrijker dan het precieze aantal is wat u met de polis wilt bereiken. Gaat het u om gemak, of om grip op uw kosten?',
      },
      { kind: 'heading', level: 2, text: 'Het verschil in beheer' },
      {
        kind: 'table',
        columns: ['Onderdeel', 'Losse polissen', 'Wagenparkpolis'],
        rows: [
          [
            'Prolongatiedata',
            'Per voertuig verschillend',
            'Eén datum voor het hele park',
          ],
          [
            'Voertuig toevoegen',
            'Nieuwe aanvraag en acceptatie',
            'Melden, vaak direct gedekt',
          ],
          [
            'Voertuig afvoeren',
            'Opzeggen met opzegtermijn',
            'Afmelden, premie wordt verrekend',
          ],
          ['Facturatie', 'Meerdere nota’s', 'Eén nota'],
          [
            'Risico op een gat in de dekking',
            'Groter: een vergeten aanmelding valt niet op',
            'Kleiner: alles loopt via één polis',
          ],
        ],
      },
      {
        kind: 'paragraph',
        text: 'Dat laatste punt is in de praktijk belangrijker dan ondernemers denken. Een voertuig dat rijdt maar niet op een polis staat, is een probleem dat pas zichtbaar wordt na een aanrijding.',
      },
      { kind: 'heading', level: 2, text: 'Het verschil in premieopbouw' },
      {
        kind: 'paragraph',
        text: 'Hier zit de werkelijke reden om over te stappen. Bij losse polissen betaalt u per voertuig, en bepaalt het aantal schadevrije jaren van dat voertuig uw premie via de bonus-malustabel. Rijdt een van uw chauffeurs een schade, dan valt die auto terug in de tabel en stijgt de premie daarvan jarenlang.',
      },
      {
        kind: 'paragraph',
        text: 'Bij een wagenparkpolis kijkt de verzekeraar naar uw schadelast: de totale schade die hij in een periode heeft uitgekeerd, uitgedrukt als percentage van de betaalde premie. Dat heet het schadepercentage of de schade-premieverhouding.',
      },
      { kind: 'heading', level: 3, text: 'Hoe dat uitpakt' },
      {
        kind: 'paragraph',
        text: 'Blijft uw schadepercentage onder een bepaalde grens, dan heeft u bij de volgende prolongatie een reële positie om korting te bedingen. Loopt het op, dan verhoogt de verzekeraar de premie of stelt hij een hoger eigen risico voor.',
      },
      {
        kind: 'paragraph',
        text: 'Het grote verschil met losse polissen is dat u er invloed op heeft. Niet achteraf, maar door gedurende het jaar te sturen op wat die schades veroorzaakt.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Wat uw schadelast werkelijk omlaag brengt',
      },
      {
        kind: 'paragraph',
        text: 'In vrijwel elk wagenpark dat wij analyseren komt hetzelfde patroon naar voren: een klein deel van de chauffeurs veroorzaakt een groot deel van de schades. Dat is geen oordeel over die mensen, maar het is wel waar u het verschil kunt maken.',
      },
      {
        kind: 'list',
        items: [
          'Inzicht per chauffeur en per voertuig. Pas als u weet waar de schades vandaan komen, kunt u er iets aan doen.',
          'Instructie en terugkoppeling. Een chauffeur die weet dat er naar zijn schades wordt gekeken, rijdt aantoonbaar voorzichtiger.',
          'Camera’s. Zowel voor de schuldvraag bij verhaal als voor het rijgedrag zelf.',
          'Onderhoud. Versleten banden en remmen leiden tot schades die als bestuurdersfout worden geboekt.',
          'Een hoger eigen risico. Kleine schades zelf dragen verlaagt uw premie en houdt uw schadepercentage schoon.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Die laatste optie wordt vaak over het hoofd gezien. Wie elke parkeerdeuk claimt, betaalt dat later terug in een hogere premie.',
      },
      { kind: 'heading', level: 2, text: 'Wanneer losse polissen beter zijn' },
      {
        kind: 'paragraph',
        text: 'Eerlijk is eerlijk: er zijn situaties waarin losse polissen beter uitpakken. Rijdt u met twee of drie voertuigen die allemaal een lange schadevrije historie hebben, dan betaalt u met losse polissen vrijwel zeker minder. Datzelfde geldt als uw voertuigen sterk van elkaar verschillen, bijvoorbeeld één dure directiewagen naast twee oude bestelbussen.',
      },
      {
        kind: 'paragraph',
        text: 'Wij rekenen beide varianten voor u door voordat u iets besluit. Dat kost u niets en voorkomt dat u overstapt op iets wat duurder uitvalt.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Wat wij nodig hebben voor een berekening',
      },
      {
        kind: 'list',
        items: [
          'De kentekens en bouwjaren van uw voertuigen',
          'Het aantal chauffeurs',
          'Uw schadeverleden van de afgelopen drie tot vijf jaar',
          'Uw huidige polisbladen en premies',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Bel 020 636 8191 of mail info@tisrm.nl. Binnen enkele werkdagen hoort u wat beide varianten u kosten.',
      },
      {
        kind: 'link',
        label: 'Naar de wagenparkverzekering',
        href: NAVIGATION_ROUTES.taxi,
      },
    ],
  },
  {
    slug: 'taxiverzekering-vergelijken',
    title: 'Taxiverzekering vergelijken: waar let u op?',
    metaTitle: 'Taxiverzekering vergelijken: waar let u op?',
    metaDescription:
      'Waarom de goedkoopste taxiverzekering zelden de beste is. Zes punten waarop u polissen vergelijkt, van uitsluitingen tot schadeafhandeling.',
    category: 'Taxi en personenvervoer',
    summary:
      'Waar moet u naast de premie op letten bij het vergelijken van taxiverzekeringen? Over dekkingen, eigen risico’s, voorwaarden en schadeafhandeling.',
    intro:
      'Zoekt u naar de beste taxiverzekering, dan komt u al snel uit bij lijstjes die sorteren op premie. Begrijpelijk, want premie is het makkelijkst te vergelijken. Het is alleen zelden het punt waarop polissen werkelijk van elkaar verschillen.',
    blocks: [
      {
        kind: 'paragraph',
        text: 'In het personenvervoer is dat extra waar. Een voertuig dat stilstaat kost u elke dag omzet, dus de snelheid waarmee uw schade geregeld is weegt vaak zwaarder dan twintig euro per maand aan premieverschil.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Zes punten waarop u werkelijk vergelijkt',
      },
      { kind: 'heading', level: 3, text: '1. De uitsluitingen' },
      {
        kind: 'paragraph',
        text: 'Dit is het belangrijkste en tegelijk het minst bekeken onderdeel. Kijk niet naar wat er gedekt is, maar naar wat er is uitgesloten. Daar zit het verschil tussen aanbieders.',
      },
      {
        kind: 'paragraph',
        text: 'Let bij taxiverzekeringen specifiek op: schade door een chauffeur zonder geldige taxipas, schade tijdens ritten buiten het afgesproken rijgebied, en dekking bij verhuur of uitlening van het voertuig aan een andere chauffeur.',
      },
      {
        kind: 'heading',
        level: 3,
        text: '2. Of de aanvullende dekkingen compleet zijn',
      },
      {
        kind: 'paragraph',
        text: 'Een goedkope polis is vaak goedkoop omdat er dekkingen ontbreken die u wel nodig heeft. Denk aan de schadeverzekering inzittenden, de werkgeversaansprakelijkheid voor motorrijtuigen en de bedrijfsaansprakelijkheid.',
      },
      {
        kind: 'paragraph',
        text: 'Werkt u met het TX Keurmerk, dan zijn een aantal daarvan bovendien verplicht.',
      },
      {
        kind: 'link',
        label: 'Welke verzekeringen vraagt het TX Keurmerk?',
        href: getKnowledgeArticlePath('tx-keurmerk-verzekeringen'),
      },
      { kind: 'heading', level: 3, text: '3. Vervangend vervoer' },
      {
        kind: 'paragraph',
        text: 'Reken uit wat een week stilstand u kost en vergelijk dat met wat de dekking voor vervangend vervoer per jaar extra kost. Voor de meeste taxiondernemers is die rekensom binnen één schade gemaakt.',
      },
      {
        kind: 'paragraph',
        text: 'Kijk daarbij naar de termijn: sommige polissen vergoeden maximaal tien dagen, andere tot het herstel klaar is. Bij een wachttijd op onderdelen is dat verschil aanzienlijk.',
      },
      { kind: 'heading', level: 3, text: '4. Het eigen risico' },
      {
        kind: 'paragraph',
        text: 'Een hoger eigen risico verlaagt uw premie. Of dat verstandig is, hangt af van hoeveel kleine schades u per jaar heeft en of u die zelf kunt opvangen. Voor een wagenpark is een hoger eigen risico vaak voordelig, omdat het uw schadelast schoon houdt en dus doorwerkt in de premie van volgend jaar.',
      },
      { kind: 'heading', level: 3, text: '5. Hoe uw premie wordt bepaald' },
      {
        kind: 'paragraph',
        text: 'Werkt de verzekeraar met bonus-malus per voertuig of met een schadepercentage over het hele wagenpark? Dat bepaalt wat er gebeurt na een schade.',
      },
      {
        kind: 'link',
        label: 'Lees het verschil tussen losse polissen en een wagenparkpolis',
        href: getKnowledgeArticlePath('wagenparkverzekering-of-losse-polissen'),
      },
      { kind: 'heading', level: 3, text: '6. Wie uw schade behandelt' },
      {
        kind: 'paragraph',
        text: 'Hier zit in de praktijk het grootste verschil, en het staat op geen enkele vergelijkingssite. Belt u na een schade een algemeen nummer bij een verzekeraar, of een behandelaar die uw polis en uw bedrijf kent?',
      },
      {
        kind: 'paragraph',
        text: 'Vraag het expliciet voordat u tekent: wie behandelt mijn schade, en kan ik die persoon rechtstreeks bereiken? Bij TIS blijft uw dossier in huis bij onze eigen schadeafdeling.',
      },
      { kind: 'heading', level: 2, text: 'Wat bepaalt uw premie?' },
      {
        kind: 'paragraph',
        text: 'Om offertes goed te kunnen vergelijken, helpt het te weten waar verzekeraars naar kijken.',
      },
      {
        kind: 'definitions',
        items: [
          {
            term: 'Schadeverleden',
            description:
              'De zwaarste factor. Verzekeraars kijken doorgaans drie tot vijf jaar terug.',
          },
          {
            term: 'Aantal voertuigen',
            description:
              'Meer voertuigen geeft toegang tot een wagenparkpolis en meer onderhandelingsruimte.',
          },
          {
            term: 'Type vervoer',
            description:
              'Straattaxi, contractvervoer, zorgvervoer en luxe vervoer met chauffeur hebben elk een eigen risicoprofiel.',
          },
          {
            term: 'Rijgebied',
            description:
              'Binnenstedelijk vervoer kent meer blikschade dan langeafstandsvervoer.',
          },
          {
            term: 'Leeftijd en ervaring chauffeurs',
            description: 'Jonge of onervaren chauffeurs verhogen de premie.',
          },
          {
            term: 'Cataloguswaarde van het voertuig',
            description: 'Bepaalt de cascopremie.',
          },
          {
            term: 'Eigen risico',
            description: 'Hoger eigen risico, lagere premie.',
          },
        ],
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Waarom wij zelden de goedkoopste zijn',
      },
      {
        kind: 'paragraph',
        text: 'Dat zeggen wij liever meteen. Wij concurreren niet op premie alleen, maar op de combinatie van dekking en afhandeling. Wat wij wel doen is kijken of u ergens betaalt voor dekking die u niet gebruikt, zodat er ruimte ontstaat voor de dekkingen die er wél toe doen.',
      },
      {
        kind: 'link',
        label: 'Lees waarom de goedkoopste polis zelden de voordeligste is',
        href: getKnowledgeArticlePath('goedkope-zakelijke-verzekering'),
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Laat uw huidige taxiverzekering beoordelen',
      },
      {
        kind: 'paragraph',
        text: 'Stuur uw polisbladen naar info@tisrm.nl of bel 020 636 8191. U krijgt van ons een overzicht van wat er gedekt is, wat ontbreekt en wat dat zou kosten. Ook als de uitkomst is dat u beter af bent bij uw huidige verzekeraar, zeggen wij dat gewoon.',
      },
      {
        kind: 'link',
        label: 'Naar de taxiverzekering',
        href: NAVIGATION_ROUTES.taxi,
      },
    ],
  },
  {
    slug: 'vve-onderverzekering-herbouwwaarde',
    title: 'Is uw VvE onderverzekerd?',
    metaTitle: 'Is uw VvE onderverzekerd? Over herbouwwaarde en taxatie',
    metaDescription:
      'Hoe onderverzekering bij een VvE ontstaat, wat de evenredigheidsregel betekent bij schade en hoe een taxatie u zes jaar bescherming geeft.',
    category: 'Vastgoed en VvE',
    summary:
      'Over herbouwwaarde, taxatie en wat er gebeurt als uw verzekerde som te laag staat.',
    intro:
      'Dit is het probleem dat wij bij nieuwe VvE-relaties het vaakst tegenkomen, en het is er een met grote gevolgen. De verzekerde som op de opstalpolis staat al jaren op hetzelfde bedrag, terwijl de bouwkosten in die periode fors zijn gestegen. Bij schade blijkt dan dat de vereniging een deel zelf moet dragen.',
    blocks: [
      { kind: 'heading', level: 2, text: 'Hoe onderverzekering ontstaat' },
      {
        kind: 'paragraph',
        text: 'De opstalverzekering van een VvE is gebaseerd op de herbouwwaarde: het bedrag dat nodig is om het complex opnieuw op te bouwen zoals het was. Dat bedrag is iets anders dan de marktwaarde of de WOZ-waarde, want het gaat puur om de bouwkosten.',
      },
      {
        kind: 'paragraph',
        text: 'Die bouwkosten zijn de afgelopen jaren aanzienlijk gestegen: materialen, arbeid en de kosten van vergunningen en toezicht. Een herbouwwaarde die tien jaar geleden klopte, dekt vandaag de werkelijke herbouw niet meer.',
      },
      {
        kind: 'paragraph',
        text: 'De meeste polissen kennen wel een index, waarmee het verzekerd bedrag jaarlijks meestijgt. Het probleem is dat die index de werkelijke bouwkostenstijging in sommige jaren niet bijhoudt, en dat verbouwingen of uitbreidingen aan het complex vaak nooit zijn doorgegeven.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Wat er gebeurt bij schade: de evenredigheidsregel',
      },
      {
        kind: 'paragraph',
        text: 'Bent u onderverzekerd, dan keert de verzekeraar niet het tekort uit maar vergoedt hij naar verhouding. Dat heet de evenredigheidsregel.',
      },
      {
        kind: 'callout',
        title: 'Voorbeeld',
        text: 'Stel dat de werkelijke herbouwwaarde van uw complex 4 miljoen euro is, maar op de polis staat 3 miljoen. U bent dan voor driekwart verzekerd. Ontstaat er een brandschade van 200.000 euro, dan keert de verzekeraar driekwart daarvan uit: 150.000 euro. De resterende 50.000 euro komt voor rekening van de vereniging, en dus van de leden.',
      },
      {
        kind: 'paragraph',
        text: 'Let op dat dit ook geldt bij kleine schades. U hoeft het complex niet volledig te verliezen om met het tekort geconfronteerd te worden: elke schade wordt naar verhouding uitgekeerd.',
      },
      { kind: 'heading', level: 2, text: 'De oplossing: een taxatierapport' },
      {
        kind: 'paragraph',
        text: 'Laat de herbouwwaarde vaststellen door een taxateur. Een taxatierapport volgens artikel 7:960 van het Burgerlijk Wetboek, opgesteld door een erkend deskundige, geeft u drie jaar zekerheid, en in de praktijk hanteren verzekeraars voor opstal doorgaans een termijn van zes jaar.',
      },
      {
        kind: 'paragraph',
        text: 'Binnen die termijn kan de verzekeraar zich niet beroepen op onderverzekering. Ontstaat er schade, dan wordt uitgekeerd op basis van het getaxeerde bedrag, ook als de werkelijke bouwkosten inmiddels hoger liggen.',
      },
      {
        kind: 'paragraph',
        text: 'De kosten van zo’n taxatie zijn voor een VvE beperkt en vallen in het niet bij wat één onderverzekerde schade kost.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Wanneer u opnieuw moet laten kijken',
      },
      {
        kind: 'list',
        items: [
          'Als uw taxatie verloopt. Noteer de einddatum, want hij vervalt stilzwijgend.',
          'Na een verbouwing of uitbreiding. Een dakopbouw, een serre of het optoppen van het complex verandert de herbouwwaarde.',
          'Bij een wijziging in het gebruik. Bijvoorbeeld als een bedrijfsruimte op de begane grond woonruimte wordt, of andersom.',
          'Bij een wisseling van beheerder. Een goed moment om het hele pakket tegen het licht te houden.',
          'Bij een monumentale status. Herbouw volgens monumentale eisen is aanzienlijk duurder dan regulier herstel.',
        ],
      },
      { kind: 'heading', level: 2, text: 'Wat u nu kunt doen' },
      {
        kind: 'paragraph',
        text: 'Pak uw polisblad erbij en kijk naar drie dingen: het verzekerd bedrag, of er een taxatieclausule op staat en zo ja tot welke datum die geldt. Staat er geen taxatieclausule, dan loopt uw vereniging risico.',
      },
      {
        kind: 'paragraph',
        text: 'Wij controleren dat kosteloos voor u. Stuur uw polisblad naar info@tisrm.nl of bel 020 636 8191. Als blijkt dat er een taxatie nodig is, brengen wij u in contact met een erkend taxateur.',
      },
      {
        kind: 'link',
        label: 'Naar vastgoed- en VvE-verzekeringen',
        href: NAVIGATION_ROUTES.realEstate,
      },
    ],
  },
  {
    slug: 'huurderving-verhuurd-vastgoed',
    title: 'Huurderving: wat als uw pand tijdelijk onverhuurbaar is?',
    metaTitle: 'Huurderving: wat als uw pand tijdelijk onverhuurbaar is?',
    metaDescription:
      'Hoe een huurdervingsdekking werkt, voor hoeveel maanden u verzekert en waarom verhuurders en beleggers deze dekking het vaakst missen.',
    category: 'Vastgoed en VvE',
    summary:
      'Bij schade aan een verhuurd pand kunnen huurinkomsten wegvallen. Hoe werkt de dekking voor huurderving en wanneer kunt u aanspraak maken op een vergoeding?',
    intro:
      'Brand, een gesprongen leiding of ernstige stormschade: uw pand is tijdelijk onbewoonbaar en uw huurder vertrekt. De opstalverzekering betaalt het herstel, maar wie betaalt de huur die u in de tussentijd misloopt? Daarvoor bestaat de huurdervingsdekking, en die ontbreekt vaker dan u zou verwachten.',
    blocks: [
      {
        kind: 'heading',
        level: 2,
        text: 'Waarom dit voor verhuurders zwaarder weegt dan voor eigenaar-bewoners',
      },
      {
        kind: 'paragraph',
        text: 'Een eigenaar die zelf in het pand woont, heeft bij schade een probleem met onderdak. Vervelend, maar daar is vaak een regeling voor binnen de opstalpolis.',
      },
      {
        kind: 'paragraph',
        text: 'Een verhuurder of belegger heeft een ander probleem: de hypotheeklasten, de VvE-bijdrage, de onroerendezaakbelasting en het onderhoud lopen gewoon door, terwijl de inkomstenkant wegvalt. Bij één pand kan dat een paar duizend euro per maand schelen. Bij een portefeuille van meerdere panden met financiering erop kan het uw liquiditeit in gevaar brengen.',
      },
      { kind: 'heading', level: 2, text: 'Hoe de dekking werkt' },
      {
        kind: 'paragraph',
        text: 'De huurdervingsdekking vergoedt de huurinkomsten die u misloopt doordat het pand na een gedekte schade niet verhuurd kan worden. Drie zaken bepalen of u er werkelijk iets aan heeft.',
      },
      { kind: 'heading', level: 3, text: 'De uitkeringstermijn' },
      {
        kind: 'paragraph',
        text: 'Meestal is dat een vast aantal maanden, vaak twaalf. Het is de vraag of dat genoeg is. Herbouw of herstel van een pand duurt met expertise, vergunningen, een aannemer die beschikbaar moet zijn en de uitvoering zelf vaak langer dan een jaar, zeker bij een grotere schade of in een beschermd stadsgezicht.',
      },
      {
        kind: 'paragraph',
        text: 'Reken de termijn liever terug vanaf een realistische hersteltijd dan dat u de standaardoptie aanhoudt.',
      },
      { kind: 'heading', level: 3, text: 'Het verzekerde bedrag' },
      {
        kind: 'paragraph',
        text: 'Dit is doorgaans een percentage van de verzekerde som van de opstal, of een vast bedrag per maand. Is uw huur sinds het afsluiten gestegen, dan dekt dat bedrag uw werkelijke inkomsten mogelijk niet meer.',
      },
      { kind: 'heading', level: 3, text: 'Of leegstand gedekt is' },
      {
        kind: 'paragraph',
        text: 'Stond het pand op het moment van de schade leeg, bijvoorbeeld tussen twee huurders in, dan keren veel polissen niets uit. Logisch vanuit de verzekeraar, maar onhandig als u net aan het zoeken was naar een nieuwe huurder. Sommige polissen dekken wel de periode waarin aantoonbaar werd verhuurd.',
      },
      { kind: 'heading', level: 2, text: 'Wat de dekking niet dekt' },
      {
        kind: 'paragraph',
        text: 'Huurderving is gekoppeld aan een gedekte schade aan het pand. Loopt uw huurinkomen weg door iets anders, dan helpt deze dekking niet.',
      },
      {
        kind: 'list',
        items: [
          'Een huurder die niet betaalt. Daarvoor bestaat een huurgarantie of een rechtsbijstandverzekering met incasso.',
          'Leegstand omdat u geen huurder kunt vinden. Dat is ondernemersrisico.',
          'Schade die niet onder de opstalpolis valt. Geen gedekte schade betekent ook geen huurderving.',
          'Gederfde huurverhoging. U krijgt de huur zoals die gold, niet wat u had kunnen vragen.',
        ],
      },
      { kind: 'heading', level: 2, text: 'Huurderving bij een VvE' },
      {
        kind: 'paragraph',
        text: 'Hier zit een punt dat regelmatig misgaat. Bij een appartementencomplex is de VvE verzekerd voor het gebouw, maar de huurderving is een belang van de individuele eigenaar die verhuurt, niet van de vereniging.',
      },
      {
        kind: 'paragraph',
        text: 'Verhuurt u een appartement in een VvE, controleer dan of uw eigen huurderving geregeld is. De collectieve opstalpolis van de VvE dekt dat doorgaans niet, of alleen beperkt.',
      },
      { kind: 'heading', level: 2, text: 'Wat u kunt controleren op uw polis' },
      {
        kind: 'list',
        items: [
          'Staat huurderving als aparte rubriek op het polisblad?',
          'Voor hoeveel maanden, en past dat bij een realistische hersteltijd?',
          'Welk bedrag per maand, en klopt dat nog met uw huidige huur?',
          'Is de verhuurvorm correct vermeld, inclusief kamerverhuur of kortdurende verhuur?',
          'Wat gebeurt er bij leegstand op het moment van schade?',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Wij lopen dat kosteloos met u door. Stuur uw polisblad naar info@tisrm.nl of bel 020 636 8191.',
      },
      {
        kind: 'link',
        label: 'Naar verzekeringen voor verhuurd vastgoed',
        href: NAVIGATION_ROUTES.realEstate,
      },
    ],
  },
  {
    slug: 'verzekeringen-restaurant-cafe',
    title: 'Welke verzekeringen heeft een restaurant of café nodig?',
    metaTitle: 'Welke verzekeringen heeft een restaurant of café nodig?',
    metaDescription:
      'Van inventaris en bederf van voorraad tot bedrijfsschade en aansprakelijkheid. Welke horecaverzekeringen u nodig heeft en waar polissen tegenvallen.',
    category: 'Horeca',
    summary:
      'Een overzicht van belangrijke horecaverzekeringen, waaronder inventaris en goederen, bedrijfsschade, aansprakelijkheid en aanvullende dekkingen.',
    intro:
      'In de horeca liggen de marges dun en de risico’s dicht op elkaar. Open vuur, hete olie, veel mensen in een kleine ruimte en een voorraad die bederft zodra de koeling uitvalt. Hieronder staat per dekking wat hij doet, waar polissen in de praktijk tegenvallen en wanneer u hem nodig heeft.',
    blocks: [
      {
        kind: 'heading',
        level: 2,
        text: 'De vier dekkingen die elke zaak nodig heeft',
      },
      { kind: 'heading', level: 3, text: '1. Inventaris en goederen' },
      {
        kind: 'paragraph',
        text: 'Uw inventaris is alles wat de zaak draaiende houdt: keukenapparatuur, koeling, tap, meubilair, servies en de inrichting. Uw goederen zijn uw voorraad.',
      },
      {
        kind: 'paragraph',
        text: 'Twee aandachtspunten. Ten eerste nieuwwaarde of dagwaarde: veel polissen schakelen automatisch over op dagwaarde zodra apparatuur ouder is dan een bepaald aantal jaren, en bij een vaatwasmachine of koelcel scheelt dat snel duizenden euro’s.',
      },
      {
        kind: 'paragraph',
        text: 'Ten tweede bederf van voorraad. Valt uw koeling uit door een storing of stroomuitval, dan is uw hele voorraad verloren. Dit is een aparte dekking die lang niet standaard meeloopt, terwijl het in de horeca de meest voorkomende schade is. Controleer of hij op uw polis staat en of stroomuitval buiten uw pand ook gedekt is.',
      },
      { kind: 'heading', level: 3, text: '2. Bedrijfsschade' },
      {
        kind: 'paragraph',
        text: 'Dit is de belangrijkste en tegelijk de meest onderschatte dekking. Na een brand of een waterschade bent u weken tot maanden dicht, terwijl huur, salarissen en vaste lasten doorlopen.',
      },
      {
        kind: 'paragraph',
        text: 'De bedrijfsschadeverzekering vergoedt uw doorlopende kosten en gemiste brutowinst gedurende de uitkeringstermijn. Kies die termijn niet standaard op twaalf maanden. Reken terug: hoelang duurt het voordat de expert langs is geweest, de vergunning rond is, de aannemer kan beginnen, het werk klaar is én uw vaste gasten terug zijn? In de horeca is dat laatste geen bijzaak, want een zaak die een half jaar dicht was moet zijn publiek opnieuw opbouwen.',
      },
      { kind: 'heading', level: 3, text: '3. Aansprakelijkheid' },
      {
        kind: 'paragraph',
        text: 'De bedrijfsaansprakelijkheidsverzekering dekt schade aan personen en zaken. In de horeca gaat het dan om een gast die uitglijdt, een voedselvergiftiging, of een medewerker die iets over de kleding van een bezoeker gooit.',
      },
      {
        kind: 'paragraph',
        text: 'Twee uitbreidingen zijn voor de horeca vrijwel altijd nodig. Huurdersbelang, voor schade aan het gehuurde pand, en productaansprakelijkheid, voor het eten en drinken dat u serveert. Dat laatste wordt vaak vergeten omdat men denkt dat het alleen voor fabrikanten geldt.',
      },
      {
        kind: 'link',
        label: 'Meer over aansprakelijkheidsverzekeringen',
        href: NAVIGATION_ROUTES.liability,
      },
      { kind: 'heading', level: 3, text: '4. Gebouw of huurdersbelang' },
      {
        kind: 'paragraph',
        text: 'Bent u eigenaar van het pand, dan heeft u een opstalverzekering nodig. Huurt u, en dat geldt voor de meeste horecazaken, dan verzekert u uw huurdersbelang.',
      },
      {
        kind: 'paragraph',
        text: 'Daaronder valt alles wat u zelf aan het pand heeft laten aanbrengen: het keukenblok, de vaste bar, scheidingswanden, de afzuiginstallatie, vloeren en verlichting. Dat is eigendom van u en valt dus niet onder de polis van de verhuurder. Bij een verbouwing van een ton of meer is dat een groot bedrag om onverzekerd te laten.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Aanvullende dekkingen per type zaak',
      },
      {
        kind: 'definitions',
        items: [
          {
            term: 'Terrasdekking',
            description:
              'Bij een buitenterras: stormschade aan parasols, meubilair en terrasverwarming.',
          },
          {
            term: 'Geld en waarden',
            description:
              'Bij veel contante omzet, inclusief vervoer naar de bank.',
          },
          {
            term: 'Milieuschade',
            description:
              'Bij een vetafscheider, grote koelinstallatie of opslag van gevaarlijke stoffen.',
          },
          {
            term: 'Evenementenaansprakelijkheid',
            description:
              'Bij besloten feesten, bruiloften of catering op locatie.',
          },
          {
            term: 'Cyber',
            description:
              'Bij online reserveringen, een digitale kassa en opgeslagen klantgegevens.',
          },
          {
            term: 'Rechtsbijstand',
            description:
              'Bij conflicten met leveranciers, personeel of de verhuurder.',
          },
          {
            term: 'Glasverzekering',
            description: 'Bij grote raampartijen of een pui aan de straat.',
          },
        ],
      },
      { kind: 'heading', level: 2, text: 'Verschillen per type zaak' },
      { kind: 'heading', level: 3, text: 'Restaurant met keuken' },
      {
        kind: 'paragraph',
        text: 'Het hoogste brandrisico vanwege frituur, open vuur en afzuiging. Verzekeraars stellen hier de strengste preventie-eisen: een gekeurde afzuiginstallatie, regelmatig gereinigde vetfilters en blusmiddelen op de juiste plek. Voldoet u daar bij schade niet aan, dan kan de uitkering worden verlaagd.',
      },
      { kind: 'heading', level: 3, text: 'Café of bar zonder keuken' },
      {
        kind: 'paragraph',
        text: 'Lager brandrisico, maar meer contante omzet en meer risico op vernieling en geweld bij sluitingstijd. Kijk naar de dekking voor geld en waarden en naar vandalisme buiten openingstijden.',
      },
      { kind: 'heading', level: 3, text: 'Zaak met terras' },
      {
        kind: 'paragraph',
        text: 'Een terras is kwetsbaar voor storm en diefstal, en het valt vaak buiten de standaarddekking voor inventaris omdat het zich buiten het pand bevindt. Laat dit expliciet meeverzekeren.',
      },
      { kind: 'heading', level: 3, text: 'Catering of foodtruck' },
      {
        kind: 'paragraph',
        text: 'Hier verschuift het risico mee naar de locatie waar u werkt. Dekking op wisselende locaties en tijdens transport is dan het belangrijkste punt.',
      },
      { kind: 'heading', level: 2, text: 'Personeel' },
      {
        kind: 'paragraph',
        text: 'Werkt u met personeel, dan bent u aansprakelijk voor letsel tijdens het werk. In een keuken is dat geen theoretisch risico. Daarnaast geldt de loondoorbetalingsplicht van twee jaar, ook voor parttimers.',
      },
      {
        kind: 'paragraph',
        text: 'De horeca werkt veel met oproepkrachten en aflopende contracten, en juist daar zit een kostenpost die vaak pas achteraf zichtbaar wordt: wordt iemand ziek uit een contract dat afloopt, dan komt die ziektewetuitkering alsnog voor uw rekening.',
      },
      {
        kind: 'link',
        label: 'Meer over verzuim en personeel',
        href: NAVIGATION_ROUTES.absence,
      },
      { kind: 'heading', level: 2, text: 'Wat kost het?' },
      {
        kind: 'paragraph',
        text: 'Dat hangt af van uw omzet, de waarde van uw inventaris, of u een keuken met frituur heeft, de oppervlakte van uw zaak en of er een terras bij hoort. Een premie noemen zonder die gegevens is gokken.',
      },
      {
        kind: 'paragraph',
        text: 'Bel 020 636 8191 en in een kwartier weten wij genoeg om een reëel voorstel te maken.',
      },
      {
        kind: 'link',
        label: 'Naar de horecaverzekering',
        href: NAVIGATION_ROUTES.hospitality,
      },
    ],
  },
  {
    slug: 'avb-of-bav-verschil',
    title: 'AVB of BAV: wat is het verschil?',
    metaTitle: 'AVB of BAV: wat is het verschil? | TIS Risk Managers',
    metaDescription:
      'Het verschil tussen bedrijfsaansprakelijkheid en beroepsaansprakelijkheid, met voorbeelden. Welke dekking u nodig heeft en wanneer allebei.',
    category: 'Aansprakelijkheid',
    summary:
      'Wat is het verschil tussen een bedrijfsaansprakelijkheidsverzekering en een beroepsaansprakelijkheidsverzekering? En welke dekking past bij uw werkzaamheden?',
    intro:
      'Dit zijn de twee verzekeringen die ondernemers het vaakst door elkaar halen, en de verwarring komt pas aan het licht op het moment dat er een claim ligt. Het verschil zit niet in wie u bent, maar in het soort schade dat u veroorzaakt.',
    blocks: [
      { kind: 'heading', level: 2, text: 'Het verschil in één zin' },
      {
        kind: 'paragraph',
        text: 'De bedrijfsaansprakelijkheidsverzekering (AVB) dekt schade aan personen en aan zaken. De beroepsaansprakelijkheidsverzekering (BAV) dekt financiële schade zonder dat er iets kapot is of iemand gewond is geraakt.',
      },
      {
        kind: 'paragraph',
        text: 'Dat laatste heet zuivere vermogensschade, en het is bij vrijwel elke AVB expliciet uitgesloten. Dáár zit de val: ondernemers denken verzekerd te zijn omdat ze ‘een aansprakelijkheidsverzekering’ hebben.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Een voorbeeld dat het verschil laat zien',
      },
      {
        kind: 'callout',
        title: 'Voorbeeld',
        text: 'Een installatiebedrijf adviseert een klant over een nieuwe verwarmingsinstallatie en legt die vervolgens aan. Gaat er bij de aanleg iets mis en loopt de vloer waterschade op, dan is dat schade aan zaken: de AVB komt in beeld. Blijkt achteraf dat de geadviseerde installatie te klein is voor het pand, waardoor de klant zijn bedrijfsruimte niet warm krijgt en moet bijstoken met elektrische kachels, dan is er niets kapot. Er is alleen financiële schade door een verkeerd advies: dat is de BAV.',
      },
      { kind: 'heading', level: 2, text: 'Wat de AVB dekt' },
      {
        kind: 'table',
        columns: ['Situatie', 'Gedekt onder'],
        rows: [
          ['Een monteur beschadigt de vloer bij een klant', 'AVB'],
          ['Een bezoeker struikelt op uw terrein en breekt zijn pols', 'AVB'],
          [
            'Een geleverd product veroorzaakt schade bij de afnemer',
            'AVB, productaansprakelijkheid',
          ],
          [
            'Een medewerker raakt gewond tijdens het werk',
            'AVB, werkgeversaansprakelijkheid',
          ],
          [
            'Schade aan het pand dat u huurt',
            'AVB, mits huurdersbelang is meeverzekerd',
          ],
        ],
      },
      { kind: 'heading', level: 2, text: 'Wat de BAV dekt' },
      {
        kind: 'table',
        columns: ['Situatie', 'Gedekt onder'],
        rows: [
          ['Een architect rekent een constructie verkeerd door', 'BAV'],
          [
            'Een adviseur geeft advies waardoor zijn klant een subsidie misloopt',
            'BAV',
          ],
          [
            'Een boekhouder mist een aangiftetermijn, klant krijgt een naheffing',
            'BAV',
          ],
          [
            'Software doet niet wat is afgesproken, klant lijdt omzetverlies',
            'BAV',
          ],
          [
            'Een makelaar vermeldt een verkeerd oppervlak in de verkoopbrochure',
            'BAV',
          ],
        ],
      },
      { kind: 'heading', level: 2, text: 'Welke heeft u nodig?' },
      {
        kind: 'paragraph',
        text: 'Stel uzelf één vraag: kan een fout van mij leiden tot financiële schade bij mijn klant zonder dat er iets stukgaat? Is het antwoord ja, dan heeft u een BAV nodig.',
      },
      {
        kind: 'list',
        items: [
          'Alleen AVB is meestal genoeg voor uitvoerende bedrijven zonder adviestaak: schoonmaak, transport, detailhandel, productie.',
          'Alleen BAV komt zelden voor, want vrijwel iedereen die bij een klant over de vloer komt heeft ook een AVB nodig.',
          'Allebei geldt voor adviseurs, architecten, ingenieurs, ICT-bedrijven, installateurs die ook ontwerpen, accountants, makelaars en consultants.',
        ],
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Drie dingen die bij de BAV het verschil maken',
      },
      { kind: 'heading', level: 3, text: 'Claims-made of loss-occurrence' },
      {
        kind: 'paragraph',
        text: 'De meeste BAV-polissen werken op claims-made-basis: de claim is gedekt als die binnenkomt tijdens de looptijd van de verzekering, niet als de fout is gemaakt. Stopt u met uw verzekering terwijl er nog een oude fout boven de markt hangt, dan bent u onverzekerd. Daarvoor regelt u uitlooprisico, en dat gaat niet vanzelf.',
      },
      { kind: 'heading', level: 3, text: 'De inlooptermijn' },
      {
        kind: 'paragraph',
        text: 'Sluit u nieuw af, dan geldt de dekking in principe alleen voor fouten gemaakt ná de ingangsdatum. Met een inloopdekking neemt u het verleden mee. Dat is vooral belangrijk als u overstapt van een andere verzekeraar: zorg dat de inloopdatum aansluit op uw oude polis, anders ontstaat er een gat.',
      },
      {
        kind: 'heading',
        level: 3,
        text: 'Verzekerd bedrag per aanspraak en per jaar',
      },
      {
        kind: 'paragraph',
        text: 'Kijk naar beide. Een polis die één miljoen per aanspraak dekt maar maximaal één miljoen per jaar, dekt bij twee claims in hetzelfde jaar niet het dubbele.',
      },
      { kind: 'heading', level: 2, text: 'Hoe wij het aanpakken' },
      {
        kind: 'paragraph',
        text: 'Wij kijken niet alleen naar wat u doet, maar ook naar wat er in uw contracten en algemene voorwaarden staat. Heeft u uw aansprakelijkheid daarin beperkt, dan kan uw verzekerd bedrag lager. Heeft u juist een opdrachtgever die een hoge dekking eist, dan moet uw polis daarop aansluiten.',
      },
      {
        kind: 'paragraph',
        text: 'Bel 020 636 8191 en u hoort binnen een kwartier welke dekking bij u past.',
      },
      {
        kind: 'link',
        label: 'Naar aansprakelijkheidsverzekeringen',
        href: NAVIGATION_ROUTES.liability,
      },
    ],
  },
  {
    slug: 'aansprakelijkheidsverzekering-zzp',
    title: 'Aansprakelijkheidsverzekering voor zzp’ers',
    metaTitle: 'Aansprakelijkheidsverzekering voor zzp’ers',
    metaDescription:
      'Welke aansprakelijkheidsverzekering een zzp’er nodig heeft, waarom uw privévermogen meespeelt en wat opdrachtgevers tegenwoordig eisen.',
    category: 'Aansprakelijkheid',
    summary:
      'Welke dekking u nodig heeft, en waarom uw opdrachtgever er steeds vaker naar vraagt.',
    intro:
      'Als zzp’er met een eenmanszaak of vof bent u met uw hele vermogen aansprakelijk, ook privé. Er zit geen rechtspersoon tussen u en een claim. Dat maakt het risico wezenlijk anders dan voor een bv: een schadeclaim raakt uw spaargeld en in het uiterste geval uw woning.',
    blocks: [
      { kind: 'heading', level: 2, text: 'Welke dekking heeft u nodig?' },
      {
        kind: 'paragraph',
        text: 'Dat hangt af van wat u doet. In grote lijnen:',
      },
      {
        kind: 'table',
        columns: ['Wat u doet', 'Wat u nodig heeft'],
        rows: [
          [
            'Fysiek werk bij klanten (klussen, installeren, schoonmaken, verzorgen)',
            'Vooral AVB',
          ],
          ['Adviseren, ontwerpen, berekenen, boekhouden', 'Vooral BAV'],
          ['Allebei, bijvoorbeeld installateur die ook ontwerpt', 'AVB en BAV'],
          [
            'Werken op locatie bij een opdrachtgever als interim-kracht',
            'AVB, vaak ook BAV op verzoek van de opdrachtgever',
          ],
        ],
      },
      {
        kind: 'paragraph',
        text: 'Twijfelt u welke van de twee u nodig heeft, lees dan eerst het verschil tussen beide dekkingen.',
      },
      {
        kind: 'link',
        label: 'AVB of BAV: wat is het verschil?',
        href: getKnowledgeArticlePath('avb-of-bav-verschil'),
      },
      { kind: 'heading', level: 2, text: 'Wat opdrachtgevers eisen' },
      {
        kind: 'paragraph',
        text: 'Dit is de afgelopen jaren sterk veranderd. Steeds vaker staat in een raamovereenkomst of inhuurcontract dat u een aansprakelijkheidsverzekering moet hebben met een minimaal verzekerd bedrag, en dat u een kopie van het polisblad moet aanleveren voordat u kunt beginnen.',
      },
      {
        kind: 'paragraph',
        text: 'Bij grotere opdrachtgevers en in de publieke sector is dat inmiddels standaard. Heeft u geen polis of een te lage dekking, dan krijgt u de opdracht niet. Het loont dus om te weten wat gebruikelijk is in uw branche voordat u een opdracht misloopt.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'De aansprakelijkheid die u niet kunt verzekeren',
      },
      {
        kind: 'paragraph',
        text: 'Goed om te weten waar de grens ligt. Opzet is nooit gedekt, en dat spreekt voor zich. Maar er zijn meer uitsluitingen die voor zzp’ers relevant zijn.',
      },
      {
        kind: 'list',
        items: [
          'Boetes en dwangsommen. Een boete van een toezichthouder is niet verzekerbaar.',
          'Garantieverplichtingen. Heeft u een resultaat gegarandeerd dat u niet haalt, dan is dat contractbreuk en geen aansprakelijkheid.',
          'Schade aan uw eigen werk. Moet u opnieuw beginnen omdat uw werk niet deugt, dan is dat uw eigen kosten. De gevolgschade bij uw klant kan wel gedekt zijn.',
          'Aansprakelijkheid die u vrijwillig heeft aanvaard. Tekent u een contract waarin u meer aansprakelijkheid op u neemt dan wettelijk hoeft, dan dekt de verzekeraar dat deel vaak niet.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Dat laatste punt is de reden dat wij altijd vragen welke contracten u tekent. Een verzekering die niet aansluit op uw contractuele afspraken geeft schijnzekerheid.',
      },
      { kind: 'heading', level: 2, text: 'Uw eigen algemene voorwaarden' },
      {
        kind: 'paragraph',
        text: 'Veel zzp’ers hebben geen eigen algemene voorwaarden, of gebruiken een sjabloon dat ze ooit van internet hebben gehaald. Dat is zonde, want juist in die voorwaarden beperkt u uw aansprakelijkheid tot een redelijk bedrag, bijvoorbeeld tot de hoogte van uw factuur of tot het bedrag dat uw verzekering uitkeert.',
      },
      {
        kind: 'paragraph',
        text: 'Zonder die beperking bent u in beginsel aansprakelijk voor de volledige schade. Met een goede beperking én een passende verzekering kunt u met een lager verzekerd bedrag toe, wat uw premie scheelt. Let er wel op dat u de voorwaarden ook werkelijk van toepassing verklaart vóórdat de opdracht begint.',
      },
      { kind: 'heading', level: 2, text: 'Wat kost het?' },
      {
        kind: 'paragraph',
        text: 'Voor een zzp’er zonder personeel is een bedrijfsaansprakelijkheidsverzekering doorgaans een van de goedkoopste polissen in het pakket. Een beroepsaansprakelijkheidsverzekering kost meer, omdat de claims daar hoger uitvallen en de dekkingsduur langer doorloopt.',
      },
      {
        kind: 'paragraph',
        text: 'De premie hangt af van uw beroep, uw omzet en het verzekerd bedrag. Een bouwkundig adviseur betaalt meer dan een tekstschrijver, simpelweg omdat de gevolgen van een fout verschillen.',
      },
      { kind: 'heading', level: 2, text: 'Een polis die bij u past' },
      {
        kind: 'paragraph',
        text: 'Bel 020 636 8191 of mail info@tisrm.nl. Vertel wat u doet en welke contracten u tekent, dan hoort u welke dekking en welk bedrag daarbij horen. Geen standaardpakket, maar wat u werkelijk nodig heeft.',
      },
      {
        kind: 'link',
        label: 'Naar aansprakelijkheidsverzekeringen',
        href: NAVIGATION_ROUTES.liability,
      },
    ],
  },
  {
    slug: 'car-verzekering-uitleg',
    title: 'Wat dekt een CAR-verzekering precies?',
    metaTitle: 'Wat dekt een CAR-verzekering precies? | TIS Risk Managers',
    metaDescription:
      'De zes rubrieken van de CAR-verzekering uitgelegd, het verschil tussen een aflopende en doorlopende polis, en wie hem afsluit bij een bouwproject.',
    category: 'Bouw en techniek',
    summary:
      'Een uitleg van de zes mogelijke rubrieken van een CAR-verzekering en het verschil tussen een projectverzekering en een doorlopende CAR-verzekering.',
    intro:
      'CAR staat voor Construction All Risks. Het is de bouwverzekering die het werk zelf verzekert tijdens de uitvoering, plus alles wat daar tijdens de bouw omheen misgaat. Zonder CAR draagt de aannemer of de opdrachtgever de schade aan het werk zelf, en dat zijn zelden kleine bedragen.',
    blocks: [
      { kind: 'heading', level: 2, text: 'De zes rubrieken' },
      {
        kind: 'paragraph',
        text: 'Een CAR-polis is opgebouwd uit rubrieken die u los kunt aan- of uitzetten. Dit is wat ze doen.',
      },
      { kind: 'heading', level: 3, text: 'Rubriek 1: Het werk' },
      {
        kind: 'paragraph',
        text: 'De kern van de polis. Verzekert het bouwwerk zelf tijdens de uitvoering, inclusief de materialen die op de bouwplaats liggen. Dus ook schade door storm, brand, diefstal van materialen, instorting of een fout van een van de uitvoerende partijen.',
      },
      {
        kind: 'paragraph',
        text: 'Deze rubriek dekt ook schade die u zelf veroorzaakt aan uw eigen werk. Dat is precies wat een gewone aansprakelijkheidsverzekering niet doet.',
      },
      { kind: 'heading', level: 3, text: 'Rubriek 2: Aansprakelijkheid' },
      {
        kind: 'paragraph',
        text: 'Schade aan derden die ontstaat door het werk: een buurpand dat scheurt door heiwerkzaamheden, een voorbijganger die gewond raakt, of een geparkeerde auto die iets op zich krijgt. Deze rubriek overlapt deels met uw bedrijfsaansprakelijkheidsverzekering, dus laat controleren hoe beide op elkaar aansluiten.',
      },
      { kind: 'heading', level: 3, text: 'Rubriek 3: Bestaande eigendommen' },
      {
        kind: 'paragraph',
        text: 'Verbouwt of renoveert u een bestaand gebouw, dan dekt deze rubriek schade aan het deel dat er al stond. Bij nieuwbouw is hij niet nodig, bij verbouw vrijwel altijd. Dit is de rubriek die het vaakst wordt vergeten bij renovatieprojecten.',
      },
      { kind: 'heading', level: 3, text: 'Rubriek 4: Hulpmaterieel' },
      {
        kind: 'paragraph',
        text: 'Steigers, bekistingen, keten, gereedschap en machines op de bouwplaats. Let op de diefstalvoorwaarden: veel polissen eisen dat materieel buiten werktijd in een afgesloten ruimte staat of aan een vaste constructie is verankerd.',
      },
      {
        kind: 'heading',
        level: 3,
        text: 'Rubriek 5: Eigendommen van de opdrachtgever',
      },
      {
        kind: 'paragraph',
        text: 'Zaken van de opdrachtgever die tijdens het werk op de bouwplaats aanwezig zijn. Relevant bij projecten waar de opdrachtgever zelf materialen aanlevert of waar nog inventaris in het pand staat.',
      },
      { kind: 'heading', level: 3, text: 'Rubriek 6: Onderhoudstermijn' },
      {
        kind: 'paragraph',
        text: 'Schade die zich openbaart ná oplevering, gedurende een afgesproken periode. Er zijn twee varianten: de beperkte onderhoudstermijn dekt alleen schade die u tijdens onderhoudswerk veroorzaakt, de uitgebreide dekt ook schade die voortkomt uit een fout van tijdens de bouw.',
      },
      {
        kind: 'paragraph',
        text: 'Bij UAV-contracten wordt vaak een onderhoudstermijn van zes of twaalf maanden afgesproken. Zorg dat uw polis daarop aansluit.',
      },
      { kind: 'heading', level: 2, text: 'Aflopend of doorlopend?' },
      {
        kind: 'table',
        columns: ['Onderdeel', 'Aflopende CAR', 'Doorlopende CAR'],
        rows: [
          [
            'Geldt voor',
            'Eén specifiek project',
            'Al uw werken binnen de polisvoorwaarden',
          ],
          [
            'Aanmelden',
            'Per project aanvragen en accepteren',
            'Automatisch gedekt tot een maximale projectsom',
          ],
          [
            'Risico',
            'Een vergeten aanmelding betekent geen dekking',
            'Projecten boven de limiet moeten wel apart worden gemeld',
          ],
          [
            'Premie',
            'Per project berekend',
            'Op basis van uw jaaromzet, achteraf verrekend',
          ],
          [
            'Past bij',
            'Incidentele of zeer grote projecten',
            'Bedrijven met meerdere projecten tegelijk',
          ],
        ],
      },
      {
        kind: 'paragraph',
        text: 'Voor aannemers en installateurs met een doorlopende orderportefeuille is de doorlopende variant vrijwel altijd beter. Niet alleen qua premie, maar vooral omdat u nooit onverzekerd bent omdat iemand een aanmelding vergat.',
      },
      { kind: 'heading', level: 2, text: 'Wie sluit de CAR-verzekering af?' },
      {
        kind: 'paragraph',
        text: 'Dat kan de opdrachtgever zijn of de aannemer. Bij grotere projecten sluit de opdrachtgever vaak een projectpolis waarop alle betrokken partijen als verzekerde staan vermeld, inclusief onderaannemers.',
      },
      {
        kind: 'paragraph',
        text: 'Werkt u als onderaannemer, controleer dan altijd of u op die polis staat en wat uw eigen risico is. Staat u er niet op, dan bent u voor uw eigen werk niet gedekt en kan de hoofdaannemer de schade op u verhalen. Dit gaat in de praktijk regelmatig mis.',
      },
      { kind: 'heading', level: 2, text: 'Wat de CAR niet dekt' },
      {
        kind: 'list',
        items: [
          'Ontwerpfouten. Een verkeerde berekening of een ondeugdelijk ontwerp valt onder de beroepsaansprakelijkheidsverzekering van de ontwerpende partij.',
          'Normale slijtage en geleidelijke verslechtering.',
          'Boetes bij te late oplevering. Een kortingsregeling of boeteclausule is geen verzekerbare schade.',
          'Gevolgschade bij de opdrachtgever. Zoals gederfde huur of omzet door vertraging, tenzij apart meeverzekerd.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Dat eerste punt is belangrijk voor bedrijven die zowel ontwerpen als uitvoeren. U heeft dan beide dekkingen nodig.',
      },
      {
        kind: 'link',
        label: 'Meer over beroepsaansprakelijkheid',
        href: NAVIGATION_ROUTES.liability,
      },
      { kind: 'heading', level: 2, text: 'Hulp bij het kiezen' },
      {
        kind: 'paragraph',
        text: 'Welke rubrieken u nodig heeft en of aflopend of doorlopend beter past, hangt af van uw type werk en uw projectomvang. Bel 020 636 8191, dan lopen wij het met u door.',
      },
      {
        kind: 'link',
        label: 'Naar verzekeringen voor bouw en techniek',
        href: NAVIGATION_ROUTES.construction,
      },
    ],
  },
  {
    slug: 'wat-kost-een-zieke-medewerker',
    title: 'Wat kost een zieke medewerker echt?',
    metaTitle: 'Wat kost een zieke medewerker echt? | TIS Risk Managers',
    metaDescription:
      'Een rekenvoorbeeld van de werkelijke kosten van ziekteverzuim: loondoorbetaling, werkgeverslasten, vervanging en re-integratie.',
    category: 'Personeel en verzuim',
    summary:
      'Welke kosten komen kijken bij ziekteverzuim, naast het loon dat u als werkgever moet doorbetalen? Met aandacht voor werkgeverslasten en bijkomende kosten.',
    intro:
      'De meeste werkgevers rekenen met het brutoloon dat doorbetaald moet worden. De werkelijke kosten liggen aanzienlijk hoger, omdat er posten doorlopen die niet op het loonstrookje staan. Hieronder een rekenvoorbeeld.',
    blocks: [
      { kind: 'heading', level: 2, text: 'Waar u wettelijk aan vastzit' },
      {
        kind: 'paragraph',
        text: 'Bij ziekte betaalt u maximaal 104 weken het loon door, wettelijk minimaal zeventig procent van het loon. Veel cao’s schrijven voor het eerste ziektejaar honderd procent voor, en het tweede jaar zeventig procent.',
      },
      {
        kind: 'paragraph',
        text: 'Daarnaast heeft u een re-integratieverplichting op grond van de Wet verbetering poortwachter. Houdt u zich niet aan de stappen en termijnen daarin, dan kan het UWV een loonsanctie opleggen van maximaal een jaar extra loondoorbetaling. Die sanctie is niet verzekerbaar.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Rekenvoorbeeld: één medewerker, één jaar ziek',
      },
      {
        kind: 'paragraph',
        text: 'Uitgangspunt is een medewerker met een brutoloon van 3.500 euro per maand, een cao die het eerste jaar honderd procent voorschrijft, en een vervanger die moet worden ingehuurd.',
      },
      {
        kind: 'table',
        columns: ['Kostenpost', 'Per jaar (indicatief)'],
        rows: [
          ['Loondoorbetaling (100% van 3.500 euro, 12 maanden)', '42.000 euro'],
          ['Vakantiegeld (8%)', '3.360 euro'],
          ['Werkgeverslasten (sociale premies, indicatief 20%)', '8.400 euro'],
          ['Pensioenpremie werkgeversdeel (indicatief)', '3.000 euro'],
          ['Arbodienst en bedrijfsarts', '750 tot 1.500 euro'],
          [
            'Vervanging (uitzendkracht tegen hoger uurtarief)',
            '45.000 tot 60.000 euro',
          ],
          [
            'Interne kosten: begeleiding, administratie, inwerken',
            'Niet in geld, wel in tijd',
          ],
          ['Totaal, exclusief vervanging', 'circa 57.000 euro'],
          ['Totaal, inclusief vervanging', 'circa 100.000 tot 117.000 euro'],
        ],
      },
      {
        kind: 'callout',
        title: 'Let op',
        text: 'Dit is een rekenvoorbeeld met indicatieve bedragen, bedoeld om de orde van grootte te laten zien. Uw werkelijke kosten hangen af van uw cao, uw sector, uw premiepercentages en de vraag of u werkelijk moet vervangen. Wij rekenen het graag voor uw eigen situatie door.',
      },
      { kind: 'heading', level: 2, text: 'De verborgen kosten' },
      {
        kind: 'paragraph',
        text: 'Naast de bedragen hierboven zijn er posten die lastiger te becijferen zijn maar wel degelijk meetellen.',
      },
      {
        kind: 'list',
        items: [
          'Productiviteitsverlies van collega’s die het werk opvangen naast hun eigen taken.',
          'Kwaliteitsverlies bij een vervanger die het werk niet kent.',
          'Uw eigen tijd aan gesprekken, formulieren, UWV-contact en het bewaken van termijnen.',
          'Omzetverlies als u door de uitval opdrachten moet weigeren. In het personenvervoer: een voertuig dat stilstaat.',
          'Een hogere premie bij uw verzuimverzekeraar na een jaar met veel verzuim.',
        ],
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Wat een verzuimverzekering daarvan opvangt',
      },
      {
        kind: 'paragraph',
        text: 'Een verzuimverzekering vergoedt de loondoorbetaling, en indien meeverzekerd ook de werkgeverslasten en pensioenpremies. De kosten van vervanging zijn doorgaans niet gedekt, tenzij u een polis heeft met een vervangingskostendekking.',
      },
      {
        kind: 'paragraph',
        text: 'U draagt altijd een deel zelf, via het eigen risico in wachtdagen of in een bedrag. Dat is ook de knop waaraan u draait om de premie te sturen: meer wachtdagen betekent lagere premie, maar ook meer kosten bij kortdurend verzuim.',
      },
      { kind: 'heading', level: 2, text: 'Loont een verzuimverzekering?' },
      {
        kind: 'paragraph',
        text: 'Dat hangt vooral af van uw omvang. Een werkgever met vijftig medewerkers kan een enkel ziektegeval opvangen binnen de normale bedrijfsvoering. Een werkgever met vijf medewerkers kan dat niet: daar is één langdurig geval meteen tien procent van het personeelsbestand en een aanslag op de jaarwinst.',
      },
      {
        kind: 'paragraph',
        text: 'Vuistregel: hoe kleiner uw organisatie, hoe zwaarder het argument om te verzekeren. Niet omdat het risico groter is, maar omdat u de klap minder goed kunt opvangen.',
      },
      { kind: 'heading', level: 2, text: 'Uw eigen situatie doorrekenen' },
      {
        kind: 'paragraph',
        text: 'Bel 020 636 8191 of mail info@tisrm.nl met uw loonsom, uw cao en uw verzuimcijfers van de afgelopen jaren. Dan rekenen wij uit wat uw verzuimrisico werkelijk kost en wat een verzekering daarvoor doet.',
      },
      {
        kind: 'link',
        label: 'Naar verzuim en personeel',
        href: NAVIGATION_ROUTES.absence,
      },
    ],
  },
  {
    slug: 'verzuimverzekering-conventioneel-of-stop-loss',
    title: 'Verzuimverzekering: conventioneel of stop-loss?',
    metaTitle: 'Verzuimverzekering: conventioneel of stop-loss?',
    metaDescription:
      'Het verschil tussen een conventionele verzuimverzekering en stop-loss, met rekenvoorbeeld. Bij welke loonsom welke vorm doorgaans beter uitpakt.',
    category: 'Personeel en verzuim',
    summary:
      'Het verschil in dekking en eigen risico, en bij welke loonsom welke vorm doorgaans beter uitpakt.',
    intro:
      'Dit is de keuze die het grootste verschil maakt in uw premie, en tegelijk de keuze die het slechtst wordt uitgelegd. Allebei de vormen verzekeren uw loondoorbetaling bij ziekte, maar ze doen dat op een fundamenteel andere manier.',
    blocks: [
      {
        kind: 'heading',
        level: 2,
        text: 'De conventionele verzuimverzekering',
      },
      {
        kind: 'paragraph',
        text: 'Deze vorm vergoedt elk ziektegeval afzonderlijk, nadat het eigen risico is verstreken. Dat eigen risico wordt uitgedrukt in wachtdagen: vaak 10, 20 of 30 werkdagen per ziektegeval.',
      },
      {
        kind: 'callout',
        title: 'Voorbeeld',
        text: 'Bij een eigen risico van 20 wachtdagen draagt u de eerste 20 werkdagen van elk ziektegeval zelf. Is iemand 60 werkdagen ziek, dan betaalt de verzekeraar de laatste 40 dagen. Heeft u in een jaar drie medewerkers die elk 60 dagen uitvallen, dan draagt u drie keer die 20 wachtdagen zelf en vergoedt de verzekeraar de rest.',
      },
      {
        kind: 'paragraph',
        text: 'Het voordeel is voorspelbaarheid: u weet precies wat elk ziektegeval u maximaal kost. Het nadeel is de premie, want de verzekeraar neemt veel risico over.',
      },
      { kind: 'heading', level: 2, text: 'De stop-lossverzekering' },
      {
        kind: 'paragraph',
        text: 'Hier verzekert u niet per ziektegeval, maar uw totale verzuimkosten over een jaar. De verzekeraar keert pas uit zodra uw totale loondoorbetaling boven een afgesproken drempel uitkomt. Die drempel is meestal een percentage van uw jaarloonsom.',
      },
      {
        kind: 'callout',
        title: 'Voorbeeld',
        text: 'Stel: uw jaarloonsom is 500.000 euro en u kiest een eigen behoud van 2 procent. De drempel ligt dan op 10.000 euro. Blijven uw verzuimkosten dat jaar onder de 10.000 euro, dan keert de verzekeraar niets uit en heeft u alleen premie betaald. Komt u uit op 35.000 euro, dan vergoedt de verzekeraar 25.000 euro.',
      },
      {
        kind: 'paragraph',
        text: 'Het voordeel is een aanzienlijk lagere premie. Het nadeel is dat u in een normaal jaar niets terugziet, en dat u tot aan de drempel alles zelf draagt.',
      },
      { kind: 'heading', level: 2, text: 'Het verschil in één tabel' },
      {
        kind: 'table',
        columns: ['Onderdeel', 'Conventioneel', 'Stop-loss'],
        rows: [
          [
            'Eigen risico',
            'Per ziektegeval, in wachtdagen',
            'Per jaar, als bedrag of percentage van de loonsom',
          ],
          [
            'Uitkering bij één kortdurend geval',
            'Ja, na de wachtdagen',
            'Vrijwel nooit, u blijft onder de drempel',
          ],
          ['Premie', 'Hoger', 'Aanzienlijk lager'],
          [
            'Voorspelbaarheid per geval',
            'Groot',
            'Klein, u weet pas aan het eind van het jaar waar u staat',
          ],
          [
            'Past bij',
            'Kleinere werkgevers, weinig buffer',
            'Grotere werkgevers met een stabiele loonsom',
          ],
        ],
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Welke vorm past bij welke werkgever?',
      },
      {
        kind: 'paragraph',
        text: 'Er is geen harde grens, maar in de praktijk zien wij het volgende.',
      },
      {
        kind: 'list',
        items: [
          'Tot ongeveer tien medewerkers: vrijwel altijd conventioneel. Uw loonsom is te klein om schommelingen op te vangen, en één langdurig geval raakt u meteen hard.',
          'Tussen tien en vijftig medewerkers: het kantelpunt. Hier hangt het af van uw verzuimhistorie, uw buffer en hoe risicomijdend u bent. Beide varianten doorrekenen is hier de moeite waard.',
          'Boven vijftig medewerkers: stop-loss wordt interessant. Uw verzuim wordt statistisch voorspelbaarder, en het premievoordeel weegt op tegen het hogere eigen behoud.',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Naast de omvang telt uw verzuimhistorie. Heeft u drie jaar achtereen een laag verzuim, dan betaalt u bij conventioneel premie voor een risico dat zich nauwelijks voordoet. Schommelt uw verzuim sterk, dan is de voorspelbaarheid van conventioneel juist meer waard.',
      },
      { kind: 'heading', level: 2, text: 'De tussenvormen' },
      {
        kind: 'paragraph',
        text: 'Verzekeraars bieden ook varianten die ertussenin zitten. Een conventionele dekking met een eigen risico in een bedrag in plaats van wachtdagen, bijvoorbeeld, of een stop-loss met een lager eigen behoud voor het eerste jaar.',
      },
      {
        kind: 'paragraph',
        text: 'Ook kunt u kiezen of u zeventig of honderd procent van het loon verzekert, en of u de werkgeverslasten en pensioenpremies meeverzekert. Dat laatste scheelt in de praktijk meer dan werkgevers denken, want die lasten lopen gewoon door.',
      },
      {
        kind: 'link',
        label: 'Lees wat een zieke medewerker werkelijk kost',
        href: getKnowledgeArticlePath('wat-kost-een-zieke-medewerker'),
      },
      { kind: 'heading', level: 2, text: 'Vergeet de begeleiding niet' },
      {
        kind: 'paragraph',
        text: 'Welke vorm u ook kiest, de verzekering vergoedt alleen geld. De re-integratie moet u zelf organiseren, en daar zit een risico dat niet verzekerbaar is: een loonsanctie van het UWV bij onvoldoende inspanning kan oplopen tot een jaar extra loondoorbetaling.',
      },
      {
        kind: 'paragraph',
        text: 'Wij combineren de verzuimverzekering daarom standaard met arbodienstverlening die de poortwachtertermijnen bewaakt. Niet omdat het moet, maar omdat de schade die u daarmee voorkomt groter is dan het premieverschil tussen welke polis dan ook.',
      },
      {
        kind: 'heading',
        level: 2,
        text: 'Beide varianten laten doorrekenen',
      },
      {
        kind: 'paragraph',
        text: 'Bel 020 636 8191 of mail uw loonsom en verzuimcijfers naar info@tisrm.nl. U krijgt beide varianten naast elkaar, met wat ze in een goed en in een slecht jaar betekenen.',
      },
      {
        kind: 'link',
        label: 'Naar verzuim en personeel',
        href: NAVIGATION_ROUTES.absence,
      },
    ],
  },
  {
    slug: 'goedkope-zakelijke-verzekering',
    title: 'Goedkope zakelijke verzekering of goede dekking?',
    metaTitle: 'Goedkope zakelijke verzekering of goede dekking?',
    metaDescription:
      'Waar u verstandig bespaart op uw bedrijfsverzekeringen en waar besparen u juist geld kost. Zes plekken waar een goedkope polis tegenvalt.',
    category: 'Kiezen en vergelijken',
    summary:
      'Waar moet u op letten bij het vergelijken van zakelijke verzekeringen? Over premies, dekkingen, eigen risico’s en polisvoorwaarden.',
    intro:
      'Zoekt u op een goedkope zakelijke verzekering, dan is dat volkomen logisch: premie is een vaste last en elke euro die u bespaart is er één. Wij zijn alleen eerlijk over één ding, en dat zegt u elke adviseur na: de goedkoopste polis is zelden de voordeligste.',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Dat klinkt als een verkooppraatje, dus laten wij het concreet maken. Hieronder staat waar u verstandig bespaart, en waar besparen u uiteindelijk geld kost.',
      },
      { kind: 'heading', level: 2, text: 'Waar u verstandig bespaart' },
      { kind: 'heading', level: 3, text: '1. Een hoger eigen risico' },
      {
        kind: 'paragraph',
        text: 'Dit is de meest onderbenutte knop. Kleine schades zelf dragen verlaagt uw premie merkbaar, en het houdt uw schadelast schoon, wat doorwerkt in uw premie van volgend jaar.',
      },
      {
        kind: 'paragraph',
        text: 'De vuistregel: verzeker wat u niet kunt dragen, draag zelf wat u wel kunt opvangen. Een ondernemer die elke schade van driehonderd euro claimt, betaalt dat later terug.',
      },
      { kind: 'heading', level: 3, text: '2. Dekking die u niet gebruikt' },
      {
        kind: 'paragraph',
        text: 'In vrijwel elk pakket dat wij doorlichten zit iets wat dubbel loopt of niet meer van toepassing is. Een rechtsbijstandmodule die ook in uw brancheorganisatie zit, een dekking voor een activiteit die u drie jaar geleden heeft gestaakt, of een vestiging die u niet meer heeft.',
      },
      {
        kind: 'paragraph',
        text: 'Daar zit meestal genoeg besparing om de dekking te betalen waar het wél om gaat.',
      },
      { kind: 'heading', level: 3, text: '3. Preventie' },
      {
        kind: 'paragraph',
        text: 'Betere sloten, een gekeurde elektrische installatie, brandblusmiddelen, camera’s of een instructie aan uw chauffeurs: het verlaagt uw premie én uw schadelast. Verzekeraars belonen dit, en het is de enige besparing die uw risico niet vergroot maar verkleint.',
      },
      { kind: 'heading', level: 3, text: '4. Alles bij één partij' },
      {
        kind: 'paragraph',
        text: 'Een pakketkorting is reëel, en het scheelt bovendien discussie bij schade die op het grensvlak van twee polissen valt. Bij losse polissen bij verschillende aanbieders wijzen partijen bij zo’n schade graag naar elkaar.',
      },
      { kind: 'heading', level: 2, text: 'Waar besparen u geld kost' },
      { kind: 'heading', level: 3, text: '1. Een te lage verzekerde som' },
      {
        kind: 'paragraph',
        text: 'De meest voorkomende en de duurste fout. Bent u onderverzekerd, dan keert de verzekeraar bij elke schade naar verhouding uit, ook bij kleine schades. Staat uw inventaris voor 100.000 euro op de polis terwijl hij 150.000 waard is, dan krijgt u bij een schade van 30.000 euro slechts 20.000 euro.',
      },
      {
        kind: 'paragraph',
        text: 'Dit speelt bij inventaris, voorraad, gebouwen en vooral bij VvE’s.',
      },
      {
        kind: 'link',
        label: 'Lees meer over onderverzekering',
        href: getKnowledgeArticlePath('vve-onderverzekering-herbouwwaarde'),
      },
      {
        kind: 'heading',
        level: 3,
        text: '2. Een te korte uitkeringstermijn bij bedrijfsschade',
      },
      {
        kind: 'paragraph',
        text: 'Twaalf maanden is de standaardkeuze en vaak te krap. Herbouw van een pand of een keuken duurt met expertise, vergunningen en een aannemer die beschikbaar moet zijn regelmatig langer. Loopt uw dekking af terwijl u nog dicht bent, dan staat u er alleen voor op het moment dat u het minst kunt hebben.',
      },
      { kind: 'heading', level: 3, text: '3. Ontbrekende dekkingen' },
      {
        kind: 'paragraph',
        text: 'Een goedkope polis is vaak goedkoop omdat er iets niet in zit. Dat hoeft geen probleem te zijn als u weet wat het is, maar meestal weet men dat niet. Veelvoorkomende gaten: bederf van voorraad in de horeca, huurderving bij verhuurd vastgoed, werkgeversaansprakelijkheid in het vervoer, en beroepsaansprakelijkheid bij adviserende bedrijven.',
      },
      {
        kind: 'heading',
        level: 3,
        text: '4. Een verkeerde of onvolledige opgave',
      },
      {
        kind: 'paragraph',
        text: 'Dit is geen besparing maar het voelt er wel zo: een activiteit niet melden, een lagere omzet opgeven of een bijgebouw vergeten. Bij schade toetst de verzekeraar of uw opgave klopte. Was die onjuist, dan kan hij de uitkering verlagen of weigeren.',
      },
      { kind: 'heading', level: 3, text: '5. Preventie-eisen negeren' },
      {
        kind: 'paragraph',
        text: 'In de polisvoorwaarden staan eisen aan beveiliging, keuring en onderhoud. Voldoet u daar bij schade niet aan, dan is dat een grond om minder of niets uit te keren. Dat is geen uitzonderlijke praktijk maar een standaardcontrole.',
      },
      { kind: 'heading', level: 3, text: '6. Geen adviseur' },
      {
        kind: 'paragraph',
        text: 'Zelf online afsluiten is goedkoper en voor een eenvoudige situatie prima. Het nadeel merkt u pas bij schade: u staat er dan alleen voor tegenover een verzekeraar die de voorwaarden beter kent dan u. Een adviseur die het dossier voor u voert, verdient zichzelf doorgaans in één schade terug.',
      },
      { kind: 'heading', level: 2, text: 'Wat wij wel en niet beloven' },
      {
        kind: 'paragraph',
        text: 'Wij beloven niet de laagste premie, want dat zouden wij niet waar kunnen maken en u zou er waarschijnlijk niet beter van worden. Wat wij wél doen:',
      },
      {
        kind: 'list',
        items: [
          'Uw bestaande pakket kosteloos doorlichten en op papier zetten wat er werkelijk gedekt is',
          'Aangeven waar u te veel betaalt voor dekking die u niet gebruikt',
          'Aangeven waar u risico loopt dat u zich mogelijk niet realiseert',
          'Uw schade zelf behandelen in plaats van u door te verwijzen',
          'Het gewoon zeggen als u beter af bent bij wat u nu heeft',
        ],
      },
      { kind: 'heading', level: 2, text: 'Laat uw pakket doorlichten' },
      {
        kind: 'paragraph',
        text: 'Stuur uw polisbladen naar info@tisrm.nl of bel 020 636 8191. Binnen enkele werkdagen hoort u wat ons opvalt. Daar zit geen verplichting aan vast en het kost u niets.',
      },
      {
        kind: 'link',
        label: 'Naar zakelijke verzekeringen',
        href: NAVIGATION_ROUTES.businessInsurance,
      },
    ],
  },
];

export function getKnowledgeArticle(
  slug: string,
): KnowledgeArticle | undefined {
  return KNOWLEDGE_ARTICLES.find(entry => entry.slug === slug);
}

export function getKnowledgeArticlesByCategory(): readonly KnowledgeCategoryGroup[] {
  return KNOWLEDGE_CATEGORIES.map(category => ({
    category,
    articles: KNOWLEDGE_ARTICLES.filter(
      entry => entry.category === category,
    ).map(({ slug, title, summary }) => ({ slug, title, summary })),
  })).filter(group => group.articles.length > 0);
}
