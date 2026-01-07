import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroBackground3D from './HeroBackground3D';

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

const FlipButton: React.FC = () => {
  return (
    <motion.button
      className="demo-btn relative px-8 py-4 bg-white text-black font-semibold text-base rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 4.4 }}
    >
      <span className="flex items-center justify-center overflow-visible h-6">
        <TypewriterText text="Book a Demo Now" delay={5100} />
      </span>
    </motion.button>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full text-white flex items-center relative overflow-hidden"
    >
      <HeroBackground3D />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 55% 55% at 30% 50%, black 0%, rgba(0,0,0,0.3) 20%, transparent 55%)',
          WebkitMaskImage: 'radial-gradient(ellipse 55% 55% at 30% 50%, black 0%, rgba(0,0,0,0.3) 20%, transparent 55%)',
        }}
      />

      <motion.div
        className="absolute right-0 top-[8%] w-[70%] lg:w-[75%] h-auto z-20 hidden md:block"
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 3.1 }}
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

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-30 py-32 lg:py-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl lg:max-w-2xl">
          <motion.span
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
          >
            CLOS<em className="italic">I</em>O WAS BUILT FOR YOU
          </motion.span>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] -tracking-[0.02em] mb-6">
            <motion.span
              className="inline-block"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 3.0 }}
            >
              Close More.
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d593c0] to-[#6ad4f2]"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 3.2 }}
            >
              Close Smarter.
            </motion.span>
          </h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.3 }}
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
