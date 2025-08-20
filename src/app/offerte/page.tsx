'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Offerte() {
  const router = useRouter();

  useEffect(() => {
    router.push('/offerte/stap-1');
  }, [router]);

  return null;
}
