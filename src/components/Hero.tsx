import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroBackground3D from './HeroBackground3D';
import PerspectiveGrid3D from './PerspectiveGrid3D';

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 4000, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [end, duration, delay]);

  return <>{count.toLocaleString()}</>;
};

interface TypewriterTextProps {
  text: string;
  delay: number;
  className?: string;
  isGradient?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay, className = '', isGradient = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let startTimeout: NodeJS.Timeout;
    let typeInterval: NodeJS.Timeout;

    startTimeout = setTimeout(() => {
      setHasStarted(true);
      setShowCursor(true);
      let currentIndex = 0;

      typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setShowCursor(false);
        }
      }, 70);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, [text, delay]);

  return (
    <motion.span
      className={`inline-block whitespace-nowrap ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: hasStarted ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      <motion.span
        className={isGradient ? 'text-[#6ad4f2]' : 'text-white'}
        animate={{ opacity: showCursor ? [1, 0, 1] : 0 }}
        transition={{ duration: 1.6, repeat: showCursor ? Infinity : 0 }}
      >
        |
      </motion.span>
    </motion.span>
  );
};

const FlipButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="demo-btn relative pl-3 pr-6 sm:pr-8 py-3 bg-white/95 hover:bg-white text-black font-semibold text-sm sm:text-base rounded-full overflow-visible z-30 group min-h-[52px] sm:min-h-[56px] backdrop-blur-sm"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 5.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="flex items-center gap-3 sm:gap-4 relative z-10">
        <motion.div
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex-shrink-0 relative"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 90 : 0
          }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-black"
            animate={{
              boxShadow: isHovered
                ? '0 0 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3)'
                : '0 0 0px rgba(0, 0, 0, 0)'
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="translate-x-[1px] relative z-10"
            animate={{
              x: isHovered ? 2 : 0
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </motion.svg>
        </motion.div>
        <span className="font-medium">Get in touch</span>
      </span>
    </motion.button>
  );
};


const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full text-white flex items-center relative overflow-hidden bg-black"
    >
      <motion.div style={{ opacity, scale }} className="absolute inset-0">
        <PerspectiveGrid3D />
        <HeroBackground3D />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-30 py-32 lg:py-0"
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl lg:max-w-2xl">
          <motion.span
            className="text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 font-medium mb-8 relative"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
          >
            CLOS
            <motion.span
              className="inline-block text-[0.85em] italic text-[#6ad4f2]"
              initial={{ opacity: 0, y: 15, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 2.4, delay: 3.8, ease: [0.16, 1, 0.3, 1] }}
            >
              I
            </motion.span>
            <motion.span
              className="inline-block text-[0.85em]"
              initial={{ opacity: 0, y: 15, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 2.4, delay: 4.1, ease: [0.16, 1, 0.3, 1] }}
            >
              O
            </motion.span>
            {" "}WAS BUILT FOR YOU
          </motion.span>

          <h1 className="hero-title font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] -tracking-[0.03em] mb-8">
            <span className="block">
              <TypewriterText
                text="Close More."
                delay={3100}
                className="text-white"
              />
            </span>
            <span className="block text-neutral-400 font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <TypewriterText
                text="Close Smarter."
                delay={3700}
                isGradient={false}
              />
            </span>
          </h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-md leading-[1.6] mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 5.3 }}
          >
            Every deal tracked. Every win shared. Automatically.
          </motion.p>

          <div className="flex flex-col items-center md:items-start gap-6 w-full">
            <motion.p
              className="text-sm sm:text-base text-neutral-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 5.3 }}
            >
              / Trusted & Used by <CountUp end={1000} duration={4000} delay={5500} />+ agents
            </motion.p>

            <FlipButton />
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default Hero;
