import React from 'react';
import Robot3D from './Robot3D';

const Robot3DContainer: React.FC = () => {
  return (
    <div className="absolute left-0 sm:left-[2%] lg:left-[4%] top-[58%] sm:top-[62%] -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] pointer-events-none overflow-hidden z-10">
      <Robot3D />
    </div>
  );
};

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="min-h-[450px] h-[450px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[750px] overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div
          className="absolute top-0 bottom-0 left-0 w-[70%]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: `
              linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 65%)
            `,
            WebkitMaskImage: `
              linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 65%)
            `,
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-0 w-[70%]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: '150px 150px',
            maskImage: `
              linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 35%, transparent 60%)
            `,
            WebkitMaskImage: `
              linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 35%, transparent 60%)
            `,
          }}
        />
      </div>
      <Robot3DContainer />
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden">
        <div className="relative w-full h-full flex items-end justify-end pr-0 pb-0">
          <div className="absolute right-8 sm:right-12 md:right-16 lg:right-24 top-[12%] text-right z-20">
            <p className="text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
              / Experience the power,<br />
              Mobile friendly
            </p>
          </div>
          <img
            src="/new_one,_hopefully_this_works.png"
            alt="Mobile app showcase"
            className="h-[60%] sm:h-[65%] md:h-[68%] lg:h-[70%] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
