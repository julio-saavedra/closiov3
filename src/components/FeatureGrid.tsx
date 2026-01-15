import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import PoweredBySection from './PoweredBySection';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && !hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
  }, [isInView, delay, hasStarted]);

  useEffect(() => {
    if (!isTyping || !hasStarted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isTyping, text, hasStarted]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  repeatDelay: number;
}

const SparkleEffect: React.FC<{ isHovered: boolean; isDashboard: boolean }> = ({ isHovered, isDashboard }) => {
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
                duration: 3.0,
                delay: particle.delay,
                ease: 'easeOut',
              }}
              className={`absolute rounded-full ${isDashboard ? 'bg-black' : 'bg-white'}`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                boxShadow: isDashboard
                  ? '0 0 4px rgba(0, 0, 0, 0.6)'
                  : '0 0 4px rgba(255, 255, 255, 0.6)',
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
      <linearGradient id="dealCard1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
      </linearGradient>
      <linearGradient id="dealCard2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
      </linearGradient>
      <linearGradient id="dealCard3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
      </linearGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#8b5cf6" floodOpacity="0.25" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="dealShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" />
        <feOffset dx="0" dy="4" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#dealShadow)" opacity="0.35">
      <rect x="8" y="125" width="184" height="70" rx="16" fill="url(#dealCard3)" stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.06" />
      <text x="20" y="145" fontSize="10" fill="#9ca3af" opacity="0.55" fontWeight="500">S. Anderson</text>
      <text x="20" y="161" fontSize="8" fill="#6b7280" opacity="0.5">Term Life Policy</text>
      <text x="180" y="161" fontSize="11" fill="#8b5cf6" opacity="0.6" textAnchor="end" fontWeight="600">$8,200</text>
      <text x="180" y="173" fontSize="7" fill="#a78bfa" opacity="0.5" textAnchor="end">Annual</text>
      <rect x="20" y="178" width="34" height="12" rx="6" fill="#6366f1" opacity="0.18" />
      <text x="37" y="186" fontSize="7" fill="#818cf8" opacity="0.6" textAnchor="middle">Active</text>
    </g>

    <g filter="url(#dealShadow)" opacity="0.55">
      <rect x="6" y="68" width="188" height="75" rx="17" fill="url(#dealCard2)" stroke="#ffffff" strokeWidth="0.35" strokeOpacity="0.08" />
      <text x="18" y="89" fontSize="11" fill="#d1d5db" opacity="0.6" fontWeight="500">M. Rodriguez</text>
      <text x="18" y="106" fontSize="9" fill="#9ca3af" opacity="0.58">Whole Life Policy</text>
      <text x="186" y="106" fontSize="12" fill="#8b5cf6" opacity="0.7" textAnchor="end" fontWeight="600">$12,450</text>
      <text x="186" y="119" fontSize="7.5" fill="#a78bfa" opacity="0.6" textAnchor="end">Annual</text>
      <rect x="18" y="125" width="40" height="13" rx="6.5" fill="#7c3aed" opacity="0.22" />
      <text x="38" y="133.5" fontSize="7.5" fill="#a78bfa" opacity="0.7" textAnchor="middle">Pending</text>
    </g>

    <g filter="url(#dealShadow)" opacity="1">
      <rect x="4" y="4" width="192" height="82" rx="18" fill="url(#dealCard1)" stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.12" />
      <circle cx="20" cy="28" r="10" fill="#8b5cf6" opacity="0.32" filter="url(#softGlow)" />
      <text x="20" y="32" fontSize="8" fill="#ffffff" opacity="0.85" textAnchor="middle" fontWeight="700">JD</text>

      <text x="36" y="25" fontSize="12" fill="#f9fafb" opacity="0.8" fontWeight="600">Jennifer Davis</text>
      <text x="36" y="40" fontSize="9.5" fill="#d1d5db" opacity="0.7">Universal Life Policy</text>

      <text x="190" y="30" fontSize="15" fill="#8b5cf6" opacity="0.9" textAnchor="end" fontWeight="700" filter="url(#softGlow)">$18,900</text>
      <text x="190" y="43" fontSize="8" fill="#a78bfa" opacity="0.75" textAnchor="end">Annual Premium</text>

      <rect x="36" y="54" width="44" height="15" rx="7.5" fill="#7c3aed" opacity="0.32" />
      <text x="58" y="63.5" fontSize="8" fill="#c4b5fd" opacity="0.9" textAnchor="middle" fontWeight="500">In Review</text>

      <rect x="86" y="54" width="30" height="15" rx="7.5" fill="#6366f1" opacity="0.28" />
      <text x="101" y="63.5" fontSize="7.5" fill="#818cf8" opacity="0.8" textAnchor="middle">+New</text>
    </g>
  </svg>
);

const HierarchyIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="hierNode1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="hierNode2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.18" />
      </linearGradient>
      <linearGradient id="hierNode3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#6b7280" stopOpacity="0.15" />
      </linearGradient>
      <filter id="hierGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feFlood floodColor="#8b5cf6" floodOpacity="0.3" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="nodeShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" />
        <feOffset dx="0" dy="2" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g opacity="0.25">
      <line x1="100" y1="55" x2="60" y2="95" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="100" y1="55" x2="140" y2="95" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="60" y1="125" x2="40" y2="160" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.25" />
      <line x1="60" y1="125" x2="80" y2="160" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.25" />
      <line x1="140" y1="125" x2="120" y2="160" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.25" />
      <line x1="140" y1="125" x2="160" y2="160" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.25" />
    </g>

    <g opacity="0.6">
      <line x1="100" y1="55" x2="60" y2="95" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="3,3" />
      <line x1="100" y1="55" x2="140" y2="95" stroke="#9ca3af" strokeWidth="2" strokeOpacity="0.4" strokeDasharray="3,3" />
      <line x1="60" y1="125" x2="40" y2="160" stroke="#6b7280" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="2,2" />
      <line x1="60" y1="125" x2="80" y2="160" stroke="#6b7280" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="2,2" />
      <line x1="140" y1="125" x2="120" y2="160" stroke="#6b7280" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="2,2" />
      <line x1="140" y1="125" x2="160" y2="160" stroke="#6b7280" strokeWidth="1.8" strokeOpacity="0.35" strokeDasharray="2,2" />
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="75" y="25" width="50" height="40" rx="12" fill="url(#hierNode1)" stroke="#a78bfa" strokeWidth="2" strokeOpacity="0.4" />
      <circle cx="100" cy="35" r="5" fill="#c4b5fd" opacity="0.6" filter="url(#hierGlow)" />
      <text x="100" y="52" fontSize="7" fill="#e9d5ff" opacity="0.8" textAnchor="middle" fontWeight="600">Director</text>
      <text x="100" y="60" fontSize="6" fill="#d8b4fe" opacity="0.6" textAnchor="middle">$280K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="35" y="95" width="50" height="40" rx="10" fill="url(#hierNode2)" stroke="#8b5cf6" strokeWidth="1.8" strokeOpacity="0.35" />
      <circle cx="60" cy="105" r="4" fill="#a78bfa" opacity="0.55" />
      <text x="60" y="120" fontSize="6.5" fill="#c4b5fd" opacity="0.75" textAnchor="middle" fontWeight="500">Manager</text>
      <text x="60" y="128" fontSize="5.5" fill="#a78bfa" opacity="0.55" textAnchor="middle">$145K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="115" y="95" width="50" height="40" rx="10" fill="url(#hierNode2)" stroke="#8b5cf6" strokeWidth="1.8" strokeOpacity="0.35" />
      <circle cx="140" cy="105" r="4" fill="#a78bfa" opacity="0.55" />
      <text x="140" y="120" fontSize="6.5" fill="#c4b5fd" opacity="0.75" textAnchor="middle" fontWeight="500">Manager</text>
      <text x="140" y="128" fontSize="5.5" fill="#a78bfa" opacity="0.55" textAnchor="middle">$152K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="15" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="40" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="40" y="181" fontSize="6" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="40" y="188" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">$42K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="55" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="80" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="80" y="181" fontSize="6" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="80" y="188" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">$38K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="95" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="120" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="120" y="181" fontSize="6" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="120" y="188" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">$51K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="135" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="160" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="160" y="181" fontSize="6" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="160" y="188" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">$47K</text>
    </g>
  </svg>
);

const CommissionIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="commPanel1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="commPanel2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6b7280" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#4b5563" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="commPanel3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
      </linearGradient>
      <filter id="commGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feFlood floodColor="#8b5cf6" floodOpacity="0.2" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" />
        <feOffset dx="0" dy="3" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#softShadow)">
      <rect x="10" y="135" width="80" height="55" rx="16" fill="url(#commPanel2)" stroke="#6b7280" strokeWidth="1" strokeOpacity="0.2" />
      <rect x="15" y="145" width="35" height="4" rx="2" fill="#9ca3af" opacity="0.25" />
      <rect x="15" y="153" width="50" height="3" rx="1.5" fill="#6b7280" opacity="0.2" />
      <rect x="15" y="159" width="28" height="3" rx="1.5" fill="#6b7280" opacity="0.18" />
      <circle cx="75" cy="165" r="12" fill="#6b7280" opacity="0.15" />
      <text x="75" y="170" fontSize="10" fill="#9ca3af" opacity="0.5" textAnchor="middle" fontWeight="600">$</text>
      <text x="22" y="180" fontSize="6" fill="#6b7280" opacity="0.6">Metric A</text>
    </g>

    <g filter="url(#softShadow)">
      <rect x="110" y="125" width="85" height="60" rx="18" fill="url(#commPanel3)" stroke="#8b5cf6" strokeWidth="1.2" strokeOpacity="0.25" />
      <rect x="118" y="138" width="40" height="5" rx="2.5" fill="#a78bfa" opacity="0.3" />
      <rect x="118" y="148" width="55" height="4" rx="2" fill="#8b5cf6" opacity="0.25" />
      <rect x="118" y="156" width="32" height="3.5" rx="1.75" fill="#8b5cf6" opacity="0.2" />
      <circle cx="175" cy="157" r="14" fill="#8b5cf6" opacity="0.2" filter="url(#commGlow)" />
      <text x="175" y="162" fontSize="11" fill="#c4b5fd" opacity="0.65" textAnchor="middle" fontWeight="600">$</text>
      <text x="125" y="176" fontSize="6.5" fill="#a78bfa" opacity="0.65">Data Set</text>
    </g>

    <g filter="url(#softShadow)">
      <rect x="35" y="30" width="130" height="75" rx="20" fill="url(#commPanel1)" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.3" />

      <rect x="48" y="48" width="45" height="6" rx="3" fill="#8b5cf6" opacity="0.3" />
      <rect x="48" y="60" width="68" height="5" rx="2.5" fill="#7c3aed" opacity="0.25" />
      <rect x="48" y="70" width="40" height="4" rx="2" fill="#7c3aed" opacity="0.2" />

      <g opacity="0.35">
        <rect x="48" y="82" width="32" height="12" rx="6" fill="#8b5cf6" opacity="0.25" />
        <text x="64" y="90" fontSize="6" fill="#c4b5fd" opacity="0.7" textAnchor="middle">Value</text>
      </g>

      <circle cx="140" cy="67" r="20" fill="#7c3aed" opacity="0.15" filter="url(#commGlow)" />
      <circle cx="140" cy="67" r="15" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.3" />
      <text x="140" y="73" fontSize="16" fill="#c4b5fd" opacity="0.7" textAnchor="middle" fontWeight="700">$</text>

      <text x="48" y="42" fontSize="7" fill="#8b5cf6" opacity="0.6" fontWeight="500">Payment Flow</text>
    </g>

    <g opacity="0.4">
      <circle cx="95" cy="110" r="3" fill="#8b5cf6" />
      <circle cx="105" cy="115" r="2.5" fill="#a78bfa" />
      <circle cx="115" cy="108" r="2" fill="#6b7280" />
    </g>

    <g opacity="0.5">
      <rect x="125" y="48" width="25" height="3" rx="1.5" fill="#a78bfa" opacity="0.4" />
      <rect x="125" y="55" width="18" height="2.5" rx="1.25" fill="#8b5cf6" opacity="0.35" />
    </g>
  </svg>
);

const DashboardIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="dashPanel1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1f2937" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#111827" stopOpacity="0.04" />
      </linearGradient>
      <linearGradient id="dashPanel2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#374151" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#1f2937" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="dashAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.08" />
      </linearGradient>
      <filter id="dashShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
        <feOffset dx="0" dy="2" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.15" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g opacity="0.25">
      <line x1="30" y1="165" x2="175" y2="165" stroke="#1f2937" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="30" y1="135" x2="175" y2="135" stroke="#1f2937" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="3,3" />
      <line x1="30" y1="105" x2="175" y2="105" stroke="#1f2937" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="3,3" />
      <line x1="30" y1="75" x2="175" y2="75" stroke="#1f2937" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="3,3" />
    </g>

    <g filter="url(#dashShadow)">
      <rect x="15" y="25" width="70" height="50" rx="14" fill="url(#dashPanel1)" stroke="#1f2937" strokeWidth="0.8" strokeOpacity="0.1" />
      <rect x="22" y="35" width="30" height="4" rx="2" fill="#374151" opacity="0.2" />
      <rect x="22" y="43" width="42" height="3" rx="1.5" fill="#4b5563" opacity="0.15" />
      <rect x="22" y="50" width="25" height="3" rx="1.5" fill="#4b5563" opacity="0.12" />
      <circle cx="70" cy="52" r="10" fill="#7c3aed" opacity="0.1" />
      <text x="70" y="56" fontSize="8" fill="#6b7280" opacity="0.6" textAnchor="middle" fontWeight="600">A</text>
    </g>

    <g filter="url(#dashShadow)">
      <rect x="95" y="25" width="90" height="50" rx="14" fill="url(#dashPanel2)" stroke="#1f2937" strokeWidth="0.9" strokeOpacity="0.12" />
      <rect x="105" y="35" width="35" height="5" rx="2.5" fill="#4b5563" opacity="0.22" />
      <rect x="105" y="45" width="52" height="4" rx="2" fill="#6b7280" opacity="0.18" />
      <rect x="105" y="53" width="30" height="3.5" rx="1.75" fill="#6b7280" opacity="0.15" />
      <circle cx="168" cy="52" r="12" fill="#6366f1" opacity="0.12" />
      <text x="168" y="57" fontSize="9" fill="#6b7280" opacity="0.65" textAnchor="middle" fontWeight="600">B</text>
    </g>

    <g filter="url(#dashShadow)">
      <rect x="15" y="90" width="170" height="90" rx="18" fill="url(#dashAccent)" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.15" />

      <g opacity="0.3">
        <rect x="35" y="145" width="12" height="25" rx="4" fill="#374151" opacity="0.4" />
        <rect x="55" y="130" width="12" height="40" rx="4" fill="#374151" opacity="0.45" />
        <rect x="75" y="118" width="12" height="52" rx="4" fill="#374151" opacity="0.5" />
        <rect x="95" y="135" width="12" height="35" rx="4" fill="#374151" opacity="0.45" />
        <rect x="115" y="125" width="12" height="45" rx="4" fill="#374151" opacity="0.48" />
        <rect x="135" y="140" width="12" height="30" rx="4" fill="#374151" opacity="0.42" />
        <rect x="155" y="120" width="12" height="50" rx="4" fill="#374151" opacity="0.5" />
      </g>

      <polyline
        points="41,140 61,125 81,112 101,130 121,120 141,135 161,115"
        fill="none"
        stroke="#6366f1"
        strokeWidth="2.5"
        opacity="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g opacity="0.4">
        <circle cx="41" cy="140" r="3.5" fill="#7c3aed" />
        <circle cx="61" cy="125" r="3.5" fill="#7c3aed" />
        <circle cx="81" cy="112" r="3.5" fill="#7c3aed" />
        <circle cx="101" cy="130" r="3.5" fill="#7c3aed" />
        <circle cx="121" cy="120" r="3.5" fill="#7c3aed" />
        <circle cx="141" cy="135" r="3.5" fill="#7c3aed" />
        <circle cx="161" cy="115" r="3.5" fill="#7c3aed" />
      </g>

      <text x="25" y="105" fontSize="7" fill="#6b7280" opacity="0.6" fontWeight="500">Analytics View</text>

      <g opacity="0.25">
        <rect x="145" y="100" width="28" height="3" rx="1.5" fill="#6b7280" />
        <rect x="145" y="107" width="20" height="2.5" rx="1.25" fill="#6b7280" />
      </g>
    </g>
  </svg>
);

const MedalsIcon: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="rank1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="rank2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="rank3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6b7280" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#4b5563" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="rankOther" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4b5563" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#374151" stopOpacity="0.06" />
      </linearGradient>
      <filter id="leaderGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#8b5cf6" floodOpacity="0.25" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="rankShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
        <feOffset dx="0" dy="2" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#rankShadow)">
      <rect x="15" y="25" width="170" height="35" rx="14" fill="url(#rank1)" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.35" />
      <circle cx="35" cy="42" r="8" fill="#7c3aed" opacity="0.25" filter="url(#leaderGlow)" />
      <text x="35" y="46" fontSize="9" fill="#c4b5fd" opacity="0.8" textAnchor="middle" fontWeight="700">1</text>

      <rect x="50" y="33" width="42" height="5" rx="2.5" fill="#a78bfa" opacity="0.35" />
      <rect x="50" y="43" width="58" height="4" rx="2" fill="#8b5cf6" opacity="0.3" />

      <rect x="140" y="35" width="35" height="16" rx="8" fill="#7c3aed" opacity="0.2" />
      <text x="157" y="45" fontSize="8" fill="#c4b5fd" opacity="0.7" textAnchor="middle" fontWeight="600">Score</text>
    </g>

    <g filter="url(#rankShadow)">
      <rect x="15" y="70" width="170" height="32" rx="12" fill="url(#rank2)" stroke="#8b5cf6" strokeWidth="1.2" strokeOpacity="0.28" />
      <circle cx="33" cy="86" r="7" fill="#8b5cf6" opacity="0.2" />
      <text x="33" y="89" fontSize="8" fill="#a78bfa" opacity="0.75" textAnchor="middle" fontWeight="600">2</text>

      <rect x="46" y="78" width="38" height="4.5" rx="2.25" fill="#a78bfa" opacity="0.3" />
      <rect x="46" y="86" width="50" height="3.5" rx="1.75" fill="#8b5cf6" opacity="0.25" />

      <rect x="145" y="79" width="30" height="14" rx="7" fill="#8b5cf6" opacity="0.18" />
      <text x="160" y="88" fontSize="7" fill="#c4b5fd" opacity="0.65" textAnchor="middle" fontWeight="500">Data</text>
    </g>

    <g filter="url(#rankShadow)">
      <rect x="15" y="110" width="170" height="30" rx="12" fill="url(#rank3)" stroke="#6b7280" strokeWidth="1" strokeOpacity="0.25" />
      <circle cx="32" cy="125" r="6.5" fill="#6b7280" opacity="0.2" />
      <text x="32" y="128" fontSize="7.5" fill="#9ca3af" opacity="0.7" textAnchor="middle" fontWeight="600">3</text>

      <rect x="44" y="118" width="35" height="4" rx="2" fill="#9ca3af" opacity="0.28" />
      <rect x="44" y="125" width="46" height="3.5" rx="1.75" fill="#6b7280" opacity="0.23" />

      <rect x="148" y="118" width="28" height="13" rx="6.5" fill="#6b7280" opacity="0.15" />
      <text x="162" y="126" fontSize="6.5" fill="#9ca3af" opacity="0.6" textAnchor="middle" fontWeight="500">Value</text>
    </g>

    <g filter="url(#rankShadow)" opacity="0.7">
      <rect x="15" y="148" width="170" height="28" rx="11" fill="url(#rankOther)" stroke="#4b5563" strokeWidth="0.8" strokeOpacity="0.2" />
      <circle cx="31" cy="162" r="6" fill="#4b5563" opacity="0.2" />
      <text x="31" y="165" fontSize="7" fill="#6b7280" opacity="0.65" textAnchor="middle" fontWeight="500">4</text>

      <rect x="42" y="155" width="32" height="3.5" rx="1.75" fill="#6b7280" opacity="0.25" />
      <rect x="42" y="162" width="42" height="3" rx="1.5" fill="#6b7280" opacity="0.2" />

      <rect x="150" y="156" width="26" height="12" rx="6" fill="#4b5563" opacity="0.15" />
      <text x="163" y="163" fontSize="6" fill="#6b7280" opacity="0.55" textAnchor="middle" fontWeight="500">Item</text>
    </g>

    <g opacity="0.4">
      <rect x="15" y="184" width="170" height="3" rx="1.5" fill="#4b5563" opacity="0.2" />
      <rect x="15" y="191" width="140" height="2.5" rx="1.25" fill="#4b5563" opacity="0.15" />
    </g>
  </svg>
);

const HorizontalLine: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0"]
  });

  // Draw the line left to right quickly when halfway through section
  const pathLength = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Then move down and fade out
  const translateY = useTransform(scrollYProgress, [0.3, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0.3, 0.7, 1], [1, 0.5, 0]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none overflow-visible">
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          overflow: 'visible',
          translateY,
          opacity
        }}
      >
        <motion.path
          d="M 0 50 L 100 50"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="0.45"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength,
          }}
          initial={{ pathLength: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
      </motion.svg>
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
  gridArea: string;
}

const GridPattern: React.FC<{ isDashboard: boolean; index: number }> = ({ isDashboard, index }) => {
  const patternId = `grid-pattern-${index}`;
  return (
    <div
      className="absolute top-0 right-0 w-56 h-56 pointer-events-none overflow-hidden"
      style={{
        maskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
      }}
    >
      <svg width="224" height="224" className="opacity-40">
        <defs>
          <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke={isDashboard ? '#000000' : '#ffffff'}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="224" height="224" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

const BottomGlow: React.FC<{ isDashboard: boolean }> = ({ isDashboard }) => (
  <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 blur-3xl"
      style={{
        background: isDashboard
          ? 'radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.2), transparent 70%)'
          : 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.15), transparent 70%)',
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-28 blur-2xl"
      style={{
        background: isDashboard
          ? 'radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.15), transparent 70%)'
          : 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.12), transparent 70%)',
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-16 blur-xl"
      style={{
        background: isDashboard
          ? 'radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.25), transparent 70%)'
          : 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.08), transparent 70%)',
      }}
    />
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, gridArea }) => {
  const Icon = feature.icon;
  const staggerDelay = index * 0.15;
  const isDashboard = feature.title === '/ Dashboard Analytics';

  const layoutTemplates = {
    0: {
      artPosition: 'absolute left-0 top-0 bottom-0 w-[40%]',
      artOpacity: 'opacity-[0.25]',
      contentPosition: 'absolute right-0 top-0 bottom-0 w-[60%] flex items-center justify-end pr-10',
      contentMaxWidth: 'max-w-full',
      contentAlign: 'items-end text-right',
      artGradient: '',
    },
    1: {
      artPosition: 'absolute right-0 top-0 bottom-0 w-[40%]',
      artOpacity: 'opacity-[0.25]',
      contentPosition: 'absolute left-0 top-0 bottom-0 w-[60%] flex items-center justify-start pl-10',
      contentMaxWidth: 'max-w-full',
      contentAlign: 'items-start text-left',
      artGradient: '',
    },
    2: {
      artPosition: 'absolute bottom-0 left-0 right-0 h-[45%]',
      artOpacity: 'opacity-[0.28]',
      contentPosition: 'absolute top-0 left-0 right-0 h-[55%] flex items-start justify-start pt-10 px-10',
      contentMaxWidth: 'max-w-[85%]',
      contentAlign: 'items-start text-left',
      artGradient: '',
    },
    3: {
      artPosition: 'absolute top-0 left-0 right-0 h-[40%]',
      artOpacity: 'opacity-[0.30]',
      contentPosition: 'absolute bottom-0 left-0 right-0 h-[60%] flex items-end justify-start pb-10 px-10',
      contentMaxWidth: 'max-w-[85%]',
      contentAlign: 'items-start text-left',
      artGradient: '',
    },
    4: {
      artPosition: 'absolute bottom-0 right-0 w-[45%] h-[50%]',
      artOpacity: 'opacity-[0.25]',
      contentPosition: 'absolute top-0 left-0 right-[45%] bottom-[50%] flex items-start justify-start pt-10 pl-10',
      contentMaxWidth: 'max-w-full',
      contentAlign: 'items-start text-left',
      artGradient: '',
    },
  };

  const template = layoutTemplates[index as keyof typeof layoutTemplates];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 1.2,
        delay: staggerDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative overflow-hidden"
      style={{
        gridArea,
        background: isDashboard
          ? '#ffffff'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.2) 100%)',
        willChange: 'transform, opacity',
      }}
    >
      <GridPattern isDashboard={isDashboard} index={index} />
      <BottomGlow isDashboard={isDashboard} />

      <div className={`${template.artPosition} ${template.artOpacity} z-[1] pointer-events-none flex items-center justify-center`}>
        <Icon className="w-full h-full object-contain" />
      </div>

      <div className={`${template.contentPosition} z-[2]`}>
        <div className={`flex flex-col ${template.contentMaxWidth} ${template.contentAlign}`}>
          <h3 className={`text-2xl lg:text-3xl font-bold leading-[1.3] mb-4 ${isDashboard ? 'text-gray-900' : 'text-white'}`}>
            {feature.title}
          </h3>
          <p className={`text-base lg:text-lg leading-[1.7] ${isDashboard ? 'text-gray-800' : 'text-white/65'}`}>
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
      title: '/ Book of Business',
      description: 'No more digging through spreadsheets or losing track of clients. Your entire portfolio lives in one place, so you always know exactly where every deal stands.',
      icon: BookIcon,
    },
    {
      title: '/ Team Hierarchy',
      description: 'See who reports to who and how your team is actually performing. No more confusion about splits or wondering how your downline is doing.',
      icon: HierarchyIcon,
    },
    {
      title: '/ Commission Tracking',
      description: 'Stop chasing down commission statements and second-guessing your payouts. Know exactly what you earned, when you earned it, and where it came from.',
      icon: CommissionIcon,
    },
    {
      title: '/ Dashboard Analytics',
      description: 'Get the full picture of your business at a glance. See what is working, what needs attention, and make smarter decisions without crunching numbers yourself.',
      icon: DashboardIcon,
    },
    {
      title: '/ Leaderboard',
      description: 'Healthy competition drives results. See where you stack up against your peers and celebrate the wins that keep your team hungry for more.',
      icon: MedalsIcon,
    },
  ];

  return (
    <section className="relative py-20 bg-[#0D0D0D] overflow-hidden">
      <HorizontalLine />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed md:max-w-md whitespace-nowrap">
            <TypewriterText
              text="/ Core Features"
              delay={200}
              className="text-gray-400"
            />
          </h2>
          <p className="text-white/50 text-lg leading-[1.6] md:max-w-xl md:text-right">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <PoweredBySection />

        <div className="px-2 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0.3) 100%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.06)',
            }}
          >
            <div
              className="hidden lg:grid gap-[12px] p-[12px] min-h-[1100px] relative"
              style={{
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridTemplateRows: 'repeat(12, 1fr)',
                gridTemplateAreas: `
                  "a a a a a a a b b b b b"
                  "a a a a a a a b b b b b"
                  "a a a a a a a b b b b b"
                  "a a a a a a a b b b b b"
                  "a a a a a a a b b b b b"
                  "a a a a a a a c c c c c"
                  "a a a a a a a c c c c c"
                  "a a a a a a a c c c c c"
                  "d d d d d e e e e e e e"
                  "d d d d d e e e e e e e"
                  "d d d d d e e e e e e e"
                  "d d d d d e e e e e e e"
                `
              }}
            >
              <FeatureCard feature={features[0]} index={0} gridArea="a" />
              <FeatureCard feature={features[1]} index={1} gridArea="b" />
              <FeatureCard feature={features[2]} index={2} gridArea="c" />
              <FeatureCard feature={features[3]} index={3} gridArea="d" />
              <FeatureCard feature={features[4]} index={4} gridArea="e" />
            </div>

            <div className="lg:hidden flex flex-col gap-6 p-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    background: feature.title === '/ Dashboard Analytics'
                      ? '#ffffff'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.2) 100%)',
                    border: feature.title === '/ Dashboard Analytics'
                      ? '3px solid rgb(229, 231, 235)'
                      : '3px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: feature.title === '/ Dashboard Analytics'
                      ? '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)'
                      : '0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 12px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <FeatureCard feature={feature} index={index} gridArea="auto" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
