'use client';

import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';
import type { SiteSettingsView } from '@/lib/payload/getSiteSettings';
import {
  createContext,
  useContext,
  type ReactNode,
} from 'react';

export type SiteSettingsContextValue = SiteSettingsView;

const DEFAULT_NAV_ITEMS: SiteSettingsView['navItems'] = [
  { label: 'Home', href: NAVIGATION_ROUTES.home },
  { label: 'Verzekeringen', href: NAVIGATION_ROUTES.insurance },
  { label: 'Taxi', href: NAVIGATION_ROUTES.taxi },
  { label: 'Risk Management', href: NAVIGATION_ROUTES.riskManagement },
  { label: 'Over ons', href: NAVIGATION_ROUTES.about },
  { label: 'Downloads', href: NAVIGATION_ROUTES.downloads },
  { label: 'Contact', href: NAVIGATION_ROUTES.contact },
];

export const defaultSiteSettings: SiteSettingsContextValue = {
  companyName: CONTACT_INFO.name,
  phone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    street: CONTACT_INFO.address.street,
    postalCode: CONTACT_INFO.address.postalCode,
    city: CONTACT_INFO.address.city,
    country: CONTACT_INFO.address.country,
  },
  postalBox: {
    box: CONTACT_INFO.postalBox.box,
    postalCode: CONTACT_INFO.postalBox.postalCode,
    city: CONTACT_INFO.postalBox.city,
  },
  linkedInUrl: CONTACT_INFO.social.linkedIn,
  navItems: DEFAULT_NAV_ITEMS,
};

const SiteSettingsContext =
  createContext<SiteSettingsContextValue>(defaultSiteSettings);

export function SiteSettingsProvider({
  value,
  children,
}: {
  value: SiteSettingsView | null;
  children: ReactNode;
}) {
  const resolved: SiteSettingsContextValue = {
    companyName: value?.companyName || defaultSiteSettings.companyName,
    phone: value?.phone || defaultSiteSettings.phone,
    email: value?.email || defaultSiteSettings.email,
    address: {
      street: value?.address?.street || defaultSiteSettings.address.street,
      postalCode:
        value?.address?.postalCode || defaultSiteSettings.address.postalCode,
      city: value?.address?.city || defaultSiteSettings.address.city,
      country: value?.address?.country || defaultSiteSettings.address.country,
    },
    postalBox: {
      box: value?.postalBox?.box || defaultSiteSettings.postalBox.box,
      postalCode:
        value?.postalBox?.postalCode ||
        defaultSiteSettings.postalBox.postalCode,
      city: value?.postalBox?.city || defaultSiteSettings.postalBox.city,
    },
    linkedInUrl: value?.linkedInUrl || defaultSiteSettings.linkedInUrl,
    navItems:
      value?.navItems?.length ? value.navItems : defaultSiteSettings.navItems,
  };

  return (
    <SiteSettingsContext.Provider value={resolved}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings(): SiteSettingsContextValue {
  return useContext(SiteSettingsContext);
}

export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[\s()-]/g, '')}`;
}
