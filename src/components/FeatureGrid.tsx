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
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="bookFront" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f9fafb" />
        <stop offset="20%" stopColor="#e5e7eb" />
        <stop offset="60%" stopColor="#d1d5db" />
        <stop offset="100%" stopColor="#9ca3af" />
      </linearGradient>
      <linearGradient id="bookTop" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d1d5db" />
        <stop offset="30%" stopColor="#e5e7eb" />
        <stop offset="70%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id="bookSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="50%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>
      <linearGradient id="bookEdgeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <filter id="bookShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="5" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.5" />
      </filter>
      <filter id="bookInnerShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#bookShadow)">
      <path d="M50 45 L50 155 L145 155 L145 45 Z" fill="url(#bookFront)" filter="url(#bookInnerShadow)" />
      <path d="M50 45 L145 45 L160 30 L65 30 Z" fill="url(#bookTop)" />
      <path d="M145 45 L145 155 L160 140 L160 30 Z" fill="url(#bookSide)" />
      <rect x="145" y="45" width="2" height="110" fill="url(#bookEdgeHighlight)" />
      <path d="M50 45 L65 30 L65 140 L50 155 Z" fill="#1f2937" opacity="0.15" />
    </g>
    <rect x="62" y="62" width="70" height="5" fill="#6b7280" opacity="0.4" rx="2" />
    <rect x="62" y="78" width="58" height="5" fill="#6b7280" opacity="0.35" rx="2" />
    <rect x="62" y="94" width="64" height="5" fill="#6b7280" opacity="0.3" rx="2" />
    <rect x="62" y="110" width="52" height="5" fill="#6b7280" opacity="0.25" rx="2" />
    <ellipse cx="147" cy="100" rx="8" ry="35" fill="#ffffff" opacity="0.08" />
  </svg>
);

const HierarchyIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="hierBoxFront" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f9fafb" />
        <stop offset="30%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#9ca3af" />
      </linearGradient>
      <linearGradient id="hierBoxTop" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d1d5db" />
        <stop offset="40%" stopColor="#e5e7eb" />
        <stop offset="80%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id="hierBoxSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="50%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>
      <linearGradient id="hierLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6b7280" />
        <stop offset="50%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <filter id="hierShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="4" dy="6" stdDeviation="7" floodColor="#000" floodOpacity="0.45" />
      </filter>
      <filter id="hierGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#hierShadow)">
      <rect x="80" y="20" width="40" height="30" rx="4" fill="url(#hierBoxFront)" />
      <path d="M80 20 L120 20 L128 12 L88 12 Z" fill="url(#hierBoxTop)" />
      <path d="M120 20 L120 50 L128 42 L128 12 Z" fill="url(#hierBoxSide)" />
      <rect x="80" y="20" width="2" height="30" fill="#ffffff" opacity="0.3" />
      <ellipse cx="105" cy="35" rx="9" ry="15" fill="#ffffff" opacity="0.08" />
    </g>

    <line x1="100" y1="55" x2="100" y2="72" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />
    <line x1="65" y1="72" x2="135" y2="72" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />
    <line x1="65" y1="72" x2="65" y2="85" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />
    <line x1="135" y1="72" x2="135" y2="85" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />

    <g filter="url(#hierShadow)">
      <rect x="45" y="85" width="40" height="30" rx="4" fill="url(#hierBoxFront)" />
      <path d="M45 85 L85 85 L93 77 L53 77 Z" fill="url(#hierBoxTop)" />
      <path d="M85 85 L85 115 L93 107 L93 77 Z" fill="url(#hierBoxSide)" />
      <rect x="45" y="85" width="2" height="30" fill="#ffffff" opacity="0.3" />
      <ellipse cx="70" cy="100" rx="9" ry="15" fill="#ffffff" opacity="0.08" />
    </g>

    <g filter="url(#hierShadow)">
      <rect x="115" y="85" width="40" height="30" rx="4" fill="url(#hierBoxFront)" />
      <path d="M115 85 L155 85 L163 77 L123 77 Z" fill="url(#hierBoxTop)" />
      <path d="M155 85 L155 115 L163 107 L163 77 Z" fill="url(#hierBoxSide)" />
      <rect x="115" y="85" width="2" height="30" fill="#ffffff" opacity="0.3" />
      <ellipse cx="140" cy="100" rx="9" ry="15" fill="#ffffff" opacity="0.08" />
    </g>

    <line x1="65" y1="120" x2="65" y2="137" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />
    <line x1="135" y1="120" x2="135" y2="137" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />
    <line x1="40" y1="137" x2="160" y2="137" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />
    <line x1="40" y1="137" x2="40" y2="150" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />
    <line x1="100" y1="137" x2="100" y2="150" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />
    <line x1="160" y1="137" x2="160" y2="150" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" />

    <g filter="url(#hierShadow)">
      <rect x="20" y="150" width="40" height="28" rx="3" fill="url(#hierBoxFront)" />
      <path d="M20 150 L60 150 L68 142 L28 142 Z" fill="url(#hierBoxTop)" />
      <path d="M60 150 L60 178 L68 170 L68 142 Z" fill="url(#hierBoxSide)" />
      <rect x="20" y="150" width="2" height="28" fill="#ffffff" opacity="0.3" />
      <ellipse cx="45" cy="164" rx="8" ry="14" fill="#ffffff" opacity="0.08" />
    </g>

    <g filter="url(#hierShadow)">
      <rect x="80" y="150" width="40" height="28" rx="3" fill="url(#hierBoxFront)" />
      <path d="M80 150 L120 150 L128 142 L88 142 Z" fill="url(#hierBoxTop)" />
      <path d="M120 150 L120 178 L128 170 L128 142 Z" fill="url(#hierBoxSide)" />
      <rect x="80" y="150" width="2" height="28" fill="#ffffff" opacity="0.3" />
      <ellipse cx="105" cy="164" rx="8" ry="14" fill="#ffffff" opacity="0.08" />
    </g>

    <g filter="url(#hierShadow)">
      <rect x="140" y="150" width="40" height="28" rx="3" fill="url(#hierBoxFront)" />
      <path d="M140 150 L180 150 L188 142 L148 142 Z" fill="url(#hierBoxTop)" />
      <path d="M180 150 L180 178 L188 170 L188 142 Z" fill="url(#hierBoxSide)" />
      <rect x="140" y="150" width="2" height="28" fill="#ffffff" opacity="0.3" />
      <ellipse cx="165" cy="164" rx="8" ry="14" fill="#ffffff" opacity="0.08" />
    </g>
  </svg>
);

const CommissionIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="coinTop" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#f9fafb" />
        <stop offset="60%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </radialGradient>
      <linearGradient id="coinEdge" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="50%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>
      <linearGradient id="coinRim" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d1d5db" />
        <stop offset="50%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
      <filter id="coinShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="4" dy="7" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
      </filter>
      <filter id="coinSheen" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#coinShadow)" opacity="0.7">
      <ellipse cx="60" cy="155" rx="32" ry="14" fill="#4b5563" />
      <ellipse cx="60" cy="149" rx="32" ry="14" fill="#6b7280" />
      <ellipse cx="60" cy="143" rx="32" ry="14" fill="#9ca3af" />
      <ellipse cx="60" cy="137" rx="32" ry="14" fill="url(#coinEdge)" />
      <ellipse cx="60" cy="134" rx="32" ry="14" fill="url(#coinTop)" filter="url(#coinSheen)" />
      <ellipse cx="60" cy="134" rx="29" ry="12" fill="none" stroke="url(#coinRim)" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="48" cy="130" rx="6" ry="4" fill="#ffffff" opacity="0.4" />
      <text x="60" y="140" fontSize="18" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.7">$</text>
    </g>

    <g filter="url(#coinShadow)" opacity="0.85">
      <ellipse cx="140" cy="160" rx="32" ry="14" fill="#374151" />
      <ellipse cx="140" cy="153" rx="32" ry="14" fill="#4b5563" />
      <ellipse cx="140" cy="146" rx="32" ry="14" fill="#6b7280" />
      <ellipse cx="140" cy="139" rx="32" ry="14" fill="#9ca3af" />
      <ellipse cx="140" cy="132" rx="32" ry="14" fill="#d1d5db" />
      <ellipse cx="140" cy="128" rx="32" ry="14" fill="url(#coinEdge)" />
      <ellipse cx="140" cy="125" rx="32" ry="14" fill="url(#coinTop)" filter="url(#coinSheen)" />
      <ellipse cx="140" cy="125" rx="29" ry="12" fill="none" stroke="url(#coinRim)" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="128" cy="121" rx="6" ry="4" fill="#ffffff" opacity="0.4" />
      <text x="140" y="131" fontSize="18" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.7">$</text>
    </g>

    <g filter="url(#coinShadow)">
      <ellipse cx="100" cy="128" rx="40" ry="18" fill="#374151" />
      <ellipse cx="100" cy="120" rx="40" ry="18" fill="#4b5563" />
      <ellipse cx="100" cy="112" rx="40" ry="18" fill="#6b7280" />
      <ellipse cx="100" cy="104" rx="40" ry="18" fill="#9ca3af" />
      <ellipse cx="100" cy="96" rx="40" ry="18" fill="#d1d5db" />
      <ellipse cx="100" cy="88" rx="40" ry="18" fill="#e5e7eb" />
      <ellipse cx="100" cy="82" rx="40" ry="18" fill="url(#coinEdge)" />
      <ellipse cx="100" cy="78" rx="40" ry="18" fill="url(#coinTop)" filter="url(#coinSheen)" />
      <ellipse cx="100" cy="78" rx="36" ry="15" fill="none" stroke="url(#coinRim)" strokeWidth="2" opacity="0.7" />
      <ellipse cx="85" cy="73" rx="8" ry="5" fill="#ffffff" opacity="0.5" />
      <text x="100" y="85" fontSize="24" fontWeight="bold" fill="#6b7280" textAnchor="middle" opacity="0.8">$</text>
    </g>

    <g opacity="0.8" filter="url(#coinSheen)">
      <path d="M160 70 L160 38 L152 46 M160 38 L168 46" stroke="#e5e7eb" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M172 82 L172 50 L164 58 M172 50 L180 58" stroke="#9ca3af" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </g>

    <g opacity="0.6">
      <text x="35" y="50" fontSize="20" fontWeight="bold" fill="#e5e7eb">$</text>
      <text x="52" y="38" fontSize="16" fontWeight="bold" fill="#9ca3af">$</text>
      <text x="22" y="68" fontSize="14" fontWeight="bold" fill="#6b7280">$</text>
    </g>
  </svg>
);

const DashboardIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="barFront" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f9fafb" />
        <stop offset="30%" stopColor="#f3f4f6" />
        <stop offset="70%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
      <linearGradient id="barSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9ca3af" />
        <stop offset="50%" stopColor="#6b7280" />
        <stop offset="100%" stopColor="#4b5563" />
      </linearGradient>
      <linearGradient id="barTop" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e5e7eb" />
        <stop offset="50%" stopColor="#f3f4f6" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id="barHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <filter id="barShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.45" />
      </filter>
      <filter id="barGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <line x1="25" y1="45" x2="25" y2="160" stroke="#9ca3af" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
    <line x1="25" y1="160" x2="180" y2="160" stroke="#9ca3af" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />

    <line x1="25" y1="70" x2="180" y2="70" stroke="#6b7280" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
    <line x1="25" y1="100" x2="180" y2="100" stroke="#6b7280" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
    <line x1="25" y1="130" x2="180" y2="130" stroke="#6b7280" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />

    <g filter="url(#barShadow)">
      <rect x="38" y="118" width="20" height="42" rx="2" fill="url(#barFront)" />
      <path d="M38 118 L58 118 L66 110 L46 110 Z" fill="url(#barTop)" />
      <path d="M58 118 L58 160 L66 152 L66 110 Z" fill="url(#barSide)" />
      <rect x="38" y="118" width="3" height="42" fill="#ffffff" opacity="0.3" />
      <rect x="43" y="118" width="10" height="42" fill="url(#barHighlight)" />
    </g>

    <g filter="url(#barShadow)">
      <rect x="66" y="88" width="20" height="72" rx="2" fill="url(#barFront)" />
      <path d="M66 88 L86 88 L94 80 L74 80 Z" fill="url(#barTop)" />
      <path d="M86 88 L86 160 L94 152 L94 80 Z" fill="url(#barSide)" />
      <rect x="66" y="88" width="3" height="72" fill="#ffffff" opacity="0.3" />
      <rect x="71" y="88" width="10" height="72" fill="url(#barHighlight)" />
    </g>

    <g filter="url(#barShadow)">
      <rect x="94" y="55" width="20" height="105" rx="2" fill="url(#barFront)" />
      <path d="M94 55 L114 55 L122 47 L102 47 Z" fill="url(#barTop)" />
      <path d="M114 55 L114 160 L122 152 L122 47 Z" fill="url(#barSide)" />
      <rect x="94" y="55" width="3" height="105" fill="#ffffff" opacity="0.3" />
      <rect x="99" y="55" width="10" height="105" fill="url(#barHighlight)" />
    </g>

    <g filter="url(#barShadow)">
      <rect x="122" y="98" width="20" height="62" rx="2" fill="url(#barFront)" />
      <path d="M122 98 L142 98 L150 90 L130 90 Z" fill="url(#barTop)" />
      <path d="M142 98 L142 160 L150 152 L150 90 Z" fill="url(#barSide)" />
      <rect x="122" y="98" width="3" height="62" fill="#ffffff" opacity="0.3" />
      <rect x="127" y="98" width="10" height="62" fill="url(#barHighlight)" />
    </g>

    <g filter="url(#barShadow)">
      <rect x="150" y="72" width="20" height="88" rx="2" fill="url(#barFront)" />
      <path d="M150 72 L170 72 L178 64 L158 64 Z" fill="url(#barTop)" />
      <path d="M170 72 L170 160 L178 152 L178 64 Z" fill="url(#barSide)" />
      <rect x="150" y="72" width="3" height="88" fill="#ffffff" opacity="0.3" />
      <rect x="155" y="72" width="10" height="88" fill="url(#barHighlight)" />
    </g>

    <polyline
      points="48,113 76,83 104,50 132,93 160,67"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="3.5"
      opacity="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#barGlow)"
    />
    <circle cx="48" cy="113" r="5" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2.5" filter="url(#barGlow)" />
    <circle cx="76" cy="83" r="5" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2.5" filter="url(#barGlow)" />
    <circle cx="104" cy="50" r="5" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2.5" filter="url(#barGlow)" />
    <circle cx="132" cy="93" r="5" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2.5" filter="url(#barGlow)" />
    <circle cx="160" cy="67" r="5" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2.5" filter="url(#barGlow)" />
    <circle cx="48" cy="113" r="2" fill="#ffffff" opacity="0.6" />
    <circle cx="76" cy="83" r="2" fill="#ffffff" opacity="0.6" />
    <circle cx="104" cy="50" r="2" fill="#ffffff" opacity="0.6" />
    <circle cx="132" cy="93" r="2" fill="#ffffff" opacity="0.6" />
    <circle cx="160" cy="67" r="2" fill="#ffffff" opacity="0.6" />
  </svg>
);

const MedalsIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="goldGrad" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="20%" stopColor="#fcd34d" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="80%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#b8860b" />
      </radialGradient>
      <radialGradient id="goldInner" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="30%" stopColor="#fef3c7" />
        <stop offset="70%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#fbbf24" />
      </radialGradient>
      <radialGradient id="silverGrad" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#f9fafb" />
        <stop offset="20%" stopColor="#e5e7eb" />
        <stop offset="60%" stopColor="#d1d5db" />
        <stop offset="90%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#6b7280" />
      </radialGradient>
      <radialGradient id="silverInner" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#f9fafb" />
        <stop offset="80%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </radialGradient>
      <radialGradient id="bronzeGrad" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="30%" stopColor="#d97706" />
        <stop offset="70%" stopColor="#b45309" />
        <stop offset="90%" stopColor="#92400e" />
        <stop offset="100%" stopColor="#78350f" />
      </radialGradient>
      <radialGradient id="bronzeInner" cx="40%" cy="40%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="30%" stopColor="#fcd34d" />
        <stop offset="70%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#b45309" />
      </radialGradient>
      <linearGradient id="ribbonGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="50%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#b8860b" />
      </linearGradient>
      <linearGradient id="ribbonGoldFold" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#92400e" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="ribbonSilver" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3f4f6" />
        <stop offset="50%" stopColor="#d1d5db" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <linearGradient id="ribbonBronze" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <filter id="medalShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="4" dy="7" stdDeviation="8" floodColor="#000" floodOpacity="0.55" />
      </filter>
      <filter id="medalGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="goldShine" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#medalShadow)">
      <path d="M48 30 L48 80 L55 85 L62 80 L62 30 Z" fill="url(#ribbonSilver)" />
      <path d="M48 30 L55 35 L55 85 L48 80 Z" fill="#9ca3af" opacity="0.5" />
      <circle cx="55" cy="110" r="35" fill="url(#silverGrad)" filter="url(#medalGlow)" />
      <circle cx="55" cy="110" r="28" fill="url(#silverInner)" />
      <circle cx="55" cy="110" r="20" fill="url(#silverGrad)" opacity="0.8" />
      <ellipse cx="45" cy="100" rx="8" ry="10" fill="#ffffff" opacity="0.4" />
      <text x="55" y="117" fontSize="20" fontWeight="bold" fill="#4b5563" textAnchor="middle">3</text>
    </g>

    <g filter="url(#medalShadow)">
      <path d="M138 30 L138 80 L145 85 L152 80 L152 30 Z" fill="url(#ribbonBronze)" />
      <path d="M138 30 L145 35 L145 85 L138 80 Z" fill="#92400e" opacity="0.4" />
      <circle cx="145" cy="110" r="35" fill="url(#bronzeGrad)" filter="url(#medalGlow)" />
      <circle cx="145" cy="110" r="28" fill="url(#bronzeInner)" />
      <circle cx="145" cy="110" r="20" fill="url(#bronzeGrad)" opacity="0.8" />
      <ellipse cx="135" cy="100" rx="8" ry="10" fill="#fcd34d" opacity="0.4" />
      <text x="145" y="117" fontSize="20" fontWeight="bold" fill="#78350f" textAnchor="middle">2</text>
    </g>

    <g filter="url(#medalShadow)">
      <path d="M92 20 L92 55 L100 62 L108 55 L108 20 Z" fill="url(#ribbonGold)" />
      <path d="M92 20 L100 26 L100 62 L92 55 Z" fill="url(#ribbonGoldFold)" opacity="0.6" />
      <circle cx="100" cy="90" r="42" fill="url(#goldGrad)" filter="url(#goldShine)" />
      <circle cx="100" cy="90" r="34" fill="url(#goldInner)" />
      <circle cx="100" cy="90" r="24" fill="url(#goldGrad)" opacity="0.85" />
      <ellipse cx="88" cy="78" rx="10" ry="12" fill="#fffbeb" opacity="0.6" />
      <circle cx="100" cy="90" r="42" fill="none" stroke="#fef3c7" strokeWidth="2" opacity="0.3" />
      <text x="100" y="98" fontSize="24" fontWeight="bold" fill="#92400e" textAnchor="middle">1</text>
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
