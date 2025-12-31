import React from 'react';

const AngularLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 800 700"
      className="absolute left-0 top-0 h-full w-[60%] opacity-90"
      style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' }}
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <linearGradient id="angularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
          <stop offset="10%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="90%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </linearGradient>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 50 0
           L 50 200
           Q 50 280, 130 280
           L 380 280
           Q 460 280, 460 360
           L 460 700"
        fill="none"
        stroke="url(#angularGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#lineGlow)"
      />
      <path
        d="M 50 0
           L 50 200
           Q 50 280, 130 280
           L 380 280
           Q 460 280, 460 360
           L 460 700"
        fill="none"
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-sm"
      />
    </svg>
  );
};

const IOImprint: React.FC = () => {
  return (
    <div className="absolute left-12 sm:left-16 lg:left-24 top-[58%] -translate-y-1/2 flex items-baseline gap-4 sm:gap-6 lg:gap-8">
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
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-full bg-gradient-to-l from-[#2C66FF]/10 to-transparent blur-3xl opacity-40" />
        <div className="relative w-full h-full flex items-end justify-end">
          <img
            src="/new_mobile_compatible-_closio_website.png"
            alt="Closio mobile application showcasing dashboard, leaderboard, and login screens"
            className="h-[95%] w-auto max-w-none object-contain drop-shadow-2xl translate-x-[1%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
