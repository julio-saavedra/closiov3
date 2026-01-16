import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation({
  threshold = 0.15,
  rootMargin = '-50px 0px -50px 0px',
  triggerOnce = false
}: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const rafRef = useRef<number>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce && hasAnimated) return;

        // Cancel any pending updates
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }

        if (entry.isIntersecting) {
          // Use RAF for smooth state updates
          rafRef.current = requestAnimationFrame(() => {
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) setHasAnimated(true);
            }, 50);
          });
        } else {
          if (!triggerOnce) {
            rafRef.current = requestAnimationFrame(() => {
              timeoutRef.current = setTimeout(() => {
                setIsVisible(false);
              }, 100);
            });
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return { ref, isVisible };
}
