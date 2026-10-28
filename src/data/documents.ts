/** Downloadable forms and documents, grouped as they appear on /downloads. */

export type DownloadDocument = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly link: string;
};

export type DocumentGroup = {
  readonly title: string;
  readonly documents: readonly DownloadDocument[];
};

export const DOCUMENT_GROUPS: readonly DocumentGroup[] = [
  {
    title: 'Schadeformulieren',
    documents: [
      {
        id: 'europeesSchadeformulier',
        title: 'Europees schadeformulier',
        description:
          'Voor het vastleggen van de gegevens en omstandigheden bij een verkeersongeval.',
        link: '/documents/aanrijdingsformulier.pdf',
      },
    ],
  },
  {
    title: 'Over onze dienstverlening',
    documents: [
      {
        id: 'dienstverleningsdocument',
        title: 'Dienstverleningsdocument',
        description:
          'Informatie over onze dienstverlening, werkwijze en beloning.',
        link: '/documents/dienstverleningsdocument.pdf',
      },
      {
        id: 'algemeneVoorwaarden',
        title: 'Algemene voorwaarden',
        description:
          'De voorwaarden die van toepassing zijn op onze dienstverlening.',
        link: '/documents/algemene-voorwaarden.pdf',
      },
      {
        id: 'privacyverklaring',
        title: 'Privacyverklaring',
        description: 'Hoe wij omgaan met uw persoonsgegevens.',
        link: '/documents/privacyverklaring.pdf',
      },
      {
        id: 'beloningsbeleid',
        title: 'Beloningsbeleid',
        description:
          'Informatie over het beloningsbeleid binnen TIS Risk Managers.',
        link: '/documents/beloningsbeleid.pdf',
      },
      {
        id: 'incidentenregeling',
        title: 'Incidentenregeling',
        description: 'Hoe wij binnen ons kantoor omgaan met incidenten.',
        link: '/documents/incidentenregeling.pdf',
      },
      {
        id: 'interneKlachtenprocedure',
        title: 'Interne klachtenprocedure',
        description:
          'Hoe wij klachten behandelen en welke stappen u kunt nemen.',
        link: '/documents/interne-klachtenprocedure.pdf',
      },
    ],
  },
];
