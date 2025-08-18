'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Offerte() {
  const router = useRouter();

  useEffect(() => {
    router.push('/offerte/stap-1');
  }, [router]);

  return null;
}