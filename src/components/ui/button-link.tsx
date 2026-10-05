'use client';

import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

interface ButtonLinkProps
  extends Omit<ComponentProps<typeof Button>, 'asChild'> {
  href: string;
  external?: boolean;
  download?: boolean;
}

export const ButtonLink = forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ href, external = false, download = false, children, ...props }, ref) => {
    const isExternal =
      external ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:');

    // Prefer a real <a> for downloads and non-app URLs so crawlers and
    // browsers get a crawlable, downloadable href.
    if (isExternal || download) {
      return (
        <Button asChild ref={ref} {...props}>
          <a
            href={href}
            target={external || href.startsWith('http') ? '_blank' : undefined}
            rel={
              external || href.startsWith('http') ?
                'noopener noreferrer'
              : undefined
            }
            {...(download && { download: true })}
          >
            {children}
          </a>
        </Button>
      );
    }

    return (
      <Button asChild ref={ref} {...props}>
        <Link href={href as any}>{children}</Link>
      </Button>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
