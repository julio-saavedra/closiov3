import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!isVisible) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="gridFade" cx="0%" cy="100%" r="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="gridMask">
                  <rect width="500" height="500" fill="url(#gridFade)" />
                </mask>
              </defs>
              <g mask="url(#gridMask)">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 25}
                    x2="500"
                    y2={i * 25}
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.04,
                      ease: 'easeOut',
                    }}
                  />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.line
                    key={`v-${i}`}
                    x1={i * 25}
                    y1="0"
                    x2={i * 25}
                    y2="500"
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.04,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </g>
            </svg>
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.img
              src="/closio_main_logo copy copy.png"
              alt="Closio"
              className="h-28 sm:h-36 w-auto"
              initial={{ filter: 'brightness(0)' }}
              animate={{ filter: 'brightness(1)' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.div
              className="absolute -inset-8 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
              }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
