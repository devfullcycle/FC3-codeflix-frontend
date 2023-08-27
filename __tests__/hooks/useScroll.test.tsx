import { useScroll } from '@/app/hooks/useScroll';
import { renderHook, act } from '@testing-library/react';

describe('useScroll', () => {
  it('should respond to scroll events', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);

  });
});
