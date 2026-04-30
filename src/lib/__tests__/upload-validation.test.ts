import {
  MAX_TOTAL_UPLOAD_SIZE_BYTES,
  getUploadHttpErrorMessage,
  validateUploadFiles,
} from '@/lib/upload-validation';

const toFileList = (files: File[]): FileList =>
  Object.assign(files, {
    item: (index: number) => files[index] ?? null,
  }) as unknown as FileList;

describe('validateUploadFiles', () => {
  it('returns an error when no files are selected', () => {
    const files = toFileList([]);

    expect(validateUploadFiles(files)).toBe('Minimaal 1 bestand is verplicht');
  });

  it('returns an error when total file size exceeds limit', () => {
    const oversizedFile = new File(
      ['x'.repeat(MAX_TOTAL_UPLOAD_SIZE_BYTES + 1)],
      'large.pdf',
      { type: 'application/pdf' },
    );

    expect(validateUploadFiles(toFileList([oversizedFile]))).toContain(
      'Totale bestandsgrootte is te groot',
    );
  });
});

describe('getUploadHttpErrorMessage', () => {
  it('maps 413 to a user-friendly upload-size message', () => {
    expect(getUploadHttpErrorMessage(413)).toContain('te groot');
  });

  it('maps 405 to an endpoint configuration message', () => {
    expect(getUploadHttpErrorMessage(405)).toContain('niet beschikbaar');
  });
});
