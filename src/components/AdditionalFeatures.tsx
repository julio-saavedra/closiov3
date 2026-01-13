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
    <section ref={sectionRef} className="pt-40 pb-28 sm:pt-44 sm:pb-32 md:pt-48 md:pb-36 lg:pt-56 lg:pb-40 bg-[#0D0D0D] relative overflow-visible rounded-3xl">
      <div className="flex justify-center px-6">
        <div
          className="glow-shell"
          style={{
            position: 'relative',
            width: 'min(1100px, 92vw)',
            padding: '110px 28px 90px',
            borderRadius: '80px',
            textAlign: 'center',
            overflow: 'visible',
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
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="40"
              y1="8"
              x2="8"
              y2="40"
              stroke="rgba(255, 255, 255, 0.15)"
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
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="40"
              y1="8"
              x2="8"
              y2="40"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <style>{`
            .glow-shell::before {
              content: "";
              position: absolute;
              top: -1px;
              bottom: -1px;
              left: -20px;
              right: -20px;
              border-radius: inherit;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.2) 0%,
                rgba(255, 255, 255, 0.08) 20%,
                rgba(255, 255, 255, 0.02) 40%,
                rgba(255, 255, 255, 0.00) 60%
              );
              filter: blur(4px);
              opacity: 0.65;
              z-index: 0;
              pointer-events: none;
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: textColor,
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              The platform starts here but doesn't stop
            </motion.h2>
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: textColor,
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
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
