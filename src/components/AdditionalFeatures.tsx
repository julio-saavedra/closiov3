import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AdditionalFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.2"]
  });

  // Transition from white (rgb(255,255,255)) to gray (rgb(156,163,175))
  const colorR = useTransform(scrollYProgress, [0, 1], [255, 156]);
  const colorG = useTransform(scrollYProgress, [0, 1], [255, 163]);
  const colorB = useTransform(scrollYProgress, [0, 1], [255, 175]);

  return (
    <section ref={sectionRef} className="py-40 sm:py-44 md:py-48 lg:py-56 bg-black">
      <div className="flex justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glow-shell"
          style={{
            position: 'relative',
            width: 'min(1100px, 92vw)',
            padding: '110px 28px 90px',
            borderRadius: '80px',
            textAlign: 'center',
            overflow: 'visible'
          }}
        >
          <style>{`
            .glow-shell::before {
              content: "";
              position: absolute;
              inset: -1px;
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

            .glow-shell::after {
              content: "";
              position: absolute;
              left: 8%;
              right: 8%;
              top: 28px;
              height: 2px;
              border-radius: 999px;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.5) 30%,
                rgba(255, 255, 255, 0.5) 70%,
                transparent
              );
              filter: blur(2px);
              opacity: 0.75;
              z-index: 1;
              pointer-events: none;
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center m-0"
              style={{
                color: '#9CA3AF',
                lineHeight: 1.25,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.02em'
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
                letterSpacing: '-0.02em'
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
