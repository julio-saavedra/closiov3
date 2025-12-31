import React from 'react';

const AngularLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 800 700"
      className="absolute left-0 top-0 h-full w-[60%]"
      style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.25))' }}
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <linearGradient id="angularGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
          <stop offset="5%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="95%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </linearGradient>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 50 0
           L 50 160
           Q 50 240, 130 240
           L 260 240
           Q 340 240, 340 320
           L 340 700"
        fill="none"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#lineGlow)"
      />
      <path
        d="M 50 0
           L 50 160
           Q 50 240, 130 240
           L 260 240
           Q 340 240, 340 320
           L 340 700"
        fill="none"
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
    </svg>
  );
};

const IOImprint: React.FC = () => {
  return (
    <div className="absolute left-12 sm:left-16 lg:left-24 top-[75%] -translate-y-1/2 flex items-baseline gap-4 sm:gap-6 lg:gap-8">
      <span
        className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold italic text-transparent"
        style={{
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.22)',
          letterSpacing: '-0.02em'
        }}
      >
        I
      </span>
      <span
        className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-white/[0.15]"
        style={{
          letterSpacing: '-0.02em'
        }}
      >
        O
      </span>
    </div>
  );
};

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden relative">
      <AngularLine />
      <IOImprint />
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="relative w-full h-full flex items-end justify-end">
          <img
            src="/new_mobile_compatible-_closio_website.png"
            alt="Closio mobile application showcasing dashboard, leaderboard, and login screens"
            className="h-[90%] sm:h-[85%] lg:h-[82%] w-auto max-w-none object-contain drop-shadow-2xl translate-x-[1%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
