import React from 'react';
import { motion } from 'framer-motion';

const AdditionalFeatures: React.FC = () => {
  return (
    <section className="py-40 sm:py-44 md:py-48 lg:py-56 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative"
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
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <line
                x1="200"
                y1="30"
                x2="1000"
                y2="30"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
                filter="url(#glow)"
              />
              <line
                x1="200"
                y1="30"
                x2="20"
                y2="200"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
                filter="url(#glow)"
              />
              <line
                x1="1000"
                y1="30"
                x2="1180"
                y2="200"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
                filter="url(#glow)"
              />
            </svg>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide relative z-10 px-8">
              ...more advanced features
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
