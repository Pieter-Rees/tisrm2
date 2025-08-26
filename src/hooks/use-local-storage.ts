'use client';

import { safeJsonParse } from '@/lib/utils';
import { useCallback, useEffect, useState } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, SetValue<T>, () => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(safeJsonParse(item, initialValue));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    } finally {
      setIsInitialized(true);
    }
  }, [key]);

  const setValue: SetValue<T> = useCallback(
    value => {
      try {
        setStoredValue(prevValue => {
          const valueToStore =
            value instanceof Function ? value(prevValue) : value;

          if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          }

          return valueToStore;
        });
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key],
  );

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [isInitialized ? storedValue : initialValue, setValue, removeValue];
}
