import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GridPattern: React.FC = () => {
  return (
    <div
      className="absolute top-0 right-0 w-72 h-72 pointer-events-none overflow-hidden"
      style={{
        maskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
      }}
    >
      <svg width="288" height="288" className="opacity-50">
        <defs>
          <pattern id="banner-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="288" height="288" fill="url(#banner-grid-pattern)" />
      </svg>
    </div>
  );
};

const TopGlow: React.FC = () => {
  const [opacity, setOpacity] = useState(0.6);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prev) => {
        const newOpacity = prev + 0.015;
        return newOpacity > 1 ? 0.6 : newOpacity;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-56 blur-3xl transition-opacity duration-100"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, ${opacity * 0.5}), transparent 70%)`,
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-40 blur-2xl transition-opacity duration-100"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, ${opacity * 0.4}), transparent 70%)`,
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-24 blur-xl transition-opacity duration-100"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, ${opacity * 0.6}), transparent 70%)`,
        }}
      />
    </div>
  );
};

const BottomGlow: React.FC = () => (
  <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 blur-3xl"
      style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.5), transparent 70%)',
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-28 blur-2xl"
      style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.4), transparent 70%)',
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-16 blur-xl"
      style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.3), transparent 70%)',
      }}
    />
  </div>
);

const OverlappingBanner: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  return (
    <div className="relative z-10 -mt-16 mb-[-8rem] px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        ref={ref}
        className="relative w-full rounded-3xl overflow-hidden backdrop-blur-2xl"
        style={{
          background: '#000000',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0.5px 0 rgba(255, 255, 255, 0.15)',
        }}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Background Image - Outdoor/Nature Scene */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop)',
            opacity: 0.5,
          }}
        />

        {/* Purple Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(80, 0, 120, 0.7) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(30, 30, 35, 0.85) 100%)',
          }}
        />

        {/* Purple Accent Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
          }}
        />

        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            border: '1px solid rgba(168, 85, 247, 0.3)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
          }}
        />
        <GridPattern />
        <BottomGlow />
        <div className="relative px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center z-10">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Your entire insurance operation{' '}
            <span className="relative">
              <span className="text-gray-400">policies</span>
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-gray-400"></span>
            </span>
            ,{' '}
            <span className="relative">
              <span className="text-gray-400">commissions</span>
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-gray-400"></span>
            </span>
            , and{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-400">team</span>
              <span className="absolute inset-0 border-2 border-gray-400/40 rounded-full scale-125"></span>
            </span>
            {' '}finally in one place.
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          >
            From application to commission check, Closio gives you complete visibility over every deal. No more spreadsheets. No more guessing.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default OverlappingBanner;
