import React from 'react';

interface ImageProps {
    src?: string;
    alt?: string;
    [key: string]: unknown;
}

const MockImage = React.forwardRef<HTMLImageElement, ImageProps>(({ src, alt, ...props }, ref) => (
    <img
        ref={ref}
        src={src}
        alt={alt}
        {...props}
    />
));

MockImage.displayName = 'MockImage';

export default MockImage;
