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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative flex flex-col items-center"
        >
          <div className="relative inline-block">
            <svg
              className="absolute pointer-events-none"
              style={{
                left: '50%',
                top: '-80px',
                transform: 'translateX(-50%)',
                width: 'calc(100% + 240px)',
                height: '250px'
              }}
              viewBox="0 0 1200 250"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 20 200 L 200 30 Q 250 10, 300 10 L 900 10 Q 950 10, 1000 30 L 1180 200"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
                fill="none"
                filter="url(#glow)"
              />
            </svg>
            <motion.div className="relative z-10 px-8 flex flex-col items-center gap-3">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
                style={{
                  color: useTransform(
                    [colorR, colorG, colorB],
                    ([r, g, b]) => `rgb(${r}, ${g}, ${b})`
                  )
                }}
              >
                .....The platform starts here.
              </motion.h2>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide"
                style={{
                  color: useTransform(
                    [colorR, colorG, colorB],
                    ([r, g, b]) => `rgb(${r}, ${g}, ${b})`
                  )
                }}
              >
                more advanced capabilities continue below
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
