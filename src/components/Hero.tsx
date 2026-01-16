import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroBackground3D from './HeroBackground3D';
import PerspectiveGrid3D from './PerspectiveGrid3D';
import { ShinyButton } from './ui/shiny-button';

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

const GetInTouchButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 5.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <ShinyButton onClick={handleClick}>
        Get in touch
      </ShinyButton>
    </motion.div>
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
      className="min-h-screen w-full text-white flex items-center relative bg-black"
      style={{ overflow: 'visible' }}
    >
      <motion.div 
        style={{ opacity, scale, willChange: 'opacity, transform' }} 
        className="absolute inset-0"
      >
        <PerspectiveGrid3D />
        <HeroBackground3D />
      </motion.div>

      <motion.div
        style={{ opacity, willChange: 'opacity' }}
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
              className="inline-block text-[0.85em] italic text-[#a855f7]"
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
            <GetInTouchButton />
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default Hero;
