import fs from 'node:fs';
import path from 'node:path';

import type { Payload } from 'payload';

/** True when a JSON group field has at least one key. */
export function hasJsonKeys(value: unknown): boolean {
  return Boolean(
    value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      Object.keys(value as object).length > 0,
  );
}

/** Form copy group is populated if any of its JSON maps has keys. */
export function isFormGroupPopulated(group: unknown): boolean {
  if (!group || typeof group !== 'object') {
    return false;
  }
  const record = group as Record<string, unknown>;
  return (
    hasJsonKeys(record['labels']) ||
    hasJsonKeys(record['placeholders']) ||
    hasJsonKeys(record['helpers']) ||
    hasJsonKeys(record['validationMessages'])
  );
}

/**
 * Create-if-missing media from a file under /public.
 * Matches by filename so re-seed does not duplicate uploads.
 */
export async function ensureMediaFromPublic(
  payload: Payload,
  filename: string,
  alt: string,
): Promise<number | string> {
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    overrideAccess: true,
  });
  const found = existing.docs[0];
  if (found?.id != null) {
    return found.id;
  }

  const filePath = path.resolve(process.cwd(), 'public', filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing public media file: ${filePath}`);
  }

  const created = await payload.create({
    collection: 'media',
    data: { alt },
    filePath,
    overrideAccess: true,
  });
  return created.id;
}
