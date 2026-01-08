import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = '', onComplete }) => {
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
        onComplete?.();
      }
    }, 45);

    return () => clearInterval(interval);
  }, [isTyping, text, hasStarted, onComplete]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
  );
};

const ShieldIO = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-100px 0px -100px 0px'
  });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 400 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[380px] mx-auto"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isVisible
        ? { opacity: 1, scale: 1, y: 0 }
        : { opacity: 0, scale: 0.9, y: 30 }
      }
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <defs>
        <linearGradient id="shieldMatteBase" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#0d0d0d" />
          <stop offset="100%" stopColor="#080808" />
        </linearGradient>
        <linearGradient id="shieldInnerShadow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#000000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="shieldTopEdge" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="shieldBottomEdge" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <filter id="imprintShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.6" />
        </filter>
        <filter id="innerDepth" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feOffset in="blur" dx="2" dy="3" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.7" result="shadow" />
          <feComposite in="shadow" in2="offsetBlur" operator="in" result="innerShadow" />
          <feOffset in="SourceAlpha" dx="-1" dy="-1" result="highlightOffset" />
          <feGaussianBlur in="highlightOffset" stdDeviation="1" result="highlightBlur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.08" result="highlight" />
          <feComposite in="highlight" in2="highlightBlur" operator="in" result="innerHighlight" />
          <feMerge>
            <feMergeNode in="innerShadow" />
            <feMergeNode in="innerHighlight" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="ioImprint" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset in="SourceAlpha" dx="1" dy="1" result="shadowOffset" />
          <feGaussianBlur in="shadowOffset" stdDeviation="1.5" result="shadowBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.5" result="shadowColor" />
          <feComposite in="shadowColor" in2="shadowBlur" operator="in" result="shadow" />
          <feOffset in="SourceAlpha" dx="-0.5" dy="-0.5" result="highlightOffset" />
          <feGaussianBlur in="highlightOffset" stdDeviation="0.5" result="highlightBlur" />
          <feFlood floodColor="#ffffff" floodOpacity="0.15" result="highlightColor" />
          <feComposite in="highlightColor" in2="highlightBlur" operator="in" result="highlight" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="highlight" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#imprintShadow)">
        <path
          d="M200 30 C200 30 330 48 350 68 C370 88 375 125 375 160 C375 275 332 368 200 445 C68 368 25 275 25 160 C25 125 30 88 50 68 C70 48 200 30 200 30 Z"
          fill="url(#shieldMatteBase)"
          filter="url(#innerDepth)"
        />
        <path
          d="M200 30 C200 30 330 48 350 68 C370 88 375 125 375 160 C375 275 332 368 200 445 C68 368 25 275 25 160 C25 125 30 88 50 68 C70 48 200 30 200 30 Z"
          fill="url(#shieldInnerShadow)"
        />
        <path
          d="M200 32 C200 32 325 49 343 67"
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M200 30 C200 30 330 48 350 68 C370 88 375 125 375 160 C375 275 332 368 200 445 C68 368 25 275 25 160 C25 125 30 88 50 68 C70 48 200 30 200 30 Z"
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="1.5"
        />
        <path
          d="M200 45 C200 45 315 60 332 77 C349 94 353 125 353 155 C353 260 315 345 200 415 C85 345 47 260 47 155 C47 125 51 94 68 77 C85 60 200 45 200 45 Z"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1"
        />
      </g>

      <g transform="translate(200, 225)">
        <rect
          x="-55"
          y="-50"
          width="18"
          height="100"
          rx="2"
          fill="#6ad4f2"
          fillOpacity="0.6"
          transform="skewX(-12)"
        />
        <circle
          cx="35"
          cy="0"
          r="48"
          fill="none"
          stroke="#ffffff"
          strokeWidth="18"
        />
      </g>
    </motion.svg>
  );
};

const GlassRingsSection = () => {
  const [line1Complete, setLine1Complete] = useState(false);

  const featureItems = [
    {
      title: 'Bank-Level Security',
      description: 'Enterprise-grade encryption and security protocols protect your data 24/7.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Expert Team Support',
      description: 'Our experienced team is dedicated to your success, every step of the way.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Continuous Innovation',
      description: 'Regular updates and new features keep our CRM ahead of the curve.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                Secure & Reliable Platform
              </span>
            </motion.div>

            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white min-h-[1.2em]">
                  <TypewriterText
                    text="Built by Experts"
                    delay={300}
                    onComplete={() => setLine1Complete(true)}
                  />
                </span>
                <span className="block text-white/70 min-h-[1.2em]">
                  {line1Complete && (
                    <TypewriterText
                      text="Built for You"
                      delay={100}
                    />
                  )}
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/50 leading-relaxed max-w-lg"
            >
              CLOSIO is powered by a dedicated team of industry professionals committed to delivering
              enterprise-grade security and continuous innovation. Your data and success are our top priorities.
            </motion.p>

            <div className="space-y-4 pt-6">
              {featureItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-5 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 w-24 h-24 bg-white/[0.03] rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-base mb-1 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl blur-3xl" />
            <div className="w-full h-[500px] lg:h-[650px] flex items-center justify-center bg-black rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_60%)]" />
              <ShieldIO />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlassRingsSection;
