import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AdditionalFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#FFFFFF", "#E5E7EB", "#9CA3AF", "#6B7280"]
  );

  return (
    <section
      ref={sectionRef}
      className="pt-40 pb-28 sm:pt-44 sm:pb-32 md:pt-48 md:pb-36 lg:pt-56 lg:pb-40 relative overflow-visible rounded-3xl"
      style={{
        backgroundColor: '#000000'
      }}
    >
      <div 
        className="flex justify-center px-6"
        style={{
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          className="glow-shell"
          style={{
            position: 'relative',
            width: 'min(1100px, 92vw)',
            padding: '110px 28px 90px',
            borderRadius: '80px',
            textAlign: 'center',
            overflow: 'visible',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Top Left X */}
          <svg
            className="absolute"
            style={{
              left: '24px',
              top: '24px',
              width: '48px',
              height: '48px',
              zIndex: 10,
            }}
            viewBox="0 0 48 48"
            fill="none"
          >
            <line
              x1="8"
              y1="8"
              x2="40"
              y2="40"
              stroke="rgba(168, 85, 247, 0.4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="40"
              y1="8"
              x2="8"
              y2="40"
              stroke="rgba(168, 85, 247, 0.4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Bottom Right X */}
          <svg
            className="absolute"
            style={{
              right: '24px',
              bottom: '24px',
              width: '48px',
              height: '48px',
              zIndex: 10,
            }}
            viewBox="0 0 48 48"
            fill="none"
          >
            <line
              x1="8"
              y1="8"
              x2="40"
              y2="40"
              stroke="rgba(168, 85, 247, 0.4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="40"
              y1="8"
              x2="8"
              y2="40"
              stroke="rgba(168, 85, 247, 0.4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <style>{`
            .glow-shell::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) perspective(800px) rotateX(12deg);
              width: 140%;
              height: 140%;
              background: radial-gradient(
                ellipse at center,
                rgba(0, 0, 0, 0.95) 0%,
                rgba(0, 0, 0, 0.85) 20%,
                rgba(0, 0, 0, 0.6) 40%,
                rgba(0, 0, 0, 0.3) 60%,
                transparent 80%
              );
              filter: blur(30px);
              z-index: -1;
              pointer-events: none;
            }
            .glow-shell::after {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) skewY(-3deg);
              width: 120%;
              height: 160%;
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.4) 30%,
                rgba(0, 0, 0, 0.7) 50%,
                rgba(0, 0, 0, 0.5) 70%,
                transparent 100%
              );
              filter: blur(40px);
              z-index: -2;
              pointer-events: none;
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: textColor,
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
                willChange: 'color',
              }}
            >
              The platform starts here but doesn't stop
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.5
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: textColor,
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
                willChange: 'color',
              }}
            >
              More advanced features below
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
