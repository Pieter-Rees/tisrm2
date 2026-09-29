import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

const logos = [
  {
    src: '/logos/sbb.png',
    alt: 'SBB',
    width: 600,
    height: 600,
    displayHeight: 72,
  },
  {
    src: '/logos/grmc.png',
    alt: 'GRMC',
    width: 714,
    height: 178,
    displayHeight: 52,
  },
  {
    src: '/logos/kifid.png',
    alt: 'Kifid',
    width: 570,
    height: 150,
    displayHeight: 48,
  },
]

function renderLogo(logo) {
  return (
    <Image
      key={logo.src}
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      style={{ height: logo.displayHeight, width: 'auto' }}
    />
  )
}

export default function FooterLogos() {
  return (
    <Flex
      backgroundColor='stone.200'
      flexDirection={{ base: 'column', md: 'row' }}
      paddingY={{ base: 8, md: 10 }}
      gap={{ base: 8, md: 16 }}
      width='full'
      justifyContent='center'
      alignItems='center'
    >
      {logos.map(renderLogo)}
    </Flex>
  )
}
