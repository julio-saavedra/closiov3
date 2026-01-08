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
                rgba(255, 255, 255, 0.25),
                rgba(255, 255, 255, 0.12) 25%,
                rgba(255, 255, 255, 0.04) 50%,
                rgba(255, 255, 255, 0.00) 75%
              );
              filter: blur(6px);
              opacity: 0.7;
              z-index: 0;
              pointer-events: none;
            }

            .glow-shell::after {
              content: "";
              position: absolute;
              left: 6%;
              right: 6%;
              top: 36px;
              height: 2px;
              border-radius: 999px;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.55),
                transparent
              );
              filter: blur(2px);
              opacity: 0.8;
              z-index: 1;
              pointer-events: none;
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-center m-0"
              style={{
                color: useTransform(
                  [colorR, colorG, colorB],
                  ([r, g, b]) => `rgb(${r}, ${g}, ${b})`
                ),
                lineHeight: 1.25
              }}
            >
              The platform starts here
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-center m-0"
              style={{
                color: useTransform(
                  [colorR, colorG, colorB],
                  ([r, g, b]) => `rgb(${r}, ${g}, ${b})`
                ),
                lineHeight: 1.25
              }}
            >
              more advanced capabilities continue below
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
