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
  const isInView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });

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

const BookIcon: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: '0px 0px -15% 0px' });

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
      
      // Small delay before starting
      setTimeout(() => {
        // Animate first number to 4,100 over 3.5 seconds
        const duration1 = 3500;
        const steps1 = 100;
        const increment1 = 4100 / steps1;
        let current1 = 0;
        
        const interval1 = setInterval(() => {
          current1 += increment1;
          if (current1 >= 4100) {
            setCount1(4100);
            clearInterval(interval1);
          } else {
            setCount1(Math.floor(current1));
          }
        }, duration1 / steps1);

        // Animate second number to 6,225 over 3.5 seconds
        const duration2 = 3500;
        const steps2 = 100;
        const increment2 = 6225 / steps2;
        let current2 = 0;
        
        const interval2 = setInterval(() => {
          current2 += increment2;
          if (current2 >= 6225) {
            setCount2(6225);
            clearInterval(interval2);
          } else {
            setCount2(Math.floor(current2));
          }
        }, duration2 / steps2);

        // Animate third number to 9,450 over 3.5 seconds
        const duration3 = 3500;
        const steps3 = 100;
        const increment3 = 9450 / steps3;
        let current3 = 0;
        
        const interval3 = setInterval(() => {
          current3 += increment3;
          if (current3 >= 9450) {
            setCount3(9450);
            clearInterval(interval3);
          } else {
            setCount3(Math.floor(current3));
          }
        }, duration3 / steps3);
      }, 200);
    }
  }, [isInView, animated]);

  return (
    <svg ref={svgRef} viewBox="0 0 200 200" className="w-full h-full">
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
        <text x="20" y="145" fontSize="8.5" fill="#9ca3af" opacity="0.55" fontWeight="500">S. Anderson</text>
        <text x="20" y="161" fontSize="6.5" fill="#6b7280" opacity="0.5">Term Life Policy</text>
        <text x="180" y="161" fontSize="9.5" fill="#8b5cf6" opacity="0.6" textAnchor="end" fontWeight="600">
          ${count1.toLocaleString()}
        </text>
        <text x="180" y="173" fontSize="6" fill="#a78bfa" opacity="0.5" textAnchor="end">Annual</text>
        <rect x="20" y="178" width="34" height="12" rx="6" fill="#6366f1" opacity="0.18" />
        <text x="37" y="186" fontSize="6" fill="#818cf8" opacity="0.6" textAnchor="middle">Active</text>
      </g>

      <g filter="url(#dealShadow)" opacity="0.55">
        <rect x="6" y="68" width="188" height="75" rx="17" fill="url(#dealCard2)" stroke="#ffffff" strokeWidth="0.35" strokeOpacity="0.08" />
        <text x="18" y="89" fontSize="9.5" fill="#d1d5db" opacity="0.6" fontWeight="500">M. Rodriguez</text>
        <text x="18" y="106" fontSize="7.5" fill="#9ca3af" opacity="0.58">Whole Life Policy</text>
        <text x="186" y="106" fontSize="10.5" fill="#8b5cf6" opacity="0.7" textAnchor="end" fontWeight="600">
          ${count2.toLocaleString()}
        </text>
        <text x="186" y="119" fontSize="6.5" fill="#a78bfa" opacity="0.6" textAnchor="end">Annual</text>
        <rect x="18" y="125" width="40" height="13" rx="6.5" fill="#7c3aed" opacity="0.22" />
        <text x="38" y="133.5" fontSize="6.5" fill="#a78bfa" opacity="0.7" textAnchor="middle">Pending</text>
      </g>

      <g filter="url(#dealShadow)" opacity="1">
        <rect x="4" y="4" width="192" height="82" rx="18" fill="url(#dealCard1)" stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.12" />
        <circle cx="20" cy="28" r="10" fill="#8b5cf6" opacity="0.32" filter="url(#softGlow)" />
        <text x="20" y="32" fontSize="7" fill="#ffffff" opacity="0.85" textAnchor="middle" fontWeight="700">JD</text>

        <text x="36" y="25" fontSize="10.5" fill="#f9fafb" opacity="0.8" fontWeight="600">Jennifer Davis</text>
        <text x="36" y="40" fontSize="8" fill="#d1d5db" opacity="0.7">Universal Life Policy</text>

        <text x="190" y="30" fontSize="13" fill="#8b5cf6" opacity="0.9" textAnchor="end" fontWeight="700" filter="url(#softGlow)">
          ${count3.toLocaleString()}
        </text>
        <text x="190" y="43" fontSize="6.5" fill="#a78bfa" opacity="0.75" textAnchor="end">Annual Premium</text>

        <rect x="36" y="54" width="44" height="15" rx="7.5" fill="#7c3aed" opacity="0.32" />
        <text x="58" y="63.5" fontSize="7" fill="#c4b5fd" opacity="0.9" textAnchor="middle" fontWeight="500">In Review</text>

        <rect x="86" y="54" width="30" height="15" rx="7.5" fill="#6366f1" opacity="0.28" />
        <text x="101" y="63.5" fontSize="6.5" fill="#818cf8" opacity="0.8" textAnchor="middle">+New</text>
      </g>
    </svg>
  );
};

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
      <text x="100" y="52" fontSize="6" fill="#e9d5ff" opacity="0.8" textAnchor="middle" fontWeight="600">Agency Owner</text>
      <text x="100" y="60" fontSize="5" fill="#d8b4fe" opacity="0.6" textAnchor="middle">$280K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="35" y="95" width="50" height="40" rx="10" fill="url(#hierNode2)" stroke="#8b5cf6" strokeWidth="1.8" strokeOpacity="0.35" />
      <circle cx="60" cy="105" r="4" fill="#a78bfa" opacity="0.55" />
      <text x="60" y="120" fontSize="5.5" fill="#c4b5fd" opacity="0.75" textAnchor="middle" fontWeight="500">Manager</text>
      <text x="60" y="128" fontSize="4.5" fill="#a78bfa" opacity="0.55" textAnchor="middle">$145K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="115" y="95" width="50" height="40" rx="10" fill="url(#hierNode2)" stroke="#8b5cf6" strokeWidth="1.8" strokeOpacity="0.35" />
      <circle cx="140" cy="105" r="4" fill="#a78bfa" opacity="0.55" />
      <text x="140" y="120" fontSize="5.5" fill="#c4b5fd" opacity="0.75" textAnchor="middle" fontWeight="500">Manager</text>
      <text x="140" y="128" fontSize="4.5" fill="#a78bfa" opacity="0.55" textAnchor="middle">$152K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="15" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="40" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="40" y="181" fontSize="5" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="40" y="188" fontSize="4" fill="#9ca3af" opacity="0.5" textAnchor="middle">$42K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="55" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="80" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="80" y="181" fontSize="5" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="80" y="188" fontSize="4" fill="#9ca3af" opacity="0.5" textAnchor="middle">$38K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="95" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="120" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="120" y="181" fontSize="5" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="120" y="188" fontSize="4" fill="#9ca3af" opacity="0.5" textAnchor="middle">$51K</text>
    </g>

    <g filter="url(#nodeShadow)">
      <rect x="135" y="160" width="50" height="35" rx="8" fill="url(#hierNode3)" stroke="#6b7280" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="160" cy="168" r="3" fill="#9ca3af" opacity="0.5" />
      <text x="160" y="181" fontSize="5" fill="#d1d5db" opacity="0.65" textAnchor="middle">Agent</text>
      <text x="160" y="188" fontSize="4" fill="#9ca3af" opacity="0.5" textAnchor="middle">$47K</text>
    </g>
  </svg>
);

const CommissionIcon: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [teamTotal, setTeamTotal] = useState(0);
  const [teamPaid, setTeamPaid] = useState(0);
  const [teamPending, setTeamPending] = useState(0);
  const [personalTotal, setPersonalTotal] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: '0px 0px -15% 0px' });

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
      
      setTimeout(() => {
        // Animate Team Total to 142,580 over 3.5 seconds
        const duration = 3500;
        const steps = 100;
        const teamTotalIncrement = 142580 / steps;
        const teamPaidIncrement = 95200 / steps;
        const teamPendingIncrement = 47380 / steps;
        const personalIncrement = 28450 / steps;
        let currentTeamTotal = 0;
        let currentTeamPaid = 0;
        let currentTeamPending = 0;
        let currentPersonal = 0;
        
        const interval = setInterval(() => {
          currentTeamTotal += teamTotalIncrement;
          currentTeamPaid += teamPaidIncrement;
          currentTeamPending += teamPendingIncrement;
          currentPersonal += personalIncrement;
          
          if (currentTeamTotal >= 142580) {
            setTeamTotal(142580);
            setTeamPaid(95200);
            setTeamPending(47380);
            setPersonalTotal(28450);
            clearInterval(interval);
          } else {
            setTeamTotal(Math.floor(currentTeamTotal));
            setTeamPaid(Math.floor(currentTeamPaid));
            setTeamPending(Math.floor(currentTeamPending));
            setPersonalTotal(Math.floor(currentPersonal));
          }
        }, duration / steps);
      }, 200);
    }
  }, [isInView, animated]);

  return (
    <svg ref={svgRef} viewBox="0 0 240 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="teamCard" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="personalCard" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6ad4f2" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#35E7E0" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="commHeader" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4b5563" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#374151" stopOpacity="0.08" />
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

    {/* Header */}
    <g filter="url(#softShadow)">
      <rect x="8" y="8" width="224" height="22" rx="10" fill="url(#commHeader)" stroke="#4b5563" strokeWidth="0.8" strokeOpacity="0.2" />
      <text x="18" y="22" fontSize="8" fill="#e5e7eb" opacity="0.75" fontWeight="600">Commission Tracking</text>
      <text x="218" y="22" fontSize="6" fill="#9ca3af" opacity="0.5" textAnchor="end">This Month</text>
    </g>

    {/* Team Production Container */}
    <g filter="url(#softShadow)">
      <rect x="10" y="42" width="220" height="68" rx="14" fill="url(#teamCard)" stroke="#8b5cf6" strokeWidth="1.2" strokeOpacity="0.3" />
      
      {/* Header */}
      <text x="20" y="57" fontSize="7" fill="#a78bfa" opacity="0.7" fontWeight="600">Team Production</text>
      
      {/* Team icon */}
      <g opacity="0.5">
        <circle cx="210" cy="53" r="4" fill="none" stroke="#8b5cf6" strokeWidth="0.8" />
        <circle cx="210" cy="52" r="1.5" fill="#8b5cf6" />
        <path d="M 207 58 Q 210 56, 213 58" stroke="#8b5cf6" strokeWidth="0.8" fill="none" />
        <circle cx="203" cy="55" r="2.5" fill="none" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.6" />
        <circle cx="217" cy="55" r="2.5" fill="none" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.6" />
      </g>
      
      {/* Total amount */}
      <text x="20" y="80" fontSize="20" fill="#c4b5fd" opacity="0.9" fontWeight="700" filter="url(#commGlow)">${teamTotal.toLocaleString()}</text>
      <text x="20" y="91" fontSize="6" fill="#a78bfa" opacity="0.6">Total Team Commissions</text>
      
      {/* Breakdown bars */}
      <g opacity="0.5">
        <rect x="20" y="97" width="90" height="6" rx="3" fill="#8b5cf6" opacity="0.3" />
        <text x="115" y="101" fontSize="5.5" fill="#a78bfa">Paid: ${teamPaid.toLocaleString()}</text>
        
        <rect x="20" y="105" width="45" height="4" rx="2" fill="#7c3aed" opacity="0.25" />
        <text x="70" y="108" fontSize="5" fill="#8b5cf6" opacity="0.7">Pending: ${teamPending.toLocaleString()}</text>
      </g>
    </g>

    {/* Personal Production Container */}
    <g filter="url(#softShadow)">
      <rect x="10" y="122" width="220" height="68" rx="14" fill="url(#personalCard)" stroke="#6ad4f2" strokeWidth="1.2" strokeOpacity="0.3" />
      
      {/* Header */}
      <text x="20" y="137" fontSize="7" fill="#6ad4f2" opacity="0.7" fontWeight="600">Personal Production</text>
      
      {/* User icon */}
      <g opacity="0.5">
        <circle cx="210" cy="133" r="4.5" fill="none" stroke="#6ad4f2" strokeWidth="0.9" />
        <circle cx="210" cy="131.5" r="1.8" fill="#6ad4f2" />
        <path d="M 206 137 Q 210 135, 214 137" stroke="#6ad4f2" strokeWidth="0.9" fill="none" />
      </g>
      
      {/* Amount */}
      <text x="20" y="160" fontSize="20" fill="#6ad4f2" opacity="0.9" fontWeight="700">${personalTotal.toLocaleString()}</text>
      <text x="20" y="171" fontSize="6" fill="#35E7E0" opacity="0.6">Your Earnings This Month</text>
      
      {/* Progress indicators */}
      <g opacity="0.5">
        <rect x="20" y="177" width="60" height="5" rx="2.5" fill="#6ad4f2" opacity="0.25" />
        <rect x="20" y="177" width="42" height="5" rx="2.5" fill="#6ad4f2" opacity="0.4" />
        <text x="85" y="181" fontSize="5" fill="#6ad4f2" opacity="0.7">70% to goal</text>
      </g>
    </g>

    {/* Decorative elements */}
    <g opacity="0.3">
      <circle cx="200" cy="68" r="2" fill="#8b5cf6" />
      <circle cx="208" cy="73" r="1.5" fill="#a78bfa" />
      <circle cx="195" cy="148" r="2" fill="#6ad4f2" />
      <circle cx="203" cy="153" r="1.5" fill="#35E7E0" />
    </g>
  </svg>
  );
};

const DashboardIcon: React.FC = () => (
  <svg viewBox="0 0 275 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="navBar" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1f2937" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#111827" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="dashPanel1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#374151" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#1f2937" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="dashPanel2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4b5563" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#374151" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="dashAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="chartGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
      </linearGradient>
      <filter id="dashShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" />
        <feOffset dx="0" dy="3" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.25" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Left Navigation Sidebar */}
    <g opacity="0.9">
      <rect x="5" y="5" width="45" height="190" rx="12" fill="url(#navBar)" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.3" />
      
      {/* Logo area at top */}
      <circle cx="27.5" cy="20" r="8" fill="#8b5cf6" opacity="0.3" filter="url(#glow)" />
      <text x="27.5" y="24" fontSize="9" fill="#c4b5fd" opacity="0.8" textAnchor="middle" fontWeight="700">IO</text>
      
      {/* Nav items */}
      <g opacity="0.7">
        {/* Dashboard - active */}
        <rect x="12" y="42" width="31" height="22" rx="6" fill="#8b5cf6" opacity="0.25" />
        <rect x="17" y="48" width="8" height="8" rx="2" fill="none" stroke="#a78bfa" strokeWidth="1.2" opacity="0.6" />
        <rect x="18" y="49.5" width="2.5" height="2.5" fill="#a78bfa" opacity="0.6" />
        <rect x="22.5" y="49.5" width="2.5" height="2.5" fill="#a78bfa" opacity="0.6" />
        <rect x="18" y="53" width="2.5" height="2.5" fill="#a78bfa" opacity="0.6" />
        <rect x="22.5" y="53" width="2.5" height="2.5" fill="#a78bfa" opacity="0.6" />
        <text x="27.5" y="61" fontSize="5" fill="#e9d5ff" opacity="0.8" textAnchor="middle">Dash</text>
        
        {/* Contacts */}
        <rect x="15" y="72" width="7" height="7" rx="3.5" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.4" />
        <circle cx="18.5" cy="75" r="2" fill="#6b7280" opacity="0.4" />
        <path d="M 14 82 Q 18.5 79, 23 82" stroke="#6b7280" strokeWidth="1" fill="none" opacity="0.4" />
        <text x="27.5" y="84" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">Clients</text>
        
        {/* Deals */}
        <rect x="15" y="95" width="8" height="10" rx="2" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.4" />
        <rect x="16.5" y="98" width="5" height="2" rx="1" fill="#6b7280" opacity="0.4" />
        <rect x="16.5" y="101" width="5" height="1.5" rx="0.75" fill="#6b7280" opacity="0.4" />
        <text x="27.5" y="107" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">Deals</text>
        
        {/* Reports */}
        <rect x="15" y="118" width="8" height="10" rx="1.5" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.4" />
        <line x1="17" y1="122" x2="21" y2="122" stroke="#6b7280" strokeWidth="0.8" opacity="0.4" />
        <line x1="17" y1="125" x2="21" y2="125" stroke="#6b7280" strokeWidth="0.8" opacity="0.4" />
        <text x="27.5" y="130" fontSize="5" fill="#9ca3af" opacity="0.5" textAnchor="middle">Reports</text>
        
        {/* Settings at bottom */}
        <circle cx="27.5" cy="175" r="6" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.35" />
        <circle cx="27.5" cy="175" r="3" fill="none" stroke="#6b7280" strokeWidth="0.8" opacity="0.35" />
        <line x1="27.5" y1="169" x2="27.5" y2="171" stroke="#6b7280" strokeWidth="0.8" opacity="0.35" />
        <line x1="27.5" y1="179" x2="27.5" y2="181" stroke="#6b7280" strokeWidth="0.8" opacity="0.35" />
        <line x1="21.5" y1="175" x2="23.5" y2="175" stroke="#6b7280" strokeWidth="0.8" opacity="0.35" />
        <line x1="31.5" y1="175" x2="33.5" y2="175" stroke="#6b7280" strokeWidth="0.8" opacity="0.35" />
        <text x="27.5" y="189" fontSize="4.5" fill="#6b7280" opacity="0.4" textAnchor="middle">Settings</text>
      </g>
    </g>

    {/* Main Content Area */}
    {/* Header Bar */}
    <g filter="url(#dashShadow)">
      <rect x="58" y="8" width="214" height="22" rx="8" fill="url(#dashPanel1)" stroke="#4b5563" strokeWidth="0.8" strokeOpacity="0.15" />
      <text x="68" y="21" fontSize="7" fill="#e5e7eb" opacity="0.8" fontWeight="600">Dashboard Overview</text>
      
      {/* Search bar */}
      <rect x="185" y="13" width="75" height="12" rx="6" fill="#1f2937" opacity="0.4" />
      <circle cx="193" cy="19" r="3" fill="none" stroke="#9ca3af" strokeWidth="0.8" opacity="0.4" />
      <line x1="195.5" y1="21.5" x2="197.5" y2="23.5" stroke="#9ca3af" strokeWidth="0.8" opacity="0.4" />
      <text x="205" y="21" fontSize="5" fill="#9ca3af" opacity="0.4">Search...</text>
    </g>

    {/* Top stat cards */}
    <g filter="url(#dashShadow)">
      <rect x="60" y="38" width="65" height="40" rx="10" fill="url(#dashPanel1)" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.15" />
      <text x="68" y="50" fontSize="6" fill="#9ca3af" opacity="0.5">Active Deals</text>
      <text x="68" y="65" fontSize="14" fill="#8b5cf6" opacity="0.8" fontWeight="700">127</text>
      <text x="68" y="73" fontSize="5" fill="#6b7280" opacity="0.4">+12 this week</text>
    </g>

    <g filter="url(#dashShadow)">
      <rect x="133" y="38" width="65" height="40" rx="10" fill="url(#dashPanel2)" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.18" />
      <text x="141" y="50" fontSize="6" fill="#9ca3af" opacity="0.5">Revenue</text>
      <text x="141" y="65" fontSize="14" fill="#a78bfa" opacity="0.8" fontWeight="700">$842K</text>
      <text x="141" y="73" fontSize="5" fill="#6b7280" opacity="0.4">+8.5% growth</text>
    </g>

    <g filter="url(#dashShadow)">
      <rect x="206" y="38" width="65" height="40" rx="10" fill="url(#dashPanel1)" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.15" />
      <text x="214" y="50" fontSize="6" fill="#9ca3af" opacity="0.5">Team Size</text>
      <text x="214" y="65" fontSize="14" fill="#c4b5fd" opacity="0.8" fontWeight="700">24</text>
      <text x="214" y="73" fontSize="5" fill="#6b7280" opacity="0.4">agents active</text>
    </g>

    {/* Main chart panel */}
    <g filter="url(#dashShadow)">
      <rect x="60" y="88" width="211" height="105" rx="14" fill="url(#dashAccent)" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.25" />

      {/* Chart title */}
      <text x="70" y="103" fontSize="7" fill="#a78bfa" opacity="0.7" fontWeight="600">Monthly Performance</text>

      {/* Grid lines */}
      <g opacity="0.15">
        <line x1="70" y1="125" x2="260" y2="125" stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2,2" />
        <line x1="70" y1="145" x2="260" y2="145" stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2,2" />
        <line x1="70" y1="165" x2="260" y2="165" stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2,2" />
      </g>

      {/* Chart bars with gradient */}
      <g opacity="0.45">
        <rect x="80" y="155" width="12" height="20" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
        <rect x="100" y="145" width="12" height="30" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
        <rect x="120" y="135" width="12" height="40" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
        <rect x="140" y="143" width="12" height="32" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
        <rect x="160" y="138" width="12" height="37" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
        <rect x="180" y="148" width="12" height="27" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
        <rect x="200" y="140" width="12" height="35" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
        <rect x="220" y="133" width="12" height="42" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
        <rect x="240" y="137" width="12" height="38" rx="4" fill="url(#chartGlow)" filter="url(#glow)" />
      </g>

      {/* Trend line with glow */}
      <polyline
        points="86,155 106,145 126,135 146,143 166,138 186,148 206,140 226,133 246,137"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="2.5"
        opacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* Data points */}
      <g opacity="0.6" filter="url(#glow)">
        <circle cx="86" cy="155" r="3.5" fill="#c4b5fd" />
        <circle cx="106" cy="145" r="3.5" fill="#c4b5fd" />
        <circle cx="126" cy="135" r="3.5" fill="#c4b5fd" />
        <circle cx="146" cy="143" r="3.5" fill="#c4b5fd" />
        <circle cx="166" cy="138" r="3.5" fill="#c4b5fd" />
        <circle cx="186" cy="148" r="3.5" fill="#c4b5fd" />
        <circle cx="206" cy="140" r="3.5" fill="#c4b5fd" />
        <circle cx="226" cy="133" r="3.5" fill="#c4b5fd" />
        <circle cx="246" cy="137" r="3.5" fill="#c4b5fd" />
      </g>

      {/* Y-axis labels */}
      <g opacity="0.3">
        <text x="65" y="127" fontSize="5" fill="#9ca3af" textAnchor="end">100K</text>
        <text x="65" y="147" fontSize="5" fill="#9ca3af" textAnchor="end">50K</text>
        <text x="65" y="167" fontSize="5" fill="#9ca3af" textAnchor="end">0</text>
      </g>

      {/* X-axis labels */}
      <g opacity="0.3">
        <text x="86" y="182" fontSize="4.5" fill="#6b7280" textAnchor="middle">Jan</text>
        <text x="126" y="182" fontSize="4.5" fill="#6b7280" textAnchor="middle">Mar</text>
        <text x="166" y="182" fontSize="4.5" fill="#6b7280" textAnchor="middle">May</text>
        <text x="206" y="182" fontSize="4.5" fill="#6b7280" textAnchor="middle">Jul</text>
        <text x="246" y="182" fontSize="4.5" fill="#6b7280" textAnchor="middle">Sep</text>
      </g>

      {/* Legend */}
      <g opacity="0.4">
        <rect x="220" y="112" width="3" height="3" rx="1" fill="#a78bfa" />
        <text x="226" y="115" fontSize="5" fill="#9ca3af">Revenue</text>
      </g>
    </g>
  </svg>
);

const MedalsIcon: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const [place1, setPlace1] = useState(0);
  const [place2, setPlace2] = useState(0);
  const [place3, setPlace3] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(svgRef, { once: true, margin: '0px 0px -15% 0px' });

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
      
      setTimeout(() => {
        // Animate leaderboard numbers over 3.5 seconds
        const duration = 3500;
        const steps = 100;
        const place1Increment = 28 / steps;
        const place2Increment = 22 / steps;
        const place3Increment = 17 / steps;
        let current1 = 0;
        let current2 = 0;
        let current3 = 0;
        
        const interval = setInterval(() => {
          current1 += place1Increment;
          current2 += place2Increment;
          current3 += place3Increment;
          
          if (current1 >= 28) {
            setPlace1(28);
            setPlace2(22);
            setPlace3(17);
            clearInterval(interval);
          } else {
            setPlace1(Math.floor(current1));
            setPlace2(Math.floor(current2));
            setPlace3(Math.floor(current3));
          }
        }, duration / steps);
      }, 200);
    }
  }, [isInView, animated]);

  return (
    <svg ref={svgRef} viewBox="0 0 220 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="rank1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="rank2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.12" />
      </linearGradient>
      <linearGradient id="rank3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6b7280" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#4b5563" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="rankOther" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4b5563" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#374151" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="goldBadge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.25" />
      </linearGradient>
      <linearGradient id="silverBadge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="bronzeBadge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.18" />
      </linearGradient>
      <filter id="leaderGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feFlood floodColor="#8b5cf6" floodOpacity="0.3" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="rankShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" />
        <feOffset dx="0" dy="3" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.35" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Header */}
    <g opacity="0.7">
      <text x="110" y="18" fontSize="8" fill="#a78bfa" opacity="0.8" textAnchor="middle" fontWeight="600">Sales Leaderboard</text>
    </g>

    {/* 1st Place - Sarah Mitchell */}
    <g filter="url(#rankShadow)">
      <rect x="10" y="28" width="200" height="40" rx="14" fill="url(#rank1)" stroke="#8b5cf6" strokeWidth="1.8" strokeOpacity="0.4" />
      
      {/* Gold Medal */}
      <circle cx="28" cy="48" r="10" fill="url(#goldBadge)" filter="url(#leaderGlow)" />
      <text x="28" y="52" fontSize="10" fill="#fef3c7" opacity="0.9" textAnchor="middle" fontWeight="800">1</text>
      
      {/* Avatar */}
      <circle cx="50" cy="48" r="9" fill="#8b5cf6" opacity="0.3" />
      <text x="50" y="51" fontSize="7" fill="#e9d5ff" opacity="0.8" textAnchor="middle" fontWeight="600">SM</text>
      
      {/* Name & info */}
      <text x="65" y="44" fontSize="8" fill="#e9d5ff" opacity="0.85" fontWeight="600">Sarah Mitchell</text>
      <text x="65" y="54" fontSize="6" fill="#c4b5fd" opacity="0.65">Weekly performance</text>
      
      {/* Sales amount */}
      <text x="195" y="46" fontSize="12" fill="#c4b5fd" opacity="0.9" textAnchor="end" fontWeight="700">${place1}K</text>
      <text x="195" y="55" fontSize="5.5" fill="#a78bfa" opacity="0.65" textAnchor="end">AP This Week</text>
    </g>

    {/* 2nd Place - Mike Chen */}
    <g filter="url(#rankShadow)">
      <rect x="10" y="76" width="200" height="36" rx="13" fill="url(#rank2)" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.35" />
      
      {/* Silver Medal */}
      <circle cx="27" cy="94" r="8.5" fill="url(#silverBadge)" />
      <text x="27" y="98" fontSize="9" fill="#f9fafb" opacity="0.85" textAnchor="middle" fontWeight="700">2</text>
      
      {/* Avatar */}
      <circle cx="46" cy="94" r="8" fill="#a78bfa" opacity="0.28" />
      <text x="46" y="97" fontSize="6.5" fill="#ddd6fe" opacity="0.75" textAnchor="middle" fontWeight="600">MC</text>
      
      {/* Name & info */}
      <text x="59" y="90" fontSize="7.5" fill="#ddd6fe" opacity="0.8" fontWeight="600">Mike Chen</text>
      <text x="59" y="99" fontSize="5.5" fill="#c4b5fd" opacity="0.6">Weekly performance</text>
      
      {/* Sales amount */}
      <text x="195" y="93" fontSize="11" fill="#c4b5fd" opacity="0.85" textAnchor="end" fontWeight="700">${place2}K</text>
      <text x="195" y="101" fontSize="5" fill="#a78bfa" opacity="0.6" textAnchor="end">AP This Week</text>
    </g>

    {/* 3rd Place - Jessica Torres */}
    <g filter="url(#rankShadow)">
      <rect x="10" y="120" width="200" height="34" rx="12" fill="url(#rank3)" stroke="#6b7280" strokeWidth="1.3" strokeOpacity="0.3" />
      
      {/* Bronze Medal */}
      <circle cx="26" cy="137" r="7.5" fill="url(#bronzeBadge)" />
      <text x="26" y="140" fontSize="8" fill="#fed7aa" opacity="0.8" textAnchor="middle" fontWeight="700">3</text>
      
      {/* Avatar */}
      <circle cx="43" cy="137" r="7.5" fill="#9ca3af" opacity="0.25" />
      <text x="43" y="140" fontSize="6" fill="#e5e7eb" opacity="0.7" textAnchor="middle" fontWeight="600">JT</text>
      
      {/* Name & info */}
      <text x="55" y="134" fontSize="7" fill="#e5e7eb" opacity="0.75" fontWeight="600">Jessica Torres</text>
      <text x="55" y="142" fontSize="5" fill="#d1d5db" opacity="0.6">Weekly performance</text>
      
      {/* Sales amount */}
      <text x="195" y="137" fontSize="10" fill="#d1d5db" opacity="0.8" textAnchor="end" fontWeight="700">${place3}K</text>
      <text x="195" y="144" fontSize="4.5" fill="#9ca3af" opacity="0.55" textAnchor="end">AP This Week</text>
    </g>

    {/* 4th Place - David Park */}
    <g filter="url(#rankShadow)" opacity="0.75">
      <rect x="10" y="161" width="200" height="32" rx="11" fill="url(#rankOther)" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.25" />
      
      {/* Number */}
      <circle cx="25" cy="177" r="7" fill="#6b7280" opacity="0.25" />
      <text x="25" y="180" fontSize="7.5" fill="#9ca3af" opacity="0.75" textAnchor="middle" fontWeight="700">4</text>
      
      {/* Avatar */}
      <circle cx="41" cy="177" r="7" fill="#6b7280" opacity="0.2" />
      <text x="41" y="180" fontSize="5.5" fill="#d1d5db" opacity="0.65" textAnchor="middle" fontWeight="600">DP</text>
      
      {/* Name & info */}
      <text x="52" y="174" fontSize="6.5" fill="#d1d5db" opacity="0.7" fontWeight="600">David Park</text>
      <text x="52" y="182" fontSize="4.5" fill="#9ca3af" opacity="0.55">Weekly performance</text>
      
      {/* Sales amount */}
      <text x="195" y="177" fontSize="9" fill="#9ca3af" opacity="0.75" textAnchor="end" fontWeight="700">$13K</text>
      <text x="195" y="184" fontSize="4" fill="#6b7280" opacity="0.5" textAnchor="end">AP This Week</text>
    </g>
  </svg>
  );
};

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
          opacity,
          willChange: 'transform, opacity'
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
      <svg width="224" height="224" className="opacity-25">
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
  
  // Cards 1, 3, 4 have icon on top, text below
  const iconFirst = index === 1 || index === 3 || index === 4;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      transition={{
        duration: 1.15,
        delay: staggerDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative overflow-hidden h-full w-full rounded-2xl"
      style={{
        gridArea,
        background: isDashboard
          ? '#ffffff'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.2) 100%)',
        border: isDashboard ? '2px solid rgb(229, 231, 235)' : '1px solid rgba(255, 255, 255, 0.12)',
        willChange: 'transform, opacity',
      }}
    >
      <GridPattern isDashboard={isDashboard} index={index} />
      <BottomGlow isDashboard={isDashboard} />

      {/* Column layout with conditional ordering */}
      <div className={`relative z-[2] flex ${iconFirst ? 'flex-col-reverse' : 'flex-col'} h-full w-full p-4 sm:p-5 lg:p-6`}>
        {/* Text section */}
        <div className="flex flex-col gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <h3 className={`text-sm sm:text-base lg:text-lg font-semibold leading-tight ${isDashboard ? 'text-gray-900' : 'text-white'}`}>
            {feature.title}
          </h3>
          <p className={`text-xs sm:text-sm lg:text-base leading-relaxed ${isDashboard ? 'text-gray-800' : 'text-white/70'}`}>
            {feature.description}
          </p>
        </div>

        {/* Large centered icon */}
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full h-full max-w-[200px] sm:max-w-[280px] lg:max-w-[320px] max-h-[200px] sm:max-h-[280px] lg:max-h-[320px] min-h-[120px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center">
            <Icon className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: '/ Book of Business',
      description: 'Keep every client and deal visible in one place—no spreadsheets.',
      icon: BookIcon,
    },
    {
      title: '/ Team Hierarchy',
      description: 'See reporting lines and performance clearly without digging for data.',
      icon: HierarchyIcon,
    },
    {
      title: '/ Commission Tracking',
      description: 'Track payouts and splits automatically so every dollar is accounted for.',
      icon: CommissionIcon,
    },
    {
      title: '/ Dashboard Analytics',
      description: 'Spot trends fast and act with clean, real-time dashboards.',
      icon: DashboardIcon,
    },
    {
      title: '/ Leaderboard',
      description: 'Motivate the team with transparent rankings and easy win callouts.',
      icon: MedalsIcon,
    },
  ];

  return (
    <section 
      className="relative py-14 sm:py-20 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <PoweredBySection />

        <div className="px-2 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative overflow-visible"
            style={{
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <div
              className="hidden lg:grid gap-4 relative"
              style={{
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridTemplateRows: 'repeat(8, 1fr)',
                minHeight: '900px',
                gridTemplateAreas: `
                  "a a a a b b b b c c c c"
                  "a a a a b b b b c c c c"
                  "a a a a b b b b c c c c"
                  "a a a a b b b b c c c c"
                  "d d d d d d e e e e e e"
                  "d d d d d d e e e e e e"
                  "d d d d d d e e e e e e"
                  "d d d d d d e e e e e e"
                `
              }}
            >
              <FeatureCard feature={features[0]} index={0} gridArea="a" />
              <FeatureCard feature={features[1]} index={1} gridArea="b" />
              <FeatureCard feature={features[2]} index={2} gridArea="c" />
              <FeatureCard feature={features[3]} index={3} gridArea="d" />
              <FeatureCard feature={features[4]} index={4} gridArea="e" />
            </div>

            <div className="lg:hidden flex flex-col gap-4 sm:gap-6 px-0 sm:px-6 -mx-2 sm:mx-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl w-full"
                  style={{
                    background: feature.title === '/ Dashboard Analytics'
                      ? '#ffffff'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.2) 100%)',
                    border: feature.title === '/ Dashboard Analytics'
                      ? '2px solid rgb(229, 231, 235)'
                      : '2px solid rgba(255, 255, 255, 0.1)',
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
