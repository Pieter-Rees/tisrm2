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
