import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroBackground3D from './HeroBackground3D';

const NeonBleedEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]"
        style={{ transform: 'translate(0, -45%)' }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(106, 212, 242, 0.4) 0%, rgba(106, 212, 242, 0.15) 30%, transparent 70%)',
            filter: 'blur(40px)',
            transform: 'translate(-8px, 0) scale(1.1)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 100, 180, 0.25) 0%, rgba(255, 100, 180, 0.1) 30%, transparent 70%)',
            filter: 'blur(45px)',
            transform: 'translate(8px, 0) scale(1.1)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 25%, transparent 60%)',
            filter: 'blur(30px)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 w-[280px] lg:w-[350px] h-[500px] lg:h-[600px]"
          style={{
            background: `repeating-linear-gradient(
              180deg,
              transparent 0px,
              transparent 3px,
              rgba(106, 212, 242, 0.12) 3px,
              rgba(106, 212, 242, 0.12) 5px,
              transparent 5px,
              transparent 12px
            )`,
            maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
            filter: 'blur(2px)',
            mixBlendMode: 'screen',
            animation: 'bleedDrift 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 w-[200px] lg:w-[250px] h-[450px] lg:h-[550px]"
          style={{
            background: `repeating-linear-gradient(
              180deg,
              transparent 0px,
              transparent 4px,
              rgba(255, 100, 180, 0.08) 4px,
              rgba(255, 100, 180, 0.08) 6px,
              transparent 6px,
              transparent 15px
            )`,
            maskImage: 'linear-gradient(to bottom, black 0%, black 15%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 15%, transparent 100%)',
            filter: 'blur(3px)',
            transform: 'translateX(10px)',
            mixBlendMode: 'screen',
            animation: 'bleedDrift 10s ease-in-out infinite reverse',
          }}
        />
      </div>
      <style>{`
        @keyframes bleedDrift {
          0%, 100% { transform: translate(-50%, 0) scaleY(1); opacity: 0.7; }
          50% { transform: translate(-50%, 8px) scaleY(1.02); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

interface TypewriterTextProps {
  text: string;
  delay: number;
  className?: string;
  isGradient?: boolean;
  skipAnimation?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay, className = '', isGradient = false, skipAnimation = false }) => {
  const [displayedText, setDisplayedText] = useState(skipAnimation ? text : '');
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (skipAnimation) return;

    const startTimeout = setTimeout(() => {
      setShowCursor(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setShowCursor(false);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, skipAnimation]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {showCursor && (
        <motion.span
          className={isGradient ? 'text-[#6ad4f2]' : 'text-white'}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const FlipButton: React.FC<{ skipAnimation?: boolean }> = ({ skipAnimation = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate('/schedule');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="demo-btn relative px-8 py-4 bg-white text-black font-semibold text-base rounded-xl overflow-hidden z-30 group"
      initial={skipAnimation ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: skipAnimation ? 0 : 0.6, delay: skipAnimation ? 0 : 5.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-neutral-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"
        initial={{ x: "-200%" }}
        animate={isHovered ? { x: "200%" } : { x: "-200%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <span className="flex items-center justify-center overflow-visible h-6 relative z-10">
        Book a Demo Now
      </span>
    </motion.button>
  );
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(() => {
    return sessionStorage.getItem('heroAnimationPlayed') === 'true';
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('heroAnimationPlayed', 'true');
        setHasAnimated(true);
      }, 6500);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full text-white flex items-center relative overflow-hidden bg-black"
    >
      <motion.div style={{ opacity, scale }} className="absolute inset-0">
        <NeonBleedEffect />
        <HeroBackground3D />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-30 py-32 lg:py-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl lg:max-w-2xl">
          <motion.span
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium mb-6 relative"
            initial={hasAnimated ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: hasAnimated ? 0 : 1, delay: hasAnimated ? 0 : 3.2, ease: [0.16, 1, 0.3, 1] }}
          >
            CLOS<em className="italic">I</em>O WAS BUILT FOR YOU
          </motion.span>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] -tracking-[0.02em] mb-6">
            <span className="block">
              <TypewriterText
                text="Close More."
                delay={3100}
                className="text-white"
                skipAnimation={hasAnimated}
              />
            </span>
            <span
              className="block text-[#6ad4f2]"
              style={{
                textShadow: "0 0 30px rgba(106, 212, 242, 0.5), 0 0 60px rgba(106, 212, 242, 0.2)"
              }}
            >
              <TypewriterText
                text="Close Smarter."
                delay={4100}
                isGradient={false}
                skipAnimation={hasAnimated}
              />
            </span>
          </h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed mb-14"
            initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: hasAnimated ? 0 : 0.8, delay: hasAnimated ? 0 : 5.3 }}
          >
            / Trusted & Used by 1,000+ agents
          </motion.p>

          <FlipButton skipAnimation={hasAnimated} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default Hero;
