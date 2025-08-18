export { 
  CONTACT_INFO as contactInfo,
  APP_CONFIG as pageInfo,
  CURRENT_YEAR as currentYear 
} from '@/constants/app';

export type ContactInfo = typeof import('@/constants/app').CONTACT_INFO;
export type PageInfo = typeof import('@/constants/app').APP_CONFIG;  