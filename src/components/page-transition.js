'use client'

import { Box } from '@chakra-ui/react'

const PageTransition = ({ children }) => {
  return (
    <Box
      opacity={1}
      animation="pageIn 0.55s ease-out"
      sx={{
        '@keyframes pageIn': {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {children}
    </Box>
  )
}

export default PageTransition
