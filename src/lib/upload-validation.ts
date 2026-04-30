export const MAX_TOTAL_UPLOAD_SIZE_BYTES = 8 * 1024 * 1024;
const DOCUMENT_MIME_PREFIX = 'application/';
const TEXT_MIME_PREFIX = 'text/';
const IMAGE_MIME_PREFIX = 'image/';

const ALLOWED_DOCUMENT_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.oasis.opendocument.text',
  'application/vnd.oasis.opendocument.spreadsheet',
  'text/plain',
  'text/csv',
]);

const isImageFile = (file: File): boolean =>
  file.type.startsWith(IMAGE_MIME_PREFIX);

export const validateDocumentFiles = (files: File[]): true | string => {
  const containsImage = files.some(isImageFile);
  if (containsImage) {
    return 'Bij "Bestanden" zijn alleen documenten toegestaan (geen foto\'s).';
  }

  const containsInvalidDocumentType = files.some(file => {
    if (!file.type) {
      return false;
    }

    if (ALLOWED_DOCUMENT_MIME_TYPES.has(file.type)) {
      return false;
    }

    return !(
      file.type.startsWith(DOCUMENT_MIME_PREFIX) ||
      file.type.startsWith(TEXT_MIME_PREFIX)
    );
  });

  if (containsInvalidDocumentType) {
    return 'Niet-ondersteund documenttype in "Bestanden".';
  }

  return true;
};

export const validatePhotoFiles = (files: File[]): true | string => {
  const containsNonImage = files.some(file => !isImageFile(file));
  if (containsNonImage) {
    return 'Bij "Foto\'s" zijn alleen afbeeldingsbestanden toegestaan.';
  }

  return true;
};

export const validateUploadFiles = (fileList?: FileList): true | string => {
  if (!fileList || fileList.length === 0) {
    return 'Minimaal 1 bestand is verplicht';
  }

  const totalSize = Array.from(fileList).reduce(
    (total, file) => total + file.size,
    0,
  );

  if (totalSize > MAX_TOTAL_UPLOAD_SIZE_BYTES) {
    return 'Totale bestandsgrootte is te groot. Upload maximaal 8 MB in totaal.';
  }

  return true;
};

export const validateDamageUploadGroups = (
  documentFiles: File[],
  photoFiles: File[],
): true | string => {
  if (documentFiles.length === 0 && photoFiles.length === 0) {
    return 'Voeg minimaal 1 document of foto toe.';
  }

  const documentsValidation = validateDocumentFiles(documentFiles);
  if (documentsValidation !== true) {
    return documentsValidation;
  }

  const photosValidation = validatePhotoFiles(photoFiles);
  if (photosValidation !== true) {
    return photosValidation;
  }

  const totalSize = [...documentFiles, ...photoFiles].reduce(
    (total, file) => total + file.size,
    0,
  );

  if (totalSize > MAX_TOTAL_UPLOAD_SIZE_BYTES) {
    return 'Totale bestandsgrootte is te groot. Upload maximaal 8 MB in totaal.';
  }

  return true;
};

export const getUploadHttpErrorMessage = (status: number): string => {
  if (status === 413) {
    return 'De upload is te groot voor de server. Verklein uw bestanden en probeer opnieuw.';
  }

  if (status === 405) {
    return 'De schade uploaddienst is momenteel niet beschikbaar (endpoint niet geactiveerd). Probeer het later opnieuw.';
  }

  return `Serverfout (${status}). Probeer het opnieuw.`;
};
