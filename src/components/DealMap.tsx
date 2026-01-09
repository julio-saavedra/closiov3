import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
            background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 40%, #e8e8e8 100%)',
            padding: '4px 4px 16px 4px',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.1)',
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
              background: 'radial-gradient(circle at 35% 35%, #2a2a2a 0%, #1a1a1a 100%)',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2), inset 0 0 4px rgba(0,0,0,0.5)'
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
              background: 'linear-gradient(90deg, #e8e8e8 0%, #f5f5f5 25%, #ffffff 50%, #f5f5f5 75%, #e8e8e8 100%)',
              boxShadow: '-3px 0 6px rgba(0,0,0,0.1), 3px 0 6px rgba(0,0,0,0.1), inset 1px 0 0 rgba(255,255,255,0.5)',
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: '14px',
              height: '45px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
            }}
          />
        </div>

        <div
          className="relative mx-auto overflow-hidden"
          style={{
            width: '160px',
            height: '12px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 40%, #e8e8e8 100%)',
            borderRadius: '0 0 6px 6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
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
  const navigate = useNavigate();

  const leftFacts = [benefits[0], benefits[1]];
  const rightFacts = [benefits[2], benefits[3]];

  return (
    <section ref={sectionRef} className="py-32 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-4 mb-32 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-gray-400"
          >
            <TypewriterText text="/ Policy Map Solutions" delay={200} isVisible={isInView} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-400 md:max-w-xl"
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
            <motion.line
              x1="17.5%"
              y1="30%"
              x2="27%"
              y2="30%"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 2.8, duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.line
              x1="17.5%"
              y1="70%"
              x2="27%"
              y2="70%"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 3.2, duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.line
              x1="82.5%"
              y1="30%"
              x2="73%"
              y2="30%"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 3.0, duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.line
              x1="82.5%"
              y1="70%"
              x2="73%"
              y2="70%"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 3.4, duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            />
          </svg>

          <div className="hidden lg:flex flex-col gap-8 absolute left-0 top-1/2 -translate-y-1/2 z-20" style={{ width: '280px' }}>
            {leftFacts.map((fact, index) => {
              const titleDelay = 800 + index * 400;
              const descDelay = 1200 + index * 400;

              return (
                <div key={fact.title} className="relative" style={{ perspective: '1000px' }}>
                  {/* Glass Panel 2 - Furthest back */}
                  <motion.div
                    initial={{ opacity: 0, x: -100, scale: 0.92, rotateY: -8 }}
                    animate={isInView ? { opacity: 0.35, x: -14, scale: 0.94, rotateY: -4 } : { opacity: 0, x: -100, scale: 0.92, rotateY: -8 }}
                    transition={{ delay: 0.4 + index * 0.3, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-2xl border border-white/5 backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                      zIndex: -2,
                      transformStyle: 'preserve-3d'
                    }}
                  />

                  {/* Glass Panel 1 - Middle layer */}
                  <motion.div
                    initial={{ opacity: 0, x: -90, scale: 0.95, rotateY: -5 }}
                    animate={isInView ? { opacity: 0.55, x: -7, scale: 0.97, rotateY: -2 } : { opacity: 0, x: -90, scale: 0.95, rotateY: -5 }}
                    transition={{ delay: 0.5 + index * 0.3, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-2xl border border-white/10 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)',
                      zIndex: -1,
                      transformStyle: 'preserve-3d'
                    }}
                  />

                  {/* Main Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                    transition={{ delay: 0.6 + index * 0.3, duration: 1.8, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-2xl border border-white/15"
                    style={{
                      background: 'linear-gradient(135deg, #000000, #0a0a0a)',
                      boxShadow: '0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.5)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                  {/* Top edge highlight for 3D depth */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                  <div
                    className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                    style={{
                      maskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
                    }}
                  >
                    <svg width="160" height="160" className="opacity-40">
                      <defs>
                        <pattern id={`grid-left-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="160" height="160" fill={`url(#grid-left-${index})`} />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-28 blur-3xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(106, 212, 242, 0.5), transparent 70%)',
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-20 blur-2xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(106, 212, 242, 0.4), transparent 70%)',
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-12 blur-xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.3), transparent 70%)',
                      }}
                    />
                  </div>
                  <div className="relative p-7 z-10">
                    <span className="text-[#6ad4f2] text-sm font-medium tracking-wider mb-2.5 block">{fact.number}</span>
                    <h4 className="font-semibold text-white text-lg mb-2">
                      <TypewriterText text={fact.title} delay={titleDelay} isVisible={isInView} />
                    </h4>
                    <p className="text-base text-white/60 leading-relaxed min-h-[40px]">
                      <TypewriterText text={fact.description} delay={descDelay} isVisible={isInView} />
                    </p>
                  </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.6 }}
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

          <div className="hidden lg:flex flex-col gap-8 absolute right-0 top-1/2 -translate-y-1/2 z-20" style={{ width: '280px' }}>
            {rightFacts.map((fact, index) => {
              const titleDelay = 1000 + index * 400;
              const descDelay = 1400 + index * 400;

              return (
                <div key={fact.title} className="relative" style={{ perspective: '1000px' }}>
                  {/* Glass Panel 2 - Furthest back */}
                  <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.92, rotateY: 8 }}
                    animate={isInView ? { opacity: 0.35, x: 14, scale: 0.94, rotateY: 4 } : { opacity: 0, x: 100, scale: 0.92, rotateY: 8 }}
                    transition={{ delay: 0.6 + index * 0.3, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-2xl border border-white/5 backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                      zIndex: -2,
                      transformStyle: 'preserve-3d'
                    }}
                  />

                  {/* Glass Panel 1 - Middle layer */}
                  <motion.div
                    initial={{ opacity: 0, x: 90, scale: 0.95, rotateY: 5 }}
                    animate={isInView ? { opacity: 0.55, x: 7, scale: 0.97, rotateY: 2 } : { opacity: 0, x: 90, scale: 0.95, rotateY: 5 }}
                    transition={{ delay: 0.7 + index * 0.3, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-2xl border border-white/10 backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)',
                      zIndex: -1,
                      transformStyle: 'preserve-3d'
                    }}
                  />

                  {/* Main Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                    transition={{ delay: 0.8 + index * 0.3, duration: 1.8, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-2xl border border-white/15"
                    style={{
                      background: 'linear-gradient(135deg, #000000, #0a0a0a)',
                      boxShadow: '0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.5)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                  {/* Top edge highlight for 3D depth */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                  <div
                    className="absolute top-0 left-0 w-40 h-40 pointer-events-none"
                    style={{
                      maskImage: 'radial-gradient(ellipse at 0% 0%, black 0%, transparent 75%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at 0% 0%, black 0%, transparent 75%)',
                    }}
                  >
                    <svg width="160" height="160" className="opacity-40">
                      <defs>
                        <pattern id={`grid-right-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="160" height="160" fill={`url(#grid-right-${index})`} />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-28 blur-3xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(106, 212, 242, 0.5), transparent 70%)',
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-20 blur-2xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(106, 212, 242, 0.4), transparent 70%)',
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-12 blur-xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.3), transparent 70%)',
                      }}
                    />
                  </div>
                  <div className="relative p-7 z-10">
                    <span className="text-[#6ad4f2] text-sm font-medium tracking-wider mb-2.5 block">{fact.number}</span>
                    <h4 className="font-semibold text-white text-lg mb-2">
                      <TypewriterText text={fact.title} delay={titleDelay} isVisible={isInView} />
                    </h4>
                    <p className="text-base text-white/60 leading-relaxed min-h-[40px]">
                      <TypewriterText text={fact.description} delay={descDelay} isVisible={isInView} />
                    </p>
                  </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden mt-8 grid grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="relative" style={{ perspective: '800px' }}>
              {/* Glass Panel 2 - Furthest back */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.92, rotateX: -5 }}
                whileInView={{ opacity: 0.35, y: 10, scale: 0.94, rotateX: -2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-2xl border border-white/5 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                  zIndex: -2,
                  transformStyle: 'preserve-3d'
                }}
              />

              {/* Glass Panel 1 - Middle layer */}
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95, rotateX: -3 }}
                whileInView={{ opacity: 0.55, y: 5, scale: 0.97, rotateX: -1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-2xl border border-white/10 backdrop-blur-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)',
                  zIndex: -1,
                  transformStyle: 'preserve-3d'
                }}
              />

              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/15"
                style={{
                  background: 'linear-gradient(135deg, #000000, #0a0a0a)',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
              {/* Top edge highlight for 3D depth */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              <div
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
                }}
              >
                <svg width="128" height="128" className="opacity-40">
                  <defs>
                    <pattern id={`grid-mobile-${index}`} width="16" height="16" patternUnits="userSpaceOnUse">
                      <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#ffffff" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="128" height="128" fill={`url(#grid-mobile-${index})`} />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-20 blur-2xl"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(106, 212, 242, 0.5), transparent 70%)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-16 blur-xl"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(106, 212, 242, 0.4), transparent 70%)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-10 blur-lg"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.3), transparent 70%)',
                  }}
                />
              </div>
              <div className="relative p-6 z-10">
                <span className="text-[#6ad4f2] text-xs font-medium tracking-wider mb-2 block">{benefit.number}</span>
                <h4 className="font-semibold text-white text-base mb-1.5">{benefit.title}</h4>
                <p className="text-sm text-white/60">{benefit.description}</p>
              </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
