'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';
import { useForm } from 'react-hook-form';
import { BsCheck2Circle, BsExclamationTriangle } from 'react-icons/bs';

import { BaseLayout } from '@/components/layout';
import { Field } from '@/components/ui/field';
import { getSchadeApiUrl } from '@/lib/utils';
import {
  MAX_TOTAL_UPLOAD_SIZE_BYTES,
  getUploadHttpErrorMessage,
  validateDamageUploadGroups,
} from '@/lib/upload-validation';

type SubmissionState = 'idle' | 'success' | 'error';

interface SchadeFormData {
  name: string;
  phone: string;
  email: string;
  description: string;
}

const ACCEPTED_DOCUMENT_FILE_TYPES =
  '.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv,.odt,.ods';
const ACCEPTED_PHOTO_FILE_TYPES = 'image/*';
const ACCEPTED_UPLOAD_FILE_TYPES = `${ACCEPTED_DOCUMENT_FILE_TYPES},${ACCEPTED_PHOTO_FILE_TYPES}`;

const getFileIdentity = (file: File): string =>
  `${file.name}-${file.size}-${file.lastModified}`;

const fileToDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
    reader.onerror = () => reject(new Error('Kon voorbeeld van foto niet laden.'));
    reader.readAsDataURL(file);
  });

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export default function MeldSchadePage() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState<File[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SchadeFormData>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      description: '',
    },
  });

  const totalSelectedBytes = useMemo(() => {
    return [...selectedDocuments, ...selectedPhotos].reduce(
      (total, file) => total + file.size,
      0,
    );
  }, [selectedDocuments, selectedPhotos]);

  const [photoPreviews, setPhotoPreviews] = useState<
    Array<{ identity: string; file: File; previewUrl: string }>
  >([]);

  useEffect(() => {
    let isActive = true;

    const loadPreviews = async () => {
      const previews = await Promise.all(
        selectedPhotos.map(async file => ({
          identity: getFileIdentity(file),
          file,
          previewUrl: await fileToDataUrl(file),
        })),
      );

      if (!isActive) return;
      setPhotoPreviews(previews);
    };

    loadPreviews().catch(() => {
      if (isActive) {
        setPhotoPreviews([]);
      }
    });

    return () => {
      isActive = false;
    };
  }, [selectedPhotos]);

  const handleAddUploads = useCallback((incomingFiles: File[]) => {
    if (incomingFiles.length === 0) {
      return;
    }

    setSubmissionState('idle');
    setErrorMessage('');
    setUploadError('');

    const documentFiles = incomingFiles.filter(
      file => !file.type.startsWith('image/'),
    );
    const photoFiles = incomingFiles.filter(file => file.type.startsWith('image/'));

    setSelectedDocuments(previousFiles => {
      const existingIds = new Set(previousFiles.map(getFileIdentity));
      const uniqueNewFiles = documentFiles.filter(
        file => !existingIds.has(getFileIdentity(file)),
      );
      return [...previousFiles, ...uniqueNewFiles];
    });

    setSelectedPhotos(previousFiles => {
      const existingIds = new Set(previousFiles.map(getFileIdentity));
      const uniqueNewFiles = photoFiles.filter(
        file => !existingIds.has(getFileIdentity(file)),
      );
      return [...previousFiles, ...uniqueNewFiles];
    });
  }, []);

  const handleRemoveDocument = useCallback((identity: string) => {
    setSelectedDocuments(previousFiles =>
      previousFiles.filter(file => getFileIdentity(file) !== identity),
    );
    setSubmissionState('idle');
    setErrorMessage('');
    setUploadError('');
  }, []);

  const handleRemovePhoto = useCallback((identity: string) => {
    setSelectedPhotos(previousFiles =>
      previousFiles.filter(file => getFileIdentity(file) !== identity),
    );
    setSubmissionState('idle');
    setErrorMessage('');
    setUploadError('');
  }, []);

  const onSubmit = useCallback(
    async (values: SchadeFormData) => {
      setSubmissionState('idle');
      setErrorMessage('');
      setUploadError('');

      const filesValidationResult = validateDamageUploadGroups(
        selectedDocuments,
        selectedPhotos,
      );
      if (filesValidationResult !== true) {
        setUploadError(filesValidationResult);
        return;
      }

      startTransition(async () => {
        try {
          const formData = new FormData();
          formData.append('name', values.name.trim());
          formData.append('phone', values.phone.trim());
          formData.append('email', values.email.trim());
          formData.append('description', values.description.trim());

          selectedDocuments.forEach(file => {
            formData.append('files', file);
          });
          selectedPhotos.forEach(file => {
            formData.append('photos', file);
          });

          const response = await fetch(getSchadeApiUrl(), {
            method: 'POST',
            body: formData,
            signal: AbortSignal.timeout(20000),
          });

          if (!response.ok) {
            let backendError = '';
            try {
              const errorPayload = (await response.json()) as { error?: string };
              backendError = errorPayload.error ?? '';
            } catch {
              backendError = '';
            }

            throw new Error(
              backendError || getUploadHttpErrorMessage(response.status),
            );
          }

          setSubmissionState('success');
          setSelectedDocuments([]);
          setSelectedPhotos([]);
          setUploadError('');
          reset();
        } catch (error) {
          setSubmissionState('error');
          if (error instanceof Error && error.name === 'TimeoutError') {
            setErrorMessage('De upload duurde te lang. Probeer het opnieuw.');
            return;
          }

          setErrorMessage(
            error instanceof Error ?
              error.message
            : 'Er is een fout opgetreden tijdens het versturen.',
          );
        }
      });
    },
    [reset, selectedDocuments, selectedPhotos],
  );

  return (
    <Container>
      <BaseLayout title="Schade melden">
        <Box width="full" maxW="xl" mx="auto">
          <VStack gap="8" align="stretch">
            <Box textAlign="center">
              <Text color="gray.600">
                Vul uw gegevens in en voeg documenten en foto&apos;s van de schade
                toe.
              </Text>
            </Box>

            {submissionState === 'success' && (
              <VStack gap="6" textAlign="center" py="6">
                <Box color="green.500" fontSize="4xl">
                  <BsCheck2Circle />
                </Box>
                <Heading as="h3" size="md" color="green.700">
                  Schade verstuurd
                </Heading>
                <Text color="gray.700">
                  Uw melding is ontvangen. Wij nemen zo snel mogelijk contact op.
                </Text>
                <Button
                  onClick={() => setSubmissionState('idle')}
                  variant="outline"
                  colorScheme="green"
                  size="sm"
                >
                  Nieuwe melding indienen
                </Button>
              </VStack>
            )}

            {submissionState === 'error' && (
              <Box
                p="4"
                borderRadius="md"
                bg="red.50"
                borderLeft="4px solid"
                borderColor="red.500"
              >
                <Box display="flex" alignItems="center" gap="3">
                  <Box color="red.500">
                    <BsExclamationTriangle size="20" />
                  </Box>
                  <Box>
                    <Heading as="h4" size="sm" color="red.700" mb="1">
                      Versturen mislukt
                    </Heading>
                    <Text fontSize="sm" color="red.600">
                      {errorMessage}
                    </Text>
                  </Box>
                </Box>
              </Box>
            )}

            {submissionState !== 'success' && (
              <Box>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <VStack align="stretch" gap="6">
                    <Field
                      label="Naam"
                      required
                      invalid={!!errors.name}
                      errorText={errors.name?.message}
                    >
                      <Input
                        {...register('name', {
                          required: 'Naam is verplicht',
                          minLength: {
                            value: 2,
                            message: 'Naam moet minimaal 2 karakters bevatten',
                          },
                        })}
                        placeholder="Uw naam"
                        autoComplete="name"
                      />
                    </Field>

                    <Field
                      label="Telefoonnummer"
                      required
                      invalid={!!errors.phone}
                      errorText={errors.phone?.message}
                    >
                      <Input
                        {...register('phone', {
                          required: 'Telefoonnummer is verplicht',
                          minLength: {
                            value: 6,
                            message:
                              'Telefoonnummer moet minimaal 6 karakters bevatten',
                          },
                        })}
                        placeholder="Uw telefoonnummer"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </Field>

                    <Field
                      label="E-mailadres"
                      required
                      invalid={!!errors.email}
                      errorText={errors.email?.message}
                    >
                      <Input
                        {...register('email', {
                          required: 'E-mailadres is verplicht',
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Vul een geldig e-mailadres in',
                          },
                        })}
                        type="email"
                        placeholder="uw@email.nl"
                        autoComplete="email"
                      />
                    </Field>

                    <Field
                      label="Beschrijving"
                      required
                      invalid={!!errors.description}
                      errorText={errors.description?.message}
                    >
                      <Textarea
                        {...register('description', {
                          required: 'Beschrijving is verplicht',
                          minLength: {
                            value: 10,
                            message:
                              'Beschrijving moet minimaal 10 karakters bevatten',
                          },
                        })}
                        placeholder="Beschrijf kort wat er is gebeurd en welke schade u heeft."
                        rows={4}
                      />
                    </Field>

                    <Field
                      label="Bestanden en foto's"
                      required
                      invalid={!!uploadError}
                      errorText={uploadError}
                    >
                      <VStack align="stretch" gap="3" width="full">
                        <Box
                          width="full"
                          borderRadius="lg"
                          border="1px solid"
                          borderColor={uploadError ? 'red.300' : 'gray.200'}
                          bg={uploadError ? 'red.50' : 'gray.50'}
                          px="4"
                          py="3"
                        >
                          <VStack align="stretch" gap="3" width="full">
                            <input
                              id="damage-upload"
                              type="file"
                              multiple
                              accept={ACCEPTED_UPLOAD_FILE_TYPES}
                              onChange={event => {
                                const files = Array.from(event.target.files ?? []);
                                handleAddUploads(files);
                                event.currentTarget.value = '';
                              }}
                              style={{ display: 'none' }}
                            />
                            <label
                              htmlFor="damage-upload"
                              style={{
                                border: '1px dashed',
                                borderColor: uploadError ? '#FC8181' : '#90CDF4',
                                borderRadius: '0.375rem',
                                background: '#FFFFFF',
                                padding: '1.25rem 1rem',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease-in-out',
                                display: 'block',
                              }}
                            >
                              <Text fontWeight="semibold" color="gray.800" mb="1">
                                Klik om bestanden te kiezen
                              </Text>
                              <Text fontSize="sm" color="gray.600">
                                {`Voeg documenten en foto's toe (maximaal ${Math.floor(MAX_TOTAL_UPLOAD_SIZE_BYTES / (1024 * 1024))} MB in totaal).`}
                              </Text>
                            </label>
                            <Text fontSize="sm" color="gray.600">
                              {selectedDocuments.length + selectedPhotos.length === 0 ?
                                'Nog geen bestanden of foto\'s gekozen'
                              : `${selectedDocuments.length} document(en), ${selectedPhotos.length} foto's`}
                            </Text>
                          </VStack>
                        </Box>

                        <Text fontSize="sm" color="gray.600" fontWeight="medium">
                          Documenten
                        </Text>
                        {selectedDocuments.length > 0 && (
                          <VStack align="stretch" gap="2">
                            {selectedDocuments.map(file => {
                              const identity = getFileIdentity(file);

                              return (
                                <HStack
                                  key={identity}
                                  justify="space-between"
                                  align="center"
                                  border="1px solid"
                                  borderColor="gray.200"
                                  borderRadius="md"
                                  px="3"
                                  py="2"
                                  bg="white"
                                >
                                  <Box>
                                    <Text
                                      fontSize="sm"
                                      fontWeight="medium"
                                      color="gray.800"
                                    >
                                      {file.name}
                                    </Text>
                                    <Text fontSize="xs" color="gray.500">
                                      {formatFileSize(file.size)}
                                    </Text>
                                  </Box>
                                  <Button
                                    type="button"
                                    size="xs"
                                    variant="ghost"
                                    colorScheme="red"
                                    onClick={() => handleRemoveDocument(identity)}
                                  >
                                    Verwijderen
                                  </Button>
                                </HStack>
                              );
                            })}
                          </VStack>
                        )}
                        {selectedDocuments.length === 0 && (
                          <Box
                            border="1px solid"
                            borderColor="gray.200"
                            borderRadius="md"
                            bg="gray.50"
                            px="3"
                            py="2"
                          >
                            <Text fontSize="sm" color="gray.500">
                              Nog geen documenten gekozen
                            </Text>
                          </Box>
                        )}

                        <Text fontSize="sm" color="gray.600" fontWeight="medium" pt="2">
                          Foto&apos;s
                        </Text>
                        {selectedPhotos.length > 0 && (
                          <HStack align="stretch" wrap="wrap" gap="3">
                            {photoPreviews.map(({ file, identity, previewUrl }) => (
                              <Box
                                key={identity}
                                border="1px solid"
                                borderColor="gray.200"
                                borderRadius="md"
                                p="2"
                                bg="white"
                                width="140px"
                              >
                                <Image
                                  src={previewUrl}
                                  alt={file.name}
                                  borderRadius="sm"
                                  objectFit="cover"
                                  width="100%"
                                  height="90px"
                                  mb="2"
                                />
                                <Text
                                  fontSize="xs"
                                  color="gray.700"
                                  fontWeight="medium"
                                  lineClamp={2}
                                  mb="1"
                                >
                                  {file.name}
                                </Text>
                                <Text fontSize="xs" color="gray.500" mb="1">
                                  {formatFileSize(file.size)}
                                </Text>
                                <Button
                                  type="button"
                                  size="xs"
                                  variant="ghost"
                                  colorScheme="red"
                                  onClick={() => handleRemovePhoto(identity)}
                                >
                                  Verwijderen
                                </Button>
                              </Box>
                            ))}
                          </HStack>
                        )}
                        {selectedPhotos.length === 0 && (
                          <Box
                            border="1px solid"
                            borderColor="gray.200"
                            borderRadius="md"
                            bg="gray.50"
                            px="3"
                            py="2"
                          >
                            <Text fontSize="sm" color="gray.500">
                              Nog geen foto&apos;s gekozen
                            </Text>
                          </Box>
                        )}
                      </VStack>
                    </Field>

                    <Text fontSize="sm" color="gray.600">
                      Totaal geselecteerd (documenten + foto&apos;s):{' '}
                      {formatFileSize(totalSelectedBytes)}
                    </Text>

                    <Button
                      type="submit"
                      loading={isSubmitting || isPending}
                      loadingText="Bezig met versturen..."
                      size="lg"
                      width="full"
                      bg="blue.500"
                      color="white"
                      transition="all 0.2s ease-in-out"
                      _hover={{
                        bg: 'blue.600',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      _active={{ bg: 'blue.700' }}
                    >
                      Schade versturen
                    </Button>
                  </VStack>
                </form>
              </Box>
            )}
          </VStack>
        </Box>
      </BaseLayout>
    </Container>
  );
}
