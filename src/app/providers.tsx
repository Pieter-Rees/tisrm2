'use client';

import system from '@/app/theme';
import { Provider } from '@/components/ui/provider';
import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider value={system}>{children}</Provider>;
}
