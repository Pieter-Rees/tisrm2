'use client';

import { Box } from '@chakra-ui/react';
import Card from '@/components/card';

import { UnifiedLayout } from '@/components/layout';
import { AVAILABLE_DOCUMENTS } from '@/data/content';

export default function Downloads() {
    return (
        <UnifiedLayout title="Downloads">
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
                    {AVAILABLE_DOCUMENTS.map((doc, index) => (
                        <Box
                            key={doc.id || index}
                            w="100%"
                            h="100%"
                            display="flex"
                            alignItems="stretch"
                            minW="0"
                        >
                            <Card
                                variant="downloads"
                                title={doc.title}
                                downloadLink={doc.link}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </UnifiedLayout>
    );
}
