import React, { useRef } from 'react';
import { useScrambleOnView } from '@/hooks/useScrambleOnView';

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
      <div className="w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 lg:flex-none"></div>
          <div className="space-y-4 sm:space-y-6 flex items-center justify-center flex-col text-center lg:text-right lg:items-end flex-1">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight max-w-4xl leading-[1.05] -tracking-[0.02em]">
              <span ref={line1Ref} className="inline-block">
                Close More.
              </span>
              <br />
              <span
                ref={line2Ref}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]"
              >
                Close Smarter.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed px-4 sm:px-0">
              The proprietary CRM built exclusively for the life-insurance industry—taking you from lead to issue paid with unprecedented clarity and control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
