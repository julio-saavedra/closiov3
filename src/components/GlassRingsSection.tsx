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
      accentColor: '#6ad4f2',
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <defs>
            <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ad4f2" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#4db8d9" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <path d="M16 3L5 8v7c0 7.1 4.7 13.7 11 16 6.3-2.3 11-8.9 11-16V8L16 3z" stroke="url(#securityGrad)" strokeWidth="1.5" fill="none"/>
          <path d="M16 7L9 10.5v5c0 4.5 3 8.7 7 10.2 4-1.5 7-5.7 7-10.2v-5L16 7z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none"/>
          <path d="M12 15h8M16 11v8" stroke="url(#securityGrad)" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="16" cy="15" r="2" fill="url(#securityGrad)" fillOpacity="0.3"/>
          <path d="M10 12l2-1M22 12l-2-1M10 18l2 1M22 18l-2 1" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.25" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Expert Team Support',
      description: 'Our experienced team is dedicated to your success, every step of the way.',
      accentColor: '#6ad4f2',
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <defs>
            <linearGradient id="supportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ad4f2" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#4db8d9" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="2 3"/>
          <path d="M16 5l1.5 3.5 3.8.3-2.9 2.5.9 3.7L16 13l-3.3 2-0.9-3.7-2.9-2.5 3.8-.3L16 5z" stroke="url(#supportGrad)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
          <circle cx="16" cy="16" r="3" fill="url(#supportGrad)" fillOpacity="0.2" stroke="url(#supportGrad)" strokeWidth="1"/>
          <path d="M16 19v5M13 22l3 2 3-2" stroke="url(#supportGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8" cy="16" r="1" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="24" cy="16" r="1" fill="currentColor" fillOpacity="0.3"/>
        </svg>
      )
    },
    {
      title: 'Continuous Innovation',
      description: 'Regular updates and new features keep our CRM ahead of the curve.',
      accentColor: '#6ad4f2',
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
          <defs>
            <linearGradient id="innovationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ad4f2" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#4db8d9" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <path d="M16 4v3M16 25v3M4 16h3M25 16h3" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.3" strokeLinecap="round"/>
          <path d="M7.5 7.5l2 2M22.5 22.5l2 2M7.5 24.5l2-2M22.5 9.5l2-2" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.2" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="8" stroke="url(#innovationGrad)" strokeWidth="1.5" strokeDasharray="4 2"/>
          <path d="M16 10c3.3 0 6 2.7 6 6" stroke="url(#innovationGrad)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M22 16l-2-2M22 16l-2 2" stroke="url(#innovationGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 22c-3.3 0-6-2.7-6-6" stroke="url(#innovationGrad)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 16l2 2M10 16l2-2" stroke="url(#innovationGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="16" r="2" fill="url(#innovationGrad)" fillOpacity="0.4"/>
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
              transition={{ duration: 1.0 }}
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
              transition={{ duration: 1.2, delay: 0.3 }}
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

          <div className="space-y-4 sm:space-y-5">
            {featureItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{ background: `linear-gradient(135deg, ${item.accentColor}15, transparent 60%)` }}
                />
                <div className="relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] via-black/50 to-black/80 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#6ad4f2]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(circle, ${item.accentColor}10, transparent 70%)` }}
                  />

                  <div className="relative flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div
                        className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                        style={{ background: item.accentColor }}
                      />
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0d1a1f] to-[#0a1215] flex items-center justify-center border border-[#6ad4f2]/20 group-hover:border-[#6ad4f2]/40 transition-all duration-500 shadow-lg shadow-black/50">
                        <div className="text-white/80 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className="text-white font-semibold text-sm sm:text-base mb-1 group-hover:text-[#e8f8fc] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/40 text-xs sm:text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
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
