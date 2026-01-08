import React from 'react';
import Robot3D from './Robot3D';

const Robot3DContainer: React.FC = () => {
  return (
    <div className="absolute left-0 sm:left-[2%] lg:left-[4%] top-[58%] sm:top-[62%] -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] pointer-events-none overflow-hidden">
      <Robot3D />
    </div>
  );
};

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="min-h-[450px] h-[450px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[750px] overflow-hidden relative">
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
            className="h-[75%] sm:h-[80%] md:h-[85%] lg:h-[90%] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
