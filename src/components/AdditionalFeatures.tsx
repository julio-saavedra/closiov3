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
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'calc(100% + 180px)',
                height: 'calc(100% + 120px)'
              }}
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 150 20
                   C 80 20, 40 30, 20 80
                   L 20 220
                   C 40 270, 80 280, 150 280
                   L 850 280
                   C 920 280, 960 270, 980 220
                   L 980 80
                   C 960 30, 920 20, 850 20
                   Z"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              />
            </svg>
            <motion.div className="relative z-10 px-12 py-8 flex flex-col items-center gap-3">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-center"
                style={{
                  color: useTransform(
                    [colorR, colorG, colorB],
                    ([r, g, b]) => `rgb(${r}, ${g}, ${b})`
                  )
                }}
              >
                The platform starts here
              </motion.h2>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-center"
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
