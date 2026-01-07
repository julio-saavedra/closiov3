import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  repeatDelay: number;
}

const SparkleEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const particles = useMemo<Sparkle[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 3 + 1.5,
      delay: Math.random() * 0.6,
      repeatDelay: 0,
    })),
  []);

  return (
    <AnimatePresence>
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-20">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{
                opacity: [0, 0.8, 0.6, 0],
                scale: [0, 1, 1, 0.5],
                y: [0, -20, -40, -60],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 1.5,
                delay: particle.delay,
                ease: 'easeOut',
              }}
              className="absolute rounded-full bg-white"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.6)',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

const BookIcon: React.FC = () => (
  <svg viewBox="0 0 96 96" role="img" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="bobTile" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="rgba(0,210,255,0.14)"/>
        <stop offset="1" stopColor="rgba(255,255,255,0.05)"/>
      </linearGradient>
      <linearGradient id="bobTileStroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="rgba(255,255,255,0.55)"/>
        <stop offset="1" stopColor="rgba(0,210,255,0.45)"/>
      </linearGradient>

      <linearGradient id="coverFront" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="rgba(255,255,255,0.14)"/>
        <stop offset="0.45" stopColor="rgba(255,255,255,0.08)"/>
        <stop offset="1" stopColor="rgba(0,0,0,0.22)"/>
      </linearGradient>

      <linearGradient id="coverSpine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="rgba(0,0,0,0.34)"/>
        <stop offset="1" stopColor="rgba(255,255,255,0.10)"/>
      </linearGradient>

      <linearGradient id="pages" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="rgba(255,255,255,0.85)"/>
        <stop offset="0.35" stopColor="rgba(255,255,255,0.65)"/>
        <stop offset="1" stopColor="rgba(255,255,255,0.35)"/>
      </linearGradient>

      <linearGradient id="pageEdge" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="rgba(0,0,0,0.30)"/>
        <stop offset="1" stopColor="rgba(255,255,255,0.00)"/>
      </linearGradient>

      <linearGradient id="tealEdge" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="rgba(0,210,255,0.85)"/>
        <stop offset="1" stopColor="rgba(0,210,255,0.20)"/>
      </linearGradient>

      <linearGradient id="spec" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="rgba(255,255,255,0)"/>
        <stop offset="0.5" stopColor="rgba(255,255,255,0.22)"/>
        <stop offset="1" stopColor="rgba(255,255,255,0)"/>
      </linearGradient>

      <filter id="tileShadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="14" stdDeviation="10" floodColor="rgba(0,0,0,0.55)"/>
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="rgba(0,210,255,0.18)"/>
      </filter>

      <filter id="objShadow" x="-60%" y="-60%" width="220%" height="220%">
        <feDropShadow dx="0" dy="10" stdDeviation="6" floodColor="rgba(0,0,0,0.60)"/>
      </filter>

      <clipPath id="tileClip">
        <rect x="10" y="10" width="76" height="76" rx="18"/>
      </clipPath>

      <clipPath id="coverClip">
        <polygon points="34,30 66,36 66,70 34,64"/>
      </clipPath>
    </defs>

    <g filter="url(#tileShadow)">
      <rect x="10" y="10" width="76" height="76" rx="18" fill="url(#bobTile)" stroke="url(#bobTileStroke)" strokeWidth="2"/>

      <g clipPath="url(#tileClip)" opacity="0.85">
        <rect className="tileSweep" x="-30" y="10" width="28" height="76" fill="url(#spec)" transform="skewX(-18)"/>
      </g>

      <g className="bookFloat" filter="url(#objShadow)">
        <ellipse cx="50" cy="73" rx="23" ry="6" fill="rgba(0,0,0,0.42)"/>

        <polygon points="32,28 63,34 72,30 41,24" fill="rgba(255,255,255,0.38)"/>
        <polygon points="63,34 63,68 72,64 72,30" fill="url(#pages)"/>
        <polygon points="63,34 63,68 66,66 66,36" fill="url(#pageEdge)" opacity="0.65"/>

        <polygon points="30,30 34,30 34,64 30,64" fill="url(#coverSpine)"/>

        <polygon points="34,30 66,36 66,70 34,64" fill="url(#coverFront)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2"/>

        <polyline points="34,30 66,36 66,70" fill="none" stroke="url(#tealEdge)" strokeWidth="2.2" strokeLinecap="round" opacity="0.9"/>

        <g opacity="0.95">
          <rect x="40" y="40" width="20" height="8" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(0,0,0,0.22)" strokeWidth="0.8"/>
          <rect x="40" y="52" width="24" height="8" rx="3" fill="rgba(255,255,255,0.09)" stroke="rgba(0,0,0,0.22)" strokeWidth="0.8"/>
          <rect x="40" y="64" width="16" height="6" rx="3" fill="rgba(255,255,255,0.07)" stroke="rgba(0,0,0,0.22)" strokeWidth="0.8"/>
          <circle cx="42.8" cy="44" r="1.6" fill="rgba(0,210,255,0.85)"/>
          <circle cx="42.8" cy="56" r="1.6" fill="rgba(0,210,255,0.85)"/>
          <circle cx="42.8" cy="67" r="1.4" fill="rgba(0,210,255,0.85)"/>
        </g>

        <g clipPath="url(#coverClip)">
          <rect className="coverSweep" x="20" y="22" width="14" height="60" fill="url(#spec)" opacity="0.0" transform="skewX(-18)"/>
        </g>

        <path d="M62 38 C64 39, 65 41, 64 42" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" strokeLinecap="round" opacity="0.75"/>
      </g>
    </g>

    <style>
      {`
        .bookFloat { transform-origin: 50px 58px; animation: bookFloat 3.6s ease-in-out infinite; }
        .tileSweep { animation: sweep 3.1s ease-in-out infinite; }
        .coverSweep { animation: coverSweep 2.8s ease-in-out infinite; }

        @keyframes bookFloat {
          0%,100% { transform: translateY(0px) rotate(-0.25deg); }
          50%     { transform: translateY(-2.2px) rotate(0.25deg); }
        }
        @keyframes sweep {
          0%   { transform: translateX(-10px) skewX(-18deg); }
          60%  { transform: translateX(130px) skewX(-18deg); }
          100% { transform: translateX(130px) skewX(-18deg); }
        }
        @keyframes coverSweep {
          0%   { transform: translateX(-20px) skewX(-18deg); opacity: 0; }
          18%  { opacity: 0.16; }
          48%  { transform: translateX(90px) skewX(-18deg); opacity: 0; }
          100% { transform: translateX(90px) skewX(-18deg); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce){
          .bookFloat,.tileSweep,.coverSweep { animation: none !important; }
        }
      `}
    </style>
  </svg>
);

const HierarchyIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="hierBoxFront" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#9ca3af" />
      </linearGradient>
      <linearGradient id="hierBoxTop" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#d1d5db" />
        <stop offset="100%" stopColor="#f9fafb" />
      </linearGradient>
      <linearGradient id="hierBoxSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <filter id="hierShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="4" stdDeviation="5" floodColor="#000" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#hierShadow)">
      <rect x="70" y="35" width="55" height="40" rx="5" fill="url(#hierBoxFront)" />
      <path d="M70 35 L125 35 L135 25 L80 25 Z" fill="url(#hierBoxTop)" />
      <path d="M125 35 L125 75 L135 65 L135 25 Z" fill="url(#hierBoxSide)" />
    </g>

    <line x1="100" y1="80" x2="100" y2="105" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" />
    <line x1="55" y1="105" x2="145" y2="105" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" />
    <line x1="55" y1="105" x2="55" y2="120" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" />
    <line x1="145" y1="105" x2="145" y2="120" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" />

    <g filter="url(#hierShadow)">
      <rect x="30" y="120" width="45" height="35" rx="4" fill="url(#hierBoxFront)" />
      <path d="M30 120 L75 120 L83 112 L38 112 Z" fill="url(#hierBoxTop)" />
      <path d="M75 120 L75 155 L83 147 L83 112 Z" fill="url(#hierBoxSide)" />
    </g>

    <g filter="url(#hierShadow)">
      <rect x="120" y="120" width="45" height="35" rx="4" fill="url(#hierBoxFront)" />
      <path d="M120 120 L165 120 L173 112 L128 112 Z" fill="url(#hierBoxTop)" />
      <path d="M165 120 L165 155 L173 147 L173 112 Z" fill="url(#hierBoxSide)" />
    </g>
  </svg>
);

const CommissionIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="coinTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="50%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
      <linearGradient id="coinEdge" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>
      <filter id="coinShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#coinShadow)" opacity="0.6">
      <ellipse cx="60" cy="155" rx="32" ry="14" fill="#4b5563" />
      <ellipse cx="60" cy="148" rx="32" ry="14" fill="#6b7280" />
      <ellipse cx="60" cy="141" rx="32" ry="14" fill="#9ca3af" />
      <ellipse cx="60" cy="134" rx="32" ry="14" fill="url(#coinTop)" />
      <text x="60" y="140" fontSize="18" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.6">$</text>
    </g>

    <g filter="url(#coinShadow)" opacity="0.8">
      <ellipse cx="140" cy="160" rx="32" ry="14" fill="#374151" />
      <ellipse cx="140" cy="153" rx="32" ry="14" fill="#4b5563" />
      <ellipse cx="140" cy="146" rx="32" ry="14" fill="#6b7280" />
      <ellipse cx="140" cy="139" rx="32" ry="14" fill="#9ca3af" />
      <ellipse cx="140" cy="132" rx="32" ry="14" fill="#d1d5db" />
      <ellipse cx="140" cy="125" rx="32" ry="14" fill="url(#coinTop)" />
      <text x="140" y="131" fontSize="18" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.6">$</text>
    </g>

    <g filter="url(#coinShadow)">
      <ellipse cx="100" cy="125" rx="40" ry="18" fill="#374151" />
      <ellipse cx="100" cy="116" rx="40" ry="18" fill="#4b5563" />
      <ellipse cx="100" cy="107" rx="40" ry="18" fill="#6b7280" />
      <ellipse cx="100" cy="98" rx="40" ry="18" fill="#9ca3af" />
      <ellipse cx="100" cy="89" rx="40" ry="18" fill="#d1d5db" />
      <ellipse cx="100" cy="80" rx="40" ry="18" fill="#e5e7eb" />
      <ellipse cx="100" cy="71" rx="40" ry="18" fill="url(#coinTop)" />
      <text x="100" y="78" fontSize="24" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.7">$</text>
    </g>

    <g opacity="0.7">
      <path d="M160 70 L160 38 L152 46 M160 38 L168 46" stroke="#d1d5db" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M172 82 L172 50 L164 58 M172 50 L180 58" stroke="#9ca3af" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </g>

    <g opacity="0.5">
      <text x="35" y="50" fontSize="20" fontWeight="bold" fill="#d1d5db">$</text>
      <text x="52" y="38" fontSize="16" fontWeight="bold" fill="#9ca3af">$</text>
      <text x="22" y="68" fontSize="14" fontWeight="bold" fill="#6b7280">$</text>
    </g>
  </svg>
);

const DashboardIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="barFront" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
      <linearGradient id="barSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <linearGradient id="barTop" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#f9fafb" />
      </linearGradient>
      <filter id="barShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
      </filter>
    </defs>

    <line x1="25" y1="45" x2="25" y2="160" stroke="#6b7280" strokeWidth="2" opacity="0.5" />
    <line x1="25" y1="160" x2="180" y2="160" stroke="#6b7280" strokeWidth="2" opacity="0.5" />

    <line x1="25" y1="70" x2="180" y2="70" stroke="#6b7280" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
    <line x1="25" y1="100" x2="180" y2="100" stroke="#6b7280" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
    <line x1="25" y1="130" x2="180" y2="130" stroke="#6b7280" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />

    <g filter="url(#barShadow)">
      <rect x="38" y="118" width="20" height="42" rx="2" fill="url(#barFront)" />
      <path d="M38 118 L58 118 L66 110 L46 110 Z" fill="url(#barTop)" />
      <path d="M58 118 L58 160 L66 152 L66 110 Z" fill="url(#barSide)" />
    </g>

    <g filter="url(#barShadow)">
      <rect x="66" y="88" width="20" height="72" rx="2" fill="url(#barFront)" />
      <path d="M66 88 L86 88 L94 80 L74 80 Z" fill="url(#barTop)" />
      <path d="M86 88 L86 160 L94 152 L94 80 Z" fill="url(#barSide)" />
    </g>

    <g filter="url(#barShadow)">
      <rect x="94" y="55" width="20" height="105" rx="2" fill="url(#barFront)" />
      <path d="M94 55 L114 55 L122 47 L102 47 Z" fill="url(#barTop)" />
      <path d="M114 55 L114 160 L122 152 L122 47 Z" fill="url(#barSide)" />
    </g>

    <g filter="url(#barShadow)">
      <rect x="122" y="98" width="20" height="62" rx="2" fill="url(#barFront)" />
      <path d="M122 98 L142 98 L150 90 L130 90 Z" fill="url(#barTop)" />
      <path d="M142 98 L142 160 L150 152 L150 90 Z" fill="url(#barSide)" />
    </g>

    <g filter="url(#barShadow)">
      <rect x="150" y="72" width="20" height="88" rx="2" fill="url(#barFront)" />
      <path d="M150 72 L170 72 L178 64 L158 64 Z" fill="url(#barTop)" />
      <path d="M170 72 L170 160 L178 152 L178 64 Z" fill="url(#barSide)" />
    </g>

    <polyline
      points="48,113 76,83 104,50 132,93 160,67"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="3"
      opacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="48" cy="113" r="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
    <circle cx="76" cy="83" r="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
    <circle cx="104" cy="50" r="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
    <circle cx="132" cy="93" r="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
    <circle cx="160" cy="67" r="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
  </svg>
);

const MedalsIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="30%" stopColor="#fcd34d" />
        <stop offset="70%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="goldInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="50%" stopColor="#fef3c7" />
        <stop offset="100%" stopColor="#fde68a" />
      </linearGradient>
      <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="30%" stopColor="#e5e7eb" />
        <stop offset="70%" stopColor="#d1d5db" />
        <stop offset="100%" stopColor="#9ca3af" />
      </linearGradient>
      <linearGradient id="silverInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#f9fafb" />
        <stop offset="100%" stopColor="#e5e7eb" />
      </linearGradient>
      <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fed7aa" />
        <stop offset="30%" stopColor="#fdba74" />
        <stop offset="70%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#c2410c" />
      </linearGradient>
      <linearGradient id="bronzeInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffedd5" />
        <stop offset="50%" stopColor="#fed7aa" />
        <stop offset="100%" stopColor="#fdba74" />
      </linearGradient>
      <linearGradient id="podiumTop" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
      <linearGradient id="podiumSide" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
      </linearGradient>
      <filter id="podiumShadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="rgba(0,0,0,0.4)"/>
      </filter>
      <filter id="medalShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="rgba(0,0,0,0.6)" />
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,210,255,0.15)" />
      </filter>
      <filter id="goldGlow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feFlood floodColor="rgba(250,204,21,0.4)" result="color" />
        <feComposite in="color" in2="blur" operator="in" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#podiumShadow)">
      <rect x="20" y="140" width="35" height="45" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <rect x="20" y="140" width="35" height="3" fill="url(#podiumTop)"/>
      <path d="M55 140 L60 135 L60 180 L55 185 Z" fill="url(#podiumSide)"/>
      <text x="37.5" y="168" fontSize="16" fontWeight="bold" fill="rgba(255,255,255,0.4)" textAnchor="middle">3</text>
    </g>

    <g filter="url(#podiumShadow)">
      <rect x="82.5" y="120" width="35" height="65" fill="rgba(255,255,255,0.12)" stroke="rgba(0,210,255,0.3)" strokeWidth="2"/>
      <rect x="82.5" y="120" width="35" height="3" fill="url(#podiumTop)"/>
      <path d="M117.5 120 L122.5 115 L122.5 180 L117.5 185 Z" fill="url(#podiumSide)"/>
      <text x="100" y="158" fontSize="16" fontWeight="bold" fill="rgba(0,210,255,0.6)" textAnchor="middle">1</text>
    </g>

    <g filter="url(#podiumShadow)">
      <rect x="145" y="130" width="35" height="55" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <rect x="145" y="130" width="35" height="3" fill="url(#podiumTop)"/>
      <path d="M180 130 L185 125 L185 180 L180 185 Z" fill="url(#podiumSide)"/>
      <text x="162.5" y="163" fontSize="16" fontWeight="bold" fill="rgba(255,255,255,0.4)" textAnchor="middle">2</text>
    </g>

    <g filter="url(#medalShadow)">
      <circle cx="40" cy="85" r="28" fill="url(#silverGrad)" />
      <circle cx="40" cy="85" r="23" fill="url(#silverInner)" />
      <circle cx="40" cy="85" r="18" fill="url(#silverGrad)" opacity="0.3" />
      <circle cx="40" cy="85" r="14" fill="rgba(255,255,255,0.5)" />
      <text x="40" y="92" fontSize="16" fontWeight="bold" fill="#6b7280" textAnchor="middle">3</text>
    </g>

    <g filter="url(#medalShadow)">
      <circle cx="160" cy="90" r="28" fill="url(#bronzeGrad)" />
      <circle cx="160" cy="90" r="23" fill="url(#bronzeInner)" />
      <circle cx="160" cy="90" r="18" fill="url(#bronzeGrad)" opacity="0.3" />
      <circle cx="160" cy="90" r="14" fill="rgba(255,237,213,0.7)" />
      <text x="160" y="97" fontSize="16" fontWeight="bold" fill="#9a3412" textAnchor="middle">2</text>
    </g>

    <g filter="url(#goldGlow)">
      <circle cx="100" cy="65" r="38" fill="url(#goldGrad)" />
      <circle cx="100" cy="65" r="32" fill="url(#goldInner)" />
      <circle cx="100" cy="65" r="26" fill="url(#goldGrad)" opacity="0.3" />
      <circle cx="100" cy="65" r="20" fill="rgba(255,251,235,0.8)" />
      <circle cx="100" cy="65" r="4" fill="rgba(0,210,255,0.6)" />
      <text x="100" y="73" fontSize="20" fontWeight="bold" fill="#92400e" textAnchor="middle">1</text>
    </g>
  </svg>
);

const VerticalLine: React.FC = () => {
  return (
    <div
      className="absolute left-[3vw] pointer-events-none"
      style={{ top: '-100px', bottom: '-100px' }}
    >
      <div
        className="absolute inset-0 bg-white"
        style={{
          width: '19px',
          transform: 'translateX(-50%)',
          boxShadow: 'none'
        }}
      />
    </div>
  );
};

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.FC;
  };
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;
  const isTopRow = index < 2;
  const isLeftSide = index === 0 || index === 2;
  const slideDirection = isLeftSide ? -100 : 100;
  const staggerDelay = index * 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, x: slideDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: staggerDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden border border-white/10 rounded-2xl cursor-pointer ${
        isTopRow ? 'col-span-1 lg:col-span-3' : 'col-span-1 lg:col-span-2'
      }`}
      style={{
        background: '#000000',
        willChange: 'transform, opacity',
      }}
    >
      <SparkleEffect isHovered={isHovered} />
      <div className="relative p-8 flex flex-col h-full min-h-[340px] z-10">
        <div className="w-36 h-36 mb-8">
          <Icon />
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-white/60 text-base leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Book of Business',
      description: 'Manage your entire portfolio of clients and policies in one organized, searchable database.',
      icon: BookIcon,
    },
    {
      title: 'Team Hierarchy',
      description: 'Visualize your agency structure with clear reporting lines and team performance metrics.',
      icon: HierarchyIcon,
    },
    {
      title: 'Commission Tracking',
      description: 'Real-time visibility into your commission structure with automated calculations and transparent breakdowns.',
      icon: CommissionIcon,
    },
    {
      title: 'Dashboard Analytics',
      description: 'Powerful insights and metrics to track performance, close rates, and revenue at a glance.',
      icon: DashboardIcon,
    },
    {
      title: 'Leaderboard',
      description: 'Track top performers and motivate your team with real-time rankings and achievements.',
      icon: MedalsIcon,
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <VerticalLine />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold md:max-w-md">
            <span className="text-white">
              / CORE FEATURES
            </span>
          </h2>
          <p className="text-white/50 text-lg md:max-w-xl md:text-right">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
