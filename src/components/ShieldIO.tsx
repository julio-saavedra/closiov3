import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ShieldIO = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-100px 0px -100px 0px',
    triggerOnce: true
  });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 400 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[420px] mx-auto drop-shadow-2xl"
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <defs>
        {/* Realistic metallic shield gradients */}
        <linearGradient id="shieldBodyGradient" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="15%" stopColor="#2d2d2d" />
          <stop offset="35%" stopColor="#0f0f0f" />
          <stop offset="55%" stopColor="#1c1c1c" />
          <stop offset="75%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>

        <linearGradient id="shieldMetallicHighlight" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#6a6a6a" stopOpacity="0.6" />
          <stop offset="20%" stopColor="#4a4a4a" stopOpacity="0.4" />
          <stop offset="40%" stopColor="#2a2a2a" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#1a1a1a" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="shieldEdgeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a8a8a" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#5a5a5a" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#3a3a3a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="shieldInnerDepth" x1="50%" y1="20%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
          <stop offset="40%" stopColor="#000000" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.85" />
        </linearGradient>

        <radialGradient id="shieldCenterGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#1a1a1a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Enhanced shadow for depth */}
        <filter id="shieldOuterShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="20" stdDeviation="35" floodColor="#000000" floodOpacity="0.9" />
          <feDropShadow dx="0" dy="8" stdDeviation="15" floodColor="#000000" floodOpacity="0.7" />
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000000" floodOpacity="0.5" />
        </filter>

        {/* Realistic bevel/emboss */}
        <filter id="shieldBevel" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feOffset in="blur" dx="4" dy="5" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.85" result="shadowColor" />
          <feComposite in="shadowColor" in2="offsetBlur" operator="in" result="shadow" />
          <feOffset in="SourceAlpha" dx="-2" dy="-3" result="highlightOffset" />
          <feGaussianBlur in="highlightOffset" stdDeviation="2" result="highlightBlur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.2" result="highlightColor" />
          <feComposite in="highlightColor" in2="highlightBlur" operator="in" result="highlight" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="highlight" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* White glow for IO letters */}
        <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.6" result="glowColor" />
          <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shield body with realistic metallic finish */}
      <g filter="url(#shieldOuterShadow)">
        {/* Base shield shape */}
        <path
          d="M200 25 C200 25 340 45 362 67 C384 89 390 130 390 170 C390 295 342 395 200 475 C58 395 10 295 10 170 C10 130 16 89 38 67 C60 45 200 25 200 25 Z"
          fill="url(#shieldBodyGradient)"
          filter="url(#shieldBevel)"
        />

        {/* Metallic highlights */}
        <path
          d="M200 25 C200 25 340 45 362 67 C384 89 390 130 390 170 C390 295 342 395 200 475 C58 395 10 295 10 170 C10 130 16 89 38 67 C60 45 200 25 200 25 Z"
          fill="url(#shieldMetallicHighlight)"
        />

        {/* Center glow */}
        <path
          d="M200 25 C200 25 340 45 362 67 C384 89 390 130 390 170 C390 295 342 395 200 475 C58 395 10 295 10 170 C10 130 16 89 38 67 C60 45 200 25 200 25 Z"
          fill="url(#shieldCenterGlow)"
        />

        {/* Edge highlight */}
        <path
          d="M200 25 C200 25 340 45 362 67 C384 89 390 130 390 170 C390 295 342 395 200 475 C58 395 10 295 10 170 C10 130 16 89 38 67 C60 45 200 25 200 25 Z"
          fill="none"
          stroke="url(#shieldEdgeHighlight)"
          strokeWidth="2.5"
        />

        {/* Top edge shine */}
        <path
          d="M200 28 C200 28 335 47 355 67"
          fill="none"
          stroke="#7a7a7a"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Secondary top shine */}
        <path
          d="M190 32 C190 32 320 50 342 72"
          fill="none"
          stroke="#5a5a5a"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Inner contour line */}
        <path
          d="M200 45 C200 45 320 62 340 82 C360 102 365 138 365 172 C365 285 322 378 200 450 C78 378 35 285 35 172 C35 138 40 102 60 82 C80 62 200 45 200 45 Z"
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="1.8"
          strokeDasharray="5 8"
          opacity="0.6"
        />

        {/* Inner depth shadow */}
        <path
          d="M200 60 C200 60 305 75 322 92 C339 109 343 140 343 170 C343 270 305 355 200 420 C95 355 57 270 57 170 C57 140 61 109 78 92 C95 75 200 60 200 60 Z"
          fill="url(#shieldInnerDepth)"
          opacity="0.5"
        />
        
        {/* Additional surface detail */}
        <path
          d="M200 80 C200 80 290 93 305 108 C320 123 323 148 323 170 C323 255 290 330 200 390 C110 330 77 255 77 170 C77 148 80 123 95 108 C110 93 200 80 200 80 Z"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="1"
          opacity="0.4"
        />
      </g>

      {/* Logo - centered in shield */}
      <foreignObject x="100" y="180" width="200" height="120">
        <div className="flex items-center justify-center w-full h-full">
          <img
            src="/favicon_and_logo_for_closio.png"
            alt="Closio"
            className="w-auto h-24"
            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' }}
          />
        </div>
      </foreignObject>
    </motion.svg>
  );
};

export default ShieldIO;
