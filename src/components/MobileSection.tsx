import React, { useRef, useState, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';
import Robot3D from './Robot3D';

const Robot3DContainer: React.FC = () => {
  return (
    <div className="absolute left-0 sm:left-[2%] lg:left-[4%] top-[60%] sm:top-[62%] -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[450px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] pointer-events-none z-20">
      <Robot3D />
    </div>
  );
};

const TypewriterText: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
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
      <motion.p 
        className="text-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed whitespace-pre-line"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {displayedText}
        <span className="inline-block w-[2px] h-[0.9em] bg-purple-400 ml-1 animate-pulse" style={{ verticalAlign: 'middle' }} />
      </motion.p>
      <motion.div
        className="mt-4 text-sm sm:text-base text-gray-500 font-light"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        Access your CRM anytime, anywhere
      </motion.div>
    </div>
  );
};

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="min-h-[450px] h-[450px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[750px] overflow-hidden relative bg-black">
      {/* Solid black background on the right side where the phone is */}
      <div className="absolute inset-0 bg-black pointer-events-none z-[1]" />
      
      {/* Animated gradient overlay - only on left side with grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 40%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Enhanced grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-[70%]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
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
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-0 w-[70%]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.25) 1px, transparent 1px)
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

      <div className="hidden sm:block">
        <Robot3DContainer />
      </div>

      {/* Solid black overlay on right side for complete darkness around phone */}
      <div className="absolute top-0 bottom-0 right-0 w-[50%] bg-black pointer-events-none z-[8]" />
      
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden">
        <div className="relative w-full h-full flex items-end justify-end pr-0 pb-0">
          <TypewriterText />
          
          {/* Phone container with enhanced effects */}
          <motion.div 
            className="relative h-[50%] sm:h-[55%] md:h-[58%] lg:h-[60%]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Outer glow rings */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, rgba(124, 58, 237, 0.2) 30%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
            </motion.div>

            {/* Inner glow */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(167, 139, 250, 0.3) 0%, transparent 60%)',
                  filter: 'blur(25px)',
                }}
              />
            </motion.div>

            {/* Light beam effect */}
            <motion.div
              className="absolute top-[10%] left-[-20%] w-[200%] h-[2px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -z-5"
              animate={{
                opacity: [0, 0.6, 0],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <img
              src="/new_one,_hopefully_this_works.png"
              alt="Mobile app showcase"
              className="h-full w-auto object-contain drop-shadow-2xl relative z-10"
            />
            
            {/* Edge fade with enhanced black blending on all sides */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: `
                  linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 5%, transparent 12%),
                  linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 5%, transparent 12%),
                  linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 8%, transparent 20%),
                  linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 10%, transparent 25%)
                `
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
