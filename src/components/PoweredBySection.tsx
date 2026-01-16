import { motion } from 'framer-motion';
import { useRef } from 'react';

const PoweredBySection: React.FC = () => {
  const chipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full py-24 flex flex-col items-center justify-center overflow-visible">
      <div className="relative">
        {/* SVG Lines and Connections */}
        <svg
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '-200px',
            transform: 'translateX(-50%)',
            width: '1400px',
            height: '400px',
            overflow: 'visible',
          }}
        >
          <defs>
            <linearGradient id="lineGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="30%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.5)" />
            </linearGradient>
            <linearGradient id="lineGradientHorizontalLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.5)" />
            </linearGradient>
            <linearGradient id="lineGradientHorizontalRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.5)" />
            </linearGradient>
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Center vertical line going down to chip */}
          <motion.line
            x1="700"
            y1="0"
            x2="700"
            y2="200"
            stroke="url(#lineGradientVertical)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#lineGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          />

          {/* Horizontal line extending left with fade */}
          <motion.line
            x1="700"
            y1="80"
            x2="100"
            y2="80"
            stroke="url(#lineGradientHorizontalLeft)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#lineGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          />

          {/* Horizontal line extending right with fade */}
          <motion.line
            x1="700"
            y1="80"
            x2="1300"
            y2="80"
            stroke="url(#lineGradientHorizontalRight)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#lineGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          />

        </svg>

        {/* Main Chip Container - 2.5x wider */}
        <motion.div
          ref={chipRef}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          style={{
            width: '700px',
            height: '140px',
            background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: `
              0 0 40px rgba(255, 255, 255, 0.08),
              0 0 80px rgba(255, 255, 255, 0.04),
              0 20px 60px rgba(0, 0, 0, 0.5),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -1px 1px rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 rounded-[19px] overflow-hidden opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 24px,
                    rgba(255, 255, 255, 0.03) 25px
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 24px,
                    rgba(255, 255, 255, 0.03) 25px
                  )
                `,
              }}
            />
          </div>

          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-12 z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="text-sm font-semibold tracking-[0.25em] text-gray-300/90 uppercase">
                Powered By Closio
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                <span className="text-gray-400">/ Core </span>
                <motion.span
                  initial={{ backgroundImage: 'linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255))' }}
                  whileInView={{ backgroundImage: 'linear-gradient(to right, rgb(168, 85, 247), rgb(255, 255, 255))' }}
                  viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="bg-clip-text text-transparent"
                >
                  Features
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Side connector pins - left */}
          <div className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                className="h-1.5 w-4 rounded-full bg-gradient-to-r from-white/20 to-white/40"
                style={{
                  boxShadow: '0 0 12px rgba(255, 255, 255, 0.3), inset 0 0 4px rgba(255, 255, 255, 0.2)'
                }}
              />
            ))}
          </div>

          {/* Side connector pins - right */}
          <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                className="h-1.5 w-4 rounded-full bg-gradient-to-l from-white/20 to-white/40"
                style={{
                  boxShadow: '0 0 12px rgba(255, 255, 255, 0.3), inset 0 0 4px rgba(255, 255, 255, 0.2)'
                }}
              />
            ))}
          </div>

          {/* Grid pattern on sides only, with smooth blend */}
          <div 
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px]"
            style={{
              maskImage: 'linear-gradient(to right, black 0%, black 12%, transparent 25%, transparent 75%, black 88%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 12%, transparent 25%, transparent 75%, black 88%, black 100%)',
            }}
          >
            <svg width="100%" height="100%" className="opacity-30">
              <defs>
                <pattern id="grid-pattern-sides" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern-sides)" />
            </svg>
          </div>

          {/* Inner glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[20px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PoweredBySection;
