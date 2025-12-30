import React from 'react';

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden relative">
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
