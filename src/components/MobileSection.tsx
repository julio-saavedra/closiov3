import React from 'react';

const AngularLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 700"
      className="absolute left-0 top-0 h-full w-auto opacity-90"
      style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' }}
      preserveAspectRatio="xMinYMid slice"
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
        d="M 30 0
           L 30 200
           Q 30 280, 110 280
           L 350 280
           Q 430 280, 430 360
           L 430 700"
        fill="none"
        stroke="url(#angularGradient)"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#lineGlow)"
      />
      <path
        d="M 30 0
           L 30 200
           Q 30 280, 110 280
           L 350 280
           Q 430 280, 430 360
           L 430 700"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="36"
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
            src="/purple_pink_gradient_mobile_application_presentation_(2).png"
            alt="Closio mobile application showcasing dashboard, leaderboard, and login screens"
            className="h-[85%] w-auto max-w-none object-contain drop-shadow-2xl translate-x-[1%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
