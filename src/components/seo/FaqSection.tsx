'use client';

import { Accordion, Box, Heading, Span, Text } from '@chakra-ui/react';

import type { FaqItem } from '@/lib/seo/organizationSchema';
import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';

type FaqSectionProps = {
  faqs: readonly FaqItem[];
  headingId?: string;
  title?: string;
};

export function FaqSection({
  faqs,
  headingId = 'faq-heading',
  title = 'Veelgestelde vragen',
}: FaqSectionProps) {
  return (
    <Box
      as="section"
      aria-labelledby={headingId}
      bg="gray.50"
      borderRadius="xl"
      p={COMPONENT_SPACING.card.lg}
    >
      <Heading as="h2" id={headingId} fontSize="1.5rem" mb={COMPONENT_SPACING.form.group} color="gray.800">
        {title}
      </Heading>

      <Accordion.Root multiple collapsible variant="plain">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={faq.question}
            value={`faq-${index}`}
            borderBottomWidth="1px"
            borderColor="gray.200"
            _last={{ borderBottomWidth: 0 }}
          >
            <Accordion.ItemTrigger
              py={SPACING_SCALE.md}
              px="0"
              gap={SPACING_SCALE.md}
              textAlign="start"
              cursor="pointer"
              css={{
                cursor: 'pointer',
                '& *': { cursor: 'pointer' },
              }}
            >
              <Span
                flex="1"
                fontWeight="semibold"
                fontSize="1.125rem"
                color="gray.800"
              >
                {faq.question}
              </Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody px="0" pb={SPACING_SCALE.md} pt="0">
                <Text color="gray.700" lineHeight="1.6" m="0">
                  {faq.answer}
                </Text>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );
}
