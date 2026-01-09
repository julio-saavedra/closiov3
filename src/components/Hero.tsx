import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroBackground3D from './HeroBackground3D';

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

  useEffect(() => {
    let startTimeout: NodeJS.Timeout;
    let typeInterval: NodeJS.Timeout;

    startTimeout = setTimeout(() => {
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
      }, 150);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, [text, delay]);

  return (
    <span className={`inline-block whitespace-nowrap ${className}`}>
      {displayedText}
      <motion.span
        className={isGradient ? 'text-[#6ad4f2]' : 'text-white'}
        animate={{ opacity: showCursor ? [1, 0, 1] : 0 }}
        transition={{ duration: 1.6, repeat: showCursor ? Infinity : 0 }}
      >
        |
      </motion.span>
    </span>
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
      className="demo-btn relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold text-sm sm:text-base rounded-xl overflow-hidden z-30 group min-h-[44px]"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 5.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-neutral-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"
        initial={{ x: "-200%" }}
        animate={isHovered ? { x: "200%" } : { x: "-200%" }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />
      <span className="flex items-center justify-center overflow-visible h-6 relative z-10">
        Get in touch
      </span>
    </motion.button>
  );
};

const HeroGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      <div
        className="absolute top-0 bottom-0 right-0 w-[70%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: `
            linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 65%)
          `,
          WebkitMaskImage: `
            linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 65%)
          `,
        }}
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-[70%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px',
          maskImage: `
            linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 35%, transparent 60%)
          `,
          WebkitMaskImage: `
            linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 35%, transparent 60%)
          `,
        }}
      />
    </div>
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
        <HeroBackground3D />
        <HeroGrid />

        <motion.div
          className="absolute top-[20%] left-0 h-[65vh] w-auto overflow-visible pointer-events-none z-[3] hidden lg:block"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: 'translateX(-35%) rotate(180deg)',
          }}
        >
          <div className="relative h-full">
            <img
              src="/image.png"
              alt="Dashboard Preview"
              className="h-full w-auto object-contain"
              style={{
                filter: 'brightness(0.7) saturate(1.1)',
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent"
              style={{
                mixBlendMode: 'multiply',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 60%)',
              }}
            />
          </div>
        </motion.div>
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
            <span className="block text-[#6ad4f2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <TypewriterText
                text="Close Smarter."
                delay={4100}
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
