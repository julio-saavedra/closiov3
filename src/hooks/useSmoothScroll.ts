import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll with buttery smooth, slower scroll settings
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7,
      smoothTouch: false,
      touchMultiplier: 1.8,
      infinite: false,
      syncTouch: false,
      lerp: 0.08,
    });

    // Expose Lenis instance globally for Framer Motion integration
    (window as any).lenis = lenis;

    // Optimized Lenis RAF loop with frame skipping for performance
    let rafId: number;
    let lastTime = 0;
    const targetFPS = 60;
    const frameTime = 1000 / targetFPS;
    
    function raf(time: number) {
      // Throttle to maintain smooth 60fps without overworking
      const elapsed = time - lastTime;
      
      if (elapsed >= frameTime) {
        lenis.raf(time);
        lastTime = time - (elapsed % frameTime);
      }
      
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Handle route changes - reset scroll position
    const handleResetScroll = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('resetSmoothScroll', handleResetScroll);

    // Cleanup - cancel RAF before destroying Lenis
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resetSmoothScroll', handleResetScroll);
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);
};
