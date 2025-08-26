export {
  CONTACT_INFO as contactInfo,
  CURRENT_YEAR as currentYear,
  APP_CONFIG as pageInfo,
} from '@/constants/app';

export type ContactInfo = typeof import('@/constants/app').CONTACT_INFO;
export type PageInfo = typeof import('@/constants/app').APP_CONFIG;
