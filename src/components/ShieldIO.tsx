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
        <linearGradient id="shieldBodyGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="25%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#0f0f0f" />
          <stop offset="75%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>

        <linearGradient id="shieldMetallicHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#4a4a4a" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#2a2a2a" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#1a1a1a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="shieldEdgeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="50%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>

        <linearGradient id="shieldInnerDepth" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#000000" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
        </linearGradient>

        <radialGradient id="shieldCenterGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#2a2a2a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <filter id="shieldOuterShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="15" stdDeviation="25" floodColor="#000000" floodOpacity="0.8" />
          <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
        </filter>

        <filter id="shieldBevel" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feOffset in="blur" dx="3" dy="4" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.8" result="shadowColor" />
          <feComposite in="shadowColor" in2="offsetBlur" operator="in" result="shadow" />
          <feOffset in="SourceAlpha" dx="-1" dy="-2" result="highlightOffset" />
          <feGaussianBlur in="highlightOffset" stdDeviation="1.5" result="highlightBlur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.12" result="highlightColor" />
          <feComposite in="highlightColor" in2="highlightBlur" operator="in" result="highlight" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="highlight" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="ioEmboss" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset in="SourceAlpha" dx="2" dy="2" result="shadowOffset" />
          <feGaussianBlur in="shadowOffset" stdDeviation="2" result="shadowBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.6" result="shadowColor" />
          <feComposite in="shadowColor" in2="shadowBlur" operator="in" result="shadow" />
          <feOffset in="SourceAlpha" dx="-1" dy="-1" result="highlightOffset" />
          <feGaussianBlur in="highlightOffset" stdDeviation="1" result="highlightBlur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.25" result="highlightColor" />
          <feComposite in="highlightColor" in2="highlightBlur" operator="in" result="highlight" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="highlight" />
          </feMerge>
        </filter>

        <filter id="subtleGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#shieldOuterShadow)">
        <path
          d="M200 25 C200 25 340 45 362 67 C384 89 390 130 390 170 C390 295 342 395 200 475 C58 395 10 295 10 170 C10 130 16 89 38 67 C60 45 200 25 200 25 Z"
          fill="url(#shieldBodyGradient)"
          filter="url(#shieldBevel)"
        />

        <path
          d="M200 25 C200 25 340 45 362 67 C384 89 390 130 390 170 C390 295 342 395 200 475 C58 395 10 295 10 170 C10 130 16 89 38 67 C60 45 200 25 200 25 Z"
          fill="url(#shieldMetallicHighlight)"
        />

        <path
          d="M200 25 C200 25 340 45 362 67 C384 89 390 130 390 170 C390 295 342 395 200 475 C58 395 10 295 10 170 C10 130 16 89 38 67 C60 45 200 25 200 25 Z"
          fill="url(#shieldCenterGlow)"
        />

        <path
          d="M200 25 C200 25 340 45 362 67 C384 89 390 130 390 170 C390 295 342 395 200 475 C58 395 10 295 10 170 C10 130 16 89 38 67 C60 45 200 25 200 25 Z"
          fill="none"
          stroke="url(#shieldEdgeHighlight)"
          strokeWidth="2"
        />

        <path
          d="M200 28 C200 28 335 47 355 67"
          fill="none"
          stroke="#4a4a4a"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />

        <path
          d="M200 45 C200 45 320 62 340 82 C360 102 365 138 365 172 C365 285 322 378 200 450 C78 378 35 285 35 172 C35 138 40 102 60 82 C80 62 200 45 200 45 Z"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          opacity="0.5"
        />

        <path
          d="M200 60 C200 60 305 75 322 92 C339 109 343 140 343 170 C343 270 305 355 200 420 C95 355 57 270 57 170 C57 140 61 109 78 92 C95 75 200 60 200 60 Z"
          fill="url(#shieldInnerDepth)"
          opacity="0.4"
        />
      </g>

      <g transform="translate(200, 230)" filter="url(#ioEmboss)">
        <g>
          <rect
            x="-72"
            y="-52"
            width="40"
            height="104"
            rx="4"
            fill="none"
            stroke="#1A9B9B"
            strokeWidth="20"
            transform="skewX(-12)"
          />
        </g>

        <g filter="url(#subtleGlow)">
          <circle
            cx="48"
            cy="0"
            r="52"
            fill="none"
            stroke="#ffffff"
            strokeWidth="20"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default ShieldIO;
