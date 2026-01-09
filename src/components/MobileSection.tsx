import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Robot3D from './Robot3D';

const Robot3DContainer: React.FC = () => {
  return (
    <div className="absolute left-0 sm:left-[2%] lg:left-[4%] top-[58%] sm:top-[62%] -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] pointer-events-none overflow-hidden z-10">
      <Robot3D />
    </div>
  );
};

const TypewriterText: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '/ Experience the power,\nMobile friendly';

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={ref} className="absolute right-8 sm:right-12 md:right-16 lg:right-24 top-[12%] text-right z-20">
      <p className="text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed whitespace-pre-line">
        {displayedText}
        <span className="inline-block w-[2px] h-[0.9em] bg-gray-400 ml-1 animate-pulse" style={{ verticalAlign: 'middle' }} />
      </p>
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
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, transparent 100%),
              linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 65%)
            `,
            WebkitMaskImage: `
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, transparent 100%),
              linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 65%)
            `,
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
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
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 85%, transparent 100%),
              linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 35%, transparent 60%)
            `,
            WebkitMaskImage: `
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 85%, transparent 100%),
              linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 35%, transparent 60%)
            `,
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        />
      </div>
      <Robot3DContainer />
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden">
        <div className="relative w-full h-full flex items-end justify-end pr-0 pb-0">
          <TypewriterText />
          <div className="relative h-[60%] sm:h-[65%] md:h-[68%] lg:h-[70%]">
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                boxShadow: 'inset 0 0 80px 50px black, inset 0 0 120px 80px rgba(0,0,0,0.9)'
              }}
            />
            <img
              src="/new_one,_hopefully_this_works.png"
              alt="Mobile app showcase"
              className="h-full w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
