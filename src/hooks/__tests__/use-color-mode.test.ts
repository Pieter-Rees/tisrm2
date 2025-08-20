import { renderHook, act } from '@testing-library/react';
import { useColorMode, useColorModeValue } from '../use-color-mode';

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

const mockUseTheme = require('next-themes').useTheme;

describe('useColorMode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return color mode from resolved theme when no forced theme', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'dark',
      setTheme: jest.fn(),
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorMode());

    expect(result.current.colorMode).toBe('dark');
  });

  it('should return forced theme when available', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'light',
      setTheme: jest.fn(),
      forcedTheme: 'dark',
    });

    const { result } = renderHook(() => useColorMode());

    expect(result.current.colorMode).toBe('dark');
  });

  it('should provide setColorMode function', () => {
    const mockSetTheme = jest.fn();
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'light',
      setTheme: mockSetTheme,
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorMode());

    act(() => {
      result.current.setColorMode('dark');
    });

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('should toggle between light and dark themes', () => {
    const mockSetTheme = jest.fn();
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'light',
      setTheme: mockSetTheme,
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorMode());

    act(() => {
      result.current.toggleColorMode();
    });

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('should toggle from dark to light theme', () => {
    const mockSetTheme = jest.fn();
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'dark',
      setTheme: mockSetTheme,
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorMode());

    act(() => {
      result.current.toggleColorMode();
    });

    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('should handle undefined resolved theme', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: undefined,
      setTheme: jest.fn(),
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorMode());

    expect(result.current.colorMode).toBeUndefined();
  });

  it('should handle system theme preference', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'system',
      setTheme: jest.fn(),
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorMode());

    expect(result.current.colorMode).toBe('system');
  });
});

describe('useColorModeValue', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return light value when color mode is light', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'light',
      setTheme: jest.fn(),
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorModeValue('light-value', 'dark-value'));

    expect(result.current).toBe('light-value');
  });

  it('should return dark value when color mode is dark', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'dark',
      setTheme: jest.fn(),
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorModeValue('light-value', 'dark-value'));

    expect(result.current).toBe('dark-value');
  });

  it('should return light value when color mode is undefined', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: undefined,
      setTheme: jest.fn(),
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorModeValue('light-value', 'dark-value'));

    expect(result.current).toBe('light-value');
  });

  it('should work with different value types', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'dark',
      setTheme: jest.fn(),
      forcedTheme: undefined,
    });

    const { result: stringResult } = renderHook(() => 
      useColorModeValue('light-string', 'dark-string')
    );
    expect(stringResult.current).toBe('dark-string');

    const { result: numberResult } = renderHook(() => 
      useColorModeValue(100, 200)
    );
    expect(numberResult.current).toBe(200);

    const { result: objectResult } = renderHook(() => 
      useColorModeValue({ light: true }, { dark: true })
    );
    expect(objectResult.current).toEqual({ dark: true });
  });

  it('should work with forced theme', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'light',
      setTheme: jest.fn(),
      forcedTheme: 'dark',
    });

    const { result } = renderHook(() => useColorModeValue('light-value', 'dark-value'));

    expect(result.current).toBe('dark-value');
  });

  it('should handle system theme preference', () => {
    mockUseTheme.mockReturnValue({
      resolvedTheme: 'system',
      setTheme: jest.fn(),
      forcedTheme: undefined,
    });

    const { result } = renderHook(() => useColorModeValue('light-value', 'dark-value'));

    expect(result.current).toBe('light-value');
  });
});
