import React from 'react';

const MockLink = React.forwardRef<HTMLAnchorElement, any>(({ href, children, ...props }, ref) => (
    <a
        ref={ref}
        href={href}
        {...props}
    >
        {children}
    </a>
));

MockLink.displayName = 'MockLink';

export default MockLink;
