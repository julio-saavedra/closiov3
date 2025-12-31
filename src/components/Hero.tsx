import React, { useRef } from 'react';
import { useScrambleOnView } from '@/hooks/useScrambleOnView';

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
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="heroGlowPink">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
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
        d="M 120 700 L 120 280 Q 120 230, 70 230 L -100 230"
        fill="none"
        stroke="rgba(106, 212, 242, 0.12)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 120 700 L 120 280 Q 120 230, 70 230 L -100 230"
        fill="none"
        stroke="#6ad4f2"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowTeal)"
      />

      <path
        d="M 320 700 L 320 160 Q 320 110, 270 110 L -100 110"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 320 700 L 320 160 Q 320 110, 270 110 L -100 110"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowWhite)"
      />

      <path
        d="M 520 700 L 520 200 Q 520 150, 470 150 L -100 150"
        fill="none"
        stroke="rgba(30, 30, 30, 0.3)"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 520 700 L 520 200 Q 520 150, 470 150 L -100 150"
        fill="none"
        stroke="rgba(40, 40, 40, 0.9)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowBlack)"
      />

      <path
        d="M 720 700 L 720 120 Q 720 70, 770 70 L 1700 70"
        fill="none"
        stroke="rgba(213, 147, 192, 0.12)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 720 700 L 720 120 Q 720 70, 770 70 L 1700 70"
        fill="none"
        stroke="#d593c0"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowPink)"
      />

      <path
        d="M 920 700 L 920 180 Q 920 130, 970 130 L 1700 130"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 920 700 L 920 180 Q 920 130, 970 130 L 1700 130"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowWhite)"
      />

      <path
        d="M 1180 700 L 1180 240 Q 1180 190, 1230 190 L 1700 190"
        fill="none"
        stroke="rgba(30, 30, 30, 0.3)"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 1180 700 L 1180 240 Q 1180 190, 1230 190 L 1700 190"
        fill="none"
        stroke="rgba(40, 40, 40, 0.9)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowBlack)"
      />

      <path
        d="M 1380 700 L 1380 300 Q 1380 250, 1430 250 L 1700 250"
        fill="none"
        stroke="rgba(106, 212, 242, 0.12)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
      <path
        d="M 1380 700 L 1380 300 Q 1380 250, 1430 250 L 1700 250"
        fill="none"
        stroke="#6ad4f2"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#heroGlowTeal)"
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
    <section id="hero" className="min-h-[70vh] w-full text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative overflow-hidden">
      <HeroDrainLines />
      <div className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 lg:flex-none"></div>
          <div className="space-y-4 sm:space-y-6 flex items-center justify-center flex-col text-center lg:text-right lg:items-end flex-1">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-600 font-medium">
              CLOS<em className="italic">I</em>O WAS BUILT FOR YOU
            </span>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight max-w-4xl leading-[1.05] -tracking-[0.02em]">
              <span ref={line1Ref} className="inline-block">
                Close More.
              </span>
              <br />
              <span
                ref={line2Ref}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d593c0] to-[#6ad4f2]"
              >
                Close Smarter.
              </span>
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
