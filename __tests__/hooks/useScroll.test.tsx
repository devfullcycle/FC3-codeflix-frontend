import { useScroll } from '@/app/hooks/useScroll';
import { renderHook, waitFor, act } from '@testing-library/react';

describe('useScroll', () => {
  it('should respond to scroll events', async () => {
    // set up the hook
    const { result } = renderHook(() => useScroll());

    // simulate a scroll event
    act(() => {
      global.window.scrollY = 500;
      global.window.dispatchEvent(new Event('scroll'));
    });

    // wait for the hook to update
    await waitFor(() => expect(result.current).toBeTruthy());

    // simulate a scroll event to top
    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });

    // wait for the hook to update
    await waitFor(() => expect(result.current).toBeFalsy());
  });
});
