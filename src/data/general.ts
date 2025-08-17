/**
 * General application data and constants
 * @fileoverview Centralized data exports for the TIS Risk Managers application
 * @deprecated Use @/constants/app instead for new code
 */

// Re-export from constants for backward compatibility
export { 
  CONTACT_INFO as contactInfo,
  APP_CONFIG as pageInfo,
  CURRENT_YEAR as currentYear 
} from '@/constants/app';

// Legacy type exports for backward compatibility
export type ContactInfo = typeof import('@/constants/app').CONTACT_INFO;
export type PageInfo = typeof import('@/constants/app').APP_CONFIG;  