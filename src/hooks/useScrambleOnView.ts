import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type Options = {
  duration?: number;
  revealDelay?: number;
  chars?: string;
};

export function useScrambleOnView(
  elRef: RefObject<HTMLElement>,
  finalText: string,
  options: Options = {}
) {
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    el.textContent = finalText;

    const { duration = 1.2, revealDelay = 0.15, chars = "upperAndLowerCase" } = options;

    let played = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played) return;
        played = true;

        gsap.fromTo(
          el,
          { opacity: 1 },
          {
            duration,
            ease: "power2.out",
            scrambleText: {
              text: finalText,
              chars,
              revealDelay,
              tweenLength: true,
            },
            overwrite: "auto",
          }
        );

        io.disconnect();
      },
      { threshold: 0.35 }
    );

    io.observe(el);

    const onEnter = () => {
      gsap.to(el, {
        duration: 0.9,
        ease: "power2.out",
        scrambleText: {
          text: finalText,
          chars,
          revealDelay: 0.05,
          tweenLength: true,
        },
        overwrite: "auto",
      });
    };

    el.addEventListener("mouseenter", onEnter);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      io.disconnect();
    };
  }, [elRef, finalText, options.duration, options.revealDelay, options.chars]);
}
