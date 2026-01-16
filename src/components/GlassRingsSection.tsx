import { useEffect, useRef } from 'react';
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
      {/* Top Decorative Line with Fade - Purple to White */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-20">
        <div className="w-full max-w-6xl px-8">
          <div 
            className="h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.6) 20%, rgba(255, 255, 255, 0.8) 50%, rgba(168, 85, 247, 0.6) 80%, transparent 100%)'
            }}
          />
        </div>
      </div>
      
      <DottedSurface className="opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge above shield */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-center mb-8"
        >
          <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            SECURE & RELIABLE PLATFORM
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">

          {/* Shield IO - First on mobile, center on desktop */}
          <div className="relative flex items-center justify-center lg:px-8 order-1 lg:order-2">
            <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] flex items-center justify-center relative overflow-hidden">
              <ShieldIO />
            </div>
          </div>

          {/* Text content - Second on mobile, first on desktop */}
          <div className="relative z-10 space-y-6 text-center lg:text-left order-2 lg:order-1">

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white min-h-[1.2em]">
                  Built by Experts
                </span>
                <span className="block text-white/70 min-h-[1.2em]">
                  <TypewriterText
                    text="Built for You"
                    delay={300}
                  />
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-sm sm:text-base text-white/50 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Enterprise-grade security and continuous innovation from industry professionals. Your data and success are our priority.
            </motion.p>
          </div>

          {/* Feature items - Third on mobile, third on desktop */}
          <div className="space-y-3 sm:space-y-4 order-3">
            {featureItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.4 + index * 0.1 }}
                className="group relative flex items-start gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0 text-white/70 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-0.5 sm:mb-1 group-hover:text-white transition-colors">
                    / {item.title}
                  </h3>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                    {item.description}
                  </p>
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
