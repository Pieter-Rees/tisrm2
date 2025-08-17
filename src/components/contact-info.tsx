'use client';

import { Box, Flex, SimpleGrid, VStack, Text, Button } from '@chakra-ui/react';
import { contactInfo } from '../data/general';
import { BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import type { ContactInfoProps } from '@/types/components';

const contactButtons = [
  { href: 'tel:+310206368191', label: '+31 020 636 8191', external: false },
  { href: 'mailto:info@tisrm.nl', label: 'info@tisrm.nl', external: false },
  {
    href: contactInfo.linkedIn,
    label: <BsLinkedin size="24" />,
    external: true,
  },
] as const;

export default function ContactInfo({
  buttonVariant = 'solid',
}: ContactInfoProps) {
  return (
    <>
      <SimpleGrid minChildWidth={{ base: 'full', md: '120px' }} gap="40px">
        <Box>
          <VStack align="start" gap="2">
            <Text color="gray.800">{contactInfo.address}</Text>
            <Text color="gray.800">{contactInfo.email}</Text>
            <Text color="gray.800">{contactInfo.city}</Text>
          </VStack>
        </Box>
        <Box>
          <VStack align="start" gap="2">
            <Text color="gray.800">{contactInfo.postalBox}</Text>
            <Text color="gray.800">{contactInfo.postalCode}</Text>
            <Text color="gray.800">{contactInfo.city}</Text>
          </VStack>
        </Box>
      </SimpleGrid>

      <Flex justifyContent="start" mt="8">
        <VStack align="start" gap="2">
          {contactButtons.map(({ href, label, external }) => (
            <Button
              key={href}
              asChild
              width="full"
              height="full"
              variant={buttonVariant === 'solid' ? 'solid' : 'outline'}
            >
              <Link
                href={href as any}
                {...(external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {label}
              </Link>
            </Button>
          ))}
        </VStack>
      </Flex>
    </>
  );
}