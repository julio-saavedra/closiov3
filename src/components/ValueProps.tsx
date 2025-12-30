import React from 'react';
import { motion } from 'framer-motion';

const valueItems = [
  {
    number: '01',
    title: 'Purpose-built for life insurance workflows'
  },
  {
    number: '02',
    title: 'Automated commission tracking and splits'
  },
  {
    number: '03',
    title: 'Fast onboarding with pre-built templates'
  },
  {
    number: '04',
    title: 'Complete visibility across your agency'
  }
];

const ValueProps: React.FC = () => {
  return (
    <section id="why-closio" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 flex items-center justify-center"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-[#6ad4f2] shadow-2xl shadow-[#6ad4f2]/20">
              <video
                src="https://www.dropbox.com/scl/fi/im3lveaj0bz8pe0un87u5/new-video-fro-laptop-display.mp4?rlkey=gaj2fuvzalyfyup0abzhscs1w&st=gyl2lmoj&raw=1"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <div className="order-2 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Why CLOS<span className="italic">I</span>O
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg">
                A CRM built thoughtfully for the workflows and operational demands of life-insurance teams.
              </p>
            </motion.div>

            <div className="space-y-0">
              {valueItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group py-5 border-b border-white/20 last:border-b-0"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-[#3ca2fa] text-sm font-semibold tracking-wider pt-1">
                      {item.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white group-hover:text-[#3ca2fa] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;
