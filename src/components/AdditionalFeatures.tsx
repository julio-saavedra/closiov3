import React from 'react';
import { motion } from 'framer-motion';

const AdditionalFeatures: React.FC = () => {
  return (
    <section className="py-32 sm:py-36 md:py-40 lg:py-48 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
            ...more advanced features
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
