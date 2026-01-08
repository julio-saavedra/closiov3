import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AdditionalFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.3"]
  });

  // Shadow opacity - stays visible
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.65]);

  // First text animation - fades in and stays
  const text1Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const text1Y = useTransform(scrollYProgress, [0, 0.3], [30, 0]);

  // Second text animation - fades in and stays
  const text2Opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const text2Y = useTransform(scrollYProgress, [0.2, 0.5], [30, 0]);

  return (
    <section ref={sectionRef} className="py-40 sm:py-44 md:py-48 lg:py-56 bg-black">
      <div className="flex justify-center px-6">
        <motion.div
          className="glow-shell"
          style={{
            position: 'relative',
            width: 'min(1100px, 92vw)',
            padding: '110px 28px 90px',
            borderRadius: '80px',
            textAlign: 'center',
            overflow: 'visible',
            '--shadow-opacity': shadowOpacity
          } as React.CSSProperties}
        >
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
              opacity: var(--shadow-opacity, 0.65);
              z-index: 0;
              pointer-events: none;
              transition: opacity 0.1s linear;
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: '#9CA3AF',
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
                opacity: text1Opacity,
                y: text1Y
              }}
            >
              The platform starts here but doesnt stop
            </motion.h2>
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: '#9CA3AF',
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em',
                opacity: text2Opacity,
                y: text2Y
              }}
            >
              More advanced features below
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
