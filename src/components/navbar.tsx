'use client';

import { Box, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { ButtonLink } from '@/components/ui/button-link';
import { zakelijkMegaMenuId } from '@/components/zakelijk-mega-menu';
import { NAVIGATION_ROUTES, PRIMARY_NAVIGATION } from '@/constants/app';
import { SPACING_PATTERNS } from '@/constants/layout';
import { navCtaGap } from '@/constants/spacing';
import { DESIGN_BUTTON_STYLES } from '@/styles/components/button.styles';

export interface NavbarProps {
  /** Mirrors the header chrome so the links stay legible over the dark hero. */
  useLightChrome?: boolean;
  isZakelijkMenuOpen?: boolean;
  onZakelijkMenuEnter?: () => void;
  onZakelijkMenuLeave?: () => void;
  onZakelijkNavigate?: () => void;
}

/**
 * Link set from testing (Home, Zakelijk, …); CTA pair from design (Offerte /
 * Schade melden) with the design chrome colours.
 */
const Navbar = memo<NavbarProps>(
  ({
    useLightChrome = true,
    isZakelijkMenuOpen = false,
    onZakelijkMenuEnter,
    onZakelijkMenuLeave,
    onZakelijkNavigate,
  }) => {
    const pathname = usePathname();

    function handleZakelijkEnter() {
      onZakelijkMenuEnter?.();
    }

    function handleZakelijkLeave() {
      onZakelijkMenuLeave?.();
    }

    function handleZakelijkNavigate() {
      onZakelijkNavigate?.();
    }

    const linkColor = useLightChrome ? 'navy.700' : 'white';
    const mutedColor = useLightChrome ? 'stone.700' : 'white';
    const underlineColor = useLightChrome ? 'navy.700' : 'gold.400';
    const dividerColor = useLightChrome ? 'stone.300' : 'whiteAlpha.400';
    const primaryCtaStyles =
      useLightChrome ?
        DESIGN_BUTTON_STYLES.onLight
      : DESIGN_BUTTON_STYLES.onDark;
    const secondaryCtaStyles =
      useLightChrome ?
        DESIGN_BUTTON_STYLES.outlineOnLight
      : DESIGN_BUTTON_STYLES.outlineOnDark;

    return (
      <Flex
        alignItems="center"
        gap={SPACING_PATTERNS.navigation.container}
        width="full"
        justifyContent="flex-end"
      >
        <Box hideBelow="xl">
          <HStack
            as="nav"
            aria-label="Hoofdnavigatie"
            gap={SPACING_PATTERNS.navigation.group}
            alignItems="center"
            fontSize={{ base: 'sm', '2xl': 'md' }}
            fontWeight="medium"
            listStyleType="none"
            margin="0"
            padding="0"
          >
            {PRIMARY_NAVIGATION.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href !== '/' && pathname.startsWith(href));
              const isZakelijk = href === NAVIGATION_ROUTES.businessInsurance;
              const showEmphasis =
                isActive || (isZakelijk && isZakelijkMenuOpen);
              const zakelijkLinkProps =
                isZakelijk ?
                  {
                    'aria-expanded': isZakelijkMenuOpen,
                    'aria-controls': zakelijkMegaMenuId,
                    onClick: handleZakelijkNavigate,
                    onFocus: handleZakelijkEnter,
                  }
                : {};

              return (
                <Box
                  key={href}
                  onMouseEnter={isZakelijk ? handleZakelijkEnter : undefined}
                  onMouseLeave={isZakelijk ? handleZakelijkLeave : undefined}
                >
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    {...zakelijkLinkProps}
                  >
                    <Box
                      textDecoration="none"
                      display="flex"
                      alignItems="center"
                      gap="1"
                      py={SPACING_PATTERNS.navigation.item}
                      position="relative"
                      color={showEmphasis ? linkColor : mutedColor}
                      fontWeight={isActive ? 'semibold' : 'medium'}
                      borderBottom="2px solid"
                      borderBottomColor={
                        showEmphasis ? underlineColor : 'transparent'
                      }
                      transition="all 0.2s ease-in-out"
                      minH="6"
                      whiteSpace="nowrap"
                      _hover={
                        !isActive ?
                          {
                            color: linkColor,
                            borderBottomColor: underlineColor,
                            transform: 'translateY(-1px)',
                          }
                        : {}
                      }
                    >
                      {label}
                      {isZakelijk && (
                        <Box
                          as="span"
                          aria-hidden="true"
                          display="inline-flex"
                          transform={
                            isZakelijkMenuOpen ? 'rotate(180deg)' : (
                              'rotate(0deg)'
                            )
                          }
                          transition="transform 0.15s ease"
                        >
                          <BsChevronDown />
                        </Box>
                      )}
                    </Box>
                  </Link>
                </Box>
              );
            })}
          </HStack>
        </Box>

        <Flex
          hideBelow="xl"
          align="center"
          gap={navCtaGap}
          flexShrink={0}
          pl="6"
          ml="2"
          borderLeft="1px solid"
          borderColor={dividerColor}
        >
          <ButtonLink
            href={NAVIGATION_ROUTES.quote}
            size="sm"
            px="5"
            {...primaryCtaStyles}
          >
            Offerte
          </ButtonLink>
          <ButtonLink
            href={NAVIGATION_ROUTES.damageReport}
            size="sm"
            px="4"
            whiteSpace="nowrap"
            {...secondaryCtaStyles}
          >
            Schade melden
          </ButtonLink>
        </Flex>
      </Flex>
    );
  },
);

Navbar.displayName = 'Navbar';

export default Navbar;
