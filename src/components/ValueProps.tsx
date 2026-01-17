import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShinyButton } from './ui/shiny-button';

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
    <section id="why-closio" className="py-24 sm:py-28 md:py-32 lg:py-40 xl:py-48 bg-black relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header - Title Left, Context Right */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
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
          className="relative mb-8 md:mb-12 px-0 sm:px-2 md:px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="relative opacity-40">
              <img
                src="/image copy copy copy copy.png"
                alt="Closio Dashboard"
                className="w-full h-auto rounded-2xl"
                style={{ textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 1)' }}
              />

              {/* Light glow effect on top half */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 70% 40% at 50% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)'
                }}
              />

              {/* Gradient blend to black at bottom */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.98) 92%, black 100%)'
                }}
              />

              {/* Bottom left corner blend */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 50% 40% at 0% 100%, black 0%, rgba(0,0,0,0.8) 30%, transparent 60%)'
                }}
              />

              {/* Bottom right corner blend */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 50% 40% at 100% 100%, black 0%, rgba(0,0,0,0.8) 30%, transparent 60%)'
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Stat Line - inline stats with dividers */}
        <div className="relative mb-8 sm:mb-12">
          <div 
            className="flex flex-wrap sm:flex-nowrap items-start gap-4 sm:gap-6 md:gap-8 opacity-[0.92] text-transparent bg-clip-text text-left w-full"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)',
              WebkitBackgroundClip: 'text'
            }}
          >
            {valueItems.map((item, index) => (
              <React.Fragment key={item.number}>
                <motion.div
                  className="flex flex-1 min-w-0 items-start gap-2 sm:gap-3"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent text-[10px] sm:text-xs font-semibold tracking-[0.12em] uppercase shrink-0">
                    {item.number}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white leading-[1.4] break-words">
                    {item.title}
                  </h3>
                </motion.div>

                {index < valueItems.length - 1 && (
                  <div className="hidden sm:block h-10 sm:h-12 md:h-14 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent rotate-12" />
                )}
              </React.Fragment>
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
