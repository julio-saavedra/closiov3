import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span className="relative">
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          className="inline-block w-[2px] h-5 bg-black ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
};

const HeroVerticalLine: React.FC = () => {
  return (
    <motion.div
      className="absolute left-0 bottom-0 w-[30vw] h-[350px] pointer-events-none z-[5] hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      <svg
        viewBox="0 0 500 350"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))' }}
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="heroLineGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 500 85
             L 120 85
             Q 50 85, 50 155
             L 50 400"
          fill="none"
          stroke="white"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#heroLineGlow)"
        />
        <path
          d="M 500 85
             L 120 85
             Q 50 85, 50 155
             L 50 400"
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="blur-md"
        />
      </svg>
    </motion.div>
  );
};

const StaticButton: React.FC = () => {
  return (
    <motion.button
      className="relative px-8 py-4 bg-white text-black font-semibold text-base rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      <span className="relative z-10">
        <TypewriterText text="Book a Demo Now" delay={2000} />
      </span>
    </motion.button>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full text-white flex items-center relative overflow-visible"
    >
      <motion.div
        className="absolute right-0 top-[20%] w-[65%] lg:w-[70%] h-auto z-0 pointer-events-none hidden md:block"
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <img
          src="/transparent_hero_photo.png"
          alt="Closio Dashboard"
          className="w-full h-auto object-contain drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
          }}
        />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-32 lg:py-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl lg:max-w-2xl">
          <motion.span
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            CLOS<em className="italic">I</em>O WAS BUILT FOR YOU
          </motion.span>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] -tracking-[0.02em] overflow-hidden mb-6">
            <motion.span
              className="inline-block"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Close More.
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d593c0] to-[#6ad4f2]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Close Smarter.
            </motion.span>
          </h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The life insurance CRM that takes you from lead to issue paid.
          </motion.p>

          <StaticButton />
        </div>
      </div>

      <HeroVerticalLine />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
