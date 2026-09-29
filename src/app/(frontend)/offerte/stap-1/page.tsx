import { getFormCopy } from '@/lib/payload/getFormCopy';

import OfferteStep1Form from './OfferteStep1Form';

export const dynamic = 'force-dynamic';

export default async function OfferteStep1Page() {
  const formCopy = await getFormCopy();
  return <OfferteStep1Form formCopy={formCopy} />;
}
