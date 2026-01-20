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
    <div className="relative pb-6 sm:pb-8">
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '100%',
          filter: 'drop-shadow(0 60px 100px rgba(0, 0, 0, 0.4)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
        }}
      >
        {/* Monitor Bezel */}
        <div
          className="relative rounded-[14px] md:rounded-[18px] overflow-hidden pt-[2px] px-[4px] pb-[16px] sm:pt-[3px] sm:px-[6px] sm:pb-[24px]"
          style={{
            background: 'linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 45%, #1a1a1a 100%)',
            boxShadow: `
              inset 0 2px 4px rgba(255,255,255,0.15),
              inset 0 -2px 4px rgba(0,0,0,0.8),
              inset 0 0 0 1px rgba(255,255,255,0.05),
              0 0 0 1px rgba(0,0,0,0.9)
            `,
          }}
        >
          {/* Top metallic highlight */}
          <div
            className="absolute inset-x-0 top-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.2) 50%, transparent 95%)',
            }}
          />
          
          {/* Screen */}
          <div
            className="rounded-[10px] md:rounded-[12px] overflow-hidden mt-2 md:mt-2"
            style={{
              background: '#000000',
              boxShadow: `
                inset 0 0 0 2px rgba(0,0,0,0.95),
                inset 0 2px 8px rgba(0,0,0,0.8),
                0 0 0 1px rgba(255,255,255,0.05)
              `
            }}
          >
            {/* Screen glow effect */}
            <div
              className="absolute inset-0 rounded-[10px] md:rounded-[12px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
              }}
            />
            {children}
          </div>
          
          {/* Bottom bezel brand mark */}
        <div
          className="absolute bottom-[4px] sm:bottom-[8px] left-1/2 -translate-x-1/2 text-xs font-semibold tracking-wider"
            style={{
              color: 'rgba(255, 255, 255, 0.15)',
              fontSize: '8px',
              textShadow: '0 1px 1px rgba(0,0,0,0.5)'
            }}
          >
            CLOSIO
          </div>
        </div>

        {/* Stand - Neck */}
        <div className="relative flex flex-col items-center">
        <div
          className="relative"
          style={{
            width: '14px',
            height: '40px',
              background: 'linear-gradient(90deg, #2a2a2a 0%, #3a3a3a 20%, #4a4a4a 50%, #3a3a3a 80%, #2a2a2a 100%)',
              boxShadow: `
                -4px 0 8px rgba(0,0,0,0.3),
                4px 0 8px rgba(0,0,0,0.3),
                inset 2px 0 2px rgba(255,255,255,0.1),
                inset -2px 0 2px rgba(0,0,0,0.3)
              `,
            }}
          />
          {/* Metallic highlight on neck */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: '18px',
              height: '40px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
            }}
          />
        </div>

        {/* Stand - Base */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{
            width: '200px',
            height: '16px',
            background: 'linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 40%, #1a1a1a 100%)',
            borderRadius: '0 0 8px 8px',
            boxShadow: `
              0 6px 16px rgba(0,0,0,0.4),
              inset 0 2px 2px rgba(255,255,255,0.15),
              inset 0 -1px 2px rgba(0,0,0,0.8),
              0 0 0 1px rgba(0,0,0,0.9)
            `,
          }}
        >
          {/* Top metallic highlight */}
          <div
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.12) 50%, transparent 95%)',
            }}
          />
          {/* Side shadows for depth */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </div>
      </div>

      {/* Shadow under base */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2"
        style={{
          width: '240px',
          height: '20px',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, transparent 80%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  );
};

export default function DealMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -20% 0px' });
  const navigate = useNavigate();

  const leftFacts = [benefits[0], benefits[1]];
  const rightFacts = [benefits[2], benefits[3]];

  return (
    <section ref={sectionRef} className="py-32 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-20 lg:mb-24">
          <motion.div
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-gray-500 whitespace-nowrap sm:whitespace-normal">
              <TypewriterText text="/ Policy Map Solutions" delay={200} isVisible={isInView} />
            </h2>
          </motion.div>
          
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-[1.7] font-light">
              Visualize your agency's reach in real-time.{' '}
              <span className="text-white font-normal">Watch as policies are sold across the nation.</span>
            </p>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center">
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
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-28 blur-3xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.35), transparent 70%)',
                      }}
                    />
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-20 blur-2xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.25), transparent 70%)',
                      }}
                    />
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-12 blur-xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.2), transparent 70%)',
                      }}
                    />
                  </div>
                  <div className="relative p-7 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-sm font-medium tracking-wider mb-2.5 block">{fact.number}</span>
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
              {/* Illustrated UI - Policy Map Dashboard */}
              <div className="w-full aspect-video bg-gradient-to-br from-black via-purple-950/20 to-black relative overflow-hidden">
                {/* Grid background */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                
                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-9 sm:h-12 bg-black/60 backdrop-blur-sm border-b border-purple-500/20 flex items-start justify-between px-3 sm:px-6 pt-1 sm:pt-2">
                  <div className="flex flex-col items-start gap-0.5">
                    <img 
                      src="/favicon_and_logo_for_closio.png" 
                      alt="Closio Logo" 
                      className="w-3.5 h-3.5 sm:w-5 sm:h-5 object-contain"
                    />
                    <span className="text-white text-[8px] sm:text-[10px] font-semibold">Policy Map Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 sm:w-16 h-1.5 sm:h-2 rounded-full bg-purple-500/30" />
                    <div className="w-8 sm:w-16 h-1.5 sm:h-2 rounded-full bg-white/20" />
                    <div className="w-8 sm:w-16 h-1.5 sm:h-2 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Map illustration - US Map with white state borders */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center pt-10 px-3 pb-6 sm:pt-12 sm:pl-8 sm:pr-40 sm:pb-14">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Blank_US_Map_%28states_only%29.svg"
                    alt="United States Map"
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.8
                    }}
                  />
                </div>
                
                {/* State Tracker - Right Side */}
                <div className="absolute right-1 sm:right-2 top-[44px] sm:top-[60px] bottom-[44px] sm:bottom-[60px] w-20 sm:w-36 overflow-hidden hidden sm:block">
                  <div className="backdrop-blur-md bg-black/50 border border-white/10 rounded-lg h-full overflow-y-auto p-1.5 sm:p-2">
                    <div className="space-y-1">
                      {[
                        { state: 'California', count: 342 },
                        { state: 'Texas', count: 287 },
                        { state: 'Florida', count: 256 },
                        { state: 'New York', count: 234 },
                        { state: 'Pennsylvania', count: 198 },
                        { state: 'Illinois', count: 176 },
                        { state: 'Ohio', count: 165 },
                        { state: 'Georgia', count: 154 },
                        { state: 'N. Carolina', count: 143 },
                        { state: 'Michigan', count: 132 },
                        { state: 'New Jersey', count: 128 },
                        { state: 'Virginia', count: 119 },
                        { state: 'Washington', count: 107 },
                        { state: 'Arizona', count: 98 },
                        { state: 'Massachusetts', count: 89 },
                        { state: 'Tennessee', count: 84 },
                        { state: 'Indiana', count: 76 },
                        { state: 'Missouri', count: 71 },
                        { state: 'Maryland', count: 68 },
                        { state: 'Wisconsin', count: 62 },
                        { state: 'Colorado', count: 59 },
                        { state: 'Minnesota', count: 54 },
                        { state: 'S. Carolina', count: 48 },
                        { state: 'Alabama', count: 45 },
                        { state: 'Louisiana', count: 41 },
                        { state: 'Kentucky', count: 37 },
                        { state: 'Oregon', count: 33 },
                        { state: 'Oklahoma', count: 29 },
                        { state: 'Connecticut', count: 24 },
                        { state: 'Utah', count: 19 },
                      ].map((item, index) => (
                        <div 
                          key={item.state}
                          className="flex items-center justify-between text-[7px] sm:text-[9px] py-0.5 px-1 sm:px-1.5 rounded hover:bg-white/5 transition-colors"
                        >
                          <span className="text-white/70 truncate flex-1">{item.state}</span>
                          <span className="text-white font-semibold ml-1">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats overlay - Bottom */}
                <div className="absolute bottom-2 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between">
                  <div className="backdrop-blur-md bg-black/40 border border-purple-500/30 rounded-lg px-2 py-1 sm:px-3 sm:py-2 flex flex-col">
                    <span className="text-[7px] sm:text-[9px] text-white/60 uppercase tracking-wider mb-0.5">Total Policies</span>
                    <span className="text-[11px] sm:text-sm font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">2,847</span>
                  </div>
                  
                  <div className="backdrop-blur-md bg-black/40 border border-white/20 rounded-lg px-2 py-1 sm:px-3 sm:py-2 flex flex-col">
                    <span className="text-[7px] sm:text-[9px] text-white/60 uppercase tracking-wider mb-0.5">Active States</span>
                    <span className="text-[11px] sm:text-sm font-bold text-white">34</span>
                  </div>
                  
                  <div className="backdrop-blur-md bg-black/40 border border-purple-500/30 rounded-lg px-2 py-1 sm:px-3 sm:py-2 flex flex-col">
                    <span className="text-[7px] sm:text-[9px] text-white/60 uppercase tracking-wider mb-0.5">This Month</span>
                    <span className="text-[11px] sm:text-sm font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">+342</span>
                  </div>
                </div>

                {/* Purple glow effects */}
                <div
                  className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
                  }}
                />
                <div
                  className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                  }}
                />
              </div>
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
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-28 blur-3xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.35), transparent 70%)',
                      }}
                    />
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-20 blur-2xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.25), transparent 70%)',
                      }}
                    />
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-12 blur-xl"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.2), transparent 70%)',
                      }}
                    />
                  </div>
                  <div className="relative p-7 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-sm font-medium tracking-wider mb-2.5 block">{fact.number}</span>
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

        <div className="lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full h-20 blur-2xl"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.35), transparent 70%)',
                  }}
                />
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-16 blur-xl"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.25), transparent 70%)',
                  }}
                />
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[60%] h-10 blur-lg"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.2), transparent 70%)',
                  }}
                />
              </div>
              <div className="relative p-4 sm:p-6 z-10">
                <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-xs font-medium tracking-wider mb-2 block">{benefit.number}</span>
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
