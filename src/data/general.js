const contactInfo = {
    name: 'Tis Risk Managers',
    postalBox: 'Postbus 12887',
    postalCode: '1100 AW',

    address: 'Muiderstraat 1',
    postalCode2: '1011 PZ',
    city: 'Amsterdam',
    country: 'Nederland',
    phone: '+310206368191',
    email: 'info@tisrm.nl',
    linkedIn: 'https://www.linkedin.com/company/tisrm/'
};

const pageInfo = {
    title: contactInfo.name,
    pageDescription: 'Web pagina van Tis Risk Managers'
}

const currentYear = new Date().getFullYear();

export { pageInfo, contactInfo, currentYear }  