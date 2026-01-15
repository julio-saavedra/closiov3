import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Use native smooth scrolling for all devices
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle route changes - reset scroll position
    const handleResetScroll = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('resetSmoothScroll', handleResetScroll);

    return () => {
      window.removeEventListener('resetSmoothScroll', handleResetScroll);
    };
  }, []);
};
