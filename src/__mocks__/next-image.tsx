import React from 'react';

const MockImage = React.forwardRef<HTMLImageElement, any>(({ src, alt, ...props }, ref) => (
    <img
        ref={ref}
        src={src}
        alt={alt}
        {...props}
    />
));

MockImage.displayName = 'MockImage';

export default MockImage;
