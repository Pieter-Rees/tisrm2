import { Box } from '@chakra-ui/react'
import { isProductImage } from '@/constants/images'

export function PhotoVeil() {
  return (
    <>
      <Box
        position='absolute'
        inset='0'
        bgGradient='linear(to-r, rgba(11,31,58,0.58) 0%, rgba(11,31,58,0.24) 52%, rgba(11,31,58,0.1) 100%)'
      />
      <Box
        position='absolute'
        inset='0'
        pointerEvents='none'
        bgGradient='linear(to-t, rgba(11,31,58,0.84) 0%, rgba(11,31,58,0.3) 46%, transparent 100%)'
      />
    </>
  )
}

const MediaFrame = ({
  src,
  alt = '',
  height = '100%',
  minHeight,
  objectPosition = 'center',
}) => {
  if (isProductImage(src)) {
    return (
      <Box
        width='100%'
        height={height}
        minHeight={minHeight}
        bg='navy.800'
        display='flex'
        alignItems='center'
        justifyContent='center'
        px={{ base: 8, md: 14 }}
        py={{ base: 8, md: 12 }}
        overflow='hidden'
      >
        <Box
          as='img'
          src={src}
          alt={alt}
          maxW='100%'
          maxH={{ base: '220px', md: '380px' }}
          width='auto'
          height='auto'
          objectFit='contain'
        />
      </Box>
    )
  }

  return (
    <Box
      position='relative'
      width='100%'
      height={height}
      minHeight={minHeight}
      overflow='hidden'
    >
      <Box
        as='img'
        src={src}
        alt={alt}
        position='absolute'
        inset='0'
        width='100%'
        height='100%'
        objectFit='cover'
        objectPosition={objectPosition}
      />
    </Box>
  )
}

export default MediaFrame
