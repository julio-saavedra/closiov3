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

        {/* Header - Title Left, Context Right */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              <span className="text-gray-400">/ Why</span>{' '}<span className="text-white">CLOS<span
                className="italic mx-0.5 sm:mx-1"
                style={{ WebkitTextStroke: '1.5px currentColor', WebkitTextFillColor: 'transparent' }}
              >I</span>O</span>
            </h2>
          </div>
          <div>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-[1.6]">
              Built by agents who know what it&apos;s like to juggle 100 policies, chase commissions, and wonder if that big deal actually closed. We solved the chaos—so you can focus on selling.
            </p>
          </div>
        </motion.div>

        {/* Large Dashboard Image */}
        <motion.div
          className="relative mb-8 md:mb-12 px-6 sm:px-8 md:px-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <img
              src="/image copy copy copy copy.png"
              alt="Closio Dashboard"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Stat Cards Below - 4 in a row */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
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
    </section>
  );
};

export default ValueProps;
