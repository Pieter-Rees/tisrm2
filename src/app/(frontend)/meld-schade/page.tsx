import { getFormCopy } from '@/lib/payload/getFormCopy';

import MeldSchadeForm from './MeldSchadeForm';

export const dynamic = 'force-dynamic';

export default async function MeldSchadePage() {
  const formCopy = await getFormCopy();
  return <MeldSchadeForm formCopy={formCopy} />;
}
