import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroBackground3D from './HeroBackground3D';

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
  }, [text, delay]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {showCursor && (
        <motion.span
          className={isGradient ? 'text-[#35E7E0]' : 'text-white'}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const FlipButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="demo-btn relative px-8 py-4 bg-white text-black font-semibold text-base rounded-xl overflow-hidden z-30 group"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 5.8, ease: [0.16, 1, 0.3, 1] }}
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
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-30 py-32 lg:py-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl lg:max-w-2xl">
          <motion.span
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium mb-6 relative"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
          >
            CLOS<em className="italic">I</em>O WAS BUILT FOR YOU
          </motion.span>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] -tracking-[0.02em] mb-6">
            <span className="block">
              <TypewriterText
                text="Close More."
                delay={3100}
                className="text-white"
              />
            </span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#35E7E0] via-[#6ad4f2] to-[#35E7E0]"
              style={{
                textShadow: "0 0 30px rgba(53, 231, 224, 0.5), 0 0 60px rgba(53, 231, 224, 0.2)"
              }}
            >
              <TypewriterText
                text="Close Smarter."
                delay={4100}
                isGradient={true}
              />
            </span>
          </h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5.3 }}
          >
            / Trusted & Used by 1,000+ agents
          </motion.p>

          <FlipButton />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default Hero;
