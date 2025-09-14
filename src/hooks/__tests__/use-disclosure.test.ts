import { renderHook, act } from '@testing-library/react';
import { useDisclosure } from '@/hooks/use-disclosure';

describe('useDisclosure', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
  });

  it('should initialize with custom default value', () => {
    const { result } = renderHook(() => useDisclosure(true));
    expect(result.current.isOpen).toBe(true);
  });

  it('should open when onOpen is called', () => {
    const { result } = renderHook(() => useDisclosure(false));

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should close when onClose is called', () => {
    const { result } = renderHook(() => useDisclosure(true));

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should toggle when onToggle is called', () => {
    const { result } = renderHook(() => useDisclosure(false));

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should provide all required methods', () => {
    const { result } = renderHook(() => useDisclosure());

    expect(result.current).toHaveProperty('isOpen');
    expect(result.current).toHaveProperty('onOpen');
    expect(result.current).toHaveProperty('onClose');
    expect(result.current).toHaveProperty('onToggle');

    expect(typeof result.current.onOpen).toBe('function');
    expect(typeof result.current.onClose).toBe('function');
    expect(typeof result.current.onToggle).toBe('function');
  });

  it('should maintain state between renders', () => {
    const { result, rerender } = renderHook(() => useDisclosure(false));

    act(() => {
      result.current.onOpen();
    });

    rerender();
    expect(result.current.isOpen).toBe(true);
  });

  it('should handle multiple state changes', () => {
    const { result } = renderHook(() => useDisclosure(false));

    act(() => {
      result.current.onOpen();
      result.current.onClose();
      result.current.onOpen();
    });

    expect(result.current.isOpen).toBe(true);
  });
});
