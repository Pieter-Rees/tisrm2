import Card from '@/components/card';
import type { PageDocumentView } from '@/lib/payload/mapPageSections';
import { Box } from '@chakra-ui/react';

type DownloadsGridProps = {
  documents: PageDocumentView[];
};

export function DownloadsGrid({ documents }: DownloadsGridProps) {
  return (
    <Box
      bg="gray.50"
      borderRadius="xl"
      p={{ base: '6', md: '8' }}
      mb="8"
      w="100%"
    >
      <Box
        display="grid"
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{ base: '4', md: '6', lg: '8' }}
        w="100%"
        alignItems="stretch"
        justifyItems="stretch"
      >
        {documents.map((doc, index) => (
          <Box
            key={`${doc.title}-${index}`}
            w="100%"
            h="100%"
            display="flex"
            alignItems="stretch"
            minW="0"
          >
            <Card
              variant="downloads"
              title={doc.title}
              downloadLink={doc.downloadLink}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
