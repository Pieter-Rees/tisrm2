'use client';

import { Box } from '@chakra-ui/react';
import Card from '@/components/card';

import { UnifiedLayout } from '@/components/layout';
import { SECTION_SPACING } from '@/constants/typography';
import { AVAILABLE_DOCUMENTS } from '@/data/content';
import { COMPONENT_SPACING } from '@/constants/layout';

export default function Downloads() {
    return (
        <UnifiedLayout title="Downloads">
            <Box
                bg="gray.50"
                borderRadius="xl"
                p={COMPONENT_SPACING.card.lg}
                w="100%"
            >
                <Box
                    display="grid"
                    gridTemplateColumns={{
                        base: '1fr',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }}
                    gap={SECTION_SPACING.small}
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
                                titleAs="h2"
                                downloadLink={doc.link}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </UnifiedLayout>
    );
}
