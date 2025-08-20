'use client';

import { memo, useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { Box, Skeleton } from '@chakra-ui/react';
import { getOptimalImageSizes } from '@/lib/component-utils';
import type { BaseComponentProps } from '@/types/components';

interface OptimizedImageProps extends Omit<ImageProps, 'className'> {
    className?: string;
    'data-testid'?: string;
    /** Aspect ratio for consistent sizing */
    aspectRatio?: number;
    /** Whether to use skeleton loading */
    showSkeleton?: boolean;
    /** Container border radius */
    borderRadius?: string;
    /** Container box shadow */
    boxShadow?: string;
    /** Maximum width for size optimization */
    maxWidth?: number;
    /** Whether to enable hover effects */
    enableHover?: boolean;
    /** Fallback image URL */
    fallbackSrc?: string;
}

const OptimizedImage = memo<OptimizedImageProps>(({
    src,
    alt,
    width,
    height,
    aspectRatio,
    showSkeleton = true,
    borderRadius,
    boxShadow,
    maxWidth,
    enableHover = false,
    fallbackSrc,
    className,
    'data-testid': testId,
    ...imageProps
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            setHasError(false);
        }
    };

    const sizes = getOptimalImageSizes(maxWidth);

    // Container styles are now applied directly to the Box component

    return (
        <Box
            className={className || ''}
            data-testid={testId || ''}
            position="relative"
            width="100%"
            height={aspectRatio ? 'auto' : (height || 'auto')}
            aspectRatio={aspectRatio ? aspectRatio.toString() : undefined}
            borderRadius={borderRadius || undefined}
            boxShadow={boxShadow || undefined}
            overflow="hidden"
            transition={enableHover ? 'all 0.3s ease' : undefined}
            {...(enableHover && {
                _hover: {
                    transform: 'scale(1.02)',
                    boxShadow: 'xl',
                }
            })}
        >
            {showSkeleton && isLoading && (
                <Skeleton
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    borderRadius={borderRadius}
                />
            )}

            <Image
                src={currentSrc}
                alt={alt}
                width={width as number}
                height={height as number}
                sizes={sizes}
                onLoad={handleLoad}
                onError={handleError}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: isLoading ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                }}
                {...imageProps}
            />

            {hasError && !fallbackSrc && (
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    bg="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="gray.500"
                    fontSize="sm"
                >
                    Failed to load image
                </Box>
            )}
        </Box>
    );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
