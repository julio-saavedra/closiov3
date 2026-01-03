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
        d="M 50 1000
           L 50 450
           Q 50 380, 120 380
           L 370 380
           Q 440 380, 440 310
           L 440 -50"
        fill="none"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#valueLineGlow)"
      />
      <path
        d="M 50 1000
           L 50 450
           Q 50 380, 120 380
           L 370 380
           Q 440 380, 440 310
           L 440 -50"
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
        <div className="grid gap-12 lg:gap-20 grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 flex items-center justify-start"
          >
            <div className="relative w-full max-w-5xl" style={{ perspective: '2000px' }}>
              {/* Mac Monitor Frame */}
              <div
                className="relative"
                style={{
                  transform: 'rotateY(8deg) rotateX(2deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Monitor Bezel - Ultra Slim */}
                <div className="relative bg-gradient-to-b from-white via-[#F5F5F5] to-[#E8E8E8] rounded-[16px] p-[6px] shadow-2xl">
                  {/* Screen Reflection Overlay */}
                  <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none z-10"></div>

                  {/* Ultra Slim Inner Bezel */}
                  <div className="relative bg-black rounded-[12px] p-[3px]">
                    {/* Screen */}
                    <div className="relative rounded-[10px] overflow-hidden bg-black">
                      <video
                        src="https://www.dropbox.com/scl/fi/im3lveaj0bz8pe0un87u5/new-video-fro-laptop-display.mp4?rlkey=gaj2fuvzalyfyup0abzhscs1w&st=gyl2lmoj&raw=1"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-auto"
                      />
                      {/* Screen Glare */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Bottom Chin - Minimal */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                    <div className="w-32 h-[6px] bg-gradient-to-b from-[#E8E8E8] to-[#D0D0D0] rounded-b-md"></div>
                  </div>
                </div>

                {/* Monitor Stand */}
                <div className="relative mt-2 flex flex-col items-center">
                  {/* Stand Neck with IO Logo */}
                  <div className="relative w-16 h-20 bg-gradient-to-r from-[#D8D8D8] via-white to-[#D8D8D8] rounded-b-lg shadow-xl flex items-center justify-center">
                    {/* IO Logo */}
                    <div className="text-black font-bold text-xl tracking-tight flex items-center">
                      <span
                        className="italic mr-[-2px]"
                        style={{
                          WebkitTextStroke: '0.5px black',
                          WebkitTextFillColor: 'transparent',
                          fontStyle: 'italic'
                        }}
                      >
                        I
                      </span>
                      <span>O</span>
                    </div>
                  </div>
                  {/* Stand Base - Circular */}
                  <div className="w-52 h-[10px] bg-gradient-to-r from-[#C0C0C0] via-white to-[#C0C0C0] rounded-full shadow-2xl -mt-1"></div>
                  {/* Shadow under base */}
                  <div className="w-44 h-[6px] bg-black/15 rounded-full blur-lg mt-[2px]"></div>
                </div>

                {/* Ambient Shadow */}
                <div className="absolute inset-0 -z-10 bg-gradient-radial from-transparent via-transparent to-black/30 blur-3xl" style={{ transform: 'translateZ(-50px) scale(1.1)' }}></div>
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
