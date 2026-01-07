import React from 'react';
import { motion } from 'framer-motion';

const VerticalLine: React.FC = () => {
  return (
    <svg
      viewBox="0 0 1000 900"
      className="absolute right-0 top-0 h-full w-full pointer-events-none"
      preserveAspectRatio="none"
    >
      <path
        d="M 500 -50
           L 500 310
           Q 500 380, 430 380
           L 120 380
           Q 50 380, 50 450
           L 50 550
           Q 50 620, -20 620
           L -150 620"
        fill="none"
        stroke="white"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
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

          <div className="order-1 flex items-center justify-start">
            <div className="relative w-full max-w-5xl">
              {/* Mac Monitor Frame */}
              <div className="relative">
                {/* Monitor Bezel - Ultra Slim */}
                <div className="relative bg-gradient-to-b from-white via-[#F5F5F5] to-[#E8E8E8] rounded-[16px] p-[6px] shadow-2xl">
                  {/* Screen Reflection Overlay */}
                  <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none z-10"></div>

                  {/* Ultra Slim Inner Bezel */}
                  <div className="relative bg-black rounded-[12px] p-[3px]">
                    {/* Screen */}
                    <div className="relative rounded-[10px] overflow-hidden bg-black">
                      <img
                        src="/main_desktop_photo_dashboard.png"
                        alt="Closio Dashboard"
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
                  {/* Stand Neck */}
                  <div className="relative w-16 h-20 bg-gradient-to-r from-[#D8D8D8] via-white to-[#D8D8D8] rounded-b-lg shadow-xl"></div>
                  {/* Stand Base - Circular */}
                  <div className="w-52 h-[10px] bg-gradient-to-r from-[#C0C0C0] via-white to-[#C0C0C0] rounded-full shadow-2xl -mt-1"></div>
                  {/* Shadow under base */}
                  <div className="w-44 h-[6px] bg-black/15 rounded-full blur-lg mt-[2px]"></div>
                </div>

                {/* Ambient Shadow */}
                <div className="absolute inset-0 -z-10 bg-gradient-radial from-transparent via-transparent to-black/30 blur-3xl"></div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:pl-16 lg:max-w-md">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                WHY CLOS<span
                  className="italic mx-1"
                  style={{ WebkitTextStroke: '1.5px currentColor', WebkitTextFillColor: 'transparent' }}
                >I</span>O
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                A CRM built thoughtfully for the workflows and operational demands of life-insurance teams.
              </p>
            </motion.div>

            <div className="space-y-0">
              {valueItems.map((item) => (
                <div
                  key={item.number}
                  className="group py-4 border-b border-white/20 last:border-b-0"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-[#6ad4f2] group-hover:text-[#d593c0] text-xs font-semibold tracking-wider pt-1 transition-colors duration-300">
                      {item.number}
                    </span>
                    <h3
                      className="text-lg sm:text-xl font-medium text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#d593c0] group-hover:to-[#6ad4f2] group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-44 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 text-sm"
              >
                Book a Demo
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;
