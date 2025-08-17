'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider({ value = defaultSystem, ...props }) {
  return (
    <ChakraProvider value={value}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
