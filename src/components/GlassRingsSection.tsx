import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ShieldIO from './ShieldIO';
import { DottedSurface } from './ui/dotted-surface';

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
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px', amount: 0.1 });

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
    }, 50);

    return () => clearInterval(interval);
  }, [isTyping, text, hasStarted, onComplete]);

  return (
    <span ref={ref} className={`inline-block min-w-[1px] min-h-[1em] ${className}`}>
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
    </span>
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
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-36 pb-32 sm:pb-40 md:pb-48 lg:pb-56 bg-black overflow-hidden min-h-screen">
      <DottedSurface className="opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">

          <div className="relative z-10 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                Secure & Reliable Platform
              </span>
            </motion.div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
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
              className="text-sm sm:text-base text-white/50 leading-relaxed"
            >
              CLOSIO is powered by a dedicated team of industry professionals committed to delivering
              enterprise-grade security and continuous innovation. Your data and success are our top priorities.
            </motion.p>
          </div>

          <div className="relative flex items-center justify-center lg:px-8">
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center relative overflow-hidden">
              <ShieldIO />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {featureItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-24 h-24 bg-white/[0.03] rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/40 text-xs sm:text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlassRingsSection;
