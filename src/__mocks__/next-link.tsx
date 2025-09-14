import React from 'react';

interface LinkProps {
  href?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

const MockLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, ...props }, ref) => (
    <a ref={ref} href={href as string} {...props}>
      {children as React.ReactNode}
    </a>
  ),
);

MockLink.displayName = 'MockLink';

export default MockLink;
