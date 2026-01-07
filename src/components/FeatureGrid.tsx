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
      <linearGradient id="bb_bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="rgba(0,210,255,0.16)"/>
        <stop offset="1" stopColor="rgba(255,255,255,0.06)"/>
      </linearGradient>
      <linearGradient id="bb_stroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="rgba(255,255,255,0.60)"/>
        <stop offset="1" stopColor="rgba(0,210,255,0.52)"/>
      </linearGradient>
      <filter id="bb_shadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="14" stdDeviation="10" floodColor="rgba(0,0,0,0.55)"/>
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="rgba(0,210,255,0.18)"/>
      </filter>

      <linearGradient id="bb_shine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="rgba(255,255,255,0)"/>
        <stop offset="0.5" stopColor="rgba(255,255,255,0.18)"/>
        <stop offset="1" stopColor="rgba(255,255,255,0)"/>
      </linearGradient>
      <clipPath id="bb_clip">
        <rect x="10" y="10" width="76" height="76" rx="18"/>
      </clipPath>
    </defs>

    <g filter="url(#bb_shadow)">
      <g className="bb-float">
        <rect x="10" y="10" width="76" height="76" rx="18" fill="url(#bb_bg)" stroke="url(#bb_stroke)" strokeWidth="2"/>

        <g clipPath="url(#bb_clip)">
          <rect className="bb-sweep" x="-30" y="10" width="28" height="76" fill="url(#bb_shine)" transform="skewX(-18)"/>
        </g>

        <g className="bb-book">
          <path d="M26 30 C26 26, 30 24, 34 24 H66 C70 24, 72 27, 72 31 V70 C72 72, 70 74, 68 74 H34
                   C30 74, 26 72, 26 68 Z"
                fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.18)" strokeWidth="2"/>
          <path className="bb-spine" d="M34 24 V74" stroke="rgba(0,210,255,0.55)" strokeWidth="3" strokeLinecap="round"/>
        </g>

        <g className="bb-cards">
          <rect x="40" y="34" width="26" height="10" rx="4" fill="rgba(255,255,255,0.14)"/>
          <rect x="40" y="48" width="30" height="10" rx="4" fill="rgba(255,255,255,0.16)"/>
          <rect x="40" y="62" width="22" height="10" rx="4" fill="rgba(255,255,255,0.12)"/>
          <circle cx="44" cy="39" r="2" fill="rgba(0,210,255,0.80)"/>
          <circle cx="44" cy="53" r="2" fill="rgba(0,210,255,0.80)"/>
          <circle cx="44" cy="67" r="2" fill="rgba(0,210,255,0.80)"/>
          <rect className="bb-cardshine" x="36" y="30" width="10" height="50" fill="rgba(255,255,255,0.14)" opacity="0" transform="skewX(-18)"/>
        </g>
      </g>
    </g>

    <style>
      {`
        .bb-float { transform-origin: 48px 48px; animation: float5 4.0s ease-in-out infinite; }
        .bb-sweep { animation: sweep 3.3s ease-in-out infinite; }
        .bb-book  { transform-origin: 34px 48px; animation: page 3.2s ease-in-out infinite; }
        .bb-cardshine { animation: cardSweep 2.8s ease-in-out infinite; }

        @keyframes float5 { 0%,100%{ transform: translateY(0px) } 50%{ transform: translateY(-2px) } }
        @keyframes sweep { 0%{ transform: translateX(-10px) skewX(-18deg) } 60%{ transform: translateX(130px) skewX(-18deg)} 100%{ transform: translateX(130px) skewX(-18deg)} }
        @keyframes page  { 0%,100%{ transform: rotate(-0.6deg) } 50%{ transform: rotate(0.6deg) } }
        @keyframes cardSweep{
          0%{ transform: translateX(-10px) skewX(-18deg); opacity:0; }
          25%{ opacity:0.14; }
          55%{ transform: translateX(90px) skewX(-18deg); opacity:0; }
          100%{ transform: translateX(90px) skewX(-18deg); opacity:0; }
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
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="30%" stopColor="#fbbf24" />
        <stop offset="70%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#b8860b" />
      </linearGradient>
      <linearGradient id="goldInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="50%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e5e7eb" />
        <stop offset="30%" stopColor="#d1d5db" />
        <stop offset="70%" stopColor="#9ca3af" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <linearGradient id="silverInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f9fafb" />
        <stop offset="50%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#d1d5db" />
      </linearGradient>
      <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="30%" stopColor="#b45309" />
        <stop offset="70%" stopColor="#92400e" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="bronzeInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="ribbonGold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#b8860b" />
      </linearGradient>
      <linearGradient id="ribbonSilver" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d1d5db" />
        <stop offset="100%" stopColor="#6b7280" />
      </linearGradient>
      <linearGradient id="ribbonBronze" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <filter id="medalShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
      </filter>
      <filter id="medalGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#medalShadow)">
      <path d="M48 30 L48 80 L55 85 L62 80 L62 30 Z" fill="url(#ribbonSilver)" />
      <circle cx="55" cy="110" r="35" fill="url(#silverGrad)" />
      <circle cx="55" cy="110" r="28" fill="url(#silverInner)" />
      <circle cx="55" cy="110" r="20" fill="url(#silverGrad)" opacity="0.9" />
      <text x="55" y="117" fontSize="20" fontWeight="bold" fill="#4b5563" textAnchor="middle">3</text>
    </g>

    <g filter="url(#medalShadow)">
      <path d="M138 30 L138 80 L145 85 L152 80 L152 30 Z" fill="url(#ribbonBronze)" />
      <circle cx="145" cy="110" r="35" fill="url(#bronzeGrad)" />
      <circle cx="145" cy="110" r="28" fill="url(#bronzeInner)" />
      <circle cx="145" cy="110" r="20" fill="url(#bronzeGrad)" opacity="0.9" />
      <text x="145" y="117" fontSize="20" fontWeight="bold" fill="#78350f" textAnchor="middle">2</text>
    </g>

    <g filter="url(#medalShadow)">
      <path d="M92 20 L92 55 L100 62 L108 55 L108 20 Z" fill="url(#ribbonGold)" />
      <circle cx="100" cy="90" r="42" fill="url(#goldGrad)" filter="url(#medalGlow)" />
      <circle cx="100" cy="90" r="34" fill="url(#goldInner)" />
      <circle cx="100" cy="90" r="24" fill="url(#goldGrad)" opacity="0.9" />
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
