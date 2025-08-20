'use client';

import { Provider } from '@/components/ui/provider';
import type { ReactNode } from 'react';
import system from './theme';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider value={system}>{children}</Provider>;
}
