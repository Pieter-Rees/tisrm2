import type { FormCopyView } from '@/lib/payload/getFormMessage';

/** Current Dutch form strings — keep keys stable; values editable in admin. */
export const formCopySeedData: FormCopyView = {
  offerte: {
    labels: {
      firstName: 'Voornaam',
      lastName: 'Achternaam',
      emailAddress: 'E-mailadres',
      phoneNo: 'Telefoonnummer',
      businessName: 'Bedrijfsnaam',
      kvkno: 'KVK-nummer',
      btwNumber: 'BTW-nummer',
      postalCode: 'Postcode',
      plateNo: 'Kenteken',
      carCode: 'Meldcode',
      damageFreeYears: 'Schade vrije jaren',
      message: 'Aanvullende informatie (optioneel)',
      sendCopy: 'Stuur mij een kopie van deze aanvraag per e-mail',
    },
    placeholders: {
      firstName: 'Bijvoorbeeld: Jan',
      lastName: 'Bijvoorbeeld: de Vries',
      emailAddress: 'bijvoorbeeld@bedrijf.nl',
      phoneNo: '06-12345678 of +31612345678',
      businessName: 'Uw bedrijfsnaam',
      kvkno: '12345678',
      btwNumber: 'NL123456789B01',
      postalCode: '1234 AB',
      plateNo: 'AB-12-CD',
      carCode: 'ABC123',
      damageFreeYears: '0',
      message:
        'Beschrijf hier uw specifieke wensen, vragen of opmerkingen...',
    },
    helpers: {
      message:
        'Vertel ons meer over uw specifieke verzekeringsbehoefte of stel eventuele vragen',
    },
    validationMessages: {
      firstNameRequired: 'Voornaam is verplicht',
      firstNameMinLength: 'Voornaam moet minimaal 2 karakters zijn',
      firstNamePattern: 'Ongeldige karakters in voornaam',
      lastNameRequired: 'Achternaam is verplicht',
      lastNameMinLength: 'Achternaam moet minimaal 2 karakters zijn',
      lastNamePattern: 'Ongeldige karakters in achternaam',
      emailRequired: 'E-mailadres is verplicht',
      emailInvalid: 'Voer een geldig e-mailadres in',
      phoneRequired: 'Telefoonnummer is verplicht',
      phoneInvalid: 'Voer een geldig Nederlands telefoonnummer in',
      businessNameRequired: 'Bedrijfsnaam is verplicht',
      businessNameMinLength: 'Bedrijfsnaam moet minimaal 2 karakters zijn',
      kvkRequired: 'KVK-nummer is verplicht',
      kvkPattern: 'KVK-nummer moet 8 cijfers bevatten',
      btwRequired: 'BTW-nummer is verplicht',
      btwPattern:
        'Voer een geldig Nederlands BTW-nummer in (bijv. NL123456789B01)',
      postalCodeRequired: 'Postcode is verplicht',
      postalCodeInvalid: 'Voer een geldige Nederlandse postcode in',
      plateRequired: 'Kenteken is verplicht',
      plateInvalid:
        'Voer een geldig Nederlands kenteken in (bijv. AB-12-CD)',
      carCodeRequired: 'Meldcode is verplicht',
      carCodePattern: 'Voer een geldige meldcode in (3-6 karakters)',
      damageFreeYearsRequired: 'Schade vrije jaren is verplicht',
      damageFreeYearsPattern: 'Voer het aantal schade vrije jaren in',
      damageFreeYearsMin: 'Schade vrije jaren kan niet negatief zijn',
      damageFreeYearsMax: 'Schade vrije jaren kan niet meer dan 50 zijn',
      messageMaxLength: 'Bericht mag maximaal 1000 karakters bevatten',
    },
  },
  meldSchade: {
    labels: {
      name: 'Naam',
      kenteken: 'Kenteken',
      phone: 'Telefoonnummer',
      email: 'E-mailadres',
      description: 'Beschrijving',
      uploads: "Bestanden en foto's",
      sendCopy: 'Stuur mij een kopie van deze melding per e-mail',
    },
    placeholders: {
      name: 'Uw naam',
      kenteken: 'Uw kenteken',
      phone: 'Uw telefoonnummer',
      email: 'uw@email.nl',
      description:
        'Beschrijf kort wat er is gebeurd en welke schade u heeft.',
    },
    helpers: {},
    validationMessages: {
      nameRequired: 'Naam is verplicht',
      nameMinLength: 'Naam moet minimaal 2 karakters bevatten',
      plateInvalid:
        'Voer een geldig Nederlands kenteken in (bijv. AB-12-CD)',
      phoneRequired: 'Telefoonnummer is verplicht',
      phoneInvalid: 'Voer een geldig Nederlands telefoonnummer in',
      emailRequired: 'E-mailadres is verplicht',
      emailInvalid: 'Voer een geldig e-mailadres in',
      descriptionRequired: 'Beschrijving is verplicht',
      descriptionMinLength:
        'Beschrijving moet minimaal 10 karakters bevatten',
    },
  },
};
