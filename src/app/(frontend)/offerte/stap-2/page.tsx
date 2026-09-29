import { getFormCopy } from '@/lib/payload/getFormCopy';

import OfferteStep2Form from './OfferteStep2Form';

export const dynamic = 'force-dynamic';

export default async function OfferteStep2Page() {
  const formCopy = await getFormCopy();
  return <OfferteStep2Form formCopy={formCopy} />;
}
