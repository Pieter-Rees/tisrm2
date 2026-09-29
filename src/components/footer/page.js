import { Button, Box, Flex, Text, SimpleGrid, Container, Heading, Stack } from '@chakra-ui/react'
import { contactInfo, currentYear } from '../../data/general'
import FooterLogos from '@/components/footer-logos'
import Link from 'next/link'
import ContactInfo from '@/components/contact-info'
import Logo from '@/components/logo'
import { copyGap, sectionPy, splitGap } from '@/constants/spacing'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/verzekeringen', label: 'Verzekeringen' },
  { href: '/taxi', label: 'Taxi' },
  { href: '/risk-management', label: 'Risk management' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/bestanden', label: 'Bestanden' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <>
      <FooterLogos />
      <Flex
        bg="navy.700"
        paddingY={sectionPy}
        alignItems="center"
        borderTop="1px solid"
        borderColor="gold.400"
      >
        <Container>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={splitGap}>
            <Flex flexDirection="column" gap={copyGap}>
              <Box filter="brightness(1.05)">
                <Link href="/">
                  <Logo width="180px" />
                </Link>
              </Box>
              <Text color="whiteAlpha.800" mb="0" maxW="360px">
                Het verdient aanbeveling dat verzekeraars een polis uitbrengen die de gevolgen dekt
                van een niet geheel begrepen verzekering!
              </Text>
              <Box>
                <Button as={Link} href="/offerte" variant="white">
                  Offerte aanvragen
                </Button>
              </Box>
            </Flex>

            <Box>
              <Heading as="h3" variant="footer">
                Navigatie
              </Heading>
              <Stack spacing="2" color="white" fontSize="lg">
                {footerLinks.map((link) => (
                  <Text
                    as={Link}
                    key={link.href}
                    href={link.href}
                    mb="0"
                    color="whiteAlpha.800"
                    _hover={{ color: 'gold.400' }}
                  >
                    {link.label}
                  </Text>
                ))}
              </Stack>
            </Box>

            <Box>
              <Heading as="h3" variant="footer">
                Contact informatie
              </Heading>
              <ContactInfo variant="footer" buttonVariant="link" />
            </Box>
          </SimpleGrid>
        </Container>
      </Flex>
      <Box py="6" bg="navy.800">
        <Text textAlign="center" color="whiteAlpha.700" mb="0" fontSize="sm" letterSpacing="0.04em">
          TIS Risk Managers {currentYear}
        </Text>
      </Box>
    </>
  )
}
