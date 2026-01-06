import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const benefits = [
  { number: '/01', title: 'Geographic Insights', description: 'Track deals across the country' },
  { number: '/02', title: 'Territory Planning', description: 'Find underserved markets' },
  { number: '/03', title: 'Performance Tracking', description: 'Monitor regional coverage' },
  { number: '/04', title: 'Real-Time Updates', description: 'See deals as they close' },
];

const TypewriterText = ({ text, delay = 0, isVisible }: { text: string; delay?: number; isVisible: boolean }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText('');
      return;
    }

    let timeout: NodeJS.Timeout;
    const startTyping = setTimeout(() => {
      let currentIndex = 0;
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, 35 + Math.random() * 25);
        }
      };
      typeNextChar();
    }, delay);

    return () => {
      clearTimeout(startTyping);
      clearTimeout(timeout);
    };
  }, [text, delay, isVisible]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayedText}
      <span className={`${showCursor && displayedText.length < text.length ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
};

const DesktopMonitor = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative pb-6">
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '100%',
          filter: 'drop-shadow(0 40px 80px rgba(0, 0, 0, 0.25)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15))'
        }}
      >
        <div
          className="relative rounded-[12px] md:rounded-[16px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #3d4249 0%, #2e3238 40%, #252930 100%)',
            padding: '4px 4px 16px 4px',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)',
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.12) 50%, transparent 90%)',
            }}
          />
          <div
            className="absolute top-[6px] md:top-[8px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #1a1a1a 0%, #0a0a0a 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.5), inset 0 0 4px rgba(0,0,0,0.8)'
            }}
          />
          <div
            className="rounded-[6px] md:rounded-[8px] overflow-hidden mt-3 md:mt-4"
            style={{
              background: '#0a0a0a',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)'
            }}
          >
            {children}
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <div
            className="relative"
            style={{
              width: '10px',
              height: '45px',
              background: 'linear-gradient(90deg, #1e2126 0%, #2e3238 25%, #3a3f46 50%, #2e3238 75%, #1e2126 100%)',
              boxShadow: '-3px 0 6px rgba(0,0,0,0.2), 3px 0 6px rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.05)',
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: '14px',
              height: '45px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
            }}
          />
        </div>

        <div
          className="relative mx-auto overflow-hidden"
          style={{
            width: '160px',
            height: '12px',
            background: 'linear-gradient(180deg, #3a3f46 0%, #2e3238 40%, #252930 100%)',
            borderRadius: '0 0 6px 6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.08) 50%, transparent 95%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.15) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.15) 100%)',
            }}
          />
        </div>
      </div>

      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2"
        style={{
          width: '180px',
          height: '12px',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)',
          filter: 'blur(6px)',
        }}
      />
    </div>
  );
};

export default function DealMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const leftFacts = [benefits[0], benefits[1]];
  const rightFacts = [benefits[2], benefits[3]];

  return (
    <section ref={sectionRef} className="py-16 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fa] to-white" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] md:max-w-md"
          >
            Policy Map Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#4a4a5a] md:max-w-xl md:text-right"
          >
            Visualize your agency's reach in real-time. Watch as policies are sold across the nation.
          </motion.p>
        </div>

        <div className="relative flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 15 }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradLeft1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6ad4f2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6ad4f2" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lineGradLeft2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6ad4f2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6ad4f2" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lineGradRight1" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#6ad4f2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6ad4f2" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lineGradRight2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#6ad4f2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6ad4f2" stopOpacity="0.1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.line
              x1="22%"
              y1="30%"
              x2="28%"
              y2="30%"
              stroke="url(#lineGradLeft1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 2.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.circle
              cx="22%"
              cy="30%"
              r="4"
              fill="#6ad4f2"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 2.7, duration: 0.3 }}
            />
            <motion.circle
              cx="28%"
              cy="30%"
              r="3"
              fill="#6ad4f2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 3.3, duration: 0.3 }}
            />

            <motion.line
              x1="22%"
              y1="70%"
              x2="28%"
              y2="70%"
              stroke="url(#lineGradLeft2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 3.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.circle
              cx="22%"
              cy="70%"
              r="4"
              fill="#6ad4f2"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 3.1, duration: 0.3 }}
            />
            <motion.circle
              cx="28%"
              cy="70%"
              r="3"
              fill="#6ad4f2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 3.7, duration: 0.3 }}
            />

            <motion.line
              x1="78%"
              y1="30%"
              x2="72%"
              y2="30%"
              stroke="url(#lineGradRight1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 3.0, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.circle
              cx="78%"
              cy="30%"
              r="4"
              fill="#6ad4f2"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 2.9, duration: 0.3 }}
            />
            <motion.circle
              cx="72%"
              cy="30%"
              r="3"
              fill="#6ad4f2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 3.5, duration: 0.3 }}
            />

            <motion.line
              x1="78%"
              y1="70%"
              x2="72%"
              y2="70%"
              stroke="url(#lineGradRight2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 3.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.circle
              cx="78%"
              cy="70%"
              r="4"
              fill="#6ad4f2"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 3.3, duration: 0.3 }}
            />
            <motion.circle
              cx="72%"
              cy="70%"
              r="3"
              fill="#6ad4f2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 3.9, duration: 0.3 }}
            />
          </svg>

          <div className="hidden lg:flex flex-col gap-8 absolute left-0 top-1/2 -translate-y-1/2 z-20" style={{ width: '220px' }}>
            {leftFacts.map((fact, index) => {
              const titleDelay = 800 + index * 400;
              const descDelay = 1200 + index * 400;

              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, x: -80 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                  transition={{ delay: 0.6 + index * 0.3, duration: 0.6, ease: 'easeOut' }}
                  className="relative"
                >
                  <div
                    className="p-5 rounded-xl border border-gray-800/50"
                    style={{
                      background: '#000000',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    <span className="text-[#6ad4f2] text-xs font-medium tracking-wider mb-2 block">{fact.number}</span>
                    <h4 className="font-semibold text-white text-base mb-1.5">
                      <TypewriterText text={fact.title} delay={titleDelay} isVisible={isInView} />
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed min-h-[36px]">
                      <TypewriterText text={fact.description} delay={descDelay} isVisible={isInView} />
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full max-w-[580px] mx-auto"
          >
            <DesktopMonitor>
              <img
                src="/image copy copy copy copy copy copy copy.png"
                alt="Deal Map - Policies Submitted Per State"
                className="w-full h-auto block"
              />
            </DesktopMonitor>
          </motion.div>

          <div className="hidden lg:flex flex-col gap-8 absolute right-0 top-1/2 -translate-y-1/2 z-20" style={{ width: '220px' }}>
            {rightFacts.map((fact, index) => {
              const titleDelay = 1000 + index * 400;
              const descDelay = 1400 + index * 400;

              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, x: 80 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                  transition={{ delay: 0.8 + index * 0.3, duration: 0.6, ease: 'easeOut' }}
                  className="relative"
                >
                  <div
                    className="p-5 rounded-xl border border-gray-800/50"
                    style={{
                      background: '#000000',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    <span className="text-[#6ad4f2] text-xs font-medium tracking-wider mb-2 block">{fact.number}</span>
                    <h4 className="font-semibold text-white text-base mb-1.5">
                      <TypewriterText text={fact.title} delay={titleDelay} isVisible={isInView} />
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed min-h-[36px]">
                      <TypewriterText text={fact.description} delay={descDelay} isVisible={isInView} />
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden mt-8 grid grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-4 rounded-xl border border-gray-800/50"
              style={{
                background: '#000000',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }}
            >
              <span className="text-[#6ad4f2] text-xs font-medium tracking-wider mb-1.5 block">{benefit.number}</span>
              <h4 className="font-semibold text-white text-base mb-1">{benefit.title}</h4>
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="pt-8 text-center"
        >
          <button className="px-8 py-3.5 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition-all hover:scale-105 shadow-lg">
            Book a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
