'use client';

import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useColorMode } from '@/hooks/use-color-mode';
import type { ReactNode, ComponentProps } from 'react';

interface ColorModeProviderProps {
  children: ReactNode;
  attribute?: 'class' | 'data-theme' | string;
  disableTransitionOnChange?: boolean;
}

export function ColorModeProvider({ children, attribute = 'class', ...props }: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute={attribute as any} disableTransitionOnChange {...props}>
      {children}
    </ThemeProvider>
  );
}



export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />;
}

export const ColorModeButton = React.forwardRef<HTMLButtonElement, ComponentProps<typeof IconButton>>(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode();
    return (
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
          size="sm"
          ref={ref}
          {...props}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    );
  }
);

export const LightMode = React.forwardRef<HTMLSpanElement, ComponentProps<typeof Span>>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        ref={ref}
        {...props}
      />
    );
  }
);

export const DarkMode = React.forwardRef<HTMLSpanElement, ComponentProps<typeof Span>>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        ref={ref}
        {...props}
      />
    );
  }
);

// Export hooks at end of file to avoid fast refresh warnings
export { useColorMode, useColorModeValue } from '@/hooks/use-color-mode';
