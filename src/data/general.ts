interface ContactInfo {
  name: string;
  postalBox: string;
  postalCode: string;
  address: string;
  postalCode2: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  linkedIn: string;
}

interface PageInfo {
  title: string;
  pageDescription: string;
}

const contactInfo: ContactInfo = {
  name: 'Tis Risk Managers',
  postalBox: 'Postbus 12887',
  postalCode: '1100 AW',
  address: 'Muiderstraat 1',
  postalCode2: '1011 PZ',
  city: 'Amsterdam',
  country: 'Nederland',
  phone: '+310206368191',
  email: 'info@tisrm.nl',
  linkedIn: 'https://www.linkedin.com/company/tisrm/',
};

const pageInfo: PageInfo = {
  title: contactInfo.name,
  pageDescription: 'Web pagina van Tis Risk Managers',
};

const currentYear: number = new Date().getFullYear();

export { pageInfo, contactInfo, currentYear };
export type { ContactInfo, PageInfo };  