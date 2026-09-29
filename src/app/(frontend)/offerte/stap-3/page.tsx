import { getFormCopy } from '@/lib/payload/getFormCopy';

import OfferteStep3Form from './OfferteStep3Form';

export const dynamic = 'force-dynamic';

export default async function OfferteStep3Page() {
  const formCopy = await getFormCopy();
  return <OfferteStep3Form formCopy={formCopy} />;
}
