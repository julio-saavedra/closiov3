import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShinyButton } from './ui/shiny-button';

const VerticalLine: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end -0.2"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Move down into monitor, then left out of screen
  const translateY = useTransform(scrollYProgress, [0.5, 0.75], ['0%', '50%']);
  const translateX = useTransform(scrollYProgress, [0.75, 1], ['0%', '-200%']);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none overflow-visible">
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          overflow: 'visible',
          translateY,
          translateX,
          opacity
        }}
      >
        <motion.path
          d="M 53 -5 L 53 28 Q 53 35, 46 35 L -5 35"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="0.45"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength,
          }}
          initial={{ pathLength: 0 }}
          transition={{
            duration: 1.8,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        />
      </motion.svg>
    </div>
  );
};

const valueItems = [
  {
    number: '01',
    title: 'Stop losing track of deals in spreadsheets'
  },
  {
    number: '02',
    title: "Know exactly what you're earning—before payday"
  },
  {
    number: '03',
    title: 'Get your team up and running in minutes, not weeks'
  },
  {
    number: '04',
    title: "See who's producing and who needs help"
  }
];

const ValueProps: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="why-closio" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-black relative overflow-hidden">
      <div className="hidden lg:block">
        <VerticalLine />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-20 grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center">

          <div className="order-2 lg:order-1 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-5xl">
              {/* Mac Monitor Frame */}
              <div className="relative">
                {/* Monitor Bezel - Ultra Slim */}
                <div className="relative bg-gradient-to-b from-white via-[#F5F5F5] to-[#E8E8E8] rounded-[16px] px-[8px] py-[6px] shadow-2xl">
                  {/* Screen Reflection Overlay */}
                  <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none z-10"></div>

                  {/* Ultra Slim Inner Bezel */}
                  <div className="relative bg-black rounded-[12px] px-[4px] py-[3px]">
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
                  <div className="relative w-16 h-20 bg-gradient-to-r from-[#D8D8D8] via-white to-[#D8D8D8] rounded-b-lg shadow-xl">
                  </div>
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

          <div className="order-1 lg:order-2 lg:pl-8 xl:pl-16 flex flex-col justify-center h-full">
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-3 sm:mb-4">
                <span className="text-gray-400">/ Why</span>{' '}<span className="text-white">CLOS<span
                  className="italic mx-0.5 sm:mx-1"
                  style={{ WebkitTextStroke: '1.5px currentColor', WebkitTextFillColor: 'transparent' }}
                >I</span>O</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-[1.6]">
                Built by agents who know what it&apos;s like to juggle 100 policies, chase commissions, and wonder if that big deal actually closed. We solved the chaos—so you can focus on selling.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {valueItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[#6ad4f2] group-hover:text-[#d593c0] text-xs font-semibold tracking-wider transition-colors duration-300">
                      {item.number}
                    </span>
                    <h3
                      className="text-sm sm:text-base font-medium text-white leading-[1.4] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#d593c0] group-hover:to-[#6ad4f2] group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ShinyButton onClick={() => { window.scrollTo(0, 0); navigate('/schedule'); }}>
                  Get in touch
                </ShinyButton>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;
