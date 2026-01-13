import { motion } from 'framer-motion';

const PoweredBySection: React.FC = () => {
  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-center overflow-visible">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          style={{
            width: '280px',
            height: '120px',
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
            borderRadius: '16px',
            border: '2px solid rgba(60, 162, 250, 0.3)',
            boxShadow: `
              0 0 30px rgba(60, 162, 250, 0.15),
              0 0 60px rgba(60, 162, 250, 0.1),
              inset 0 2px 4px rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          <div className="absolute inset-0 rounded-[14px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 19px,
                    rgba(60, 162, 250, 0.05) 20px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 19px,
                    rgba(60, 162, 250, 0.05) 20px
                  )
                `,
              }}
            />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Powered By
              </div>
              <div className="text-white text-3xl font-bold tracking-tight">
                CLOSIO
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(60, 162, 250, 0.6), transparent)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`left-${i}`}
                className="w-3 h-1 rounded-full bg-white/20"
                animate={{
                  backgroundColor: ['rgba(255,255,255,0.2)', 'rgba(60,162,250,0.8)', 'rgba(255,255,255,0.2)'],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`right-${i}`}
                className="w-3 h-1 rounded-full bg-white/20"
                animate={{
                  backgroundColor: ['rgba(255,255,255,0.2)', 'rgba(60,162,250,0.8)', 'rgba(255,255,255,0.2)'],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2 + 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>

        <svg
          className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none"
          width="1000"
          height="200"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="beam-gradient-left">
              <stop offset="0%" stopColor="rgba(106, 212, 242, 0.8)" />
              <stop offset="100%" stopColor="rgba(106, 212, 242, 0)" />
            </linearGradient>
            <linearGradient id="beam-gradient-center" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(60, 162, 250, 0.8)" />
              <stop offset="100%" stopColor="rgba(60, 162, 250, 0)" />
            </linearGradient>
            <linearGradient id="beam-gradient-right">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M 360 0 L 180 0 L 180 180"
            stroke="url(#beam-gradient-left)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          />

          <motion.line
            x1="500"
            y1="0"
            x2="500"
            y2="180"
            stroke="url(#beam-gradient-center)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          />

          <motion.path
            d="M 640 0 L 820 0 L 820 180"
            stroke="url(#beam-gradient-right)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.7, ease: 'easeOut' }}
          />

          <motion.circle
            cx="180"
            cy="180"
            r="4"
            fill="rgba(106, 212, 242, 0.8)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 2.0 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite',
            }}
          />

          <motion.circle
            cx="500"
            cy="180"
            r="4"
            fill="rgba(60, 162, 250, 0.8)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.8 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite',
            }}
          />

          <motion.circle
            cx="820"
            cy="180"
            r="4"
            fill="rgba(255, 255, 255, 0.6)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 2.2 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite',
            }}
          />

          <motion.circle
            r="2"
            fill="rgba(106, 212, 242, 0.6)"
            initial={{ opacity: 0 }}
            animate={{
              offsetDistance: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
            style={{
              offsetPath: 'path("M 360 0 L 180 0 L 180 180")',
            }}
          />

          <motion.circle
            cx="500"
            cy="0"
            r="2"
            fill="rgba(60, 162, 250, 0.6)"
            initial={{ opacity: 0 }}
            animate={{
              cy: [0, 180],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 2.4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
          />

          <motion.circle
            r="2"
            fill="rgba(255, 255, 255, 0.6)"
            initial={{ opacity: 0 }}
            animate={{
              offsetDistance: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 2.7,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
            style={{
              offsetPath: 'path("M 640 0 L 820 0 L 820 180")',
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default PoweredBySection;
