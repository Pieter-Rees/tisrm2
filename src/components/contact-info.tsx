'use client';

import type { ContactInfoProps } from '@/types/components';
import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { contactInfo } from '../data/general';

const contactButtons = [
  { href: 'tel:+310206368191', label: '+31 020 636 8191', external: false },
  { href: 'mailto:info@tisrm.nl', label: 'info@tisrm.nl', external: false },
  {
    href: contactInfo.social.linkedIn,
    label: <BsLinkedin size="24" />,
    external: true,
  },
] as const;

export default function ContactInfo({
  buttonVariant = 'solid',
}: ContactInfoProps) {
  return (
    <>
      <SimpleGrid minChildWidth={{ base: 'full', md: '120px' }} gap="10">
        <Box>
          <VStack align="start" gap="2">
            <Text color="gray.800">{contactInfo.address.street}</Text>
            <Text color="gray.800">{contactInfo.email}</Text>
            <Text color="gray.800">{contactInfo.address.city}</Text>
          </VStack>
        </Box>
        <Box>
          <VStack align="start" gap="2">
            <Text color="gray.800">{contactInfo.postalBox.box}</Text>
            <Text color="gray.800">{contactInfo.postalBox.postalCode}</Text>
            <Text color="gray.800">{contactInfo.postalBox.city}</Text>
          </VStack>
        </Box>
      </SimpleGrid>

      <Flex justifyContent="start" mt="8">
        <HStack align="start" gap="2">
          {contactButtons.map(({ href, label, external }) => (
            <Button
              key={href}
              asChild
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
        </HStack>
      </Flex>
    </>
  );
}
