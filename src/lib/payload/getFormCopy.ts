import { getPayloadClient } from './getPayloadClient';

export type FormCopyGroup = {
  labels?: Record<string, string> | null;
  placeholders?: Record<string, string> | null;
  helpers?: Record<string, string> | null;
  validationMessages?: Record<string, string> | null;
};

export type FormCopyView = {
  offerte?: FormCopyGroup | null;
  meldSchade?: FormCopyGroup | null;
};

type FormName = 'offerte' | 'meldSchade';
type FormCopyGroupName = 'validationMessages' | 'labels' | 'placeholders' | 'helpers';

export function getFormMessage(
  formCopy: FormCopyView | null | undefined,
  form: FormName,
  group: FormCopyGroupName,
  key: string,
  fallback: string,
): string {
  const value = formCopy?.[form]?.[group]?.[key];
  if (typeof value === 'string' && value.length > 0) {
    return value;
  }
  return fallback;
}

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
