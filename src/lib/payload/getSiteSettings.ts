import { getPayloadClient } from './getPayloadClient';

export type SiteSettingsView = {
  companyName: string;
  phone: string;
  email: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  navItems: Array<{ label: string; href: string }>;
};

export function mapSiteSettingsDoc(doc: {
  companyName?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: {
    street?: string | null;
    postalCode?: string | null;
    city?: string | null;
    country?: string | null;
  } | null;
  navItems?: Array<{ label?: string | null; href?: string | null } | null> | null;
}): SiteSettingsView {
  return {
    companyName: doc.companyName ?? '',
    phone: doc.phone ?? '',
    email: doc.email ?? '',
    address: {
      street: doc.address?.street ?? '',
      postalCode: doc.address?.postalCode ?? '',
      city: doc.address?.city ?? '',
      country: doc.address?.country ?? '',
    },
    navItems: (doc.navItems ?? [])
      .filter((item): item is { label?: string | null; href?: string | null } => Boolean(item))
      .map((item) => ({
        label: item.label ?? '',
        href: item.href ?? '',
      }))
      .filter((item) => item.label && item.href),
  };
}

export async function getSiteSettings(): Promise<SiteSettingsView | null> {
  try {
    const payload = await getPayloadClient();
    const doc = await payload.findGlobal({
      slug: 'siteSettings',
      depth: 0,
    });
    if (!doc) return null;
    return mapSiteSettingsDoc(doc);
  } catch (error) {
    console.error('getSiteSettings failed', { error });
    return null;
  }
}
