'use client'

import { Box } from '@chakra-ui/react'

const AnimatedImage = ({
  src,
  alt,
  width = '100%',
  height = '600px',
  priority = false,
  className = '',
  borderRadius = '0',
  objectFit = 'cover',
}) => {
  return (
    <Box
      width={width}
      height={height}
      minHeight={typeof height === 'object' ? undefined : height}
      borderRadius={borderRadius}
      backgroundImage={`url(${src})`}
      backgroundSize={objectFit}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      className={className}
      role='img'
      aria-label={alt}
    />
  )
}

export default AnimatedImage
