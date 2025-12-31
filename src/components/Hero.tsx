import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrambleOnView } from '@/hooks/useScrambleOnView';

const HeroWhiteLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 700"
      className="absolute left-0 top-0 h-full w-[30vw] pointer-events-none"
      preserveAspectRatio="none"
      style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.25))' }}
    >
      <defs>
        <filter id="heroWhiteGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 440 750 L 440 80 Q 440 10, 370 10 L -50 10"
        fill="none"
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 440 750 L 440 80 Q 440 10, 370 10 L -50 10"
        fill="none"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroWhiteGlow)"
      />
    </svg>
  );
};

const HeroDrainLines: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1600 700"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="heroGlowWhite">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="heroGlowTeal">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="heroGlowPink">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="heroGlowBlack">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M 80 700 L 80 420 Q 80 350, 150 350 L 350 350 Q 420 350, 420 280 L 420 -100"
        fill="none"
        stroke="rgba(106, 212, 242, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 80 700 L 80 420 Q 80 350, 150 350 L 350 350 Q 420 350, 420 280 L 420 -100"
        fill="none"
        stroke="#6ad4f2"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowTeal)"
      />

      <path
        d="M 320 700 L 320 200 Q 320 130, 250 130 L -100 130"
        fill="none"
        stroke="rgba(30, 30, 30, 0.25)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 320 700 L 320 200 Q 320 130, 250 130 L -100 130"
        fill="none"
        stroke="rgba(50, 50, 50, 0.95)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowBlack)"
      />

      <path
        d="M 480 700 L 480 300 Q 480 230, 550 230 L 680 230 Q 750 230, 750 160 L 750 -100"
        fill="none"
        stroke="rgba(213, 147, 192, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 480 700 L 480 300 Q 480 230, 550 230 L 680 230 Q 750 230, 750 160 L 750 -100"
        fill="none"
        stroke="#d593c0"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowPink)"
      />

      <path
        d="M 1450 700 L 1450 400 Q 1450 330, 1520 330 L 1700 330"
        fill="none"
        stroke="rgba(30, 30, 30, 0.25)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 1450 700 L 1450 400 Q 1450 330, 1520 330 L 1700 330"
        fill="none"
        stroke="rgba(50, 50, 50, 0.95)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowBlack)"
      />

      <path
        d="M 1550 700 L 1550 200 Q 1550 130, 1480 130 L 1350 130 Q 1280 130, 1280 60 L 1280 -100"
        fill="none"
        stroke="rgba(106, 212, 242, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 1550 700 L 1550 200 Q 1550 130, 1480 130 L 1350 130 Q 1280 130, 1280 60 L 1280 -100"
        fill="none"
        stroke="#6ad4f2"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowTeal)"
      />

      <path
        d="M 1380 700 L 1380 400 Q 1380 330, 1450 330 L 1700 330"
        fill="none"
        stroke="rgba(213, 147, 192, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 1380 700 L 1380 400 Q 1380 330, 1450 330 L 1700 330"
        fill="none"
        stroke="#d593c0"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowPink)"
      />
    </svg>
  );
};

const Hero: React.FC = () => {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useScrambleOnView(line1Ref, "Close More.", {
    duration: 1.3,
    revealDelay: 0.12,
    chars: "upperAndLowerCase",
  });

  useScrambleOnView(line2Ref, "Close Smarter.", {
    duration: 1.3,
    revealDelay: 0.12,
    chars: "upperAndLowerCase",
  });

  return (
    <section id="hero" className="min-h-[70vh] w-full text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pt-36 sm:pb-16 relative overflow-hidden">
      <HeroWhiteLine />
      <div className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 lg:justify-center">
          <div className="lg:w-[15%]"></div>
          <div className="space-y-4 sm:space-y-6 flex items-center justify-center flex-col text-center lg:text-right lg:items-end">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-600 font-medium">
              CLOS<em className="italic">I</em>O WAS BUILT FOR YOU
            </span>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight max-w-4xl leading-[1.05] -tracking-[0.02em] overflow-hidden">
              <motion.span
                ref={line1Ref}
                className="inline-block"
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Close More.
              </motion.span>
              <br />
              <motion.span
                ref={line2Ref}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d593c0] to-[#6ad4f2]"
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              >
                Close Smarter.
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed px-4 sm:px-0">
              The life insurance CRM that takes you from lead to issue paid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
