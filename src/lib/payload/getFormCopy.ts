import { getPayloadClient } from './getPayloadClient';
import type { FormCopyGroup, FormCopyView } from './getFormMessage';

export type { FormCopyGroup, FormCopyView } from './getFormMessage';

export async function getFormCopy(): Promise<FormCopyView | null> {
  try {
    const payload = await getPayloadClient();
    const doc = await payload.findGlobal({
      slug: 'formCopy',
      depth: 0,
    });
    if (!doc) return null;
    return {
      offerte: (doc.offerte as FormCopyGroup | null | undefined) ?? null,
      meldSchade: (doc.meldSchade as FormCopyGroup | null | undefined) ?? null,
    };
  } catch (error) {
    console.error('getFormCopy failed', { error });
    return null;
  }
}
