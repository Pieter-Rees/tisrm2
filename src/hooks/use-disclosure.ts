/**
 * Modern disclosure hook for modal/dropdown state management
 * @fileoverview Reusable hook for open/close state management
 */

'use client';

import { useState, useCallback } from 'react';

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

/**
 * Custom hook for managing disclosure state (modals, dropdowns, etc.)
 * @param defaultIsOpen - Initial open state
 * @returns Disclosure state and controls
 */
export function useDisclosure(defaultIsOpen = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
