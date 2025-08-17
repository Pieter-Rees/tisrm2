'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import type { ComponentProps } from 'react';

interface ButtonLinkProps extends Omit<ComponentProps<typeof Button>, 'asChild'> {
  href: string;
  external?: boolean;
  download?: boolean;
}

/**
 * Modern Button Link component that properly handles Chakra UI v3 asChild pattern
 */
export const ButtonLink = forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ href, external = false, download = false, children, ...props }, ref) => {
    const isExternal = external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    if (isExternal) {
      return (
        <Button asChild ref={ref} {...props}>
          <a
            href={href}
            target={external || href.startsWith('http') ? '_blank' : undefined}
            rel={external || href.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...(download && { download })}
          >
            {children}
          </a>
        </Button>
      );
    }

    // Internal Next.js Link
    return (
      <Button asChild ref={ref} {...props}>
        <Link href={href as any}>{children}</Link>
      </Button>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';
