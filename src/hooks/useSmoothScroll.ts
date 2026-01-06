import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let rafId: number | null = null;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.08);

      if (Math.abs(targetScrollY - currentScrollY) < 0.5) {
        currentScrollY = targetScrollY;
        rafId = null;
      } else {
        rafId = requestAnimationFrame(animate);
      }

      window.scrollTo(0, currentScrollY);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const scrollMultiplier = 0.7;
      const delta = e.deltaY * scrollMultiplier;

      targetScrollY += delta;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      const scrollAmount = 100;

      switch(e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          targetScrollY += scrollAmount;
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          targetScrollY -= scrollAmount;
          break;
        case 'Home':
          e.preventDefault();
          targetScrollY = 0;
          break;
        case 'End':
          e.preventDefault();
          targetScrollY = document.documentElement.scrollHeight;
          break;
        default:
          return;
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeydown);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
};
