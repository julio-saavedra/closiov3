import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let rafId: number | null = null;
    let isScrollingProgrammatically = false;
    let lastUserInteraction = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.045);

      if (Math.abs(targetScrollY - currentScrollY) < 0.5) {
        currentScrollY = targetScrollY;
        rafId = null;
        isScrollingProgrammatically = false;
      } else {
        rafId = requestAnimationFrame(animate);
      }

      isScrollingProgrammatically = true;
      window.scrollTo(0, currentScrollY);
      isScrollingProgrammatically = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      lastUserInteraction = Date.now();

      const scrollMultiplier = 0.55;
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
          lastUserInteraction = Date.now();
          targetScrollY += scrollAmount;
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          lastUserInteraction = Date.now();
          targetScrollY -= scrollAmount;
          break;
        case 'Home':
          e.preventDefault();
          lastUserInteraction = Date.now();
          targetScrollY = 0;
          break;
        case 'End':
          e.preventDefault();
          lastUserInteraction = Date.now();
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

    const syncScrollPosition = () => {
      if (isScrollingProgrammatically) {
        return;
      }

      const timeSinceLastInteraction = Date.now() - lastUserInteraction;

      if (timeSinceLastInteraction > 100 && !rafId) {
        const newScroll = window.scrollY;
        if (Math.abs(newScroll - targetScrollY) > 10) {
          targetScrollY = newScroll;
          currentScrollY = newScroll;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('scroll', syncScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('scroll', syncScrollPosition);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
};
