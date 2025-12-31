import React from 'react';
import { motion } from 'framer-motion';

const VerticalLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 500 900"
      className="absolute left-0 top-0 h-full w-[30vw] pointer-events-none"
      style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.25))' }}
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="valueLineGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 350 -50
           L 350 200
           Q 350 280, 270 280
           L 120 280
           Q 50 280, 50 360
           L 50 1000"
        fill="none"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#valueLineGlow)"
      />
      <path
        d="M 350 -50
           L 350 200
           Q 350 280, 270 280
           L 120 280
           Q 50 280, 50 360
           L 50 1000"
        fill="none"
        stroke="rgba(255, 255, 255, 0.15)"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="blur-md"
      />
    </svg>
  );
};

const valueItems = [
  {
    number: '01',
    title: 'Purpose-built for life insurance workflows'
  },
  {
    number: '02',
    title: 'Manage your book of business with ease'
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
    <section id="why-closio" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black relative overflow-hidden">
      <VerticalLine />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 flex items-center justify-center"
          >
            <div
              className="rounded-2xl overflow-hidden border border-[#6ad4f2]/40 w-full lg:scale-110 lg:origin-left p-1.5 bg-[#050d18]"
              style={{
                boxShadow: '0 0 30px rgba(106, 212, 242, 0.25), 0 0 60px rgba(106, 212, 242, 0.15), 0 0 100px rgba(106, 212, 242, 0.08)'
              }}
            >
              <div className="rounded-xl overflow-hidden bg-[#0a0a0a]">
                <video
                  src="https://www.dropbox.com/scl/fi/im3lveaj0bz8pe0un87u5/new-video-fro-laptop-display.mp4?rlkey=gaj2fuvzalyfyup0abzhscs1w&st=gyl2lmoj&raw=1"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6ad4f2]/30 to-transparent my-1.5" />
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/wall_art_for_closio.png"
                  alt="Closio Dashboard Features"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="order-2 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Why CLOS<span
                  className="italic mx-1"
                  style={{ WebkitTextStroke: '1.5px currentColor', WebkitTextFillColor: 'transparent' }}
                >I</span>O
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
                    <span className="text-[#6ad4f2] group-hover:text-[#d593c0] text-sm font-semibold tracking-wider pt-1 transition-colors duration-300">
                      {item.number}
                    </span>
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-medium text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#d593c0] group-hover:to-[#6ad4f2] group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-48 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300"
              >
                Book a Demo
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;
