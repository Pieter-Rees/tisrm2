import { type ClassValue, clsx } from 'clsx';

export const cn = (...inputs: ClassValue[]): string => clsx(inputs);

export const formatPhoneNumber = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  
  if (digits.startsWith('31')) {
    const national = digits.substring(2);
    return `+31 ${national.substring(0, 2)} ${national.substring(2, 5)} ${national.substring(5)}`;
  }
  
  if (digits.length === 10) {
    return `${digits.substring(0, 3)}-${digits.substring(3, 6)}-${digits.substring(6)}`;
  }
  
  return phone;
};

export const capitalize = (str: string): string => 
  str.charAt(0).toUpperCase() + str.slice(1);

export const truncate = (str: string, length: number): string => 
  str.length <= length ? str : `${str.substring(0, length - 3)}...`;

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const isValidEmail = (email: string): boolean => 
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidDutchPostalCode = (postalCode: string): boolean => 
  /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(postalCode);

export const generateId = (prefix = 'id'): string => 
  `${prefix}-${Math.random().toString(36).substring(2, 9)}`;

export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
};

export const formatFileSize = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${Math.round(bytes / Math.pow(1024, i) * 100) / 100} ${sizes[i]}`;
};
