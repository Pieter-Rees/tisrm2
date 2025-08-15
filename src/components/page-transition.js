'use client'

import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const PageTransition = ({ children, delay = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Box
      opacity={isVisible ? 1 : 0}
      transform={`translateY(${isVisible ? 0 : 20}px)`}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "ease-out"
      }}
    >
      {children}
    </Box>
  );
};

export default PageTransition;
