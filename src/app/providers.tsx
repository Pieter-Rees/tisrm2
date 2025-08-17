'use client';

import { Provider } from '@/components/ui/provider';
import system from './theme';
import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider value={system}>{children}</Provider>;
}