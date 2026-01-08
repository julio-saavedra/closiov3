import React from 'react';
import { motion } from 'framer-motion';

const AdditionalFeatures: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 md:py-32 lg:py-40 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white/80 tracking-wide">
            ...and more additional features
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
