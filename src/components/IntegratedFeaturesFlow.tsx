import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { title: 'Dashboard', path: '/features/dashboard' },
  { title: 'Commission', path: '/features/commission' },
  { title: 'Leaderboard', path: '/features/leaderboard' },
  { title: 'Book of Business', path: '/features/book-of-business' }
];

export default function IntegratedFeaturesFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-40 md:py-48 lg:py-56 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="relative mb-32 md:mb-40"
            style={{ perspective: '1000px' }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -30, rotateX: 45 }}
                  animate={isInView ? {
                    opacity: 1 - (index * 0.15),
                    y: index * -20,
                    rotateX: 45 - (index * 5)
                  } : {
                    opacity: 0,
                    y: -30,
                    rotateX: 45
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + (index * 0.1),
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="absolute inset-0 rounded-[32px] border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,${0.08 - index * 0.015}) 0%, rgba(255,255,255,${0.03 - index * 0.008}) 100%)`,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: `
                      inset 0 1px 0 0 rgba(255,255,255,${0.15 - index * 0.03}),
                      0 20px 40px -10px rgba(0,0,0,${0.3 + index * 0.1})
                    `,
                    transformStyle: 'preserve-3d',
                    zIndex: 10 - index
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[32px]"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, rgba(255,255,255,${0.12 - index * 0.03}), transparent 60%)`
                    }}
                  />
                </motion.div>
              ))}

              <div
                className="absolute -inset-8 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(106, 212, 242, 0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  zIndex: 0
                }}
              />
            </div>
          </motion.div>

          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
          >
            <motion.line
              x1="50%"
              y1="35%"
              x2="50%"
              y2="50%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.path
              d="M 50% 50% Q 30% 60%, 22% 75%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.path
              d="M 50% 50% Q 42% 58%, 38% 75%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.path
              d="M 50% 50% Q 58% 58%, 62% 75%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.path
              d="M 50% 50% Q 70% 60%, 78% 75%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 1.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />

            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(106, 212, 242, 0.8)" />
                <stop offset="100%" stopColor="rgba(106, 212, 242, 0.2)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-auto pt-32">
            {features.map((feature, index) => {
              const positions = ['22%', '38%', '62%', '78%'];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    delay: 1.4 + (index * 0.1),
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="flex flex-col items-center gap-4"
                  style={{ position: 'relative' }}
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group hover:border-white/40 transition-all duration-300">
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(106, 212, 242, 0.2), transparent 70%)',
                        filter: 'blur(20px)'
                      }}
                    />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10 h-10 md:w-12 md:h-12 relative z-10"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="rgba(106, 212, 242, 0.6)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="6"
                        stroke="rgba(106, 212, 242, 0.4)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        fill="rgba(106, 212, 242, 0.8)"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="1.5"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <span className="text-white/70 text-sm md:text-base font-medium text-center">
                    {feature.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
