import { motion } from 'framer-motion';

const GridPattern: React.FC = () => {
  return (
    <div
      className="absolute top-0 right-0 w-72 h-72 pointer-events-none overflow-hidden"
      style={{
        maskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 100% 0%, black 0%, transparent 75%)',
      }}
    >
      <svg width="288" height="288" className="opacity-50">
        <defs>
          <pattern id="banner-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="288" height="288" fill="url(#banner-grid-pattern)" />
      </svg>
    </div>
  );
};

const BottomGlow: React.FC = () => (
  <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 blur-3xl"
      style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(106, 212, 242, 0.5), transparent 70%)',
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-28 blur-2xl"
      style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(106, 212, 242, 0.4), transparent 70%)',
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-16 blur-xl"
      style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.3), transparent 70%)',
      }}
    />
  </div>
);

const OverlappingBanner: React.FC = () => {
  return (
    <div className="relative z-10 -mt-16 mb-[-8rem] px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        className="relative w-full rounded-3xl overflow-hidden backdrop-blur-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0.15) 50%, rgba(255, 255, 255, 0.04) 100%)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0.5px 0 rgba(255, 255, 255, 0.15)',
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
          }}
        />
        <GridPattern />
        <BottomGlow />
        <div className="relative px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center z-10">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The <span className="relative inline-block">
              <span className="relative z-10">all-in-one</span>
              <span className="absolute inset-0 bg-[#6ad4f2]/20 rounded-full blur-sm scale-110"></span>
            </span> platform to{' '}
            <span className="relative">
              <span className="text-[#6ad4f2]">manage</span>
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#6ad4f2]"></span>
            </span>{' '}
            your policies,{' '}
            <span className="relative">
              <span className="text-[#6ad4f2]">track</span>
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#6ad4f2]"></span>
            </span>{' '}
            commissions, and{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#6ad4f2]">grow</span>
              <span className="absolute inset-0 border-2 border-[#6ad4f2]/40 rounded-full scale-125"></span>
            </span>{' '}
            your book of business.
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From <span className="text-[#6ad4f2] font-medium">lead</span> to{' '}
            <span className="text-[#6ad4f2] font-medium">issue paid</span>,{' '}
            <span className="relative inline-block">
              <span className="font-semibold text-white">Closio</span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6ad4f2]"></span>
            </span>{' '}
            streamlines every step of your insurance workflow.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default OverlappingBanner;
