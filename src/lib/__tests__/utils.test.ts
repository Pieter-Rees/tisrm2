import {
  cn,
  formatPhoneNumber,
  capitalize,
  truncate,
  debounce,
  isValidEmail,
  isValidDutchPostalCode,
  generateId,
  safeJsonParse,
  formatFileSize,
} from '../utils';

describe('Utility Functions', () => {
  describe('cn (className utility)', () => {
    it('should combine class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
      expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3');
      expect(cn('class1', null, undefined, 'class2')).toBe('class1 class2');
    });

    it('should handle conditional classes', () => {
      expect(cn('base', true && 'active', false && 'inactive')).toBe('base active');
      expect(cn('base', false && 'hidden')).toBe('base');
    });
  });

  describe('formatPhoneNumber', () => {
    it('should format Dutch phone numbers correctly', () => {
      expect(formatPhoneNumber('31206368191')).toBe('+31 20 636 8191');
      expect(formatPhoneNumber('+31206368191')).toBe('+31 20 636 8191');
      expect(formatPhoneNumber('0206368191')).toBe('020-636-8191');
    });

    it('should handle different input formats', () => {
      expect(formatPhoneNumber('020 636 8191')).toBe('020-636-8191');
      expect(formatPhoneNumber('020-636-8191')).toBe('020-636-8191');
      expect(formatPhoneNumber('abc020def636ghi8191jkl')).toBe('020-636-8191');
    });

    it('should return original input for unrecognized formats', () => {
      expect(formatPhoneNumber('12345')).toBe('12345');
      expect(formatPhoneNumber('invalid')).toBe('invalid');
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter of string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
      expect(capitalize('a')).toBe('A');
    });

    it('should handle empty and single character strings', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize('a')).toBe('A');
    });

    it('should handle already capitalized strings', () => {
      expect(capitalize('Hello')).toBe('Hello');
      expect(capitalize('WORLD')).toBe('WORLD');
    });
  });

  describe('truncate', () => {
    it('should truncate strings longer than specified length', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
      expect(truncate('This is a long string', 10)).toBe('This is...');
    });

    it('should not truncate strings shorter than specified length', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
      expect(truncate('', 5)).toBe('');
    });

    it('should handle edge cases', () => {
      expect(truncate('Hello', 5)).toBe('Hello');
      expect(truncate('Hello', 4)).toBe('H...');
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should debounce function calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('arg1');
      debouncedFn('arg2');
      debouncedFn('arg3');

      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('arg3');
    });

    it('should reset timer on subsequent calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('arg1');
      jest.advanceTimersByTime(50);
      debouncedFn('arg2');
      jest.advanceTimersByTime(50);

      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(50);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('arg2');
    });
  });

  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.org')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test@.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidDutchPostalCode', () => {
    it('should validate correct Dutch postal codes', () => {
      expect(isValidDutchPostalCode('1011 PZ')).toBe(true);
      expect(isValidDutchPostalCode('1100AW')).toBe(true);
      expect(isValidDutchPostalCode('1234 AB')).toBe(true);
      expect(isValidDutchPostalCode('9999 ZZ')).toBe(true);
    });

    it('should reject invalid Dutch postal codes', () => {
      expect(isValidDutchPostalCode('0000 AB')).toBe(false); // Starts with 0
      expect(isValidDutchPostalCode('1234')).toBe(false); // Missing letters
      expect(isValidDutchPostalCode('ABCD 12')).toBe(false); // Wrong format
      expect(isValidDutchPostalCode('')).toBe(false);
    });
  });

  describe('generateId', () => {
    it('should generate unique IDs with default prefix', () => {
      const id1 = generateId();
      const id2 = generateId();

      expect(id1).toMatch(/^id-[a-z0-9]{7}$/);
      expect(id2).toMatch(/^id-[a-z0-9]{7}$/);
      expect(id1).not.toBe(id2);
    });

    it('should generate unique IDs with custom prefix', () => {
      const id1 = generateId('test');
      const id2 = generateId('user');

      expect(id1).toMatch(/^test-[a-z0-9]{7}$/);
      expect(id2).toMatch(/^user-[a-z0-9]{7}$/);
    });
  });

  describe('safeJsonParse', () => {
    it('should parse valid JSON', () => {
      expect(safeJsonParse('{"key": "value"}', {})).toEqual({ key: 'value' });
      expect(safeJsonParse('[1, 2, 3]', [])).toEqual([1, 2, 3]);
      expect(safeJsonParse('"string"', '')).toBe('string');
    });

    it('should return fallback for invalid JSON', () => {
      const fallback = { default: 'value' };
      expect(safeJsonParse('invalid json', fallback)).toBe(fallback);
      expect(safeJsonParse('{key: value}', fallback)).toBe(fallback);
      expect(safeJsonParse('', fallback)).toBe(fallback);
    });
  });

  describe('formatFileSize', () => {
    it('should format file sizes correctly', () => {
      expect(formatFileSize(0)).toBe('0 Bytes');
      expect(formatFileSize(1024)).toBe('1 KB');
      expect(formatFileSize(1048576)).toBe('1 MB');
      expect(formatFileSize(1073741824)).toBe('1 GB');
    });

    it('should handle decimal values', () => {
      expect(formatFileSize(1500)).toBe('1.46 KB');
      expect(formatFileSize(1572864)).toBe('1.5 MB');
    });

    it('should handle edge cases', () => {
      expect(formatFileSize(1)).toBe('1 Bytes');
      expect(formatFileSize(1023)).toBe('1023 Bytes');
    });
  });
});
